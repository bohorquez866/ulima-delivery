<template>
  <div class="big_container">
    <div class="titulo_escenario">
      <div class="subtitle">
        <h1>Escenario 2 → Pregunta 5b: ¿Puedes generar la instrucción correcta?</h1>
        <p>Una vez identificado el patrón de desplazamiento del fantasma, ¿serías capaz de ayudar a crear una secuencia de instrucciones utilizando los bloques de manera que, al seguirla la secuencia, puedan llegar a la academia? Tendrás la oportunidad de probar tu solución antes de guardarla y avanzar a la siguiente pregunta.</p>
        <p>Antes de pensar tu solución, revisa <a @click="setModalF" style="text-decoration: underline;">estas indicaciones</a>.</p>
        <p>¿Quieres ver nuevamente el Escenario 2? Haz clic <a @click="setModalScenario" style="text-decoration: underline;">aquí</a>.</p>
        <p>Si requieres ayuda para resolver el Escenario 2, mira el video ubicado en el lado derecho de la pantalla.</p>
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
      
      <div class="modal modalTwo" v-if="modalScenarioIsActive">
          <div class="submodal">
            <modalTwo setModal="setModal"
              ><button class="btn_model" @click="setModalScenario">
                Cerrar
              </button></modalTwo
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
          id="bloque1"
          style="border-radius: 20px"
        >
          <vue-draggable-resizable
            class="preg2c-vdr"
            @dragging="onDrag"
            :x="40"
            :y="20"
            :z="1"
            w="216"
            h="36.6"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b1"
              id="b1"
              class="preg2c-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg2c-vdr"
            @dragging="onDrag"
            :x="40"
            :y="70"
            :z="2"
            w="216"
            h="36.6"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b2"
              id="b2"
              class="preg2c-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg2c-vdr"
            @dragging="onDrag"
            :x="40"
            :y="120"
            :z="3"
            w="216"
            h="36.6"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b3"
              id="b3"
              class="preg2c-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg2c-vdr"
            @dragging="onDrag"
            :x="40"
            :y="170"
            :z="4"
            w="216"
            h="36.6"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b4"
              id="b4"
              class="preg2c-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg2c-vdr"
            @dragging="onDrag"
            :x="40"
            :y="220"
            :z="5"
            w="216"
            h="36.6"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b5"
              id="b5"
              class="preg2c-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg2c-vdr"
            @dragging="onDrag"
            :x="40"
            :y="270"
            :z="6"
            w="216"
            h="36.6"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b6"
              id="b6"
              class="preg2c-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg2c-vdr"
            @dragging="onDrag"
            :x="40"
            :y="320"
            :z="7"
            w="216"
            h="36.6"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b7"
              id="b7"
              class="preg2c-img"
              width="216"
              height="36.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg2c-vdr"
            @dragging="onDrag"
            :x="40"
            :y="370"
            :z="8"
            w="185.4"
            h="171.6"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b8"
              id="b8"
              class="preg2c-img"
              width="185.4"
              height="171.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg2c-vdr"
            @dragging="onDrag"
            :x="250"
            :y="370"
            :z="9"
            w="185.4"
            h="171.6"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b9"
              id="b9"
              class="preg2c-img"
              width="185.4"
              height="171.6"
              @mousedown="setId"
              @mouseup="setId2"
            />
          </vue-draggable-resizable>
          <vue-draggable-resizable
            class="preg2c-vdr"
            @dragging="onDrag"
            :x="40"
            :y="70"
            :z="10"
            w="216"
            h="36.6"
            @resizing="onResize"
            :resizable="false"
            @dragstop="onDragstop"
          >
            <img
              :src="b2"
              id="b2b"
              class="preg2c-img"
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
import modalTwo from '../pages/modal_2.vue';
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
      con: {
        3: 5,
      },
      puntosBorde: [],
    },
    {
      x: 400,
      y: 50,
      id: 2,
      color: 'green',
      con: {
        112: 10,
        3: 1,
        5: 1,
        6: 3,
      },
      puntosBorde: [],
    },
    {
      x: 600,
      y: 50,
      id: 3,
      color: 'yellow',
      con: {
        112: 5,
        2: 1,
        4: 1,
        10: 10,
      },
      puntosBorde: [],
    },
    {
      x: 200,
      y: 200,
      id: 4,
      color: 'green',
      con: {
        3: 1,
        7: 3,
        9: 5,
      },
      puntosBorde: [],
    },
    {
      x: 400,
      y: 200,
      id: 112,
      color: 'blue',
      con: {
        112: 3,
        2: 1,
        8: 5,
      },
      puntosBorde: [],
    },
    {
      x: 600,
      y: 200,
      id: 6,
      color: 'green',
      con: {
        2: 3,
        3: 1,
        5: 5,
      },
      puntosBorde: [],
    },
    {
      x: 200,
      y: 350,
      id: 7,
      color: 'green',
      con: {
        3: 3,
        4: 3,
        9: 1,
        10: 10,
      },
      puntosBorde: [],
    },
    {
      x: 400,
      y: 350,
      id: 8,
      color: 'green',
      con: {
        5: 5,
        6: 5,
        10: 3,
      },
      puntosBorde: [],
    },
    {
      x: 600,
      y: 350,
      id: 9,
      color: 'green',
      con: {
        5: 5,
        6: 5,
        10: 3,
      },
      puntosBorde: [],
    },
  ];

  generarBordes(circles);
  // generarDiagonales()
  return circles;
}

