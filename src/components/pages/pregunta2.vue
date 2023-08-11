<template>
  <div class="big_container">
    <div class="titulo_escenario">
      <div class="subtitle">
        <h1>Pregunta 2</h1>
        <p>
          Al siguiente día, Pacman y Carita Feliz tienen examen de Lenguaje,
          pero Pacman recordó que había olvidado recoger su libro en su casa;
          por lo que ambos retornan a su casa. Traza un camino para que ambos
          lleguen a tiempo al colegio luego de recoger la tarea de Pacman.
          <br />
          <br />
          ¿Quieres ver nuevamente el Escenario 1?
          <a @click="setModal">Ver escenario</a>
        </p>
        <p>
          Mira el video (a la derecha de la pantalla) para saber cómo responder
          a las 3 primeras preguntas del Escenario 1.
        </p>
      </div>
      <div class="modal" v-if="modalIsActive">
        <div class="submodal">
          <modal-one setModal="setModal"
            ><button class="btn_model close_btn" @click="setModal">
              Cerrar
            </button></modal-one
          >
        </div>
      </div>
    </div>

    <div class="over_canvas">
      <div class="left_box">
        <v-stage
          class="stage"
          ref="stage"
          :config="stageSize"
          @mousedown="handleMouseDown"
          @mouseup="handleMouseUp"
          @mousemove="handleMouseMove"
        >
          <v-layer>
            <v-line
              v-for="line in connections"
              :key="line.id"
              :config="{
                stroke: line.color,
                points: line.points,
                strokeWidth: 3,
              }"
            />

            <v-circle
              v-for="target in targets"
              :key="target.id"
              :config="{
                x: target.x,
                y: target.y,
                radius: 40,
                stroke: 'whitesmoke',
                fill: target.color,
              }"
            />
          </v-layer>
          <v-layer ref="dragLayer"></v-layer>
        </v-stage>

        <div class="table_score">
          <div class="leyenda">
            <h4>Leyenda:</h4>
            <img src="../../assets/leyenda pregunta1.png" alt="Leyenda" />
          </div>

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr class="table_style">
                  <th class="text-left">
                    Numero
                  </th>
                  <th class="text-left">
                    Nombre
                  </th>
                  <th class="text-left">
                    Solucion
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="item in soluciones"
                  :key="item.nombre"
                  @click="mostrarRuta(item.con, item.id)"
                >
                  <td>{{ item.id }}</td>
                  <td>{{ item.nombre }}</td>
                  <td>{{ item.sol }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>

        <div class="div_button">
          <!-- <button class="btn_model">
          <router-link class="ro_in" :to="{ name: 'Pregunta2' }">Volver</router-link>
        </button> -->

          <button
            v-if="list.length && sustentar.length"
            class="btn_model"
            v-on:click="
              isSolutionSaved = true;
              sendRow();
            "
          >
            Guardar Solución
          </button>
          <button v-else class="btn_model" @click="showModal">
            Guardar Solución
          </button>

          <button class="btn_model" v-on:click="enviarData">
            Añadir Solución
          </button>
        </div>
      </div>

      <div class="text_sect">
        <div class="instruccion">
          <button class="btn_model start_btn" v-on:click="startTimer">
            Start
          </button>
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
              src="../../assets/AvisosDeRespuesta/i03.png"
              alt="Sustentar solución"
            />
            <h3 class="idp_title">Sustentar solución</h3>
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
            label="Aspectos Importantes"
            value=""
            v-model="sustentar"
          ></textarea>
        </div>

        <div class="video">
          <h3>¿Cómo debería resolver esta pregunta?</h3>
          <iframe
            width="361"
            height="225"
            src="https://www.youtube.com/embed/zTE1WjX92gE"
            title="CTtest - Resolución de la pregunta 1 | by Amadeo Gómez"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div class="figura">
          <img
            class="img_map"
            src="../../assets/intro_escenario_1/figura_1_recorrido_hacia_el_colegio.png"
            alt="Figura 1"
          />
          <h3>Mapa</h3>
        </div>

        <div class="div_button_next">
          <button
            v-if="isSolutionSaved"
            class="btn_model next_btn_fol"
            @click="submit"
          >
            <router-link class="ro_in" :to="{ name: 'Pregunta3' }">
              Siguiente
            </router-link>
          </button>
        </div>
      </div>
    </div>
    <Modal ref="modal">
      <h2>Aviso</h2>
      <p>
        ¿Está seguro de pasar a la siguiente pregunta sin llenar los aspectos
        importantes o la sustentación?
      </p>
      <div>
        <button class="btn_model next_btn_fol" @click="hideModal">
          cancelar
        </button>

        <button
          class="btn_model"
          v-on:click="
            isSolutionSaved = true;
            sendRow();
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
import ModalOne from '../pages/modal_1.vue';
import Modal from '@/components/modal.vue';
const isResponsive = window.innerWidth < 1377 ? 1000 : 1200;
const isResponsiveH = window.innerHeight < 768 ? 1000 : 1200;

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

  await doc.loadInfo();
})();

