<!-- MODAL PARA ESCENARIO 2 PREGUNTA 1 -->
<template>
  <div class="div_father">
    <h2>Instrucciones escenario 2</h2>

    <div class="fila">
        <div class="content_intro">

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

    
.div_father > h1 {
            font-weight: 400;
            margin: 20px;
        }
    
        .content_intro {
            width: 98%;
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

.btn_model {
  padding: 10px;
  border-radius: 30px;
  background-color: #0466c8;
  color: white;
  font-size: 14px;
}
</style>
