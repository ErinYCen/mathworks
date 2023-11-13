# Use official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the backend dependencies
RUN npm install

#Copy the entire backend source code to the container
COPY . .

# Expose the port for the backend
EXPOSE 3000

# Start the backend server
CMD ["npm", "run", "start"]
