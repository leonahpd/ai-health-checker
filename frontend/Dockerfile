FROM node:20

WORKDIR /app

# Copy only package files first (best practice)
COPY package*.json ./

RUN npm install

# Then copy rest of files
COPY . .

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]
