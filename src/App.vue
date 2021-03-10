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
  background-color #f5f5f5

li
  line-height 1.5

section
  padding 20px 30px

#app
  max-width 1024px
  margin 30px auto
  position relative
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

@media screen and (max-width: 1100px)
  #app
    padding 0
    margin 15px 5px
</style>
