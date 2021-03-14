<template lang="pug">
    section.capacitacion-container
        .button-flat(@click="showModal = true") 
          img(:src="iconIndice")
        modal(v-show="showModal")
            ol.lists
              li
                a(href="#introduccion" @click="showModal = false") Introducción
              li
                a(href="#objetivo" @click="showModal = false") Objetivo de la capacitación
              li
                a(href="#convenciones" @click="showModal = false") Convenciones
              li
                a(href="#requerimientos" @click="showModal = false") Requerimientos
              li
                a(href="#perfil" @click="showModal = false") Perfil de usuario
              li
                a(href="#cronograma" @click="showModal = false") Cronograma de capacitación
              li
                a(href="#recomendaciones" @click="showModal = false") Recomendaciones adicionales
              li
                a(href="#referencias" @click="showModal = false") Referencias
              li
                a(href="#glosario" @click="showModal = false") Glosario
              li
                router-link(to="/") Ir al Indice

        h1.titulo Plan de Capacitación

        h3.subtitulo#introduccion Introducción
        p La capacitación es el proceso de compartir al equipo nuevos conocimientos sobre las tareas y procedimientos que ahora realizaran con un nuevo software de gestión administrativa.
        p Es importante la planificación para garantizar que el personal este preparado. En muchas ocasiones, si consigue elegir al mejor proveedor, es probable que este pueda ayudarte con el plan de capacitación.
        
        h3.subtitulo#objetivo Objetivo de la capacitación

        p Implementar un software de gestión, desarrollar un plan de contenidos, abrir espacios de disfunción con los colaboradores, organizar un cronograma de pruebas del software.
        
        h3.subtitulo#convenciones Convenciones
        ul
          li 
            span.negrita App: 
            span Se refiere a las aplicaciones Android.
          li 
            span.negrita PC: 
            span Se refiere a las computadoras.
          li 
            span.negrita pdf: 
            span Portable document format. Formato de almacenamiento para documentos digitales.
          li 
            span.negrita USB: 
            span Universal serial bus. Bus de comuniciación con un estándar.

        h3.subtitulo#requerimientos Requerimientos
        ul.requisitos
          li Celular tipo smartphone con sistema operativo Android 6.0 o superior.
          li Bluetooth o cable USB.
          li Acceso a un PC.
          li App de explorador de archivos.
          li App lectora de archivos pdf.

        h3.subtitulo#perfil Perfil de usuario
        p El usuario final deberá ser una persona honesta y organizada, con habilidades básicas para manejar un celular Android.
        p También deberá tener habilidades de comuniciación asertiva y ser oportuna en informar cualquier novedad con la App Edertiz.
        
        h3.subtitulo#cronograma Cronograma de capacitación
        tabla(:columns="columnasCrono" :data="datosCrono" :filterKey="filtroCrono")

        h3.subtitulo#recomendaciones Recomendaciones adicionales
        h4.negrita Planilla de asistencia
        tabla(:columns="columnasAsistencia" :data="datosAsistencia" :filterKey="filtroAsistencia")
        
        h3.subtitulo#referencias Referencias
        ul.lists.referencia
          li
            a(href="https://debitoor.es/glosario/app-movil" target="_blank") https://debitoor.es/glosario/app-movil
          li
            a(href="https://es.wikipedia.org/wiki/PDF" target="_blank") https://es.wikipedia.org/wiki/PDF
          li
            a(href="https://es.wikipedia.org/wiki/Universal_Serial_Bus" target="_blank") https://es.wikipedia.org/wiki/Universal_Serial_Bus
          li
            a(href="https://es.wikipedia.org/wiki/Bluetooth" target="_blank") https://es.wikipedia.org/wiki/Bluetooth
        
        h3.subtitulo#glosario Glosario
        ul
          li 
            span.negrita Android: 
            span Sistema operativo, creado por la compañia Alphabet (Google), para celulares inteligentes.
          li
            span.negrita Bluetooth:
            span Especificación inalámbrica para redes personales.
          li 
            span.negrita Explorador de archivos: 
            span App usada para navegar entre los archivos del dispositivo.
          li 
            span.negrita USB: 
            span Universal serial bus. Bus de comuniciación con un estándar.
        
        router-link.navigator(to="/") Ir al Indice
