# Use Node.js version 14 as base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /strider_kart

# Copy package.json and package-lock.json (if available) to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app using Nest CLI
CMD ["npm", "run", "start"]
