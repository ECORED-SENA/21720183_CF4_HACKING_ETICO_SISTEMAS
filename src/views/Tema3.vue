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
            img(src="@/assets/curso/tema3/img00.png")
      .row.justify-content-center.align-items-center.mb-5 
        .col-lg-10
          p.mb-0 Es importante tener en cuenta que, dentro de un sistema en una organización, los sistemas y la información deben ser protegidos y reconocidos, para poder evitar que los piratas informáticos puedan ingresar archivos de <em>malware</em> y realizar daños en la estructura de datos, y así robar o secuestrar información. Estas técnicas de detección y evasión de intrusos hoy cuentan con herramientas para detectar intrusiones y aplicar los correctivos necesarios y salvaguardar la integridad de toda la información.
    

      Separador

      #t_3_1.titulo-segundo.color-acento-contenido
        h2 3.1  Conceptos y generalidades

      p.mb-4 Un sistema de detección de intrusos (<em>IDS</em>) es un dispositivo o aplicación de <em>software</em> que monitoriza una red en busca de actividades maliciosas o violaciones de la política. Por lo general, cualquier actividad maliciosa o violación se notifica o se recopila de forma centralizada, mediante un sistema de gestión de información y eventos de seguridad. Algunos <em>IDS</em> son capaces de responder a la intrusión detectada al ser descubierta; estos se clasifican como sistemas de prevención de intrusiones (<em>IPS</em>). Existen tres formas para detectar una intrusión.

      .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
        h5 Figura 19.
        span Formas de detectar una intrusión.
      
      figure
        img(src="@/assets/curso/tema3/img02.svg")
    
    Separador.mb-0.pb-0
    .fondo2-tema3.pt-4.pb-0.mb-5
      #t_3_2.titulo-segundo.color-acento-contenido
        h2 3.2 Tipos de <em>IDS</em>

      p.mb-5 Hay una amplia gama de <em>IDS</em>, que van desde <em>software</em> antivirus hasta sistemas de monitorización por niveles que siguen el tráfico de toda una red. Las clasificaciones más comunes son:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7
          div.mb-4
            img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
            p.mb-0(style="display:inline") <b>Sistemas de detección de intrusos en la red (<em>NIDS</em>):</b> un sistema que analiza el tráfico entrante de la red; estos mecanismos consisten normalmente en una caja negra que se sitúa en la red en modo promiscuo, atento a los patrones indicativos de una intrusión

          div.mb-4
            img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
            p.mb-0(style="display:inline") <b>Sistemas de detección de intrusos basados en host (<em>HIDS</em>):</b> un sistema que monitoriza los archivos importantes del sistema operativo, estos mecanismos suelen incluir la auditoría de eventos que ocurren en un host específico; estos no son tan comunes, debido a la sobrecarga en que incurren por tener que monitorear cada evento del sistema.

          div.mb-4
            img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
            p.mb-0(style="display:inline") <b>Supervisión de archivos de inicio de sesión:</b> estos mecanismos suelen ser programas que analizan los archivos de registro después de un evento que ya ha ocurrido, como los intentos fallidos de conexión.

          div.mb-0
            img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
            p.mb-0(style="display:inline") <b>Comprobación de integridad de archivos:</b> estos mecanismos de verificación son para los caballos de Troya, o archivos que de otra forma se han modificado, lo que indica que un intruso ya ha estado allí, por ejemplo, <em>TRIPWIRE</em>
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/img04.png")
      
      .fondo3-tema3.py-5.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-3
            figure
              img(src="@/assets/curso/tema3/img06.svg")            
          .col-lg-7
            p.mb-3.text-white <em>Tripwire</em> es un sistema de detección de intrusos (<em>IDS</em>) que, de forma constante y automática, mantiene bajo control los archivos e informes críticos del sistema si han sido destruidos o modificados por un cracker (o por error). Permite al administrador del sistema saber inmediatamente qué se ha visto comprometido y arreglarlo. Se puede descargar del siguiente enlace:
            a.boton--sm.color-acento-botones.me-3.py-2(href="https://www.tripwire.com/free-downloads" target="_blank" type="application/pdf")
              span.me-2 Enlace <em>web</em>  
              img(style="width:20px; height:20px" src="@/assets/curso/tema3/img07.svg")   
      
      p.mb-5 La primera vez que se ejecuta <em>Tripwire</em>, almacena sumas de control, tamaños exactos y otros datos de todos los archivos seleccionados en una base de datos; las ejecuciones sucesivas comprueban si cada archivo sigue coincidiendo con la información de la base de datos e informan de todos los cambios. <em>Tripwire</em> fue lanzado inicialmente en 1992. Hoy en día, varios programas comparten este nombre, uno es <em>GPL </em>y dos son propietarios.
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

    p.mb-4 En todos los casos, hay cinco áreas que deben ser abordadas:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 20.
          span Áreas.

        SlyderF(columnas="col-12")          
          img(src="@/assets/curso/tema3/img08.png")
          img(src="@/assets/curso/tema3/img09.png")
          img(src="@/assets/curso/tema3/img10.png")
          img(src="@/assets/curso/tema3/img11.png")
          img(src="@/assets/curso/tema3/img12.png")

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-0          
          p.mb-0 Mientras busca signos de intrusión, tenga en cuenta que la información de una fuente puede no parecer sospechosa por sí misma. Las inconsistencias entre varias fuentes pueden ser a veces el mejor indicio de actividades o intrusiones sospechosas.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 <em>Firewall</em> y <em>Honeypot</em>

    p.mb-4 A continuación, se abordan estos dos términos importantes en la seguridad informática.

    .row.align-items-center.ms-0.mb-4.mt-3
        .col-auto.ImgSubtitulo
          .h4.ms-5.mb-0.text-white.me-5 <i>Firewall</i>
        .col-auto
          img.candado.mb-0(src='@/assets/curso/candado.png')

    p.mb-5 Un cortafuegos es un dispositivo de seguridad de red que monitoriza el tráfico de red entrante y saliente y decide si permite o bloquea un tráfico específico basándose en un conjunto definido de reglas de seguridad.

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4 
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema3/img14.png')})`}"
            )
            .bloque-texto-g__texto.py-5(style="width:67% !important; padding: 2.4rem 2.2rem 2.4rem 2.2rem !important;")              
              p.mb-0 Los cortafuegos han sido la primera línea de defensa en la seguridad de la red durante más de 25 años. Establecen una barrera entre las redes internas aseguradas y controladas, que pueden ser confiables, y las redes externas no confiables, como la <em>Internet</em>. 

          p.mb-5 Un cortafuegos puede ser de <em>hardware</em>, <em>software</em>, o ambos. Los tipos de cortafuegos pueden dividirse en varias categorías diferentes, según su estructura general y su método de funcionamiento. Aquí hay ocho tipos de cortafuegos: 
    
          .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
            h5 Figura 21.
            span Tipos de cortafuegos.
          figure.mb-0
            img(src="@/assets/curso/tema3/img15.svg")

    .fondo4-tema3.py-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          div.mb-4
            img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img26.svg")  
            h4.mb-0(style="display:inline") Tipos de <em>firewall</em>
          
          p.mb-4 Una vez que los primeros administradores de sistemas de <em>Internet</em> comenzaron a entender que eran atacados con frecuencia, el cortafuegos en la red resultaba inevitable, estaba destinado a haber algún tipo de proceso que mirara el tráfico de la red en busca de señales claras de atacantes, exactamente cómo iba a funcionar esto no estaba tan claro.
    
      .row.fondo5-tema3.justify-content-center.align-items-center.mb-4.mx-0        
        .col-lg-7.ps-5
          p.mb-0 Los dispositivos y servicios de cortafuegos pueden ofrecer protección más allá de la función estándar del cortafuegos, por ejemplo, proporcionando detección de intrusos, protección contra ataques de denegación de servicio y otros servicios de seguridad para proteger los servidores y otros dispositivos dentro de la red privada. Aunque algunos tipos de cortafuegos pueden funcionar como dispositivos de seguridad multifuncionales, no permita que tales ofertas distraigan de la cuestión clave: <b>¿Protege este cortafuegos la red privada de las amenazas externas mediante el examen de las unidades de datos del protocolo?</b>
        .col-lg-3
          figure
            img(src='@/assets/curso/tema3/img19.png')   

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          p.mb-4  Un cortafuegos de aplicación es un tipo de cortafuegos que gobierna el tráfico hacia, desde o por una aplicación o servicio. Los cortafuegos de aplicaciones, o cortafuegos de capa de aplicación, utilizan una serie de políticas configuradas para determinar si se deben bloquear o permitir las comunicaciones hacia o desde una aplicación.
          p Los cortafuegos tradicionales controlan el flujo de datos hacia y desde la <em>CPU</em>, examinando cada paquete a medida que pasa. Un cortafuegos de aplicación lo lleva más lejos, al controlar la ejecución de archivos o código por parte de aplicaciones específicas. De esta manera, incluso si un intruso entra en una red o un servidor, no puede ejecutar código malicioso.
    
      .row.justify-content-center.align-items-center
        .col-lg-6.py-2(style="background-color: #79F5ED")
          p.mb-0.text-center.my-1 Los cortafuegos de aplicaciones pueden ser activos o pasivos:

      .row.justify-content-center.align-items-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
            h5 Figura 22.
            span Cortafuegos de aplicaciones.
          .tarjeta--container.row.pt-0
            .col-md.p-5(style="background-color:#E3D2FD")
              .row.justify-content-center.mb-4
                .col-6.d-flex.justify-content-center
                  figure(style="width:170px")
                    img(src='@/assets/curso/tema3/img20.svg')
                
              h1.text-center Activos
              p.px-5 Los <em>firewalls</em> de aplicaciones activos inspeccionan activamente todas las solicitudes entrantes, incluyendo el mensaje real que se está intercambiando, contra vulnerabilidades conocidas, como las inyecciones de <em>SQL</em>, la manipulación de parámetros y <em>cookies </em>y las secuencias de comandos de sitios cruzados. Sólo las solicitudes que se consideran "limpias" se pasan a la aplicación.

            .col-md.tarjeta.p-5(style="background-color:#F7C4D3")
              .row.justify-content-center.mb-4
                .col-6.d-flex.justify-content-center
                  figure(style="width:170px")
                    img(src='@/assets/curso/tema3/img21.svg')
                
              h1.text-center Pasivos
              p.px-5 Los cortafuegos pasivos de las aplicaciones actúan de forma similar a un sistema de detección de intrusos (<em>IDS</em>) en el sentido de que también inspeccionan todas las solicitudes entrantes contra vulnerabilidades conocidas, pero no rechazan o niegan activamente esas solicitudes si se descubre un posible ataque.

    p.mb-4 Los cortafuegos de aplicaciones son generalmente actualizables de forma remota, lo que les permite prevenir vulnerabilidades recién descubiertas. Suelen estar más actualizados que el código específico centrado en la seguridad que se incluye en las aplicaciones, debido a los ciclos de desarrollo y prueba más largos que se requieren para incluir dicho código en las aplicaciones.
    p.mb-5 Hoy en día, lo más común es ver cortafuegos de aplicaciones <em>web</em> (<em>WAF</em>) para filtrar, monitorear y bloquear el tráfico <em><em>HTTP</em>/S</em> hacia y desde una aplicación <em>web</em>, específicamente.

    .row.align-items-center.ms-0.mb-4.mt-3
        .col-auto.ImgSubtitulo
          .h4.ms-5.mb-0.text-white.me-5 <i>Honeypots</i>
        .col-auto
          img.candado.mb-0(src='@/assets/curso/candado.png')

    p.mb-4 Una definición de <b><em>honeypot</em></b> viene del mundo del espionaje, donde los espías al estilo <em>Mata Hari</em>, que usan una relación romántica como una forma de robar secretos, son descritos como una "trampa de miel" o "<em>honeypot</em>". A menudo, un espía enemigo es comprometido por una trampa de miel y luego es chantajeado para entregar todo lo que sabe.
    
    .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
      h5 Figura 23.
      span <em><em>Honeypot</em></em>.
    figure.mb-5
      img(src="@/assets/curso/tema3/img23.svg")

    p.mb-5 En términos de seguridad informática, un "<i>honeypot</i>" cibernético funciona de manera similar, poniendo un cebo para los <i>hackers</i>, es un sistema informático sacrificado, que pretende atraer los ciberataques, como un señuelo. Imita un objetivo para los hackers y utiliza sus intentos de intrusión para obtener información sobre los ciberdelincuentes y la forma en que están operando o para distraerlos de otros objetivos.

    .fondo4-tema3.py-5.mb-0
      .row.justify-content-center.align-items-center
        .col-lg-10
          div.mb-4
            img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img26.svg")  
            h4.mb-0(style="display:inline") Tipos de <em>honeypot</em> 
          
          p.mb-4 Se pueden utilizar diferentes tipos de <b><em>honeypot</em></b> para identificar diferentes tipos de amenazas, las distintas definiciones de <em>honeypot</em> se basan en el tipo de amenaza que se aborda, todas ellas tienen cabida en una estrategia de seguridad cibernética completa y eficaz.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10.ps-5.py-0
          .row.justify-content-center.align-items-center.mb-0.py-4(style="border-top: 2px solid #8F52F5")
            .col-1(style="position:relative")
              img(style="position: relative; left:-65%; min-width: 45px" src="@/assets/curso/tema3/img25.svg")
            .col-11.ps-0.pe-5
              p.mb-0.me-3 Las trampas de correo electrónico o de correo basura colocan una dirección de correo electrónico falsa en un lugar oculto, donde sólo un recolector de direcciones automatizado podrá encontrarla. Dado que la dirección no se utiliza para ningún otro propósito que no sea la trampa de <em>spam</em>, es 100% seguro que cualquier correo que llegue a ella es <em>spam</em>. Todos los mensajes con el mismo contenido que los enviados a la trampa de <em>spam</em> pueden ser bloqueados automáticamente, y la <em>IP</em> de origen de los remitentes puede ser añadida a una lista negra.

          .row.justify-content-center.align-items-center.mb-0.py-4(style="border-top: 2px solid #8F52F5")
            .col-1(style="position:relative")
              img(style="position: relative; left:-65%; min-width: 45px" src="@/assets/curso/tema3/img26.svg")
            .col-11.ps-0.pe-5
              p.mb-0.me-3 Base de datos señuelo para monitorear las vulnerabilidades del <em>software</em> y detectar ataques que exploten la arquitectura insegura del sistema o que utilicen la inyección <em>SQL</em>, la explotación de servicios <em>SQL</em> o el abuso de privilegios.

          .row.justify-content-center.align-items-center.mb-0.py-4(style="border-top: 2px solid #8F52F5")
            .col-1(style="position:relative")
              img(style="position: relative; left:-65%; min-width: 45px" src="@/assets/curso/tema3/img27.svg")
            .col-11.ps-0.pe-5
              p.mb-0.me-3 Un <em>honeypot</em> de <em>malware</em> imita las aplicaciones de <em>software</em> y las <em>API</em>, para invitar a los ataques de <em>malware</em>. A continuación, se pueden analizar las características del <em>malware</em> para desarrollar <em>software</em> <em>antimalware</em> o para cerrar las vulnerabilidades de la <em>API</em>.

          .row.justify-content-center.align-items-center.mb-0.py-4.mb-4(style="border-top: 2px solid #8F52F5; border-bottom: 2px solid #8F52F5")
            .col-1(style="position:relative")
              img(style="position: relative; left:-65%; min-width: 45px" src="@/assets/curso/tema3/img28.svg")
            .col-11.ps-0.pe-5
              p.mb-0.me-3 Un <em>honeypot</em> de araña tiene por objeto atrapar a las arañas <em>web</em> ("<em>spiders</em>"), creando páginas <em>web</em> y enlaces accesibles solo para las arañas. La detección de arañas puede ayudar a aprender a bloquear los <em>bots</em> maliciosos, así como las arañas de redes publicitarias.
    
      p.mb-4.text-center Al monitorear el tráfico que entra al sistema de <em>honeypot</em>, se puede:

      .row.justify-content-center.align-items-center
        .col-lg-8
          div.slider-espcial.d-flex.justify-content-center.align-items-center.px-3
            .row.d-flex.justify-content-center.align-items-center.w-100
              .col-lg-1.indicador__container
                img(src="@/assets/curso/tema1/img58.svg", v-on:click="anterior" @mouseover="mostrarIndicador = false")
                .indicador--click(v-if="mostrarIndicador")
              .col-lg-10
                p.mb-0.text-center(v-if="espacial1==1", data-aos="slide-left") <b>Evaluar</b><br>De dónde vienen los ciberdelincuentes.
                p.mb-0.text-center(v-if="espacial1==2", data-aos="slide-left") <b>Evaluar</b><br>El nivel de amenaza.                
                p.mb-0.text-center(v-if="espacial1==3", data-aos="slide-left") <b>Evaluar</b><br>Qué modus operandi están usando.
                p.mb-0.text-center(v-if="espacial1==4", data-aos="slide-left") <b>Evaluar</b><br>Qué datos o aplicaciones les interesan.
                p.mb-0.text-center(v-if="espacial1==5", data-aos="slide-left") <b>Evaluar</b><br>Lo bien que funcionan sus medidas de seguridad para detener los ciberataques.
              .col-lg-1
                img(src="@/assets/curso/tema1/img59.svg"  v-on:click="siguiente" @mouseover="mostrarIndicador = false")

    p.mb-5.text-center Revise, a continuación, otra definición de "<em>honeypot</em>": 

    figure.mb-5
      img(src="@/assets/curso/tema3/img29.svg")

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0  Ambos tipos de <em>honeypot</em> tienen un lugar en la ciberseguridad de los <em>honeypot</em>. Utilizando una mezcla de ambos, se puede refinar la información básica sobre los tipos de amenazas que provienen de los <em>honeypots</em> de baja interacción, añadiendo información sobre las intenciones, comunicaciones y <em>exploits</em> del <em>honeypot</em> de alta interacción.

        p.mb-0 Al utilizar los <em>honeypots</em> cibernéticos para crear un marco de inteligencia de amenazas, una empresa puede asegurarse de que está dirigiendo su gasto en ciberseguridad a los lugares adecuados y puede ver dónde tiene puntos débiles de seguridad.

    
    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Evasión de <em>IDS</em> y <em>firewalls</em>

    p.mb-5 Para luchar contra las intromisiones, hoy se dispone de diversos medios para detectarlos. Revise a continuación los posibles ataques.
  
    .fondo6-tema3.pt-5.pb-0.px-0.mb-5      
      .row.align-items-center.ms-0.mb-4.mt-3
        .col-auto.ImgSubtitulo
          .h4.ms-5.mb-0.text-white.me-5 Ataque por inserción
        .col-auto
          img.candado.mb-0(src='@/assets/curso/candado.png')

      p.mb-5 Un <em>IDS</em> puede aceptar un paquete que un terminal rechace. Un <em>IDS</em> que hace esto comete el error de creer que el terminal ha aceptado y procesado el paquete, cuando en realidad no lo ha hecho. Un atacante puede explotar esta condición enviando paquetes a un terminal que este rechazará, pero que el <em>IDS</em> creerá que son válidos. Al hacer esto, el atacante está “insertando” datos en el <em>IDS</em> --- ningún otro sistema en la red se preocupa por los paquetes malos.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          figure.m-0
            img(src="@/assets/curso/tema3/img32.png")
        .col-lg-7
          p.mb-4 A esto se le llama un ataque de "inserción", y las condiciones que se prestan a los ataques de inserción son las vulnerabilidades más prevalentes en los sistemas de detección de intrusos que se han probado. Un atacante puede usar los ataques de inserción para derrotar el análisis de firmas, permitiéndole pasar los ataques a través de un <em>IDS</em>.
          p.mb-4 Para entender por qué los ataques de inserción frustran el análisis de firmas, es importante entender cómo se emplea la técnica en los sistemas de identificación reales. En su mayor parte, el "análisis de firmas" utiliza algoritmos de coincidencia de patrones para detectar una cierta cadena dentro de un flujo de datos. Por ejemplo, un <em>IDS</em> que trata de detectar un ataque <em>PHF</em> buscará la cadena <b>“phf”</b> dentro de una petición <em>HTTP</em> “<em>GET</em>”, que es en sí misma una cadena más larga que podría parecerse a algo como <b>“GET /cgi-bin/phf</b>?”

          div.p-4.px-5.mb-4(style="background-color: white") 
            p.mb-0 El <em>IDS</em> puede detectar fácilmente la cadena "ff" en esa solicitud <em>HTTP</em>, usando una simple búsqueda de subcadena. Sin embargo, el problema se vuelve mucho más difícil de resolver cuando el atacante puede enviar la misma solicitud a un servidor <em>web</em>, pero obligar al <em>IDS</em> a ver una cadena diferente, como “GET /cgi-bin/pleasedontdetecttthisforme?”'. El atacante ha usado un ataque de inserción para añadir "Leasedontdetectt", "is" y "orme" al flujo original. El <em>IDS</em> ya no puede distinguir la cadena "ff" del flujo de datos que observa.
        
      .row.align-items-center.ms-0.mb-4
        .col-auto.ImgSubtitulo
          .h4.ms-5.mb-0.text-white.me-5 Ataque por evasión
        .col-auto
          img.candado.mb-0(src='@/assets/curso/candado.png') 
      

      p.mb-5 Un sistema final puede aceptar un paquete que un <em>IDS</em> rechaza. Un <em>IDS</em> que rechaza por error tal paquete pierde su contenido por completo. Esta condición también puede ser explotada, esta vez, deslizando información crucial a través del <em>IDS</em> en paquetes que el <em>IDS</em> es demasiado estricto en su procesamiento. Estos paquetes están "evadiendo" el escrutinio del <em>IDS</em>.

      figure.m-0
        img(src="@/assets/curso/tema3/img34.svg")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure.m-0
          img(src="@/assets/curso/tema3/img35.svg")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0  Se llama a estos ataques de "evasión", y son los más fáciles de explotar y los más devastadores para la precisión de un <em>IDS</em>. Sesiones enteras pueden ser llevadas a cabo en paquetes que evaden un <em>IDS</em>, y ataques descaradamente obvios, redactados en tales sesiones, ocurrirán justo bajo la nariz de incluso el más sofisticado motor de análisis.

        p.mb-4 Los ataques de evasión se ajustan al patrón de la lámina de aluminio de una manera muy similar a los ataques de inserción. De nuevo, el atacante hace que el <em>IDS</em> vea un flujo de datos diferente al del sistema final... esta vez, sin embargo, el sistema final ve más que el <em>IDS</em>, y la información que el <em>IDS</em> pierde es crítica para la detección de un ataque.
        p.mb-0 En el ataque de inserción que se menciona anteriormente, el atacante envía una petición <em>HTTP</em>, pero enturbia su contenido en el <em>IDS</em> con datos adicionales que hacen que la petición parezca inocua. En un ataque de evasión, el atacante envía porciones de la misma solicitud en paquetes que el <em>IDS</em> rechaza por error, permitiéndole eliminar partes del flujo de la vista del sistema de identificación. Por ejemplo, la petición original podría convertirse en “GET /gin/f”, lo que no tendría sentido para la mayoría de los sistemas de identificación.

    .row.align-items-center.ms-0.mb-4.mt-2
        .col-auto.ImgSubtitulo
          .h4.ms-5.mb-0.text-white.me-5 Ataque por denegación de servicios
        .col-auto
          img.candado.mb-0(src='@/assets/curso/candado.png')  

    p.mb-4 El ataque de denegación de servicio permite a los intrusos acceder a los servicios de la red, impidiendo así que los usuarios legítimos accedan a los servicios. Para superar los déficits del ataque <em>DoS</em>, es esencial diseñar un sistema de detección de intrusos.

    .row.justify-content-center.align-items-center.fondo7-tema3.py-5.mb-5.m-0.infografia
      .col-lg-10

        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img37.svg')              

          .tarjeta.color-acento-botones.p-3(x="33.3%" y="82%" numero=" ")
            p.mb-0 Hace que el dispositivo se bloquee.                  
          .tarjeta.color-acento-botones.p-3(x="38.3%" y="51.5%" numero=" ")
            p.mb-0 Causa mucha concurrencia para que no sea posible investigar todas las alarmas.
          .tarjeta.color-acento-botones.p-3(x="50.2%" y="37%" numero=" ")
            p.mb-0 Consume la potencia de procesamiento del dispositivo y permite ataques a escondidas.
          .tarjeta.color-acento-botones.p-3(x="61.9%" y="52%" numero=" ")
            p.mb-0 Se llena el espacio en disco, lo que causa ataques al no estar conectado.
          .tarjeta.color-acento-botones.p-3(x="66.7%" y="82%" numero=" ")
            p.mb-0 Causa más alarmas de las que pueden ser manejadas por los sistemas de gestión (tales como bases de datos, sistemas de venta de entradas, etc.).
            
        p.mb-0 El sistema de detección de intrusos (<em>IDS</em>) es un <em>software</em> que funciona <b>como un mecanismo de seguridad de la red para proteger el sistema de la red informática de los ataques.</b> Con el creciente número de datos que se transmiten gradualmente de una red a otra, el <em>IDS</em> identifica eficazmente las intrusiones en conjuntos de datos muy grandes. La minería de datos es una herramienta eficiente aplicada para perfilar el sistema de detección de intrusos y evitar que los datos de la red masiva sean accedidos por los intrusos. Los valores atípicos son patrones en los datos que no coinciden con una noción bien definida de comportamiento normal. La detección de valores atípicos tiene como objetivo encontrar patrones en los datos que no se ajustan al comportamiento esperado. Se utiliza ampliamente para desarrollar la detección de intrusos en la ciberseguridad. Este documento presenta el estudio de la técnica de detección de valores atípicos y cómo se utiliza para desarrollar el sistema de detección de intrusos para superar el ataque <em>DoS</em>.

    .row.align-items-center.ms-0.mb-4.mt-2
        .col-auto.ImgSubtitulo
          .h4.ms-5.mb-0.text-white.me-5 Evasión por afuscación
        .col-auto
          img.candado.mb-0(src='@/assets/curso/candado.png')


    p.mb-5 La ofuscación, una técnica de evasión cada vez más popular, consiste en ocultar un ataque con personajes especiales. Puede utilizar caracteres de control, como el espacio, el tabulador, el retroceso y la supresión. Además, la técnica puede representar caracteres en formato hexadecimal para eludir el <em>IDS</em>. 

    .row.justify-content-center.align-items-center.py-5.mb-5
      .col-lg-10
        figure.mb-4
          img(src="@/assets/curso/tema3/img40.svg")

        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0  El uso de la representación <em>Unicode</em>, en la que cada caracter tiene un valor único, independientemente de la plataforma, el programa o el idioma, también es una forma efectiva de evadir el <em>IDS</em>. Por ejemplo, un atacante podría evadir un <em>IDS</em> usando el caracter <em>Unicode</em> c1 para representar una barra inclinada para una solicitud de página <em>web</em>.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    espacial1: 1,
    mostrarIndicador: true,
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
      if (this.espacial1 > 5) {
        this.espacial1 = 1
      }
    },
    anterior: function() {
      this.espacial1--
      if (this.espacial1 < 1) {
        this.espacial1 = 5
      }
    },
  },
}
</script>

<style lang="sass">
.infografia
  .tarjeta.color-acento-botones
    background: rgba(233,220,253,1);
    background: -moz-linear-gradient(top, rgba(233,220,253,1) 0%, rgba(228,253,252,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(233,220,253,1)), color-stop(100%, rgba(228,253,252,1)));
    background: -webkit-linear-gradient(top, rgba(233,220,253,1) 0%, rgba(228,253,252,1) 100%);
    background: -o-linear-gradient(top, rgba(233,220,253,1) 0%, rgba(228,253,252,1) 100%);
    background: -ms-linear-gradient(top, rgba(233,220,253,1) 0%, rgba(228,253,252,1) 100%);
    background: linear-gradient(to bottom, rgba(233,220,253,1) 0%, rgba(228,253,252,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e9dcfd', endColorstr='#e4fdfc', GradientType=0 );
</style>
