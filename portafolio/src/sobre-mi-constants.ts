
import { Code2, Triangle, Server, Database, GitBranch } from 'lucide-vue-next';

export const techBadges = [
  { name: 'HTML5', color: 'text-orange-600 bg-orange-50 border-orange-200' },
  { name: 'CSS3', color: 'text-blue-600 bg-blue-50 border-blue-200' },
  { name: 'JavaScript', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { name: 'Vue', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { name: 'SQL', color: 'text-sky-600 bg-sky-50 border-sky-200' },
  { name: 'Phaser', color: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200' },
];

export const highlights = [
  { icon: Code2, text: 'Interfaces responsive con foco en usabilidad' },
  { icon: Triangle, text: 'Componentes dinámicos con Vue' },
  { icon: Server, text: 'Back-end con Supabase' },
  { icon: Database, text: 'Modelado y gestión de bases de datos' },
  { icon: GitBranch, text: 'Git, GitHub y flujo de trabajo ordenado' },
];


export const stats = [
  { value: 'Full Stack', label: 'Frontend + Backend', valueColor: 'text-indigo-600' },
  { value: 'Vue', label: 'Stack principal', valueColor: 'text-emerald-600' },
  { value: 'Phaser', label: 'Motor de juego', valueColor: 'text-fuchsia-600' },
];

export const timeline = [
    {
    date: '2024-2026',
    title: 'Proyectos personales',
    description: 'Portfolio profesional, aplicaciones web, videojuegos y aprendizaje autodidacta.',
  },
  {
    date: '2020-2023',
    title: 'Finalizando DAW',
    description: 'Grado Superior en Desarrollo de Aplicaciones Web y prácticas de empresa Wordpress.',
  },
  {
    date: '2018-2020',
    title: 'Bachillerato de Letras',
    description: 'Estudios de bachillerato con énfasis en letras y humanidades.',
  },
];
