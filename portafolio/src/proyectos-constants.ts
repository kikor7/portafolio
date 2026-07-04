import proyectoImg from '@/assets/img/JapaneseLearningProject.webp'
import proyectoBurbujasJapo from '@/assets/img/BurbujasJapo.webp'
export const proyectos = [
  {
    titulo: 'Plataforma de Noticias Japonesas',
    descripcion: 'Aplicación web diseñada para facilitar leer noticias de Japón. Incluye integración con la API de YouTube para contenido multimedia, sistema de autenticación de usuarios y una landing page optimizada.',
    imagen: proyectoImg,
    tecnologias: ['Vue.js', 'Tailwind CSS', 'YouTube API', 'Autenticación', 'SupaBase'],
    linkDemo: 'https://japanese-learning-project.vercel.app',
    linkRepo: 'https://github.com/kikor7/japanese-learning-project'
  },

   {
    titulo: 'Videojuego de atrapar burbujas',
    descripcion: 'Juego interactivo donde los jugadores deben atrapar burbujas antes de que se escape. Incluye mecánicas de juego dinámicas, sistema de puntuación y diseño caricaturesco.',
    imagen: proyectoBurbujasJapo,
    tecnologias: ['Phaser.js', 'JavaScript', 'Audio','Animaciones', 'Sprites'],
    linkDemo: 'https://japanese-learning-project.vercel.app/game',
    linkRepo: 'https://github.com/kikor7/japanese-learning-project/tree/main/src/phaser'
  }
];