<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1 
      h1 Ingeniería social

    .fondo1-tema1.pt-4.mb-4.pb-0.mb-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8
          figure.m-0
            img(src="@/assets/curso/tema1/img02.png")
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-0 El activo más importante de una organización hoy en día es la información que esta maneja. Aunque usted se enfrente a un mundo digital y globalizado, las máquinas siguen siendo manipuladas y controladas por el ser humano; es por ese motivo que, dentro de la ingeniería social, se puede decir que el eslabón más débil de toda esta cadena informática es el usuario, y es así como los ciberdelincuentes aprovechan habilidades sociales para vulnerar sistemas e infraestructura. Es importante reconocer que muchas personas poseen este tipo de entrenamiento para atacar y es perentorio conocer su actuar para estar protegido frente a estas técnicas persuasivas que utilizan.

      Separador

      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1 Conceptos y generalidades
      
      p.mb-5 La ingeniería social es el arte de manipular a la gente para que entregue información confidencial. Los tipos de información que estos criminales buscan pueden variar, pero cuando los individuos son el objetivo, los criminales normalmente intentan engañar para obtener las contraseñas o la información bancaria, o para que usted acceda a su ordenador para instalar secretamente software malicioso, lo que les dará acceso a sus contraseñas e información bancaria, además de darles control sobre su ordenador.

      .row.justify-content-center.align-items-center
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img03.png')})`}"
            )
            .bloque-texto-g__texto.py-5(style="width:67% !important; padding: 2.4rem 2.2rem 2.4rem 2.2rem !important;")              
              p.mb-0 Los delincuentes utilizan tácticas de ingeniería social porque normalmente es más fácil explotar su inclinación natural a la confianza que descubrir formas de piratear su software.  Por ejemplo, es mucho más fácil engañar a alguien para que le dé su contraseña que intentar piratear su contraseña (a menos que la contraseña sea realmente débil).
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 1.
          span Ingeniería social.
        figure.m-0
          img(src="@/assets/curso/tema1/img04.svg")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-0 La seguridad consiste en saber en quién y en qué confiar. Es importante saber cuándo y cuándo no tomarle la palabra a una persona y cuándo la persona con la que se está comunicando es quien dice ser; lo mismo ocurre con las interacciones en línea y el uso de los sitios web: 
    
    .fondo2-tema1.pt-5.pb-0.px-0
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          h3.mb-0.text-center(style="color: #500C75") <br>¿Cuándo se confía en que el sitio web que se está utilizando es legítimo o es seguro para proporcionar su información?
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          p.mb-0 <b>Considerando el interrogante anterior</b>, puede realizar un ejercicio práctico. Pregunte a cualquier profesional de la seguridad y le dirá que el eslabón más débil de la cadena de seguridad es el humano que acepta a una persona o escenario al pie de la letra, no importa cuántas cerraduras y cerrojos de seguridad haya en sus puertas y ventanas, o si tiene perros guardianes, sistemas de alarma, focos, vallas con alambre de púas y personal de seguridad armado; si confía en la persona en la puerta que dice ser el repartidor de pizzas y le deja entrar sin comprobar primero si es legítimo, está completamente expuesto al riesgo que representa.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-0(style="font-size: 1em;")
            h5 Figura 2.
            span Riesgos.
          figure.m-0
            img(src="@/assets/curso/tema1/img07.svg")

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          p.mb-0 Sin embargo, los propios líderes empresariales a menudo no toman medidas sencillas para protegerse a sí mismos y a sus empresas contra los ataques de ingeniería social:

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-8.ps-5.py-0
          .row.justify-content-center.align-items-center.mb-0.py-4(style="border-top: 2px solid #AFAFAF")
            .col-1(style="position:relative")
              img(style="position: relative; left:-65%; min-width: 45px" src="@/assets/curso/tema1/img08.svg")
            .col-11.ps-0.pe-5
              p.mb-0.me-3 Sólo el 51% de los líderes empresariales ajustan su configuración en sitios como Facebook para restringir quién puede ver su perfil.

          .row.justify-content-center.align-items-center.mb-0.py-4(style="border-top: 2px solid #AFAFAF")
            .col-1(style="position:relative")
              img(style="position: relative; left:-65%; min-width: 45px" src="@/assets/curso/tema1/img08.svg")
            .col-11.ps-0.pe-5
              p.mb-0.me-3 Sólo el 36% actúa cuando se cambian las configuraciones de privacidad en los sitios de medios sociales.

          .row.justify-content-center.align-items-center.mb-0.py-4.mb-4(style="border-top: 2px solid #AFAFAF; border-bottom: 2px solid #AFAFAF")
            .col-1(style="position:relative")
              img(style="position: relative; left:-65%; min-width: 45px" src="@/assets/curso/tema1/img08.svg")
            .col-11.ps-0.pe-5
              p.mb-0.me-3 Sólo el 24% comprueba regularmente la información disponible sobre ellos mismos en línea o comprueba las políticas de intercambio de datos al suscribirse a nuevos servicios en línea.
        
          
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.ps-5.py-0
        .row.fondo3-tema1.justify-content-center.align-items-center.py-0
            .col-lg-9.ps-5.pe-0
              p.mb-0 Por muy valiosas que sean las soluciones de seguridad que protegen una red, pueden resultar efectivamente inútiles si un <b>ciberdelincuente es experto en ingeniería social,</b> la ingeniería social es la práctica de <b>usar la manipulación para acceder a recursos protegidos</b>, como se verá más adelante. 
            .col-lg-3.p-0
              figure.m-0
                img(src="@/assets/curso/tema1/img09.png")
    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Tipos y fases de la ingeniería social

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3  Riesgos de suplantación (redes sociales)
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4  Ataques y riesgos (vulnerabilidades)

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5  Pentesting
    
    

</template>

<script>
export default {
  name: 'Tema1',
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
