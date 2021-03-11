<template lang="pug">
    section.instalacion-container
        .button-flat(@click="showModal = true") 
          img(:src="iconIndice")
        modal(v-show="showModal")
          ol.lists
            li
              a(href="#convenciones" @click="showModal = false") Convenciones
            li
              a(href="#requisitos" @click="showModal = false") Requisitos
            li
              a(href="#otros-requisitos" @click="showModal = false") Otros requisitos
            li
              a(href="#instalacion" @click="showModal = false") Instalación del programa
            li
              a(href="#configuracion" @click="showModal = false") Configuración del programa
            li
              a(href="#consideraciones" @click="showModal = false") Consideraciones adicionales
            li
              a(href="#referencias" @click="showModal = false") Referencias
            li
              router-link(to="/") Ir al Indice
        
        h1.titulo Instalación del App EDERTIZ

        h3.subtitulo#convenciones Convenciones
        ul
            li 
                span.negrita APP: 
                span Programa para celular.
            li 
                span.negrita CSV: 
                span comma-separated values. Término que se refiere, a archivos de texto plano, que se almacena en forma de matriz, donde sus filas son separadas por medio del signo coma(,).
            li 
                span.negrita Explorador de archivos: 
                span Programa encargado de gestionar los archivos del dispositivo.
            li 
                span.negrita GB: 
                span Término que significa gigabyte. Medida que equivale a 1e+9 bytes.
            li 
                span.negrita MB: 
                span Término que significa megabyte. Medida que equivale a 	1e+6 bytes.
            li 
                span.negrita RAM: 
                span Random Access Memory. Se refiere a la memoria de acceso aleatorio de un dispositivo.
        
        h3.subtitulo#requisitos Requisitos
        ul.requisitos
            li.negrita Hardware
                ul.format-initial
                    li Mínimo 1GB de RAM.
                    li Mínimo 70MB de espacio disponible.
            li.negrita Software
                ul.format-initial 
                    li Android 6.0 o superior.
                    li Algun explorador de archivos.

        h3.subtitulo#otros-requisitos Otros requisitos
        p Cable USB o bluetooth solo para el caso de agregar archivos CSV.

        h3.subtitulo#instalacion Instalación del programa
        paso-paso(:imagenes="instalacion" :instrucciones="instruccionInstalacion")

        h3.subtitulo#configuracion Configuración del programa
        p La App no necesita configuración obligatoria para su correcto funcionamiento. Pero está disponible la forma de ingresarle datos para que su primer inicio no sea desde 0.
        p Se repite, #[strong NO ES OBLIGATORIO].
        p La estructura de los archivos CSV dependerá del módulo a ser importado.
        p A continuación se podrá ver los pasos para configurar con un archivo CSV.
        paso-paso(:imagenes="configuracion" :instrucciones="instruccionConfiguracion")
        
        h3.subtitulo#consideraciones Consideraciones adicionales
        p En caso de problemas al instalar o configurar el App, notifiquese al los desarrolladores para informar de los problemas encontrados.
        
        h3.subtitulo#referencias Referencias
        ul.lists.referencia
            li
              a(href="https://www.xatakandroid.com/tutoriales/como-instalar-aplicaciones-en-apk-en-un-movil-android" target="__blank") https://www.xatakandroid.com/tutoriales/como-instalar-aplicaciones-en-apk-en-un-movil-android
            li
              a(href="https://developer.android.com/training/permissions/requesting?hl=es-419" target="_blank") https://developer.android.com/training/permissions/requesting?hl=es-419
            li
              a(href="https://es.wikipedia.org/wiki/Valores_separados_por_comas" target="_blank") https://es.wikipedia.org/wiki/Valores_separados_por_comas
            li
              a(href="https://es.wikipedia.org/wiki/Memoria_de_acceso_aleatorio") https://es.wikipedia.org/wiki/Memoria_de_acceso_aleatorio

        router-link.navigator(to="/") Ir al Indice
</template>

<script>
import imgs from "@/scripts/images";
import pasoPaso from "@/components/PasoPaso.vue";
import modal from "@/components/Modal.vue";
import iconIndice from "@/assets/indice.png";

export default {
  name: "InstalacionView",
  components: {
    pasoPaso,
    modal
  },
  data: function() {
    return {
      iconIndice,
      showModal: false,
      imgs,
      instruccionInstalacion: [
        "Tener instalado algún explorador de archivos. Se recomienda File Manager. Para instalarlo solo basta con buscarlo en la App Store.",
        "Abrir el explorador y ubicar el ejecutable. Luego abrirlo.",
        "El sistema pide confirmación para instalar la App. Sí solicita permisos, se le debe conceder.",
        "Esperar a que termine de instalar.",
        "Ya se puede ejecutar, la App EDERTIZ, puesto que quedó instalada."
      ],
      instruccionConfiguracion: [
        'Abrir el app. Esta es la pantalla de inicio. Seleccionar la opcion "DATOS"',
        'Dentro de esta opción, se encuentra 2 opciones más: importar y exportar. Para este caso, se selecciona "Importar..."',
        "Solo se puede importar archivos CSV. La App solo permite importar datos a los módulos cliente y producto." +
          "Los datos del archivo CSV para cliente son Nit, nombre del negocio, administrador, telefono, direccion, email y ciudad. " +
          "Los datos del archivo CSV para producto son código producto, nombre, valor, iva",
        "Luego de seleccionado los datos a importar, se procede a buscar el archivo CSV usando el explorador de archivos",
        "Sí es primera vez que se ejecuta la importación de datos, pedirá permisos para acceso al almacenamiento del dispositvo. " +
          "Se procede a concedercelos. Luego de la carga exitosa, se debe reiniciar la app.",
        "En caso de que el archivo CSV no tenga la estructura mencionada anteriormente, la app cancela la importación y notifica con un mensaje."
      ]
    };
  },
  computed: {
    instalacion: function() {
      let result = [];
      let i = 0;
      while (i < 5) {
        result.push(this.imgs[i]);
        i++;
      }
      return result;
    },
    configuracion: function() {
      let result = [];
      let i = 5;
      while (i < 10) {
        result.push(this.imgs[i]);
        if (i === 7) result.push(this.imgs[1]);
        i++;
      }
      return result;
    }
  }
};
</script>
