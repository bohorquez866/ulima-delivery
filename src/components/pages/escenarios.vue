<template>
    <div class="div_general">
        <h1>Escenarios</h1>

        <div class="escenarios">

        <router-link class="ro_in" :to="{ name: 'Pregunta1' }">
            <button class="tarjeta tarjeta_0">
                <img class="logo_mosaic" src="../../assets/check_list.png" alt="Checklist"/>
                <h3>Pregunta 1A</h3>
                <p>Camino a la escuela</p>
            </button>
        </router-link>

        <router-link class="ro_in" :to="{ name: 'Pregunta2' }">
            <button class="tarjeta tarjeta_1">
                <img class="logo_mosaic" src="../../assets/check_list.png" alt="Checklist"/> 
                <h3>Pregunta 2A</h3>
                <p>Pacman olvidó su tarea</p>
            </button>
        </router-link>

        <router-link class="ro_in" :to="{ name: 'Pregunta3' }">
            <button class="tarjeta tarjeta_2">
                <img class="logo_mosaic" src="../../assets/check_list.png" alt="Checklist" />
                <h3>Pregunta 3A</h3>
                <p>Llegar temprano</p>
            </button>
        </router-link>

        <router-link class="ro_in" :to="{ name: 'Pregunta2a' }">
            <button class="tarjeta tarjeta_3">
                <img class="logo_mosaic" src="../../assets/check_list.png" alt="Checklist" />
                <h3>Esc. 2 Pregunta 1</h3>
                <p>Identificar patrón</p>
            </button>
        </router-link>

        <router-link class="ro_in" :to="{ name: 'Pregunta2b' }">
            <button class="tarjeta tarjeta_4">
                <img class="logo_mosaic" src="../../assets/check_list.png" alt="Checklist" />
                <h3>Esc. 2 Pregunta 2.1</h3>
                <p>Crear solución</p>
            </button>
        </router-link>

        <router-link class="ro_in" :to="{ name: 'Pregunta2c' }">
            <button class="tarjeta tarjeta_5">
                <img class="logo_mosaic" src="../../assets/check_list.png" alt="Checklist" />
                <h3>Esc. 2 Pregunta 2.2</h3>
                <p>Bloques</p>
            </button>
        </router-link>

        <router-link class="ro_in" :to="{ name: 'Pregunta3a' }">
            <button class="tarjeta tarjeta_6">
                <img class="logo_mosaic" src="../../assets/check_list.png" alt="Checklist" />
                <h3>Esc. 2 Pregunta 3.1</h3>
                <p>Solución Pacman</p>
            </button>
        </router-link>

        <router-link class="ro_in" :to="{ name: 'Pregunta3b' }">
            <button class="tarjeta tarjeta_7">
                <img class="logo_mosaic" src="../../assets/check_list.png" alt="Checklist" />
                <h3>Esc. 2 Pregunta 3.2</h3>
                <p>Solución Carita Felíz</p>
            </button>
        </router-link>

        <router-link class="ro_in" :to="{ name: 'Pregunta3c' }">
            <button class="tarjeta tarjeta_8">
                <img class="logo_mosaic" src="../../assets/check_list.png" alt="Checklist" />
                <h3>Esc. 2 Pregunta 3.3</h3>
                <p>Solución propia</p>
            </button>
        </router-link>

        </div>

        <button class="btn_model btn_out">
            <router-link class="ro_in" :to="{ name: 'LandingPage' }">Salir</router-link>
        </button>
    </div>
</template>

<style>
    .div_general {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .div_general > h1 {
        font-weight: 400;
        margin: 20px;
    }

    .escenarios {
        width: 80%;
        margin: 20px;
    }
    
    .tarjeta {
        margin: 20px;
        padding: 20px;
        background: #0466c8;
        color: white;
        /* box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); */
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

        .tarjeta:hover {
            transition: .5s;
            background: #0254a7;    
        }

    .logo_mosaic {
        width: 60px;
        height: auto;
    }

    .ro_in {
        text-decoration: none;
    }

    .escenarios {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    }

.flex-item:nth-child(1) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.flex-item:nth-child(2) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.flex-item:nth-child(3) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.flex-item:nth-child(4) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.flex-item:nth-child(5) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.flex-item:nth-child(6) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.flex-item:nth-child(7) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.flex-item:nth-child(8) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.flex-item:nth-child(9) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

    .btn_out {
        background: #e63946 !important;
    }

        .btn_out:hover {
            transition: .5s;
            background: #b12b36 !important;
        }
</style>