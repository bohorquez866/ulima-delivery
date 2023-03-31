<template>
  <v-container align="center">
    <v-row justify="center">
      <v-col cols="12" sm="1"></v-col>
      <v-col cols="12" sm="5">
        <v-text-field
          :value="this.items.V1a"
          label="1a"
          outlined
          v-model="V1a"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="5">
        <v-text-field
          :value="this.items.V1b"
          label="1b"
          outlined
          v-model="V1b"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="1"></v-col>
      <v-col cols="12" sm="1"></v-col>

      <v-col cols="12" sm="5">
        <v-text-field
          :value="this.items.V1c"
          label="1c"
          outlined
          v-model="V1c"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="5">
        <v-text-field
          :value="this.items.V2a"
          label="2a"
          outlined
          v-model="V2a"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="1"></v-col>
      <v-col cols="12" sm="1"></v-col>

      <v-col cols="12" sm="5">
        <v-text-field
          :value="this.items.V2b"
          label="2b"
          outlined
          v-model="V2b"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="5">
        <v-text-field
          :value="this.items.V2c"
          label="2c"
          outlined
          v-model="V2c"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="1"></v-col>
      <v-col cols="12" sm="4"></v-col>
      <v-col cols="12" sm="4">
        <v-btn depressed color="primary" @click="saveSub">
          Save
        </v-btn>
      </v-col>
      <v-col cols="12" sm="4"></v-col>
    </v-row>
  </v-container>
</template>
<script>
import { setSubText, saveSubText } from '../../firebase/getSubScores';
export default {
  props: ['studentId', 'subname'],
  data() {
    return {
      items: { V1a: 0, V1b: 0, V1c: 0, V2a: 0, V2b: 0, V2c: 0 },
      value: '5',
      V1a: 0,
      V1b: 0,
      V1c: 0,
      V2a: 0,
      V2b: 0,
      V2c: 0,
    };
  },
  methods: {
    setSubs: async function() {
      this.items = await setSubText(this.studentId, this.subname);
      console.log(this.items.V1a);
      this.V1a = this.items.V1a;
      this.V1b = this.items.V1b;
      this.V1c = this.items.V1c;
      this.V2a = this.items.V2a;
      this.V2b = this.items.V2b;
      this.V2c = this.items.V2c;
    },
    saveSub: async function() {
      var dictSubValues = {
        '1a': parseInt(this.V1a),
        '1b': parseInt(this.V1b),
        '1c': parseInt(this.V1c),
        '2a': parseInt(this.V2a),
        '2b': parseInt(this.V2b),
        '2c': parseInt(this.V2c),
      };
      await saveSubText(this.studentId, this.subname, dictSubValues);
    },
  },
  created: function() {
    this.setSubs();
  },
};
</script>
