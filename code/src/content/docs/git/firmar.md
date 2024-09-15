---
title: Firmar los commits 
description: Como configurar la firma de los commits
---

### Antes de Empezar

- Asegúrate de que GPG esté instalado en tu sistema.
  - En **Windows**, descarga Gpg4win desde https://gpg4win.org/download.html e instálalo siguiendo las instrucciones del instalador. (Este programa es recomendado directamente de la guía de github)

### Generación de tu clave GPG

1. **Genera una Nueva clave GPG:**

   - En la Terminal, escribe `gpg --full-generate-key` y presiona **Enter**.
   - Sigue las instrucciones en pantalla:
     1. **Tipo de clave:** Selecciona RSA para la clave y presiona **Enter**.
     2. **Tamaño de la clave:** Selecciona o escribe `4096` y presiona **Enter**.
     3. **Duración de la clave:** Selecciona que la clave nunca expire y presiona **Enter**.
     4. **Confirmación:** Confirma los detalles presionando `y` y luego **Enter**.
     5. **Información Personal:** Ingresa tu `Nombre_Completo` y correo electrónico y no añadas ningún comentario.
     6. **Contraseña de la clave:** Establece una contraseña segura y recuérdala.

2. **Espera a que el proceso de generación se complete.**

### Configuración de Git para usar tu clave GPG

1. **Lista tus claves GPG y encuentra el ID de tu nueva clave:**

   - Escribe `gpg --list-secret-keys --keyid-format=long` y anota el **ID** de la clave que sigue a `rsa4096/` sin incluirlo.

2. **Exporta tu clave Pública GPG:**

   - Escribe `gpg --armor --export CLAVE_RECIEN_COPIADA` y copia toda la clave desde `-----BEGIN PUBLIC KEY-----` hasta `-----END PUBLIC KEY-----`. (Reemplaza `CLAVE_RECIEN_COPIADA` con tu ID de clave GPG.)
   - Ve a **GitHub > Settings > SSH and GPG keys > Bew GPG key** y pega tu **clave** pública GPG. Pusla  **Add GPG key**.
     :::danger
      Si ya tienes una clave instalada y la eliminas, se invalidara todos los commits
      firmados con esa clave. Varias claves pueden convivir.
     :::


3. **Configura Git para Usar tu clave GPG al Firmar Commits:**

   - Escribe `git config --global user.signingkey CLAVE_RECIEN_COPIADA` y ejecuta. (Sustituye `CLAVE_RECIEN_COPIADA` con tu **ID** de clave GPG.)

### Configuración Final de Git

- Configura tu nombre y correo electrónico en Git:
  - Reemplaza `"Nombre_Completo"` y `"MAIL"` con tu nombre y correo electrónico definidos con anterioridad.
  - Ejecuta los comandos:
    - `git config --global user.name Nombre_Completo`
    - `git config --global user.email MAIL`
- Configura Git para Firmar Automáticamente tus Commits con GPG:
   - En la misma Terminal, escribe `git config --global commit.gpgsign true` y presiona **Enter**.

### Solución de Problemas
- Revisa `.gitconfig` en tu directorio home si experimentas problemas.
- Deberas de eliminar la carpeta .git en antiguos repositorios ya que contendrá antiguas firmas.
- Variable `gpg.program`. Si Git no encuentra GPG, configura la ruta con `git config --global gpg.program ruta/a/gpg`.
- Asegúrate de que el email de Git coincida con el email de tu clave GPG y cuenta de GitHub.
- Usa `git log --show-signature` para verificar firmas de commits.
