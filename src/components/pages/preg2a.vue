<template>
  <div id="app">
    <div class="big_container">
      <div class="titulo_escenario">
        <div class="subtitle">
          <h1>Pregunta 4: Descubre el patron del fantasma</h1>
          <p>
            Ambos han intentado los siguientes caminos, pero no han logrado
            llegar a la academia
            <strong>(ver imagen)</strong>. Con esta información, descubre el
            patrón de desplazamiento del fantasma rosado.
            <br />
            <br />
            ¿Quieres ver nuevamente el Escenario 2?
            <a @click="setModal">Ver escenario 2</a>
          </p>
          <p>
            Mira el video (a la derecha de la pantalla) para saber cómo
            responder la pregunta 4
          </p>
        </div>

        <!-- <p class="part">Esta pregunta tiene dos partes: 1/2</p> -->
        <div class="modal modalTwo" v-if="modalIsActive">
          <div class="submodal">
            <modal-two setModal="setModal"
              ><button class="btn_model" @click="setModal">
                Cerrar
              </button></modal-two
            >
          </div>
        </div>
        <!-- <button class="btn_model star_btn ver_sc" @click="setModal">Ver escenario 2</button> -->
      </div>

      <div class="over_canvas">
        <div class="left_box">
          <v-card width="1000px" height="auto">
            <v-stage
              class="stage"
              ref="stage"
              :config="stageSize"
              @mousedown="handleMouseDown"
              @mouseup="handleMouseUp"
              @mousemove="handleMouseMove"
            >
              <v-layer>
                <v-arrow
                  v-for="line in connections"
                  :key="line.id"
                  :config="{
                    stroke: 'black',
                    points: line.points,
                  }"
                />
                <v-circle
                  v-for="target in targets"
                  :key="target.id"
                  :config="{
                    x: target.x,
                    y: target.y,
                    id: target.id,
                    radius: 40,
                    stroke: 'whitesmoke',
                    fill: target.color,
                  }"
                />

                <v-star
                  :key="1"
                  :config="{
                    x: 200,
                    y: 350,
                    id: 123,
                    stroke: 'black',
                    fill: 'yellow',
                    numPoints: 6,
                    innerRadius: 10,
                    outerRadius: 10,
                  }"
                />
              </v-layer>
              <v-layer ref="dragLayer"></v-layer>
            </v-stage>
          </v-card>

          <div class="table_score">
            <div class="leyenda">
              <h4>Leyenda:</h4>
              <img src="../../assets/leyenda_Pregunta_4.png" alt="Leyenda" />
            </div>
            <div class="img_fantasma">
              <h3>Caminos realizados:</h3>
              <img :src="image" />
            </div>
          </div>

          <div class="div_button_save_sol">
            <!-- <button class="btn_model">
              <router-link class="ro_in" :to="{ name: 'IntroEscenario2' }">Volver</router-link>
            </button> -->
            <button
              v-if="list.length && sustentar.length"
              class="btn_model"
              v-on:click="
                isSolutionSaved = true;
                enviarData($event);
              "
            >
              Guardar Solución
            </button>
            <button v-else class="btn_model" @click="showModal">
              Guardar Solución
            </button>

            <!-- <button class="btn_model" v-on:click="enviarData">
          Añadir Solución
        </button> -->
          </div>
        </div>

        <div class="text_sect">
          <!-- <div class="instruccion">
            <button class="btn_model start_btn" v-on:click="startTimer">Start</button>
          </div> -->
          <div class="idp">
            <div class="question_logo">
              <img
                src="../../assets/AvisosDeRespuesta/i03.png"
                alt="Identificacion del problema"
              />
              <h3 class="idp_title">Identificación del problema:</h3>
              <span
                :style="{
                  height: '1.5rem',
                  width: '1.5rem',
                  'align-self': 'center',
                  'margin-left': '0.5rem',
                }"
                title="¿Cuál es el problema que enfrentan los personajes en esta pregunta? Escribe y detalla el problema que crees que impide a los personajes a llegar a su destino."
              >
                <svg
                  id="info-circle"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="gray"
                    d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"
                  ></path>
                </svg>
              </span>
            </div>

            <textarea
              class="text_box"
              name="input-7-1"
              id="ident"
              label="Identificacion del problema"
              value=""
            ></textarea>
          </div>

          <!-- TO DO Element -->

          <div class="todo-list">
            <div class="question_logo">
              <img
                src="../../assets/AvisosDeRespuesta/i01.png"
                alt="Aspectos importantes"
              />
              <h3>Aspectos Importantes</h3>
              <span
                :style="{
                  height: '1.5rem',
                  width: '1.5rem',
                  'align-self': 'center',
                  'margin-left': '0.5rem',
                }"
                title="Coloca todos los aspectos y/o consideraciones que tomaste en cuenta para plantear tu camino. Mientras más aspectos encontrados, mejor."
              >
                <svg
                  id="info-circle"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="gray"
                    d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"
                  ></path>
                </svg>
              </span>
            </div>

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
              <li v-for="(item, index) in list" :key="index">
                <span>
                  <span class="">{{ item }}</span>
                </span>
                <button @click="deleteFromList(index)">Eliminar</button>
              </li>
            </ul>
          </div>
          <!-- TO DO Element end -->

          <div class="idp">
            <div class="question_logo">
              <img
                src="../../assets/AvisosDeRespuesta/i02.png"
                alt="Sustentar solución"
              />
              <h3 class="idp_title">Sustentar solución:</h3>
              <span
                :style="{
                  height: '1.5rem',
                  width: '1.5rem',
                  'align-self': 'center',
                  'margin-left': '0.5rem',
                }"
                title="Explica por qué has elegido ese camino como el mejor."
              >
                <svg
                  id="info-circle"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="gray"
                    d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"
                  ></path>
                </svg>
              </span>
            </div>

            <textarea
              class="text_box"
              name="input-7-1"
              id="sustentar"
              label="Sustentar solucion"
              value=""
              v-model="sustentar"
            ></textarea>
          </div>

          <div class="video">
            <h3>¿Cómo debería resolver esta pregunta?</h3>
            <iframe
              width="361"
              height="225"
              src="https://www.youtube.com/embed/QECsEh_GJ88"
              title="CTtest - Resolución de la pregunta 4 | By Amadeo Gómez"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <!-- Div para Mapa -->
          <!-- <div class="figura">
                <img src="../../assets/escenario_2_fantasma/escenario_2_fantasma.png" alt="Figura 2" width="500px" height="auto">
                <h3>Mapa</h3>
            </div> -->

          <div class="div_button_next">
            <button
              v-if="isSolutionSaved"
              class="btn_model next_btn_fol"
              @click="submit"
            >
              <router-link class="ro_in" :to="{ name: 'Pregunta2b' }">
                Siguiente
              </router-link>
            </button>
          </div>
        </div>

        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="text-h5">
              Ups!
            </v-card-title>

            <v-card-text>
              Camino incorrecto
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="intentar">
                Intentar <br />
                denuevo
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <Modal ref="modal">
      <h2>Aviso</h2>
      <p>
        ¿Está seguro de pasar a la siguiente pregunta sin llenar los aspectos
        importantes o la sustentación o identificación del problema?
      </p>
      <div>
        <button class="btn_model next_btn_fol" @click="hideModal">
          cancelar
        </button>
        <button
          class="btn_model"
          v-on:click="
            isSolutionSaved = true;
            enviarData($event);
            hideModal();
          "
        >
          Guardar Solución
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { saveFirebaseData } from '../../firebase/saveFirebaseData';
import ModalTwo from '../pages/modal_2.vue';
import Modal from '@/components/modal.vue';
const isResponsive = window.innerWidth < 1377 ? 1000 : 1200;
const isResponsiveH = window.innerHeight < 768 ? 500 : 400;

