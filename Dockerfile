# Step1: we build the angular app using the production config
FROM node:22 AS build
# set the working directory
WORKDIR /app
# copy the package.json and package-lock.json files
COPY package*.json ./
# run a clean install of the dependencies
RUN npm ci
# install the angular cli globally
RUN npm install -g @angular/cli

# optional for the javascript support browser
# RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

# copy all the  files
COPY . .
# build the application
RUN npm run build --configuration=production

# Step 2: we use the nginx image to serve the application 
FROM nginx:latest
# copy the build output to replace the default nginx contents
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# copy the build output to replace the default nginx contents
COPY --from=build /app/dist/doctor-appointment/browser /usr/share/nginx/html
# expose port 80
EXPOSE 80

CMD ["nginx","-g","daemon off;"]

#Build : docker build -t demo-nodejs .
#Run : docker run -d -p 8080:80 demo-nodejs
#Compose: docker-compose up -d --build(build and compose)