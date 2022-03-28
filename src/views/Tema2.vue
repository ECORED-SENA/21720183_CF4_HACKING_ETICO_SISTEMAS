<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Denegación de servicios


    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Conceptos y generalidades

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Herramientas y técnicas de ataque

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3  Botnets

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4  Contramedidas
    

    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
