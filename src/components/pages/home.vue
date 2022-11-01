<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6>
          <v-card class="mt-5">
            <v-card-text>
              <v-text-field
                ref="nombre"
                v-model="nombre"
                :rules="[() => !!nombre || 'This field is required']"
                :error-messages="errorMessages"
                label="Nombre Completo"
                required
                solo-inverted
                @update:error="updateError()"
              ></v-text-field>
              <v-text-field
                ref="edad"
                v-model="edad"
                label="Edad"
                counter="2"
                required
                solo-inverted
              ></v-text-field>
              <v-text-field
                ref="centro"
                v-model="centro"
                :rules="[() => !!centro || 'This field is required']"
                :error-messages="errorMessages"
                label="Centro"
                required
                solo-inverted
                @update:error="updateError()"
              ></v-text-field>
              <label for="exp" class="formbuilder-select-label">¿Cuenta con experiencia en programación?</label>
              <v-autocomplete
                ref="exp"
                :rules="[() => !!exp || 'This field is required']"
                :items="exp"
                v-model="exp"
                label="¿Cuenta con experiencia en programación?"
                required
                solo-inverted
              ></v-autocomplete>
              <label for="exp" class="formbuilder-select-label">¿Cuenta con experiencia en computación?</label>
              <v-autocomplete
                ref="curso"
                :rules="[() => !!curso || 'This field is required']"
                :items="curso"
                v-model="curso"
                label="¿Ha llevado algún curso de computación?"
                required
                solo-inverted
              ></v-autocomplete>
            </v-card-text>
            <v-divider class="mt-5"></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-slide-x-reverse-transition>
                <v-tooltip v-if="formHasErrors" left>
                  <v-btn slot="activator" icon class="my-0" @click="resetForm">
                    <v-icon>refresh</v-icon>
                  </v-btn>
                  <span>Refresh form</span>
                </v-tooltip>
              </v-slide-x-reverse-transition>
              <v-btn color="primary" @click="submit">Iniciar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
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
          "parte",
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
          "devuelvo",
          "direccion",
          "for",
          "condicional",
          "probado",
        ];
        await sheet2.setHeaderRow(header);
        await sheet2.loadCells("A73:F74");
        const cell1 = sheet2.getCellByA1("A73");
        const cell2 = sheet2.getCellByA1("B73");
        const cell3 = sheet2.getCellByA1("C73");
        const cell4 = sheet2.getCellByA1("D73");
        const celL5 = sheet2.getCellByA1("E73");
        const cell6 = sheet2.getCellByA1("F73");

        cell1.value = "Nombre";
        cell2.value = "Edad";
        cell3.value = "Centro";
        cell4.value = "Exp";
        celL5.value = "Curso";
        cell6.value = "Acuerdo";
        await sheet2.saveUpdatedCells();

        const cell1b = sheet2.getCellByA1("A74");
        const cell2b = sheet2.getCellByA1("B74");
        const cell3b = sheet2.getCellByA1("C74");
        const cell4b = sheet2.getCellByA1("D74");
        const celL5b = sheet2.getCellByA1("E74");
        const cell6b = sheet2.getCellByA1("F74");

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