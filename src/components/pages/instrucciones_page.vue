<template>
  <div class="considerations_container">
    <h3>Consideraciones Generales:</h3>
    <br />

    <div class="list_considerations">
      <li>
        <div class="over_vin">
          <img class="vineta" src="../../assets/Circle_Grey_Solid.svg">
        </div>
        El test está compuesto por 2 escenarios con 3 preguntas en cada uno de ellos. Las preguntas 5 y 6 están divididas en partes.
      </li>

      <li>
        <div class="over_vin">
          <img class="vineta" src="../../assets/Circle_Grey_Solid.svg">
        </div>
        No hay un tiempo límite para entregar el test. Sin embargo, una vez iniciado, no podrás salir de la evaluación.
      </li>

      <li>
        <div class="over_vin">
          <img class="vineta" src="../../assets/Circle_Grey_Solid.svg">
        </div>
        Recuerda: Siempre que finalices una pregunta, deberás <strong>&nbsp;guardar la solución&nbsp;</strong> para pasar a la siguiente.
      </li>

      <li>
        <div class="over_vin">
          <img class="vineta" src="../../assets/Circle_Grey_Solid.svg">
        </div>
        Una vez dado siguiente, ya no podrás regresar a la pregunta anterior.
      </li>

      <li>
        <div class="over_vin">
          <img class="vineta" src="../../assets/Circle_Grey_Solid.svg">
        </div>
        Todas las preguntas tienen una opción de respuesta <strong>&nbsp;abierta&nbsp;</strong> en donde podrás completar con un párrafo de texto.
      </li>

      <li>
        <div class="over_vin">
          <img class="vineta" src="../../assets/Circle_Grey_Solid.svg">
        </div>
        Te recomendamos utilizar una hoja, lápiz o lapicero y borrador aparte.
      </li>

      <li class="inline_li_ele">
        <div class="over_vin special_item">
          <img class="vineta" src="../../assets/Circle_Grey_Solid.svg">
        </div>
        Recuerda leer todos los escenarios e identificar los <strong class="a_r">&nbsp;Avisos de Respuesta,&nbsp;</strong> los cuales te indican de forma complementaria la manera de presentar tu solución. Es obligatorio llenarlos.
      </li>

      <li>
        <div class="over_vin">
          <img class="vineta" src="../../assets/Circle_Grey_Solid.svg">
        </div>
        Antes de comenzar el test, vamos a ver los <strong>&nbsp;3 Avisos de Respuesta&nbsp;</strong> para que te familiarices con la manera de cómo responder las preguntas.
      </li>
    </div>

    <div class="avisosDeRespuesta">
      <div class="aviso">
        <img
          class="img_1"
          src="../../assets/AvisosDeRespuesta/i02.png"
          alt="Identificación del problema"
        />
        <br />
        <h3>Identificación del problema:</h3>
        <p>
          Puedes responder a preguntas como: ¿Por qué no puedo lograr mi objetivo?, ¿Qué obstáculos
          se presentan?
        </p>
      </div>

      <div class="aviso">
        <img
          class="img_2"
          src="../../assets/AvisosDeRespuesta/i01.png"
          alt="Aspectos importantes"
        />
        <h3>Aspectos importantes:</h3>
        <p>
          A partir del entendimiento del problema, lista la mayor cantidad de aspectos que has
          considerado para tu solución
        </p>
      </div>

      <div class="aviso">
        <img
          class="img_3"
          src="../../assets/AvisosDeRespuesta/i03.png"
          alt="Sustentación de tu solución"
        />
        <h3>Sustentación de tu solución:</h3>
        <p>
          Escribe un pequeño párrafo que explique tu elección y/o solución. También puedes hacer una
          lista de los problemas resueltos.
        </p>
      </div>
    </div>

    <button class="btn_model">
      <router-link class="ro_in" :to="{ name: 'IntroEscenario1' }">Iniciar</router-link>
    </button>
  </div>
