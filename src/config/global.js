export default {
  global: {
    componenteFormativo: 'Arquitectura y servicios',
    descripcionCurso:
      'La arquitectura de <em>software</em> es un método de desarrollo que emplea componentes, llamados servicios, en la creación de aplicaciones. Estos servicios brindan una capacidad a la organización y pueden comunicarse con el resto de servicios a través de diferentes plataformas y lenguajes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
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
        titulo: 'Arquitectura y servicios',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Arquitectura y plan de contingencias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Instalación, configuración, <em>hosting</em>, dominio y FTP ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Arquitectura y servicios',
      referencia:
        'Martínez, J. (2020). <em>Clustering (agrupamiento), K-Means con ejemplos en phyton.</em>  IArtificial.',
      tipo: 'Web',
      link:
        'https://www.iartificial.net/clustering-agrupamiento-kmeans-ejemplos-en-python/ ',
    },
    {
      tema: 'Arquitectura y servicios',
      referencia:
        'Amat, J. (2017). <em>Clustering y heatmaps: aprendizaje no supervisado.</em> Ciencia de Datos.',
      tipo: 'Web',
      link:
        'https://www.cienciadedatos.net/documentos/37_clustering_y_heatmaps#Introducci%C3%B3n',
    },
    {
      tema: 'Arquitectura y servicios',
      referencia:
        'Ilimit. (2020). <em>La importancia de una arquitectura distribuida.</em> Ilimit.',
      tipo: 'Web',
      link:
        'https://www.ilimit.com/blog/importancia-arquitectura-distribuida/#:~:text=Qu%C3%A9%20es%20un%20sistema%20distribuido,o%20el%20almacenamiento%20de%20informaci%C3%B3n ',
    },
    {
      tema: 'Arquitectura y servicios',
      referencia:
        'Losada, S. (2018). <em>Qué es un sistema distribuido y qué ventajas aporta su funcionamiento.</em> OpenWebinars.',
      tipo: 'Web',
      link: 'https://openwebinars.net/blog/que-es-un-sistema-distribuido/ ',
    },
    {
      tema: 'Instalación, configuración, <em>hosting</em>, dominio y FTP.',
      referencia:
        'Luque, R. (2020). <em>Cómo crear una arquitectura web óptima para SEO.</em> SEO Alive',
      tipo: 'Web',
      link: 'https://seoalive.com/arquitectura-web/ ',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura',
      significado:
        'en el entorno del <em>software</em>, este término hace referencia a la estructura y forma que tienen los sistemas de información a partir de estándares que han surgido de las necesidades de implementación.',
    },
    {
      termino: 'Arreglos',
      significado:
        'es una colección ordenada de datos, datos estáticos, y son utilizados para almacenar valores en una sola variable.',
    },
    {
      termino: 'Cliente',
      significado:
        'en el ámbito de los sistemas, un cliente es quien realiza una petición o solicitud, la cual es respondida por un servidor.',
    },
    {
      termino: 'Clúster',
      significado:
        'es la conexión que se efectúa normalmente entre dos equipos para segmentar o dividir las tareas solicitadas, en este caso, un clúster agrupa los equipos para trabajar en un sistema con un fin determinado.',
    },
    {
      termino: 'FTP',
      significado:
        'protocolo de transferencia de archivos, es de tipo cliente – servidor, funciona a través de una red de internet.',
    },
    {
      termino: 'Gestor de contenidos',
      significado:
        'ayuda a la creación de sitios web, permitiendo, de esa manera, la gestión, organización y administración de forma fácil y eficaz de la aplicación web que se esté construyendo.',
    },
    {
      termino: 'Monousuario',
      significado:
        'se dice de los sistemas operativos en los que solo pueden trabajar un usuario de manera simultánea.',
    },
    {
      termino: 'Multiusuario',
      significado:
        'sistema operativo en el que varios usuarios trabajan de forma concurrente.',
    },
    {
      termino: 'Servidor',
      significado:
        'proporciona o provee recursos, servicios, datos, programas y permisos a la entidad cliente.',
    },
    {
      termino: 'SSH',
      significado:
        'es un protocolo de administración remota con un canal seguro que permite cifrar la información que pasa en él.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, M. (2010). Gestión de procesos de negocios en función de una arquitectura orientada a servicios. <em>Revista de Ciencias Económicas</em>, 28(1), p. 297-312. ',
      link:
        'https://revistas.ucr.ac.cr/index.php/economicas/article/view/7076/6761',
    },
    {
      referencia:
        'Descrier. (2017). <em>cPanel web hosting control panel.</em> Flickr. ',
      link: 'www.flickr.com/photos/descrier/37286809866/in/photostream/',
    },
    {
      referencia: 'Dropbox. (2022). <em>¿Qué es el FTP?</em> Dropbox. ',
      link:
        'https://experience.dropbox.com/es-la/resources/what-is-ftp#:~:text=FTP%20son%20las%20siglas%20en,electr%C3%B3nicos%20se%20comuniquen%20entre%20s%C3%AD',
    },
    {
      referencia:
        'Leemyongpak. (2021). <em>WordPress 5.7 Dashboard.</em> Wikimedia. ',
      link:
        'https://commons.wikimedia.org/wiki/File:Wordpress_5.7_Dashboard.png',
    },
    {
      referencia: 'Pardo, A. (2010). <em>Magento Admin</em>. Wikimedia. ',
      link:
        'https://commons.wikimedia.org/wiki/File:Magento_Admin_Panel_screenshot.jpg',
    },
    {
      referencia:
        'Prieto, G. (2022). <em>¿Qué diferencia hay entre hosting y dominio? La explicación más sencilla y completa.</em> GoDaddy.',
      link:
        'https://co.godaddy.com/blog/diferencia-entre-hosting-y-dominio-co/#:~:text=En%20resumen%2C%20el%20alojamiento%20web,para%20acceder%20al%20sitio%20web.',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
