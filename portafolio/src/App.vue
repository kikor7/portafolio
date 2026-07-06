<script setup lang="ts">
// 1. Importas los componentes desde la carpeta UI de shadcn, NO de radix-vue
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle, // Helper opcional para dar estilo de botón a los links directos
} from '@/components/ui/navigation-menu'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Bot from '@/components/ui/bot/bot.vue'

// Importamos el Button necesario para el disparador del menú hamburguesa
import { Button } from '@/components/ui/button'
// libreria de iconos 
import { Menu } from 'lucide-vue-next'
import { Linkedin, Github, Mail, Send, ArrowUpRight, ExternalLink, Sparkles } from 'lucide-vue-next'
import {
  User,
  Code2,
  Atom,
  Server,
  Database,
  GitBranch,
  FileText,
  Download
} from 'lucide-vue-next';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import ThemeToggle from '@/components/ui/ThemeToggle.vue'

import { ref, type ComponentPublicInstance } from 'vue'
const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}

const emailForm = ref({
  email: '',
  message: ''
});

const enviado = ref(false);

const handleSubmit = () => {
  const asunto = encodeURIComponent('Mensaje desde el portfolio');
  const cuerpo = encodeURIComponent(`Correo: ${emailForm.value.email}\n\n${emailForm.value.message}`);

  window.location.href = `mailto:kiko2002@hotmail.es?subject=${asunto}&body=${cuerpo}`;
  enviado.value = true;
  emailForm.value = { email: '', message: '' };
};

import { techBadges, highlights, stats, timeline } from './sobre-mi-constants'
import { proyectos } from './proyectos-constants'

// Un único objeto para guardar las secciones registradas desde el template
const secciones = ref<Record<string, HTMLElement | null>>({});

const registrarSeccion = (elemento: Element | ComponentPublicInstance | null, clave: string) => {
  if (elemento instanceof HTMLElement) {
    secciones.value[clave] = elemento;
  }
};

const irASeccion = (idSeccion: string) => {
  secciones.value[idSeccion]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};




</script>

