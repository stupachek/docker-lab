# docker-lab
Dockerizing a Node.js web app 

### history ###

` docker build . -t stupachek/nodejs-app ` -  збираємо Docker image

` docker run -p 8080:80 --memory="1g" --cpus="1.0" --name lab-docker  stupachek/nodejs-app ` - запускаємо контейнер з обмеженнями по cpu та memory  на 80 порту

 ` docker login ` - залогінитись в docker hub 
 
 ` docker push stupachek/nodejs-app ` - запушити image
 
 https://hub.docker.com/u/stupachek
