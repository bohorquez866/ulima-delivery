<template>
  <div class="big_container">
    <div class="titulo_escenario">
      <div class="subtitle">
        <h1>Escenario 2 → Pregunta 6c: ¿Qué solución escogerías?</h1>

        <p>Para concluir, tanto Carita Feliz (recuadro azul), Pacman (recuadro amarillo) y tú (recuadro verde) han elaborado una propuesta de ruta para trasladarse de manera segura. No obstante, los personajes se encuentran en una encrucijada al no estar seguros si deberían optar por su propuesta o considerar la tuya planteada en la Pregunta 5a.</p>
        <p>¿Cuál de estas opciones crees que es la más adecuada? Te invito a argumentar tu respuesta para llegar a una decisión informada.</p>
        <p><strong>Dale click al “+” para ver la solución de cada uno.</strong></p>
      </div>
      <p class="ver_sc part">Esta pregunta tiene tres partes: 3/3</p>
      <div class="modal" v-if="modalIsActive">
        <div class="submodal">
          <congratulations setModal="setModal">
            <button class="btn_model close_btn" @click="salir">Finalizar</button>
          </congratulations>
        </div>
      </div>

      <div class="modal" v-if="modalIsActive2">
        <div class="submodal">
          <solucionCarita setModal="setModal2">
            <button class="btn_model close_btn" @click="setModal2">Cerrar</button>
          </solucionCarita>
        </div>
      </div>

      <div class="modal" v-if="modalIsActive3">
        <div class="submodal">
          <solucionPacman setModal="setModal3">
            <button class="btn_model close_btn" @click="setModal3">Cerrar</button>
          </solucionPacman>
        </div>
      </div>

      <div class="modal" v-if="modalIsActive4">
        <div class="submodal">
          <solucionPropia setModal="setModal4">
            <button class="btn_model close_btn" @click="setModal4">Cerrar</button>
          </solucionPropia>
        </div>
      </div>

    </div>

    <div class="choose">
      <div class="btn_final_options">
        <v-btn
          id="carita"
          class="ma-2"
          outlined
          color="indigo"
          elevation="11"
          v-on:click="guardarSolucion"
          :disabled="pressedC"
        >
          Carita feliz
        </v-btn>
        <button  @click="setModal2" class="btn_model_rounded start_btn">+</button>
      </div>

      <div class="btn_final_options">
        <v-btn
          id="pacman"
          class="ma-2"
          outlined
          color="#ffb703"
          elevation="11"
          v-on:click="guardarSolucion"
          :disabled="pressedP"
        >
          Pacman
        </v-btn>
        <button @click="setModal3" class="btn_model_rounded start_btn">+</button>
      </div>

      <div class="btn_final_options">
        <v-btn
          id="misol"
          class="ma-2"
          outlined
          color="green"
          v-on:click="guardarSolucion"
          :disabled="pressedM"
          elevation="11"
        >
          Mi solucion
        </v-btn>
        <button @click="setModal4" class="btn_model_rounded start_btn">+</button>
      </div>
    </div>

    <div class="idp">

      <label class="label_end" for="input-7-1">
        <div class="question_logo">
          <img src="../../assets/AvisosDeRespuesta/i01.png" alt="Aspectos importantes" />
          <h3>Aspectos Importantes</h3>
        </div>
      </label>
      <!-- <textarea
        class="text_box"
        id="aspectos"
        name="input-7-1"
        type="text"
        v-model="aspectos"
        placeholder="Aspectos..."
      ></textarea> -->
      <input
        class="text-field"
        @change="addToList"
        id="aspectos"
        name="input-7-1"
        value=""
        type="text"
        v-model="text"
        placeholder="Aspectos..."
      />
      <!-- <button @click="addToList">add</button> -->

      <ul>
        <li v-for="(item, index) in aspectos" :key="index">
          <span>
            <span class="">{{ item }}</span>
          </span>
          <button @click="deleteFromList(index)">Eliminar</button>
        </li>
      </ul>

      <label class="label_end" for="input-7-1">
        <div class="question_logo" style="margin-top: 15px;">
          <img src="../../assets/AvisosDeRespuesta/i02.png" alt="Sustentar solución" />
          <h3 class="idp_title">Sustentar solución:</h3>
        </div>
      </label>
      <textarea
        class="text_box"
        name="input-7-1"
        id="sustentar"
        label="Aspectos Importantes"
        value=""
        v-model="sustentar"
        placeholder="Sustenta..."
      ></textarea>
    </div>

    <div class="text-center">
      <v-btn class="btn_model" v-on:click="validarSolucion" @click="setModal">
        Guardar solucion
      </v-btn>

      <!-- <v-btn class="btn_model" @click="salir">
        Finalizar
      </v-btn> -->
    </div>
  </div>