function generarBordes(cirecle) {
  cirecle.forEach((element) => {
    element.puntosBorde.push({
      up: [element.x, element.y - 40],
      right: [element.x + 40, element.y],
      down: [element.x, element.y + 40],
      left: [element.x - 40, element.y],
    });
  });
}

const blocktypes = {
  b1: undefined,
  b2: 'direction',
  b3: 'direction',
  b4: 'direction',
  b5: 'direction',
  b6: undefined,
  b7: undefined,
  b8: 'conditional',
  b9: 'for'
}

const solutions = [
  "b1,b2,b4,b3",
  "b1,b6,b4,b9,b2,b7",
  "b1,b8,b2,b5,b3,b9,b2",
];
const OPTIMAL_SOLUTION = 2; // solucion 3 es la optima; index = 2 en el array

export default {
  components: {
    modalTwo,
    modalThree,
    floatingModal,
  },
  data() {
    return {
      isSolutionSaved: false,
      modalIsActive: false,
      modalIsActiveF: false,
      modalScenarioIsActive: false,
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
      drawningLine: false,
      image: require('@/assets/muestra.jpg'),

      b1: require('@/assets/Bloque01.png'),
      b2: require('@/assets/Bloque02.png'),
      b3: require('@/assets/Bloque03.png'),
      b4: require('@/assets/Bloque04.png'),
      b5: require('@/assets/Bloque05.png'),
      b6: require('@/assets/Bloque06.png'),
      b7: require('@/assets/Bloque07.png'),
      b8: require('@/assets/Bloque08.png'),
      b9: require('@/assets/Bloque09.png'),

      respuestas: [],
      circulo1: 0,
      circulo2: 0,
      conexiones: [],
      ruta: [],
      rutaMatriz: [],
      rutaFantasma: [4, 112, 8, 112, 6, 112, 2, 112],
      contador: 0,
      rutaTemp: [],
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      xtemp: 0,
      ytemp: 0,
      posiciones: {
        b1: {coords: [0, 0], left: 0, top: 0, right: 0, bottom: 0},
        b2: {coords: [0, 0], left: 0, top: 0, right: 0, bottom: 0},
        b3: {coords: [0, 0], left: 0, top: 0, right: 0, bottom: 0},
        b4: {coords: [0, 0], left: 0, top: 0, right: 0, bottom: 0},
        b5: {coords: [0, 0], left: 0, top: 0, right: 0, bottom: 0},
        b6: {coords: [0, 0], left: 0, top: 0, right: 0, bottom: 0},
        b7: {coords: [0, 0], left: 0, top: 0, right: 0, bottom: 0},
        b8: {coords: [0, 0], left: 0, top: 0, right: 0, bottom: 0},
        b9: {coords: [0, 0], left: 0, top: 0, right: 0, bottom: 0},
        b2b: {coords: [0, 0], left: 0, top: 0, right: 0, bottom: 0},
      },
      // tempAbajo: '',
      // tempArriba: '',
      tempAbajo: {id: '', left: 0, top: 0, right: 0, bottom: 0},
      tempArriba: {id: '', left: 0, top: 0, right: 0, bottom: 0},
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
      respElegida: 'x',
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
    setModalScenario() {
      this.modalScenarioIsActive = !this.modalScenarioIsActive;
    },
    
    addVariableAccordingToBlockType(blockId) {
      switch (blocktypes[blockId]) {
        case 'direction':
          this.dir = this.dir + 1;
          break;
        case 'conditional':
          this.cond = this.cond + 1;
          break;
        case 'for':
          this.for = this.for + 1;
          break;
        default:
          break;
      }
    },
    validarSolucion() {
      let val = false;

      const bloque2 = document.getElementById('bloque2');
      const rectBloque2 = bloque2.getBoundingClientRect();
      const newPositionsArray = [];
      // Iteramos el array de posiciones
      for (let key in this.posiciones) {
        const item = document.getElementById(key);
        const rectItem = item.getBoundingClientRect();
        // Comprobamos si la imagen está dentro (Está siendo utilizado)
        if (
          rectItem.left >= rectBloque2.left 
          && rectItem.top >= rectBloque2.top
          && rectItem.right <= rectBloque2.right
          && rectItem.bottom <= rectBloque2.bottom
        ) {
          const newObj = { // TODO: Los componentes "x" e "y" se podrían eliminar, creo que no se usan
            id: key,
            x: rectItem.x,
            y: rectItem.y,
          };
          newPositionsArray.push(newObj);
        }
      }
      const newSortedPositionsArray = newPositionsArray.sort((a, b) => (a.y < b.y) ? -1 : (a.y > b.y) ? 1 : 0);
      let sortedIdsString = '';
      // concatenamos el string con los IDs de los bloques que se utilizaron en orden de arriba hacia abajo
      for (let i = 0; i < newSortedPositionsArray.length; i++) {
        let idOfElement = newSortedPositionsArray[i].id;
        if (idOfElement == "b2b") idOfElement = "b2";
        sortedIdsString += idOfElement;
        this.addVariableAccordingToBlockType(idOfElement);

        if(i < newSortedPositionsArray.length-1) sortedIdsString += ',';
      }
      const indexOfSolution = solutions.indexOf(sortedIdsString);
      val = indexOfSolution != -1

      if (val) {
        this.cum = 'si';
        this.probado = this.probado + 1;
        this.opt = OPTIMAL_SOLUTION === indexOfSolution ? 'si' : 'no';
        this.respElegida = indexOfSolution.toString();
        alert('Respuesta correcta');
      } else {
        this.probado = this.probado + 1;
        alert('Respuesta incorrecta');
        // this.tiempoI = Date.now(); //TODO: En un futuro, Amadeo quiere guardar los tiempos por cada vez que prueba la sol. Por ahora, dejar el tiempoI desde el inicio, no resetearlo
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
        respElegida: this.respElegida,
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
        tI.toString(),
        tf.toString(),
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
    setTempAbajo(_id, _left, _top, _right, _bottom) {
      this.tempAbajo.id = _id;
      this.tempAbajo.left = _left;
      this.tempAbajo.top = _top;
      this.tempAbajo.right = _right;
      this.tempAbajo.bottom = _bottom;
    },
    setTempArriba(_id, _left, _top, _right, _bottom) {
      this.tempArriba.id = _id;
      this.tempArriba.left = _left;
      this.tempArriba.top = _top;
      this.tempArriba.right = _right;
      this.tempArriba.bottom = _bottom;
    },
    onResize: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function(x, y) { // Se ejecuta inmediatamente después de setId
      this.x = x;
      this.y = y;
    },
    setId: function(event) {
      const itemId = event.target.id
      const item = document.getElementById(itemId);
      const rectItem = item.getBoundingClientRect();

      this.setTempAbajo(
        itemId, 
        rectItem.left, 
        rectItem.top, 
        rectItem.right, 
        rectItem.bottom
      );

      console.log('setId', this.tempAbajo);
    },
    setId2: function(event) { // TODO: REVISAR BIEN EL DEVUELVO, hay casos en donde no funciona
      //Revisar que el id del evento sea igual al del tempArriba
      const eventId = event.target.id;
      if(eventId != this.tempArriba.id) { // El mouse ha sido soltado cuando había una superposición de elementos, se debe asignar el tempArriba.id
        const itemId = this.tempAbajo.id;
        const item = document.getElementById(itemId);
        const rectItem = item.getBoundingClientRect();

        this.setTempArriba(
          itemId, 
          rectItem.left, 
          rectItem.top, 
          rectItem.right, 
          rectItem.bottom
        );
      }

      // const bloque1 = document.getElementById('bloque1');
      // const rectBloque1 = bloque1.getBoundingClientRect();
      const bloque2 = document.getElementById('bloque2');
      const rectBloque2 = bloque2.getBoundingClientRect();

      if(
        // Primero, comprobamos que el bloque después del arraste o soltar click esté a la izquierda del espacio2
        (this.tempArriba.left < rectBloque2.left 
        && this.tempArriba.top >= rectBloque2.top
        && this.tempArriba.right < rectBloque2.left
        && this.tempArriba.bottom <= rectBloque2.bottom) 
        && 
        // Segundo, comprobamos que el bloque antes del arrastre haya estado dentro del espacio2
        (this.tempAbajo.left >= rectBloque2.left 
        && this.tempAbajo.top >= rectBloque2.top
        && this.tempAbajo.right <= rectBloque2.right
        && this.tempAbajo.bottom <= rectBloque2.bottom)
      ) {
        // Si ambas condiciones se cumplen, significa que el bloque en cuestión ha sido devuelto
        console.log('devuelto', this.tempArriba.id);
        this.dev = this.dev + 1;
      }

      console.log('setId2', this.tempArriba);
    },
    onDragstop: function(ev) { // Esta se ejecuta primero que setId2
      const itemId = this.tempAbajo.id;
      const item = document.getElementById(itemId);
      const rectItem = item.getBoundingClientRect();

      this.setTempArriba(
        itemId, 
        rectItem.left, 
        rectItem.top, 
        rectItem.right, 
        rectItem.bottom
      );
      
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

.preg2c-vdr {
  border-color: rgba(0, 0, 0, 0.2) !important;
}
.preg2c-img {
  margin: 0;
}
</style>