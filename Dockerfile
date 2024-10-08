# Dockerfile

# Use a more recent Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the dependency files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Expose the development port
EXPOSE 8081

# Default command to start the application in web mode
CMD ["npm", "run", "web"]
