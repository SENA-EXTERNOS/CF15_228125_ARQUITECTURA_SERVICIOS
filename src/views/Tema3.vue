<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Instalación, configuración, hosting, dominio y FTP 
    p En este tema se plantearán las definiciones de hosting y dominio, estas son primordiales al momento de crear una web que sea frecuentada y visitada, y que, además, cumpla las condiciones para ser SEO (optimización en motores de búsqueda).
    br
    br
    .row.justify-content-center.mb-5
    
      .col-sm-7.col-xl-4.mb-5.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-fondo-tarjetas-animadas-tema3(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              figure
                img(data-aos="fade-down")(src="@/assets/curso/temas/imagen-tarjeta1-tema3.png", alt="alt").imagenes-tarjetas-animadas-tema3
            
            .tarjeta-slide__img.p-xl-5
              h3.color-texto-tarjetas-animadas-tema3.p-2 Hosting
              p.color-texto-tarjetas-animadas-tema3.p-2 es el espacio que se adquiere o alquila a un proveedor tecnológico para alojar el proyecto web que se está desarrollando y, en este espacio, se almacenará la información correspondiente al sitio web. Es necesario tener en cuenta varios aspectos al obtener un plan de hosting, como elegir el plan de almacenaje, tanto de memoria como de disco duro, el número de sitios, o la cantidad de sitios que pueda soportar el hosting. También, es necesario conocer de antemano el ancho de banda, los datos que soporta el servidor al mes por consumo de la web y la seguridad, siendo primordial, elegir planes que tengan certificados de seguridad como SSL (capa de puertos seguros), antivirus o <em>firewall</em>.
      
      .col-sm-7.col-xl-4.mb-5.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-fondo-tarjetas-animadas-tema3(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              figure
                img(data-aos="fade-down")(src="@/assets/curso/temas/imagen-tarjeta2-tema3.png", alt="alt").imagenes-tarjetas-animadas-tema3
            
            .tarjeta-slide__img.p-xl-5
              h3.color-texto-tarjetas-animadas-tema3.p-2 Dominio
              p.color-texto-tarjetas-animadas-tema3.p-2 es el nombre que se le da al sitio en internet, por ejemplo <em>www.misitioweb.com</em>. Crear un nombre no es sencillo, se debe realizar un estudio sobre nombres llamativos de acuerdo a la finalidad de la web, si el sitio es para una empresa, lo ideal es que tenga el mismo nombre, pero, si es personal, debe hacer referencia al nombre, ser recordable y que los buscadores puedan relacionarlo con los productos o servicios que ofrece. Es importante considerar las palabras claves y evitar números o guiones en el nombre, esto tiende a confundir a quienes navegan buscando sitios en internet. 



    
    //.row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tar_hover_01.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Reporte de ventas diarias 
              p.mb-0 Con este tipo de reportes, los gerentes podrán supervisar específicamente, la labor de cada vendedor y de esta manera, saber en qué les va bien y en cuáles actos hay que mejorar. Aquí también, va a encontrar si su fuerza de ventas está entendiendo sus estrategias y le sea más fácil incentivarlos a aumentar su productividad.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tar_hover_01.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Reporte de ventas semanal
              p.mb-0 Con estos reportes semanales, podrá encontrar las dificultades que pueda tener algún o algunos vendedores y evitar que se pierdan los clientes fijos. Reportar semanalmente, le permite tener un equipo de ventas fortalecido y bien direccionado, con las correcciones necesarias para lograr las metas de ventas propuestas.

    //Infografia punto caliente
    br
    
    .row.justify-content-center


      p En la actualidad existen gran variedad en los planes de <em>hosting</em> y es necesario tener presente adquirir el que mejor se adapte a las necesidades de la web que se va a construir según las expectativas del sitio, la cantidad de datos que maneje, o la complejidad del panel de control y configuración que tengan. En estos casos, algunos pueden resultar sencillos y otros bastante complejos.
      p Entre ellos se tienen:

      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/imagen-punto-caliente-tema3.png', alt='Texto que describa la imagen')
            //figcaption Leyenda de la imagen

        .tarjeta.tarjetas-punto-caliente-tema3.p-3(x="28%" y="87%" numero="1")
          //.h5.mb-2 titulo
          p Este tipo de <em>hosting</em> hace referencia a espacio de almacenaje de la web compartido con otros sitios, no se recomienda para sitios de mucho flujo e interacción o con usuarios concurrentes, ya que los recursos son limitados. Es recomendable para sitios pequeños sin tanta concurrencia.

        .tarjeta.tarjetas-punto-caliente-tema3.p-3(x="62%" y="88%" numero="2")
          //.h5.mb-2 titulo
          p Es recomendable para empresas que tengan un mayor flujo y concurrencia en las visitas del sitio, permite realizar configuraciones y personalizaciones adicionales con respecto al <em>hosting</em> compartido.

        .tarjeta.tarjetas-punto-caliente-tema3.p-3(x="96%" y="88%" numero="3")
          //.h5.mb-2 titulo
          p Recomendable para empresas de mayor nivel adquisitivo, con mucho flujo y tráfico de la web, se especializa en la gestión de datos a grandes rasgos.
  
    br
    br

    .row.justify-content-around.align-items-center

      #configuraciones
      .titulo-segundo.color-acento-contenido
        h2 3.1  Configuraciones

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(data-aos="zoom-out-right")(
          :style="{'background-image': `url(${require('@/assets/curso/temas/imagen-configuraciones-tema3.png')})`}"
        )
        .bloque-texto-mitad-color-tema1
          .bloque-texto-g__texto.p-4
            p.texto-interno-bloque-texto-mitad-color-tema1 Es así como la arquitectura orientada a servicios permite unificar varias funcionalidades para la solvencia de usuarios, empresas y procesos que definen la forma más simple para todos, al permitir disminución de costes toda vez que los servicios sean reutilizados, favoreciendo que las organizaciones y los grupos de desarrollo unifiquen aplicaciones creadas con tecnologías diversas y con funcionamiento operativo. Esta arquitectura disminuye costos por el aprovechamiento sistemático de los recursos utilizados en procesos diferentes como implementación, pruebas y puesta en marcha. Es en ese sentido que SOA, por sus siglas en inglés Service-Oriented Architectures, presenta grandes beneficios para el desarrollo de las aplicaciones como mantenimiento sencillo, escalabilidad fácil y mejorada, al ser servicios y no aplicaciones completas en un solo componente, confiabilidad e infraestructura heredada. 
      
    br
    br
    p #[strong Para configurar un <i>hosting</i>> por primera vez, es necesario seguir los siguientes pasos:]
    
    br
    br

    //Configuracion hosting
    .row.justify-content-around.align-items-center.color-fondo-configuracion-hosting
        
      
      
    
      .row.tarjetas-configuracion-hosting.tarjeta-configuracion-tema3
        
        .figura-camino-tar2-tema3
          .circulo1-camino-tema3
              span 1
        .col-7
          
          .texto-izquierda-configuracion-hosting
            h4.p-2 Configuración
            p.p-2 Configurar los DNS (sistema de nombres de dominio) para que apunten al <em>hosting</em> que se está configurando, se debe apuntar el nombre del dominio, por ejemplo, www.mipagina.com, al hosting o espacio de almacenamiento. Esta información la entrega el proveedor de servicios.
              br
              br
              br
              br
        .col-5
          figure
            img(data-aos="zoom-in-down")(src="@/assets/curso/temas/imagen-configuracion-tema3.png").imagenes1-configuracion-hosting
    
      br
      .row.tarjetas-configuracion-hosting
        
        .figura-camino-tar3-tema3
          .circulo2-camino-tema3
            span 2

        .col-5
          figure
            img(data-aos="zoom-in-down")(src="@/assets/curso/temas/imagen-nombre-dominio.png").imagenes2-configuracion-hosting

        .col-7
          .texto-configuracion-hosting
            h4.p-2 Nombre del dominio
            p.p-2 Luego de tener las DNS, el siguiente paso es ingresar el nombre del dominio al panel de control de <em>hosting</em> que se está administrando, este pedirá la extensión del dominio, la ubicación de los archivos dentro del <em>hosting</em> y una contraseña.
            br
            br
        

      br
      .row.tarjetas-configuracion-hosting
        
        .figura-camino-tar4-tema3
          .circulo3-camino-tema3
            span 3

        .col-7
          .texto-izquierda-configuracion-hosting
            h4.p-2 cPanel
            p.p-2 En cPanel se puede visualizar el sistema de archivos para verificar que fue creado el directorio con el nombre del dominio indicado y su respectiva extensión, dentro de este directorio se crea una carpeta con el CMS WordPress o los archivos de la web. 
              | Los proveedores de hosting tienen aplicaciones predeterminadas que ayudan a realizar la configuración de manera más amigable y sencilla, instalando automáticamente la plataforma con la que se vaya a publicar el sitio web.
        
        .col-5
          figure
            img(data-aos="zoom-in-down")(src="@/assets/curso/temas/imagen-cpanel-tema3.png").imagenes3-configuracion-hosting
      
      br
      br
      .row.tarjetas4-configuracion-hosting
        
        .figura-camino-tar5-tema3
          .circulo4-camino-tema3
            span 4
        .col-5
          figure
            img(data-aos="zoom-in-down")(src="@/assets/curso/temas/imagen-url-tema3.png").imagenes4-configuracion-hosting
        
        .col-7
          .texto-configuracion-hosting
            h4.p-2 URL
            p.p-2 El siguiente paso es la URL completa que arroja desde la configuración de la página web, con sus respectivos accesos, para su posterior administración y edición.
              br
              br
              br
              br
              br
              br
      br
      .row.tarjetas-configuracion-hosting

        .figura-camino-tar6-tema3
          .circulo5-camino-tema3
            span 5
        .col-7
          .texto-izquierda-configuracion-hosting
            h4.p-2 Diseño
            p.p-2 Finalmente, se gestiona, como tal, el sitio con el diseño planeado con anterioridad, para su posterior publicación.
              br
              br
              br
              br
              br
              br
        
        .col-5
          figure
            img(data-aos="zoom-in-down")(src="@/assets/curso/temas/imagen-diseno-tema3.png").imagenes5-configuracion-hosting
 
    br
    br
    br

    .row.justify-content-around.align-items-center

      #gestores-de-contenidos
      .titulo-segundo.color-acento-contenido
        h2 3.2  Gestores de contenidos

      .row.tarjeta1-gestores-contenido(data-aos="fade-up-right")
          .col-5
            figure
              img(src="@/assets/curso/temas/imagen1-gestores-contenidos-tema3.png")
          
          .col-7
            p.texto-tarjeta1-gestores-contenido En la actualidad, las empresas y compañías tienen la necesidad de contar con sitios web, no solo para mostrar su contenido, también para que los clientes conozcan su marca. Para este propósito, se debe contar con una imagen corporativa que esté encaminada hacia el área comercial, en ese sentido, existen herramientas como los CMS (<em>Content Management System</em>) o gestores de contenidos, que permiten crear y administrar portales webs de manera rápida y eficiente, bien sea una web informativa, una tienda, un blog o cualquier tipo de web. El gestor permite ahorrar tiempo y dinero con respecto a la creación de portales desde cero, porque no incurre en inversiones como compra de servidores, licencias, contratación de analistas o de diseñadores para la creación del portal.
    br
    br
    
    .row.justify-content-around.align-items-center


      .row
    
          .col-7
            p Un gestor de contenidos asiste en la creación de sitios web, permitiendo, de esa manera, la gestión, organización y administración, fácil y eficiente, de la aplicación web que se esté construyendo. Los CMS permiten a personas sin experiencia y sin conocimientos avanzados en diseño o desarrollo, realizar foros, blogs, páginas web, comercios electrónicos u otros aplicativos a partir de plantillas personalizables y <em>plugins</em> que aumentan capacidades, características y funcionalidades. Con pocas horas de trabajo, se puede tener una web lista con opciones de mejora, actualización constante y con herramientas como texto, videos, imágenes y diseño en general. Así mismo, los CMS brindan ventajas para SEO y posicionamiento en Google, permiten el trabajo colaborativo <em>online</em> y pueden ser gestionados por usuarios con roles distintos que comparten experiencias, diseños y enfoques.
            .cajon.color-acento-contenido.p-4
              p ¿Sabía que los clustering ayudan a organizar y estructurar información que es objeto de estudio para un fin determinado? En el caso de aplicar una promoción en un supermercado, por ejemplo, se cuenta con una base de datos de clientes agrupados por gustos, preferencias, ubicación, periodicidad de compras, etc., por lo que enviar una promoción para cada cliente resulta no solo complejo, sino dispendioso por el uso de una gran cantidad de tiempo. Con clustering, una posible forma sería enviar la promoción a cada cliente de acuerdo con uno o varios criterios seleccionados. 
          .col-5
            figure
              img(data-aos="fade-down-right")(src="@/assets/curso/temas/imagen2-gestores-contenidos.png").imagen2-gestores-contenido

    br
    br

    .row.justify-content-around.align-items-center
      
      TabsC.color-primario
        .py-3.py-md-4(titulo="WordPress")
          .row
            .col-md-6
              figure
                img(data-aos="fade-up")(src='@/assets/curso/temas/imagen-wordpress-tema3.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen
            .col-md-6.mb-4.mb-md-0
              //h4 Celebrate your failures 1
              p.texto-tabs-horizontales-tema1 Es un CMS de código abierto muy utilizado gracias a su versatilidad y fácil uso, permite la creación de sitios web de forma rápida, además, incluye variedad de herramientas para gestionar los sitios y tiene un panel de configuración para administrar todas las opciones como complementos, temas, páginas, etc. Los editores de contenido le permiten añadir entradas, texto y páginas nuevas, al igual que la configuración y cambio de temas, todo esto es posible configurarlo y adaptarlo a la medida de las necesidades de la web que se requiera construir.

        .py-3.py-md-4(titulo="Magento")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(data-aos="fade-up")(src='@/assets/curso/temas/imagen-magento-tema3.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen
            .col-md-6
              //h4 Celebrate your failures 2
              p.texto-tabs-horizontales-tema1 Esta herramienta está enfocada en sitios web para <em>e-commerce</em>, su panel de configuración y diseño de páginas tiene los elementos para opciones comerciales, además, sus temas están dirigidos al comercio electrónico, contando con todas las funcionalidades adecuadas para gestionar todo lo referente al área de ventas o área comercial. Magento es de código abierto y permite configurar diversas tiendas desde un solo panel de configuración, adecuar distintas opciones de pago o envío de dinero, gestionar clientes y administrar inventarios, incluso, cuenta con módulos para realizar infinidades de opciones dentro del sitio que se construye.
        
        .py-3.py-md-4(titulo="Drupal")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(data-aos="fade-up")(src='@/assets/curso/temas/imagen-drupal-tema3.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen
            .col-md-6
              //h4 Celebrate your failures 2
              p.texto-tabs-horizontales-tema1 Permite crear sitios de alta calidad y envergadura, es completo y permite la interacción de múltiples usuarios simultáneos y un amplio tráfico. Esta herramienta está enfocada a desarrolladores y diseñadores de mayor experiencia, con conocimientos avanzados. 
      br
      br              
      separador
    
    .row.justify-content-around.align-items-center

      #ftp
      .titulo-segundo.color-acento-contenido
        h2 3.3  FTP

      .row.fondo-tarjeta1-tema3-ftp
          .col-5
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/imagen1-ftp-tema3.png")
          
          .col-7
            br
            .cajon.color-acento-contenido.p-4
              p Para finalizar, el protocolo de transferencia de archivos, como su nombre lo indica, se usa para enviar y recibir archivos a través de una red de internet. Usualmente, un protocolo es de tipo cliente-servidor, donde el cliente es quien recibe y el servidor quien envía los datos y trabaja a partir de estándares y reglas que se deben regir al utilizar esos traslados de información. 
            br
            br
            p La distribución de archivos se hace de forma directa, del servidor al cliente, a través de credenciales que conectan los equipos. La información compartida puede ser de cualquier tipo y tamaño, el FTP no tiene restricciones para el proceso de envío o de recepción, lo que lo hace un protocolo vulnerable a la seguridad, razón por la cual,  está siendo desplazado por alternativas como la nube. Sin embargo, ha sido de gran ayuda desde su aparición para distribuir información entre usuarios conectados en una red de internet que permita conexiones entre ordenadores que puedan compartir datos. Existen aplicaciones o clientes creados para este fin como FileZilla, Winscp, Cyberduck, Core FTP LE, entre otros, que permiten hacer la gestión de envío y recepción de archivos.
    

    br
    br

    .row.justify-content-around.align-items-center

      .row
          .col-5
            //Fade up hace que la pagina no responda bien por ser el ultimo elemento
            figure
              img(data-aos="fade-down" )(src="@/assets/curso/temas/imagen2-ftp-tema3.png")
          
          .col-7
            p A partir de las inseguridades que arraigan los FTP, dado que la información no se transmite de forma cifrada, se ha optado por otras soluciones que brinden mayor confianza en el uso de este protocolo, como <em>Secure Shell</em> o intérprete de órdenes seguro. Se usa SFTP (protocolo de transferencia de archivos SSH) para transferir archivos de manera segura con información encriptada a través de FTP. SFTP usa el puerto 22 para conexión, distinto al usado para conexiones FTP normales, el puerto 21.
            p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello, diríjase al menú principal, allí encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados y el material complementario.

          
          


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
