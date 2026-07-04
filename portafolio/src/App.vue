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
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-vue-next'
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

import { ref } from 'vue'
const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}

import { techBadges, highlights, stats, timeline } from './sobre-mi-constants'
</script>

<template>
  <header class="flex w-full items-center justify-between p-4 border-b">
    <div class="font-bold">
      <p>Kikor7 dev</p>
    </div>

    <!-- MENÚ ESCRITORIO: Oculto en móviles con 'hidden' y visible desde pantallas medianas con 'md:flex' -->
    <NavigationMenu class="hidden md:flex">
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuLink href="/about" :class="navigationMenuTriggerStyle()">
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/about" :class="navigationMenuTriggerStyle()">
            Sobre mí
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/about" :class="navigationMenuTriggerStyle()">
            Proyectos
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Tecnologías</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4">
              <li>
                <NavigationMenuLink as-child>
                  <a href="/link1"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">Imagen VUE.JS</div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">Descripción del link</p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/about"
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
        <SheetHeader >
          <SheetTitle class="text-left font-bold">Kikor7 dev</SheetTitle>
          <SheetDescription class="text-left">Navegación del sitio</SheetDescription>
        </SheetHeader>
        <nav class="flex flex-col gap-4 mt-6 ml-6 justify-center">
          <RouterLink to="/" @click="closeMenu" class="text-2xl font-semibold hover:text-primary transition-colors ">
            Inicio
          </RouterLink>
          <RouterLink to="/proyectos" @click="closeMenu" class="text-2xl font-semibold hover:text-primary transition-colors">
            Proyectos
          </RouterLink>
          <RouterLink to="/sobre-mi" @click="closeMenu" class="text-2xl font-semibold hover:text-primary transition-colors">
            Sobre mí
          </RouterLink>
          <RouterLink to="/contacto" @click="closeMenu" class="text-2xl font-semibold hover:text-primary transition-colors">
            Contacto
          </RouterLink>
        </nav>
      </SheetContent>
    </Sheet>
  </header>

