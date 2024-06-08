<template>
  <div class="sup_box" id="container">
    <form @submit.prevent="login" class="form_box">
      <h1>Ingresar</h1>

      <input class="email_input" type="email" placeholder="Email" v-model="email" />
      <input class="email_input" type="password" placeholder="Password" v-model="password" />
      <p class="errorMessage">{{ error }}</p>

      <button class="btn_model" type="submit">{{isCheckingLogin ? 'Ingresando...': 'Empezar'}}</button>
    </form>

    <div class="right-box">
      <carousel :perPage="1" :autoplay="true" :autoplayTimeout="6000">
        <Slide class="item">
          <img
            src="../../assets/03_Login/i01.jpg"
            alt="Pensamiento Computacional"
            width="500"
            height="385"
            class="swiper-Lazy"
          />
          <div class="carousel-caption">
            <p>
              El pensamiento computacional consiste en la capacidad de describir un problema,
              identificar los detalles importantes que se necesitan y dividirlo en pequeños pasos
              lógicos que puedan crear un proceso que resuelva este problema.
            </p>
          </div>
        </Slide>

        <Slide class="item">
          <img
            src="../../assets/03_Login/i02.jpg"
            alt="Tiempo de prueba."
            width="400"
            height="285"
            class="swiper-Lazy"
          />
          <div class="carousel-caption">
            <p>
              La prueba demora un aproximado de 40 minutos. Una vez ingresas, no puedes salir de la
              evaluación.
            </p>
          </div>
        </Slide>

        <Slide class="item">
          <img
            src="../../assets/03_Login/i03.jpg"
            alt="Escenarios"
            width="400"
            height="285"
            class="swiper-Lazy"
          />
          <div class="carousel-caption">
            <p>
              Se divide en 2 escenarios divididos en 3 preguntas cada uno. El primero trata sobre la
              identificación de caminos óptimos y el segundo, sobre el análisis de patrones.
            </p>
          </div>
        </Slide>

        <Slide class="item">
          <img
            src="../../assets/03_Login/i04.jpg"
            alt="Pensamiento computacional"
            width="500"
            height="385"
            class="swiper-Lazy"
          />
          <div class="carousel-caption">
            <p>
              Pensamiento computacional no es saber programación. No te preocupes, no vamos a
              hackear la NASA.
            </p>
          </div>
        </Slide>
      </carousel>
    </div>
  </div>
</template>

<script>
// import * as firebase from "../../firebase";
import { Carousel, Slide } from "vue-carousel";
import { setPersistence, signInWithEmailAndPassword, browserLocalPersistence } from "firebase/auth";
import { auth } from "../../firebase";
import { getFirebaseData } from "../../firebase/getfirestoredata";


export default {
  components: {
    Carousel,
    Slide,
  },
  name: "LoginView",
  data() {
    return {
      error: "",
      email: "",
      password: "",
      isCheckingLogin: false,
    };
  },

  methods: {
    async login() {
      this.isCheckingLogin = true;

      var isLogged = false;
      if (!this.email || !this.password) {
        this.error = "Por favor, ingresa tu email y contraseña";
        setTimeout(() => {
          this.error = "";
        }, 1500);

        this.isCheckingLogin = false;
        return;
      }
      setPersistence(auth, browserLocalPersistence).then(() => {
        signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
            isLogged = true;
            getFirebaseData().then((value) => {
              if(value && isLogged) {
                // is administrator
                this.isCheckingLogin = false;
                this.$router.replace({ name: "ManagePage" });
              }
            })
            .catch((error) => {
              this.isCheckingLogin = false;
              console.log('error on login-admin', error)
            });
          })
          .catch((error) => {
            this.isCheckingLogin = false;
            switch (error.code) {
              case "auth/user-not-found":
                console.log("auth/user-not-found", error);
                this.error = "Usuario no encontrado";
                setTimeout(() => {
                  this.error = "";
                }, 2000);
                break;
              case "auth/wrong-password":
                console.log("auth/wrong-password", error);
                this.error = "Contraseña incorrecta";
                setTimeout(() => {
                  this.error = "";
                }, 2000);
                break;

              default:
                console.log("auth/default", error);
                this.error = "Ha ocurrido un error";
                break;
            }
          });
      });
    },
  },
};
</script>
<style>
@import "../../assets/style_login.css";
</style>
