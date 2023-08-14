<template>
  <div class="big_container">
    <div class="titulo_escenario">
      <div class="subtitle">
        <h1>Pregunta 5 - Parte 2: ¿Puedes generar la instrucción correcta?</h1>

        <p>
          Una vez descubierto el patrón de desplazamiento del fantasma, ¿Puedes
          ayudarlos a generar una instrucción uniendo bloques de tal manera que
          al seguir la secuencia pueda llegar a la academia?
          <br />
          <br />
          Antes de pensar tu solución, revisa estas instrucciones
          <a @click="setModalF">Ver instrucciones</a>
        </p>
        <p>
          Mira el video (a la derecha de la pantalla) para saber cómo responder
          la pregunta 5, parte 2.
        </p>
      </div>
      <p class="ver_sc part">Esta pregunta tiene dos partes: 2/2</p>
      <div class="modal modalThree" v-if="modalIsActive">
        <div class="submodal">
          <modal-three setModal="setModal"
            ><button class="btn_model" @click="setModal">
              Cerrar
            </button></modal-three
          >
        </div>
      </div>

      <div class="modal floatingModal" v-if="modalIsActiveF">
        <div class="submodal">
          <floating-modal setModalF="setModalF"
            ><button class="btn_model" @click="setModalF">
              Cerrar
            </button></floating-modal
          >
        </div>
      </div>
    </div>

    <v-row>
      <v-col class="col_for_margin">
        <v-card
          width="500px"
          height="600px"
          id="bloque2"
          style="border-radius: 20px"
        >
          <vue-draggable-resizable
            class="preg5-vdr"
            @dragging="onDrag"
            :x="40"
            :y="20"
            :z="1"
            w="auto"
            h="auto"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b1"
              id="b1"
              class="preg5-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg5-vdr"
            @dragging="onDrag"
            :x="40"
            :y="70"
            :z="2"
            w="auto"
            h="auto"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b2"
              id="b2"
              class="preg5-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg5-vdr"
            @dragging="onDrag"
            :x="40"
            :y="120"
            :z="3"
            w="auto"
            h="auto"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b3"
              id="b3"
              class="preg5-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg5-vdr"
            @dragging="onDrag"
            :x="40"
            :y="170"
            :z="4"
            w="auto"
            h="auto"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b4"
              id="b4"
              class="preg5-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg5-vdr"
            @dragging="onDrag"
            :x="40"
            :y="220"
            :z="5"
            w="auto"
            h="auto"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b5"
              id="b5"
              class="preg5-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg5-vdr"
            @dragging="onDrag"
            :x="40"
            :y="270"
            :z="6"
            w="auto"
            h="auto"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b6"
              id="b6"
              class="preg5-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg5-vdr"
            @dragging="onDrag"
            :x="40"
            :y="320"
            :z="7"
            w="auto"
            h="auto"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b7"
              id="b7"
              class="preg5-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg5-vdr"
            @dragging="onDrag"
            :x="40"
            :y="370"
            :z="8"
            w="auto"
            h="auto"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b8"
              id="b8"
              class="preg5-img"
              width="185.4"
              height="171.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg5-vdr"
            @dragging="onDrag"
            :x="250"
            :y="370"
            :z="9"
            w="auto"
            h="auto"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b9"
              id="b9"
              class="preg5-img"
              width="185.4"
              height="171.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg5-vdr"
            @dragging="onDrag"
            :x="40"
            :y="70"
            :z="10"
            w="auto"
            h="auto"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b2"
              id="b2b"
              class="preg5-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
        </v-card>
        <div class="tag_for_space">
          <h3>Espacio 1</h3>
        </div>
      </v-col>

      <v-col>
        <v-card
          width="700px"
          height="600px"
          id="bloque2"
          style="border-radius: 20px"
        >
        </v-card>
        <div class="tag_for_space">
          <h3>Espacio 2</h3>
        </div>
      </v-col>
      <v-col>
        <div class="video">
          <h3>¿Cómo debería resolver esta pregunta?</h3>
          <iframe
            width="180"
            height="100"
            src="https://www.youtube.com/embed/YOu9VUCpQPU"
            title="CTtest - Resolución de la parte 2 de la pregunta 5 | By Amadeo Gómez"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </v-col>

      <!-- <v-col cols="4" :key=3>
        <v-card
          width="600px"
          height="600px"
          style="border-radius: 20px">

          <img :src="image" class="rounded" width="340px" height="auto">

        </v-card>
      </v-col> -->
    </v-row>

    <div class="div_button_save_sol">
      <div class="solutions">
        <v-btn class="btn_model" id="probar" v-on:click="validarSolucion">
          Probar solucion
        </v-btn>

        <v-btn
          class="btn_model"
          id="probar"
          v-on:click="
            isSolutionSaved = true;
            guardarSolucion();
          "
        >
          Guardar solucion
        </v-btn>
      </div>

      <div class="div_button_next" v-if="isSolutionSaved">
        <v-btn class="btn_model next_btn_fol" v-on:click="pasarPregunta">
          Siguiente
        </v-btn>
      </div>
    </div>
    <button href="#" class="float" @click="setModal">
      <span>¿Que significan los bloques?</span>
      <h2 class="my-float">?</h2>
    </button>
  </div>