<main class="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-start justify-between gap-8 px-4 py-10 transition-colors duration-300">
  
  <section class="w-full lg:flex-1 bg-white text-slate-900 border border-slate-100 shadow-xl rounded-3xl p-8 md:p-12 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 relative overflow-hidden rounded-3xl bg-white border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl 
         /* 1. Cambiada la rotación hacia la derecha e invertido el eje Z */
         md:[transform:rotateX(6deg)_rotateY(12deg)_rotateZ(-2deg)] 
         hover:[transform:none] 
         /* 2. Trucos anti-desenfoque */
         transform-gpu [backface-visibility:hidden]">
    
    <div class="mb-6">
      <Badge variant="outline" class="border-slate-200 text-slate-600 font-medium px-3 py-1 bg-slate-50 rounded-full text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
        Frontend Developer
      </Badge>
    </div>

    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl text-slate-900 dark:text-white">
      Construyo 
      <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">interfaces web </span> 
      <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">interactivas</span>
    </h1>

    <div class="text-sm font-semibold tracking-wide text-slate-500 uppercase mb-6 flex flex-wrap gap-2 items-center dark:text-slate-400">
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
      Especializado en el ecosistema de Vue, bases de datos Supabase y el desarrollo de experiencias dinámicas e interactivas.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
      
      <div class="bg-slate-50/60 border border-slate-100 rounded-2xl p-4 transition-colors hover:border-slate-200 hover:bg-slate-50 dark:bg-slate-800/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-800">
        <div class="text-lg font-bold text-slate-900 mb-1 dark:text-white">SPA & Portfolio</div>
        <div class="text-sm text-slate-500 dark:text-slate-400">Proyectos listos para producción</div>
      </div>

      <div class="bg-slate-50/60 border border-slate-100 rounded-2xl p-4 transition-colors hover:border-slate-200 hover:bg-slate-50 dark:bg-slate-800/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-800">
        <div class="text-lg font-bold text-emerald-600 mb-1 dark:text-emerald-400">Full-Stack Light</div>
        <div class="text-sm text-slate-500 dark:text-slate-400">Backend fluido usando Supabase</div>
      </div>

      <div class="bg-slate-50/60 border border-slate-100 rounded-2xl p-4 transition-colors hover:border-slate-200 hover:bg-slate-50 dark:bg-slate-800/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-800">
        <div class="text-lg font-bold text-indigo-600 mb-1 dark:text-indigo-400">Interactive</div>
        <div class="text-sm text-slate-500 dark:text-slate-400">Mini-juegos con Phaser.js</div>
      </div>

    </div>

    <div class="flex flex-wrap items-center gap-4">
      
      <Button class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 rounded-xl h-11 transition-all group shadow-lg shadow-indigo-600/10">
        Ver proyectos
        <ArrowUpRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Button>

      <Button variant="outline" class="border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 font-medium px-6 rounded-xl h-11 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800" as-child>
        <a href="tel:+34648047279" title="Llamar al +34 648 04 72 79">
          Contactar
        </a>
      </Button>

      <div class="hidden sm:block h-6 w-[1px] bg-slate-200 mx-2 dark:bg-slate-800"></div>

      <div class="flex items-center gap-2">
        <Button variant="outline" size="icon" class="rounded-xl border-slate-200 bg-transparent text-slate-600 hover:bg-slate-50 h-11 w-11 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800" as-child>
          <a href="https://www.linkedin.com/in/franciscojosemo/" target="_blank" aria-label="LinkedIn">
            <Linkedin class="h-4 w-4" />
          </a>
        </Button>

        <Button variant="outline" size="icon" class="rounded-xl border-slate-200 bg-transparent text-slate-600 hover:bg-slate-50 h-11 w-11 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800" as-child>
          <a href="https://github.com/kikor7" target="_blank" aria-label="GitHub">
            <Github class="h-4 w-4" />
          </a>
        </Button>

        <Button variant="outline" size="icon" class="rounded-xl border-slate-200 bg-transparent text-slate-600 hover:bg-slate-50 h-11 w-11 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800" as-child>
          <a href="mailto:kiko2002@hotmail.es" aria-label="Email">
            <Mail class="h-4 w-4" />
          </a>
        </Button>
      </div>

    </div>

  </section>

  <div class="w-full lg:max-w-xl [perspective:1000px] px-4">
    <Card class="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl md:[transform:rotateX(6deg)_rotateY(-12deg)_rotateZ(2deg)] hover:[transform:none] dark:bg-slate-900 dark:border-slate-800">
      
      <a href="https://vuejs.org" target="_blank" class="absolute top-4 left-4 z-20 flex gap-2 cursor-pointer">
        <Badge variant="secondary" class="bg-white/80 text-slate-800 hover:bg-[#3ca675] rounded-full px-3 py-1 text-xs font-medium shadow-sm transition-colors dark:bg-slate-900/80 dark:text-white dark:hover:bg-[#3ca675]">
          Vue.js
        </Badge>
      </a>
      
      <a href="https://supabase.com" target="_blank" class="absolute top-4 right-4 z-20">
        <Badge variant="outline" class="bg-white/80 backdrop-blur-md text-slate-800 hover:bg-[#3ca675] border-slate-200 rounded-full px-3 py-1 text-xs font-medium shadow-sm dark:bg-slate-900/80 dark:text-white dark:border-slate-800 dark:hover:bg-[#3ca675]">
          Supabase
        </Badge>
      </a>

      <CardContent class="p-4">
        <div class="group relative block rounded-lg overflow-hidden aspect-video bg-muted">
          <a href="https://japanese-learning-project.vercel.app" target="_blank" rel="noopener noreferrer" class="absolute inset-0 z-10 cursor-pointer">
            <img src="./assets/images/JapaneseLearningProject.webp" alt="Vista previa de mi aplicación" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </a>
          
          <a href="https://github.com/kikor7" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-600 transition-colors">
            <div class="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-background/90 p-2 rounded-xl border shadow-sm dark:bg-slate-900/90 dark:border-slate-800">
              <Avatar class="h-6 w-6">
                <AvatarImage src="https://github.com/kikor7.png" alt="Kikor7" />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <div class="flex flex-col">
                <span class="text-xs font-semibold dark:text-white">Kikor7 dev</span>
              </div>
            </div>
          </a>

          <div class="absolute bottom-4 right-4 z-20 bg-popover text-popover-foreground p-3 rounded-xl shadow-md border max-w-xs pointer-events-none dark:bg-slate-900 dark:border-slate-800">
            <h3 class="text-sm font-bold tracking-tight mb-1.5 dark:text-white">Noticias Japonesas</h3>
            <div class="flex flex-wrap gap-1">
              <Badge variant="secondary" class="text-[9px] px-1 py-0 dark:bg-slate-800 dark:text-slate-300">Login</Badge>
              <Badge variant="secondary" class="text-[9px] px-1 py-0 dark:bg-slate-800 dark:text-slate-300">Phaser.js</Badge>
              <Badge variant="secondary" class="text-[9px] px-1 py-0 dark:bg-slate-800 dark:text-slate-300">API</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>

