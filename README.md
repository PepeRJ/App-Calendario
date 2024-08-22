# Calendario 📅

**Descripción:**

Esta aplicación ha sido desarrollada como una Single Page Application (SPA) utilizando Angular18, permitiendo una experiencia de usuario rápida y dinámica. La funcionalidad de autenticación y autorización se ha implementado con Auth0, permitiendo a los usuarios iniciar sesión con su cuenta de Google. Esto ofrece un excelente entorno para practicar el uso de guards en Angular, los cuales controlan el acceso a ciertas rutas dependiendo del estado de autenticación del usuario.

El sistema de calendario ha sido creado utilizando lógica personalizada apoyada en los métodos de fecha de JavaScript. Esto permite identificar correctamente el día actual y facilita la selección de otras fechas. La aplicación utiliza el LocalStorage del navegador para guardar los datos, asegurando así que los usuarios puedan gestionar sus tareas de manera persistente. Es ideal para planificar deberes y tareas, manteniendo un registro claro de las fechas seleccionadas y permitiendo una organización efectiva.

## Características

- Inicio de sesión con Google usando Auth0.
- Control de acceso a rutas mediante guards de Angular.
- Calendario interactivo construido con lógica personalizada.
- Almacenamiento de datos de tareas en LocalStorage para persistencia.
- Organización y planeación de deberes y tareas con facilidad.

## Prueba la Aplicación

Puedes probar el calendario (en la prueba, he quitado la autenticación, para no tener que loguearse) en el siguiente enlace: [Planificador de Tareas](#).

## Requisitos

- Node.js
- Angular CLI

## Instalación

1. **Clona este repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repositorio.git
    cd nombre-del-repositorio
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

## Uso

1. Ejecuta la aplicación Angular:

    ```bash
    ng serve -o
    ```

   Esto abrirá la aplicación en `http://localhost:4200/`.

## Contacto

Para más información o preguntas, puedes contactarme en [tu-email@dominio.com](mailto:tu-email@dominio.com).