import Konva from 'konva';
const width = isResponsive;
const height = isResponsiveH;

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
      color: '#3CCF4E', 
      con: { 3: 5 }, 
      puntosBorde: [] 
    },
    {
      x: 400,
      y: 50,
      id: 2,
      color: '#3CCF4E',
      con: { 112: 10, 3: 1, 5: 1, 6: 3 },
      puntosBorde: [],
    },
    {
      x: 600,
      y: 50,
      id: 3,
      color: '#3CCF4E',
      con: { 112: 5, 2: 1, 4: 1, 10: 10 },
      puntosBorde: [],
    },
    {
      x: 200,
      y: 200,
      id: 4,
      color: '#3CCF4E',
      con: { 3: 1, 7: 3, 9: 5 },
      puntosBorde: [],
    },
    {
      x: 400,
      y: 200,
      id: 112,
      color: '#1976D2',
      con: { 112: 3, 2: 1, 8: 5 },
      puntosBorde: [],
    },
    {
      x: 600,
      y: 200,
      id: 6,
      color: '#3CCF4E',
      con: { 2: 3, 3: 1, 5: 5 },
      puntosBorde: [],
    },
    {
      x: 200,
      y: 350,
      id: 7,
      color: '#3CCF4E',
      con: { 3: 3, 4: 3, 9: 1, 10: 10 },
      puntosBorde: [],
    },
    {
      x: 400,
      y: 350,
      id: 8,
      color: '#3CCF4E',
      con: { 5: 5, 6: 5, 10: 3 },
      puntosBorde: [],
    },
    {
      x: 600,
      y: 350,
      id: 9,
      color: '#3CCF4E',
      con: { 5: 5, 6: 5, 10: 3 },
      puntosBorde: [],
    },
  ];

  generarBordes(circles);
  // generarDiagonales()
  return circles;
}