</template>

<script>
import { saveFirebaseData } from "../../firebase/saveFirebaseData";
import congratulations from "../pages/congratulations.vue";
import solucionCarita from "../pages/solucionCarita.vue";
import solucionPacman from "../pages/solucionPacman.vue";
import solucionPropia from "../pages/solucionPropia.vue";
// import Konva from "konva";

// import VueDraggableResizable from 'vue-draggable-resizable'

var doc = "";
const { GoogleSpreadsheet } = require("google-spreadsheet");
(async function() {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  doc = new GoogleSpreadsheet("1fI43HtfxLceF9d4wlx1qNKttE4J68xvUo828ykV_CbM");

  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await doc.useServiceAccountAuth({
    client_email: "arianf@dotted-medley-326516.iam.gserviceaccount.com",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgCUx/AqfeaWV0\nL0fGMl0yLFSPk7itNcEe143qjziiCK3hIi8xpNZpeyw5Venb0E9Xjg5SY9uv/n61\nvpDIxIs5DfTE3ycc90iReGCIYHABLC1XHQ6Co8xhljsHtb7ro2kp7880KF5iUMK1\nOwE16SYhsBXUAGrH6fzbZDunQMOHXLrz0TbWfHdh53b9/aiKOmHeJ6NpulGAOtA/\nhKCNylC+KHgDzJiYrAhjGhiMI7O6Hj2bb9PKaP5ceGPJiVHJT1fC8Nz2aH30FpQX\n/IOI+eRZmJbPXDiFfAKhd9aouDK7KfROUnnd/ij9emawCrzAIKCrOJOgKQtQ41kZ\nacA2YfuvAgMBAAECggEAYpEExE6FT6+cMLlKgTMQWK4zR/XshtxDCpA4gm2fs35R\nDd9t1xAYO1EzPEiFuq2T8sfvmiUP9wbndYuRhJsgS6pNub4aJb7QARxukCGptYJb\nslt40lZBad/gObym8mIzNv2ocmCeYe/5MiXzGuZoXeLsP5ktYaYbFuUq76NpQyhg\n5nD9MGIFAD2i6VcOUsFIymhQRlOjZUtJVS3aRB4IrFGqZS//mv8Ig0yfGeSzBghv\nLnX7da6KovjqkhTzKiQKOBQaH2C9oJh5uHTz+T+dDrGoqhNca/2ok8B6oih54R+V\nWxm0Af/LRaJaAojIIF/wHk6VEWA9GfPoxL6WcumrTQKBgQDw2x8QitR0FF8+WICn\npTSUhqX2gOr2FWcDep0Tdan7Hta+az2sN7f1uUallAHeoA/SurvAIbvWn9kfbXvA\nTZqLK3BjKmpfANqvRo6IUTPynxamlf/05gUGAUlHOrl34ieqy6W+E6ZEjX+pCS5m\nJRrAvqE+YtvOIbitj2vo+cPiowKBgQDuH3HQex6GZHtiznaQqZNG8yRxySwIs2Yq\nkSiZtN2i2XCSVzaI4HGiKQF3smyFBiM8XkstYzOeQtNYBo6EsV7y/ZNpdeF1+q/F\nAb2izakKtKVTPFbEskFr/qdZhJA4935p//oz1ew4OHlaLo24vkwBq180LRLLy2BB\nMdeQRl6fhQKBgDW3KL5vt+ILiRJGeqro1UkqnmjTZ5NqQocsGUv1uesffZUKJb76\nzjQnFfJnh+M2n1DIBIdc/p9nFu1DZY4FwKm5Dl+PXhnB/wOIINGWCpfZkxuj6Gmd\nwxELyGPyXNq3vVECCfzSNQqk5Au22Ho/XDAQU7WuJodaTe2nRtG2olExAoGAOomy\nYg0SSPmEt5qH3TJCyWtWZz6MO6tWj1pV/8tNvQ31NZSJDIcYiEPKX5GWSfFjUiDg\nHE1J0DsfV4FtIcO00slxprha77Tr5uNxqgci6kXUaqznq70ihhj5LPGAvvBgvFA4\nQuvxATUo5/mPz33Ak5x8cAgwmbbqd7x4ALi75D0CgYEA5lxafnGk1GhZ/rUjd9tg\nlRDQoBPZi1SjBq4q+kztN3V2wWU/HmVF+ivkvz1W4X96ra7bNgpCSRI3N1Fhx7N1\nAA4gTjY7qxGhF3F62/eb/fLYYj7N6IV7MJnFJiPWEHyXB0qKliO+uTx7AVsEM2aa\nvIPa9JiF3qZYHqjfu5Rd/hY=\n-----END PRIVATE KEY-----\n",
  });

  await doc.loadInfo(); // loads document properties and worksheets
})();

