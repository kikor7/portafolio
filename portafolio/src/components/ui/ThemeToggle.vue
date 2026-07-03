<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-vue-next'

// useDark detecta el tema del sistema y maneja la clase .dark en el HTML
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button variant="ghost" size="icon" @click="toggleDark()" class="rounded-xl">
    <Sun v-if="isDark" class="h-5 w-5 text-yellow-400 transition-all" />
    <Moon v-else class="h-5 w-5 text-slate-700 transition-all" />
    <span class="sr-only">Cambiar tema</span>
  </Button>
</template>