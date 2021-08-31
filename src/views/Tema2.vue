<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Software contable “SIIGO”
    
    
    
    separador
    #t_2_1.titulo-segundo
      .h2 2.1 Interfaz de usuario
    

    
    
    separador
    #t_2_2.titulo-segundo
      .h2 2.2 Ingreso al software 


    
    
    separador
    #t_2_3.titulo-segundo
      .h2 2.3  Entorno del software 


    
    
    separador
    #t_2_4.titulo-segundo
      .h2 2.4 Ingreso de información al software


    
    
    separador
    #t_2_5.titulo-segundo
      .h2 2.5 Generación de reportes



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

<style lang="sass" scoped></style>
