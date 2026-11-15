# Portafolio Digital · Angel Julian Cuero Jiménez

Portafolio académico desarrollado con **Angular 20** para presentar cinco proyectos del curso y de la carrera, con acceso a su repositorio de GitHub y a su aplicación desplegada en GitHub Pages.

## Contenido

- Perfil profesional, formación y enfoque de trabajo.
- Habilidades agrupadas por frontend, backend, mobile y arquitectura/DevOps.
- Catálogo filtrable de cinco proyectos con descripción, tecnologías y características.
- Enlaces directos al repositorio y a la demo de cada proyecto.
- Diseño responsive con animaciones y modo de movimiento reducido.

## Proyectos del catálogo

| # | Proyecto | Repositorio | Demo |
|---|----------|-------------|------|
| 1 | Portafolio Digital Angular | [taller-dev-portfolio](https://github.com/Angel-Cuero/taller-dev-portfolio) | [Demo](https://angel-cuero.github.io/taller-dev-portfolio/) |
| 2 | Módulos y Lazy Loading en Angular | [Uceva-Angular-Taller-Modules](https://github.com/Angel-Cuero/Uceva-Angular-Taller-Modules) | [Demo](https://angel-cuero.github.io/Uceva-Angular-Taller-Modules/) |
| 3 | Cliente-Servidor Angular + NodeJS | [Uceva-Angular-NodeJS-Taller-Client-Server](https://github.com/Angel-Cuero/Uceva-Angular-NodeJS-Taller-Client-Server) | [Demo](https://angel-cuero.github.io/Uceva-Angular-NodeJS-Taller-Client-Server/) |
| 4 | Talleres Flutter | [talleres-flutter](https://github.com/Angel-Cuero/talleres-flutter) | [Demo](https://angel-cuero.github.io/talleres-flutter/) |
| 5 | Patrones de Diseño Interactivos | [patrones_de_dise-o](https://github.com/Angel-Cuero/patrones_de_dise-o) | [Demo](https://angel-cuero.github.io/patrones_de_dise-o/) |

## Desarrollo local

```bash
npm install
npm start
```

La aplicación estará disponible en `http://localhost:4200/`.

## Build de producción

```bash
npm run build -- --base-href "/taller-dev-portfolio/"
```

El resultado se genera en `dist/taller-dev-portfolio/browser`.

## CI/CD

El workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) se ejecuta en cada push a `main`:

1. Instala dependencias con `npm ci`.
2. Compila la aplicación Angular con el `base-href` del repositorio.
3. Publica el artefacto en GitHub Pages mediante `actions/deploy-pages`.

## Autor

**Angel Julian Cuero Jiménez**  
Ingeniería de Sistemas · UCEVA  
[GitHub](https://github.com/Angel-Cuero) · [angel.cuero01@uceva.edu.co](mailto:angel.cuero01@uceva.edu.co)
