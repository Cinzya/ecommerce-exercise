FROM node:22 AS build

#set working directory
WORKDIR /usr/src/app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm ci

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production
RUN npm run build

#deployment stage
FROM nginx:stable-alpine

#remove default nginx configuration file
RUN rm -rf /etc/nginx/conf.d/default.conf

#copy nginx configuration file
COPY nginx.conf /etc/nginx/conf.d

#copy build files to nginx server
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

#expose port 8080
EXPOSE 8080

#run nginx
CMD ["nginx", "-g", "daemon off;"]