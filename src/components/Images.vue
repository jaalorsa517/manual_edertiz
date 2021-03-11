<template lang="pug">
    .images-container
        img(:src="imagen" :alt="descr")
</template>

<script>
export default {
  name: "Images",
  props: ["imagen", "descr"]
};
</script>

<style lang="stylus">
.images-container
    width 300px
    margin 0 auto

    img
        width 100%
        height 100%
        margin auto
        transition 500ms
        $cards()

    img:hover
      transform scale(1.2)
      
@media screen and (max-width:400px)
  .images-container
    width 230px  

</style>
