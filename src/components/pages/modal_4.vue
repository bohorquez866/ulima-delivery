<template>
    <div class="div_father">
        <h2>Explicación de los movimientos</h2>
        <div class="instr_5">
            <img src="../../assets/ExplicacionMovimientos_Pregunta6.png" alt="Ayuda de la pregunta 6">
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

    .instr_5 {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .instr_5 > img {
        width: 70%;
        height: auto;
    }
    
    .btn_model {
        padding: 10px;
        border-radius: 30px;
        background-color: #0466c8;
        color: white;
        font-size: 14px;
    }
</style>
