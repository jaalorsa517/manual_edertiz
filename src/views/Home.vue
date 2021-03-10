<template lang="pug">
    section
        h1.titulo Manual App EDERTIZ
        h2.subtitulo Descripción
        p Este es un manual web que pretende informar todas las características, funcionalidades y pasos para hacer uso de la app EDERTIZ.
        p EDERTIZ es una App desarrollada para la plataforma Android para la distribuidora de lácteos Gralac.
        p Dicha App fue desarrollada por:
            ul
                li.negrita Jaime Alberto Ortiz Saldarriaga
                li.negrita Edevaldo Gómez López
        h2.subtitulo Indice
        ol
            li 
                router-link(to="/instalacion") Manual de Instalación
            li 
                router-link(to="/usuario") Manual de Usuario
            li 
                router-link(to="/capacitacion") Manual de Capacitación

</template>
