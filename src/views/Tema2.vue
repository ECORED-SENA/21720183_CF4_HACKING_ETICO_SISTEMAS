<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Denegación de servicios

    .row.justify-content-center.align-items-center
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.png')})`}"
            )
            .bloque-texto-g__texto.py-5(style="width:67% !important; padding: 2.4rem 2.2rem 2.4rem 2.2rem !important;")              
              p.mb-0 Seguramente ha escuchado dentro del hacking ético que una de las formas más comunes de ataque es poder restringir servicios a una organización, saturarlos para que estos dejen de funcionar y se genere un colapso y volcamiento de información, ya que buscan primordialmente dejar inhabilitado al usuario para que pueda hacer uso y consumo de todos los servicios que se puedan proveer, estos por lo general son realizados por algoritmos cíclicos y repetitivos donde se hacen peticiones infinitas, desbordando la capacidad del sistema y generando bloqueos.
    

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Conceptos y generalidades

    p.mb-5 En el siguiente gráfico, puede revisar el concepto de ataque de denegación de servicio.

    .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
      h5 Figura 10.
      span Ataque de denegación de servicio.
    figure.mb-5
      img(src="@/assets/curso/tema2/img02.svg")

    p.mb-5 Un tipo adicional de <b>ataque DoS es el ataque de Negación de Servicio Distribuido (DDoS)</b>, este se produce cuando varios sistemas orquestan un ataque DoS sincronizado a un solo objetivo, la diferencia esencial es que, en lugar de ser atacado desde un lugar, el objetivo es atacado desde varios lugares a la vez. La distribución de hosts que define un DDoS proporciona al atacante múltiples ventajas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src="@/assets/curso/tema2/img03.svg")

    p.text-center.mb-5 Puede aprovechar el mayor volumen de la máquina para ejecutar un ataque gravemente perturbador.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        div.slider-espcial.d-flex.justify-content-center.align-items-center.px-3
            .row.d-flex.justify-content-center.align-items-center.w-100
              .col-lg-1.indicador__container
                img(src="@/assets/curso/tema1/img58.svg", v-on:click="anterior" @mouseover="mostrarIndicador = false")
                .indicador--click(v-if="mostrarIndicador")
              .col-lg-10
                p.mb-0.text-center(v-if="espacial1==1", data-aos="slide-left") La ubicación del ataque es difícil de detectar debido a la distribución aleatoria de los sistemas de ataque (a menudo en todo el mundo).
                p.mb-0.text-center(v-if="espacial1==2", data-aos="slide-left") Es más difícil apagar varias máquinas que una sola.
                p.mb-0.text-center(v-if="espacial1==3", data-aos="slide-left") El verdadero grupo atacante es muy difícil de identificar, ya que están disfrazados detrás de muchos sistemas (en su mayoría comprometidos).
              .col-lg-1
                img(src="@/assets/curso/tema1/img59.svg" v-on:click="siguiente" @mouseover="mostrarIndicador = false")

    p.mb-4 Hay dos métodos generales de ataques de DoS: servicios de inundación o servicios de choque. 
    p.mb-5 Los ataques por inundación se producen cuando el sistema recibe demasiado tráfico para que el servidor almacene en el búfer, lo que hace que se ralentice y finalmente se detenga. Los ataques por inundación más comunes incluyen:

    .row.fondo1-tema2.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img05.png')   
      .col-lg-8
        div.mb-4
          img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
          p.mb-0(style="display:inline") <b>Ataques de desbordamiento de búfer:</b> El ataque DoS más común. El concepto es enviar más tráfico a una dirección de red de lo que los programadores han construido el sistema para manejar. Incluye los ataques que se enumeran a continuación, además de otros que están diseñados para explotar errores específicos de ciertas aplicaciones o redes
        div.mb-4
          img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
          p.mb-0(style="display:inline") <b>Inundación de ICMP:</b> Aprovecha los dispositivos de red mal configurados, enviando paquetes falsos que hacen ping a todos los ordenadores de la red objetivo, en lugar de solo a uno en concreto. La red se activa entonces para amplificar el tráfico. Este ataque también se conoce como el ataque pitufo o ping de la muerte.
        div.mb-0
          img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
          p.mb-0(style="display:inline") <b>SYN flood:</b> Envía una solicitud para conectarse a un servidor, pero nunca completa el apretón de manos. Continúa hasta que todos los puertos abiertos están saturados de solicitudes y ninguno está disponible para que los usuarios legítimos se conecten.        

    p.mb-5 Otros ataques DoS simplemente explotan las vulnerabilidades que causan que el sistema o servicio objetivo se caiga; en estos ataques, se envían entradas que aprovechan los errores del objetivo, que posteriormente se bloquean o desestabilizan gravemente el sistema, de modo que no se puede acceder a él o utilizarlo.
    
    .fondo2-tema2.pt-5.pb-0.px-0.mb-5            
      .row.justify-content-start.align-items-center.mb-4.mt-3
        .col-lg-4
          img(src="@/assets/curso/tema2/img07.svg")

      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure
            img(src="@/assets/curso/tema2/img08.svg")
    
    p.mb-4 Un ataque de denegación de servicio distribuido (DDoS) se produce cuando varias máquinas operan juntas para atacar a un objetivo. Los atacantes DDoS a menudo aprovechan el uso de una red de robots, un grupo de dispositivos secuestrados conectados a Internet, para llevar a cabo ataques a gran escala. Los atacantes aprovechan las vulnerabilidades de seguridad o las debilidades de los dispositivos para controlar numerosos dispositivos mediante software de mando y control. Una vez que tiene el control, un atacante puede ordenar a su red de robots que realice DDoS en un objetivo. En este caso, los dispositivos infectados también son víctimas del ataque. Revise el siguiente recurso, donde se explica con mayor detalle.
    
    .fondo3-tema2.py-4.mb-4
      p.mb-0.px-5.mx-2 Desafortunadamente, derribar a cualquiera de los miembros del equipo que se describen en el video no necesariamente compromete a toda la red criminal. Por un lado, los ciberdelincuentes a menudo prefieren dar y recibir compensación en forma de criptodivisas irrastreables, como Bitcoin. Esto elimina efectivamente los "rastros de papel" que han deshecho las organizaciones criminales en el pasado.        
    
    p.mb-0 Además, los ciberdelincuentes se cuidan de compartir únicamente información incriminatoria en la Web profunda (un término que se refiere a todo el contenido en línea que no está indexado por los motores de búsqueda tradicionales), donde el anonimato es fácil de conseguir. Muchas redes de delincuentes cibernéticos "subcontratan" diversas funciones a personas anónimas que encuentran en estos rincones "ocultos" de la Internet, lo que reduce en gran medida la probabilidad de que una persona sepa lo suficiente como para perjudicar a otros miembros del equipo.
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Herramientas y técnicas de ataque

    p.mb-5 Aunque los DDoS ofrecen un modo de ataque menos complicado que otras formas de ciberataques, son cada vez más fuertes y sofisticados. Hay tres categorías básicas de ataque:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Los ataques basados en el volumen, que utilizan un gran tráfico para inundar el ancho de banda de la red.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Ataques de protocolo, que se centran en la explotación de los recursos del servidor.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Ataques a aplicaciones, que se centran en las aplicaciones web y se consideran el tipo de ataque más sofisticado y grave.
      
        .cajon.color-acento-botones.p-4.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-10.px-3
              p.mb-0 Los diferentes tipos de ataques se clasifican en categorías basadas en la cantidad de tráfico y las vulnerabilidades a las que se dirigen, como se muestra en el siguiente gráfico.          
      .col-lg-3
        figure
          img(src="@/assets/curso/tema2/img10.png")

    .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
      h5 Figura 11.
      span Tipos de ataques.
    figure.mb-5
      img(src="@/assets/curso/tema2/img11.svg")

    .fondo4-tema2.pt-5.pb-0.px-0.mb-5            
      .row.justify-content-start.align-items-center.mb-4.mt-3
        .col-lg-4
          img(src="@/assets/curso/tema2/img13.svg")

      p.mb-5 SYN Flood explota las debilidades de la secuencia de conexión TCP, conocida como un apretón de manos de tres vías, la máquina anfitriona recibe un mensaje sincronizado (SYN) para iniciar el <b>"handshake"</b>. El servidor reconoce el mensaje enviando un indicador de reconocimiento (ACK) al host inicial, que luego cierra la conexión; en una inundación SYN, sin embargo, se envían mensajes falsos y la conexión no se cierra, cerrando el servicio.

      .row.justify-content-center.align-items-center.mb-5.mt-3
        .col-lg-10
          .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
            h5 Figura 12.
            span Tipos de ataques.
          figure.mb-5
            img(src="@/assets/curso/tema2/img14.svg")

          p.mb-0 Los ataques de inundación SYN funcionan explotando el proceso de apretón de manos de una conexión TCP; en condiciones normales, la conexión TCP muestra tres procesos distintos para realizar una conexión.
    
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
              ol.lista-ol--cuadro.mb-5
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  p.mb-0 En primer lugar, el cliente envía un paquete SYN al servidor para iniciar la conexión.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  p.mb-0 El servidor responde a ese paquete inicial con un paquete SYN/ACK, con el fin de reconocer la comunicación.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  p.mb-0 Finalmente, el cliente devuelve un paquete ACK para acusar recibo del paquete del servidor. 

              .cajon.color-acento-botones.p-4.mb-0
                .row.justify-content-center.align-items-center
                  .col-lg-10.px-3
                    p.mb-0 Los diferentes tipos de ataques se clasifican en categorías basadas en la cantidad de tráfico y las vulnerabilidades a las que se dirigen, como se muestra en el siguiente gráfico.          
        .col-lg-2
              figure
                img(src="@/assets/curso/tema2/img15.png")

      .row.justify-content-start.align-items-center.mb-4.mt-3
        .col-lg-4
          img(src="@/assets/curso/tema2/img16.svg")

      p.mb-5 Un SYN Flood ocurre cuando la capa TCP está saturada, impidiendo que se complete el triple apretón de manos TCP entre el cliente y el servidor en cada puerto. Cada conexión que utiliza el protocolo TCP requiere el triple apretón de manos, que es un conjunto de mensajes intercambiados entre el cliente y el servidor, como se muestra a continuación.
    
    .row.justify-content-center.align-items-center.mb-5.mt-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 13.
          span Protocolo TCP.
        figure.mb-5
          img(src="@/assets/curso/tema2/img17.svg")

        p.mb-5 El propósito de este intercambio es validar la autenticidad de cada parte y establecer la clave de cifrado y las opciones que asegurarán las comunicaciones posteriores. Este proceso debe completarse antes de que un puerto de comunicaciones entre el cliente y el servidor pueda abrirse y estar disponible en su totalidad.

        .cajon.color-acento-botones.p-4.px-5.mb-0          
            p.mb-0 Un ataque de inundación de TCP SYN se produce cuando el atacante inunda el sistema con solicitudes de SYN para abrumar al objetivo y hacerlo incapaz de responder a nuevas solicitudes de conexión real. Lleva todos los puertos de comunicaciones del servidor objetivo a un estado semiabierto.
    
    .row.justify-content-start.align-items-center.mb-5.mt-3
      .col-lg-4
        img(src="@/assets/curso/tema2/img18.svg")

    p.mb-5 Un ataque por inundación con el Protocolo de Mensajes de Control de Internet (ICMP), también conocido como ataque por inundación Ping, es un ataque común de denegación de servicio (DoS) en el que un atacante intenta abrumar un dispositivo objetivo con peticiones de eco (pings) ICMP. Normalmente, los mensajes de solicitud de eco y respuesta de ICMP se utilizan para hacer ping a un dispositivo de red, con el fin de diagnosticar la salud y la conectividad del dispositivo y la conexión entre el remitente y el dispositivo. Al inundar el objetivo con paquetes de solicitud, la red se ve obligada a responder con un número igual de paquetes de respuesta. Esto hace que el objetivo se vuelva inaccesible para el tráfico normal.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 14.
          span ICMP.
        figure.mb-0
          img(src="@/assets/curso/tema2/img19.svg")

    p.mb-5 Otros tipos de ataques de petición ICMP pueden implicar herramientas o códigos personalizados, como hping y scapy. El tráfico de ataque que emana de múltiples dispositivos se considera un ataque de denegación de servicio distribuido (DDoS). En este tipo de ataque, tanto los canales de entrada como de salida de la red son abrumadores, consumen un ancho de banda considerable y dan lugar a una denegación de servicio.

    .row.justify-content-start.align-items-center.mb-5.mt-3
      .col-lg-4
        img(src="@/assets/curso/tema2/img20.svg")
    
    p.mb-5 Los ataques entre pares explotan el tejido de la tecnología de pares para realizar los ataques. Estos ataques se distinguen de otros tipos de ataques por lo siguiente: 
    
    .row.justify-content-center.align-items-center.mb-5(style="background-color: #E4FDFC")
      .col-lg-10.py-4.px-0
        div
          img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img26.svg")  
          p.mb-0(style="display:inline") El atacante no tiene que comunicarse con los clientes para la subversión y
        div
          img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img26.svg")  
          p.mb-0(style="display:inline") La naturaleza automatizada de la tecnología peer-to-peer puede permitir BOT como la amplificación de un ataque con el permiso de la víctima.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 15.
          span Los ataques Phlashing.
        figure.mb-0
          img(src="@/assets/curso/tema2/img21.svg")
    
    p.mb-5 Contra estos ataques, existen herramientas de análisis, como <b>NetFlow Analyzer</b>, es una completa herramienta de análisis de tráfico, que aprovecha las tecnologías de flujo para proporcionar una visibilidad en tiempo real del rendimiento del ancho de banda de la red. A continuación, se presentan sus características.
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 16.
          span NetFlow Analyzer.
        figure.mb-0
          img(src="@/assets/curso/tema2/img22.svg")
    
    Separador.mb-0.pb-0

    div.p-0.fondo5-tema2.py-5.mb-0
      br
      #t_2_3.titulo-segundo.color-acento-contenido
        h2 2.3  Botnets

      p.mb-5 Los botnets se han convertido en una de las mayores amenazas para los sistemas de seguridad hoy en día. Su creciente popularidad entre los ciberdelincuentes se debe a su capacidad para infiltrarse en casi cualquier dispositivo conectado a Internet, desde reproductores de DVR hasta mainframes corporativos. Para mayor información, consulte el <b>Anexo_ Bots.</b>

      .titulo-sexto.color-acento-contenido.mb-0(style="font-size: 1em;")
        h5 Figura 17.
        span Los ataques Phlashing.
      figure.mb-4
          img(src="@/assets/curso/tema2/img23.svg")
    Separador.pt-2

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4  Contramedidas

    p.mb-4 La detección de DDoS es el proceso de distinguir los ataques de denegación de servicio distribuidos (DDoS) del tráfico normal de la red, a fin de realizar una mitigación efectiva de los ataques; el objetivo principal de un ataque DDoS es limitar el acceso a una aplicación o a un servicio de red, negando así a los usuarios legítimos el acceso a los servicios.
    

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema2/img24.png')})`}"
            )
            .bloque-texto-g__texto.py-5(style="width:67% !important; padding: 2.4rem 2.2rem 2.4rem 2.2rem !important;")              
              p.mb-0 Hay muchos tipos de esquemas de ataque DDoS que se utilizan hoy en día y cada vez son más sofisticados, sin embargo, su objetivo común es sobrecargar los recursos de red específicos con tráfico o solicitudes de servicio de muchas fuentes diferentes, potencialmente cientos de miles o más; esto hace efectivamente imposible detener el ataque simplemente identificando y bloqueando una sola dirección IP, la mera distribución de las fuentes atacantes también hace muy difícil distinguir el tráfico legítimo de los usuarios del tráfico de ataque cuando se extiende por tantos puntos de origen.
    

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-10
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 18.
          span Detección de DDoS.
        
        .row.justify-content-center.align-items-center
          .col-lg-6
            figure.mb-0(style="background-color:#E4FDFC")
              img(src="@/assets/curso/tema2/img25.svg")
              p.mb-0.text-center Realizar un análisis para averiguar si el tráfico es amigo 
          .col-lg-6(style="background-color:#E4FDFC")
            figure.mb-0(style="background-color:#E4FDFC")
              img(src="@/assets/curso/tema2/img26.svg")
              p.mb-0.text-center El primer paso para evitar o detener un ataque DDoS 
        
    .row.justify-content-center.mb-5
      .col-lg-2.d-flex(style="border-right: 3px solid #8F52F5")        
      .col-lg-8.d-flex.py-2
        div.p-0
          p.mb-1 Para que lo anterior suceda, se deben cumplir dos criterios de éxito: 
          p.mb-1 1) velocidad de detección y 
          p.mb-1 2) precisión de la detección. 
          p.mb-0 Por lo tanto, los métodos de detección son una consideración clave en la formulación de una fuerte defensa DDoS.
      .col-lg-2.d-flex(style="border-left: 3px solid #8F52F5")        

    .fondo6-tema2.pt-5.pb-0.px-0.mb-5            
      p.mb-4.pt-5 <b>Detección de DDoS:</b> Mejorar la precisión usando Big Data.
      p.mb-4 La primera generación de soluciones de detección de DDoS fuera de banda se basó en el diseño de software de un solo servidor, que en su mayoría se ejecutaba en dispositivos de servidor independientes montados en bastidor. 

      .fondo7-tema2.p-0.mb-4
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-3
            figure.mb-0
              img(src="@/assets/curso/tema2/img30.png")
          .col-lg-7
            p.mb-0 Aunque es mucho mejor que nada, los servidores individuales simplemente no tienen los recursos de computación, memoria y almacenamiento para rastrear grandes volúmenes de datos de tráfico en toda la red, esto es particularmente cierto cuando se intenta realizar una línea de base dinámica, lo que requiere escanear una cantidad masiva de datos de flujo para comprender lo que es normal, y luego mirar hacia atrás días o semanas para evaluar si las condiciones actuales constituyen una anomalía.  Independientemente de que se despliegue en las instalaciones o en la nube, la detección de DDoS en un solo servidor es insuficiente para detectar con precisión los ataques actuales de una forma fiable y constante.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          p.mb-4 Al aprovechar las tecnologías de Big Data para almacenar los eventos de la red a medida que suceden y al acceder a este repositorio de datos en la nube, los clientes pueden evitar los dispositivos de detección de DDoS que no logran escalar a medida que sus redes in situ crecen y/o se vuelven a desplegar en la nube, o evitar los costosos proyectos internos que requieren inversiones continuas u obsoletas a medida que cambian los marcos de software abierto.
          p.mb-3.text-center Las contramedidas para los ataques DoS y DDoS son:

        .row.justify-content-center.align-items-center
          .col-lg-10
            div.slider-espcial.d-flex.justify-content-center.align-items-center.px-3
              .row.d-flex.justify-content-center.align-items-center.w-100
                .col-lg-1.indicador__container
                  img(src="@/assets/curso/tema1/img58.svg", v-on:click="anterior2"  @mouseover="mostrarIndicador2 = false")
                  .indicador--click(v-if="mostrarIndicador2")
                .col-lg-10
                  p.mb-0.text-center(v-if="espacial2==1", data-aos="slide-left") Sistemas de Detección de Intrusos (IDS) y un Sistema de Protección de Intrusos (IPS).
                  p.mb-0.text-center(v-if="espacial2==2", data-aos="slide-left") Fuertes programas antivirus y anti-spyware en todos los sistemas con conectividad a Internet.
                  p.mb-0.text-center(v-if="espacial2==3", data-aos="slide-left") Hashes de archivos y carpetas en los archivos y carpetas del sistema, para identificar si han sido comprometidos.
                .col-lg-1
                  img(src="@/assets/curso/tema1/img59.svg" v-on:click="siguiente2" @mouseover="mostrarIndicador2 = false")


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    espacial1: 1,
    espacial2: 1,
    mostrarIndicador: true,
    mostrarIndicador2: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    siguiente: function() {
      this.espacial1++
      if (this.espacial1 > 3) {
        this.espacial1 = 1
      }
    },
    anterior: function() {
      this.espacial1--
      if (this.espacial1 < 1) {
        this.espacial1 = 3
      }
    },

    siguiente2: function() {
      this.espacial2++
      if (this.espacial2 > 3) {
        this.espacial2 = 1
      }
    },
    anterior2: function() {
      this.espacial2--
      if (this.espacial2 < 1) {
        this.espacial2 = 3
      }
    },
  },
}
</script>

<style lang="sass"></style>