const colors = {
  1: 'black',
  3: 'green',
  5: 'yellow',
  10: 'red',
}

function generateTargets() {
  return [
    // Blue
    { x: 200, y: 100, id: 112, color: '#1976D2', con: { 3: 5 }, },
    // Red
    { x: 800, y: 700, id: 111, color: '#EB1D36', con: { 10: 10, 11: 10, 12: 10, 15: 3 }, },
    // Yellow
    { x: 450, y: 250, id: 6, color: '#FEDB39', con: { 2: 3, 3: 1, 5: 5 }, },
    // Greens
    { x: 400, y: 100, id: 2, color: '#3CCF4E', con: { 112: 10, 3: 1, 5: 1, 6: 3 }, },
    { x: 600, y: 100, id: 3, color: '#3CCF4E', con: { 112: 5, 2: 1, 4: 1, 10: 10 }, },
    { x: 800, y: 100, id: 4, color: '#3CCF4E', con: { 3: 1, 7: 3, 9: 5 }, },
    { x: 300, y: 250, id: 5, color: '#3CCF4E', con: { 112: 3, 2: 1, 8: 5 }, },
    { x: 700, y: 250, id: 7, color: '#3CCF4E', con: { 3: 3, 4: 3, 9: 1, 10: 10 }, },
    { x: 350, y: 400, id: 8, color: '#3CCF4E', con: { 5: 5, 6: 5, 10: 3 }, },
    { x: 800, y: 400, id: 9, color: '#3CCF4E', con: { 4: 5, 7: 1, 10: 5, 11: 3 }, },
    { x: 600, y: 550, id: 10, color: '#3CCF4E', con: { 3: 10, 7: 10, 8: 5, 9: 5, 12: 3 }, },
    { x: 800, y: 550, id: 11, color: '#3CCF4E', con: { 9: 3, 111: 10 }, },
    { x: 350, y: 700, id: 12, color: '#3CCF4E', con: { 8: 10, 10: 3, 14: 1 }, },
    { x: 420, y: 850, id: 14, color: '#3CCF4E', con: { 12: 1, 15: 5 }, },
    { x: 600, y: 850, id: 15, color: '#3CCF4E', con: { 111: 3, 10: 5, 14: 5 }, },
  ];
}

