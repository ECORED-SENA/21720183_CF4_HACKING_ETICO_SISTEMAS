<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Detección y evasión de intrusos

    .fondo1-tema3.pt-4.mb-4.pb-0.mb-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8
          figure.m-0
            img(src="@/assets/curso/tema1/img02.png")
      .row.justify-content-center.align-items-center.mb-5 
        .col-lg-10
          p.mb-0 Es importante tener en cuenta que, dentro de un sistema en una organización, los sistemas y la información deben ser protegidos y reconocidos, para poder evitar que los piratas informáticos puedan ingresar archivos de malware y realizar daños en la estructura de datos, y así robar o secuestrar información. Estas técnicas de detección y evasión de intrusos hoy cuentan con herramientas para detectar intrusiones y aplicar los correctivos necesarios y salvaguardar la integridad de toda la información.
    

      Separador

      #t_3_1.titulo-segundo.color-acento-contenido
        h2 3.1  Conceptos y generalidades

      p.mb-4 Un sistema de detección de intrusos (IDS) es un dispositivo o aplicación de software que monitoriza una red en busca de actividades maliciosas o violaciones de la política. Por lo general, cualquier actividad maliciosa o violación se notifica o se recopila de forma centralizada, mediante un sistema de gestión de información y eventos de seguridad. Algunos IDS son capaces de responder a la intrusión detectada al ser descubierta; estos se clasifican como sistemas de prevención de intrusiones (IPS). Existen tres formas para detectar una intrusión.

      .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
        h5 Figura 19.
        span Formas de detectar una intrusión.
      
      figure
        img(src="@/assets/curso/tema3/img02.svg")
    
    Separador.mb-0.pb-0
    .fondo2-tema3.pt-4.pb-0.mb-5
      #t_3_2.titulo-segundo.color-acento-contenido
        h2 3.2 Tipos de ID

      p.mb-5 Hay una amplia gama de IDS, que van desde software antivirus hasta sistemas de monitorización por niveles que siguen el tráfico de toda una red. Las clasificaciones más comunes son:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7
          div.mb-4
            img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
            p.mb-0(style="display:inline") <b>Sistemas de detección de intrusos en la red (NIDS):</b> Un sistema que analiza el tráfico entrante de la red; estos mecanismos consisten normalmente en una caja negra que se sitúa en la red en modo promiscuo, atento a los patrones indicativos de una intrusión

          div.mb-4
            img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
            p.mb-0(style="display:inline") <b>Sistemas de detección de intrusos basados en host (HIDS):</b> Un sistema que monitoriza los archivos importantes del sistema operativo, estos mecanismos suelen incluir la auditoría de eventos que ocurren en un host específico; estos no son tan comunes, debido a la sobrecarga en que incurren por tener que monitorear cada evento del sistema.

          div.mb-4
            img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
            p.mb-0(style="display:inline") <b>Supervisión de archivos de inicio de sesión:</b> Estos mecanismos suelen ser programas que analizan los archivos de registro después de un evento que ya ha ocurrido, como los intentos fallidos de conexión.

          div.mb-0
            img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
            p.mb-0(style="display:inline") <b>Comprobación de integridad de archivos:</b> Estos mecanismos de verificación son para los caballos de Troya, o archivos que de otra forma se han modificado, lo que indica que un intruso ya ha estado allí, por ejemplo, TRIPWIRE
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/img04.png")
      
      .fondo3-tema3.py-5.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-3
            figure
              img(src="@/assets/curso/tema3/img06.svg")            
          .col-lg-7
            p.mb-3.text-white Tripwire es un sistema de detección de intrusos (IDS) que, de forma constante y automática, mantiene bajo control los archivos e informes críticos del sistema si han sido destruidos o modificados por un cracker (o por error). Permite al administrador del sistema saber inmediatamente qué se ha visto comprometido y arreglarlo. Se puede descargar del siguiente enlace:
            a.boton--sm.color-acento-botones.me-3.py-2(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
              span.me-2 Enlace web  
              img(style="width:20px; height:20px" src="@/assets/curso/tema3/img07.svg")   
      
      p.mb-5 La primera vez que se ejecuta Tripwire, almacena sumas de control, tamaños exactos y otros datos de todos los archivos seleccionados en una base de datos; las ejecuciones sucesivas comprueban si cada archivo sigue coincidiendo con la información de la base de datos e informan de todos los cambios. Tripwire fue lanzado inicialmente en 1992. Hoy en día, varios programas comparten este nombre, uno es GPL y dos son propietarios.
      p.mb-5 El enfoque general para la detección de intrusiones es:  

      div.py-4.px-5.mb-5(style="background-color: #FFECF2")
        ol.lista-ol--cuadro.mt-3.mb-0
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Observe sus sistemas, redes y actividades de usuario para cualquier cosa inusual.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Investigue cualquier cosa que encuentre inusual.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Si su investigación encuentra algo que no está explicado por las actividades autorizadas, inicie inmediatamente sus procedimientos de respuesta a la intrusión.
    
    p.mb-4 Aunque este proceso parece bastante simple, su implementación es una actividad que requiere recursos intensivos y un apoyo continuo y automatizado, así como un esfuerzo administrativo diario. Además, la escala de las prácticas de detección de intrusos puede necesitar cambiar, como amenazas, configuraciones del sistema o requisitos de seguridad.

    p.mb-5 En todos los casos, hay cinco áreas que deben ser abordadas:
    
    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Firewall y Honeypot

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Evasión de IDS y firewalls
  


</template>

<script>
export default {
  name: 'Tema3',
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
