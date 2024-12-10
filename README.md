# MathWorks
This is a web calculator.
## Installation
Clone the repo: 
```
git clone git@github.com:ErinYCen/mathworks.git
```
## Repo Layout
- ./frontend -> Vue Frontend
- ./backend -> Express Backend
## Frontend Setup
```
cd frontend
npm install
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
## Backend Setup
```
cd backend
npm install
npm run start
```
### Run the unit test for the backend
```
cd backend/tests
npm run test
```
## Run the MathWorks  with Docker Compose
1. Install Docker from Docker's official website
2. Check if it's installed properly
```
docker --version
```
3. Run the docker app
4. Run the MathWorks with Docker Compose
```
docker-compose up --build
```
## To access the frontend
To run the calculator, open your browser and go to `http://localhost:8080`.
## Technologies Used
- Vue.js
- Node.js
- Express
- TypeScript