</main>

   <div class="min-h-screen bg-slate-50/50 text-slate-900 py-16 px-4 md:px-8 font-sans selection:bg-indigo-100">
    <div class="max-w-5xl mx-auto space-y-12">
      
      <div class="space-y-4 max-w-3xl">
        <span class="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
          Sobre mí
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Lógica eficiente, diseño cuidado y mentalidad de crecimiento.
        </h1>
        <p class="text-slate-500 text-lg leading-relaxed">
          Soy Francisco José Muñoz Oliva, desarrollador junior formado en DAW. Me gusta convertir problemas reales en interfaces simples, útiles y bien terminadas.
        </p>
        <p class="text-slate-500 text-lg leading-relaxed">
          Me gustaria empezar en este mundillo e ir continuar aprendiendo y creciendo en el mundo profesional.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        <div class="md:col-span-5 rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm p-5 space-y-5">
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden group border border-slate-100">
            <img 
              src="" 
              alt="Otman Raad" 
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute bottom-4 right-4 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          </div>
          
          <div class="flex flex-wrap gap-2 pt-2">
            <span
              v-for="tech in techBadges"
              :key="tech.name"
              :class="['inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors', tech.color]"
            >
              <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-current opacity-70" />
              {{ tech.name }}
            </span>
          </div>
        </div>

        <div class="md:col-span-7 rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm p-6 md:p-8 space-y-8">
          
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-slate-500">
              <component :is="User" class="w-5 h-5 text-slate-400" />
              <h2 class="text-xl font-bold text-slate-900 tracking-wide">Desarrollador Web Junior</h2>
            </div>
            <p class="text-slate-500 text-sm leading-relaxed">
              Trabajo con atención al detalle, código ordenado y una visión práctica del producto.
            </p>
          </div>

          <ul class="space-y-3.5">
            <li v-for="(item, idx) in highlights" :key="idx" class="flex items-start gap-3 text-sm text-slate-600">
              <component :is="item.icon" class="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
              <span>{{ item.text }}</span>
            </li>
          </ul>

          <div class="grid grid-cols-3 gap-3">
            <div v-for="(stat, idx) in stats" :key="idx" class="rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-center space-y-1">
              <div :class="['text-base md:text-lg font-bold', stat.valueColor]">
                {{ stat.value }}
              </div>
              <div class="text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-wider">
                {{ stat.label }}
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <button class="inline-flex items-center justify-center rounded-xl text-xs font-semibold h-10 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
              <component :is="FileText" class="w-3.5 h-3.5 mr-2 text-slate-400" />
              Ver CV
            </button>
            <button class="inline-flex items-center justify-center rounded-xl text-xs font-semibold h-10 px-5 py-2 bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-[0_4px_12px_rgba(79,70,229,0.2)] transform hover:-translate-y-0.5 duration-200">
              <component :is="Download" class="w-3.5 h-3.5 mr-2" />
              Descargar CV
            </button>
          </div>

          <hr class="border-slate-100" />

          <div class="space-y-5">
            <div v-for="(item, idx) in timeline" :key="idx" class="flex gap-4 group">
              <div class="flex flex-col items-center pt-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-100 shadow-sm" />
                <div v-if="idx !== timeline.length - 1" class="w-[1px] bg-slate-100 grow mt-2 group-hover:bg-slate-200 transition-colors" />
              </div>
              
              <div class="flex-1 grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4 rounded-xl border border-slate-100 bg-slate-50/40 p-3 hover:bg-slate-50/80 transition-colors">
                <span class="text-sm font-bold text-slate-400 pt-0.5">
                  {{ item.date }}
                </span>
                <div class="md:col-span-3 space-y-1">
                  <h4 class="text-sm font-bold text-slate-800 tracking-wide">
                    {{ item.title }}
                  </h4>
                  <p class="text-xs text-slate-500 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
   </div>

  <Bot />
</template>