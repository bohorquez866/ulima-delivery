<template>
  <div class="big_container">
    <div class="titulo_escenario">
      <div class="subtitle">
        <h1>Pregunta 6: Traza la solución de Carita Feliz</h1>

        <p>
          Finalmente, Pacman y Carita Feliz tienen cada uno una propuesta de
          camino a seguir para trasladarse de manera segura. ¿Puedes entender y
          trazar el camino propuesto por Carita Feliz?
          <br />
          <br />
          ¿No recuerdas cómo se realizan los movimientos o qué significan?,
          <a @click="setModalFo">Ver movimientos</a>
          <br />
          <br />
          <strong
            >No te olvides de “Probar tu solución” antes de guardar
            solución.</strong
          >
        </p>
      </div>
      <p class="ver_sc part">Esta pregunta tiene tres partes: 2/3</p>
      <div class="modal modalFour" v-if="modalIsActiveFo">
        <div class="submodal">
          <modal-four setModalFo="setModalFo"
            ><button class="btn_model" @click="setModalFo">
              Cerrar
            </button></modal-four
          >
        </div>
      </div>

      <div class="modal modalThree" v-if="modalIsActive">
        <div class="submodal">
          <modal-three setModal="setModal"
            ><button class="btn_model" @click="setModal">
              Cerrar
            </button></modal-three
          >
        </div>
      </div>
    </div>

    <div class="over_canvas_preg3">
      <div class="left_box_end">
        <div>
          <img :src="image" width="316" height="316" />
          <div class="table_score">
            <div class="leyenda">
              <h4>Leyenda:</h4>
              <img src="../../assets/leyenda_Pregunta_6.png" alt="Leyenda" />
            </div>
          </div>
        </div>

        <v-col cols="6" sm="6" md="8">
          <div class="indicador_superior">
            <p>Columna 1</p>
            <p>Columna 2</p>
            <p>Columna 3</p>
          </div>
          <div class="indicador_lateral">
            <div class="indicador_filas preg_6">
              <p class="fila_1">Fila 1</p>
              <p class="fila_2">Fila 2</p>
              <p class="fila_3">Fila 3</p>
            </div>
            <v-card class="card_stage" width="820px" height="600px">
              <v-stage
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
                    ref="ghost"
                    :key="1222"
                    :config="{
                      x: 200,
                      y: 350,
                      id: 123,
                      stroke: 'black',
                      fill: 'yellow',
                      numPoints: 6,
                      innerRadius: 10,
                      outerRadius: 20,
                    }"
                  />
                </v-layer>
                <v-layer ref="dragLayer"></v-layer>
              </v-stage>
            </v-card>
          </div>
        </v-col>
      </div>
    </div>

    <div class="div_button_save_sol">
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

      <div class="div_button_next" v-if="isSolutionSaved">
        <v-btn class="btn_model next_btn_fol" v-on:click="pasarPregunta">
          Siguiente
        </v-btn>
      </div>
    </div>
    <button class="float float6" @click="setModal">
      <span>¿Que significan los bloques?</span>
      <h2 class="my-float">?</h2>
    </button>
  </div>
</template>

<script>
import { saveFirebaseData } from '../../firebase/saveFirebaseData';
import modalFour from '../pages/modal_4.vue';
import modalThree from '../pages/modal_3.vue';
import Konva from 'konva';
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
    { x: 200, y: 50, id: 1, color: '#3CCF4E', con: { 3: 5 }, puntosBorde: [] },
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
      color: '#EB1D36',
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

