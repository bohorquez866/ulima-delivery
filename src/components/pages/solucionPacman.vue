<template>
    <div class="div_father">
        <div class="instr_5">
            <img src="../../assets/pregunta6P3/Pacman_propuesta.png" alt="Solución Pacman">
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