</template>

<script>
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
  data: () => ({
    exp: ["Si", "No"],
    curso: ["Si", "No"],
    aceptar: ["Si", "No"],
    errorMessages: [],
    centro: null,
    nombre: null,
    edad: null,
    acuerdo: null,
  }),

  computed: {
    form() {
      return {
        nombre: this.nombre,
        edad: this.edad,
        centro: this.centro,
        exp: this.exp,
        curso: this.curso,
        acuerdo: this.acuerdo,
      };
    },
  },

  watch: {
    nombre() {
      this.errorMessages = [];
    },
  },

  methods: {
    addressCheck() {
      this.errorMessages = this.address && !this.name ? ["Hey! I'm required"] : [];

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      // this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      // this.formHasErrors = false
      const id = this.createId(this.nombre, this.edad, this.centro);

      this.crearHoja(id, this.nombre, this.edad, this.centro, this.exp, this.curso, this.acuerdo);
      // Object.keys(this.form).forEach(f => {
      //   // if (!this.form[f]) this.formHasErrors = true

      //   this.$refs[f].validate(true)
      // })
    },
    updateError() {
      console.log("error");
    },
    crearHoja(id, nombre, edad, centro, exp, curso, acuerdo) {
      (async function() {
        await doc.useServiceAccountAuth({
          client_email: "arianf@dotted-medley-326516.iam.gserviceaccount.com",
          private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgCUx/AqfeaWV0\nL0fGMl0yLFSPk7itNcEe143qjziiCK3hIi8xpNZpeyw5Venb0E9Xjg5SY9uv/n61\nvpDIxIs5DfTE3ycc90iReGCIYHABLC1XHQ6Co8xhljsHtb7ro2kp7880KF5iUMK1\nOwE16SYhsBXUAGrH6fzbZDunQMOHXLrz0TbWfHdh53b9/aiKOmHeJ6NpulGAOtA/\nhKCNylC+KHgDzJiYrAhjGhiMI7O6Hj2bb9PKaP5ceGPJiVHJT1fC8Nz2aH30FpQX\n/IOI+eRZmJbPXDiFfAKhd9aouDK7KfROUnnd/ij9emawCrzAIKCrOJOgKQtQ41kZ\nacA2YfuvAgMBAAECggEAYpEExE6FT6+cMLlKgTMQWK4zR/XshtxDCpA4gm2fs35R\nDd9t1xAYO1EzPEiFuq2T8sfvmiUP9wbndYuRhJsgS6pNub4aJb7QARxukCGptYJb\nslt40lZBad/gObym8mIzNv2ocmCeYe/5MiXzGuZoXeLsP5ktYaYbFuUq76NpQyhg\n5nD9MGIFAD2i6VcOUsFIymhQRlOjZUtJVS3aRB4IrFGqZS//mv8Ig0yfGeSzBghv\nLnX7da6KovjqkhTzKiQKOBQaH2C9oJh5uHTz+T+dDrGoqhNca/2ok8B6oih54R+V\nWxm0Af/LRaJaAojIIF/wHk6VEWA9GfPoxL6WcumrTQKBgQDw2x8QitR0FF8+WICn\npTSUhqX2gOr2FWcDep0Tdan7Hta+az2sN7f1uUallAHeoA/SurvAIbvWn9kfbXvA\nTZqLK3BjKmpfANqvRo6IUTPynxamlf/05gUGAUlHOrl34ieqy6W+E6ZEjX+pCS5m\nJRrAvqE+YtvOIbitj2vo+cPiowKBgQDuH3HQex6GZHtiznaQqZNG8yRxySwIs2Yq\nkSiZtN2i2XCSVzaI4HGiKQF3smyFBiM8XkstYzOeQtNYBo6EsV7y/ZNpdeF1+q/F\nAb2izakKtKVTPFbEskFr/qdZhJA4935p//oz1ew4OHlaLo24vkwBq180LRLLy2BB\nMdeQRl6fhQKBgDW3KL5vt+ILiRJGeqro1UkqnmjTZ5NqQocsGUv1uesffZUKJb76\nzjQnFfJnh+M2n1DIBIdc/p9nFu1DZY4FwKm5Dl+PXhnB/wOIINGWCpfZkxuj6Gmd\nwxELyGPyXNq3vVECCfzSNQqk5Au22Ho/XDAQU7WuJodaTe2nRtG2olExAoGAOomy\nYg0SSPmEt5qH3TJCyWtWZz6MO6tWj1pV/8tNvQ31NZSJDIcYiEPKX5GWSfFjUiDg\nHE1J0DsfV4FtIcO00slxprha77Tr5uNxqgci6kXUaqznq70ihhj5LPGAvvBgvFA4\nQuvxATUo5/mPz33Ak5x8cAgwmbbqd7x4ALi75D0CgYEA5lxafnGk1GhZ/rUjd9tg\nlRDQoBPZi1SjBq4q+kztN3V2wWU/HmVF+ivkvz1W4X96ra7bNgpCSRI3N1Fhx7N1\nAA4gTjY7qxGhF3F62/eb/fLYYj7N6IV7MJnFJiPWEHyXB0qKliO+uTx7AVsEM2aa\nvIPa9JiF3qZYHqjfu5Rd/hY=\n-----END PRIVATE KEY-----\n",
        });

        await doc.loadInfo(); // loads document properties and worksheets
        const sheet2 = await doc.addSheet();

        await sheet2.updateProperties({ title: id });
        var header = [
          "escenario",
          "pregunta",
          "respuesta",
          "solucion",
          "tinicio",
          "tfin",
          "tiempo",
          "errores",
          "cantNodos",
          "peso",
          "ruta",
          "matriz",
          "cumplio",
          "optima",
          "identProblema",
          "aspectos",
          "sustentar",
        ];
        await sheet2.setHeaderRow(header);
        await sheet2.loadCells("A10:F11");

        const cell1 = sheet2.getCellByA1("A10");
        const cell2 = sheet2.getCellByA1("B10");
        const cell3 = sheet2.getCellByA1("C10");
        const cell4 = sheet2.getCellByA1("D10");
        const celL5 = sheet2.getCellByA1("E10");
        const cell6 = sheet2.getCellByA1("F10");

        cell1.value = "Nombre";
        cell2.value = "Edad";
        cell3.value = "Centro";
        cell4.value = "Exp";
        celL5.value = "Curso";
        cell6.value = "Acuerdo";
        await sheet2.saveUpdatedCells();

        const cell1b = sheet2.getCellByA1("A11");
        const cell2b = sheet2.getCellByA1("B11");
        const cell3b = sheet2.getCellByA1("C11");
        const cell4b = sheet2.getCellByA1("D11");
        const celL5b = sheet2.getCellByA1("E11");
        const cell6b = sheet2.getCellByA1("F11");

        cell1b.value = nombre;
        cell2b.value = edad;
        cell3b.value = centro;
        cell4b.value = exp;
        celL5b.value = curso;
        cell6b.value = acuerdo;

        await sheet2.saveUpdatedCells();

        window.location.href = "/escenario1/pregunta1/" + id;

        return false;
      })();
    },
    createId(nombre, edad, centro) {
      return nombre.substr(0, 2) + edad + centro.substr(0, 2);
    },
  },
};
</script>

<style>
@import "../../assets/instrucciones_styles.css";

.vineta {
  width: 6px;
  height: auto;

}

.over_vin {
  height: 7px;
  margin-top: -10px;
}

.inline_li_ele {
  display: inline-block;
  margin-left: 50px;
}

.inline_li_ele .special_item {
  position: absolute;
  transform: translate(-50px);
}

.a_r {
  width: 210px;
  height: 16px;
}
</style>
