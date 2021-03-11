<template lang="pug">
    section.usuario-container
        .button-flat(@click="showModal = true") 
          img(:src="iconIndice")
        modal(v-show="showModal")
          ol.lists
            li
              a(href="#introduccion" @click="showModal = false") Introduccion
            li
              a(href="#objetivo" @click="showModal = false") Objetivo
            li
              a(href="#convenciones" @click="showModal = false") Convenciones
            li
              a(href="#especificacion" @click="showModal = false") Especificaciones técnicas
            li
              a(href="#paso" @click="showModal = false") Paso a paso
            li
              a(href="#operacion" @click="showModal = false") Operación del sistema
            li
              a(href="#recomendaciones" @click="showModal = false") Recomendaciones
            li
              a(href="#referencias" @click="showModal = false") Referencias
            li
              a(href="#glosario" @click="showModal = false") Glosario
            li
              router-link(to="/") Ir al Indice

        h1.titulo Manual de Usuario

        h3.subtitulo#introduccion Introducción
        p Todo sistema de información debe tener una guía para que las personas puedan hacer uso de él. 
         | Debe ser una guía clara y concisa que aclare todas las dudas de las personas involucradas en el sistema de información.
        p Este manual pretende ser lo más claro y objetivo posible, de tal modo que el usuario que lo lea comprenda, de manera eficaz, el funcionamiento del sistema de información.
        
        h3.subtitulo#objetivo Objetivo del manual
        p Ilustrar de manera clara el funcionamiento del sistema de información.
        
        h3.subtitulo#convenciones Convenciones
        ul.lists
            li 
                span.negrita APK: 
                span Instalador del app listo para instalarse en el dispositivo Android.
            li 
                span.negrita APP: 
                span Programa para dispositivo Android.
            li 
                span.negrita CSV: 
                span comma-separated values. Término que se refiere, a archivos de texto plano, que se almacena en forma de matriz, donde sus filas son separadas por medio del signo coma(,).
            li 
                span.negrita Explorador de archivos: 
                span Programa encargado de gestionar los archivos del dispositivo.
            li 
                span.negrita Inventario: 
                span Término que se aplica al conteo actual de los productos en un negocio.
            li 
                span.negrita Menú hamburguesa: 
                span Expresión que se refiere al ícono en la parte superior izquierda de la aplicación, la cual son 3 lineas en pila, asemejandoze a una hamburguesa.
            li 
                span.negrita Preventa: 
                span Término que se refiere al proceso de hacer una venta en un día y la entrega de los productos en diás posteriores.
            li 
                span.negrita Touch: 
                span Acción de tocar la pantalla del dispositivo táctil.
            li 
                span.negrita Venta: 
                span Término que se aplica a la venta de productos de un negocio.
        
        h3.subtitulo#especificacion Especificaciones técnicas
        ul.lists
            li Software construido en Dart, con el framework Flutter.
            li Instalador para Sistema operativo Android 6.0 o superior.
            li Instalador con extensión *.apk.
            li Peso del instalador es 32MB
            li Peso del app luego de instalada es 55.90MB
        
        h3.subtitulo#paso Paso a paso
        paso-paso(:imagenes="iniciar" :instrucciones="instruccionesIniciar")

        h3.subtitulo#operacion Operación del sistema
        p El App tiene 4 módulos que se van a explicar a continuación:
        h4.negrita Módulo Clientes
        paso-paso(:imagenes="clientes" :instrucciones="instruccionesClientes")
        h4.negrita Módulo Productos
        paso-paso(:imagenes="productos" :instrucciones="instruccionesProductos")
        h4.negrita Módulo Venta
        p Este módulo tiene un uso singular y muy diferente a los anteriores, por eso se explica de 3° y no de 1° como el orden de aparición en la pantalla principal.
        paso-paso(:imagenes="ventas" :instrucciones="instruccionesVentas")
        h4.negrita Módulo Datos
        paso-paso(:imagenes="datos" :instrucciones="instruccionesDatos")
        
        h3.subtitulo#recomendaciones Recomendaciones adicionales
        ul
            li Los módulos 'Clientes' y 'Productos' tienen funcionalidades similares.
            li El módulo 'Ventas' permite guardar y cargar el inventario del día; es decir, se puede hacer un inventario, guardarlo, tomar otro pedido y volver a cargar el inventario anterior.
            li En el módulo 'Ventas', en cualquiera de las pantallas de 'Inventario' o 'Ventas', las columnas editables se deben confirmar los datos haciendo touch al ícono ✔ del teclado.
            li Los pedidos guardados solo se pueden exportar en el mismo día en que se realizó. Sí no se exportan el mismo día, la información no se pierde, pero no hay forma de ser accedida.
        
        
        h3.subtitulo#referencias Referencias
        ul.lists.referencia
            li 
                a(href="https://es.wikipedia.org/wiki/Valores_separados_por_comas" target="_blank") https://es.wikipedia.org/wiki/Valores_separados_por_comas
            li 
                a(href="https://dart.dev/" target="_blank") https://dart.dev/
            li 
                a(href="https://flutter.dev/" target="_blank") https://flutter.dev/
            li 
                a(href="https://lawebdetuvida.com/que-es-el-menu-hamburguesa/" target="_blank") https://lawebdetuvida.com/que-es-el-menu-hamburguesa/
            li 
                a(href="https://es.wikipedia.org/wiki/APK_(formato)" target="_blank") https://es.wikipedia.org/wiki/APK_(formato)

        h3.subtitulo#glosario Glosario
        ul
            li 
                span.negrita Android: 
                span Sistema operativo, creado por la compañia Alphabet (Google), para celulares inteligentes.
            li 
                span.negrita APK: 
                span Instalador del app listo para instalarse en el dispositivo Android.
            li 
                span.negrita APP: 
                span Programa para dispositivo Android.
            li 
                span.negrita CSV: 
                span comma-separated values. Término que se refiere, a archivos de texto plano, que se almacena en forma de matriz, donde sus filas son separadas por medio del signo coma(,).
            li 
                span.negrita Hardware: 
                span Componentes físicos de un dispositvo tecnológico.
            li 
                span.negrita Software: 
                span Parte lógica de un sistema de información que permite la manipulación del dispositivo.
        
        router-link.navigator(to="/") Ir al Indice