</template>

<script>
import { saveFirebaseData } from '../../firebase/saveFirebaseData';
import modalThree from '../pages/modal_3.vue';
import floatingModal from '../pages/floatingModal5p2.vue';
// import Konva from "konva";
const width = window.innerWidth;
const height = window.innerHeight;
// import VueDraggableResizable from 'vue-draggable-resizable'

var doc = '';
const { GoogleSpreadsheet } = require('google-spreadsheet');
(async function() {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  doc = new GoogleSpreadsheet('1fI43HtfxLceF9d4wlx1qNKttE4J68xvUo828ykV_CbM');

  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await doc.useServiceAccountAuth({
    client_email: 'arianf@dotted-medley-326516.iam.gserviceaccount.com',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgCUx/AqfeaWV0\nL0fGMl0yLFSPk7itNcEe143qjziiCK3hIi8xpNZpeyw5Venb0E9Xjg5SY9uv/n61\nvpDIxIs5DfTE3ycc90iReGCIYHABLC1XHQ6Co8xhljsHtb7ro2kp7880KF5iUMK1\nOwE16SYhsBXUAGrH6fzbZDunQMOHXLrz0TbWfHdh53b9/aiKOmHeJ6NpulGAOtA/\nhKCNylC+KHgDzJiYrAhjGhiMI7O6Hj2bb9PKaP5ceGPJiVHJT1fC8Nz2aH30FpQX\n/IOI+eRZmJbPXDiFfAKhd9aouDK7KfROUnnd/ij9emawCrzAIKCrOJOgKQtQ41kZ\nacA2YfuvAgMBAAECggEAYpEExE6FT6+cMLlKgTMQWK4zR/XshtxDCpA4gm2fs35R\nDd9t1xAYO1EzPEiFuq2T8sfvmiUP9wbndYuRhJsgS6pNub4aJb7QARxukCGptYJb\nslt40lZBad/gObym8mIzNv2ocmCeYe/5MiXzGuZoXeLsP5ktYaYbFuUq76NpQyhg\n5nD9MGIFAD2i6VcOUsFIymhQRlOjZUtJVS3aRB4IrFGqZS//mv8Ig0yfGeSzBghv\nLnX7da6KovjqkhTzKiQKOBQaH2C9oJh5uHTz+T+dDrGoqhNca/2ok8B6oih54R+V\nWxm0Af/LRaJaAojIIF/wHk6VEWA9GfPoxL6WcumrTQKBgQDw2x8QitR0FF8+WICn\npTSUhqX2gOr2FWcDep0Tdan7Hta+az2sN7f1uUallAHeoA/SurvAIbvWn9kfbXvA\nTZqLK3BjKmpfANqvRo6IUTPynxamlf/05gUGAUlHOrl34ieqy6W+E6ZEjX+pCS5m\nJRrAvqE+YtvOIbitj2vo+cPiowKBgQDuH3HQex6GZHtiznaQqZNG8yRxySwIs2Yq\nkSiZtN2i2XCSVzaI4HGiKQF3smyFBiM8XkstYzOeQtNYBo6EsV7y/ZNpdeF1+q/F\nAb2izakKtKVTPFbEskFr/qdZhJA4935p//oz1ew4OHlaLo24vkwBq180LRLLy2BB\nMdeQRl6fhQKBgDW3KL5vt+ILiRJGeqro1UkqnmjTZ5NqQocsGUv1uesffZUKJb76\nzjQnFfJnh+M2n1DIBIdc/p9nFu1DZY4FwKm5Dl+PXhnB/wOIINGWCpfZkxuj6Gmd\nwxELyGPyXNq3vVECCfzSNQqk5Au22Ho/XDAQU7WuJodaTe2nRtG2olExAoGAOomy\nYg0SSPmEt5qH3TJCyWtWZz6MO6tWj1pV/8tNvQ31NZSJDIcYiEPKX5GWSfFjUiDg\nHE1J0DsfV4FtIcO00slxprha77Tr5uNxqgci6kXUaqznq70ihhj5LPGAvvBgvFA4\nQuvxATUo5/mPz33Ak5x8cAgwmbbqd7x4ALi75D0CgYEA5lxafnGk1GhZ/rUjd9tg\nlRDQoBPZi1SjBq4q+kztN3V2wWU/HmVF+ivkvz1W4X96ra7bNgpCSRI3N1Fhx7N1\nAA4gTjY7qxGhF3F62/eb/fLYYj7N6IV7MJnFJiPWEHyXB0qKliO+uTx7AVsEM2aa\nvIPa9JiF3qZYHqjfu5Rd/hY=\n-----END PRIVATE KEY-----\n',
  });

  await doc.loadInfo(); // loads document properties and worksheets
})();

