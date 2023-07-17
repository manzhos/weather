<script setup>
import { city } from '../Composible'
</script>

<template>
  <div class="city-inner">
    <input 
      v-model="city" 
      type="text" 
      class="search"
    >
  </div>  
</template>

<style lang="sass" scope>
@import '../assets/styles/main.sass'

.city-inner
  position: relative
  display: inline-block
  width: 100%

  &::after
    content: ''
    position: absolute
    top: 0
    right: 10px
    width: 25px
    height: 25px
    background: url('../assets/img/search.svg') no-repeat 50% 50%
    background-size: contain
    transform: translateY(50%)
    cursor: pointer
  
  .search
    width: 100%
    padding: 16px
    font-family: 'Inter', Arial, sans-serif
    color: $white
    background-color: rgba(0, 0, 0, 0.75)
    border-radius: 16px
    border: none
    outline: none
    cursor: pointer
    
</style>