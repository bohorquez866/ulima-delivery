<template>
  <div class="view__container">
    <div class="breadcrumb">
      <router-link
        :to="{
          name: 'ManagePage',
        }"
        class="router"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
        Management
      </router-link>
    </div>

    <h2>Nombre: {{ student.name }}</h2>
    <div class="section__container">
      <h3>Aspectos importantes</h3>
      <div class="carousel__container">
        <carousel
          :perPage="4"
          :paginationEnabled="false"
          :navigationEnabled="true"
          :scrollPerPage="true"
        >
          <slide v-for="question in questions" :key="question">
            <div v-if="student.grades[question] && student.data[question]" class="question__container">
              <h4>{{ question }}</h4>
              <div class="input">
                <div>
                  <input
                    v-model="student.grades[question].aspecto"
                    type="text"
                    placeholder="Ingrese un puntaje"
                  />
                </div>
              </div>
              <h5>Aspectos</h5>
              <div class="aspects__container">
                <p
                  v-for="aspect in student.data[question][0].aspectos"
                  :key="aspect"
                >
                  {{ aspect }}
                </p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
    <div class="section__container">
      <h3>Justificación</h3>
      <div class="carousel__container">
        <carousel
          :perPage="4"
          :paginationEnabled="false"
          :navigationEnabled="true"
          :scrollPerPage="true"
        >
          <slide v-for="question in questions.slice(1)" :key="question">
            <div v-if="student.grades[question] && student.data[question]" class="question__container question__container-base">
              <h4>{{ question }}</h4>
              <div class="input">
                <div>
                  <input
                    v-model="student.grades[question].justificacion"
                    type="text"
                    placeholder="Ingrese un puntaje"
                  />
                </div>
              </div>
              <h5>Justificación</h5>
              <div class="aspects__container">
                <p>
                  {{ student.data[question][0].sustentar }}
                </p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
    <div class="section__container">
      <h3>Identificación</h3>
      <div class="carousel__container">
        <carousel
          :perPage="4"
          :paginationEnabled="false"
          :navigationEnabled="true"
          :scrollPerPage="true"
        >
          <slide v-for="question in [questions[3], questions[4]]" :key="question">
            <div v-if="student.grades[question] && student.data[question]" class="question__container question__container-base">
              <h4>{{ question }}</h4>
              <div class="input">
                <div>
                  <input
                    v-model="student.grades[question].identificacion"
                    type="text"
                    placeholder="Ingrese un puntaje"
                  />
                </div>
              </div>
              <h5>Identificación</h5>
              <div class="aspects__container">
                <p>
                  {{ student.data[question][0].identProblema }}
                </p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
    <button @click="onSave" style="margin-top: 15px;">
      <div>{{ loading ? 'Guardando...' : 'Guardar' }}</div>
    </button>
  </div>
</template>

<script>
import {
  getStudentById,
  setStudentGrades,
} from '../../firebase/getfirestoredata';
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'EditSubs',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      loading: false,
      student: {},
      questions: [
        'pregunta1',
        'pregunta2',
        'pregunta3',
        'pregunta4',
        'pregunta5',
        'pregunta5p2',
        'pregunta6',
        'pregunta6p3',
      ],
    };
  },

  methods: {
    async onSave() {
      this.loading = true;
      await setStudentGrades(this.student.email, this.student.grades);
      this.loading = false;
    },
  },

  async mounted() {
    let tempStudent = await getStudentById(this.$route.params.studentId);
    if (tempStudent.grades === undefined) {
      tempStudent.grades = {};
      this.questions.forEach((question) => {
        tempStudent.grades[question] = {
          aspecto: '',
          justificacion: '',
          identificacion: '',
        };
      });
    }
    this.student = tempStudent;
  },
};
</script>

<style>
.view__container {
  padding: 2rem 2rem;
  padding-top: 5rem;
  position: relative;
}

.breadcrumb {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  background-color: #f7f7f5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4rem;
  padding: 1rem;
}

.breadcrumb svg {
  height: 1rem;
  fill: #2383e2;
}

.breadcrumb .router {
  display: flex;
  gap: 1rem;
  align-items: center;
  outline: none;
  text-decoration: none;
  font-weight: 600;
  color: #2383e2;
}

.view__container * {
  font-family: 'Inter', sans-serif;
}

h3 {
  font-weight: 600;
  color: #0a1020;
}

h5 {
  color: #707782;
  font-size: 1rem;
  font-weight: 600;
}

.section__container {
  margin-top: 1rem;
  border: solid 2.3px #e8e8ea;
  border-radius: 15px;
  padding: 1rem;
  padding-bottom: 2rem;
}
.carousel__container {
  padding: 0 1.2rem;
  width: 100%;
  margin-bottom: 1.5rem;
}
.question__container {
  height: 15rem;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  align-items: left;
  gap: 0.8rem;
  border: solid 2.3px #e8e8ea;
  margin: 1rem;
  margin-top: 2rem;
}

.question__container > div {
  width: 100%;
}

.question__container p {
  width: 100%;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset;
  background: rgba(242, 241, 238, 0.6);
  font-size: 14px;
  line-height: 20px;
  padding: 3px 10px;
  overflow-wrap: break-word;
}

.question__container-base {
  height: 14rem;
}

.aspects__container {
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 0.5rem;
}

button {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  border-radius: 3px;
  overflow: hidden;
  height: 28px;
  margin-left: 8px;
  font-size: 14px;
}
button > div {
  height: 100%;
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  line-height: 1.1;
  padding-left: 8px;
  padding-right: 8px;
  font-weight: 500;
  background: rgb(35, 131, 226);
  color: white;
  font-weight: 500;
}

.input {
  display: flex;
}

.input > div {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  padding: 3px 0px;
  position: relative;
  border-radius: 4px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset;
  background: rgba(242, 241, 238, 0.6);
  cursor: text;
  height: 28px;
}
input {
  font-size: inherit;
  line-height: inherit;
  border: none;
  background: none;
  width: 100%;
  display: block;
  resize: none;
  padding: 0px;
  border-radius: 0;
}

.input > div:focus-within {
  box-shadow: rgba(35, 131, 226, 0.57) 0px 0px 0px 1px inset,
    rgba(35, 131, 226, 0.35) 0px 0px 0px 2px !important;
  border-radius: 0;
}

input:focus,
input:focus-visible {
  border: none;
  outline: none;
}
</style>
