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
      <p v-if="error">{{ error }}</p>

      <div class="check-terms">
        <input
          type="checkbox"
          name="terms and conditions"
          id=""
          required="true"
          class="check"
        />
        <p class="terms">Estoy de acuerdo en participar en el test</p>
      </div>

      <button class="btn_model">Registrarme</button>

      <p class="have-account">
        Ya tienes cuenta?
        <router-link :to="{ name: 'Login' }">Log in</router-link>
      </p>
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

      formData: {
        gender: 'Genero',
        age: 'age',
        Computing: 'Computing',
        Programing: 'Programing',
      },
    };
  },

  methods: {
    async submitRegister() {
      try {
        await signUp(this.email, this.password)
          .then(() => this.getSignUpData())
          .then(() => this.$router.replace({ name: 'Login' }));
      } catch (error) {
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
</style>
