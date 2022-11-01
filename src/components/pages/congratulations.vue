<template>
    <div class="div_father">
        <h2>Felicidades has completado el Test correctamente</h2>

        <div class="images">
            <div>
                <img class="img_table" src="../../assets/complete-31-128.png" alt="Finish">
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

    .images {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
    .btn_model {
        padding: 10px;
        border-radius: 30px;
        background-color: #0466c8;
        color: white;
        font-size: 14px;
    }

    .images > .img_table {
        width: 128px;
        height: auto;
    }
</style>
