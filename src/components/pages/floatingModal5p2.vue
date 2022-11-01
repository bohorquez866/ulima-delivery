<template>
    <div class="div_father father_floating">
        <h2>Como usar los bloques</h2>
    <div class="splitter">
        <div class="contenedor_primario izquierda">
            <div class="bloque_contenido">
                <p>
                    1. Existen 2 tipos de bloques: grande y pequeño. En total, podemos utilizar entre 2 bloques grandes y 7 bloques pequeños.
                </p>
                <div class="img_element">
                    <img src="../../assets/explicacion_Bloques_Pregunta5/1_bloque.png" alt="Significado de los bloques">
                </div>
            </div>

            <div class="bloque_contenido">
                <p>
                    2. Dentro de los bloques grandes pueden entrar un máximo de 3 bloques pequeños.
                </p>
                <div class="img_element">
                    <img src="../../assets/explicacion_Bloques_Pregunta5/2_bloque.png" alt="Significado de los bloques">
                </div>
            </div>

            <div class="bloque_contenido">
                <p>
                    3. NO puede haber un bloque grande dentro de otro bloque grande.
                </p>
                <div class="img_element">
                    <img src="../../assets/explicacion_Bloques_Pregunta5/3_bloque.png" alt="Significado de los bloques">
                </div>
            </div>
        </div>

        <div class="contenedor_primario">
            <div class="bloque_contenido">
                <p>
                    4. La secuencia de lectura de las instrucciones es de ARRIBA hacia ABAJO y en caso se tenga bloques grandes, desde AFUERA hacia ADENTRO.
                </p>
                <div class="img_element">
                    <img src="../../assets/explicacion_Bloques_Pregunta5/4_bloque.png" alt="Significado de los bloques">
                </div>
            </div>

            <div class="bloque_contenido">
                <p>
                    5. En caso pruebe mi solución y sale error, para reordenar los bloques primero tienes que devolver el bloque al Espacio 1 y luego seleccionar otro bloque (o el mismo) y arrastrarlo hacia el Espacio 2.
                </p>
                <div class="img_element alarm">
                    <img src="../../assets/explicacion_Bloques_Pregunta5/Warning.png" alt="Significado de los bloques">
                </div>
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
    transform: scale(0.9);
}

.father_floating {
    transform: scale(0.8);
}

    .div_father > h2 {
        font-weight: 300;
        margin: 10px;
    }

    .splitter {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .contenedor_primario {
        width: 50%;
        padding: 10px;
    }

    .izquierda {
        border-right: solid .5px rgb(207, 207, 207);
    }

    .bloque_contenido {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: justify;
    }

    .img_element > img {
        width: 65%;
        height: auto;
        margin-left: 20px;
    }

    .alarm > img {
        width: 100%;
    }
    
    .btn_model {
        padding: 10px;
        border-radius: 30px;
        background-color: #0466c8;
        color: white;
        font-size: 14px;
    }
</style>
