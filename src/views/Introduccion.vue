<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-2.p-md-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.bloque-texto-color-blanco
      h1 Introducción

    .row.justify-content-around.align-items-center
    
      .col-md.col-lg-5
        img(src="@/assets/curso/temas/imagen-introduccion.png")

      .col-md.col-lg-7
        
        p.p-2 Bienvenido a este componente formativo, a continuación, encontrará diferentes temáticas orientadas al conocimiento de arquitectura y servicios. El mundo globalizado cada día es más exigente y las plataformas y sistemas de información más competitivos, por este motivo se hace necesario conocer las tecnologías que enmarcan el desarrollo de <em>software</em>, además, las personas esperan encontrar, en los sitios web, solución a todas sus necesidades del día a día. 
        p.p-2 Este componente abordará temas como la arquitectura en sistemas distribuidos con enfoque de fraccionar tareas asignadas a cada grupo para formar así un todo (en el ámbito del <em>software</em>). Asimismo, se evidenciarán otros enfoques como los <em>clustering</em> y arreglos, es decir, tipos de datos que agrupan valores en distintas dimensiones, como es el caso del <em>array</em>, por ejemplo, que hace parte de los lenguajes de programación como alternativas al manejo de datos. 
        p.p-2 #[strong  En el siguiente video conocerá, de forma general, la temática a estudiar en este componente formativo.]

    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


     
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