</template>

<script>
import PasoPaso from "@/components/PasoPaso.vue";
import modal from "@/components/Modal.vue"
import imgs from "@/scripts/images";
import iconIndice from "@/assets/indice.png";

export default {
  name: "UsuarioView",
  components: {
    PasoPaso,
    modal
  },
  data: function() {
    return {
      showModal:false,
      iconIndice,
      imgs,
      instruccionesIniciar: [
        "Se ubica el ícono de la App Edertiz y se da un toque.",
        "Ya está abierta la aplicación y lista para ser usada."
      ],
      instruccionesClientes: [
        "En la pantalla de llegada, se puede visualizar los clientes que estén registrados. Al final de cada cliente se puede visualizar el ícono de agregar 'Venta', el cual permite agregar un cliente al módulo venta",
        "Al abrir el menú hamburguesa, se puede acceder a la opción de filtrado, donde se puede ver que se puede buscar clientes por patrones (al copiar una letra o algunas palabras, el sistema filtra por esa búsqueda) o se puede buscar por ciudad.",
        "Se puede seleccionar un cliente, luego de seleccionado, se deja oprimido el cliente seleccionado para acceder al menú extendido, el cual permite: ver información del cliente, actualizar cliente o eliminar cliente.",
        "En la imagen se puede visualizar cuando se selecciona la opción de 'Ver información'. Se puede ver todos los datos guardados del cliente seleccionado.",
        "En la imagen se puede visualizar cuando se selecciona la opción de 'Actualizar'. Se tiene habilitado todos los campos para modificar el cliente seleccionado. Los campos que no pueden ser vacíos (campos obligatorios) son 'Nombre' y 'Ciudad'.",
        "En la imagen se puede visualizar cuando se selecciona la opción de 'Eliminar'. Aparece un diálogo de confirmación que pide confirmar o cancelar la operación de 'Eliminar cliente'.",
        "En la imagen se puede visualizar cuando se da touch al botón '+'. Esta acción permite crear un nuevo cliente. Los campos que no pueden ser vacíos (campos obligatorios) son 'Nombre' y 'Ciudad'. En el campo 'Ciudad', solo se está permitido alguno de los siguientes valores: ANDES, BETANIA, HISPANIA, JARDIN, SANTA INES, SANTA RITA o TAPARTO."
      ],
      instruccionesProductos: [
        "En la pantalla de llegada, se puede visualizar los productos que estén registrados. Al final de cada producto se puede visualizar el ícono de agregar 'Venta', el cual permite agregar un producto al módulo venta",
        "Se puede seleccionar un producto, luego de seleccionado, se deja oprimido el producto seleccionado para acceder al menú extendido, el cual permite: ver información del producto, actualizar producto o eliminar producto.",
        "En la imagen se puede visualizar cuando se selecciona la opción de 'Ver información'. Se puede ver todos los datos guardados del producto seleccionado.",
        "En la imagen se puede visualizar cuando se selecciona la opción de 'Actualizar'. Se tiene habilitado todos los campos para modificar el producto seleccionado.",
        "En la imagen se puede visualizar cuando se selecciona la opción de 'Eliminar'. Aparece un diálogo de confirmación que pide confirmar o cancelar la operación de 'Eliminar producto'.",
        "Al empezar a escribir en la caja de texto, se activa la opción de filtrado, donde se puede ver que se puede buscar productos por patrones (al copiar una letra o algunas palabras, el sistema filtra por esa búsqueda).",
        "En la imagen se puede visualizar cuando se da touch al botón '+'. Esta acción permite crear un nuevo producto."
      ],
      instruccionesVentas: [
        "En la pantalla de llegada, en la parte superior, se visualiza el título del módulo y la fecha actual. " +
          "En todo el cuerpo del módulo, se divide en: Fecha de entrega (descripción en el punto 4), cliente (al darle touch al ícono, permite cargar un cliente), total del pedido (sección informativa que muestra el valor total del pedido) " +
          "y botones de acción ('Registrar' permite guardar el pedido, 'Limpiar pedido' permite resetear el módulo para ingresar un nuevo pedido y 'Eliminar pedido' permite eliminar el pedido realizado). " +
          "En la parte inferior, se visualiza 3 botones de navegación que llevan a las acciones esenciales de la preventa: inventario y venta." +
          " Más adelante se profundizará más sobre ésta pantalla.",
        "En la pantalla de 'Inventario': en la parte superior, se puede ver 2 botones, a los costados,los cuales son para agregar o borrar productos, y en el medio, una sección informativa del producto seleccionado y sus últimos 3 pedidos realizados. " +
          "A continuación, se puede observar una sección donde se visualizará los productos manejados, ya sea en la actualidad o con anterioridad, por el cliente y en modo de tabla, en donde consta 2 columnas, 'PRODUCTO' e 'INVENTARIO'." +
          " Más adelante se profundizará más sobre ésta pantalla.",
        "En la pantalla de 'Ventas', es muy similar a la pantalla de 'Inventario', con la diferencia de que en la sección de productos, las columnas manejadas son: 'PRODUCTO', 'INVENTARIO', 'PEDIDO'." +
          " Más adelante se profundizará más sobre ésta pantalla.",
        "Volviendo a la pantalla 'Resumen', existen 2 íconos que permite cargar información: el ícono de calendario en la sección 'Fecha de entrega' (en la imagen. Esta sección permite configurar la fecha de entrega del pedido de la preventa) " +
          "y el ícono de cliente en la sección 'Cliente' (esta sección permite seleccionar el cliente que va a realizar el pedido de la preventa)",
        "En la imagen se puede observar el ejemplo claro de como se visualiza la acción de agregar un producto al pedido. También aplica para agregar un cliente al pedido. Para acceder a esta pantalla, solo basta con hacer touch al ícono '+' en la parte superior derecha, ya sea de la pantalla 'Inventario' o de la pantalla 'Ventas'.",
        "En la pantalla 'Inventario', luego de agregar algunos productos (en la imagen), al darle touch en alguna fila de la columna 'INVENTARIO', se habilita inmediatmente el teclado numérico para modificar la cantidad del inventario. Esta acción solo se guarda cuando se da touch al botón de confirmar del teclado, segun la imagen, el botón de 'chulo' (✔) ",
        "En la pantalla 'Ventas' (en la imagen), se puede visualizar que: para cada producto existe un inventario que se guardó previamente (los inventarios son solo informativos, son ayudas para que el cliente realice un pedido más preciso, por lo que para una preventa, los inventarios son opcionales) " +
          "y en la parte superior, se puede visualizar un producto seleccionado con el registro de sus últimos 3 pedidos. Al seleccionar algun producto, se puede eliminar de la lista al darle touch al botón '-' de la parte superior izquierda. El funcionamiento de la columna 'PEDIDO' es exactamente igual que la columna 'INVENTARIO' de la pantalla 'Inventario' (paso anterior)",
        "Ya realizado alguna venta, se puede ver que en la pantalla 'Resumen', en la sección 'Total del Pedido', se carga el valor total del pedido del cliente. También se habilitan los botones 'Registrar' (para guardar el pedido) y 'Eliminar pedido' (para eliminar el pedido).",
        "Luego de realizar el registro, el sistema informa con un pequeño mensaje del éxito o del fracaso de la operación."
      ],
      instruccionesDatos: [
        "En la pantalla del módulo de datos, existen 2 acciones: 'Importar...' y 'Exportar a pdf'. Importar permite traer datos para la aplicación. Y exportar permite crear un archivo pdf y enviarlo por algun medio.",
        "En la opción de 'Importar...', hay 2 subopciones a importar: 'Importar Clientes' o 'Importar Productos'.",
        "La estructura del archivo CSV debe ser muy específica para cada importación, de lo contrario, el sistema no dejará importar y notificará (ejemplo en la imagen). Las columnas del CSV para el módulo cliente son: Nit, nombre del cliente, administrador, telefono,dirección,email y ciudad. " +
          "Las columnas del CSV para el módulo producto son: codigo producto, nombre producto, valor, iva.",
        "Volviendo a la pantalla del módulo de datos, se mostrará como funciona la opción 'Exportar a pdf'.",
        "Al hacer touch en el botón 'Exportar a pdf', se despliega un menú en la parte inferior, donde se elige el medio por el cual se irá a compartir el archivo pdf creado (El pedido del día).",
        "El pdf creado quedaría como mostrado en la imagen."
      ]
    };
  },
  computed: {
    iniciar: function() {
      return [this.imgs[4], this.imgs[5]];
    },
    clientes: function() {
      let result = [];
      for (let i = 10; i < 17; i++) {
        result.push(this.imgs[i]);
      }
      return result;
    },
    productos: function() {
      let result = [];
      for (let i = 17; i < 24; i++) {
        result.push(this.imgs[i]);
      }
      return result;
    },
    ventas: function() {
      let result = [];
      for (let i = 24; i < 33; i++) {
        result.push(this.imgs[i]);
      }
      return result;
    },
    datos: function() {
      let result = [];
      result.push(this.imgs[6]);
      result.push(this.imgs[7]);
      result.push(this.imgs[9]);
      result.push(this.imgs[6]);
      result.push(this.imgs[33]);
      result.push(this.imgs[34]);
      return result;
    }
  }
};
</script>
