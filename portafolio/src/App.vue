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
// Importamos el icono de la hamburguesa para Vue
import { Menu } from 'lucide-vue-next'
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-vue-next'

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
   
  <Bot />
</template>