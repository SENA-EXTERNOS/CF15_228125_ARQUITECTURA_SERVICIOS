<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Instalación, configuración, #[em hosting], dominio y FTP
   
    p En este tema se plantearán las definiciones de #[em hosting] y dominio, las cuales son primordiales al momento de crear una web que sea visitada con frecuencia y que, además, cumpla con las condiciones para ser SEO (optimización para motores de búsqueda).
    P.mb-4 Antes de continuar, se definirá cada una de ellas.

    .row.justify-content-center.mb-5
      .col-md-6
        .tarjeta.tarjeta-slide.arriba.color-secundario.tema3(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/imagen-tarjeta1-tema3.png')})`}")
            .tarjeta-slide__contenido.text-white.p-4.p-xl-5
              h3 #[em Hosting]
              p.mb-0 Es el espacio que se adquiere o alquila a un proveedor tecnológico para alojar el proyecto web que se está desarrollando y, en este espacio, se almacenará la información correspondiente al sitio web. Es necesario tener en cuenta varios aspectos al obtener un plan de hosting, como elegir el plan de almacenaje, tanto de memoria como de disco duro, el número de sitios, o la cantidad de sitios que pueda soportar el hosting. También, es necesario conocer de antemano el ancho de banda, los datos que soporta el servidor al mes por consumo de la web y la seguridad, siendo primordial, elegir planes que tengan certificados de seguridad como SSL (capa de puertos seguros), antivirus o <em>firewall</em>.

      .col-md-6
        .tarjeta.tarjeta-slide.arriba.color-secundario.tema3(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img.bg-g(:style="{'background-image': `url(${require('@/assets/curso/temas/imagen-tarjeta2-tema3.png')})`}")
            .tarjeta-slide__contenido.text-white.p-4.p-xl-5
              h3 Dominio
              p.mb-0 Es el nombre que se le da al sitio en internet, por ejemplo <em>www.misitioweb.com</em>. Crear un nombre no es sencillo, se debe realizar un estudio sobre nombres llamativos de acuerdo a la finalidad de la web, si el sitio es para una empresa, lo ideal es que tenga el mismo nombre, pero, si es personal, debe hacer referencia al nombre, ser recordable y que los buscadores puedan relacionarlo con los productos o servicios que ofrece. Es importante considerar las palabras claves y evitar números o guiones en el nombre, esto tiende a confundir a quienes navegan buscando sitios en internet.
    


    p En la actualidad existen gran variedad en los planes de <em>hosting</em> y es necesario tener presente adquirir el que mejor se adapte a las necesidades de la web que se va a construir según las expectativas del sitio, la cantidad de datos que maneje, o la complejidad del panel de control y configuración que tengan. En estos casos, algunos pueden resultar sencillos y otros bastante complejos.
    p.mb-4 Entre ellos se tienen:

    .row.justify-content-center.mb-4
      .col-md-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/imagen-punto-caliente2-tema3.svg', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen

          .tarjeta.tarjetas-punto-caliente-tema3.p-3(x="28%" y="87%" numero="+")
            //.h5.mb-2 titulo
            p Este tipo de <em>hosting</em> hace referencia a espacio de almacenaje de la web compartido con otros sitios, no se recomienda para sitios de mucho flujo e interacción o con usuarios concurrentes, ya que los recursos son limitados. Es recomendable para sitios pequeños sin tanta concurrencia.

          .tarjeta.tarjetas-punto-caliente-tema3.p-3(x="62%" y="88%" numero="+")
            //.h5.mb-2 titulo
            p Es recomendable para empresas que tengan un mayor flujo y concurrencia en las visitas del sitio, permite realizar configuraciones y personalizaciones adicionales con respecto al <em>hosting</em> compartido.

          .tarjeta.tarjetas-punto-caliente-tema3.p-3(x="96%" y="88%" numero="+")
            //.h5.mb-2 titulo
            p Recomendable para empresas de mayor nivel adquisitivo, con mucho flujo y tráfico de la web, se especializa en la gestión de datos a grandes rasgos.
  



    h3.mb-4 Configuraciones

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos="zoom-out-right")(
        :style="{'background-image': `url(${require('@/assets/curso/temas/imagen-configuraciones-tema3.png')})`}"
      )
      .bloque-texto-mitad-color-tema1
        .bloque-texto-g__texto.p-4
          p.texto-interno-bloque-texto-mitad-color-tema1 Es fundamental configurar un <em>hosting</em> para poder almacenar el contenido de la web que se haya diseñado, dependiendo, claro está, del plan elegido y la necesidad o cantidad de usuarios que se prevé para el sitio web porque, en el caso de muchas o miles de visitas, se hace necesario tener un servidor dedicado. Sin embargo, para configurar un <em>hosting</em>, usualmente se cuenta con una plataforma de ayuda, el cPanel, que provee opciones fáciles de configurar como correo electrónico, sistema de archivos editables, aplicaciones, configuración de cuentas de correo con el nombre del dominio adquirido, entre otras funciones.
      

    p.mb-4 <b> Para configurar un <i>hosting</i> por primera vez, es necesario seguir los siguientes pasos: </b>

    .row.justify-content-center.fondo-pasos.py-2.mb-5
      .col-md-10
        PasosA.color-primario(tipo="n")
          .row.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 Configuración
              p Configurar los DNS (sistema de nombres de dominio) para que apunten al <em>hosting</em> que se está configurando, se debe apuntar el nombre del dominio, por ejemplo, www.mipagina.com, al hosting o espacio de almacenamiento. Esta información la entrega el proveedor de servicios.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/imagen-configuracion-tema3.png', alt='Imagen decorativa')
          .row.align-items-center
            .col-md-5
              figure
                img(src='@/assets/curso/temas/imagen-nombre-dominio.png', alt='Imagen decorativa')
            .col-md-7.mb-4.mb-md-0
              h4 Nombre del dominio
              p Luego de tener las DNS, el siguiente paso es ingresar el nombre del dominio al panel de control de <em>hosting</em> que se está administrando, este pedirá la extensión del dominio, la ubicación de los archivos dentro del <em>hosting</em> y una contraseña.
          .row.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 cPanel
              p En cPanel se puede visualizar el sistema de archivos para verificar que fue creado el directorio con el nombre del dominio indicado y su respectiva extensión, dentro de este directorio se crea una carpeta con el CMS WordPress o los archivos de la web. 
                | Los proveedores de <em>hosting</em> tienen aplicaciones predeterminadas que ayudan a realizar la configuración de manera más amigable y sencilla, instalando automáticamente la plataforma con la que se vaya a publicar el sitio web.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/imagen-cpanel-tema3.png', alt='Imagen decorativa')
          .row.align-items-center
            .col-md-5
              figure
                img(src='@/assets/curso/temas/imagen-url-tema3.png', alt='Imagen decorativa')
            .col-md-7.mb-4.mb-md-0
              h4 URL
              p El siguiente paso es la URL completa que arroja desde la configuración de la página web, con sus respectivos accesos, para su posterior administración y edición. 
          .row.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 Diseño
              p Finalmente, se gestiona, como tal, el sitio con el diseño planeado con anterioridad, para su posterior publicación. 
            .col-md-5
              figure
                img(src='@/assets/curso/temas/imagen-diseno-tema3.png', alt='Imagen decorativa')    



    h3.mb-3 Gestores de contenidos

    .row.bg3.align-items-center.border-tema3.mb-5.py-2(data-aos="fade-up-right")
      .col-5
        figure
          img(src="@/assets/curso/temas/imagen1-gestores-contenidos-tema3.png") 
      .col-7.pe-md-5
        p.mb-0 En la actualidad, las empresas y compañías tienen la necesidad de contar con sitios web, no solo para mostrar su contenido, también para que los clientes conozcan su marca. Para este propósito, se debe contar con una imagen corporativa que esté encaminada hacia el área comercial, en ese sentido, existen herramientas como los CMS (<em>Content Management System</em>) o gestores de contenidos, que permiten crear y administrar portales webs de manera rápida y eficiente, bien sea una web informativa, una tienda, un blog o cualquier tipo de web. El gestor permite ahorrar tiempo y dinero con respecto a la creación de portales desde cero, porque no incurre en inversiones como compra de servidores, licencias, contratación de analistas o de diseñadores para la creación del portal.


    .row.mb-5
      .col-7
        p Un gestor de contenidos asiste en la creación de sitios web, permitiendo, de esa manera, la gestión, organización y administración, fácil y eficiente, de la aplicación web que se esté construyendo. Los CMS permiten a personas sin experiencia y sin conocimientos avanzados en diseño o desarrollo, realizar foros, blogs, páginas web, comercios electrónicos u otros aplicativos a partir de plantillas personalizables y <em>plugins</em> que aumentan capacidades, características y funcionalidades. Con pocas horas de trabajo, se puede tener una web lista con opciones de mejora, actualización constante y con herramientas como texto, videos, imágenes y diseño en general. Así mismo, los CMS brindan ventajas para SEO y posicionamiento en Google, permiten el trabajo colaborativo <em>online</em> y pueden ser gestionados por usuarios con roles distintos que comparten experiencias, diseños y enfoques.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Existe gran variedad de CMS con licencia GPL o de libre distribución y uso que pueden ser descargados y utilizados para gestionar contenido. Los siguientes CMS son los más empleados y demandados en la actualidad, cuentan con una amplia trayectoria, comunidad y <em>plugins</em> que permiten mayores funciones:
      .col-5
        figure
          img(data-aos="fade-down-right")(src="@/assets/curso/temas/imagen2-gestores-contenidos.png").imagen2-gestores-contenido



      
    TabsC.color-primario.mb-5
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


    


    h3  FTP

    .row.fondo-tarjeta1-tema3-ftp.align-items-center.mb-5.py-4
      .col-md-3.z-index9
        figure
          img(data-aos="fade-down")(src="@/assets/curso/temas/imagen1-ftp-tema3.png")
      .col-md-9.z-index9
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Para finalizar, el protocolo de transferencia de archivos, como su nombre lo indica, se usa para enviar y recibir archivos a través de una red de internet. Usualmente, un protocolo es de tipo cliente-servidor, donde el cliente es quien recibe y el servidor quien envía los datos y trabaja a partir de estándares y reglas que se deben regir al utilizar esos traslados de información. 
        p La distribución de archivos se hace de forma directa, del servidor al cliente, a través de credenciales que conectan los equipos. La información compartida puede ser de cualquier tipo y tamaño, el FTP no tiene restricciones para el proceso de envío o de recepción, lo que lo hace un protocolo vulnerable a la seguridad, razón por la cual,  está siendo desplazado por alternativas como la nube. Sin embargo, ha sido de gran ayuda desde su aparición para distribuir información entre usuarios conectados en una red de internet que permita conexiones entre ordenadores que puedan compartir datos. Existen aplicaciones o clientes creados para este fin como FileZilla, Winscp, Cyberduck, Core FTP LE, entre otros, que permiten hacer la gestión de envío y recepción de archivos.
    

    .row.justify-content-around.align-items-center
      .col-md-5
        figure
          img(data-aos="fade-down" )(src="@/assets/curso/temas/imagen2-ftp-tema3.png")
      
      .col-md-7
        p A partir de las inseguridades que arraigan los FTP, dado que la información no se transmite de forma cifrada, se ha optado por otras soluciones que brinden mayor confianza en el uso de este protocolo, como <em>Secure Shell</em> o intérprete de órdenes seguro. Se usa SFTP (protocolo de transferencia de archivos SSH) para transferir archivos de manera segura con información encriptada a través de FTP. SFTP usa el puerto 22 para conexión, distinto al usado para conexiones FTP normales, el puerto 21.
        p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

          
          


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
