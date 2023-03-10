<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.bloque-texto-color-blanco
      h1 Introducción

    .row.justify-content-around.align-items-center.mb-5
    
      .col-md-5.col-lg-5
        img(src="@/assets/curso/temas/imagen-introduccion.png")

      .col-md-7.col-lg-7
        
        p Apreciado aprendiz, bienvenido a este componente formativo, donde encontrará diferentes temáticas orientadas al conocimiento de arquitectura y servicios. El mundo globalizado cada día es más exigente y las plataformas y sistemas de información más competitivos; por este motivo, se hace necesario conocer las tecnologías que enmarcan el desarrollo de #[em software], porque las personas esperan encontrar en los sitios web, solución para todas sus necesidades del día a día. 
        p Este componente aborda temas como la arquitectura en sistemas distribuidos, con enfoque de fraccionar tareas asignadas a cada grupo para formar así un todo (en el ámbito del #[em software]). Asimismo, se evidencian otros enfoques como #[em clustering] y arreglos, es decir, tipos de datos que agrupan valores en distintas dimensiones, como es el caso del #[em array], por ejemplo, que hace parte de los lenguajes de programación, como alternativas al manejo de datos. 
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.


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
