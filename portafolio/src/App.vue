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
import Bot  from '@/components/ui/bot/bot.vue'
</script>

<template>
  <header class="flex w-full items-center justify-between p-4 border-b">
    <div class="font-bold">
      <p>Kikor7 dev</p>
    </div>
    <NavigationMenu>
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
  </header>
  
 <div class="w-full max-w-xl mx-auto [perspective:1000px]">
    
    <Card class="relative overflow-hidden rounded-3xl bg-white border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl md:[transform:rotateX(6deg)_rotateY(-12deg)_rotateZ(2deg)] hover:[transform:none]">
      <a 
    href="https://vuejs.org" 
    target="_blank"
    class="absolute top-4 left-4 z-20 flex gap-2 cursor-pointer"
  >
    <Badge variant="secondary" class="bg-white/80 text-slate-800 hover:bg-[#3ca675] rounded-full px-3 py-1 text-xs font-medium shadow-sm transition-colors">
      Vue.js
    </Badge>
  </a>
<a href="https://supabase.com" target="_blank" class="absolute top-4 right-4 z-20">
      
        <Badge variant="outline" class="bg-white/80 backdrop-blur-md text-slate-800 hover:bg-[#3ca675] border-slate-200 rounded-full px-3 py-1 text-xs font-medium shadow-sm">
          Supabase
        </Badge>
</a>

<CardContent class="p-4">
  <div class="group relative block rounded-lg overflow-hidden aspect-video bg-muted">
    
    <a 
      href="https://japanese-learning-project.vercel.app" 
      target="_blank" 
      rel="noopener noreferrer"
      class="absolute inset-0 z-10 cursor-pointer"
    >
      <img 
        src="./assests/images/JapaneseLearningProject.webp" 
        alt="Vista previa de mi aplicación" 
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
    </a>
    <a 
          href="https://github.com/kikor7" 
          target="_blank" 
          rel="noopener noreferrer"
          class="hover:text-indigo-600 transition-colors"
        >
    <div class="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-background/90 p-2 rounded-xl border shadow-sm">
      <Avatar class="h-6 w-6">
        <AvatarImage src="https://github.com/kikor7.png" alt="Kikor7" />
        <AvatarFallback>K</AvatarFallback>
      </Avatar>
      <div class="flex flex-col">
        
          <span class="text-xs font-semibold">Kikor7 dev</span>
     
      </div>
       
    </div>
 </a>
    <div class="absolute bottom-4 right-4 z-20 bg-popover text-popover-foreground p-3 rounded-xl shadow-md border max-w-xs pointer-events-none">
      <h3 class="text-sm font-bold tracking-tight mb-1.5">Noticias Japonesas</h3>
      <div class="flex flex-wrap gap-1">
        <Badge variant="secondary" class="text-[9px] px-1 py-0">Login</Badge>
        <Badge variant="secondary" class="text-[9px] px-1 py-0">Phaser.js</Badge>
        <Badge variant="secondary" class="text-[9px] px-1 py-0">API</Badge>
      </div>
    </div>
    
  </div>
</CardContent>

    </Card>
  </div>
 
 
<Bot />


</template>