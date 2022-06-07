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
      
      p.mb-5 La ingeniería social es el arte de manipular a la gente para que entregue información confidencial. Los tipos de información que estos criminales buscan pueden variar, pero cuando los individuos son el objetivo, los criminales normalmente intentan engañar para obtener las contraseñas o la información bancaria, o para que usted acceda a su ordenador para instalar secretamente <em>software</em> malicioso, lo que les dará acceso a sus contraseñas e información bancaria, además de darles control sobre su ordenador.

      .row.justify-content-center.align-items-center
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img03.png')})`}"
            )
            .bloque-texto-g__texto.py-5(style="width:67% !important; padding: 2.4rem 2.2rem 2.4rem 2.2rem !important;")              
              p.mb-0 Los delincuentes utilizan tácticas de ingeniería social porque normalmente es más fácil explotar su inclinación natural a la confianza que descubrir formas de piratear su <em>software</em>.  Por ejemplo, es mucho más fácil engañar a alguien para que le dé su contraseña que intentar piratear su contraseña (a menos que la contraseña sea realmente débil).
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 1.
          span Ingeniería social.
        figure.m-0
          img(src="@/assets/curso/tema1/img04.svg")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-0 La seguridad consiste en saber en quién y en qué confiar. Es importante saber cuándo y cuándo no tomarle la palabra a una persona y cuándo la persona con la que se está comunicando es quien dice ser; lo mismo ocurre con las interacciones en línea y el uso de los sitios <em>web</em>: 
    
    .fondo2-tema1.pt-5.pb-0.px-0
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          h3.mb-0.text-center(style="color: #500C75") <br>¿Cuándo se confía en que el sitio <em>web</em> que se está utilizando es legítimo o es seguro para proporcionar su información?
      
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
              p.mb-0.me-3 Sólo el 51% de los líderes empresariales ajustan su configuración en sitios como <em>Facebook </em>para restringir quién puede ver su perfil.

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
        
          
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.ps-5.py-0
        .row.fondo3-tema1.justify-content-center.align-items-center.py-0
            .col-lg-9.ps-5.pe-0
              p.mb-0 Por muy valiosas que sean las soluciones de seguridad que protegen una red, pueden resultar efectivamente inútiles si un <b>ciberdelincuente es experto en ingeniería social,</b> la ingeniería social es la práctica de <b>usar la manipulación para acceder a recursos protegidos</b>, como se verá más adelante. 
            .col-lg-3.p-0
              figure.m-0
                img(src="@/assets/curso/tema1/img09.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-0 Si su empresa y su equipo son vulnerables a un intento de ingeniería social, le falta una pieza crítica de su estrategia de seguridad de datos.

    .fondo4-tema1.pt-5.pb-0.px-0.mb-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          h3.mb-0.text-center(style="color: #500C75") <br>¿Qué hace que la ingeniería social sea efectiva?
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          p.mb-0 La ingeniería social es el equivalente a señalar una mancha imaginaria en la camisa de alguien, solo para mover la nariz cuando mira hacia abajo - al hacerse pasar por alguien de confianza, un ciberdelincuente tiene la oportunidad de hacer lo que quiera con los datos de un negocio, estos ataques tienen dos factores a su favor, como se muestra a continuación.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8          
          figure.m-0
            img(src="@/assets/curso/tema1/img11.svg")

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          p.mb-0 La inteligencia de código abierto puede provenir de una amplia gama de fuentes de datos, que solo ayudan a un aspirante a ingeniero social; a través de algunas excavaciones en <em>Internet</em>, un ingeniero social puede encontrar mucha información que ayuda a su ataque.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-4(style="font-size: 1em;")
            h5 Figura 3.
            span Ingeniero social.
          figure.m-0
            img(src="@/assets/curso/tema1/img12.svg")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-0 Los ingenieros sociales manipulan los sentimientos humanos, como la curiosidad o el miedo, para llevar a cabo esquemas y atraer a las víctimas a sus trampas, por lo tanto, tenga cuidado cuando se sienta alarmado por un correo electrónico, atraído por una oferta mostrada en un sitio <em>web</em>, o cuando se encuentre con medios digitales extraviados mintiendo. Estar alerta puede ayudarle a protegerse contra la mayoría de los ataques de ingeniería social que tienen lugar en el ámbito digital.
    
    .fondo5-tema1.pt-5.pb-0.px-0.mb-4            
      .row.justify-content-start.align-items-center.mb-4.mt-3
        .col-lg-4
          img(src="@/assets/curso/tema1/img14.svg")

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          p.mb-4 A diferencia de un virus, que depende de técnicas de <em>hacking</em> o código malicioso para entregar su carga, la ingeniería social depende de la psicología humana; bien utilizada, puede ser aprovechada para acceder a datos, sistemas e incluso edificios. Por ejemplo, en lugar de pasar meses trabajando en una nueva cepa de <em>malware</em>, los criminales centran su atención en engañar a los empleados para que divulguen su contraseña por teléfono, haciéndose pasar por un técnico de soporte informático; si hablan con la persona correcta y dicen las cosas correctas, podrían estar en la red en momentos.
          div.p-4.mb-4(style="background-color: white") 
            p.mb-0 La seguridad de su red es tan fuerte como su eslabón más débil, lo mismo se aplica a su personal, los criminales usan diferentes técnicas para encontrar el eslabón más débil, técnicas que se centran en nuestros miedos, nuestros gustos y disgustos y nuestras debilidades.
          p.mb-0 Con la investigación adecuada, un ingeniero social puede compilar un perfil inquietantemente exhaustivo de una empresa, sus empleados, sus operaciones y más. Algunos ejemplos muy breves e incompletos son los siguientes:
        .col-lg-4
          figure.m-0
            img(src="@/assets/curso/tema1/img15.svg")

      .tab1.p-0.mb-5
        TabsA.color-acento-botones
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones.py-4.px-5.d-flex.align-items-center(titulo="Tecnología")
            p.mb-0 La información sobre el tipo de tecnología que un negocio aprovecha es sorprendentemente común en línea; en los anuncios de empleo, por ejemplo, se suele identificar el <em>hardware</em> y el sistema operativo que utiliza una empresa para asegurarse de que el solicitante esté familiarizado con los sistemas con los que trabajaría, el problema es que esto también ayuda a un delincuente a identificar qué explotamientos serán efectivos contra una empresa; además, si una empresa no tiene cuidado, sus imágenes de medios sociales podrían proporcionar a un ciberdelincuente información sobre su <em>hardware</em> de redes.
          .tarjeta.color-acento-botones.py-4.px-5.d-flex.align-items-center(titulo="Información de los empleados")
            p.mb-0 También es común que la gente comparta demasiado en los medios sociales, lo que puede llevar fácilmente a que también se comparta la información de la empresa, esto incluye, además del acceso a la información que muchos permiten que esté disponible públicamente a través de los medios sociales, imágenes del lugar de trabajo, esas imágenes suelen revelar el tipo de computadora utilizada por los empleados, así como el contenido de sus pantallas y toda la información que aparece en ellas. Además, muchas personas comentarán su horario de trabajo en los medios sociales, así como proporcionarán un relato detallado de su experiencia profesional, lo que dará a un ingeniero social más datos con los que trabajar.
          .tarjeta.color-acento-botones.py-4.px-5.d-flex.align-items-center(titulo="Vendedores y otras empresas")
            p.mb-0 Los servicios externos que se prestan a una empresa pueden ayudar a un ingeniero social a acceder a esa empresa, especialmente si el proveedor de servicios los utiliza como prueba de valor en su sitio <em>web</em>. Los servicios de limpieza y los servicios de recogida de basura son especialmente valiosos, ya que los datos podrían ser robados después de salir del local de una empresa.
    
      p.mb-5 En resumen, si bien es crucial proteger sus datos con cortafuegos, requisitos de autenticación y otras medidas digitales, es igualmente crucial asegurarse de que sus empleados sean conscientes de los peligros que puede entrañar la ingeniería social. Establecer procesos que ayuden a frustrar los intentos de ingeniería social es algo que toda empresa debería hacer, ya que ayudará a protegerlos de estos ataques.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
            h5 Figura 3.
            span Intentos de ingeniería social.          
          figure.m-0
            img(src="@/assets/curso/tema1/img16.svg")

      .row.justify-content-center.align-items-center
        .col-lg-4(style="border: 1px solid #500C75")

    p.mb-4.text-center A continuación, encuentra relacionadas algunas formas de protegerse:

    .tarjetas1.mb-0
      .row.justify-content-center.align-items-center
        .col-xxl-10.col-12
          .row
            .col-lg-6.col-12
              .TFcontainer.mb-lg-0.mb-4
                img.TFimage(src='@/assets/curso/tema1/img17.png')
                .TFoverlay.p-4
                  p.mb-3 ● Borre cualquier solicitud de información financiera o contraseñas. Si le piden que responda a un mensaje con información personal, es una estafa.
                  p.mb-0 ● Rechace las solicitudes de ayuda o las ofertas de ayuda. Las empresas y organizaciones legítimas no se ponen en contacto con usted para ofrecerle ayuda si no solicitó específicamente la ayuda del remitente. Considere cualquier oferta de "ayuda", para restaurar los puntajes de crédito, refinanciar una casa, responder a su pregunta, etc., como una estafa; del mismo modo, si recibe una solicitud de ayuda de una organización benéfica u organización con la que no tiene relación, elimínela. Para dar, busque por su cuenta organizaciones caritativas de buena reputación para evitar caer en una estafa.
            .col-lg-6.col-12
              .TFcontainer
                img.TFimage(src='@/assets/curso/tema1/img18.png')
                .TFoverlay.p-4
                  p.mb-3 ● Ponga sus filtros de <em>spam</em> en alto. Todos los programas de correo electrónico tienen filtros de <em>spam</em>, para encontrar el suyo, mire las opciones de configuración y póngalas en alto. Recuerde revisar su carpeta de <em>spam</em> periódicamente para ver si el correo electrónico legítimo ha quedado atrapado allí accidentalmente; también puede buscar una guía paso a paso para configurar sus filtros de <em>spam</em>, buscando el nombre de su proveedor de correo electrónico más la frase 'filtros de <em>spam</em>'.
                  p.mb-0 ● Asegure sus dispositivos informáticos, instale <em>software</em> antivirus, cortafuegos y filtros de correo electrónico, y manténgalos actualizados. Configure su sistema operativo para que se actualice automáticamente, y si su smartphone no se actualiza automáticamente, actualícelo manualmente cada vez que reciba un aviso para hacerlo. Utilice una herramienta antiphishing ofrecida por su navegador <em>web</em> o por un tercero para alertarle de los riesgos.              
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Tipos y fases de la ingeniería social
    
    p.mb-5 La ciberdelincuencia no solo opera bajo códigos y herramientas sofisticadas, también hace uso de habilidades sociales del comportamiento humano para su actuar. En este módulo, se presentan diferentes fases que un ingeniero social usa para poder acceder a toda la información sensible que le puede servir para poder identificar vulnerabilidades dentro del <em>hacking</em> ético:

    .tab1.p-0
      TabsB.color-acento-botones
        .px-0.py-4(titulo="Fase 1" :icono="require('@/assets/curso/tema1/img19.svg')")
          .row.justify-content-center.py-4
            .col-lg-6
              h4.titulo-cuarto ● Recopilación de información
              p.mb-0 La probabilidad de éxito de la mayoría de los ataques depende de esta fase, por lo que es natural invertir la mayor parte del tiempo y la atención en ella. Las técnicas de recopilación de información se elaboran en el Marco. Parte de la información reunida se utiliza para determinar el vector de ataque, las posibles contraseñas, identificar las posibles respuestas de diversas personas, afinar los objetivos, familiarizarse y sentirse cómodo con el objetivo, y formular uno o varios pretextos sólidos.
            .col-lg-4            
              figure.m-0
                img(src="@/assets/curso/tema1/img23.png")  
        .px-0.py-4(titulo="Fase 2" :icono="require('@/assets/curso/tema1/img20.svg')")
          .row.justify-content-center.py-4
            .col-lg-10
              h4.titulo-cuarto ● Establecer la relación y la compenetración                    
              p.mb-0 Esta fase establece una relación de trabajo con el objetivo, este es un punto crítico ya que la calidad de la relación construida por el atacante determina el nivel de cooperación y la medida en que el objetivo irá a ayudar al atacante a lograr el objetivo; puede ser tan breve como apurarse hacia la puerta con una gran sonrisa y contacto visual para que el objetivo mantenga la puerta abierta para que el atacante la atraviese; puede ser conectarse a nivel personal por teléfono o tan personal como mostrar fotos de la familia y compartir historias con la recepcionista en el vestíbulo; también puede ser tan extenso como construir una relación online con el objetivo, a través de un perfil falso en un sitio de citas o de redes sociales. La creación de una relación se trata más a fondo en el Marco.      
        .px-0.py-4(titulo="Fase 3" :icono="require('@/assets/curso/tema1/img21.svg')")
          .row.justify-content-center.py-4
            .col-lg-6
              h4.titulo-cuarto ● Explotación            
              p.mb-4 Esto es cuando el atacante utiliza tanto la información como las relaciones para infiltrarse activamente en el objetivo. En esta fase, el atacante se centra en mantener el impulso de cumplimiento que se construyó en la fase 2, sin levantar sospechas; la explotación puede tener lugar mediante la divulgación de información aparentemente sin importancia o el acceso concedido/transferido al atacante. 
              p.mb-3 Entre los ejemplos de explotación exitosa se incluyen:
              div.py-3.px-4(style="background-color: #E4FDFC")
                div
                  img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img26.svg")  
                  p.mb-0(style="display:inline") El acto de mantener la puerta abierta o permitir de cualquier otra forma que el atacante entre en las instalaciones.
                div
                  img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img26.svg")  
                  p.mb-0(style="display:inline") Revelar la contraseña y el nombre de usuario por teléfono.
                div
                  img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img26.svg")  
                  p.mb-0(style="display:inline") Ofrecer pruebas sociales presentando la SE a otros empleados de la compañía.
                div
                  img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img26.svg")  
                  p.mb-0(style="display:inline") Insertar una unidad <em>flash</em> <em>USB</em> con una carga útil maliciosa en un ordenador de la empresa.
                div
                  img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img26.svg")  
                  p.mb-0(style="display:inline") Abrir un archivo adjunto de un correo electrónico infectado.
                div
                  img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img26.svg")  
                  p.mb-0(style="display:inline") Exponer secretos comerciales en una discusión con un supuesto “par”.
            .col-lg-4      
              figure.m-0
                img(src="@/assets/curso/tema1/img24.png")          
        .px-0.py-4(titulo="Fase 4" :icono="require('@/assets/curso/tema1/img22.svg')")
          .row.justify-content-center.py-4
            .col-lg-6
              h4.titulo-cuarto ● Ejecución
              p.mb-0 Esta fase es cuando se logra el objetivo final del ataque o, por diversas razones, se pone fin al mismo, de tal manera que no se levanten sospechas sobre lo que ha ocurrido. Por lo general, no es una buena práctica terminar un ataque con el objetivo cuestionando lo que acaba de ocurrir, en cambio, es mejor dejar que el objetivo sienta que ha hecho algo bueno por otra persona, lo que permite que continúen las posibles interacciones futuras. También se abordan aquí los cabos sueltos, como borrar las huellas digitales y asegurarse de que no quede ningún elemento o información para que el objetivo pueda determinar que se ha producido un ataque o la identidad del atacante. Una estrategia de salida bien planificada y sin problemas es el objetivo y el acto final del ataque.
            .col-lg-4              
              figure.m-0
                img(src="@/assets/curso/tema1/img25.png")  

    .fondo6-tema1.pt-4.pb-0.px-0.mb-4            
      .row.justify-content-center.align-items-center.mb-5.mt-3
        .col-lg-4
          figure.m-0
            img(src="@/assets/curso/tema1/img29.png")  
        .col-lg-7
          .row.justify-content-start.align-items-center.mb-4.mt-3
            .col-lg-7
              img(src="@/assets/curso/tema1/img28.svg")
          p.mb-4 Básicamente los tipos de ingeniería social que se abordarán en este módulo de aprendizaje son 2, aquel basado en humanos y otro basado en computadores. 
          h4.mb-2 Ataques basados en humanos:
          p.mb-4 Suplantación de identidad: actuar como otra persona para tener acceso a la información.
          p.mb-0 Pueden actuar como un usuario y una solicitud de información legítimos, o se hacen pasar por una autoridad superior y pueden solicitar información sensible, o se hacen pasar por una persona de apoyo técnico e intentan reunir detalles sensibles y confidenciales.
        .col-lg-1

      .row.justify-content-center.align-items-center.mt-3.mb-4 
        .col-lg-10
          .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
              h5 Figura 5.
              span Ataques basados en humanos.
          figure.mb-4
            img(src="@/assets/curso/tema1/img29.svg")
          p.mb-0 La ingeniería social ocurre por el instinto humano de confianza. Los ciberdelincuentes han aprendido que un correo electrónico, un mensaje de voz o un mensaje de texto cuidadosamente redactado puede convencer a la gente de que transfiera dinero, proporcione información confidencial o descargue un archivo que instale <em>malware</em> en la red de la empresa.
    
      .row.justify-content-center.align-items-center.mb-0.mb-0
        .col-lg-8.py-2(style="background-color: #FBDCE5")
          p.mb-0.text-center Otros tipos son los ataques basados en los seres humanos, revíselos a continuación:
    
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10      
          .info1.p-0.mb-4
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/img30.svg')              

              .tarjeta.p-4(x="8.94%" y="28.5%" numero="")               
                p.mb-0 Cuando una persona autorizada entra en un área restringida, la persona no autorizada también entra en el área restringida sin el conocimiento del empleado.

              .tarjeta.p-4(x="28.9%" y="75.7%" numero="")               
                p.mb-0 Aquí el atacante puede hacerse pasar por un empleado y pedirle al empleado autorizado que le permita entrar junto con él. Puede dar razones falsas, como que ha olvidado su placa inteligente, etc.

              .tarjeta.p-4(x="49.9%" y="28.5%" numero="")               
                p.mb-0 Cualquier documento confidencial o sensible debe ser debidamente triturado antes de tirarlo a la basura. Si no, un atacante puede mirar en el basurero para acceder a la información confidencial.
          
              .tarjeta.p-4(x="70.8%" y="75.7%" numero="")               
                p.mb-0 La escucha no autorizada de conversaciones y, por lo tanto, la recolección de datos importantes se llama escucha.

              .tarjeta.p-4(x="91.2%" y="28.5%" numero="")               
                p.mb-0 Es una técnica de observación directa, como mirar por encima del hombro de alguien, para conocer la información sensible como la contraseña, los números de identificación, etc.

          p.mb-5 Algunos de los métodos que los delincuentes usan para poder acceder a su información por medio de la ingeniería social son los siguientes:
          
          .tiempo1.mb-5
            LineaTiempoD.color-secundario
              div.px-2(numero="1" titulo="Miedo")
                p.mb-4 Recibe un mensaje de voz que dice que está siendo investigado por fraude fiscal y que debe llamar inmediatamente para evitar el arresto y la investigación criminal.
                p.mb-3 Este ataque de ingeniería social ocurre durante la temporada de impuestos; cuando la gente ya está estresada por sus impuestos, los criminales cibernéticos se aprovechan del estrés y la ansiedad que viene con la declaración de impuestos y usan estas emociones de miedo para engañar a la gente para que cumpla con el correo de voz.
                figure
                  img(src='@/assets/curso/tema1/img31.png')   

              div.px-2(numero="2" titulo="Avaricia")
                p.mb-3 Imagine si sólo pudiera transferir 10 dólares a un inversionista y ver que esto se convierta en 10.000 dólares sin ningún esfuerzo por su parte. Los ciberdelincuentes utilizan las emociones humanas básicas de la confianza y la codicia para convencer a las víctimas de que realmente pueden obtener algo por nada; un correo electrónico de cebo cuidadosamente redactado les dice a las víctimas que proporcionen la información de su cuenta bancaria y los fondos serán transferidos el mismo día.
                figure
                  img(src='@/assets/curso/tema1/img32.png')   

              div.px-2(numero="3" titulo="Urgencia")
                p.mb-3 Al recibir un correo electrónico del servicio de atención al cliente de un sitio <em>web</em> de compras en línea que compra con frecuencia, le dicen que necesitan confirmar la información de su tarjeta de crédito para proteger su cuenta. El lenguaje del correo electrónico le insta a responder rápidamente, para asegurarse de que la información de su tarjeta de crédito no sea robada por delincuentes; sin pensarlo dos veces y porque usted confía en la tienda en línea, envía no sólo la información de su tarjeta de crédito sino también su dirección postal y número de teléfono; unos días después, recibe una llamada de la compañía de su tarjeta de crédito diciéndole que su tarjeta de crédito ha sido robada y utilizada para compras fraudulentas de miles de dólares.
                figure
                  img(src='@/assets/curso/tema1/img33.png')   

              div.px-2(numero="4" titulo="Ayuda")                
                p.mb-3 Los humanos quieren confiar y ayudarse unos a otros. Después de investigar una empresa, los ciberdelincuentes apuntan a dos o tres empleados de la empresa con un correo electrónico que parece provenir del director de la persona a la que apuntan, el correo electrónico les pide que le envíen al gerente la contraseña de la base de datos de contabilidad, haciendo hincapié en que el gerente la necesita para asegurarse de que todo el mundo reciba el pago a tiempo, el tono del correo electrónico es urgente, engañando a las víctimas en la creencia de que están ayudando a su gerente actuando rápidamente.
                figure
                  img(src='@/assets/curso/tema1/img34.png')   
              div.px-2(numero="5" titulo="Curiosidad")                
                p.mb-3 Los ciberdelincuentes prestan atención a los eventos que captan mucha cobertura de noticias y luego se aprovechan de la curiosidad humana para engañar a las víctimas de la ingeniería social para que actúen. Por ejemplo, después del segundo accidente de avión del <em>Boeing MAX8</em>, los ciberdelincuentes enviaron correos electrónicos con archivos adjuntos que decían incluir datos filtrados sobre el accidente; en realidad, el archivo adjunto instaló una versión de la <em>RAT</em> del gusano en la computadora de la víctima.
                figure
                  img(src='@/assets/curso/tema1/img35.png')   
              div.px-2(numero="6" titulo="<em>Dumpster diving</em> (Buceo en el basurero)")                
                p.mb-3 "Bucear en los basureros" significa buscar en la basura información útil, la basura puede estar en un contenedor público o en un área restringida que requiera una entrada no autorizada. El “buceo en los basureros” depende de una debilidad humana y la falta de conocimientos sobre seguridad. Se pueden encontrar muchas cosas en los basureros (por ejemplo, <em>CD</em>, <em>DVD</em>, discos duros, directorios de empresas, etc.). 
                figure
                  img(src='@/assets/curso/tema1/img36.png')   
          p.mb-0 Probablemente el ejemplo más famoso de buceo en contenedores fue realizado por Jerry Schneider en el sur de California. Mientras estaba en la escuela secundaria, en 1968, Jerry encontró documentación relativa al sistema automatizado de pedido y entrega de equipos de <em>Pacific Telephone</em> que se utilizaba para pedir equipos. Jerry acumuló cientos de miles de dólares en equipos telefónicos y estableció <em>Creative Systems Enterprises</em> para venderlos; parte de ellos se vendió a <em>Pacific Telephone</em>. Jerry fue arrestado en 1972 y fundó una empresa de seguridad en 1973 que dejó en 1977.

    p.mb-3 <b>Ataques basados en computadores:</b>
    p.mb-4 En los ataques más populares de ingeniería social por computadores, los ciberdelincuentes aprovechan mucho la red <em>Internet</em> para ejecutarlos y que las víctimas puedan caer en las trampas y engaños que estos ponen, ya que en el mundo digital de hoy es mucho más fácil acceder por estos medios. A continuación, se relacionan algunos de los ataques.
    
    .row.fondo7-tema1.justify-content-center.align-items-center.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img37.png')   
      .col-lg-8
        div.mb-4
          img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
          p.mb-0(style="display:inline") <b>Cartas engañosas:</b> estos son correos electrónicos falsos, que envían advertencias sobre <em>malware</em>, virus y gusanos, que causan daños a los ordenadores.
        div.mb-4
          img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
          p.mb-0(style="display:inline") <b>Cartas en cadena:</b> pidiendo a la gente que reenvíe correos electrónicos o mensajes por dinero.
        div.mb-4
          img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
          p.mb-0(style="display:inline") <b>Mensajes de <em>spam</em>:</b> son correos electrónicos no deseados e irrelevantes, que intentan reunir información sobre los usuarios.
        div.mb-4
          img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
          p.mb-0(style="display:inline") <b>Mensajeros de <em>chat</em> instantáneo:</b> recopilar información personal de un solo usuario chateando con ellos.
        div.mb-0
          img.me-1(style="width: 12px; height:11px; display:inline" src="@/assets/curso/tema1/img38.svg")  
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-5 Otros métodos utilizados son las ventanas emergentes o llamados comúnmente como <em>popups</em>; engañan a los usuarios para que hagan clic en un hipervínculo que los redirige a la página <em>web</em> de un atacante, pidiéndoles que den su información personal o que descarguen <em>software</em> que podría tener virus adjuntos en el <em>backend</em>; revíselos a continuación.
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 6.
          span Otros métodos.
        figure.mb-0
          img(src="@/assets/curso/tema1/img39.svg")

    Separador


    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3  Riesgos de suplantación (redes sociales)

    p.mb-4 No importa cuán seguro sea un sistema, siempre hay una forma de entrar; los piratas informáticos e ingenieros sociales malintencionados se dirigen a la parte más débil de la infraestructura, la gente, que suele ser la más fácil de manipular y engañar. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-5 La suplantación de identidad es una de las diversas herramientas de ingeniería social que se utilizan para acceder a un sistema o red, con el fin de cometer fraude, espionaje industrial o robo de identidad. La suplantación de identidad se diferencia de otras formas de ingeniería social porque se produce en persona, en lugar de por teléfono o por correo electrónico.
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 7.
          span El ingeniero social.
        figure.mb-0
          img(src="@/assets/curso/tema1/img40.svg")

    .fondo8-tema1.p-0.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .cajon.color-acento-contenido.p-4
            p.mb-0.px-3 La suplantación de identidad requiere mucha preparación, por lo que ocurre con menos frecuencia que otras formas de ingeniería social. Los ingenieros sociales prefieren el enfoque más anónimo del teléfono o el correo electrónico a aparecer en persona; sin embargo, si se hace bien, nadie sabe nunca que el imitador estuvo allí; para la gente con la que hablaban, eran solo otro individuo en un flujo continuo, aunque quizás un poco más agradable que el gruñón común y corriente.

      .row.justify-content-start.align-items-center.mb-4
        .col-lg-1
        .col-lg-4
          img(src="@/assets/curso/tema1/img42.svg")
      
      p.mb-4.text-center Algunos de los papeles comunes que se pueden desempeñar en los ataques de suplantación de identidad son: 

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          figure.mb-5
            img(src="@/assets/curso/tema1/img43.svg")
          
          p.mb-5 Estos trucos funcionan porque todos interactúan regularmente con personas que no conocen. Es la naturaleza humana confiar en las credenciales - una placa o un uniforme - pero pueden ser falsificadas. Se confía en los uniformes, aunque se sabe que cualquiera puede usarlos y cuando se visita un sitio <em>web</em>, por ejemplo, se usa la apariencia profesional de la página para juzgar si es realmente legítima o no, sin importar que cualquiera pueda cortar y pegar gráficos de la misma manera. Tenemos la tendencia a confiar automáticamente en alguien con autoridad.

          p.mb-5.text-center <b>Algunas funciones comunes de ingeniería social son:</b>

          div.slider-espcial.d-flex.justify-content-center.align-items-center.px-3.mb-5
            .row.d-flex.justify-content-center.align-items-center.w-100
              .col-lg-1.indicador__container
                img(src="@/assets/curso/tema1/img58.svg", v-on:click="anterior" @mouseover="mostrarIndicador = false")
                .indicador--click(v-if="mostrarIndicador")
              .col-lg-10
                p.mb-0.text-center(v-if="espacial1==1", data-aos="slide-left") Posar como un compañero de trabajo.
                p.mb-0.text-center(v-if="espacial1==2", data-aos="slide-left") Un empleado de un proveedor o una empresa asociada, o un auditor.
                p.mb-0.text-center(v-if="espacial1==3", data-aos="slide-left") Como nuevo empleado que solicita ayuda.
                p.mb-0.text-center(v-if="espacial1==4", data-aos="slide-left") Fingir ser de una oficina remota y pedir acceso al correo electrónico localmente.
                p.mb-0.text-center(v-if="espacial1==5", data-aos="slide-left") Como alguien con autoridad.
                p.mb-0.text-center(v-if="espacial1==6", data-aos="slide-left") Un fabricante de sistemas que ofrece una actualización o un parche del sistema.
              .col-lg-1
                img(src="@/assets/curso/tema1/img59.svg" v-on:click="siguiente" )
                
            

          p.mb-0 <b>Los imitadores hacen sus deberes:</b> la suplantación funciona mejor cuando el ingeniero social da una actuación convincente, completa con la jerga técnica adecuada u otra información privilegiada. Los imitadores hacen sus deberes, vienen armados con:

    .row.justify-content-center.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/img44.png")
      .col-lg-6
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Un uniforme.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Una placa de identificación.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Una tarjeta de negocios falsa o falsificada.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Información privilegiada.
          li 
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 Nombres y detalles sobre los empleados.
          
    p.mb-5.text-center En el siguiente gráfico, podrá observar el riesgo de las redes sociales en las redes corporativas:
    
    .row.justify-content-center.align-items-center
      .col-lg-10        
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 8.
          span Riesgo de las redes sociales en las redes corporativas.
        figure.mb-0
          img(src="@/assets/curso/tema1/img45.svg")
    
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4  Ataques y riesgos (vulnerabilidades)

    p.mb-4 Una amenaza interna es un riesgo para la seguridad que se origina dentro de la organización objetivo. Suele consistir en que un empleado o socio comercial actual o anterior tenga acceso a información confidencial o a cuentas privilegiadas dentro de la red de una organización, y que haga un uso indebido de ese acceso.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10                
        figure.mb-4
          img(src="@/assets/curso/tema1/img46.svg")

        p.mb-4 Las medidas de seguridad tradicionales tienden a centrarse en las amenazas externas y no siempre son capaces de identificar una amenaza que emana del interior de la organización.
        p.mb-0 Los tipos de amenazas internas incluyen:

    .row.fondo7-tema1.justify-content-start.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img48.png')   
      .col-lg-7.py-4
        p.mb-4 ● <b>Información privilegiada maliciosa:</b> también conocida como <em>Turncloak</em>, alguien que maliciosa e intencionalmente abusa de las credenciales legítimas, típicamente para robar información para obtener incentivos financieros o personales. Por ejemplo, un individuo que guarda rencor a un antiguo empleador, o un empleado oportunista que vende información secreta a un competidor. Los <em>turncloaks </em>tienen una ventaja sobre otros atacantes, porque están familiarizados con las políticas y procedimientos de seguridad de una organización, así como con sus vulnerabilidades.
        p.mb-4 ●<b> Descuidado desde dentro:</b> un peón inocente que, sin saberlo, expone el sistema a amenazas externas. Este es el tipo más común de amenaza interna, resultante de errores, como dejar un dispositivo expuesto o ser víctima de una estafa. Por ejemplo, un empleado que no tiene intención de hacer daño puede hacer clic en un enlace inseguro, infectando el sistema con <em>malware</em>.
        p.mb-0 ● <b>Un topo:</b> un impostor, que es técnicamente un extraño, pero que ha logrado obtener acceso interno a una red privilegiada. Se trata de alguien de fuera de la organización que se hace pasar por empleado o socio.
       
    .row.justify-content-start.align-items-center.mb-4      
      .col-lg-4
        img(src="@/assets/curso/tema1/img49.svg")

    p.mb-4 Puede tomar las siguientes medidas para ayudar a reducir el riesgo de amenazas internas:
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10  
        .tiempo1.mb-5
          LineaTiempoD.color-secundario
            div.px-2(numero="1" titulo="Proteger los activos críticos")     
              p.mb-4.pe-5 Estos pueden ser físicos o lógicos, incluyendo sistemas, tecnología, instalaciones y personas. La propiedad intelectual, incluidos los datos de los clientes para los proveedores, el <em>software</em> propietario, los esquemas y los procesos de fabricación internos también son activos críticos. Es necesario formar una comprensión integral de sus activos críticos.
              figure.mb-4
                img(src='@/assets/curso/tema1/img60.png')   
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-7.py-2(style="background-color: white")
                  p.mb-0.text-center Haga preguntas como:
                  p.mb-0.text-center <b>¿Qué activos críticos poseemos?</b> 
                  p.mb-0.text-center <b>¿Podemos priorizar nuestros activos?</b>  
                  p.mb-0.text-center <b>¿Qué entendemos sobre el estado actual de cada activo?</b> 

            div.px-2(numero="2" titulo="Cumplir las políticas")
              p.mb-4.pe-5 Haga cumplir las políticas. Documente claramente las políticas de la organización para que pueda hacerlas cumplir y evitar malentendidos, todas las personas de la organización deben estar familiarizadas con los procedimientos de seguridad y deben comprender sus derechos en relación con la propiedad intelectual (P.I.), para no compartir el contenido privilegiado que han creado.
              figure.mb-4
                img(src='@/assets/curso/tema1/img61.png')   
            div.px-2(numero="3" titulo="Aumentar la visibilidad")
              p.mb-4.pe-5 Despliegue soluciones para hacer un seguimiento de las acciones de los empleados y correlacionar la información de múltiples fuentes de datos.
              figure.mb-4
                img(src='@/assets/curso/tema1/img62.png')   
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-8.py-3.px-4(style="background-color: white")
                  p.mb-0.text-center Por ejemplo, puede utilizar la tecnología de engaño para atraer a un infiltrado o impostor malintencionado y obtener visibilidad de sus acciones.                  
            div.px-2(numero="4" titulo="Promover cambios culturales")
              p.mb-4.pe-5 Para combatir la negligencia y hacer frente a los impulsores del comportamiento malicioso, debe educar a sus empleados en relación con los problemas de seguridad y trabajar para mejorar la satisfacción de los empleados.
              figure.mb-4
                img(src='@/assets/curso/tema1/img63.png')   
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-8.py-3.px-4(style="background-color: white")
                  p.mb-0.text-center Garantizar la seguridad no sólo se trata de conocimientos, sino también de actitudes y creencias.

    .fondo9-tema1.pt-5.pb-0.px-0.mb-4          
      p.mt-3.mb-5 Las amenazas internas pueden ser más difíciles de identificar o prevenir que los ataques externos, y son invisibles para las soluciones de seguridad tradicionales, como los cortafuegos y los sistemas de detección de intrusos, que se centran en las amenazas externas. Si un atacante explota un inicio de sesión autorizado, los mecanismos de seguridad establecidos pueden no identificar el comportamiento anormal, además, los iniciados maliciosos pueden evitar más fácilmente la detección si están familiarizados con las medidas de seguridad de una organización. Se recomienda realizar lo siguiente:        
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          figure.mb-4
            img(src='@/assets/curso/tema1/img52.svg') 
      p.mb-5 Existen herramientas como las aplicaciones de aprendizaje automático (ML) que ayudan a analizar el flujo de datos y a priorizar las alertas más relevantes. Se pueden utilizar herramientas digitales forenses y analíticas, como <em>User and Event Behavior Analytics</em> (UEBA), para detectar, analizar y alertar al equipo de seguridad sobre cualquier posible amenaza interna; el análisis del comportamiento de los usuarios puede establecer una línea de base para la actividad normal de acceso a los datos, mientras que la supervisión de la actividad de la base de datos puede ayudar a identificar las violaciones de las políticas. A continuación, se pueden revisar en la tabla las tácticas y estrategias según el área de riesgo.
    
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
            h5 Tabla 1.
            span Áreas de riesgo, tácticas y estrategias.

          .tabla-b.color-acento-contenido                   
            table              
              tr.tabla-b__header
                th(style="border: 0px solid white") ÁREA DE RIESGO
                th(style="border: 0px solid white") TÁCTICA DE ATAQUE
                th(style="border: 0px solid white") ESTRATEGIA DE COMBATE
              tr
                td Teléfono (punto de ayuda)
                td Suplantación y persuasión.
                td Capacitar a los empleados los ayuda a no revelar contraseñas u otra información por teléfono.
              tr
                td Entrada del edificio
                td Acceso físico no autorizado.
                td Implementar fuertes medidas de seguridad y formación de los empleados y funcionarios de seguridad.
              tr
                td Oficina
                td <em>Shoulder surfing</em>.
                td No escribir las contraseñas con nadie más presente (o si tiene que hacerlo, hágalo rápidamente).
              tr
                td Teléfono (punto de ayuda)
                td La suplantación de llamadas al servicio técnico.
                td Asignar un <em>PIN</em> a todos los empleados de servicios de asistencia.
              tr
                td Oficina
                td Paseando por los pasillos en busca de la oficina abierta.
                td Escoltar a todos los visitantes.
              tr
                td Sala de correo
                td Inserción de notas falsificadas.
                td Bloquear y supervisar la sala de correo.
              tr
                td Sala de máquinas/ Armario telefónico
                td Intentar acceder, retirar los equipos y o adjuntar un analizador de protocolos para tomar los datos confidenciales.
                td Mantener <em>closets</em> telefónicos, salas de servidores, etc., bloqueados en todo momento y mantener el inventario actualizado de equipos.
              tr
                td Teléfono y <em>PBX</em>
                td Robar punto de acceso telefónico.
                td Controlar las llamadas internacionales y de larga distancia, llamadas de seguimiento, o denegar transferencias.

    p.mb-4 La mayoría de casos de abuso de información privilegiada se pueden atribuir a los individuos que son introvertidos, incapaces de lidiar con el estrés o conflicto y frustrados con su trabajo, las políticas de la oficina y la falta de respeto entre otros; los empleados disgustados pueden pasar secretos de la empresa y la propiedad intelectual a los competidores por beneficios propios.

  
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(style="font-size: 1em;")
          h5 Figura 9.
          span Secretos corporativos.
        figure
          img(src='@/assets/curso/tema1/img53.svg') 
        
    Separador

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5  <em>Pentesting</em>

    p.mb-5 Las pruebas de penetración de la ingeniería social se centran en las personas y los procesos y las vulnerabilidades asociadas a ellos, estas pruebas de penetración consisten típicamente en que un <em>hacker</em> ético lleva a cabo diferentes ataques de ingeniería social, como el <em>phishing</em>, las caídas de <em>USB</em>, o la suplantación de identidad que una persona podría enfrentar en el curso de su trabajo, el objetivo de esta prueba es identificar las debilidades de una persona, grupo de personas o proceso, e identificar las vulnerabilidades con un camino claro para remediarlas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.fondo10-tema1.p-0.pt-5        
        br
        br
        p.mb-0.mt-5.px-5.mb-4 Hay cuatro pasos principales para realizar una prueba de penetración de ingeniería social que incluyen la planificación y el alcance de la prueba, la identificación del vector de ataque, los intentos de penetración y la presentación de informes.        

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10  
        .tiempo1.mb-5
          LineaTiempoD.color-secundario
            .row.px-2.py-4(numero="1" titulo="Paso 1: <font style='font-weight: normal;'>Planificación y alcance de la prueba</font>")             
              .col-lg-4
                figure.mb-0
                  img(src='@/assets/curso/tema1/img55.png')
              .col-lg-8
                p.mb-0 Este paso es el más importante durante la prueba de penetración. Durante este paso, identificará lo que está en el alcance y cómo se realizará la prueba; esto normalmente requiere una reunión entre la dirección y el personal que realiza la prueba. Una cosa que hay que tener en cuenta es que se quiere mantener el número de personas involucradas en esta reunión al mínimo, para evitar el número de personas que saben de la prueba.
            
            .row.px-2.py-4(numero="2" titulo="Paso 2: <font style='font-weight: normal;'>Identificación del vector de ataque</font>")
              .col-lg-4
                figure.mb-0
                  img(src='@/assets/curso/tema1/img56.png')
              .col-lg-8
                p.mb-0 Después de que haya hecho la prueba del bolígrafo, debe tener un contrato claramente definido sobre qué y a quién se puede hacer la prueba; este paso de la prueba del bolígrafo implicará que el probador identifique todos los métodos que utilizará durante la prueba.

            div.px-2(numero="3" titulo="Paso 3: <font style='font-weight: normal;'>Intentos de penetración</font>")
              p.mb-4 Durante este paso de la prueba del bolígrafo, el probador tomará todos los vectores de ataque listados en el paso anterior y ejecutará esas pruebas; la documentación es clave en este paso, ya que estas pruebas se convertirán más tarde en pruebas de apoyo para el informe.
              p.mb-3 El tipo de pruebas que debe recoger es:
              div.px-5.py-4(style="background-color: white")
                p.mb-2 ●  <b>Llamadas telefónicas grabadas:</b> estas llamadas telefónicas son importantes, ya que no hay otro método para documentar que este ataque ocurrió, así como para mostrar su resultado.
                p.mb-2 ●  <b>Correos electrónicos de los ataques de <em>phishing</em>:</b> estos correos electrónicos son importantes porque pueden mostrar hasta dónde un usuario permitió el ataque antes de atraparlo. En algunos casos, los usuarios no se dan cuenta hasta después de haber entregado información sensible.
                p.mb-0 ●  <b>Documentación encontrada durante el <em>dumpster diving</em>:</b> este tipo de documentación debe incluir escaneos de los documentos encontrados e incluso imágenes del lugar donde se encontraron los documentos, si es apropiado. Junto con las pruebas, el examinador debe incluir la hora de inicio y final de cada prueba, el nombre de la persona que realiza la prueba y el nombre del empleado o empleados que están siendo examinados.
            
            .row.px-2.py-4(numero="4" titulo="Paso 4: <font style='font-weight: normal;'>Presentación de informes</font>")
              .col-lg-4
                figure.mb-0
                  img(src='@/assets/curso/tema1/img57.png')
              .col-lg-8
                p.mb-0 El paso de informe de una prueba de bolígrafo es donde se juntan todos los resultados. Mientras escribe el informe, recuerde quién es su público, en la mayoría de los casos, la audiencia es la alta dirección y su informe debe hablar con ellos. Asegúrese de abordar todas las preocupaciones discutidas al inicio de la prueba, así como todas las vulnerabilidades que encontró durante la prueba, en el informe, no solo debe mencionar las vulnerabilidades encontradas, sino que también debe proporcionar recomendaciones sobre cómo mitigar las vulnerabilidades.
    
    

</template>

<script>
export default {
  name: 'Tema1',
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
      if (this.espacial1 > 6) {
        this.espacial1 = 1
      }
    },
    anterior: function() {
      this.espacial1--
      if (this.espacial1 < 1) {
        this.espacial1 = 6
      }
    },
  },
}
</script>

<style lang="sass">
.tabs-a__tab
  background-color: #DCCEE3
</style>
