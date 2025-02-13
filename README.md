# Patient Management System

This project is a Node.js application that utilizes MongoDB and Mongoose to manage patient records. It supports adding, updating, and querying patients along with their heart rate data. The application also provides an API for managing patients' health data.

## Features
- **Patient Management**: Add, update, and view patient details.
- **Heart Rate Tracking**: Track heart rate readings for each patient.
- **Patient Information**: Store patient details such as name, age, gender, place, and maintainer.
- **API Endpoints**: A REST API to interact with the patient data.

## Requirements
- Node.js (>= 14.x)
- MongoDB
- npm (or Yarn)

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/vasanth/JanitriAssignment.git
    ```

2. **Navigate into the project folder**:

    ```bash
    cd "To main folder"
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

## Running the Application

To run the server in development mode, use the following command:

```bash
npm start
```

## Routes

### Users

## Register user

http://localhost:3000/user/signup (method: POST)

Example request body:
```json
{
    "name": "Vasanth",
    "email": "vasanth@example.com",
    "password": "vasanth123"
}
```

http://localhost:3000/user/login (method: GET)

Example request body:
```json
{
    "email": "vasanth@example.com",
    "password": "vasanth123"
}
```

### Patients

## Add patient

http://localhost:3000/patient/patients (method: POST)

Example request body:
```json
{
    "username" : "Vasanth",  
    "name": "vasanth",       
    "heartRate": [
      { "time": "2024-02-10T08:35:00Z", "value": 78 }
    ],
    "gender": "Male",
    "age": 14,
    "maintainer": "Vasanth"
}
```

## Get All Patients

http://localhost:3000/patient/patients (method: GET)

Example request body:
```json
{
     "username": "Vasanth"
}
```

## Update patient

http://localhost:3000/patient/update/:id (method: POST)

Example:
```bash
```

Example request body:
```json
{
    "username" : "Vasanth",
    "name": "Allen Doe",
    "admitDate": "2025-02-10T08:30:00Z",
    "heartRate": [
      { "time": "2025-02-10T011:30:00Z", "value": 80 },
      { "time": "2025-02-10T12:00:00Z", "value": 90 },
      { "time": "2025-02-10T01:30:00Z", "value": 70 },
      { "time": "2025-02-10T02:30:00Z", "value": 60 }
    ],
    "gender": "Male",
    "age": 38,
    "maintainer": "Vasanth"
}
```

## Get patient by ID

http://localhost:3000/patient/patients/:id (method: GET)

Example request body:
```json
{
    "username" : "Vasanth"
}
```

## Delete patient by ID

http://localhost:3000/patient/delete/:id (method: POST)

Example request body:
```json
{
    "username" : "Vasanth"
}
```

