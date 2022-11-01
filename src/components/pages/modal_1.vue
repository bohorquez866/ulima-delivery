<template>
    <div class="div_father">
        <h2>Instrucciones escenario 1</h2>
        
        <div class="content_intro">
            <p>
            Pacman y Carita Feliz son dos compañeros de clases que han iniciado su semana final de exámenes bimestrales. Por las mañanas ambos terminan su entrenamiento de fútbol a las <strong>8:20 am</strong> y luego se dirigen al colegio, su hora de ingreso es a las <strong>9:00 am</strong> por lo que solo tienen 40 minutos para llegar al colegio.
            Sin embargo, durante esta semana, siempre se presentan problemas de tránsito y esta vez no ha sido la excepción.
            <br>
            <br>
            Pacman ha abierto Google Maps para ver el estado actual del tránsito, este se observa en la figura 1.
            <br>
            <br>
            En el gráfico, los <strong>circulos negros</strong>
            indican paraderos de bus, y las flechas de colores indican en el sentido de dirección de los caminos que pueden seguir. En las siguiente tabla se muestra los tiempos de demora por la intensidad del tráfico de acuerdo con la flecha de color.
            </p>
        </div>

        <div class="images">
            <div>
                <img class="img_table" src="../../assets/intro_escenario_1/table_intro_esc_1A.png" alt="Duración de caminos">
            </div>
            <!-- <div class="figura">
                <img class="img_map" src="../../assets/intro_escenario_1/figura_1_recorrido_hacia_el_colegio.png" alt="Figura 1">
                <h3>Figura 1</h3>
            </div> -->
        </div>

        <slot></slot>

    </div>
</template>

<style>
.div_father {
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .div_father > h2 {
        font-weight: 300;
        margin: 10px;
    }

    .images {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .figura {
    /* margin-left: 40px; */
    /* box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); */
    border-radius: 10px;
    padding: 10px;
    }
    
    .btn_model {
padding: 10px;
border-radius: 30px;
background-color: #0466c8;
color: white;
font-size: 14px;
}

.images > .img_table {
        width: 15rem;
        height: auto;
    }

    .images > .img_map {
        width: 10rem;
        height: auto;
    }
</style>
