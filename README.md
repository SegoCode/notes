# notes

<h3 align="center"><img src="media/demo.png"></h3>

<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#quick-start--information">Quick Start & Information</a> •
  <a href="#download">Download</a> 
</p>

## About
[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build) [![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build) 

Este proyecto tiene como objetivo migrar mis notas en papel y diversas notas acumulados desde que comencé a estudiar ingeniería de software. Incluye guías, utilidades y conocimientos específicos que he recopilado a lo largo del tiempo que considero util.

## Features

- SPA con JavaScript mínimo, construido con Astro.js para lograr una carga rápida.
  
- Despliegue en GitHub Pages y automatizado para facilitar el acceso y la actualización.

- Integración y Despliegue Continuos (CI/CD) configurado con GitHub Actions para automatizar pruebas y despliegues.


## Quick Start & Information

En `./code` verás las siguientes carpetas y archivos:
```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight busca archivos .md o .mdx en el directorio `src/content/docs/` cada archivo se expone como una ruta basada en su nombre de archivo. Las imágenes se pueden añadir a `src/assets/` e incrustar en Markdown con un enlace relativo. Los archivos estáticos, como los favicons, se pueden colocar en el directorio `public/`.

Para poder iniciar el proyecto necesitas Node.js instalado en tu sistema y pnpm como gestor de paquetes. Sigue los siguientes pasos

```shell
npm install -g pnpm
```

Clona el repositorio:

```shell
git clone https://github.com/SegoCode/notes
cd code
```

Instala las dependencias y compila el proyecto:

```shell
pnpm install
```

Ejecución del entorno de desarrollo:

```shell
pnpm dev
```

## Download

https://github.com/SegoCode/notes/archive/refs/heads/main.zip

---
<p align="center"><a href="https://github.com/SegoCode/notes/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SegoCode/notes" />
</a></p>
