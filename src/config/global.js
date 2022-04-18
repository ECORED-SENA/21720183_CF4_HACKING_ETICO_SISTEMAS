export default {
  global: {
    componenteFormativo:
      'Ingeniería social y detección de intrusos en <em>hacking</em> ético',
    descripcionCurso:
      'La seguridad informática se ha convertido hoy en día en una preocupación para empresas y organizaciones en medio del mundo digital, es por ello que es importante conocer y aplicar diferentes herramientas digitales para ciberseguridad y conocer las vulnerabilidades y ataques a los cuales están expuestos los sistemas y redes y así protegerlos de cibercriminales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Ingeniería social',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos y generalidades',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos y fases de la ingeniería social',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Riesgos de suplantación (redes sociales)',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ataques y riesgos (vulnerabilidades)',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: '<em>Pentesting</em>',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Denegación de servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos y generalidades',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas y técnicas de ataque',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<em>Botnets</em>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Contramedidas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Detección y evasión de intrusos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos y generalidades',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de <em>IDS</em>',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '<em>Firewall</em> y <em>Honeypot</em>',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Evasión de <em>IDS</em> y <em>firewalls</em>',
            hash: 't_3_4',
          },
        ],
      },
      // {
      //   nombreRuta: 'tema10',
      //   icono: 'far fa-file-alt',
      //   numero: '10',
      //   titulo: 'Componentes',
      //   desarrolloContenidos: true,
      //   subMenu: [
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.1',
      //       titulo: 'Encabezados',
      //       hash: 'encabezados',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.2',
      //       titulo: 'Párrafos',
      //       hash: 'parrafos',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.3',
      //       titulo: 'Botones',
      //       hash: 'botones',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.4',
      //       titulo: 'Listas',
      //       hash: 'listas',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.5',
      //       titulo: 'Tablas',
      //       hash: 'tablas',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.6',
      //       titulo: 'Imagen',
      //       hash: 'imagen',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.7',
      //       titulo: 'Imagen Infográfica',
      //       hash: 'imagen_infografica',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.8',
      //       titulo: 'Video',
      //       hash: 'video',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.9',
      //       titulo: 'Bloques de texto destacado',
      //       hash: 'texto_destacado',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.10',
      //       titulo: 'Sliders',
      //       hash: 'sliders',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.11',
      //       titulo: 'Acordiones',
      //       hash: 'acordiones',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.12',
      //       titulo: 'Pestañas o Tabs',
      //       hash: 'tabs',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.13',
      //       titulo: 'Líneas de tiempo',
      //       hash: 'lineas_tiempo',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.14',
      //       titulo: 'Pasos',
      //       hash: 'pasos',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.15',
      //       titulo: 'Llamados a la acción',
      //       hash: 'llamados_accion',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.16',
      //       titulo: 'Tarjetas',
      //       hash: 'tarjetas',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.17',
      //       titulo: 'Tarjetas con número',
      //       hash: 'tarjeta_numero',
      //     },
      //     {
      //       icono: 'far fa-file-alt',
      //       numero: '1.18',
      //       titulo: 'Modal',
      //       hash: 'modal',
      //     },
      //   ],
      // },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
      referencia: 'Borges, E. (2019a). Servidor FTP. Infranetworking.',
      link: 'https://blog.infranetworking.com/servidor-ftp/',
    },
    {
      referencia: 'Borges, S. (2019b). Servidor <em>web</em>. Infranetworking.',
      link: 'https://blog.infranetworking.com/servidor-<em>web</em>/',
    },
    {
      referencia:
        'Caballero, A. (2015). Introducción a OSSTMM (Open Source Security Testing Methodology Manual). REYDES. ',
      link:
        'http://www.reydes.com/d/?q=Introduccion_a_OSSTMM_Open_Source_Security_Testing_Methodology_Manual.',
    },
    {
      referencia:
        'Castillo, J. (2018). Active Directory qué es y para qué sirve. Profesional Review. ',
      link: 'https://www.profesionalreview.com/2018/12/15/active-directory/',
    },
    {
      referencia:
        'Echeverry, J. (2009). Metodología para el diagnóstico continuo de la seguridad informática de la red de datos de la Universidad Militar Nueva Granada. Semantic Scholar.',
      link:
        'https://pdfs.semanticscholar.org/60c7/dbe2abab31a25422c92ead74085fd7093715.pdf',
    },
    {
      referencia:
        'Gaviria, R. (2015). Guía práctica para pruebas de pentest basada en la metodología OSSTMM V2.1 y la guía OWASP V3.0. Universidad Libre Seccional Pereira. ',
      link: 'https://hdl.handle.net/10901/17296',
    },
    {
      referencia:
        'Instituto Nacional de Ciberseguridad [INCIBE]. (2017). Amenaza vs vulnerabilidad, ¿sabes en qué se diferencian?.',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/amenaza-vs-vulnerabilidad-sabes-se-diferencian',
    },
    {
      referencia:
        'Jimenez, J. (2021), Tipos de ataques de ingeniería social y cómo evitarlos. Redes Zone.',
      link:
        'https://www.redeszone.net/tutoriales/seguridad/tipos-ataques-ingenieria-social-consejos/',
    },
    {
      referencia:
        'LISA Institute. (2020). Guía práctica contra la ingeniería social. ',
      link:
        'https://www.lisainstitute.com/blogs/blog/guia-practica-ingenieria-social',
    },
    {
      referencia:
        'Martinez, E. (2018). Las diferentes amenazas de seguridad informática. Las amenazas la informática.',
      link: 'https://sites.google.com/site/lasamenazaslainformatica/',
    },
    {
      referencia:
        'Zuluaga, A. (2017). <em>Hacking</em> ético basado en la metodología abierta de testeo de seguridad – OSSTMM, aplicado a la rama judicial, seccional Armenia. Universidad Nacional Abierta y a Distancia.',
      link:
        'https://stadium.unad.edu.co/preview/UNAD.php?url=/bitstream/10596/17410/1/94288061.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Componente o funcionalidad de un sistema, el cual puede ser atacado por parte de un ciberdelincuente, ya sea a nivel de <em>software</em> o de <em>hardware</em>.',
    },
    {
      termino: 'Análisis de tráfico',
      significado:
        'Observación del comportamiento de los datos en una red por un canal de transmisión de información.',
    },
    {
      termino: 'Antispam',
      significado:
        'Herramienta por la cual se infiere en las contramedidas en la contención de correos electrónicos.',
    },
    {
      termino: 'Basura',
      significado:
        'Obtención de datos a partir de la basura de las personas o empresas, los cuales pueden brindar información relevante para un posible ataque.',
    },
    {
      termino: 'Ciberespionaje',
      significado:
        'Actividad que tienen los hackers en el mundo digital para poder obtener información y datos sensibles, los cuales pueden obtenerse de manera pasiva o activa.',
    },
    {
      termino: 'Falso positivo',
      significado:
        'Son bugs o errores que se producen cuando un sistema puede diagnosticar como actividad normal un ataque de un ciberdelincuente.',
    },
    {
      termino: 'Ingeniería social',
      significado:
        'Técnica que se basa en engañar la conducta de una persona para que nos pueda brindar información relevante, con el fin de realizarle un ataque.',
    },
  ],
  complementario: [
    {
      texto:
        'LISA Institute. (2020). Guía práctica contra la ingeniería social.',
      tipo: 'Artículo',
      link:
        'https://www.lisainstitute.com/blogs/blog/guia-practica-ingenieria-social  ',
    },
    {
      texto: 'Wild IT Academy. (2020). Ataques de Denegación de Servicio.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=c4JnYZYokJ8 ',
    },
    {
      texto:
        'Jimenez, J. (2021), Tipos de ataques de ingeniería social y cómo evitarlos. Redes Zone.',
      tipo: 'Página <em>Web</em>',
      link:
        'https://www.redeszone.net/tutoriales/seguridad/tipos-ataques-ingenieria-social-consejos/ ',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño <em>web</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
