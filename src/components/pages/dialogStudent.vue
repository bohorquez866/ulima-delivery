<template>
  <v-row align="center" justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="clickeMethod"
          
        >
          Editar
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Editar subs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            
          </v-toolbar-items>
        </v-toolbar>
        <v-expansion-panels>
        <v-expansion-panel v-for="sub in subs" :key="sub.name">
        <v-expansion-panel-header>{{sub.name}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row no-gutters>
      <v-col
        cols="12"
        sm="8"
        class="d-flex"

      >
      <v-card elevation="2" width="100%">
        <template>
          <v-treeview :items="sub07"></v-treeview>
        </template>
      </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        class="d-flex"
      >
      <v-card elevation="2" width="100%" >
        <textAreas :subname="sub.name" :studentId=idStudent />
      </v-card>
      </v-col>
    </v-row>
          <v-col cols="2">
          </v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { getSubData, setSub } from "../../firebase/getSubScores";
import  textAreas  from "../pages/textAreas.vue";

  export default {
    props: ['studentId'],
    components: {
    textAreas,
  },
    data () {
      return {
        dialog: false,
        idStudent: this.studentId,
        sound: true,
        widgets: false,
        sub07: '',
        subs: [{name: 'sub07'},
               {name: 'sub08'},
               {name: 'sub11'},
               {name: 'sub12'},
               {name: 'sub13'},
               {name: 'sub14'}]
      }
    },
    methods: {
      
      clickeMethod: async function(){
        this.sub07 = await getSubData(this.studentId) 
      },
      saveSubs: async function(){
        await setSub(this.studentId,"sub07") 
        await setSub(this.studentId,"sub08") 
        await setSub(this.studentId,"sub11") 
        await setSub(this.studentId,"sub12") 
        await setSub(this.studentId,"sub13")
        await setSub(this.studentId,"sub14") 

      }
    }
  }
</script>