function generateTargets() {
  const circles = [
    {
      x: 200,
      y: 50,
      id: 1,
      color: 'green',
    },
    {
      x: 400,
      y: 50,
      id: 2,
      color: 'green',
    },
    {
      x: 600,
      y: 50,
      id: 3,
      color: 'yellow',
    },
    {
      x: 200,
      y: 200,
      id: 4,
      color: 'green',
    },
    {
      x: 400,
      y: 200,
      id: 112,
      color: 'blue',
    },
    {
      x: 600,
      y: 200,
      id: 6,
      color: 'green',
    },
    {
      x: 200,
      y: 350,
      id: 7,
      color: 'green',
    },
    {
      x: 400,
      y: 350,
      id: 8,
      color: 'green',
    },
    {
      x: 600,
      y: 350,
      id: 9,
      color: 'green',
    },
  ];

  // generarDiagonales()
  return circles;
}

export default {
  components: {
    modalThree,
    floatingModal,
  },
  data() {
    return {
      isSolutionSaved: false,
      modalIsActive: false,
      modalIsActiveF: false,
      targets: generateTargets(),
      anguloDir: {
        up: 90,
        upD: 45,
        right: 0,
        downR: 315,
        down: 270,
        downL: 225,
        left: 180,
        upL: 135,
      },
      stageSize: {
        width: width,
        height: height,
      },
      connections: [],
      image: require('@/assets/muestra.jpg'),

      b1: require('@/assets/Bloque01.png'),
      b2: require('@/assets/Bloque02.png'),
      b10: require('@/assets/Bloque02.png'),

      b3: require('@/assets/Bloque03.png'),
      b4: require('@/assets/Bloque04.png'),
      b5: require('@/assets/Bloque05.png'),
      b6: require('@/assets/Bloque06.png'),
      b7: require('@/assets/Bloque07.png'),
      b8: require('@/assets/Bloque08.png'),
      b9: require('@/assets/Bloque09.png'),

      respuestas: [],
      conexiones: [],
      ruta: [],
      contador: 0,
      rutaTemp: [],
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      xtemp: 0,
      ytemp: 0,
      posiciones: {
        b1: [0, 0],
        b2: [0, 0],
        b3: [0, 0],
        b4: [0, 0],
        b5: [0, 0],
        b6: [0, 0],
        b7: [0, 0],
        b8: [0, 0],
        b9: [0, 0],
        b2b: [0, 0],
      },
      tempAbajo: '',
      tempArriba: '',
      tiempoI: 0,
      tiempoF: 0,
      tiMatriz: 0,
      tfMAtriz: 0,
      cum: 'no',
      opt: 'no',
      cond: 0,
      for: 0,
      dir: 0,
      dev: 0,
      errores: 0,
      probado: 0,
      id: this.$route.params.id,
    };
  },

  methods: {
    setModal() {
      this.modalIsActive = !this.modalIsActive;
    },
    setModalF() {
      this.modalIsActiveF = !this.modalIsActiveF;
    },

    validarSolucion() {
      var val = false;
      if (
        ((this.posiciones['b2'][1] - this.posiciones['b1'][1] < 70 &&
          this.posiciones['b2'][1] - this.posiciones['b1'][1] > 0) ||
          (this.posiciones['b2b'][1] - this.posiciones['b1'][1] < 70 &&
            this.posiciones['b2b'][1] - this.posiciones['b1'][1] > 0)) &&
        ((this.posiciones['b4'][1] - this.posiciones['b2'][1] < 70 &&
          this.posiciones['b4'][1] - this.posiciones['b2'][1] > 0) ||
          (this.posiciones['b4'][1] - this.posiciones['b2b'][1] < 70 &&
            this.posiciones['b4'][1] - this.posiciones['b2b'][1] > 0)) &&
        this.posiciones['b3'][1] - this.posiciones['b4'][1] < 70 &&
        this.posiciones['b3'][1] - this.posiciones['b4'][1] > 0
      ) {
        var element3 = document.getElementById('bloque2');
        var rect3 = element3.getBoundingClientRect();
        val = true;
        this.cum = 'si';

        if (this.posiciones['b9'][0] > rect3.left - 78) {
          this.for = this.for + 1;
        }
        if (this.posiciones['b8'][0] > rect3.left - 78) {
          this.cond = this.cond + 1;
        }
        if (this.posiciones['b3'][0] > rect3.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b2'][0] > rect3.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b4'][0] > rect3.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b5'][0] > rect3.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b2b'][0] > rect3.left - 78) {
          this.dir = this.dir + 1;
        }
      }
      if (
        this.posiciones['b6'][1] - this.posiciones['b1'][1] < 70 &&
        this.posiciones['b6'][1] - this.posiciones['b1'][1] > 0 &&
        this.posiciones['b4'][1] - this.posiciones['b6'][1] < 70 &&
        this.posiciones['b4'][1] - this.posiciones['b6'][1] > 0 &&
        this.posiciones['b9'][1] - this.posiciones['b4'][1] < 70 &&
        this.posiciones['b9'][1] - this.posiciones['b4'][1] > 0 &&
        ((this.posiciones['b2'][1] - this.posiciones['b9'][1] < 70 &&
          this.posiciones['b2'][1] - this.posiciones['b9'][1] > 0) ||
          (this.posiciones['b2b'][1] - this.posiciones['b9'][1] < 70 &&
            this.posiciones['b2b'][1] - this.posiciones['b9'][1] > 0)) &&
        // this.posiciones['b9'][0]-this.posiciones['b2'][0]>20 && this.posiciones['b9'][0]-this.posiciones['b2'][0]<200 &&
        ((this.posiciones['b7'][1] - this.posiciones['b2'][1] < 70 &&
          this.posiciones['b7'][1] - this.posiciones['b2'][1]) ||
          (this.posiciones['b7'][1] - this.posiciones['b2b'][1] < 70 &&
            this.posiciones['b7'][1] - this.posiciones['b2b'][1])) > 0
        // this.posiciones['b9'][0]-this.posiciones['b7'][0]>20 && this.posiciones['b9'][0]-this.posiciones['b7'][0]<200
      ) {
        var element2 = document.getElementById('bloque2');
        var rect2 = element2.getBoundingClientRect();
        val = true;
        this.cum = 'si';
        if (this.posiciones['b9'][0] > rect2.left - 78) {
          this.for = this.for + 1;
        }
        if (this.posiciones['b8'][0] > rect2.left - 78) {
          this.cond = this.cond + 1;
        }
        if (this.posiciones['b3'][0] > rect2.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b2'][0] > rect2.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b4'][0] > rect2.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b5'][0] > rect2.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b2b'][0] > rect2.left - 78) {
          this.dir = this.dir + 1;
        }
      }
      if (
        this.posiciones['b8'][1] - this.posiciones['b1'][1] < 70 &&
        this.posiciones['b8'][1] - this.posiciones['b1'][1] > 0 &&
        ((this.posiciones['b2'][1] - this.posiciones['b8'][1] < 70 &&
          this.posiciones['b2'][1] - this.posiciones['b8'][1] > 0) ||
          (this.posiciones['b2b'][1] - this.posiciones['b8'][1] < 70 &&
            this.posiciones['b2b'][1] - this.posiciones['b8'][1] > 0)) &&
        ((this.posiciones['b5'][1] - this.posiciones['b2'][1] < 70 &&
          this.posiciones['b5'][1] - this.posiciones['b2'][1] > 0) ||
          (this.posiciones['b5'][1] - this.posiciones['b2b'][1] < 70 &&
            this.posiciones['b5'][1] - this.posiciones['b2b'][1] > 0)) &&
        this.posiciones['b3'][1] - this.posiciones['b5'][1] < 70 &&
        this.posiciones['b3'][1] - this.posiciones['b5'][1] > 0 &&
        this.posiciones['b9'][1] - this.posiciones['b3'][1] < 100 &&
        this.posiciones['b9'][1] - this.posiciones['b3'][1] > 0 &&
        ((this.posiciones['b2b'][1] - this.posiciones['b9'][1] < 70 &&
          this.posiciones['b2b'][1] - this.posiciones['b9'][1] > 0) ||
          (this.posiciones['b2'][1] - this.posiciones['b9'][1] < 70 &&
            this.posiciones['b2'][1] - this.posiciones['b9'][1] > 0))
      ) {
        val = true;
        this.cum = 'si';
        this.opt = 'si';
        var element = document.getElementById('bloque2');
        var rect = element.getBoundingClientRect();
        if (this.posiciones['b9'][0] > rect.left - 78) {
          this.for = this.for + 1;
        }
        if (this.posiciones['b8'][0] > rect.left - 78) {
          this.cond = this.cond + 1;
        }
        if (this.posiciones['b3'][0] > rect.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b2'][0] > rect.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b4'][0] > rect.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b5'][0] > rect.left - 78) {
          this.dir = this.dir + 1;
        }
        if (this.posiciones['b2b'][0] > rect.left - 78) {
          this.dir = this.dir + 1;
        }
      }

      if (val) {
        this.cum = 'si';
        this.probado = this.probado + 1;

        alert('Respuesta correcta');
      } else {
        // this.enviarData()
        this.probado = this.probado + 1;

        alert('Respuesta incorrecta');

        this.tiempoI = Date.now();

        this.errores = this.errores + 1;
      }
      return val;
    },
    guardarSolucion() {
      alert("Se guardó la respuesta, presiona 'siguiente.'");
      this.enviarData();
    },
    pasarPregunta() {
      this.$router.push({ name: 'Pregunta3a' });
    },
    sendRow() {
      var V = [];
      V.push({ id: 11 });
      let resultados = this.respuestas;
      const data = { pregunta5p2: resultados };
      saveFirebaseData(data);
    },
    addRow(
      err,
      ruta,
      ip,
      aspectos,
      tiempo,
      contador,
      tiempoI,
      tiempoF,
      matriz,
      vPeso,
      nodoF,
    ) {
      this.respuestas.push({
        escenario: 2,
        pregunta: 2,
        parte: 2,
        tinicio: tiempoI,
        tfin: tiempoF,
        tiempo: tiempo,
        ruta: ruta,
        matriz: matriz,
        cumplio: nodoF,
        optima: this.opt,
        identProblema: '-',
        aspectos: '-',
        sustentar: '',
        errores: this.errores,
        probado: this.probado,
        devuelvo: this.dev,
        direccion: this.dir,
        for: this.for,
        condicional: this.cond,
        respuesta: 'x',
        solucion: 'x',
        cantNodos: 'x',
        peso: 'x',
      });
      this.contador += 1;
      this.contS += 1;
      // this.soluciones.push({id:this.contS,nombre: 'Solucion ' + this.contS, con: this.connections,sol: '' })
    },
    enviarData: function(event) {
      this.tiempoF = Date.now();
      var tI = new Date(this.tiempoI);
      var tf = new Date(this.tiempoF);
      var tt = this.tiempoF - this.tiempoI;

      this.addRow(
        this.errores,
        '-',
        1,
        1,
        tt / 1000,
        1,
        tI.toUTCString(),
        tf.toUTCString(),
        '-',
        this.cum,
        this.cum,
      );
      this.sendRow();
      alert('Se guardo la respuesta. Presionar siguiente');

      if (event) {
        alert('Se guardo la respuesta. Presionar siguiente');
      }
    },
    onResize: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    },
    setId: function(event) {
      console.log('setting id');
      this.tempAbajo = event.target.id;
      this.posiciones[event.target.id][0] = this.xtemp;
      this.posiciones[event.target.id][1] = this.ytemp;
    },
    setId2: function(event) {
      console.log('setting id2');
      this.tempArriba = event.target.id;
      var element = document.getElementById('bloque2');
      var rect = element.getBoundingClientRect();
      if (this.tempAbajo == this.tempArriba) {
        if (
          this.posiciones[this.tempArriba][0] > rect.left - 78 &&
          this.xtemp < rect.left - 78
        ) {
          this.dev = this.dev + 1;
        }
        this.posiciones[this.tempArriba][0] = this.xtemp;
        this.posiciones[this.tempArriba][1] = this.ytemp;
      } else {
        if (
          this.posiciones[this.tempArriba][0] > rect.left - 78 &&
          this.xtemp < rect.left - 78
        ) {
          this.dev = this.dev + 1;
        }
        this.posiciones[this.tempAbajo][0] = this.xtemp;
        this.posiciones[this.tempAbajo][1] = this.ytemp;
      }
    },
    onDragStop: function(ev) {
      this.xtemp = this.x;
      this.ytemp = this.y;
      return ev;
    },
    startTimer: function() {
      this.tiempoI = Date.now();
    },
  },
  beforeMount() {
    this.startTimer();
  },
};
</script>

<style>
@import '../../assets/vistas_styles.css';
@import '../../assets/pregs_styles.css';

.preg5-img {
  margin: 0;
}
.preg5-vdr {
  border: none !important;
}
</style>
