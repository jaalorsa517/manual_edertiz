<template lang="pug">
    ol.lists
        li(v-for="image, index in imagenes" :key="index")
            p {{instrucciones[index]}}
            images(:imagen="image" :descr="`img-${index+1}`")
</template>

<script>
import images from "@/components/Images.vue";

export default {
  name: "PasoPaso",
  props: {
    imagenes: {
      type: Array,
      required: true
    },
    instrucciones: {
      type: Array,
      required: true
    }
  },
  components: {
    images
  }
};
</script>
