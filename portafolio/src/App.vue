<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSub,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue'
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger />
        <NavigationMenuContent>
          <NavigationMenuLink />
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink />
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger />
        <NavigationMenuContent>
          <NavigationMenuSub>
            <NavigationMenuList />
            <NavigationMenuViewport />
          </NavigationMenuSub>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuIndicator />
    </NavigationMenuList>

    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
