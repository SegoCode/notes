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

Este proyecto tiene como objetivo migrar mis notas en papel y diversos documentos acumulados desde que comencé a estudiar ingeniería de software. Incluye guías, utilidades y conocimientos específicos que he recopilado a lo largo del tiempo que considero util.

## Features

- SPA con JavaScript mínimo: Construido con Astro.js para lograr una carga rápida.
  
- Despliegue en GitHub Pages: Hosting gratuito y automatizado para facilitar el acceso y la actualización.

- Integración y Despliegue Continuos (CI/CD): onfigurado con GitHub Actions para automatizar pruebas y despliegues.


## Quick Start & Information

Dentro del proyecto de Astro + Starlight, verás las siguientes carpetas y archivos:
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

Starlight busca archivos .md o .mdx en el directorio src/content/docs/. Cada archivo se expone como una ruta basada en su nombre de archivo.

Las imágenes se pueden añadir a src/assets/ e incrustar en Markdown con un enlace relativo.

Los archivos estáticos, como los favicons, se pueden colocar en el directorio public/.

Requiere Node.js instalado en tu sistema y pnpm como gestor de paquetes. Si no lo tienes, puedes instalarlo ejecutando:

```shell
npm install -g pnpm
```

Clona el repositorio:

```shell
git clone https://github.com/SegoCode/notes
```

Instala las dependencias y compila el proyecto:

```shell
pnpm install
```

Ejecución del Entorno de Desarrollo:

```shell
pnpm dev
```

### Available Parameters

Example 1
```shell
example.exe -help
```
*Describes what happens when the help command is executed.*

Example 2
```shell
example.exe -done
```
*Explains the outcome when the done command is used.*

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Download

https://github.com/SegoCode/notes/archive/refs/heads/main.zip

---
<p align="center"><a href="https://github.com/SegoCode/notes/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SegoCode/notes" />
</a></p>
