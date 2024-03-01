# Event Management API

## Descripción

API de gestión de eventos construida con Express.js y MySQL. Permite a los usuarios crear, listar, obtener, actualizar y eliminar eventos.

## Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- Node.js
- npm (gestor de paquetes para Node.js)
- MySQL

## Configuración

1. Clona este repositorio en tu máquina local.
2. Navega hasta la carpeta del proyecto.
3. Copia el archivo `.env.example` a un nuevo archivo llamado `.env`.
4. Edita el archivo `.env` con tus credenciales de MySQL y otros ajustes relevantes:

    ```env
    DB_HOST=localhost
    DB_USER=mi_usuario
    DB_PASSWORD=mi_contraseña
    DB_DATABASE=mi_base_de_datos
    DB_PORT=3306
    PORT=3000
    ```

5. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

## Ejecutar la Aplicación

Para iniciar el servidor en modo desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
# express_test
