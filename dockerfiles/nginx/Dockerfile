###############################################################################
# Step 1 : Run Npm /install
#
# Use node v10.15.0
FROM node:10.15.0 AS builder

WORKDIR /usr/src/app
#COPY yarn.lock .

RUN ls
COPY src src

COPY public public

COPY package.json .
COPY package-lock.json .

COPY tsconfig.json .
RUN ls
RUN npm install
RUN npm run build
RUN ls

###############################################################################


###############################################################################
# Step 2 : Build Server image
#
# Use node v10.15.0
FROM nginx


#COPY dockerfiles/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY dockerfiles/nginx/nginx_default.conf /etc/nginx/conf.d/default.conf

COPY dockerfiles/nginx/proxy.conf /etc/nginx/conf.d/proxy.conf

COPY dockerfiles/nginx/custom.conf /etc/security/limits.d/custom.conf

RUN ulimit -n

WORKDIR /var/www/

COPY --from=builder /usr/src/app/build .
RUN ls

EXPOSE 80