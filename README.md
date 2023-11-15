# web-calculator
This is a web-calculator now contains the "0" number. So usable ish.
## Installation
Clone the repo: 
```
git clone git@github.com:Fscrew/web-calculator.git
```
## Repo Layout
./frontend -> Vue Frontend
./backend -> Express Backend
## Project setup
```
npm install
```
### Run the frontend
```
cd frontend/src
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
### Run the backend
```
cd backend
npm run start
```
### Run the unit test for the backend
```
cd backend/tests
npm run test
```
## To access the calculator's frontend
To run the calculator, open your browser and go to `http://localhost:8080`.

## Run the Web Calculator with Docker Compose
1. Install Docker from Docker's official website
2. Check if it's installed properly
```
docker --version
```
3. Run the docker app
4. Run the Web Calculator with Docker Compose
```
docker-compose up --build
```
## Technologies Used
- Vue.js
- Node.js
- Express
- TypeScript
