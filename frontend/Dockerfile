#Official Node.js image as the base
FROM node:14

#Set the working directory inside the container
WORKDIR /src/App.vue

#Copy package.json and package-lock.json
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy the rest of the application source code
COPY . .

#Build the app
RUN npm run build

#Expose the port of the frontend
EXPOSE 8080

#RUn the frontend
CMD ["npm", "run", "serve"]
