<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center
      .col-lg-5
        figure.mb-2(data-aos='fade-right')
            img.mx-auto(src="@/assets/curso/img-intro.svg", alt="Imagen ambiental", style='width: 505px;')
      .col-lg-7
        p.mb-4 En este componente se abordan los temas hojas de cálculo y <em>software</em> contable como herramientas informáticas y de analítica que aportan a la eficiencia operativa en las organizaciones.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Los usuarios de la contabilidad demandan múltiples informes sobre los datos procesados en los departamentos de contabilidad de las organizaciones, en su mayoría son atendidas mediante consultas en el <em>software</em> contable, no obstante, algunas solicitudes de información de los usuarios implican la descarga de hojas de cálculo de los datos para ser reorganizadas de tal forma que den respuesta a las solicitudes particulares del usuario.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