<template>
  <header class="sticky top-0 z-50 flex w-full items-center justify-between p-4 border-b bg-white/90 backdrop-blur dark:bg-slate-900/90">
    <div class="font-bold">
      <p>Kikor7 dev</p>
    </div>

    <!-- MENÚ ESCRITORIO: Oculto en móviles con 'hidden' y visible desde pantallas medianas con 'md:flex' -->
    <NavigationMenu class="hidden md:flex">
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuLink href="#inicio" @click.prevent="irASeccion('inicio')" :class="navigationMenuTriggerStyle()">
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#sobre-mi" @click.prevent="irASeccion('sobre-mi')" :class="navigationMenuTriggerStyle()">
            Sobre mí
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#proyectos" @click.prevent="irASeccion('proyectos')" :class="navigationMenuTriggerStyle()">
            Proyectos
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#tecnologias" @click.prevent="irASeccion('tecnologias')" :class="navigationMenuTriggerStyle()">
            Tecnologías
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink @click.prevent="irASeccion('contacto')" href="#contacto"
            :class="[navigationMenuTriggerStyle(), 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 dark:hover:bg-blue-950/70']">
            Contacto
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
    <ThemeToggle />

    <!-- MENÚ MÓVIL (HAMBURGUESA) -->
    <Sheet v-model:open="isOpen">
      <SheetTrigger as-child>
        <!-- El md:hidden asegura que el botón hamburguesa desaparezca en escritorio -->
        <Button variant="outline" size="icon" class="md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" class="w-[300px]  ">
        <SheetHeader>
          <SheetTitle class="text-left font-bold">Kikor7 dev</SheetTitle>
          <SheetDescription class="text-left">Navegación del sitio</SheetDescription>
        </SheetHeader>
        <nav class="flex flex-col gap-4 mt-6 ml-6 justify-center">
          <a href="#inicio" @click.prevent="closeMenu(); irASeccion('inicio')"
            class="text-2xl font-semibold hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#sobre-mi" @click.prevent="closeMenu(); irASeccion('sobre-mi')"
            class="text-2xl font-semibold hover:text-primary transition-colors">
            Sobre mí
          </a>
          <a href="#proyectos" @click.prevent="closeMenu(); irASeccion('proyectos')"
            class="text-2xl font-semibold hover:text-primary transition-colors">
            Proyectos
          </a>
          <a href="#tecnologias" @click.prevent="closeMenu(); irASeccion('tecnologias')"
            class="text-2xl font-semibold hover:text-primary transition-colors">
            Tecnologías
          </a>
          <a href="#contacto" @click.prevent="closeMenu(); irASeccion('contacto')"
            class="text-2xl font-semibold hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  </header>

  <main :ref="(el) => registrarSeccion(el, 'inicio')" id="inicio"
    class="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-start justify-between gap-8 px-4 py-10 transition-colors duration-300">

    <section class="w-full lg:flex-1 bg-white text-slate-900 border border-slate-100 shadow-xl rounded-3xl p-8 md:p-12 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 relative overflow-hidden rounded-3xl bg-white border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl 
         /* 1. Cambiada la rotación hacia la derecha e invertido el eje Z */
         md:[transform:rotateX(6deg)_rotateY(12deg)_rotateZ(-2deg)] 
         hover:[transform:none] 
         /* 2. Trucos anti-desenfoque */
         transform-gpu [backface-visibility:hidden]">

      <div class="mb-6">
        <Badge variant="outline"
          class="border-slate-200 text-slate-600 font-medium px-3 py-1 bg-slate-50 rounded-full text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          Frontend Developer
        </Badge>
      </div>

      <h1
        class="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl text-slate-900 dark:text-white">
        Construyo
        <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">interfaces web </span>
        <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">interactivas</span>
      </h1>

      <div
        class="text-sm font-semibold tracking-wide text-slate-500 uppercase mb-6 flex flex-wrap gap-2 items-center dark:text-slate-400">
        <span>Vue.js</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span>Tailwind CSS</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span>Supabase</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span>JavaScript</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span>Phaser.js</span>
      </div>

      <p class="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed mb-10 dark:text-slate-400">
        Especializado en el ecosistema de Vue, bases de datos Supabase y el desarrollo de experiencias dinámicas e
        interactivas.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">

        <div
          class="bg-slate-50/60 border border-slate-100 rounded-2xl p-4 transition-colors hover:border-slate-200 hover:bg-slate-50 dark:bg-slate-800/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-800">
          <div class="text-lg font-bold text-slate-900 mb-1 dark:text-white">SPA & Portfolio</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">Proyectos listos para producción</div>
        </div>

        <div
          class="bg-slate-50/60 border border-slate-100 rounded-2xl p-4 transition-colors hover:border-slate-200 hover:bg-slate-50 dark:bg-slate-800/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-800">
          <div class="text-lg font-bold text-emerald-600 mb-1 dark:text-emerald-400">Full-Stack Light</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">Backend fluido usando Supabase</div>
        </div>

        <div
          class="bg-slate-50/60 border border-slate-100 rounded-2xl p-4 transition-colors hover:border-slate-200 hover:bg-slate-50 dark:bg-slate-800/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-800">
          <div class="text-lg font-bold text-indigo-600 mb-1 dark:text-indigo-400">Interactive</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">Mini-juegos con Phaser.js</div>
        </div>

      </div>

      <div class="flex flex-wrap items-center gap-4">

        <Button
          @click.prevent="irASeccion('proyectos')"
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 rounded-xl h-11 transition-all group shadow-lg shadow-indigo-600/10">
          Ver proyectos
          <ArrowUpRight
            class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>

        <Button variant="outline"
          class="border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 font-medium px-6 rounded-xl h-11 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
          as-child>
          <a href="#contacto" @click.prevent="irASeccion('contacto')" title="Llamar al +34 648 04 72 79">
            Contactar
          </a>
        </Button>

        <div class="hidden sm:block h-6 w-[1px] bg-slate-200 mx-2 dark:bg-slate-800"></div>

        <div class="flex items-center gap-2">
          <Button variant="outline" size="icon"
            class="rounded-xl border-slate-200 bg-transparent text-slate-600 hover:bg-slate-50 h-11 w-11 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
            as-child>
            <a href="https://www.linkedin.com/in/franciscojosemo/" target="_blank" aria-label="LinkedIn">
              <Linkedin class="h-4 w-4" />
            </a>
          </Button>

          <Button variant="outline" size="icon"
            class="rounded-xl border-slate-200 bg-transparent text-slate-600 hover:bg-slate-50 h-11 w-11 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
            as-child>
            <a href="https://github.com/kikor7" target="_blank" aria-label="GitHub">
              <Github class="h-4 w-4" />
            </a>
          </Button>

          <Button variant="outline" size="icon"
            class="rounded-xl border-slate-200 bg-transparent text-slate-600 hover:bg-slate-50 h-11 w-11 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
            as-child>
            <a href="mailto:kiko2002@hotmail.es" aria-label="Email">
              <Mail class="h-4 w-4" />
            </a>
          </Button>
        </div>

      </div>

    </section>

    <div class="w-full lg:max-w-xl [perspective:1000px] px-4">
      <Card
        class="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl md:[transform:rotateX(6deg)_rotateY(-12deg)_rotateZ(2deg)] hover:[transform:none] dark:bg-slate-900 dark:border-slate-800">

        <a href="https://vuejs.org" target="_blank" class="absolute top-4 left-4 z-20 flex gap-2 cursor-pointer">
          <Badge variant="secondary"
            class="bg-white/80 text-slate-800 hover:bg-[#3ca675] rounded-full px-3 py-1 text-xs font-medium shadow-sm transition-colors dark:bg-slate-900/80 dark:text-white dark:hover:bg-[#3ca675]">
            Vue.js
          </Badge>
        </a>

        <a href="https://supabase.com" target="_blank" class="absolute top-4 right-4 z-20">
          <Badge variant="outline"
            class="bg-white/80 backdrop-blur-md text-slate-800 hover:bg-[#3ca675] border-slate-200 rounded-full px-3 py-1 text-xs font-medium shadow-sm dark:bg-slate-900/80 dark:text-white dark:border-slate-800 dark:hover:bg-[#3ca675]">
            Supabase
          </Badge>
        </a>

        <CardContent class="p-4">
          <div class="group relative block rounded-lg overflow-hidden aspect-video bg-muted">
            <a href="https://japanese-learning-project.vercel.app" target="_blank" rel="noopener noreferrer"
              class="absolute inset-0 z-10 cursor-pointer">
              <img src="./assets/img/JapaneseLearningProject.webp" alt="Vista previa de mi aplicación"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </a>

            <a href="https://github.com/kikor7" target="_blank" rel="noopener noreferrer"
              class="hover:text-indigo-600 transition-colors">
              <div
                class="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-background/90 p-2 rounded-xl border shadow-sm dark:bg-slate-900/90 dark:border-slate-800">
                <Avatar class="h-6 w-6">
                  <AvatarImage src="https://github.com/kikor7.png" alt="Kikor7" />
                  <AvatarFallback>K</AvatarFallback>
                </Avatar>
                <div class="flex flex-col">
                  <span class="text-xs font-semibold dark:text-white">Kikor7 dev</span>
                </div>
              </div>
            </a>

            <div
              class="absolute bottom-4 right-4 z-20 bg-popover text-popover-foreground p-3 rounded-xl shadow-md border max-w-xs pointer-events-none dark:bg-slate-900 dark:border-slate-800">
              <h3 class="text-sm font-bold tracking-tight mb-1.5 dark:text-white">Noticias Japonesas</h3>
              <div class="flex flex-wrap gap-1">
                <Badge variant="secondary" class="text-[9px] px-1 py-0 dark:bg-slate-800 dark:text-slate-300">Login
                </Badge>
                <Badge variant="secondary" class="text-[9px] px-1 py-0 dark:bg-slate-800 dark:text-slate-300">Phaser.js
                </Badge>
                <Badge variant="secondary" class="text-[9px] px-1 py-0 dark:bg-slate-800 dark:text-slate-300">API
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

  </main>

 
  <section :ref="(el) => registrarSeccion(el, 'sobre-mi')" id="sobre-mi" class="scroll-mt-24 min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 py-16 px-4 md:px-8 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/50">
    <div class="max-w-5xl mx-auto space-y-12">

      <div class="space-y-4 max-w-3xl">
        <span
          class="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
          Sobre mí
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Lógica eficiente, diseño cuidado y mentalidad de crecimiento.
        </h1>
        <p class="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          Soy Francisco José Muñoz Oliva, desarrollador junior formado en DAW. Me gusta convertir problemas reales en
          interfaces simples, útiles y bien terminadas.
        </p>
        <p class="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          Me gustaria empezar en este mundillo e ir continuar aprendiendo y creciendo en el mundo profesional.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

        <div class="md:col-span-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-100 shadow-sm p-5 space-y-5">
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden group border border-slate-100 dark:border-slate-800">
            <img src="./assets/img/kiko.jpg" alt="Francisco José Muñoz Oliva"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
          </div>

          <div class="flex flex-wrap gap-2 pt-2">
            <span v-for="tech in techBadges" :key="tech.name"
              :class="['inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors', tech.color]">
              <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-current opacity-70" />
              {{ tech.name }}
            </span>
          </div>
        </div>

        <div class="md:col-span-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-100 shadow-sm p-6 md:p-8 space-y-8">

          <div class="space-y-3">
            <div class="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <component :is="User" class="w-5 h-5 text-slate-400 dark:text-slate-500" />
              <h2 class="text-xl font-bold text-slate-900 dark:text-white tracking-wide">Desarrollador Web Junior</h2>
            </div>
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Trabajo con atención al detalle, código ordenado y una visión práctica del producto.
            </p>
          </div>

          <ul class="space-y-3.5">
            <li v-for="(item, idx) in highlights" :key="idx" class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <component :is="item.icon" class="w-4 h-4 mt-0.5 text-slate-400 dark:text-slate-500 shrink-0" />
              <span>{{ item.text }}</span>
            </li>
          </ul>

          <div class="grid grid-cols-3 gap-3">
            <div v-for="(stat, idx) in stats" :key="idx"
              class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 p-3 text-center space-y-1">
              <div :class="['text-base md:text-lg font-bold', stat.valueColor]">
                {{ stat.value }}
              </div>
              <div class="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">
                {{ stat.label }}
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 justify-end">
            <a href="/Francisco_José_Muñoz_Oliva_Curriculum.pdf" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-xl text-xs font-semibold h-10 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm cursor-pointer">
              <component :is="FileText" class="w-3.5 h-3.5 mr-2 text-slate-400 dark:text-slate-500" />
              Ver CV
            </a>

            <a href="/Francisco_José_Muñoz_Oliva_Curriculum.pdf" download="Francisco_Jose_Munoz_Oliva_CV.pdf"
              class="inline-flex items-center justify-center rounded-xl text-xs font-semibold h-10 px-5 py-2 bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-500 dark:hover:bg-indigo-400 transition-all shadow-[0_4px_12px_rgba(79,70,229,0.2)] dark:shadow-[0_4px_12px_rgba(99,102,241,0.2)] transform hover:-translate-y-0.5 duration-200 cursor-pointer">
              <component :is="Download" class="w-3.5 h-3.5 mr-2" />
              Descargar CV
            </a>
          </div>

          <hr class="border-slate-100 dark:border-slate-800" />

          <div class="space-y-5">
            <div v-for="(item, idx) in timeline" :key="idx" class="flex gap-4 group">
              <div class="flex flex-col items-center pt-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-sm" />
                <div v-if="idx !== timeline.length - 1"
                  class="w-[1px] bg-slate-100 dark:bg-slate-800 grow mt-2 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors" />
              </div>

              <div
                class="flex-1 grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/40 p-3 hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-colors">
                <span class="text-sm font-bold text-slate-400 dark:text-slate-500 pt-0.5">
                  {{ item.date }}
                </span>
                <div class="md:col-span-3 space-y-1">
                  <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wide">
                    {{ item.title }}
                  </h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section :ref="(el) => registrarSeccion(el, 'proyectos')" id="proyectos" class="scroll-mt-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 py-20 px-4 md:px-8 border-t border-slate-200/60 dark:border-slate-800/60 font-sans">
    <div class="max-w-5xl mx-auto space-y-12">
      
      <div class="space-y-4 max-w-3xl">
        <span class="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
          <component :is="Sparkles" class="w-3 h-3 mr-1.5 text-indigo-500" />
          Proyectos
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Cosas que he construido
        </h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          Una selección de mis desarrollos recientes. Enfocados en resolver problemas reales con código limpio y una experiencia de usuario cuidada.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        
        <article 
          v-for="(proyecto, idx) in proyectos" 
          :key="idx"
          class="group relative flex flex-col rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 sm:p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)] cursor-default"
        >
          <div class="relative w-full aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-slate-900 mb-6 border border-slate-100 dark:border-slate-800/50">
            <img 
              :src="proyecto.imagen" 
              :alt="`Captura de pantalla de ${proyecto.titulo}`" 
              class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 transition-opacity duration-500 group-hover:opacity-0"></div>
          </div>

          <div class="flex flex-col flex-1 px-2 sm:px-4 pb-4 space-y-4">
            
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {{ proyecto.titulo }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                {{ proyecto.descripcion }}
              </p>
            </div>

            <div class="flex flex-wrap gap-2 pt-1">
              <span 
                v-for="tech in proyecto.tecnologias" 
                :key="tech"
                class="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex-1"></div>

            <div class="flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a 
                :href="proyecto.linkDemo" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl text-xs font-semibold h-9 px-4 bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition-all shadow-sm cursor-pointer"
              >
                <component :is="ExternalLink" class="w-3.5 h-3.5 mr-2" />
                Ver proyecto
              </a>
              <a 
                :href="proyecto.linkRepo" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl text-xs font-semibold h-9 px-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
              >
                <component :is="Github" class="w-3.5 h-3.5 mr-2" />
                Código
              </a>
            </div>

          </div>
        </article>

      </div>
    </div>
  </section>

  <section :ref="(el) => registrarSeccion(el, 'tecnologias')" id="tecnologias" class="scroll-mt-24 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 py-20 px-4 md:px-8 border-t border-slate-200/60 dark:border-slate-800/60 font-sans">
    <div class="max-w-5xl mx-auto space-y-12">
      <div class="space-y-4 max-w-3xl">
        <span class="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
          <component :is="Code2" class="w-3 h-3 mr-1.5 text-indigo-500" />
          Tecnologías
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Herramientas y tecnologías con las que trabajo
        </h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          Desarrollo con un stack moderno, enfocado en rendimiento, claridad y experiencias web atractivas.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="tech in techBadges"
          :key="tech.name"
          :class="['rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5', tech.color]"
        >
          <div class="flex items-center gap-2">
            <span class="inline-flex h-2.5 w-2.5 rounded-full bg-current" />
            <h3 class="text-sm font-semibold text-slate-900 dark:text-white">{{ tech.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section :ref="(el) => registrarSeccion(el, 'contacto')" id="contacto" class="scroll-mt-24 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 py-20 px-4 md:px-8 border-t border-slate-200/60 dark:border-slate-800/60 font-sans">
    <div class="max-w-5xl mx-auto space-y-12">
      
      <div class="space-y-4 max-w-3xl">
        <span class="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
          Contacto
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          ¿Hablamos? Hagamos algo juntos
        </h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          Estoy disponible para incorporarme a equipos de desarrollo o charlar sobre nuevos proyectos. Elige la vía que te sea más cómoda.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        <div class="md:col-span-5 space-y-4">
          
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-all duration-200 group">
            <div class="flex items-start gap-4">
              <div class="rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-2.5 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                <component :is="Mail" class="w-5 h-5" />
              </div>
              <div class="space-y-1 flex-1">
                <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-wide">Correo Electrónico</h3>
                <p class="text-xs text-slate-400 dark:text-slate-500 leading-relaxed mb-2">Para propuestas laborales y proyectos.</p>
                <a href="mailto:kiko2002@hotmail.es" class="inline-flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors cursor-pointer gap-1">
                  Enviar correo
                  <component :is="ArrowUpRight" class="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-all duration-200 group">
            <div class="flex items-start gap-4">
              <div class="rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-2.5 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                <component :is="Linkedin" class="w-5 h-5" />
              </div>
              <div class="space-y-1 flex-1">
                <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-wide">LinkedIn</h3>
                <p class="text-xs text-slate-400 dark:text-slate-500 leading-relaxed mb-2">Conectemos y hablemos de desarrollo.</p>
                <a href="https://www.linkedin.com/in/franciscojosemo" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors cursor-pointer gap-1">
                  Conectar
                  <component :is="ArrowUpRight" class="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-all duration-200 group">
            <div class="flex items-start gap-4">
              <div class="rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-2.5 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                <component :is="Github" class="w-5 h-5" />
              </div>
              <div class="space-y-1 flex-1">
                <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-wide">GitHub</h3>
                <p class="text-xs text-slate-400 dark:text-slate-500 leading-relaxed mb-2">Echa un ojo a mis repositorios y código.</p>
                <a href="https://github.com/kikor7" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors cursor-pointer gap-1">
                  Ver perfil
                  <component :is="ArrowUpRight" class="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div class="md:col-span-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-100 shadow-sm p-6 md:p-8">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="space-y-2">
              <label for="email" class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Tu correo electrónico
              </label>
              <input 
                id="email"
                v-model="emailForm.email"
                type="email" 
                required
                placeholder="ejemplo@correo.com"
                class="flex h-10 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-400/20 focus-visible:border-indigo-500 dark:focus-visible:border-indigo-500 transition-all text-slate-900 dark:text-slate-200"
              />
            </div>

            <div class="space-y-2">
              <label for="message" class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Mensaje
              </label>
              <textarea 
                id="message"
                v-model="emailForm.message"
                rows="4"
                required
                placeholder="Hola Francisco, he visto tu portfolio y..."
                class="flex w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-400/20 focus-visible:border-indigo-500 dark:focus-visible:border-indigo-500 transition-all resize-none text-slate-900 dark:text-slate-200"
              ></textarea>
            </div>

            <button 
              type="submit"
              class="inline-flex items-center justify-center rounded-xl text-xs font-semibold h-10 px-5 py-2 bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-500 dark:hover:bg-indigo-400 transition-all shadow-[0_4px_12px_rgba(79,70,229,0.2)] dark:shadow-[0_4px_12px_rgba(99,102,241,0.2)] transform hover:-translate-y-0.5 duration-200 w-full sm:w-auto cursor-pointer"
            >
              <component :is="Send" class="w-3.5 h-3.5 mr-2" />
              Enviar mensaje
            </button>

            <p v-if="enviado" class="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              ¡Enviado con éxito! Gracias por tu mensaje.
            </p>
          </form>
        </div>

      </div>
    </div>
  </section>

  <footer class="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 px-4 md:px-8 border-t border-slate-200/60 dark:border-slate-800/60 font-sans">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
      
      <div class="space-y-1 text-center sm:text-left">
        <p class="text-sm font-bold text-slate-900 dark:text-slate-200 tracking-wide">
          Francisco José Muñoz Oliva
        </p>
        <p class="text-xs text-slate-400 dark:text-slate-500">
          Desarrollador Web Junior • Especializado en DAW
        </p>
      </div>

      <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <a href="#sobre-mi" class="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Sobre mí</a>
        <a href="#proyectos" class="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Proyectos</a>
        <a href="#contacto" class="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contacto</a>
      </nav>

      <div class="text-xs text-slate-400 dark:text-slate-500 text-center sm:text-right">
        <p>&copy; 2026 • Portofolio personal :)</p>
      </div>

    </div>
  </footer>


  <Bot :navegar-seccion="irASeccion" />
</template>