export default {
  components: {
    congratulations,
    solucionCarita,
    solucionPacman,
    solucionPropia
  },
  data() {
    return {
      modalIsActive: false,
      modalIsActive2: false,
      modalIsActive3: false,
      modalIsActive4: false,
      id: this.$route.params.id,
      eleccion: "-",
      text: '',
      aspectos: [],
      sustentar: "",
      respuestas: [],
      pressedC: false,
      pressedP: false,
      pressedM: false,
      opt: "no",
      dialog: false,
    };
  },

  methods: {
    setModal() {
      this.modalIsActive = !this.modalIsActive;
    },
    setModal2() {
      this.modalIsActive2 = !this.modalIsActive2;
    },
    setModal3() {
      this.modalIsActive3 = !this.modalIsActive3;
    },
    setModal4() {
      this.modalIsActive4 = !this.modalIsActive4;
    },
    addToList() {
      this.aspectos.unshift(this.text);
      this.text = '';
    },
    deleteFromList(index) {
      this.aspectos.splice(index, 1);
    },
    guardarSolucion: function(e) {
      this.eleccion = e.currentTarget.getAttribute("id");
      if (this.eleccion == "carita") {
        this.pressedC = true;
        this.pressedP = false;
        this.pressedM = false;
      } else if (this.eleccion == "pacman") {
        this.pressedC = false;
        this.pressedP = true;
        this.pressedM = false;
      } else {
        this.pressedC = false;
        this.pressedP = false;
        this.pressedM = true;
      }
    },
    salir() {
      window.location.href = "/";
    },
    validarSolucion() {
      if (this.eleccion == "pacman") {
        this.opt = "si";
      } else {
        this.opt = "no";
      }
      this.addRow();
      this.sendRow();
      alert("Se guardo la respuesta. Presionar siguiente");
    },
    sendRow() {
      doc.useServiceAccountAuth({
        client_email: "arianf@dotted-medley-326516.iam.gserviceaccount.com",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgCUx/AqfeaWV0\nL0fGMl0yLFSPk7itNcEe143qjziiCK3hIi8xpNZpeyw5Venb0E9Xjg5SY9uv/n61\nvpDIxIs5DfTE3ycc90iReGCIYHABLC1XHQ6Co8xhljsHtb7ro2kp7880KF5iUMK1\nOwE16SYhsBXUAGrH6fzbZDunQMOHXLrz0TbWfHdh53b9/aiKOmHeJ6NpulGAOtA/\nhKCNylC+KHgDzJiYrAhjGhiMI7O6Hj2bb9PKaP5ceGPJiVHJT1fC8Nz2aH30FpQX\n/IOI+eRZmJbPXDiFfAKhd9aouDK7KfROUnnd/ij9emawCrzAIKCrOJOgKQtQ41kZ\nacA2YfuvAgMBAAECggEAYpEExE6FT6+cMLlKgTMQWK4zR/XshtxDCpA4gm2fs35R\nDd9t1xAYO1EzPEiFuq2T8sfvmiUP9wbndYuRhJsgS6pNub4aJb7QARxukCGptYJb\nslt40lZBad/gObym8mIzNv2ocmCeYe/5MiXzGuZoXeLsP5ktYaYbFuUq76NpQyhg\n5nD9MGIFAD2i6VcOUsFIymhQRlOjZUtJVS3aRB4IrFGqZS//mv8Ig0yfGeSzBghv\nLnX7da6KovjqkhTzKiQKOBQaH2C9oJh5uHTz+T+dDrGoqhNca/2ok8B6oih54R+V\nWxm0Af/LRaJaAojIIF/wHk6VEWA9GfPoxL6WcumrTQKBgQDw2x8QitR0FF8+WICn\npTSUhqX2gOr2FWcDep0Tdan7Hta+az2sN7f1uUallAHeoA/SurvAIbvWn9kfbXvA\nTZqLK3BjKmpfANqvRo6IUTPynxamlf/05gUGAUlHOrl34ieqy6W+E6ZEjX+pCS5m\nJRrAvqE+YtvOIbitj2vo+cPiowKBgQDuH3HQex6GZHtiznaQqZNG8yRxySwIs2Yq\nkSiZtN2i2XCSVzaI4HGiKQF3smyFBiM8XkstYzOeQtNYBo6EsV7y/ZNpdeF1+q/F\nAb2izakKtKVTPFbEskFr/qdZhJA4935p//oz1ew4OHlaLo24vkwBq180LRLLy2BB\nMdeQRl6fhQKBgDW3KL5vt+ILiRJGeqro1UkqnmjTZ5NqQocsGUv1uesffZUKJb76\nzjQnFfJnh+M2n1DIBIdc/p9nFu1DZY4FwKm5Dl+PXhnB/wOIINGWCpfZkxuj6Gmd\nwxELyGPyXNq3vVECCfzSNQqk5Au22Ho/XDAQU7WuJodaTe2nRtG2olExAoGAOomy\nYg0SSPmEt5qH3TJCyWtWZz6MO6tWj1pV/8tNvQ31NZSJDIcYiEPKX5GWSfFjUiDg\nHE1J0DsfV4FtIcO00slxprha77Tr5uNxqgci6kXUaqznq70ihhj5LPGAvvBgvFA4\nQuvxATUo5/mPz33Ak5x8cAgwmbbqd7x4ALi75D0CgYEA5lxafnGk1GhZ/rUjd9tg\nlRDQoBPZi1SjBq4q+kztN3V2wWU/HmVF+ivkvz1W4X96ra7bNgpCSRI3N1Fhx7N1\nAA4gTjY7qxGhF3F62/eb/fLYYj7N6IV7MJnFJiPWEHyXB0qKliO+uTx7AVsEM2aa\nvIPa9JiF3qZYHqjfu5Rd/hY=\n-----END PRIVATE KEY-----\n",
      });

      doc.loadInfo();
      var V = [];
      V.push({ id: 11 });
      let resultados = this.respuestas;
      const data = { pregunta6p3: resultados };
      saveFirebaseData(data);
    },
    siguiente() {
      this.dialog = true;
    },
    addRow() {
      this.respuestas.push({
        escenario: 2,
        pregunta: 3,
        parte: 3,
        tinicio: "x",
        tfin: "x",
        tiempo: "x",
        ruta: "x",
        matriz: "x",
        cumplio: this.eleccion != '' ? 'si' : 'no',
        optima: this.opt,
        identProblema: "x",
        aspectos: this.aspectos.length >= 1 ? this.aspectos : ['-'],
        sustentar: this.sustentar,
        errores: "x",
        probado: "x",
        devuelvo: "x",
        direccion: "x",
        for: "x",
        condicional: "x",
        respuesta: "x",
        solucion: "x",
        cantNodos: "x",
        peso: "x",
        respElegida: this.eleccion,
      });
      this.contador += 1;
      this.contS += 1;
      // this.soluciones.push({id:this.contS,nombre: 'Solucion ' + this.contS, con: this.connections,sol: '' })
    },
  },
};
</script>

<style>
@import "../../assets/vistas_styles.css";
@import "../../assets/pregs_styles.css";
</style>