function generateTargets2() {
  const circles = [
    { x: 228, y: 78, id: 11, color: 'green', con: { 3: 5 }, puntosBorde: [] },
    {
      x: 228,
      y: 50,
      id: 12,
      color: 'green',
      con: { 112: 10, 3: 1, 5: 1, 6: 3 },
      puntosBorde: [],
    },
    {
      x: 600,
      y: 50,
      id: 13,
      color: 'green',
      con: { 112: 5, 2: 1, 4: 1, 10: 10 },
      puntosBorde: [],
    },
    {
      x: 200,
      y: 200,
      id: 14,
      color: 'green',
      con: { 3: 1, 7: 3, 9: 5 },
      puntosBorde: [],
    },
    {
      x: 400,
      y: 200,
      id: 15,
      color: 'green',
      con: { 112: 3, 2: 1, 8: 5 },
      puntosBorde: [],
    },
    {
      x: 600,
      y: 200,
      id: 16,
      color: 'green',
      con: { 2: 3, 3: 1, 5: 5 },
      puntosBorde: [],
    },
    {
      x: 200,
      y: 350,
      id: 1112,
      color: 'blue',
      con: { 3: 3, 4: 3, 9: 1, 10: 10 },
      puntosBorde: [],
    },
    {
      x: 400,
      y: 350,
      id: 18,
      color: 'green',
      con: { 5: 5, 6: 5, 10: 3 },
      puntosBorde: [],
    },
    {
      x: 600,
      y: 350,
      id: 19,
      color: 'green',
      con: { 5: 5, 6: 5, 10: 3 },
      puntosBorde: [],
    },
  ];

  generarBordes(circles);
  // generarDiagonales()
  return circles;
}

