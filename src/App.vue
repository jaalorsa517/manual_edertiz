<template lang="pug">
  #app
    router-view/
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,700&display=swap');

html, a
  $fonts()

body
  max-width 95vw
  margin 0 auto
  background-color color-back-ligth

li
  line-height 1.5

section
  padding 20px 30px
  position relative
  z-index 1

#app
  max-width 1024px
  margin 30px auto
  $cards()

.titulo
  font-size 3rem
  text-align center

.negrita
  font-weight bold
  font-size 1.1rem

.subtitulo
  font-weight bold
  font-size 2rem

.format-initial
  $fonts()

.navigator
  display block
  font-size 1.5rem
  font-weight bold
  text-align center

.button-flat
  padding 10px
  position fixed
  bottom 2vh
  right 2vw
  color color-back-ligth
  z-index auto
  cursor pointer
  border-radius 100%
  background-color color-back-opacity

.lists
  padding 0

.referencia
  overflow hidden
  text-overflow ellipsis
  white-space nowrap

@media screen and (max-width: 1100px)
  #app
    padding 0
    margin 15px 5px
</style>
