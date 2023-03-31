<template>
    <div class="div_father">
        <h1>Introducción al Escenario 2</h1>
    <div class="fila">
        <div class="content_intro">
            <p>
                Luego de realizar sus actividades en el colegio, Pacman y Carita Feliz continúan sus estudios en una academia preuniversitaria.
                <br>
                <br>
                El jueves, cuando estaban a punto de llegar a la academina, Pacman y Carita Feliz se encontraron con un problema, hay un <strong>fantasma rosado</strong> que no les permite seguir avanzando. Ellos no saben por donde ir y te piden tu ayuda para que les indiques un camino seguro hacia la academia. 
                <br>
                <br>
                Pacman te brinda la siguiente información:
            </p>

            <p>
                <strong>A.</strong> Pacman y Carita Feliz, se pueden mover en las siguientes direcciones: <strong>ARRIBA, ABAJO, IZQUIERDA Y DERECHA; adicionalmente,</strong> tienen <strong>2 movimientos</strong> en <strong>DIAGONAL:</strong> Uno a la derecha hacia arriba o abajo, y otro a la izquierda hacia arriba o abajo.
            </p>
            <div class="gif_box">
                <img class="gif_element" src="../../assets/Gifs/a01.gif" alt="Gif 1">
                <img class="gif_element" src="../../assets/Gifs/a02.gif" alt="Gif 2">
                <img class="gif_element" src="../../assets/Gifs/a03.gif" alt="Gif 3">
                <img class="gif_element" src="../../assets/Gifs/a04.gif" alt="Gif 4">
                <img class="gif_element" src="../../assets/Gifs/a05.gif" alt="Gif 5">
            </div>
            <p>
                <strong>B.</strong> Si chocan con el fantasma, <strong>ya NO podrán seguir avanzando.</strong>
                <br>
            </p>
            <p>
                <strong>C.</strong> Cada vez que Pacman y Carita Feliz hacen un movimiento, el fantasma realiza un movimiento siguiendo su propio patrón.
            </p>
                <div class="gif_box">
                    <img class="gif_element" src="../../assets/Gifs/c01.gif" alt="Gif C">
                </div>

            <p>
                <strong>D.</strong> El <strong>patrón de desplazamiento del fantasma se desconoce.</strong>
                <br>
                <br>
                <strong>E.</strong> Del patrón de desplazamiento del fantasma, solo se sabe que <strong>siempre vuelve al centro.</strong>
            </p>
            <div class="gif_box">
                <img class="gif_element" src="../../assets/Gifs/e01.gif" alt="Gif E">
            </div>

        </div>
            <div class="figura">
                <img src="../../assets/escenario_2_fantasma/escenario_2_fantasma.png" alt="Figura 2" width="500px" height="auto">
                <h3>Mapa</h3>
            </div>
        </div>

        <button class="btn_model">
            <router-link class="ro_in" :to="{ name: 'Pregunta2a' }">Continuar al escenario 2</router-link>
        </button>
    </div>
</template>

<style>
    .div_father {
        max-width: 1920px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
        .div_father > h1 {
            font-weight: 400;
            margin: 20px;
        }
    
        .content_intro {
            width: 90%;
            margin: 20px;
        }

        .gif_box {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            /* box-shadow: 0 0 5px 0 rgba(0,0,0,0.75); */
            margin: 10px;
            border-radius: 10px;
        }

        .gif_element {
            width: 100px;
            height: auto;
            margin: 20px;
            box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);
            border-radius: 10px;
        }
    
        .fila {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

        img {
            margin: 20px;
        }
    
        .figura {
        /* margin-left: 40px; */
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        border-radius: 10px;
        padding: 20px;
        }
        
        .btn_model {
            padding: 15px;
            border-radius: 30px;
            background-color: #0466c8;
            color: white;
            font-size: 14px;
        }
    </style>