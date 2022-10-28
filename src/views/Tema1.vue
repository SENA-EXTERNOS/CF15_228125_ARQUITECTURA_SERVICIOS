<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Arquitectura y servicios 

    .row.justify-content-around.align-items-center

      p Para comenzar, se definirán primero algunos términos.

      p #[strong Los términos relacionados con arquitectura y servicios son:] 
      br
      br
      
      //Tabs verticales
      .row
        .col-lg-8.order-2.order-lg-1.bloque-tarjetas-pestanas-verticales-tema1
          TabsA.color-acento-botones.mb-5        
            .tarjeta.color-tarjetas-pestanas-verticales-tema1.clr-paleYellow.p-4(titulo="Arquitectura").bloque-texto-pestanas-verticales
              h4 Arquitectura
              p Es complejo definirla por su amplia relación con distintos campos y aspectos, por ejemplo, la construcción y diseño, o el <em>hardware</em> o el <em>software</em>, por mencionar solo algunos.
              br
              br
            .tarjeta.color-tarjetas-pestanas-verticales-tema1.clr-paleYellow.p-4(titulo="Arquitectura de sistemas").bloque-texto-pestanas-verticales
              h4 Arquitectura de sistemas
              p Se basa en la estructura y funcionamiento de dichos sistemas, en este caso es intangible, pero, a su vez, medible y administrable.

            .tarjeta.color-tarjetas-pestanas-verticales-tema1.clr-paleYellow.p-4(titulo="Arquitectura de <em>software</em>").bloque-texto-pestanas-verticales
              h4 Arquitectura de <em>software</em>
              p Forma de implementar, organizar, diseñar y poner en marcha los elementos que componen una plataforma de desarrollo, mediante técnicas que se llevan a cabo a través de estándares de calidad y servicio.

            .tarjeta.color-tarjetas-pestanas-verticales-tema1.clr-paleYellow.p-4(titulo="Arquitectura para desarrollo de aplicaciones").bloque-texto-pestanas-verticales
              h4 Arquitectura para desarrollo
                | de aplicaciones
              p Está orientada a servicios, permite que se amplíen las funcionalidades de cada sistema al estar implementado por servicios separados que se unen para completar un todo. Además, es reutilizable para otras plataformas o aplicaciones sin afectar su estado anterior.


        .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(data-aos="fade-right")(src="@/assets/curso/temas/imagen-pestanas-tema1.png", alt="alt", style="width:450px;").m-auto

    br
    br
    .row.justify-content-around.align-items-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p El desarrollo de <em>software</em> requiere una implementación basada en una arquitectura orientada a servicios que se adapte a las necesidades del cliente que requiere ponerlo en marcha e implica una mejor organización y control en cuanto a la infraestructura modular, además de un mejor despliegue. A su vez, se diferencia de sistemas monolíticos basados en una sola aplicación en la que todas sus capas (acceso a datos, lógica de negocio e interfaz de usuario) se encuentran en un solo componente, precisando mayor trabajo a la hora del mantenimiento, solución de inconvenientes o actualización y control del sistema. 

    br
    br
    .row.justify-content-around.align-items-center

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(data-aos="fade-left")(
          :style="{'background-image': `url(${require('@/assets/curso/temas/imagen-mitad-texto-color.png')})`}"
        )
        .bloque-texto-mitad-color-tema1
          .bloque-texto-g__texto.p-4
            p.texto-interno-bloque-texto-mitad-color-tema1 Es así como la arquitectura orientada a servicios permite unificar varias funcionalidades para la solvencia de usuarios, empresas y procesos que definen la forma más simple para todos, al permitir disminución de costes toda vez que los servicios sean reutilizados, favoreciendo que las organizaciones y los grupos de desarrollo unifiquen aplicaciones creadas con tecnologías diversas y con funcionamiento operativo. Esta arquitectura disminuye costos por el aprovechamiento sistemático de los recursos utilizados en procesos diferentes como implementación, pruebas y puesta en marcha. Es en ese sentido que SOA, por sus siglas en inglés Service-Oriented Architectures, presenta grandes beneficios para el desarrollo de las aplicaciones como mantenimiento sencillo, escalabilidad fácil y mejorada, al ser servicios y no aplicaciones completas en un solo componente, confiabilidad e infraestructura heredada. 
    
    separador

    br
    .row.justify-content-around.align-items-center
    
      #sistemas-distribuidos
      .titulo-segundo.color-acento-contenido
        h2 1.1  Sistemas distribuidos  
      
      .row.bloque1-sistemas-distribuidos
          .col-7
            p.texto1-sistemas-distribuidos.p-3 Los sistemas distribuidos, como su nombre lo indica, son programas que cumplen una función específica, formar una aplicación completa que conecta sus tareas y procesos con nodos a una red; estos nodos pueden ser equipos físicos u otros elementos lógicos acoplados entre sí. Estos sistemas permiten estabilidad en la infraestructura de las plataformas tecnológicas, es decir, la aplicación no colapsa cuando un nodo falla o cae, si esto llegara a pasar, los otros nodos podrían seguir ejecutando la aplicación, manteniendo su estado operativo. Estos sistemas son de alta tolerancia a fallos, hacen réplicas de cada uno de los equipos que procesan cada tarea, con el fin de dar seguridad al <em>software</em> base.
          
          .col-5
            figure
              img(data-aos="fade-up-left")(src="@/assets/curso/temas/imagen-sistemas-distribuidos.png").imagen1-sistemas-distribuidos
      
      
      p.texto-inferior-sistemas-distribuidos Los sistemas distribuidos brindan seguridad, estabilidad y confianza, a partir de las funciones de cada uno de los equipos que hacen tareas independientes, al sincronizarse, permanecen alineados en pro de la ejecución y permanencia del sistema. Así, si un nodo falla, los otros procesos siguen su curso con el fin de mantener en línea la aplicación. 
      p.texto-inferior-sistemas-distribuidos A partir de lo anterior, se pueden definir las siguientes características:

    br
    br
    //Tabs verticales
    .row.justify-content-around.align-items-center
      .row
        .col-lg-8.order-2.order-lg-1.bloque-tarjetas-pestanas-verticales-tema1
          TabsA.color-acento-botones.mb-5        
            .tarjeta.color-tarjetas-pestanas-verticales-tema1.clr-paleYellow.p-4(titulo="Concurrencia").bloque-texto-pestanas-verticales
              h4 Concurrencia
              p Ejecuta varias instancias en la misma red de conexión, es decir, todos los nodos se conectan entre sí para llevar a cabo funciones pertinentes que simplifican la magnitud de toda la aplicación y, por tanto, se implementa de forma distribuida.
              br
              br
            .tarjeta.color-tarjetas-pestanas-verticales-tema1.clr-paleYellow.p-4(titulo="Modularidad").bloque-texto-pestanas-verticales
              h4 Modularidad
              p Implementa módulos del programa, aunque no abarca todos los requerimientos de forma general y global en la plataforma porque, a su vez, permite ser escalable al implementar procesamiento, memoria y componentes a los equipos (escalamiento vertical), o al agregar más instancias de equipos para fortalecer tareas (escalamiento horizontal).

            .tarjeta.color-tarjetas-pestanas-verticales-tema1.clr-paleYellow.p-4(titulo="Transparencia").bloque-texto-pestanas-verticales
              h4 Transparencia
              p Se ejecuta en distintos nodos dependiendo la necesidad o la solicitud de cada usuario, sin embargo, se obtiene una respuesta sin saber de dónde proviene, pero, para el solicitante, el proceso es transparente siempre que su petición haya sido respondida.

            .tarjeta.color-tarjetas-pestanas-verticales-tema1.clr-paleYellow.p-4(titulo="Independencia de los componentes").bloque-texto-pestanas-verticales
              h4 Independencia de los componentes
              p Los nodos operan de forma aislada sin depender de los demás, pero, así mismo, trabajan conjuntamente, lo que implica que si un componente de <em>hardware</em> falla, el sistema sigue su ejecución normal sin afectar las funcionalidades.

            .tarjeta.color-tarjetas-pestanas-verticales-tema1.clr-paleYellow.p-4(titulo="Detección de errores").bloque-texto-pestanas-verticales
              h4 Detección de errores
              p Permite fácilmente encontrar errores dentro de algún componente del sistema, por lo que es más simplificado y realiza tareas específicas.



        .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
          figure
            img(data-aos="fade-down-right")(src="@/assets/curso/temas/imagen2-pestanas-tema1.png", alt="alt", style="width:450px;").m-auto

      
    separador

    br
    .row.justify-content-around.align-items-center

        #clustering
        .titulo-segundo.color-acento-contenido
          h2 1.2  Clustering

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(data-aos="fade-down-left")(
            :style="{'background-image': `url(${require('@/assets/curso/temas/imagen1-clustering.png')})`}"
          )
          .bloque-texto-mitad-color-tema1
            .bloque-texto-g__texto.p-4
              p.texto-interno-bloque-texto-mitad-color-tema1 El <em>clustering</em> es un término relacionado con la ciencia de datos y la minería de datos, emplea algoritmos para determinar estructuras de agrupamientos y, de esta manera, se define como el agrupamiento de elementos no supervisado y se ejecuta entre campos que tengan, o no, relación entre ellos para conformar el grupo que es fuente de estudio. Después de contar con la información organizada, se determinan las circunstancias y metodologías por las cuales se tienen consignadas, de tal manera que se fijan las condiciones y el objeto de estudio con respecto a las necesidades que se han planteado.
    br
    br

    .row.justify-content-around.align-items-center
      .col-lg-6
        .cajon.color-acento-contenido.p-4
          p ¿Sabía que los <em>clustering</em> ayudan a organizar y estructurar información que es objeto de estudio para un fin determinado? En el caso de aplicar una promoción en un supermercado, por ejemplo, se cuenta con una base de datos de clientes agrupados por gustos, preferencias, ubicación, periodicidad de compras, etc., por lo que enviar una promoción para cada cliente resulta no solo complejo, sino dispendioso por el uso de una gran cantidad de tiempo. Con <em>clustering</em>, una posible forma sería enviar la promoción a cada cliente de acuerdo con uno o varios criterios seleccionados. 
        br
        p Existen algoritmos <em>clustering</em> que ayudan a agrupar los datos de manera semejante o relacional, dependiendo del tipo de información que se desee evaluar con respecto a clientes, documentos, segmentación de imágenes, etc. Los siguientes son algunos algoritmos <em>clustering</em>.
      
      .col-lg-6
          figure
            img(data-aos="zoom-in")(src="@/assets/curso/temas/imagen2-clustering.png", alt="alt", style="width:450px;").m-auto

    br
    br

    //Tabs horizontales
    .row.justify-content-around.align-items-center
      TabsC.color-primario
        .py-3.py-md-4(titulo="K-Means")
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/temas/imagen1-kmeans-tema1.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen
            .col-md-6.mb-4.mb-md-0
              //h4 Celebrate your failures 1
              p.texto-tabs-horizontales-tema1 Consiste en la realización cíclica para hallar equilibrio y, así, agrupar los elementos llamados K o centroides. Es una metodología ágil que permite hacer pocas iteraciones para llegar al punto de equilibrio.

        .py-3.py-md-4(titulo="DBSCAN")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/imagen-DBSCAN-tema1.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen
            .col-md-6
              //h4 Celebrate your failures 2
              p.texto-tabs-horizontales-tema1 Se relaciona con datos de distinto orden, son datos espaciales, su proceder difiere al de K-Means, siendo un algoritmo sumamente eficiente, las relaciones de sus elementos las realiza sin tener en cuenta el ruido alrededor de la información, como tampoco la lejanía o distancia entre datos.
        
        .py-3.py-md-4(titulo="Mean Shift")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/imagen-Mean Shift-tema1.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen
            .col-md-6
              //h4 Celebrate your failures 2
              p.texto-tabs-horizontales-tema1 Normalmente, usa funciones para los clústeres llamada función <em>kernel</em>, los datos están concentrados en el núcleo o centro de los nodos, e, igualmente, usa una función de densidad para determinar los clústeres relacionados con cada elemento dentro del grupo.

        .py-3.py-md-4(titulo="AGNES")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/imagen-AGNES-tema1.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen
            .col-md-6
              //h4 Celebrate your failures 2
              p.texto-tabs-horizontales-tema1 Emplea un método de conexión para agregar sus elementos de manera secuencial y disciplinada, calculando las distancias de cada dato para agregarlo al clúster.
    br
    separador

    .row.tarjeta.tarjeta--blanca.p-3
      
      #arreglos
      .titulo-segundo.color-acento-contenido
        h2 1.3  Arreglos

      .row
          .col-7.bloque-arreglos-tema1
            p.texto-arreglos-tema1.p-3 Los arreglos son tipos de datos que pueden operar en distintas dimensiones, se conocen también como <em>arrays</em>, vectores o matrices, y manejan índices, en los cuales, el primer elemento de un <em>array</em> es el 0 y, el último, el n-1, siendo n la cantidad de elementos. Los valores de un arreglo son los datos que lo conforman o que están contenidos en él, estos tipos de datos son muy utilizados en los lenguajes de programación actuales como Java, JavaScript, Python, etc., y permiten almacenar valores de forma secuencial. Como se observa en la siguiente imagen, su estructura parece la de una lista. 
          
          .col-5.fondo-imagen-arreglos
            figure
              img(data-aos="flip-up")(src="@/assets/curso/temas/imagen-arreglos-tema1.png").imagen-arreglos-tema1
      
      
      br
      br

      
      p.texto-desc-figura1 #[strong Figura 1.] <em>Forma de un arreglo unidimensional</em>
      figure
          img(src='@/assets/curso/temas/imagen-arreglo-unidimiensional.png', alt='Texto que describa la imagen').imagen-arreglo-unidimensional-tema1
    
    br
    br
    separador
    

    //Infografia punto caliente
    .row.tarjeta.tarjeta--blanca.p-3
      
      #metodos-de-respaldo
      .titulo-segundo.color-acento-contenido
        h2 1.4  Métodos de respaldo 

      p ¿Qué es un método de respaldo? Consiste en hacer copias de los datos almacenados en cualquier equipo conectado a la infraestructura de red de una compañía. Se realiza con el fin de tener la información custodiada y segura, en caso de daños en el <em>hardware</em>, <em>malwares</em>, errores, etc.
      
      p En los métodos de respaldo encontramos:
      

      br
      br
      .bloque-tarjetas-punto-caliente-tema1
            ImagenInfografica.color-primario
              template(v-slot:imagen)
                figure
                  img(src="@/assets/curso/temas/imagen-punto-caliente-tema1.png")
                  //figcaption Leyenda de la imagen

              .tarjeta.tarjetas-punto-caliente-tema1.p-3(x="18.5%" y="36%" numero="+")
                //.h5.mb-2 Copia de seguridad completa
                p Consiste en obtener el máximo respaldo de toda la información contenida en cualquier dispositivo de almacenamiento o servidor. Este método, normalmente, se ejecuta por primera vez desde su configuración y el tamaño de la copia es amplio en comparación con copias parciales. Si se efectúan copias a bases de datos, igualmente se realiza una copia generalizada de toda la información contenida en el dispositivo de almacenamiento. Lo mismo ocurre con copias a sistemas virtualizados, se realiza respaldo de toda la máquina para asegurar, en caso de alguna falla, su correcto funcionamiento y su data intacta.

              .tarjeta.tarjetas-punto-caliente-tema1.p-3(x="43.5%" y="36%" numero="+")
                //.h5.mb-2 Copia de seguridad incremental
                p Consiste en hacer copias de la información que guarda los datos que se modificaron desde la última copia efectuada, este proceso es mucho más rápido, ya que la información respaldada en este caso es mucho menor de la que contiene una copia completa. Sin embargo, ambos procesos son complementarios, es decir, uno funciona y puede ejecutarse diariamente y, el otro, se ejecuta cada cierto tiempo con una periodicidad prolongada.

              .tarjeta.tarjetas-punto-caliente-tema1.p-3(x="68%" y="35.5%" numero="+")
                //.h5.mb-2 Copia de seguridad diferencial
                p Consiste en hacer copias de la información que guarda los datos que se modificaron desde la última copia efectuada, este proceso es mucho más rápido, ya que la información respaldada en este caso es mucho menor de la que contiene una copia completa. Sin embargo, ambos procesos son complementarios, es decir, uno funciona y puede ejecutarse diariamente y, el otro, se ejecuta cada cierto tiempo con una periodicidad prolongada.

              .tarjeta.tarjetas-punto-caliente-tema1.p-3(x="92.5%" y="35.5%" numero="+")
                //.h5.mb-2 Copias de imágenes
                p Consiste en crear un espejo de un equipo junto a la información, aplicaciones y sistema operativo. Concretamente, se efectúa a los servidores o equipos críticos de las compañías. Al generar una imagen del sistema y ejecutarla en otro equipo servidor, es como si se tuvieran dos instancias de un mismo equipo.
      br
      br
      p.texto-invisible-puntocaliente-tema1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione eaque accusantium consequatur numquam? Voluptatibus quo voluptas tenetur temporibus! Earum corporis laudantium distinctio, illum accusamus quis non ea nobis cum!
      p.texto-invisible-puntocaliente-tema1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione eaque accusantium consequatur numquam? Voluptatibus quo voluptas tenetur temporibus! Earum corporis laudantium distinctio, illum accusamus quis non ea nobis cum!
      p.texto-invisible-puntocaliente-tema1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione eaque accusantium consequatur numquam? Voluptatibus quo voluptas tenetur temporibus! Earum corporis laudantium distinctio, illum accusamus quis non ea nobis cum!
      

        

        
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

<style lang="sass"></style>
