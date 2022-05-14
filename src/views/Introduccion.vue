<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    //- 'background-size': '100% 130%'
    .fondo-introduccion.pt-4.mb-4
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-1
          .col-lg-7.py-0
            figure.m-0
              img(src="@/assets/curso/introduccion/img03.svg") 
          .col-lg-4
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-8
            p.mb-0 En el mundo digital de hoy, usted encuentra gran cantidad de información al alcance de su mano, la cual se ha convertido en uno de los activos más importantes para una persona u organización. Con el uso de las tecnologías de la información y la comunicación y su avance vertiginoso, aparecen agentes tanto internos como externos que pueden poner en riesgo los sistemas de información y los datos que se almacenan, al igual que la infraestructura tecnológica donde se encuentran. Es por ello que el <em>hacking</em> ético se ha convertido en una herramienta de gestión para poder salvaguardar los datos. Revise el siguiente recurso para contextualizar.
          .col-lg-2
            figure.mb-0
              img(src="@/assets/curso/introduccion/img02.svg") 
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-4        
          .col-lg-7.py-0
            figure.m-0
              img(src="@/assets/curso/introduccion/img04.svg") 
          .col-lg-1

        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10        
            figure
              .video                        
                iframe(width="1280" height="720" src="https://www.youtube.com/embed/pvv9D2GNAVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
        

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0.px-3 Para la elaboración de este componente, se abordaron varios autores conocidos en <b>ingeniería social y detección de intrusos en <em>hacking</em> ético</b>, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de <b><em>hacking</em> ético en sistemas y redes.</b>
       
  
      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.titulo-principal
  margin-bottom: 0px !important
</style>