function generarBordes(circle) {
  circle.forEach((element) => {
    element.puntosBorde.push({
      up: [element.x, element.y - 40],
      right: [element.x + 40, element.y],
      down: [element.x, element.y + 40],
      left: [element.x - 40, element.y],
    });
  });
}
export default {
  components: {
    ModalTwo,
    Modal,
  },
  data() {
    return {
      isSolutionSaved: false,
      targets: generateTargets(),
      targets2: generateTargets2(),
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
      modalIsActive: false,
      list: [],
      text: '',
      connections: [],
      drawningLine: false,
      image: require('@/assets/ejemplo.jpg'),
      respuestas: [],
      circulo1: 0,
      circulo2: 0,
      conexiones: [],
      ruta: [],
      rutaMatriz: [],
      tiempoI: 0,
      tiempoF: 0,
      dialog: false,
      tiMatriz: 0,
      aspectos: '',
      sustentar: '',
      ident: '',

      tfMAtriz: 0,
      matrizT: [],
      rutaCorrecta: [112, 4, 112, 2, 112, 6, 112, 8, 112],
      rutaTemp: [112],
      cump: 'no',
      id: this.$route.params.id,
      inicio: false,
      errores: 0,
    };
  },

  methods: {
    showModal() {
      this.$refs.modal.showModal();
    },
    hideModal() {
      this.$refs.modal.hideModal();
    },
    setModal() {
      this.modalIsActive = !this.modalIsActive;
    },
    // to do
    addToList() {
      this.list.unshift(this.text);
      this.text = '';
    },

    deleteFromList(index) {
      this.list.splice(index, 1);
    },

    handleMouseDown(e) {
      const onCircle = e.target instanceof Konva.Circle;

      if (!onCircle) {
        return;
      }
      this.circulo1 = e.target.id();
      if (this.circulo1 == 112) {
        this.inicio = true;
      }
      if (this.circulo1 != 112 && this.inicio == false) {
        return;
      }

      this.drawningLine = true;

      this.connections.push({
        id: Date.now(),
        points: [e.target.x(), e.target.y()],
      });

      this.tiMatriz = Date.now();
    },

    intentar() {
      this.dialog = false;
      this.cleanRoute();
    },
    cleanRoute() {
      this.connections = [];
      this.conexiones = [];
      this.pesos = [];
      this.ruta = [];
      this.rutaMatriz = [];
      this.rutaTemp = [112];
    },
    submit() {
      this.$router.replace({ name: 'Pregunta2b' });
      // window.location.href = "/escenario1/pregunta2b/" + this.id;
    },
    handleMouseMove(e) {
      if (!this.drawningLine) {
        return;
      }
      const pos = e.target.getStage().getPointerPosition();
      const lastLine = this.connections[this.connections.length - 1];
      lastLine.points = [lastLine.points[0], lastLine.points[1], pos.x, pos.y];
    },
    sinD(angle) {
      var r = Math.round(40 * Math.sin((angle * Math.PI) / 180));

      return r;
    },
    cosD(angle) {
      var r = Math.round(40 * Math.cos((angle * Math.PI) / 180));

      return r;
    },
    handleMouseUp(e) {
      const onCircle = e.target instanceof Konva.Circle;
      if (!onCircle) {
        return;
      }
      this.drawningLine = false;
      const lastLine = this.connections[this.connections.length - 1];
      var dir = this.calcularDireccion(
        lastLine.points[0],
        lastLine.points[1],
        e.target.x(),
        e.target.y(),
      );
      var x1 = this.anguloDir[dir.v1];
      var x2 = this.anguloDir[dir.v2];
      var y1 = this.anguloDir[dir.v1];
      var y2 = this.anguloDir[dir.v2];

      this.circulo2 = e.target.id();
      this.conexiones.push({
        p1: this.circulo1,
        p2: this.circulo2,
      });
      lastLine.points = [
        lastLine.points[0] + this.cosD(x1),
        lastLine.points[1] + -1 * this.sinD(y1),
        e.target.x() + this.cosD(x2),
        e.target.y() + -1 * this.sinD(y2),
      ];
      this.tfMatriz = Date.now();
      var tiempoTotal = this.tfMatriz - this.tiMatriz;
      this.matrizT.push(tiempoTotal);

      this.rutaTemp.push(this.circulo2);
      this.validarSolucion();
    },
    calcularDireccion(x1, y1, x2, y2) {
      var v1 = '';
      var v2 = '';
      if (x1 < x2 && y1 == y2) {
        v1 = 'right';
        v2 = 'left';
      } else if (x1 > x2 && y1 == y2) {
        v1 = 'left';
        v2 = 'right';
      } else if (x1 == x2 && y1 < y2) {
        v1 = 'down';
        v2 = 'up';
      } else if (x1 == x2 && y1 > y2) {
        v1 = 'up';
        v2 = 'down';
      } else if (x1 <= x2 && y1 > y2) {
        v1 = 'upD';
        v2 = 'downL';
      } else if (x1 > x2 && y1 < y2) {
        v1 = 'downL';
        v2 = 'upD';
      } else if (x1 < x2 && y1 < y2) {
        v1 = 'downR';
        v2 = 'upL';
      } else if (x1 > x2 && y1 > y2) {
        v1 = 'upL';
        v2 = 'downR';
      }

      return { v1, v2 };
    },
    sendRow() {
      var V = [];
      V.push({ id: 11 });
      const data = { pregunta4: this.respuestas };
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
        pregunta: 1,
        parte: 1,
        tinicio: tiempoI,
        tfin: tiempoF,
        tiempo: tiempo,
        ruta: ruta,
        matriz: matriz,
        cumplio: nodoF,
        optima: '-',
        identProblema: this.ident,
        aspectos: this.list,
        sustentar: this.sustentar,
        errores: this.errores,
        probado: '-',
        devuelvo: '-',
        direccion: '-',
        for: '-',
        condicional: '-',
        respuesta: 'x',
        solucion: 'x',
        cantNodos: 'x',
        peso: 'x',
      });
      this.contador += 1;
      this.contS += 1;
      // this.soluciones.push({id:this.contS,nombre: 'Solucion ' + this.contS, con: this.connections,sol: '' })
    },
    getRuta() {
      var total = '112';

      this.conexiones.forEach((element) => {
        this.totalNodos += 1;
        this.rutaMatriz.push(element.p2);
        total = total.concat(' ,');
        total = total.concat(element.p2);
      });

      return total;
    },
    enviarData: function(event) {
      this.tiempoF = Date.now();
      var tI = new Date(this.tiempoI);
      var tf = new Date(this.tiempoF);
      var tt = this.tiempoF - this.tiempoI;
      this.aspectos = document.getElementById('aspectos').value;
      this.sustentar = document.getElementById('sustentar').value;
      this.ident = document.getElementById('ident').value;
      var rutaT = this.getRuta();
      this.addRow(
        1,
        rutaT,
        1,
        1,
        tt / 1000,
        1,
        tI.toString(),
        tf.toString(),
        this.getMatrizT(),
        1,
        this.validarSolucion(),
      );
      this.sendRow();
      if (event) {
        alert('Se guardo la respuesta. Presionar siguiente');
      }
    },
    startTimer: function() {
      this.tiempoI = Date.now();
    },
    getMatrizT() {
      var total = '';

      this.matrizT.forEach((element) => {
        total = total.concat(element / 1000);
        total = total.concat(' ,');
      });

      return total;
    },
    validarSolucion() {
      var val = 'si';
      for (var i = 0; i < this.rutaTemp.length; i++) {
        if (this.rutaTemp[i] != this.rutaCorrecta[i]) {
          this.errores = this.errores + 1;
          this.dialog = true;
          val = 'no';
        }
      }

      return val;
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
</style>
