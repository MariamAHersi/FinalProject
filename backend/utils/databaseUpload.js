// backend/utils/databaseUpload.js

const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');

class DatabaseUploader {
  /**
   * Upload dataset to MongoDB
   * @param {string} filePath - Path to the data file (CSV or JSON)
   * @param {string} modelName - Name of the MongoDB model to use
   * @param {object} schema - Mongoose schema for the data
   * @returns {Promise<number>} Number of documents inserted
   */
  static async uploadDataset(filePath, modelName, schema) {
    try {
      // Create a dynamic model if it doesn't exist
      const Model = mongoose.models[modelName] || 
                    mongoose.model(modelName, new mongoose.Schema(schema));

      const fileExtension = filePath.split('.').pop().toLowerCase();
      let data = [];

      if (fileExtension === 'json') {
        data = await this.parseJsonFile(filePath);
      } else if (fileExtension === 'csv') {
        data = await this.parseCsvFile(filePath);
      } else {
        throw new Error('Unsupported file format. Please use CSV or JSON.');
      }

      // Insert the documents
      const result = await Model.insertMany(data);
      return result.length;

    } catch (error) {
      console.error('Error uploading dataset:', error);
      throw error;
    }
  }

  /**
   * Parse JSON file
   * @param {string} filePath 
   * @returns {Promise<Array>}
   */
  static parseJsonFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) reject(err);
        try {
          const jsonData = JSON.parse(data);
          resolve(Array.isArray(jsonData) ? jsonData : [jsonData]);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  /**
   * Parse CSV file
   * @param {string} filePath 
   * @returns {Promise<Array>}
   */
  static parseCsvFile(filePath) {
    return new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error));
    });
  }
}

module.exports = DatabaseUploader;