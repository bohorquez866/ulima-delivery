<template>
  <div class="landing_body">
    <!-- HEADER SECTION -->
    <nav class="nav_bar">
      <router-link class="logo_box" to="/">
        <h3 class="landing_logo">Logo</h3>
      </router-link>

      <ul class="navbar-nav">
        <li class="nav-item active">
          <!-- Descomentar para tener un botón Home -->
          <!-- <a class="nav-link" href="index.html">Home</a> -->
        </li>
      </ul>

      <router-link :to="{ name: 'Login' }">
        <div class="over_button">
          <button v-if="!user" class="btn_model">
            Iniciar sesión
          </button>

          <logout-component v-else />
        </div>
      </router-link>
    </nav>
    <!-- end header section -->

    <section class=" slider_section">
      <div class="content">
        <h1>Descubre tu nivel de <br />Pensamiento Computacional</h1>
        <br />

        <h3>¿En qué consiste?</h3>

        <p>
          Resuelve un total de 6 preguntas y descubre tu capacidad <br />para el diseño y desarollo
          de soluciones óptimas. <br />
          <br />
          <strong>Aviso: Solo para alumnos entre 15 y 17 años de edad.</strong>
        </p>
        <!-- <router-link :to="{ name: 'Login' }">
          <div class="over_button second_btn">
            <button class="btn_model start_btn_test">
              Iniciar Test
            </button>
          </div>
        </router-link> -->
        <div class="over_button second_btn">
          <button class="btn_model start_btn_test" @click="dialogTerms = true">
            Iniciar Test
          </button>
        </div>
      </div>
      <div class="slider_img-box">
        <img src="../assets/01_LandingPage/p03.svg" alt="" class="" />
      </div>

      <!-- dialog terminos y condiciones -->
      <v-dialog v-model="dialogTerms" max-width="700">
        <v-card>
          <v-card-title class="text-h5">
            Términos y condiciones
          </v-card-title>

          <v-card-text>
            <p>Has sido seleccionado para formar parte de un estudio sobre la estimación del nivel de pensamiento computacional. Para lograr los objetivos de esta investigación, te invitamos cordialmente a completar el siguiente cuestionario. Queremos enfatizar que tu participación es totalmente voluntaria. Todas las respuestas proporcionadas serán tratadas de manera confidencial y los resultados se utilizarán exclusivamente con fines científicos. Tu contribución ayudará a ampliar nuestro entendimiento en esta área de estudio.</p>
            <p>Te proporcionaremos información adicional para que puedas tomar una decisión informada. Es esencial que comprendas que no hay ningún riesgo asociado con tu participación en este estudio. Si decides participar, por favor marca la casilla correspondiente. Ten la certeza de que tus respuestas y cualquier información personal se manejan con la máxima confidencialidad y sólo serán utilizadas para fines científicos.</p>
            <p>La razón por la cual solicitamos tu consentimiento informado es asegurarnos de que comprendes plenamente los objetivos y posibles beneficios de este estudio. Estamos dispuestos a proporcionar cualquier información adicional que requieras para tomar una decisión informada.</p>

            <v-radio-group v-model="radioGroupSelectedOption">
              <v-radio
                v-for="(item, index) in radioGroupOptions"  
                :key="index"
                :label="item"
                :value="index"
              ></v-radio>
            </v-radio-group>

            <p>PASOS:
              <ol class="stepsOrderedList">
                <li>Ingresar al test.</li>
                <li>Darle click a <i>registrarse ahora</i>.</li>
                <li>Cuando doy click al registrarme sale <strong>un nuevo pop-up</strong>.</li>
                <li>En la parte inferior sale la opción: "Estoy de acuerdo en participar en el test" (Tiene que marcarlo) + Un botón que diga "Registrarme"</li>
                <li>Una vez hecho el registro, se crea la cuenta del alumno y se guarda la info de que aceptó participar en el estudio. Luego, te redirige al espacio de Login para que el alumno ingrese sus credenciales nuevamente.</li>
              </ol>
              <img src="../assets/01_LandingPage/ss_signup_page.png" width="400" />
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="validateTermsAndConditions">
              Hecho
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </section>

    <!-- end slider section -->

    <!-- Mosaics -->
    <section class="service_section">
      <div class="contenedor">
        <h4>Dimensiones a evaluar:</h4>
        <div class="layout_padding2">
          <div class="card-deck">
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/01_LandingPage/algoritmo.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">Pensamiento crítico</h4>
                <p class="card-text">
                  Evaluar las habilidades cognitivas en la evaluación, análisis y síntesis de la
                  información.
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <img
              class="card-img-top"
              src="../assets/01_LandingPage/pens-crítico.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">Creatividad</h4>
              <p class="card-text">
                Evaluar la capacidad expresiva visual para desarrollar actividades.
              </p>
            </div>
          </div>

          <div class="card">
            <img
              class="card-img-top"
              src="../assets/01_LandingPage/algoritmo.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">Pensamiento algorítmico</h4>
              <p class="card-text">
                Evaluar el entendimiento y aplicación de instrucciones lógicas.
              </p>
            </div>
          </div>

          <div class="card">
            <img
              class="card-img-top"
              src="../assets/01_LandingPage/resol-prob.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">Resolución de problemas:</h4>
              <p class="card-text">
                Evaluar la capacidad de representar un problema, diseñar una solución y sustentarla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End mosaics -->
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import LogoutComponent from "./LogoutComponent.vue";

export default {
  components: { LogoutComponent },
  data() {
    return {
      user: null,
      dialogTerms: false,
      radioGroupOptions: ['Acepto participar en el estudio.', 'No acepto participar en el estudio.'],
      radioGroupSelectedOption: 0,
    };
  },
  methods: {
    validateTermsAndConditions() {
      if(this.radioGroupSelectedOption == 0) {
        // aceptó los términos y condiciones
        this.$router.push({name: 'Login'});
      } else {
        // No aceptó
        this.dialogTerms = false;
      }
    }
  },
  mounted() {
    const auth = getAuth();
    this.user = auth.currentUser;
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
@import "../assets/style.css";
@import "../assets/responsive.css";

.stepsOrderedList li{
  display: list-item;
}
</style>
