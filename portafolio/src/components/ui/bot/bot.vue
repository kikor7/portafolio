<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const isOpen = ref(false)
const contenedorMensajes = ref<HTMLElement | null>(null)

const mensajes = ref([
  { id: 1, emisor: 'bot', texto: '¡Hola! 🤖 Soy el asistente de Kikor7. ¿Qué te gustaría cotillear hoy de su perfil?' }
])

const opciones = ref([
  { id: 'proyectos', texto: '📁 Ver proyecto estrella' },
  { id: 'stack', texto: '⚡ Ver tecnologías' },
  { id: 'contacto', texto: '📧 Contactar con él' }
])

const seleccionarOpcion = async (idOpcion: string, textoOpcion: string) => {
  mensajes.value.push({ id: Date.now(), emisor: 'usuario', texto: textoOpcion })
  await nextTick()
  hacerScroll()

  setTimeout(async () => {
    let respuestaBot = ''
    if (idOpcion === 'proyectos') {
      respuestaBot = '🚀 Su proyecto estrella actual es una aplicación web donde ver noticas japonesas y jugar un minijuego, desarrollada con Vue 3, Vite y Supabase.'
    } else if (idOpcion === 'stack') {
      respuestaBot = '💻 Kiko domina el desarrollo Frontend. Su stack principal incluye Vue.js (Composition API), TypeScript, Tailwind CSS y componentes de Shadcn.'
    } else if (idOpcion === 'contacto') {
      respuestaBot = '📬 ¡Escríbele! Puedes contactar con él directamente a su correo: kiko2002@hotmail.es o su teléfono 648 04 72 79 .'
    }

    mensajes.value.push({ id: Date.now() + 1, emisor: 'bot', texto: respuestaBot })
    await nextTick()
    hacerScroll()
  }, 400)
}

const hacerScroll = () => {
  if (contenedorMensajes.value) {
    contenedorMensajes.value.scrollTop = contenedorMensajes.value.scrollHeight
  }
}
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    
    <Card 
      v-if="isOpen" 
      class="w-80 sm:w-96 h-[500px] flex flex-col mb-4 shadow-2xl border-slate-200 animate-in slide-in-from-bottom-5 duration-200 rounded-2xl bg-white transition-colors dark:bg-[#1e293b] dark:border-slate-800"
    >
      <CardHeader class="p-4 border-b flex flex-row items-center gap-2 space-y-0 bg-slate-50 rounded-t-2xl transition-colors dark:bg-slate-900/60 dark:border-slate-800">
        <div class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <CardTitle class="text-xs font-bold text-slate-700 uppercase tracking-wider dark:text-slate-300">Kiko Assistant</CardTitle>
      </CardHeader>

      <CardContent class="flex-1 overflow-hidden p-0 flex flex-col bg-transparent">
        <div 
          ref="contenedorMensajes"
          class="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin"
        >
          <div 
            v-for="msg in mensajes" 
            :key="msg.id"
            :class="['flex text-xs p-3 rounded-2xl max-w-[85%] leading-relaxed shadow-sm transition-colors', 
              msg.emisor === 'bot' 
                ? 'bg-slate-100 text-slate-800 rounded-bl-none mr-auto border border-slate-200/60 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700' 
                : 'bg-indigo-600 text-white rounded-br-none ml-auto dark:bg-indigo-500 dark:text-white'
            ]"
          >
            {{ msg.texto }}
          </div>
        </div>
      </CardContent>

      <div class="p-3 border-t bg-slate-50/50 flex flex-col gap-2 rounded-b-2xl transition-colors dark:bg-slate-900/60 dark:border-slate-800">
        <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-1 dark:text-slate-500">Selecciona una opción:</span>
        <div class="flex flex-col gap-1.5">
          <Button 
            v-for="opcion in opciones" 
            :key="opcion.id"
            variant="outline"
            class="justify-start text-xs h-8 font-medium border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-indigo-600 shadow-sm transition-colors text-left truncate rounded-xl dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
            @click="seleccionarOpcion(opcion.id, opcion.texto)"
          >
            {{ opcion.texto }}
          </Button>
        </div>
      </div>
    </Card>

    <button 
      class="focus:outline-none transition-transform duration-300 transform hover:scale-110 active:scale-95 group cursor-pointer"
      :class="[!isOpen ? 'animate-bounce' : '']"
      @click="isOpen = !isOpen"
      aria-label="Abrir asistente"
    >
      <svg class="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="6" r="3" fill="#818cf8" class="group-hover:fill-indigo-600 transition-colors" />
        <path d="M32 9V16" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
        <rect x="14" y="16" width="36" height="34" rx="14" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
        <rect x="9" y="27" width="5" height="12" rx="2" fill="#475569" />
        <rect x="50" y="27" width="5" height="12" rx="2" fill="#475569" />
        <rect x="19" y="21" width="26" height="18" rx="8" fill="#1e293b" />
        <circle cx="26" cy="30" r="3" fill="#42b883" class="animate-pulse" />
        <circle cx="38" cy="30" r="3" fill="#42b883" class="animate-pulse" />
        <path d="M29 35Q32 37 35 35" stroke="#42b883" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="32" cy="58" rx="16" ry="2" fill="#000000" fill-opacity="0.1" />
      </svg>
    </button>

  </div>
</template>