export default {
  components: {
    ModalOne,
    Modal,
  },
  data() {
    return {
      isSolutionSaved: false,
      stageSize: {
        width: width,
        height: height,
      },
      modalIsActive: false,
      list: [],
      text: '',
      targets: generateTargets(),
      connections: [],
      soluciones: [],
      drawingLine: false,
      conexiones: [],
      errores: [],
      contS: 0,
      t1: 0,
      t2: 0,
      respuestas: [],
      titulo: 'sad',
      pesos: [],
      title: 'Preg 1A',
      inicio: false,
      fin: false,
      tiempoI: 0,
      idSol: 0,
      totalNodos: 0,
      tiempoT: 0,
      tiempoF: 0,
      tiempoIN: 0,
      tiempoFN: 0,
      tiempoTN: 0,
      contador: 1,
      rutaMatriz: [],
      matriz: [],
      sustentar: '',
      validarT: false,
      id: this.$route.params.id,
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

    addToList() {
      this.list.unshift(this.text);
      this.text = '';
    },

    deleteFromList(index) {
      this.list.splice(index, 1);
    },

    enviarData: function(event) {
      var pesoT = this.getTotalWeight();
      var rutaT = this.getRuta();
      var matrizT = this.getMatriz();
      var errorT = this.getErrores();
      let value = document?.getElementById('ip')?.value;
      let aspectos = document?.getElementById('aspectos')?.value;
      var tI = new Date(this.tiempoI);
      var tF = new Date(this.tiempoF);

      this.addRow(
        errorT,
        pesoT,
        rutaT,
        value,
        aspectos,
        this.tiempoT / 1000,
        this.contador,
        tI.toString(),
        tF.toString(),
        matrizT,
        this.validarPeso(),
        this.validarNodoFinal(),
      );
      this.cleanRoute();
      if (event) {
        alert('Se añadio la respuesta');
      }
    },

    handleMouseDown(e) {
      const onCircle = e.target instanceof Konva.Circle;
      if (!onCircle) {
        return;
      }

      var circ = this.getCircle(e.target.x(), e.target.y());
      this.t1 = circ;
      if (this.t1.id == 111 && this.fin == false && this.validarT == true) {
        this.inicio = true;
      }

      if (!this.inicio) {
        return;
      }

      this.drawingLine = true;
      this.tiempoIN = Date.now();
      this.connections.push({
        id: Date.now(),
        points: [e.target.x(), e.target.y()],
        color: 'black',
      });
    },
    handleMouseMove(e) {
      if (!this.inicio) {
        return;
      }
      if (!this.drawingLine) {
        return;
      }
      const pos = e.target.getStage().getPointerPosition();
      const lastLine = this.connections[this.connections.length - 1];
      lastLine.points = [lastLine.points[0], lastLine.points[1], pos.x, pos.y];
    },
    submit() {
      window.location.href = '/escenario1/pregunta3/' + this.id;
    },
    handleMouseUp(e) {
      if (this.inicio == false && this.fin == true) {
        return;
      }
      const onCircle = e.target instanceof Konva.Circle;
      if (!onCircle) {
        return;
      }
      var circ = this.getCircle(e.target.x(), e.target.y());
      this.t2 = circ.id;
      if (this.t2 == 112) {
        this.fin = true;
        this.inicio = false;
      }
      var condic = this.validateConnections(this.t1.con, this.t2);

      this.drawingLine = false;
      const lastLine = this.connections[this.connections.length - 1];
      var peso = this.getWeights(this.t1.con, this.t2);

      if (condic) {
        lastLine.points = [
          lastLine.points[0],
          lastLine.points[1],
          e.target.x(),
          e.target.y(),
          (lastLine.color = colors[peso]),
        ];
        this.conexiones.push({
          p1: this.t1.id,
          p2: this.t2,
          peso: peso,
        });
        this.tiempoFN = Date.now();
        this.tiempoTN = this.tiempoFN - this.tiempoIN;
        this.pesos.push(peso);
        this.matriz.push(this.tiempoTN);
      } else {
        this.errores.push({
          p1: this.t1.id,
          p2: this.t2,
        });
        this.connections.pop();
        this.fin = false;
        this.inicio = true;
      }
      this.tiempoF = Date.now();
      this.tiempoT = this.tiempoF - this.tiempoI;
      this.validarT = false;
      console.log(this.pesos);
    },
    validarNodoFinal() {
      var s = 'f';

      this.conexiones.forEach((element) => {
        if (element.p2 == 6) {
          s = 't';
        }
      });

      if (this.conexiones.at(-1)?.p2 == 112 && s == 't') {
        return 'T';
      }
      return 'F';
    },
    mostrarRuta(con, id) {
      this.soluciones.forEach((element) => {
        if (element.id == id) {
          element.sol = 'x';
          this.idSol = id;
        } else {
          element.sol = '';
        }
      });
      this.connections = con;
    },
    validarPeso() {
      if (this.peso === 24) {
        return 'T';
      }
      return 'F';
    },
    getRuta() {
      var total = '111';

      this.conexiones.forEach((element) => {
        this.totalNodos += 1;
        this.rutaMatriz.push(element.p2);
        total = total.concat(' ,');
        total = total.concat(element.p2);
      });

      return total;
    },
    getMatriz() {
      var total = '';

      this.matriz.forEach((element) => {
        total = total.concat(element / 1000);
        total = total.concat(' ,');
      });

      return total;
    },
    getErrores() {
      return this.errores.length;
    },
    getTotalWeight() {
      var total = 0;

      this.pesos.forEach((element) => {
        total += element;
      });
      return total;
    },
    getCircle(x, y) {
      var circ = 0;
      this.targets.forEach((element) => {
        if (x == element.x && y == element.y) {
          circ = element;
        }
      });
      return circ;
    },
    validateConnections(con, s2) {
      var value = false;
      for (var key in con) {
        if (key == s2) {
          value = true;
        }
      }
      return value;
    },
    getWeights(con, s2) {
      var value = 0;
      for (var key in con) {
        if (key == s2) {
          value = con[key];
        }
      }
      return value;
    },
    getTotalNodos() {
      var s = 0;
      this.rutaMatriz.forEach((element) => {
        if (element != 112) {
          s += 1;
        }
      });

      return s;
    },
    addRow(
      err,
      peso,
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
        escenario: 1,
        pregunta: 2,
        respuesta: contador,
        solucion: 'borrador',
        tinicio: tiempoI,
        tfin: tiempoF,
        tiempo: tiempo,
        errores: err,
        cantNodos: this.getTotalNodos(),
        peso: peso,
        ruta: ruta,
        matriz: matriz,
        cumplio: nodoF,
        optima: vPeso,
        identProblema: '-',
        aspectos: this.list,
        sustentar: this.sustentar || 'vacio',
        probado: '-',
        devuelvo: '-',
        direccion: '-',
        for: '-',
        parte: 1,
        condicional: '-',
      });
      this.contador += 1;
      this.contS += 1;
      this.soluciones.push({
        id: this.contS,
        nombre: 'Solucion ' + this.contS,
        con: this.connections,
        sol: '',
      });
    },
    sendRow: function() {
      doc.useServiceAccountAuth({
        client_email: 'arianf@dotted-medley-326516.iam.gserviceaccount.com',
        private_key:
          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgCUx/AqfeaWV0\nL0fGMl0yLFSPk7itNcEe143qjziiCK3hIi8xpNZpeyw5Venb0E9Xjg5SY9uv/n61\nvpDIxIs5DfTE3ycc90iReGCIYHABLC1XHQ6Co8xhljsHtb7ro2kp7880KF5iUMK1\nOwE16SYhsBXUAGrH6fzbZDunQMOHXLrz0TbWfHdh53b9/aiKOmHeJ6NpulGAOtA/\nhKCNylC+KHgDzJiYrAhjGhiMI7O6Hj2bb9PKaP5ceGPJiVHJT1fC8Nz2aH30FpQX\n/IOI+eRZmJbPXDiFfAKhd9aouDK7KfROUnnd/ij9emawCrzAIKCrOJOgKQtQ41kZ\nacA2YfuvAgMBAAECggEAYpEExE6FT6+cMLlKgTMQWK4zR/XshtxDCpA4gm2fs35R\nDd9t1xAYO1EzPEiFuq2T8sfvmiUP9wbndYuRhJsgS6pNub4aJb7QARxukCGptYJb\nslt40lZBad/gObym8mIzNv2ocmCeYe/5MiXzGuZoXeLsP5ktYaYbFuUq76NpQyhg\n5nD9MGIFAD2i6VcOUsFIymhQRlOjZUtJVS3aRB4IrFGqZS//mv8Ig0yfGeSzBghv\nLnX7da6KovjqkhTzKiQKOBQaH2C9oJh5uHTz+T+dDrGoqhNca/2ok8B6oih54R+V\nWxm0Af/LRaJaAojIIF/wHk6VEWA9GfPoxL6WcumrTQKBgQDw2x8QitR0FF8+WICn\npTSUhqX2gOr2FWcDep0Tdan7Hta+az2sN7f1uUallAHeoA/SurvAIbvWn9kfbXvA\nTZqLK3BjKmpfANqvRo6IUTPynxamlf/05gUGAUlHOrl34ieqy6W+E6ZEjX+pCS5m\nJRrAvqE+YtvOIbitj2vo+cPiowKBgQDuH3HQex6GZHtiznaQqZNG8yRxySwIs2Yq\nkSiZtN2i2XCSVzaI4HGiKQF3smyFBiM8XkstYzOeQtNYBo6EsV7y/ZNpdeF1+q/F\nAb2izakKtKVTPFbEskFr/qdZhJA4935p//oz1ew4OHlaLo24vkwBq180LRLLy2BB\nMdeQRl6fhQKBgDW3KL5vt+ILiRJGeqro1UkqnmjTZ5NqQocsGUv1uesffZUKJb76\nzjQnFfJnh+M2n1DIBIdc/p9nFu1DZY4FwKm5Dl+PXhnB/wOIINGWCpfZkxuj6Gmd\nwxELyGPyXNq3vVECCfzSNQqk5Au22Ho/XDAQU7WuJodaTe2nRtG2olExAoGAOomy\nYg0SSPmEt5qH3TJCyWtWZz6MO6tWj1pV/8tNvQ31NZSJDIcYiEPKX5GWSfFjUiDg\nHE1J0DsfV4FtIcO00slxprha77Tr5uNxqgci6kXUaqznq70ihhj5LPGAvvBgvFA4\nQuvxATUo5/mPz33Ak5x8cAgwmbbqd7x4ALi75D0CgYEA5lxafnGk1GhZ/rUjd9tg\nlRDQoBPZi1SjBq4q+kztN3V2wWU/HmVF+ivkvz1W4X96ra7bNgpCSRI3N1Fhx7N1\nAA4gTjY7qxGhF3F62/eb/fLYYj7N6IV7MJnFJiPWEHyXB0qKliO+uTx7AVsEM2aa\nvIPa9JiF3qZYHqjfu5Rd/hY=\n-----END PRIVATE KEY-----\n',
      });

      doc.loadInfo();

      this.respuestas.forEach((element) => {
        if (element.escenario == 1 && element.respuesta == this.idSol) {
          element.solucion = 'solucion';
        } else {
          element.solucion = 'borrador';
        }
      });

      let resultados = this.respuestas;
      const data = { pregunta2: resultados };

      saveFirebaseData(data);

      alert('Se guardo la solucion. Presionar siguiente');

      // const moreRows =  sheet2.addRows(this.respuestas)
      // console.log(moreRows)
      alert('Se guardo la solucion. Presionar siguiente');
    },

    startTimer: function() {
      // el evento cuyo tiempo ha transcurrido aquí:
      this.cleanRoute();
      this.validarT = true;
      this.tiempoI = Date.now();
    },
    cleanRoute() {
      this.connections = [];
      this.errores = [];
      this.conexiones = [];
      this.pesos = [];
      this.fin = false;
      this.inicio = false;
      this.matriz = [];
      this.rutaMatriz = [];
    },
    getColor(valor) {
      var r = '';
      switch (valor) {
        case 1:
          r = 'black';
          break;
        case 3:
          r = 'green';
          break;
        case 5:
          r = 'yellow';
          break;
        case 10:
          r = 'red';
          break;
      }
      return r;
    },
  },
};
</script>
