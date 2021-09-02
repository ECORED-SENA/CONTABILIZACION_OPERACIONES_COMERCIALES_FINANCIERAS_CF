<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Software contable “SIIGO”
    
    .row.justify-content-center
      .col-lg-7
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style='font-size:28px;')
            P.mb-0 Un software contable es un aplicativo que registra y procesa las transacciones que se generan en una empresa, sistematizando y simplificando las tareas de contabilidad.
            i.fas.fa-quote-right(style='font-size:28px;')
          .bloque-texto-d__autor 
            .p.mb-0  (Wikipedia, 2021)
        p.mb-4 Existen múltiples aplicativos que cumplen con esta valiosa labor en las empresas, entre ellos  Alegra, COI (Aspel), CONTPAQi, SAP Business One, SIIGO pyme, Helisa, Softland Pyme.
        p.mb-4 Por lo general, todos los programas contables coinciden en una serie de características generales, entre ellas:
        ul.lista-ul.ps-4
          li 
            i.far.fa-folder-open
            p.mb-0 Gestión de libro diario, mayor, inventarios, fiscal y auxiliares.
          li 
            i.far.fa-folder-open
            p.mb-0 Registro de cuentas anuales.
          li 
            i.far.fa-folder-open
            p.mb-0 Herramienta de facturación.
          li 
            i.far.fa-folder-open
            p.mb-0 Conciliación bancaria (automática).
          li 
            i.far.fa-folder-open
            p.mb-0 Base de datos de clientes y proveedores.
          li 
            i.far.fa-folder-open
            p.mb-0 Gráficas visuales e impresión de informes.
          li 
            i.far.fa-folder-open
            p.mb-0 Planes contables predefinidos.
          li 
            i.far.fa-folder-open
            p.mb-0 Importación y exportación de archivos (SPnet, 2021).
      .col-lg-5.align-self-center
        figure.mb-5(data-aos='fade-left')
          img.mx-auto(src='@/assets/curso/tema2/img1.svg', alt='imagen ambiental', style='width:500px;')
        
    p.mb-5 Para la formación se utilizará el software contable SIIGO nube. Para ampliar la información sobre estos software contables revise los siguientes enlaces:
    
    .row.justify-content-center
      .col-lg-3(data-aos='fade-left')
        a.anexo.anexo-custom.mb-4.mb-lg-4(href="http://www.alegra.com/" target="_blank" style="")
          .anexo__icono
            img(src="@/assets/template/icono-link-custom.svg" style='border-radius: 50px;')
          .anexo__texto.text-white
            p.mb-0 
              b Soluciones Alegra S.A.S.
      .col-3(data-aos='fade-left')
        a.anexo.anexo-custom.mb-4.mb-lg-4(href="http://coiaspel.com/" target="_blank" style="")
          .anexo__icono
            img(src="@/assets/template/icono-link-custom.svg" style='border-radius: 50px;')
          .anexo__texto.text-white
            p.mb-0 
              b Siesa Aspel S.A.S.
      .col-2(data-aos='fade-left')
        a.anexo.anexo-custom.mb-4.mb-lg-4(href="http://contpaqi.com/" target="_blank" style="")
          .anexo__icono
            img(src="@/assets/template/icono-link-custom.svg" style='border-radius: 50px;')
          .anexo__texto.text-white
            p.mb-0 
              b CONTPAQi
      .col-2(data-aos='fade-left')
        a.anexo.anexo-custom.mb-4.mb-lg-4(href="http://helisa.com/" target="_blank" style="")
          .anexo__icono
            img(src="@/assets/template/icono-link-custom.svg" style='border-radius: 50px;')
          .anexo__texto.text-white
            p.mb-0 
              b Helisa
    
    .row.justify-content-center
      .col-4(data-aos='fade-right')
        a.anexo.anexo-custom.mb-4.mb-lg-4(href="http://www.alegra.com/" target="_blank" style="")
          .anexo__icono
            img(src="@/assets/template/icono-link-custom.svg" style='border-radius: 50px;')
          .anexo__texto.text-white
            p.mb-0 
              b SAP Company Information
      .col-5(data-aos='fade-right')
        a.anexo.anexo-custom.mb-4.mb-lg-4(href="http://coiaspel.com/" target="_blank" style="")
          .anexo__icono
            img(src="@/assets/template/icono-link-custom.svg" style='border-radius: 50px;')
          .anexo__texto.text-white
            p.mb-0 
              b Siigo · Software contable y administrativo
      .col-3(data-aos='fade-right')
        a.anexo.anexo-custom.mb-4.mb-lg-4(href="http://contpaqi.com/" target="_blank" style="")
          .anexo__icono
            img(src="@/assets/template/icono-link-custom.svg" style='border-radius: 50px;')
          .anexo__texto.text-white
            p.mb-0 #[strong Softland Inversiones S.L.]
    


    separador
    #t_2_1.titulo-segundo
      .h2 2.1 Interfaz de usuario
    
    p.mb-4 A la parte que experimenta y comunica al usuario con un software se le llama interfaz de usuario y está compuesta por dos módulos:
    
    .row.justify-content-center
      .col.lg-6.mb-5(style='background-color: #5E6178;')
        .row.justify-content-center.mt-5
          .col-lg-8
            figure.mb-4
              img.mx-auto(src="@/assets/curso/tema2/img2.svg" alt='' style='width:410px')
            h5.mb-4.text-white Módulo administrado
            p.mb-5.text-white Donde se definen todos los parámetros que usará el software para realizar las tareas en los diferentes módulos transacciones o aplicativos.
      .col.lg-6.mb-5(style='background-color: #F2E9E4;')
        .row.justify-content-center.mt-5
          .col-lg-8
            figure.mb-4
              img.mx-auto(src="@/assets/curso/tema2/img3.svg" alt='' style='width:410px')
            h5.mb-4 Módulo de procesos
            p.mb-5 Llamados también transaccionales o aplicativos, son los módulos donde se realizan los registros o ingresos de datos al software y donde se tiene acceso a generar consultas o informes de los datos en forma detallada o global.
    
    
    p.mb-4 La siguiente figura muestra los componentes de los dos módulos.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 Módulos que componen la interfaz de usuario
        figure.mb-4(data-aos="fade-left")
          img.mx-auto(src="@/assets/curso/tema2/img4.svg" alt='Módulos que componen la interfaz de usuario' style='width:')

    p.mb-4 Las empresas de software contable para facilitar al usuario su uso, normalmente ofrecen recursos, que van desde capacitaciones hasta tutoriales, observe estos recursos en la siguiente figura:

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 Recursos de apoyo suministrados por las empresas de software contable
        figure.mb-4(data-aos="fade-right")
          img.mx-auto(src="@/assets/curso/tema2/img5.svg" alt='Recursos de apoyo suministrados por las empresas de software contable' style='width:')


    p.mb-4 Los datos dentro de un software contable se organizan de forma lógica, la siguiente figura le ayudará a conocer ese orden lógico o flujo de los datos en un software contable:

    .row.justify-content-center
      .titulo-sexto.color-acento-contenido
          p.mb-0 Flujo de los datos en un software contable
      .col-lg-6
        figure.mb-4(data-aos="fade-right")
          img.mx-auto(src="@/assets/curso/tema2/img6.svg" alt='Flujo de los datos en un software contable' style='width:560px;')
      .col-lg-6
        p.mb-4 Los comprobantes son como grandes cajones donde se almacenan organizadamente los documentos contables.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Los principales comprobantes contables son: ingresos, ventas, egresos, pagos, nómina, ajustes, cierre contable, etc. Eso depende de la empresa y del software.
        p.mb-4 Los principales documentos contables son: factura, recibos de caja, comprobante de pago, cheque, nota contable, planilla de nómina, entre otros.



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
