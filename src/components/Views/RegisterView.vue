<template>
  <div class="superior_container">
    <form action="#" @submit.prevent="submitRegister" class="formulario">
      <h1 class="title_h1">Inscripción en la prueba</h1>

      <div class="names_div">
        <input
          class="name name_1"
          type="text"
          placeholder="Nombre"
          required
          v-model="formData.name"
        />
        <input
          class="last"
          type="text"
          placeholder="Apellido"
          v-model="formData.lastName"
        />
      </div>

      <div class="select_div">
        <div class="select">
          <select required="true" v-model="formData.age">
            <option :value="'age'" disabled selected>Edad</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
          </select>
          <div class="select_arrow"></div>
        </div>
        <!--  -->
        <div class="select">
          <select required="true" v-model="formData.gender">
            <option :value="'Genero'" disabled selected>Sexo</option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
          <div class="select_arrow"></div>
        </div>
      </div>

      <input
        class="edu"
        type="text"
        placeholder="Centro Educativo"
        v-model="formData.EducationCenter"
      />

      <div class="selections">
        <p>
          Según tu perspectiva, ¿Cuál es tu nivel de conocimiento en computación
          y programación*?
        </p>
        <p class="definition">
          * Programación: Utilizar lenguajes de programación para crear un
          conjunto de instrucciones que realicen una acción en la computadora
        </p>
        <div class="selection_box">
          <div class="select">
            <select v-model="formData.Computing">
              <option :value="'Computing'" disabled selected
                >Computación</option
              >
              <option>Ninguna</option>
              <option>Básico</option>
              <option>Intermedio</option>
              <option>Avanzado</option>
            </select>
            <div class="select_arrow"></div>
          </div>

          <div class="select">
            <select v-model="formData.Programing">
              <option :value="'Programing'" disabled selected
                >Programación</option
              >
              <option>Ninguna</option>
              <option>Básico</option>
              <option>Intermedio</option>
              <option>Avanzado</option>
            </select>
            <div class="select_arrow"></div>
          </div>
        </div>
      </div>

      <input
        class="inputs_form"
        type="email"
        placeholder="Ingresar correo electrónico"
        v-model="email"
      />
      <input
        class="inputs_form"
        type="password"
        placeholder="Ingresar contraseña"
        v-model="password"
      />
      <p v-if="error" class="error-message">{{ error }}</p>

      <!-- <div class="check-terms">
        <input
          type="checkbox"
          name="terms and conditions"
          id=""
          required="true"
          class="check"
        />
        <p class="terms">Estoy de acuerdo en participar en el test</p>
      </div> -->

      <!-- <button class="btn_model">Registrarme</button> -->

      <div class="btn_model" style="cursor: pointer;" @click="dialogTerms = true">
        Registrarme
      </div>

      <p class="have-account">
        Ya tienes cuenta?
        <router-link :to="{ name: 'Login' }">Log in</router-link>
      </p>

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

            <v-checkbox
              v-model="formData.accepted"
              label="Estoy de acuerdo en participar en el test"
            ></v-checkbox>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="validateTermsAndConditions">
              Continuar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </form>
  </div>
</template>

<script>
import { signUp } from '../../firebase';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      error: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      dialogTerms: false,

      formData: {
        gender: 'Genero',
        age: 'age',
        Computing: 'Computing',
        Programing: 'Programing',
        accepted: false,
      },
    };
  },

  methods: {
    validateTermsAndConditions() {
      if(this.formData.accepted) {
        // aceptó los términos y condiciones
        // this.$router.push({name: 'Login'}); Ya no más
        this.submitRegister();
        this.dialogTerms = false;
      } else {
        // No aceptó
        this.error = 'Debe aceptar los términos y condiciones para continuar'
        this.dialogTerms = false;
      }
    },
    async submitRegister() {
      try {
        await signUp(this.email, this.password)
          .then(() => this.getSignUpData())
          .then(() => this.$router.replace({ name: 'Login' }));
      } catch (error) {
        this.formData.accepted = false;
        this.error = error.code;

        switch (error.code) {
          case 'auth/email-already-in-use':
            this.error = 'El correo ya está en uso';
            break;

          case 'auth/invalid-email':
            this.error = 'El correo no es válido';
            break;

          case 'auth/weak-password':
            this.error = 'La contraseña debe tener al menos 6 caracteres';
            break;
          default:
            break;
        }
      }
    },

    getSignUpData() {
      const db = getFirestore();
      const userRef = doc(db, 'users', this.email);
      setDoc(userRef, this.formData, { merge: true });
    },
  },
};
</script>

<style>
@import '../../assets/style_register.css';

.error-message {
  color: red;
  width: 100%;
  text-align: center;
  background: rgba(255,0,0,0.2);
  margin-top: 15px;
  padding-block: 10px;
  border-radius: 30px;
}
</style>