export default {
  components: {
    modalFour,
    modalThree,
  },
  data() {
    return {
      isSolutionSaved: false,
      modalIsActiveFo: false,
      modalIsActive: false,
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
      image: require('@/assets/CaritaFeliz_Sol.png'),

      stageSize: {
        width: width,
        height: height,
      },
      connections: [],
      drawningLine: false,
      respuestas: [],
      circulo1: 0,
      circulo2: 0,
      conexiones: [],
      ruta: [],
      rutaMatriz: [],
      rutaCorrecta: [8, 9, 112, 3],
      contador: 0,
      rutaTemp: [],
      errores: 0,
      tiempoI: 0,
      tiempoF: 0,
      tiMatriz: 0,
      tfMAtriz: 0,
      matrizT: [],
      cum: 'no',
      id: this.$route.params.id,
      probado: 0,
    };
  },

  methods: {
    setModalFo() {
      this.modalIsActiveFo = !this.modalIsActiveFo;
    },
    setModal() {
      this.modalIsActive = !this.modalIsActive;
    },

    handleMouseDown(e) {
      const onCircle = e.target instanceof Konva.Circle;
      if (!onCircle) {
        return;
      }
      this.drawningLine = true;

      this.tiMatriz = Date.now();

      this.circulo1 = e.target.id();
      this.connections.push({
        id: Date.now(),
        points: [e.target.x(), e.target.y()],
      });
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
      this.rutaTemp.push(this.circulo2);

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
      this.contador += 1;
      this.tfMatriz = Date.now();
      var tiempoTotal = this.tfMatriz - this.tiMatriz;
      this.matrizT.push(tiempoTotal);
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
    validarSolucion() {
      var val = true;
      for (var i = 0; i < this.rutaCorrecta.length; i++) {
        if (this.rutaTemp[i] != this.rutaCorrecta[i]) {
          val = false;
        }
      }

      if (val) {
        this.cum = 'si';
        // this.enviarData()
        this.probado = this.probado + 1;

        alert('Respuesta correcta');
        // window.location.href = '/escenario1/pregunta3c/' + this.id
      } else {
        this.cum = 'no';
        this.tiempoI = Date.now();
        alert('Respuesta incorrecta');
        this.probado = this.probado + 1;

        this.errores = this.errores + 1;
        this.cleanRoute();
        // this.enviarData()
      }
    },
    guardarSolucion() {
      alert('Se guardo la respuesta. Presionar siguiente');
      this.enviarData();
    },
    pasarPregunta() {
      this.$router.replace({ name: 'Pregunta3c' });
    },
    sendRow() {
      doc.useServiceAccountAuth({
        client_email: 'arianf@dotted-medley-326516.iam.gserviceaccount.com',
        private_key:
          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgCUx/AqfeaWV0\nL0fGMl0yLFSPk7itNcEe143qjziiCK3hIi8xpNZpeyw5Venb0E9Xjg5SY9uv/n61\nvpDIxIs5DfTE3ycc90iReGCIYHABLC1XHQ6Co8xhljsHtb7ro2kp7880KF5iUMK1\nOwE16SYhsBXUAGrH6fzbZDunQMOHXLrz0TbWfHdh53b9/aiKOmHeJ6NpulGAOtA/\nhKCNylC+KHgDzJiYrAhjGhiMI7O6Hj2bb9PKaP5ceGPJiVHJT1fC8Nz2aH30FpQX\n/IOI+eRZmJbPXDiFfAKhd9aouDK7KfROUnnd/ij9emawCrzAIKCrOJOgKQtQ41kZ\nacA2YfuvAgMBAAECggEAYpEExE6FT6+cMLlKgTMQWK4zR/XshtxDCpA4gm2fs35R\nDd9t1xAYO1EzPEiFuq2T8sfvmiUP9wbndYuRhJsgS6pNub4aJb7QARxukCGptYJb\nslt40lZBad/gObym8mIzNv2ocmCeYe/5MiXzGuZoXeLsP5ktYaYbFuUq76NpQyhg\n5nD9MGIFAD2i6VcOUsFIymhQRlOjZUtJVS3aRB4IrFGqZS//mv8Ig0yfGeSzBghv\nLnX7da6KovjqkhTzKiQKOBQaH2C9oJh5uHTz+T+dDrGoqhNca/2ok8B6oih54R+V\nWxm0Af/LRaJaAojIIF/wHk6VEWA9GfPoxL6WcumrTQKBgQDw2x8QitR0FF8+WICn\npTSUhqX2gOr2FWcDep0Tdan7Hta+az2sN7f1uUallAHeoA/SurvAIbvWn9kfbXvA\nTZqLK3BjKmpfANqvRo6IUTPynxamlf/05gUGAUlHOrl34ieqy6W+E6ZEjX+pCS5m\nJRrAvqE+YtvOIbitj2vo+cPiowKBgQDuH3HQex6GZHtiznaQqZNG8yRxySwIs2Yq\nkSiZtN2i2XCSVzaI4HGiKQF3smyFBiM8XkstYzOeQtNYBo6EsV7y/ZNpdeF1+q/F\nAb2izakKtKVTPFbEskFr/qdZhJA4935p//oz1ew4OHlaLo24vkwBq180LRLLy2BB\nMdeQRl6fhQKBgDW3KL5vt+ILiRJGeqro1UkqnmjTZ5NqQocsGUv1uesffZUKJb76\nzjQnFfJnh+M2n1DIBIdc/p9nFu1DZY4FwKm5Dl+PXhnB/wOIINGWCpfZkxuj6Gmd\nwxELyGPyXNq3vVECCfzSNQqk5Au22Ho/XDAQU7WuJodaTe2nRtG2olExAoGAOomy\nYg0SSPmEt5qH3TJCyWtWZz6MO6tWj1pV/8tNvQ31NZSJDIcYiEPKX5GWSfFjUiDg\nHE1J0DsfV4FtIcO00slxprha77Tr5uNxqgci6kXUaqznq70ihhj5LPGAvvBgvFA4\nQuvxATUo5/mPz33Ak5x8cAgwmbbqd7x4ALi75D0CgYEA5lxafnGk1GhZ/rUjd9tg\nlRDQoBPZi1SjBq4q+kztN3V2wWU/HmVF+ivkvz1W4X96ra7bNgpCSRI3N1Fhx7N1\nAA4gTjY7qxGhF3F62/eb/fLYYj7N6IV7MJnFJiPWEHyXB0qKliO+uTx7AVsEM2aa\nvIPa9JiF3qZYHqjfu5Rd/hY=\n-----END PRIVATE KEY-----\n',
      });

      doc.loadInfo();
      var V = [];
      V.push({ id: 11 });
      let resultados = this.respuestas;
      const data = { pregunta6p2: resultados };
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
    ) {
      this.respuestas.push({
        escenario: 2,
        pregunta: 3,
        parte: 2,
        tinicio: tiempoI,
        tfin: tiempoF,
        tiempo: tiempo,
        ruta: ruta,
        matriz: matriz,
        cumplio: this.cum,
        optima: '-',
        identProblema: '-',
        aspectos: '-',
        sustentar: '',
        errores: err,
        probado: this.probado,
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
      var total = '7';

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
      var rutaT = this.getRuta();
      this.addRow(
        this.errores,
        rutaT,
        1,
        1,
        tt / 1000,
        1,
        tI.toString(),
        tf.toString(),
        this.getMatrizT(),
      );
      this.sendRow();
      this.animate();
      if (event) {
        alert('Se añadio la respuesta');
      }
    },
    cleanRoute() {
      this.connections = [];
      this.conexiones = [];
      this.pesos = [];
      this.ruta = [];
      this.rutaMatriz = [];
      this.rutaTemp = [];

      this.contador = 0;
    },
    getMatrizT() {
      var total = '';

      this.matrizT.forEach((element) => {
        total = total.concat(element / 1000);
        total = total.concat(' ,');
      });

      return total;
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
@import '../../assets/responsive.css';

.over_canvas_preg3 {
  width: 100%;
  height: max-content;
  background: #eee;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
}

.left_box_end {
  display: flex;
  flex-direction: row;
}

.card_stage {
  padding-top: 80px;
}

.float6 {
  bottom: 100px;
  right: 40px;
}

.preg_6 {
  width: 120px;
  margin: 50px 10px;
}

.finalizar_btn {
  background: #3ccf4e !important;
}
</style>
