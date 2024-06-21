# Utiliza una imagen base de Node.js versión 20
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto 3000 para la aplicación Express
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
