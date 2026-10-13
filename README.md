🌐 MisterDatos - Official Website
Bienvenido al repositorio oficial de MisterDatos. Este proyecto es el hogar de mi sitio web personal, un espacio donde convergen el diseño cyberpunk/steampunk, mi contenido como streamer y mis proyectos de desarrollo.

🚀 Sobre el Proyecto
Este sitio está construido utilizando Astro, enfocado en la velocidad y la optimización de contenido. Sirve como centro de mando para mi comunidad, integrando:

✍️ Blog Personal: Artículos sobre tecnología, desarrollo y vivencias.

🎮 Streaming: Información actualizada sobre mis directos en Twitch.

🎨 Proyectos: Espacio dedicado a PixVox y otras iniciativas creativas.

🔗 Social Hub: Acceso rápido a todas mis redes sociales.

🛠️ Tecnologías Utilizadas
Framework: Astro

Lenguajes: JavaScript, HTML5, CSS3

Despliegue: GitHub Pages

Estilos: Diseño personalizado con paleta de colores Purple, Black, White & Salmon Pink.

## Galería Fanart

La galería se publica como parte estática del sitio. Las obras se revisan antes
de agregarse y sus imágenes se sirven desde ImgBB. No se necesita backend ni
guardar los archivos de imagen dentro del repositorio.

1. Confirma con el artista que autoriza mostrar la obra y cómo quiere aparecer acreditado.
2. Sube la obra a [ImgBB](https://imgbb.com/). Si aparece una opción para
   eliminar la imagen automáticamente, configúrala para que no expire.
3. Después de subirla, copia el **Enlace directo / Direct link** de la imagen.
   Debe ser una URL de imagen que termine en una extensión como `.jpg`,
   `.png` o `.webp` (por ejemplo, `https://i.ibb.co/abc123/mi-dibujo.webp`),
   no el enlace de la página de ImgBB ni el código HTML de inserción.
4. Agrega una entrada a `src/data/fanart.ts`:

   ```ts
   {
     title: "MisterFurry",
     artist: "Bumblebee Art",
     artistSocialUrl: "https://www.instagram.com/usuario/",
     imageUrl: "https://i.ibb.co/abc123/mi-dibujo.webp",
     alt: "Dibujo de MisterFurry por Bumblebee Art",
     date: "2026-10-13",
   }
   ```

   `date` es opcional y usa el formato `AAAA-MM-DD`. Mantén `title`, `artist`,
   `imageUrl` y `alt` en cada obra. `artistSocialUrl` también es opcional: si
   se proporciona la URL pública de la red social del artista, aparecerá un
   botón “Redes” abajo a la derecha de su tarjeta.
5. Abre la URL directa en una ventana privada para confirmar que carga la
   imagen sin iniciar sesión.
6. Guarda y despliega los cambios del sitio. La galería se actualiza junto con
   el siguiente despliegue.

ImgBB es un servicio externo gratuito con sus propias condiciones y límites;
el sitio depende de que las URL directas sigan disponibles. Guarda una copia
de las obras originales y confirma el permiso del artista antes de publicarlas.
