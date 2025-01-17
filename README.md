# Maternal Health Monitoring App 

## Aim: 
To develop a mobile app that enables mothers to track key health metrics and receive alerts if they are at risk of complications.
## Objectives:
Design an intuitive interface for recording and visualizing health data (e.g., blood pressure, heart rate).
Implement risk analysis algorithms to alert users of potential health issues.
Integrate a map feature to locate nearby maternal wards.
Analyse maternal mortality data to inform app features and provide insights

## Problem: 
Maternal health complications, such as high blood pressure and heart rate irregularities, can lead to severe outcomes, including maternal mortality. 
Early detection and regular monitoring can help mitigate risks.

## Importance: 
Addressing maternal health risks is vital to improve pregnancy outcomes, reduce maternal mortality rates, and support mothers' overall well-being. 
Mothers tend to be neglected when it comes to pregnancy health and the focus is pushed more towards the baby, 

## Beneficiaries: 
Pregnant women
Healthcare providers
Maternal care facilities (NHS and private).

## Features
- **Health Metric Tracking: Track important metrics like blood pressure, heart rate, weight, and more to monitor maternal health.
- **Real-time Alerts: Receive notifications if health metrics indicate a high-risk situation (e.g., preeclampsia or gestational diabetes).
- **Maternal Ward Locator: Find nearby maternal wards, including NHS and private hospitals, using an interactive map feature.
- **Data Analysis: Analyze health trends over time to provide insights into overall maternal health.
- **User-friendly Interface: Intuitive design that is easy for expecting mothers to navigate.

## Tech Stack
- **Frontend: React Native
- **Backend: Node.js, Express
- **Database: MongoDB
- **Mapping API: Google Maps API (for maternal ward locator)
- **Notification System: Firebase Cloud Messaging
Installation

To run the app locally, follow the steps below:

### Prerequisites
- **Node.js
- **npm (Node Package Manager)
- **MongoDB (for backend)

### Steps
1.Clone the repository:
```bash
git clone https://github.com/your-username/maternal-health-app.git 
```

2.Navigate to the project directory:

```bash
cd maternal-health-app
```
3. Install the dependencies:

```bash

npm install
```
4. Set up MongoDB locally or use MongoDB Atlas for cloud hosting.

5. Update your environment variables (.env) with MongoDB URI and Firebase credentials.

6. Start the backend server:

```bash
npm start
```

To run the React Native app, follow the platform-specific steps:

### For iOS:

```bash
npx react-native run-ios
```

### For Android:

``` bash
npx react-native run-android
```

### Usage
1. Open the app on your device or emulator.
2. Register and set up your profile.
3. Start logging your health metrics such as blood pressure, heart rate, and weight.
4. Receive alerts when any metric crosses a threshold indicating a potential risk.
5. Use the Maternal Ward Locator to find nearby hospitals offering maternal services.

### Contributing
1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-name).
5. Create a new Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
The app was inspired by the need for accessible maternal healthcare tools.
Special thanks to Dr Wei Li for providing guidance on the project.
