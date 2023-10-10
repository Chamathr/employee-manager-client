# Use the official Node.js image as base
FROM node:18

#Optimize the installation of Node.js packages 
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

#Install globle dependancies
RUN npm i -g typescript

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 3000

# Set the start command
CMD ["npm", "start"]
