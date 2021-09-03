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

    p.mb-4 Para ingresar a la licencia demo que se le asigna como aprendiz debe realizarlo con el correo @misena y tiene 2 opciones de URL:
    .row.justify-content-center.mb-2
      .col-auto(data-aos='fade-right')
        a.anexo.anexo-custom.mb-4.mb-lg-4(href="https://sena.siigo.com/ISIIGO/Login.aspx?ReturnUrl=%2fISIIGO%2fDefault.aspx" target="_blank" style="")
          .anexo__icono
            img(src="@/assets/template/icono-link-custom.svg" style='border-radius: 50px;')
          .anexo__texto.text-white
            p.mb-0 
              b sena.siigo.com
      .col-auto(data-aos='fade-right')
        a.anexo.anexo-custom.mb-4.mb-lg-4(href="https://sena.siigo.com/ISIIGO/Login.aspx" target="_blank" style="")
          .anexo__icono
            img(src="@/assets/template/icono-link-custom.svg" style='border-radius: 50px;')
          .anexo__texto.text-white
            p.mb-0 
              b https://sena.siigo.com/ISIIGO/Login.aspx
      .col-auto(data-aos='fade-right')
        a.anexo.anexo-custom.mb-4.mb-lg-4(href="https://divulgacionacademica.siigo.com/" target="_blank" style="")
          .anexo__icono
            img(src="@/assets/template/icono-link-custom.svg" style='border-radius: 50px;')
          .anexo__texto.text-white
            p.mb-0 #[strong https://divulgacionacademica.siigo.com/]
    
    p.mb-5 En la última opción, debe ir a accesos y luego a iniciar sesión SENA.  Por cualquiera de las tres opciones llegará al pantallazo de ingreso, que se observa en la siguiente figura:
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 Acceso o ingreso a la herramienta SIIGO
        figure.mb-4(data-aos="fade-left")
          img.mx-auto(src="@/assets/curso/tema2/img7.jpg" alt='Acceso o ingreso a la herramienta SIIGO' style='width:800px;')


    .row.justify-content-center
      .col-lg-5
        figure.mb-4(data-aos="fade-right")
          img.mx-auto(src="@/assets/curso/tema2/img8.svg" alt='imagen ambiental' style='width:500px;')
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Recuerde que el usuario es su correo @misena y la contraseña se la entregará el instructor, #[strong no cambie la contraseña, la versión demo no tiene habilitada esa función y si la cambia bloqueará la licencia que se le ha asignado.]
        p En la siguiente URL puede acceder al material actualizado y publicado por la casa del software, para ampliar la información, igualmente a través de esta página se accede a las licencias de prueba que el SENA le asigna para realizar las prácticas contables durante el trimestre de estudio.
        .row
          .col-auto
            a.anexo.mb-4.mb-lg-0(href="https://divulgacionacademica.siigo.com/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace web.] Divulgacion academica SIIGO.


    separador
    #t_2_3.titulo-segundo
      .h2 2.3  Entorno del software 

    p.mb-4 Al ingresar a SIIGO nube encontrará la pantalla que se muestra en la siguiente figura, donde podrá identificar los datos de su instructor, los propios y los del curso. Observe la figura para identificar el entorno de trabajo del software.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 Pantalla de inicio en la herramienta SIIGO
        figure.mb-5
          img(src='@/assets/template/img-placeholder.svg', alt='')
    
    .row.justify-content-center
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/tema2/img9.svg', alt='imagen ambiental', style='width:400px;')
      .col-lg-8.align-self-center
        h4.mb-4 Los Menús de SIIGO nube
        p.mb-4 El menú +Crear le permite en cualquier momento acceder a los archivos base de terceros, comprobantes, documentos, procesos, etc.,  y en el menú ayuda encuentra videos y material para el aprendizaje del software, #[strong identifique estos menús en la parte superior derecha.]
        p.mb-4 En el menú lateral izquierdo, se encuentran las opciones que se muestran en la siguiente figura:


    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 Opciones del menú lateral izquierdo de la herramienta SIIGO
        figure.mb-4(data-aos="")
          img.mx-auto(src="@/assets/curso/tema2/img10.svg" alt='Opciones del menú lateral izquierdo de la herramienta SIIGO' style='width:800px;')

    p.mb-5 Las opciones del menú superior derecho se muestran en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 Opciones del menú superior derecho de la  herramienta SIIGO
        figure.mb-4(data-aos="fade-right")
          img.mx-auto(src="@/assets/curso/tema2/img11.svg" alt='Opciones del menú superior derecho de la  herramienta SIIGO' style='width:800px;')
        .row.justify-content-center
          .col-auto
            a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace web.] Para ampliar la información sobre estos softwares contables revise el siguiente enlace.

    
    separador
    #t_2_4.titulo-segundo
      .h2 2.4 Ingreso de información al software

    p.mb-4 En SIIGO nube existen dos alternativas para el ingreso de información: desde el menú transacciones y desde el menú contabilidad.  Conozca las diferencias entre ambas alternativas mediante la siguiente figura:
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 Alternativas de ingreso en la herramienta SIIGO
        figure.mb-4(data-aos="fñip-left")
          img.mx-auto(src="@/assets/curso/tema2/img12.svg" alt='Alternativas de ingreso en la herramienta SIIGO' style='width:800px;')

    h3.mb-4  Mediante módulo de transacciones.
    p.mb-4 Para aprender a ingresar gastos en SIIGO nube mediante el módulo transacciones siga estos pasos:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
    h3.mb-4 Mediante módulo de contabilidad.
    p.mb-4 Para aprender a ingresar transacciones,mediante el módulo contabilidad te invitamos a siga estos pasos:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    


    
    
    separador
    #t_2_5.titulo-segundo
      .h2 2.5 Generación de reportes


    p.mb-4 Para aprender a consultar y  generar los diversos informes contables a través de SIIGO nube siga estos pasos:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)






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
