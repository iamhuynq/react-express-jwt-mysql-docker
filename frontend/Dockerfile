FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install -g react-scripts
RUN npm install

# Copy app source code
COPY . .

# Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]