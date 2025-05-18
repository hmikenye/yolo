# Use Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