</template>
<script>
import modal from "@/components/Modal.vue";
import iconIndice from "@/assets/indice.png";
import Tabla from "@/components/Tabla.vue";

export default {
  name: "CapacitacionView",
  components: {
    modal,
    Tabla
  },
  data: function() {
    return {
      iconIndice,
      showModal: false,
      columnasAsistencia: ["Nombre", "Cargo", "Fecha", "Duración", "Firma"],
      datosAsistencia: [
        {
          Nombre: "Alejandro García",
          Cargo: "Vendedor",
          Fecha: "12-Abril-2021",
          Duración: "1.5 Horas"
        },
        {
          Nombre: "Alejandra Restrepo",
          Cargo: "Mercaderista",
          Fecha: "12-Abril-2021",
          Duración: "1.5 Horas"
        },
        {
          Nombre: "Pablo Betancur",
          Cargo: "Mercaderista",
          Fecha: "12-Abril-2021",
          Duración: "1.5 Horas"
        },
        {
          Nombre: "Yuliana Sierra",
          Cargo: "Secretaria",
          Fecha: "13-Abril-2021",
          Duración: "1.5 Horas"
        },
        {
          Nombre: "Milena Perez",
          Cargo: "Secretaria",
          Fecha: "13-Abril-2021",
          Duración: "1.5 Horas"
        },
        {
          Nombre: "Andres Montoya",
          Cargo: "Transportador",
          Fecha: "14-Abril-2021",
          Duración: "1.5 Horas"
        },
        {
          Nombre: "Darío González",
          Cargo: "Transportador",
          Fecha: "14-Abril-2021",
          Duración: "1.5 Horas"
        }
      ],
      filtroAsistencia: "",
      columnasCrono: [
        "NECESIDAD FORMATIVA",
        "DENOMINACION DEL CURSO DE FORMACION /CAPACITACION",
        "ENTIDAD FORMADORA",
        "FECHA DE REALIZACION",
        "ASISTENTES",
        "DURACION"
      ],
      datosCrono: [
        {
          "NECESIDAD FORMATIVA": "MANEJO DE APP EDERTIZ",
          "DENOMINACION DEL CURSO DE FORMACION /CAPACITACION":
            "APRENDER EL MANEJO DEL NUEVO SOFWARE",
          "ENTIDAD FORMADORA": "ANALISTA DE SOFTWARE Y SISTEMAS DE INFORAMCION",
          "FECHA DE REALIZACION": "12 abril 2021 2pm",
          ASISTENTES: "ÁREA DE MERCADEO",
          DURACION: "2 horas"
        },
        {
          "NECESIDAD FORMATIVA": "MANEJO DE APP EDERTIZ",
          "DENOMINACION DEL CURSO DE FORMACION /CAPACITACION":
            "APRENDER EL MANEJO DEL NUEVO SOFWARE",
          "ENTIDAD FORMADORA": "ANALISTA DE SOFTWARE Y SISTEMAS DE INFORAMCION",
          "FECHA DE REALIZACION": "13 abril 2021 2pm",
          ASISTENTES: "ÁREA ADMINISTRATIVA",
          DURACION: "2 horas"
        },
        {
          "NECESIDAD FORMATIVA": "MANEJO DE APP EDERTIZ",
          "DENOMINACION DEL CURSO DE FORMACION /CAPACITACION":
            "APRENDER EL MANEJO DEL NUEVO SOFWARE",
          "ENTIDAD FORMADORA": "ANALISTA DE SOFTWARE Y SISTEMAS DE INFORAMCION",
          "FECHA DE REALIZACION": "14 abril 2021 2pm",
          ASISTENTES: "ÁREA LOGÍSTICA",
          DURACION: "2 horas"
        }
      ],
      filtroCrono: ""
    };
  }
};
</script>
