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
            Exportar
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
          <td>
            <export-excel
    class   = "btn btn-default"
    :data   = "json_data"
    :fields = "json_fields"
    type = "csv"
    name    = "filename.xls" >
    Download Data
    <img src="../../assets/Manage_page/excel_icon.svg">
</export-excel>
            </td>
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
        json_fields: {
            'Pregunta': 'pregunta',
            'A01':'A01',
            'A02':'A02',
            'A03':'A03',
            'A04':'A04',
            'A05':'A05',
            'A06':'A06',
            'A07':'A07',
            'A08':'A08',
            'A09':'A09',
            'A10':'A10',
            'A11':'A11',
            'A12':'A12',
            'A13':'A13',
            'A14':'A14'
            
        },
        json_data: [
            {
                'pregunta': '1a',
                'A01':'0',
                'A02':'0',
                'A03':'0',
                'A04':'0',
                'A05':'0',
                'A06':'0',
                'A07':'0',
                'A08':'0',
                'A09':'0',
                'A10':'0',
                'A11':'0',
                'A12':'0',
                'A13':'0',
                'A14':'0'
            },
            {
                'pregunta': '1b',
                'A01':'0',
                'A02':'0',
                'A03':'0',
                'A04':'0',
                'A05':'0',
                'A06':'0',
                'A07':'0',
                'A08':'0',
                'A09':'0',
                'A10':'0',
                'A11':'0',
                'A12':'0',
                'A13':'0',
                'A14':'0'

            }
        ],
        json_meta: [
            [
                {
                    'key': 'charset',
                    'value': 'utf-8'
                }
            ]
        ],
          
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
