<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Hoja de cálculo “Excel”

    p.mb-4 Existen varios aplicativos basados en el concepto de hojas de cálculo como <em>Microsoft Excel, Google Sheets, OpenCalc, IBM/Lotus 1-2-3</em>, etc. 
    p.mb-4 Todos estos aplicativos basan su funcionamiento en tablas organizadas, conformadas por filas y columnas, donde se organizan los datos y se definen múltiples operaciones para el procesamiento de los datos, además permiten la creación de múltiples hojas.
    
    h4.mb-4 Conceptos
    .row.justify-content-center
      .col-lg-7.mb-0
        TabsA.color-secundario.mb-0
          .tarjeta.color-primario.p-4(titulo="Hoja de cálculo")
            h4 Hoja de cálculo
            p.mb-4 Programa informático que simula una tabla de valores organizada en filas y columnas, y que se emplea entre otras muchas aplicaciones, en tareas de administración financiera (Diccionario Oxford, 2021).
            p.mb-4  Son un tipo de documento que permite manipular datos numéricos y alfanuméricos (Wikipedia, 2015).
          .tarjeta.color-primario.p-4(titulo="Software contable")
            h4 <em>Software</em> contable
            p Es un programa informático destinado a sistematizar y simplificar las tareas de contabilidad de una organización. El <em>software</em> contable registra y procesa las transacciones históricas que se generan en una empresa o actividad productiva (Wikipedia, 2021).
          .tarjeta.color-primario.p-4(titulo="Informe contable")
            h4 Informe contable
            p Documento escrito sobre el estado de un tema o conjunto de datos, que explican o refieren los hechos que lo generaron.
          .tarjeta.color-primario.p-4(titulo="Celda")
            h4 Celda
            p Visualmente es el lugar donde se pueden introducir datos o realizar cálculos, se forman en la intersección de una fila y una columna (Wikipedia, 2021).
          .tarjeta.color-primario.p-4(titulo="Fila")
            h4 Fila
            p Están identificadas por los números en secuencia ascendente y van en forma horizontal en la hoja de cálculo (Wikipedia, 2021).
          .tarjeta.color-primario.p-4(titulo="Columna")
            h4 Columna
            p Están identificadas con las letras del alfabeto y van en forma vertical  (Wikipedia, 2021).
          .tarjeta.color-primario.p-4(titulo="Hoja")
            h4 Hoja
            p Los archivos de los aplicativos están integrados por una o varias hojas de cálculo.
        
      .col-lg-5.mb-0
        figure.mb-2(data-aos='fade-left')
            img.mx-auto(src="@/assets/curso/tema1/img1.svg", alt="Imagen ambiental", style='width: 500px;')
      .col-10.p-0
        hr.mt-0.mb-5


    p.mb-5 A continuación, se presenta un ejemplo gráfico, que permite la identificación de los conceptos anteriores.
    .row.justify-content-center
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5 Identificación de los conceptos anteriores
        
        figure.mb-2(data-aos='')
            img.mx-auto(src="@/assets/curso/tema1/img2.png", alt="Identificación de los conceptos anteriores", style='width: 410px;')


    separador
    #t_1_1.titulo-segundo
      .h2 1.1 Fundamentos de las hojas de cálculo 

    p.mb-4 A nivel empresarial las hojas de cálculo constituyen una herramienta fundamental para la organización, análisis, interpretación y simulación de datos. La mayoría de los aplicativos corporativos, incluidos módulos contables, de facturación, de nómina, etc., permiten la exportación de los datos a hojas de cálculo.
    p.mb-4
      b A continuación, se muestran las principales funciones de Excel, una de las hojas de cálculo más conocidas:
    .row.mb-5(style='')
      .col-lg-12.fondo-azul
        .contenedor-total.mt-4
          .contenedor-img(data-aos='fade-right')
            figure
              img(src="@/assets/curso/tema1/imgX.svg" alt="", style='width:250px')
          .contenedor-especial.br-left(data-aos='fade-left')
                ul.lista-ul
                  li 
                    i.far.fa-folder-open(style="color:#D9A171;")
                    p.mb-0 Organizar los datos, ya sean numéricos o de texto, en hojas o libros de cálculo.
                  li 
                    i.far.fa-folder-open(style="color:#D9A171;")
                    p.mb-0 Aplicar formatos para ver los datos en contextos que ayuden en la  toma de decisiones.
                  li 
                    i.far.fa-folder-open(style="color:#D9A171;")
                    p.mb-0 Ordenar la información según la necesidad.
                  li 
                    i.far.fa-folder-open(style="color:#D9A171;")
                    p.mb-0 Realizar búsquedas dentro de los datos existentes en la hoja.
                  li 
                    i.far.fa-folder-open(style="color:#D9A171;")
                    p.mb-0 Analizar automáticamente los apuntes, con formatos prediseñados y que se sugieren de acuerdo con el tipo de datos cargados.
                  li 
                    i.far.fa-folder-open(style="color:#D9A171;")
                    p.mb-0 Aplicar variadas funciones de cálculos, desde simples sumas hasta operaciones más complejas.
                  li 
                    i.far.fa-folder-open(style="color:#D9A171;")
                    p.mb-0 Utilizar barras, colores e iconos automatizados para destacar tendencias y patrones en los datos.
                  li 
                    i.far.fa-folder-open(style="color:#D9A171;")
                    p.mb-0 Graficar los datos con mucha facilidad, ya que Excel puede recomendar los diagramas y gráficos que mejor se ajusten a los posibles análisis.
                  li 
                    i.far.fa-folder-open(style="color:#D9A171;")
                    p.mb-0 Crear y compartir las plantillas en la nube, con colaboradores, contactos, interesados, etc., facilitando el trabajo en conjunto (Cecodeem, s.f.).
            


    p.mb-5 Para utilizar las funciones anteriores, las hojas de cálculo cuentan con un menú en la parte superior que facilita buscar y explorar según la necesidad de la organización y de los datos que se tenga, como se puede visualizar en la siguiente figura:
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 Menú superior de la hoja de cálculo
      
        figure.mb-5(data-aos='')
          img.mx-auto(src="@/assets/curso/tema1/img3.jpg", alt="Menú superior de la hoja de cálculo", style='')
    
    p.mb-4 Al final de este menú se presenta la ayuda de búsqueda: #[strong ¿qué desea hacer?], esta es una herramienta de apoyo para el autoaprendizaje.
    .row
      .col-lg-6.p-0.mb-4
          a.anexo.mb-4.mb-lg-0(href="https://youtu.be/zv-hH1UKdlg" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[strong Enlace web.] Para ampliar la información sobre usos y funcionalidades de las hojas de cálculo puede revisar el siguiente video.


    separador
    #t_1_2.titulo-segundo
      .h2 1.2 Libro diario

    .row.justify-content-center
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Constituye un medio de prueba ante las autoridades y empresas externas como compañías de seguros. Registra el día a día de las operaciones comerciales, incluyendo en su estructura la fecha de los registros, los códigos y nombres de las cuentas contables que son afectadas conforme al PUC de la empresa, columna para los débitos y columna para los créditos.  Este libro contiene los registros de operaciones diarias de la organización, registros de ajuste como depreciaciones, amortizaciones y registros de cierre de período, entre otros.
      .col-lg-4
        figure.mb-4(data-aos='fade-left')
          img.mx-auto(src="@/assets/curso/tema1/img4.svg", alt="imagen ambiental", style='400px;')

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Creación de fórmulas")
        .row
          .col-md-8.mb-4.mb-md-0
            p.mb-3 La estructura o el orden de los elementos de una fórmula determinan el resultado final del cálculo. Las fórmulas siguen una sintaxis específica u orden, que incluye un signo igual (=) seguido de los elementos que van a calcularse, los cuales están separados por operadores de cálculo. Cada operando puede ser un valor que no cambie (un valor constante), una referencia de celda o de rango, un rótulo, un nombre o una función de la hoja de cálculo.
            .cajon.color-acento-contenido.p-4.mb-3
              p.mb-0 Las operaciones se realizan de izquierda a derecha y siguiendo el orden de las operaciones: multiplicación y división antes de suma y resta. Puede controlar el orden en que se ejecutará el cálculo, utilizando paréntesis para agrupar las operaciones que deben realizarse en primer lugar, por ejemplo, =5+2*3 el resultado es 11, porque la multiplicación va antes que la suma. La fórmula multiplica 2 por 3 y, a continuación, suma 5 al resultado.
            p Por el contrario, si se utiliza paréntesis para cambiar la sintaxis en la fórmula =(5+2)*3, primero sumará 5 y 2, a continuación, se multiplica el resultado por 3, obteniéndose 21 como resultado (Castillo, 2012).
          .col-md-4.align-self-center.mb-2
            figure(data-aos ='fade-left')
              img(src='@/assets/curso/tema1/img5.png', alt='imagen ambiental', style='width: 369px;')
              
      .py-3.py-md-4(titulo="Función")
        .row
          .col-md-8.align-self-center
            p.mb-4 Es una fórmula ya elaborada que permite ahorrar tiempo y errores en los cálculos. Para utilizar una función se debe colocar el cursor en una celda vacía y seleccionar la opción de funciones de la barra superior.
            p.mb-0 Las funciones por lo general están agrupadas por categorías: usadas recientemente, todas (todas las categorías), financieras, matemáticas y trigonométricas, estadísticas, etc.
            .bloque-texto-b.color-primario.p-4.px-0
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0 Las funciones solicitarán el rango de datos para realizar el cálculo, poniendo por <em>default</em> el rango más cercano, para modificarlo solo debe seleccionar con el <em>mouse</em> las celdas donde están los datos que desea utilizar para la fórmula seleccionada.
                i.fas.fa-quote-right
              .bloque-texto-d__autor.pe-5
                .h5.mb-0  - (Castillo, 2012).

          .col-md-4.mb-4.mb-md-0
            figure(data-aos='fade-left')
              img(src='@/assets/curso/tema1/img6.svg', alt='imagen ambiental', style='width: 370px;')
              

    .row.justify-content-center.fondo-custom
      .col-lg-11.mt-5.mb-5
        .row.justify-content-center
          p.mb-5 A continuación, se describe el proceso para la construcción de un libro diario en una hoja de cálculo:
          .col-lg-7.mb-5
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                .h2 1
              p.ps-4.mb-0 Abra un documento nuevo de Excel, para ello diríjase al menú superior, dé clic en la opción archivo y elija nuevo.
            
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                .h2 2
              p.ps-4 En la parte inferior donde dice Hoja 1, dé doble clic y cambie ese nombre por libro diario, como se muestra en la siguiente figura:
              .row.justify-content-center
                .col-lg-11
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 Pestañas en un libro de Excel
                  figure(data-aos='')
                    img.mx-auto(src='@/assets/curso/tema1/img8.svg', alt='Pestañas en un libro de Excel', style='width: 325px;')
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                .h2 3
              h4.ps-4 Libro diario
              p.ps-4 En la hoja marcada con este nombre escriba los títulos del libro comenzando en la celda B2, resáltelos en negrita y rellene la celda con color, como se muestra en la siguiente figura:
              .row.justify-content-center
                .col-lg-11
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 Formato libro diario en Excel
                  figure(data-aos='')
                    img.mx-auto(src='@/assets/curso/tema1/img.png', alt='Formato libro diario en Excel', style='width: 500px;')
            .tarjeta-numerada.color-primario.p-5.pb-0(style='border-bottom:0px;')
              .tarjeta-numerada__numero
                .h2 4
              p.ps-4 En la hoja del libro diario registre la operación de cada punto, un registro seguido del siguiente e identificando en la columna A qué punto del taller. Según se observa en el ejemplo ilustrado en la siguiente figura:
              .row.justify-content-center
                .col-lg-11
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 Formato libro diario en Excel diligenciado
                  figure(data-aos='')
                    img.mx-auto(src='@/assets/curso/tema1/img10.jpg', alt='Formato libro diario en Excel diligenciado', style='width: 470px;')
            
          .col-lg-5.mb-5
            figure(data-aos='fade-left')
              img.img-size.mx-auto(src='@/assets/curso/tema1/img7.svg', alt='imagen ambiental', style='')
          
          .col-lg-12
            p.mb-4 En este libro deberá registrar en orden cronológico los hechos económicos, teniendo cuidado de registrar siempre a nivel sub-cuenta o auxiliar (6 dígitos) y escribir el nombre de la cuenta tal como aparece en el PUC y los valores en pesos según corresponda en la columna débito o crédito.
            .cajon.color-acento-contenido.p-4(style='background-color: #f9f1eab8')
              p.mb-0 #[strong Recuerde:] se debe verificar que cada registro cumple el principio de partida doble, antes de proceder a escribir el siguiente y no dejar filas entre un registro y otro, ya que esto impedirá el uso de filtros en la hoja para posteriores consultas de los datos.




    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Libro mayor 

    .row.justify-content-center
      .col-lg-8
        .cajon.color-secundario.p-4.mb-5
          p.mb-0 Llamado también libro mayor y balances, es un libro que resume la información del libro diario, identificando por cada cuenta contable el saldo al inicio del período, la suma de los movimientos débitos, créditos y el saldo final con que queda la cuenta después de esos movimientos.  Usualmente, es generado a un nivel de 4 dígitos o nivel de cuenta, siendo un libro que posibilita la elaboración de los estados financieros de propósito general como  estado de situación financiera, estados de resultados integrales, entre otros.
      .col-lg-4
        figure.mb-5(data-aos='fade-left')
          img.mx-auto(src='@/assets/curso/tema1/img11.svg', alt='imagen ambiental', style='width: 400px;')

    p.mb-5 A continuación, se describe el proceso para la construcción de un libro mayor en una hoja de cálculo:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-12.mb-4.mb-md-0
              p En la parte inferior donde encuentra el signo +, dé clic para crear una nueva hoja, luego sobre esa hoja dé doble clic y cambie el nombre por Libro Mayor, como se observa en la siguiente figura:
            .row.justify-content-center
              .col-8
                .titulo-sexto.color-acento-contenido
                  p.mb-0 Creación de una nueva hoja
                
                figure(data-aos='fade-left')
                  img.mx-auto(src='@/assets/curso/tema1/img12.svg', alt='Creación de una nueva hoja', style='width: 600px;')
          
          
          .row
            .col-md-12.mb-4.mb-md-0
              p.text-start #[strong Libro mayor:] en la hoja marcada con este nombre escriba los títulos del libro, comenzando en la celda B2, resáltelos en negrita y rellene la celda con color.  Debe quedar acorde con lo que se muestra en la siguiente figura:
            .col-md-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido
                p.mb-0.text-start Formato libro mayor en Excel
              figure(data-aos='fade-right')
                img.mx-auto(src='@/assets/curso/tema1/img13.jpg', alt='Formato libro mayor en Excel', style='width: 800px;')
          .row
            .col-md-12.mb-4.mb-md-0
              p Copie y pegue las cuentas y sus nombres del libro diario al libro mayor en la columna cuenta y, luego ordene de manera ascendente, siga los pasos sugeridos en la siguiente figura:
            .row.justify-content-center
              .col-md-8.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  p.mb-0 Ordenar libro mayor
                figure(data-aos='fade-left')
                  img.mx-auto(src='@/assets/curso/tema1/img14.png', alt='Ordenar libro mayor', style='width: 500px;')
          .row
            .col-md-12.mb-4.mb-md-0
              p.text-start Elimine los duplicados de la columna cuentas, use como guía la siguiente figura:
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  p.mb-0.text-start Quitar o eliminar duplicados
                figure(data-aos='fade-right')
                  img.mx-auto(src='@/assets/curso/tema1/img15.png', alt='Quitar o eliminar duplicados', style='width: 730px;')
          
          .row
            .col-md-12.mb-4.mb-md-0
              p Ubique la primera celda del movimiento débito como lo muestra la siguiente figura:
            .row.justify-content-center
              .col-md-8.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  p.mb-0 Primera celda del movimiento débito
                figure(data-aos='fade-left')
                  img.mx-auto(src='@/assets/curso/tema1/img16.jpg', alt='Primera celda del movimiento débito', style='width: 540px;')
          .row
            .col-md-12.mb-4.mb-md-0
              p.text-start Formule la mayorización, para ello diríjase al  menú de fórmulas, elija el ítem fórmulas matemáticas y trigonométricas y busque la fórmula “sumar.si.conjunto”, use como guía la siguiente figura:
            .row.justify-content-center
              .col-md-8.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  p.mb-0.text-start Funciones matemáticas y trigonométricas
                figure(data-aos='fade-right')
                  img.mx-auto(src='@/assets/curso/tema1/img17.jpg', alt='Funciones matemáticas y trigonométricas', style='width: 470px;')
          .row
            .col-md-12.mb-4.mb-md-0
              p En la ventana argumentos de la fórmula, que muestra la siguiente figura llene los campos de la siguiente manera:
              ul.lista-ul(style='margin-bottom:30px;')
                li 
                  i.fas.fa-folder-open(style="color:#D9A171;")
                  p.mb-0 #[strong El Rango_suma: ] son las celdas que se van a sumar si se cumple la condición.
                li 
                  i.fas.fa-folder-open(style="color:#D9A171;")
                  p.mb-0 #[strong Rango_criterios1: ] es la columna donde se buscará que se cumpla la condición.
                li 
                  i.fas.fa-folder-open(style="color:#D9A171;")
                  p.mb-0 #[strong Criterio1:] es la condición a cumplir.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  p.mb-0.text-start Argumentos de la fórmula
                figure(data-aos='fade-left')
                  img.mx-auto(src='@/assets/curso/tema1/img18.jpg', alt='Argumentos de funcion', style='width: 700px;')

    .row.fondo1.justify-content-center
      .col-lg-12.mt-5.mb-5.px-5
        p A continuación, se presenta un ejemplo gráfico, que permite identificar cómo quedan los campos diligenciados:
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0.text-start Ejemplo argumentos de la fórmula
        figure.mb-5(data-aos='fade-left')
          img.mx-auto(src='@/assets/curso/tema1/img19.jpg', alt=' Ejemplo argumentos de la fórmula ', style='')
      .col-lg-12.px-5
        p.mb-4 Como se observa (rango_suma) está lleno en el libro diario, al igual que la columna F donde están los débitos y, los sumará si en la columna B del diario (rango_criterio1) la cuenta es igual a 110505 (criterio 1).
        .row.justify-content-center
          .col-lg-8
            .cajon.color-primario.p-4.mb-4(style='background-color: #fff;')
              p.mb-4 La fórmula quedará así:
              figure
                img.mx-auto(src="@/assets/curso/tema1/formula1.svg", alt="formula", style='')
      .col-lg-12.px-5
        p.mb-4 De esta manera se debe formular toda la columna, puede copiar y pegar la fórmula, teniendo cuidado que los rangos se conserven y que el (criterio 1) cambie según sea la cuenta de la fila que está formulando, igualmente tenga en cuenta formular, tanto la columna débito como la de crédito.
      .row
        .col-lg-12.px-5
          .row.justify-content-center
            .col-lg-4.align-self-center
              figure.mb-5(data-aos='fade-right')
                img.mx-auto(src='@/assets/curso/tema1/img20.svg', alt='imagen ambiental', style='width:400px;')
            .col-lg-8.mb-5
              p.mb-4 #[strong Formule los saldos finales:] cada saldo debe ser formulado en la columna de la naturaleza de la cuenta.
              p.mb-4 Sumar las columnas de los saldos iniciales y del movimiento de la naturaleza y, restarles los de la naturaleza contraria.  
              p.mb-4 #[strong Ejemplo:] para el caso de la cuenta 110505 Caja general, se suma el saldo inicial débito con el movimiento débito y se resta el movimiento crédito.
              p.etiqueta(style='background-color: #d9a17170; color: #12263F;') Formule o escriba los saldos iniciales: esto de acuerdo con las instrucciones dadas por el docente.




    separador
    #t_1_4.titulo-segundo
      .h2 1.4 <em>Kárdex</em> del inventario         


    p.mb-4 Conocido también como auxiliar de inventarios o almacén, es un libro contable que por cada referencia de productos del inventario muestra cronológicamente sus movimientos de entradas, salidas y saldos, tanto de unidades como de costos unitarios y totales.
    p.mb-4 A continuación, se describe el proceso para la construcción de hojas de datos, necesarias para alimentar y construir el libro de <em>kárdex</em> en una hoja de cálculo:

    .row.justify-content-center.fondo-custom
      .col-lg-12.mt-5.mb-0.px-5
        .row.justify-content-center
          .col-lg-4
            figure.mb-2(data-aos='fade-right')
              img.img-size.mx-auto(src='@/assets/curso/tema1/img21.svg', alt='imagen ambiental', style='')
          .col-lg-8
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span #[strong 1]
                p.mb-0 En la parte inferior donde encuentra el signo + dé clic para crear tres hojas nuevas, luego sobre cada hoja dé doble clic y cambie el nombre por Artículos, Datos y <em>Kárdex</em>, como se muestra en la siguiente figura:
            .row.justify-content-center
              .col-lg-11.mb-2
                .titulo-sexto.color-acento-contenido.mb-3
                  p.mb-0 Ejemplo nombramiento de las hojas 
                figure.mb-5(data-aos='')
                  img.mx-auto(src='@/assets/curso/tema1/img22.svg', alt='Ejemplo nombramiento de las hojas', style='width:750px;')

            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span #[strong 2]
                p.mb-0 #[strong Artículos:] en la hoja marcada con este nombre escriba los títulos del libro comenzando en la celda A1, resáltelos en negrita y rellene la celda con color.  Debe quedar como se muestra en la siguiente figura:
            .row.justify-content-center
              .col-lg-11.mb-2
                .titulo-sexto.color-acento-contenido.mb-3
                  p.mb-0 Encabezados hoja para artículos del <em>Kárdex</em>
                figure.mb-5(data-aos='')
                  img.mx-auto(src='@/assets/curso/tema1/img23.svg', alt='Encabezados hoja para artículos del kárdex', style='width:750px;')
            
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span #[strong 3]
                p.mb-0 #[strong Datos:] en la hoja marcada con este nombre escriba los títulos del libro comenzando en la celda B2, resáltelos en negrita y rellene la celda con color.  Observe el ejemplo guía en la siguiente figura:
            .row.justify-content-center
              .col-lg-11
                .titulo-sexto.color-acento-contenido.mb-3
                  p.mb-0 Encabezados hoja de datos del <em>Kárdex</em>
                figure.mb-4(data-aos='')
                  img.mx-auto(src='@/assets/curso/tema1/img24.svg', alt='Encabezados hoja de datos del Kárdex', style='width:750px;')
                p.mb-3 Se formulan las columnas: total compra y total venta, las demás se alimentan según los hechos económicos de la empresa.  La siguiente figura le ayuda a identificar estas columnas:
                .titulo-sexto.color-acento-contenido.mb-3
                  p.mb-0 Columnas a formular en la hoja de datos
                .row.justify-content-center
                  .col-lg-8
                    figure.mb-4(data-aos='')
                      img.mx-auto(src='@/assets/curso/tema1/img25.svg', alt='Columnas a formular en la hoja de datos', style='width:750px;')
                  .col-lg-4.align-self-center.mb-2
                    p.mb-2 Mire cómo quedan las fórmulas:
                    p.mb-0 #[strong Valor total compra =+G2*I2]
                    p #[strong Valor total venta =+H13*K13]
                .cajon.color-primario.p-4.mb-0(style='background-color:#fff;')
                  p.mb-0 #[strong Recuerde:] en esta hoja se alimenta la información en orden cronológico como se hace en el libro diario.

      .col-lg-12.mt-4.mb-4.px-5
        .row.justify-content-center
          .col-lg-4
            figure.mb-2(data-aos='fade-right')
              img.img-size.mx-auto(src='@/assets/curso/tema1/img26.svg', alt='imagen ambiental', style='')
          .col-lg-8
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span #[strong 4]
                p.mb-0 
                  b <em>Kárdex:</em> 
                  b-none en la hoja marcada con este nombre escriba los títulos del libro comenzando en la celda B2, resáltelos en negrita y rellene la celda con color.  Use como guía la siguiente figura:
            .row.justify-content-center
              .col-lg-11
                .titulo-sexto.color-acento-contenido.mb-3
                  p.mb-0 Encabezados hoja de <em>kárdex</em>
                figure.mb-4(data-aos='')
                  img.mx-auto(src='@/assets/curso/tema1/img27.svg', alt='Encabezados hoja de kárdex ', style='width:550px;')
                p.mb-5 Tenga presente que en esta hoja se formulan todas las columnas.
            
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span #[strong 5]
                p.mb-0 Mire cómo quedan las fórmulas:
            .row.justify-content-center
              .col-lg-11
                p.mb-0 #[strong Código:] =ARTICULOS! B2
                p.mb-1 #[strong Artículo:]  =ARTICULOS! A2
                figure.mb-4(data-aos='')
                  img(src='@/assets/curso/tema1/img-txt1.svg', alt='formula', style='width: 550px;')
                //p.mb-4 #[strong Vr. Unitario:] =SI.ERROR(SUMAR.SI. CONJUNTO(DATOS!J:J;DATOS!C:C;A7)/D7;"")

                p.mb-0 #[strong Entradas]
                figure.mb-4(data-aos='')
                  img(src='@/assets/curso/tema1/img-txt2.svg', alt='formula', style='width: 650px;')
                //p.mb-4 Cantidad: =SI.ERROR(SUMAR.SI.CONJUNTO(DATOS!$G$2:$G$52;DATOS!$C$2:$C$52;A7);””)
                
                p.mb-4 Valor: =SI.ERROR(+C7*D7;"")
                
                p.mb-0 #[strong Salidas]
                figure.mb-4(data-aos='')
                  img(src='@/assets/curso/tema1/img-txt3.svg', alt='formula', style='width: 650px;')
                //p.mb-4 Cantidad: =SI.ERROR(SUMAR.SI.CONJUNTO(DATOS!$H$2:$H$52;DATOS!$C$2:$C$52;A7);"")

                p.mb-4 Valor: =SI.ERROR(+C7*F7;"")

                p.mb-0 #[strong Saldos]
                p.mb-0 Cantidad: =+D7-F7
                p.mb-4 Valor  =SI.ERROR(+E7-G7;"")

                .cajon.color-primario.p-4.mb-4(style='background-color:#fff;')
                  p.mb-0 #[strong Recuerde:] en esta hoja se muestra en forma resumida la información de la hoja de datos.

                p.mb-4 Para explorar y descubrir el paso a paso de cada fórmula cópiela en una celda de Excel y luego en la barra dé clic en fx, como se muestra en la siguiente figura:

                .titulo-sexto.color-acento-contenido.mb-3
                  p.mb-0  Botón funciones
                figure.mb-4(data-aos='')
                  img(src='@/assets/curso/tema1/img28.jpg', alt=' Botón funciones ', style='width:345px;')


    separador
    #t_1_5.titulo-segundo
      .h2 1.5 Comprobante de cierre y ajustes
    
    .row.justify-content-center 
      .col-lg-5.align-self-center
        figure.mb-4(data-aos='fade-right')
          img(src='@/assets/curso/tema1/img29.svg', alt='imagen ambiental', style='width:505px;')
      .col-lg-7
        .cajon-b.color-acento-contenido.p-3.px-0.mb-0
          p.mb-0 El proceso de depuración de las cuentas de resultados es lo que se conoce como cierre contable. Consiste en cancelar las cuentas de resultados, es decir, llevar las cuentas de ingresos, costos y gastos hasta el saldo cero.
        p.mb-3  Para lograr este objetivo se utiliza una cuenta transitoria denominada pérdidas y ganancias (5905), a la cual llegan todos los saldos que se extraen de las cuentas de resultados y por tanto, refleja el resultado del ejercicio.
        p.mb-4 La operación es sencilla, como los costos y gastos aumentan por el débito, el ajuste será tomar el saldo de la cuenta, llevarlo al crédito de la misma y luego registrarlo en el débito de la cuenta transitoria de pérdidas y ganancias; el mismo proceso se realiza con los ingresos, que al ser de naturaleza crédito se ajustan con un registro del saldo en el débito y un posterior asiento al crédito de la cuenta pérdidas y ganancias.

    .row.justify-content-center 
      .col-lg-6
        .cajon-b.color-primario.p-3.px-0.mb-0
          p.mb-0 El saldo que se obtenga en la cuenta transitoria indicará si la entidad obtuvo ganancias o pérdidas, que en el caso de las entidades sin ánimo de lucro se denominan excedentes o pérdidas.
        p.mb-3  Cuando el saldo de la cuenta transitoria sea débito, la interpretación será que fueron mayores los costos y gastos y por tanto, se originó una pérdida; si por el contrario el saldo fue crédito, significa que fueron mayores los ingresos y por tanto, hay un resultado positivo que se traduce en utilidad.
        p.mb-4 Después de haber llevado todas las cuentas de resultados a la cuenta transitoria de pérdidas y ganancias, el saldo de esta última se cancela contra la cuenta del patrimonio resultados del ejercicio (3605 o 36109).
      .col-lg-6.align-self-center
        figure.mb-4(data-aos='fade-left')
          img.mx-auto(src='@/assets/curso/tema1/img30.svg', alt='imagen ambiental', style='width:605px;')
    
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Para efectos de la presentación en los estados financieros, cuando el resultado del período haya sido pérdida, se mostrará el valor restando, para tal fin suelen usarse los paréntesis, pero también se puede anteceder un signo negativo en el patrimonio (Actualícese, 2016).
    
    .row.justify-content-center.fondo-custom2
      .col-lg-12.mt-5.mb-0.px-5
        .row.justify-content-center
          p.mb-3 #[strong Ejemplo:]
          .col-lg-6
            a.anexo.mb-4.ms-0(href="https://actualicese.com/cierre-contable-elementos-basicos/?utm_source=actualicese-email-marketing&utm_medium=boletin-diario&utm_campaign=04-02-2016&utm_content=cierre-contable-elementos-basicos&campana" target="_blank" style='background-color:#fff;')
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.mb-0 #[strong Enlace web.] Para ver un ejemplo paso a paso sobre un cierre contable revise el siguiente enlace.
            
            p.mb-3 Para construir el comprobante contable de cierre en Excel proceda como en los puntos anteriores, creando una nueva hoja como se muestra en la siguiente figura:
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 Comprobante de cierre
            figure.mb-5(data-aos='')
              img.mx-auto(src='@/assets/curso/tema1/img32.svg', alt='Comprobante de cierre', style='width:505px;')
            
            p.mb-3 Ahora, en la hoja denominada comprobante de cierre, cree los encabezados sugeridos en la siguiente figura:
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 Encabezados hoja comprobante de cierre
            figure.mb-5(data-aos='')
              img.mx-auto(src='@/assets/curso/tema1/img33.svg', alt='Encabezados hoja comprobante de cierre', style='width:445px;')
            
            p.mb-5 Por último, registre los asientos de cierre tal como lo haría en la hoja de libro diario.
          
          .col-auto
            figure.mb-4(data-aos='fade-left')
              img.mx-auto(src='@/assets/curso/tema1/img31.svg', alt='imagen ambiental', style='width:505px;')

    separador
    #t_1_6.titulo-segundo
      .h2 1.6 Balance de prueba ajustado
  
    p.mb-4 Contiene los saldos de las cuentas de libro mayor, después de ser afectadas por los asientos de ajuste. Es un documento interno y no es un estado financiero.
    p.mb-4 A continuación, se describe el proceso para la construcción del balance de prueba ajustado en una hoja de cálculo:
    .row.justify-content-center
      .col-lg-4
        figure.mb-4(data-aos='fade-left')
          img.mx-auto(src='@/assets/curso/tema1/img34.svg', alt='imagen ambiental', style='width:400px;')
      .col-lg-8
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span #[strong 1]
            p.mb-0 Para construirlo inicie con la creación de una nueva hoja con el nombre: Balance de prueba ajustado, como se observa en la siguiente figura:
        .row.justify-content-center
          .col-lg-11
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0  Balance de prueba ajustado
            figure.mb-5(data-aos='')
              img.mx-auto(src='@/assets/curso/tema1/img35.svg', alt='Balance de prueba ajustado', style='width:490px;')
        
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span #[strong 2]
            p.mb-0 Cree los encabezados en la hoja que acaba de nombrar como se muestra en la siguiente figura:
        .row.justify-content-center
          .col-lg-11
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0   Encabezados hoja balance de prueba
            figure.mb-5(data-aos='')
              img.mx-auto(src='@/assets/curso/tema1/img36.svg', alt=' Encabezados hoja balance de prueba', style='width:560px;')
        
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span #[strong 3]
            p.mb-0 Formule todas las columnas, a continuación, encontrará las fórmulas, use los procedimientos aprendidos para construirlas directamente en la hoja o copie y pegue cada fórmula en la columna sugerida:
        .row.justify-content-center
          .col-lg-11
            p.mb-0 #[strong Código:]  =+'Libro Mayor'!B5
            p.mb-4 #[strong Descripción de la cuenta:]  =+'Libro Mayor'!C5
            
            p.mb-0 #[strong Saldos iniciales:] corresponden a los valores de la columna de los saldos finales del libro mayor.
            p.mb-0 #[strong Débito:] =+'Libro Mayor'!H5
            p.mb-4 #[strong Crédito:] =+'Libro Mayor'!I5

            p.mb-3 #[strong Movimiento:] valores del comprobante de ajuste, utilice de nuevo la fórmula sumar.si.conjunto, que se aplicó en el libro mayor.
            
            .cajon.color-secundario.p-4.mb-3
              p.mb-4 La fórmula quedará así: 
              figure
                img.mx-auto(src="@/assets/curso/tema1/formula2.svg", alt="formula", style='')
              
        
            p.mb-3 #[strong Saldos finales:] sumar las columnas de los saldos iniciales y del movimiento de la naturaleza de la cuenta y restarles los de la naturaleza contraria.
        
            .cajon.color-acento-contenido.p-4.mb-3
              p.mb-0 #[strong Ejemplo:] para el caso de la cuenta 110505 Caja general, se suma el saldo inicial débito con el movimiento débito y se resta el movimiento crédito.
        
        
        
        








</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
