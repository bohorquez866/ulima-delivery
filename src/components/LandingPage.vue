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
        <router-link :to="{ name: 'Login' }">
          <div class="over_button second_btn">
            <button class="btn_model start_btn_test">
              Iniciar Test
            </button>
          </div>
        </router-link>
      </div>
      <div class="slider_img-box">
        <img src="../assets/01_LandingPage/p03.svg" alt="" class="" />
      </div>
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
    };
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
</style>
