import { ProfileLink, Project, SkillGroup } from '../models/project';

export const STUDENT = {
  name: 'Angel Julian Cuero Jiménez',
  role: 'Desarrollador Full Stack | Estudiante de Ingeniería de Sistemas',
  university: 'Unidad Central del Valle del Cauca (UCEVA)',
  semester: 'Octavo semestre',
  location: 'Tuluá, Valle del Cauca, Colombia',
  summary:
    'Estudiante de Ingeniería de Sistemas apasionado por la arquitectura de software, el desarrollo web y la automatización de despliegues. Construyo aplicaciones con Angular, Node.js, Java y Flutter, aplicando buenas prácticas de diseño, pruebas y CI/CD.',
  focus:
    'Mi enfoque actual es la construcción de aplicaciones escalables y mantenibles, con arquitecturas limpias, componentes reutilizables y pipelines que automatizan la entrega continua.',
};

export const PROFILE_LINKS: ProfileLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/Angel-Cuero',
    icon: 'github',
  },
  {
    label: 'Correo',
    url: 'mailto:angel.cuero01@uceva.edu.co',
    icon: 'mail',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    skills: ['Angular 20', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS / CSS3', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'APIs REST', 'Eureka'],
  },
  {
    title: 'Mobile',
    icon: 'device',
    skills: ['Flutter', 'Dart', 'Firebase', 'go_router'],
  },
  {
    title: 'Arquitectura y DevOps',
    icon: 'layers',
    skills: [
      'Microfrontends',
      'Microservicios',
      'Patrones de diseño',
      'Git & GitHub',
      'GitHub Actions',
      'CI/CD',
    ],
  },
];

export const STATS = [
  { value: '5', label: 'proyectos desplegados' },
  { value: '5', label: 'pipelines CI/CD' },
  { value: '10', label: 'patrones de diseño' },
  { value: '100%', label: 'GitHub Pages' },
];

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    number: '01',
    title: 'Portafolio Digital Angular',
    category: 'Angular',
    description:
      'Catálogo centralizado de proyectos con perfil profesional, habilidades, filtros y accesos directos a cada repositorio y aplicación desplegada.',
    longDescription:
      'Aplicación Angular standalone que reúne la trayectoria académica y los proyectos del curso. Incluye perfil profesional, catálogo filtrable, diseño responsive y un pipeline de GitHub Actions que construye y publica automáticamente en GitHub Pages.',
    technologies: ['Angular 20', 'TypeScript', 'SCSS', 'GitHub Actions', 'GitHub Pages'],
    features: [
      'Perfil profesional y stack tecnológico',
      'Catálogo filtrable por categoría',
      'Enlaces a repositorio y demo de cada proyecto',
      'Diseño responsive con animaciones CSS',
      'Build y despliegue automático con GitHub Actions',
    ],
    repositoryUrl: 'https://github.com/Angel-Cuero/taller-dev-portfolio',
    demoUrl: 'https://angel-cuero.github.io/taller-dev-portfolio/',
    accent: '#22d3ee',
    icon: 'portfolio',
  },
  {
    id: 'modules',
    number: '02',
    title: 'Módulos y Lazy Loading en Angular',
    category: 'Arquitectura',
    description:
      'Aplicación modular sobre arquitectura de software, principios de diseño y sistemas de diseño, con carga diferida de cada módulo.',
    longDescription:
      'Taller de organización de módulos en Angular. Se crearon módulos independientes para Arquitectura de Software, Principios de Arquitectura y Sistemas de Diseño, conectados mediante lazy loading y una barra de navegación configurable.',
    technologies: ['Angular 20', 'TypeScript', 'SCSS', 'Lazy Loading', 'Jest'],
    features: [
      'Módulos independientes con enrutamiento propio',
      'Carga diferida (lazy loading) por módulo',
      'Componentes de tarjetas y páginas informativas',
      'Configuración centralizada de navegación',
      'Pruebas unitarias con Jest',
    ],
    repositoryUrl: 'https://github.com/Angel-Cuero/Uceva-Angular-Taller-Modules',
    demoUrl: 'https://angel-cuero.github.io/Uceva-Angular-Taller-Modules/',
    accent: '#a78bfa',
    icon: 'modules',
  },
  {
    id: 'client-server',
    number: '03',
    title: 'Cliente-Servidor Angular + NodeJS',
    category: 'Angular',
    description:
      'SPA Angular que consume una API REST en Node.js para gestionar usuarios, productos, cursos, docentes e inscripciones.',
    longDescription:
      'Taller de arquitectura cliente-servidor con un cliente Angular standalone y un servidor Express en TypeScript. La demo publicada utiliza datos simulados para funcionar de forma autónoma en GitHub Pages, manteniendo la misma estructura de servicios e interfaces.',
    technologies: ['Angular 20', 'Node.js', 'Express', 'TypeScript', 'Bootstrap', 'REST API'],
    features: [
      'Cinco módulos de consulta con tablas reutilizables',
      'Servicios HTTP con interceptores',
      'Estados de carga, éxito y error',
      'API REST con Express y TypeScript',
      'Demo estática con datos de ejemplo',
    ],
    repositoryUrl: 'https://github.com/Angel-Cuero/Uceva-Angular-NodeJS-Taller-Client-Server',
    demoUrl: 'https://angel-cuero.github.io/Uceva-Angular-NodeJS-Taller-Client-Server/',
    accent: '#34d399',
    icon: 'client',
  },
  {
    id: 'flutter',
    number: '04',
    title: 'Talleres Flutter: Asincronía y Firebase',
    category: 'Flutter',
    description:
      'Aplicación educativa en Flutter que demuestra navegación, ciclo de vida, futuros, timers, isolates e integración con Firebase.',
    longDescription:
      'Proyecto de la electiva de desarrollo móvil. Cada pantalla explica un concepto de programación asíncrona en Dart y lo demuestra en ejecución, con una versión web publicada mediante GitHub Actions y GitHub Pages.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'go_router', 'GitHub Actions'],
    features: [
      'Navegación con parámetros y go_router',
      'Ciclo de vida de widgets con initState y dispose',
      'Future, async/await y estados de carga',
      'Cronómetro con Timer.periodic',
      'Cómputo pesado con Isolate y Firebase',
    ],
    repositoryUrl: 'https://github.com/Angel-Cuero/talleres-flutter',
    demoUrl: 'https://angel-cuero.github.io/talleres-flutter/',
    accent: '#fbbf24',
    icon: 'flutter',
  },
  {
    id: 'patterns',
    number: '05',
    title: 'Patrones de Diseño Interactivos',
    category: 'Arquitectura',
    description:
      'Catálogo web interactivo con diez patrones creacionales, estructurales y de comportamiento, con explicación y demostración en vivo.',
    longDescription:
      'Los ejercicios originales de Deno se transformaron en una aplicación Angular que permite explorar cada patrón, entender el problema que resuelve y ejecutar una demostración interactiva directamente en el navegador.',
    technologies: ['Angular 20', 'TypeScript', 'SCSS', 'Deno', 'Patrones de diseño'],
    features: [
      '10 patrones agrupados por categoría',
      'Demostraciones interactivas en el navegador',
      'Explicación del problema y de la solución',
      'Filtros por tipo de patrón',
      'Código original en TypeScript para Deno',
    ],
    repositoryUrl: 'https://github.com/Angel-Cuero/patrones_de_dise-o',
    demoUrl: 'https://angel-cuero.github.io/patrones_de_dise-o/',
    accent: '#f472b6',
    icon: 'patterns',
  },
];
