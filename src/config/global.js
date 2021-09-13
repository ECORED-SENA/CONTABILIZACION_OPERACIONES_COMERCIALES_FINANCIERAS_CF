export default {
  global: {
    componenteFormativo: 'Herramientas TIC en el proceso contable',
    descripcionCurso:
      'Las herramientas informáticas que ayudan a las organizaciones a maximizar su rendimiento generando eficacia operativa forman parte de su inteligencia del negocio (Dávila, 2005), entre ellas las hojas de cálculo y los <em>software</em> contables.  Este componente permite conocer la estructura, uso e importancia de las hojas de cálculo y el <em>software</em> contable en las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/banner.gif'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Hoja de cálculo “Excel”',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos de las hojas de cálculo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Libro diario',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Libro mayor',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: '<em>Kárdex</em> del inventario',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Comprobante de cierre y ajustes',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Balance de prueba ajustado',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Software</em> contable “SIIGO”',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Interfaz de usuario',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ingreso al <em>software</em>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Entorno del <em>software</em>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Ingreso de información al <em>software</em>',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Generación de reportes',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Actualícese. (2016). Cierre contable: elementos básicos. Actulicese.com. ',
      link:
        'https://actualicese.com/cierre-contable-elementos-basicos/?utm_source=actualicese-email-marketing&utm_medium=boletin-diario&utm_campaign=04-02-2016&utm_content=cierre-contable-elementos-basicos&campana',
    },
    {
      referencia:
        'Aprender Gratis. (2021). Curso básico de EXCEL |Aprende a usar Excel paso a paso | Video 1 [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=zv-hH1UKdlg',
    },
    {
      referencia:
        'Castillo, A., González, E. y López, P. (2012). Conceptos básicos sobre hojas de cálculo [Apuntes]. Universidad de Sonora. ',
    },
    {
      referencia:
        'Centro de computación y desarrollo empresarial. (s.f.). Qué es Excel y para qué usarlo en tu vida diaria. Cecodeem. ',
      link:
        'https://cecodeem.com/2505/que-es-excel-y-para-que-usarlo-en-tu-vida-diaria/',
    },
    {
      referencia:
        'Colaboradores de Wikipedia. (2021). Wikipedia, la enciclopedia libre. ',
      link: 'https://es.wikipedia.org/',
    },
    {
      referencia:
        'Dávila, L. F. (2005). Hacia la inteligencia del negocio con Excel 2003. Institución Universitaria Politécnico Grancolombiano. ',
      link:
        'https://books.google.com.co/books/about/Hacia_la_inteligencia_del_negocio_con_ex.html?id=2zluPQAACAAJ&redir_esc=y',
    },
    {
      referencia:
        'Oxford University Press. (2021). Léxico. Diccionario de inglés y español. ',
      link: 'https://www.lexico.com/',
    },
    {
      referencia:
        'Salazar, F. (2020). Ingreso y navegación SIIGO nube [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=Lotjwd3uHvo',
    },
    {
      referencia: 'Siigo. (2021). Divulgación académica. Siigo. ',
      link: 'https://divulgacionacademica.siigo.com',
    },
    {
      referencia:
        'SPnet. (2021). TOP 14 programas de contabilidad para Pymes y empresas. softwarepara.net. ',
      link: 'https://softwarepara.net/contable/',
    },
  ],
  glosario: [
    {
      termino: 'Contabilidad',
      significado:
        'Es la técnica aplicada en el lenguaje comercial que organiza procesos financieros de forma cronológica y sistemática para apoyar en la toma de decisiones a la administración, acerca de todos los procesos financieros en una empresa.',
    },
    {
      termino: 'Creación de fórmulas',
      //terminoHtml: '<em>Suftware</em>',
      significado:
        'Las fórmulas siguen una sintaxis específica u orden, que incluye un signo igual (=) seguido de los elementos que van a calcularse, que están separados por operadores de cálculo.',
    },
    {
      termino: 'Cuenta',
      significado:
        'Es la estructura caracterizada por códigos o números que acorde a su naturaleza identifican partidas contables inherentes a estados financieros dentro de cada una de sus estructuras, sirven para construir contabilidad y dar un orden al lenguaje de los negocios, atendiendo siempre el principio universal de la partida doble.',
    },
    {
      termino: 'Fórmula',
      //terminoHtml: '<em>Áectores</em>',
      significado:
        'Son instrucciones que se ingresan para realizar cálculos y siguen una secuencia específica al realizarlas. Esto se conoce como el orden en las operaciones: 1) paréntesis, 2) exponentes, 3) multiplicación y división, 4) suma y resta.',
    },
    {
      termino: 'Gráficas',
      significado:
        'Son dibujos que permiten presentar la información de manera visual, por medio de líneas, barras, círculos, áreas, etc.',
    },
    {
      termino: 'Rango',
      significado:
        'Conjunto de dos o más celdas que contengan datos, en estas pueden aplicarse operaciones o servir de base para otros objetos de la planilla de cálculo, por ejemplo, para hacer gráficos.',
    },
  ],
  complementario: [
    {
      texto:
        'Aprender Gratis. (2021). Curso básico de Excel |Aprende a usar Excel paso a paso | Video 1 [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/zv-hH1UKdlg',
    },
    {
      texto:
        'El tío Tech. (2019). Curso básico de Excel - completo 2020 [video]. YouTube.   ',
      tipo: 'Video',
      link: 'https://youtu.be/v_R5SaMTlug',
    },
    {
      texto:
        'Arroyave, O. (2020). Tutorial de creación de comprobantes contables en SIIGO [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dXKOtMTDQBk',
    },
    {
      texto:
        'Canal de contabilidad. (2020). Video consulta reportes informes SIIGO nube 14 [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0ph2TiDT19k',
    },
    {
      texto:
        'Canal de contabilidad. (2020). Creación de terceros en SIIGO nube 4 [video]. YouTube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ua0MiD5dD4U',
    },
    {
      texto:
        'Canal de contabilidad. (2020). Video incorporación saldos iniciales SIIGO nube 8 [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=n2Kwwb5-rz4',
    },
    {
      texto:
        'Canal de contabilidad. (2020). Parametrización documentos SIIGO nube 6 [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7u2vBkLrCDs',
    },
    {
      texto:
        'Elprofesiigo. (2020). Configuración comprobantes_2020 [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FJoy3FGQA8I',
    },
    {
      texto: 'Elprofesiigo. (2020). Apertura_2020 [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3ZqiL4NcWxA',
    },
    {
      texto: 'Elprofesiigo. (2020). Leccion3_2020 [video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HglADv5BOzY',
    },
    {
      texto:
        'Elprofesiigo. (2020). Contabilización de la nómina Siigo nube [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=D1yqMf3AIGQ',
    },
    {
      texto:
        'Elprofesiigo. (2020). Sesión 1 Siigo nube módulo nómina [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=C2EiuXlGByg',
    },
    {
      texto:
        'Elprofesiigo. (2020). Lección 5 2020 Registro de compra de activos en Siigo nube [video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=g0SQyTDYm38',
    },
    {
      texto:
        'Gil, E. (2020). Video tutorial creación grupo de activos fijos SIIGO nube [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZZboyObEWYQ',
    },
    {
      texto:
        'Salazar, F. (2020). Ingreso y navegación SIIGO nube [video]. YouTube.    ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Lotjwd3uHvo',
    },
    {
      texto:
        'Siigo Colombia. (2017). Siigo nube - Elaboración de gastos [video]. YouTube.    ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ucrHzV53Ut8',
    },
    /*{
      texto:
      'Siigo Colombia. (2020). Seminario: la nómina de Siigo nube [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UpoGabOj5dU',
    },*/
    {
      texto:
        'Siigo Colombia. (2017). Siigo nube - Configuración de la factura de venta [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FjWFSKgwk0E',
    },
    {
      texto:
        'Videos Siigo. (2020). Siigo nube - Aprende todo lo que puedes hacer con tu <em>software</em> administrativo [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Njn33SBa5SI',
    },
    {
      texto:
        'Videos Siigo. (2020). Inventario y costeo en Siigo nube [video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1zQGA_1AXb4',
    },
    {
      texto: 'Videos Siigo. (2020). 1erPasos Siigo Nube [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=46P-d4s_ojc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina María Guzmán Guasca',
        cargo: 'Experta temática',
        centro: 'Centro de Comercio - Regional Antioquia',
      },
      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      /*{
        nombre: '',
        cargo: '',
        centro:
          '',
      },
      {
        nombre: '',
        cargo: '',
        centro:
          '',
      },*/
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Blanca Flor Tinoco Torres'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro de Comercio y Servicios - Regional Tolima',
      },*/
      /*{
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },*/
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
