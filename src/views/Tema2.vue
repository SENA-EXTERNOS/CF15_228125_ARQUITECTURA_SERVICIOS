<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Arquitectura y plan de contingencias 

    
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-5
        figure
          img(data-aos="fade-left")(src="@/assets/curso/temas/imagen1-tema2.png")
      .col-lg-7
        p La arquitectura se enfoca, sobre todo, a la parte del <em>hardware</em>, los componentes, el procesador, el disco duro, la memoria y la forma en la que interactúan en la máquina para funcionar, conjuntamente, con el sistema operativo. El término arquitectura contempla diversos aspectos que van de la mano al diseño y desarrollo de algo, en este caso, se determina la estructura por la cual funciona un equipo de cómputo, la manera de operar y los resultados que se obtienen al unir todos sus módulos o dispositivos físicos y lógicos. Los elementos que se tienen en cuenta en la construcción de los dispositivos han surgido con nuevos estándares, modelos y nuevas tecnologías que permiten la ejecución de aplicaciones de mayor capacidad, administración mejorada del sistema operativo y de sus procesos, por lo que, al tiempo, son más exigentes por la cantidad de datos que almacena el <em>software</em> base. Por ejemplo, los sistemas operativos con arquitectura de 64 bits procesan más datos que uno de 32 bits, es decir que para realizar un determinado proceso de cualquier índole en sistemas de 64 bits, este se hace más rápido que al realizar el mismo proceso en uno de 32 bits. 
    


    h3.mb-4  Arquitectura 

    p.mb-4 A continuación, se abordan distintos tipos de arquitecturas relacionadas a los sistemas operativos que trabajan bajo ordenadores con características específicas, de acuerdo con la tecnología que utilizan.
          
    .bg--img_03
    .row.justify-content-center.mb-4
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo-tarjetas-acordeon-tema2")
          .row(titulo="Monousuario")
            .col-12
              p.mb-0.texto-tarjetas-acordeon-tema2 La arquitectura de este tipo funciona para sistemas que permiten conexión a un único usuario a la vez, por un determinado tiempo, y no permite a otros usuarios realizar operación alguna en la máquina. Independientemente de las características del ordenador, la arquitectura no permite usar la interfaz para gestionar procesos, aunque sea un solo usuario quien efectúe los procesos que requiera en un instante de tiempo; un ejemplo de estos sistemas es el MS-DOS. Los sistemas monousuarios no tienen restricciones para los usuarios, es decir, un usuario convencional tiene permisos iguales que uno administrador, y puede crear o eliminar cualquier tipo de ficheros, e, incluso, puede efectuar modificaciones en el sistema.

          .row(titulo="Multiusuario")
            .col-12
              p.mb-0.texto-tarjetas-acordeon-tema2 A diferencia de los monousuarios, estos sistemas permiten la gestión, uso y administración a distintos usuarios conectados de forma simultánea, además, permiten compartir recursos distribuidos en una red, implementando seguridad en los datos compartidos. Estos sistemas regulan y ofrecen servicios a los usuarios que se conectan cuando ellos lo requieran y, adicionalmente, pueden compartir recursos como el procesador, la memoria, el disco duro, las aplicaciones, las impresoras, entre otros. Cabe resaltar que los sistemas multiusuarios permiten la comunicación entre los usuarios, las aplicaciones, el <em>hardware</em>, los juegos, los navegadores, como también, el bloqueo de ellos.

          .row(titulo="Web")
            .col-12
              p.mb-0.texto-tarjetas-acordeon-tema2 Este tipo de arquitectura define la estructura de una aplicación web con el fin que sea fácilmente encontrada por los motores de búsqueda, consiste en organizar los elementos que la componen, los enlaces a otras páginas, el contenido bien definido, las imágenes, los videos y cada uno de los datos que se desean mostrar. Al crear plataformas web, se deben investigar muchos aspectos como, por ejemplo, proyectos nuevos que sean reconocidos, el producto o productos que se vayan a vender, en caso de que sea <em>e-commerce</em>, conocer al público a que va dirigido o investigar la competencia. Además, se deben tener en cuenta otros aspectos como la planeación, la toma de decisiones, la maquetación, la estructura o el diseño, para así tener claridad sobre la arquitectura requerida en la puesta en marcha.

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/imagen-acordeon-tema2.png", alt="alt").imagen-acordeon-tema2
    


    p.mb-4 <b>En la arquitectura de <i>software</i> podemos encontrar: </b>

    .row.justify-content-around.mb-5
      .col-md-5.tarjetas-arquitectura-software
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-4
              figure
                img(data-aos="fade-right")(src="@/assets/curso/temas/imagen1-clasificacion-arquitec-software.png").imagen-tarjetas-arquitectura-software
                //(data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine")
            .col-8
              p.texto-tarjetas-arquitectura-software #[strong Cliente-servidor,] siendo uno quien provee (servidor) la petición realizada por el otro (cliente).
        
      .col-md-5.tarjetas-arquitectura-software
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-4
              figure
                img(data-aos="fade-left")(src="@/assets/curso/temas/imagen2-clasificacion-arquitec-software.png").imagen-tarjetas-arquitectura-software
                //(data-aos="fade-left"  data-aos-offset="500" )
            .col-8
              p.texto-tarjetas-arquitectura-software #[strong #[em Standalone],] basado en equipos unitarios que realizan todo el proceso y el multinivel o capas móviles, tiene en cuenta las divisiones que posee determinada aplicación para funcionar.
    

   
    p.mb-4 El siguiente video, nos muestra algunos elementos importantes sobre la arquitectura de <i>software</i>; visualícelo con atención:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JHN03zk_jb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 




    h3.mb-4  Plan de contingencia
      
    .row.bloque1-sistemas-distribuidos.mb-4
      .col-7
        p.texto-plan-contingencia.p-3 Consiste en la planeación anticipada de medidas sobre las cuales operar en caso de que fallen los sistemas que están en constante funcionamiento. Es necesario mantener una estrategia distinta a la llevada a cabo diariamente en caso de que se presenten anomalías en cualquiera de los puntos clave que hacen funcionar la organización para llevar a cabo las operaciones de forma normal.
      .col-5
        figure
          img(data-aos="fade-down-left")(src="@/assets/curso/temas/imagen1-plan-de-contingencia.png").imagen-plan-contingencia
      
      
    p Se debe tener presente que, al desarrollar <em>software</em>, es necesario tener alternativas para cuando existan fallas e inestabilidades. Siempre se debe prever lo que puede fallar en el sistema de información que se está desarrollando, para tener una forma de solucionar las posibles fallas en el momento y tiempo adecuado.

    p.mb-4 Existen dos aspectos importantes a tener en cuenta:


    .row.justify-content-center.align-items-center.mb-5

      .col-md-5
        .tarjeta.tarjeta1-aspectos-considerar-tema2.p-4
          p.p-4 #[strong Se debe crear un análisis de los posibles riesgos] que tenga el <em>software</em> a desarrollar, esa acción permite, a los implicados de todas las fases, tener en cuenta la incertidumbre en cualquier parte del ciclo de vida del desarrollo del <em>software</em>, lo que ayuda a identificar los problemas que se presenten en cada área. Esto es necesario tenerlo en cuenta para documentar el posible riesgo y tener presente qué puede afectar y qué elementos no volverían funcionar, o cuáles serían las consecuencias causadas, en caso de que se presenten, y cómo se podría mitigar la colisión, estableciendo un plan alterno para garantizar el funcionamiento. 
          br
          br
          figure
              img(data-aos="fade-left")(src="@/assets/curso/temas/imagen1-tarjeta1-aspectos-considerar-tema2.png").imagen-tarjeta1-aspectos-considerar-tema2

      .col-md-5
        .tarjeta.tarjeta2-aspectos-considerar-tema2.p-4
          p.texto-tarjeta2-aspectos-considerar-tema2.p-4 #[strong Siempre se debe estar preparado,] es posible que las cosas no salgan de la mejor manera o tal como se diseñaron inicialmente, a menudo, suelen ocurrir cambios de última hora que modifican ciertas partes de la aplicación. Por lo tanto, es necesario tener claridad sobre todo el proceso de desarrollo, aceptar los riesgos, manejarlos, estar preparados, afrontarlos y, sobre todo, tener un plan de contingencia para no paralizar una compañía.
          br
          
          figure
              img(data-aos="fade-left")(src="@/assets/curso/temas/imagen2-tarjeta1-aspectos-considerar-tema2.png").imagen-tarjeta2-aspectos-considerar-tema2


    .row.justify-content-around

      .col-6
        figure
          img(data-aos="fade-right")(src="@/assets/curso/temas/imagen2-plan-contingencia.png")

      .col-6
        p Para determinar lo que puede salir mal dentro de una infraestructura de <em>software</em>, es necesario identificar las amenazas, clasificarlas en orden jerárquico según su intensidad, o según cuál cause mayor daño o afecte el funcionamiento del sistema. De esta forma, se puede trabajar de manera contundente y con mayor impacto para disminuir el grado de afectación en caso de ocurrencia. Se debe tener documentación de los puntos débiles de la plataforma, los que más entorpecen su funcionamiento, la posible forma de contrarrestarlos, o los riesgos de manera global, incluyendo el recurso humano, los procedimientos, el proyecto y todo lo que esté relacionado con el desarrollo de la idea original y el transcurso de la puesta en marcha del proyecto.
          | Así mismo, debe haber periodicidad de revisión de riesgos para tener un plan de contingencia de lo que se va albergando a medida que avanza su ejecución. 

    

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
