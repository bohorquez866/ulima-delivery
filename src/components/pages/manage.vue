<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Edad
          </th>
          <th class="text-left">
            Respuestas
          </th>
          <th class="text-left">
            Procesado
          </th>
          <th class="text-left">
            Editar
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in students"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td><a @click="clickeMethod">{{'stats'}}</a></td>
          <td>
            <p v-if="item.process === true">Si</p>
            <p v-else>No</p>
          </td>
          <td> 
            <dialogStudent :studentId="item.email"/>
          </td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>

import { getListStudents } from "../../firebase/getfirestoredata";
import  dialogStudent  from "../pages/dialogStudent.vue";


export default {

  props: {

  },
  components: {
    dialogStudent,
  },
    data () {
      return {
        students: [],
          
      }
    },

    methods: {
      setStudents: async function(){
        this.students = await getListStudents()
      },
      clickeMethod: function(){
        console.log('click')
      }
    },
    created: function(){
        this.setStudents()
      }
    
  }
</script>


<style>
@import "../../assets/vistas_styles.css";
@import "../../assets/pregs_styles.css";
</style>
