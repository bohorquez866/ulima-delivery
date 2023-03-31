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
          <th class="text-left" v-for="sub in Object.keys(subs)" :key="sub">
            {{ sub }}
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
              class="btn btn-default"
              :data="
                Object.keys(scores).reduce((prev, curr) => {
                  prev.push({ email: curr, ...scores[curr] });
                  return prev;
                }, [])
              "
              :fields="{ email: 'email', ...subs }"
              type="csv"
              name="filename.xls"
            >
              Download Data
              <img src="../../assets/Manage_page/excel_icon.svg" />
            </export-excel>
          </td>
          <td>
            <p v-if="item.process === true">Si</p>
            <p v-else>No</p>
          </td>
          <td>
            <!-- <dialogStudent :studentId="item.email" /> -->
            <router-link
              :to="{
                name: 'EditSubs',
                params: { studentId: item.email },
              }"
            >
              Editar
            </router-link>
          </td>
          <td v-for="sub in Object.keys(subs)" :key="sub">
            {{
              scores[item.email] !== undefined &&
              scores[item.email][sub] !== undefined
                ? scores[item.email][sub].toFixed(3)
                : ''
            }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import {
  getListStudents,
  setScoresBySubs,
} from '../../firebase/getfirestoredata';
// import dialogStudent from '../pages/dialogStudent.vue';

export default {
  props: {},
  components: {
    // dialogStudent,
  },
  data() {
    return {
      students: [],
      scores: [],
      subs: {
        AE1: 'AE1',
        AE2: 'AE2',
        AE3: 'AE3',
        AE4: 'AE4',
        AE5: 'AE5',
        AE6: 'AE6',
        AE7: 'AE7',
        AE8: 'AE8',
        AE9: 'AE9',
        AE10: 'AE10',
        AE11: 'AE11',
        AE12: 'AE12',
        AE13: 'AE13',
        AE14: 'AE14',
        ResProbl: 'ResProbl',
        creatividad: 'creatividad',
        pensAlg: 'pensAlg',
        pensCrit: 'pensCrit',
        CT: 'CT',
      },
      json_fields: {
        Pregunta: 'pregunta',
        A01: 'A01',
        A02: 'A02',
        A03: 'A03',
        A04: 'A04',
        A05: 'A05',
        A06: 'A06',
        A07: 'A07',
        A08: 'A08',
        A09: 'A09',
        A10: 'A10',
        A11: 'A11',
        A12: 'A12',
        A13: 'A13',
        A14: 'A14',
      },
      json_data: [
        {
          pregunta: '1a',
          A01: '0',
          A02: '0',
          A03: '0',
          A04: '0',
          A05: '0',
          A06: '0',
          A07: '0',
          A08: '0',
          A09: '0',
          A10: '0',
          A11: '0',
          A12: '0',
          A13: '0',
          A14: '0',
        },
        {
          pregunta: '1b',
          A01: '0',
          A02: '0',
          A03: '0',
          A04: '0',
          A05: '0',
          A06: '0',
          A07: '0',
          A08: '0',
          A09: '0',
          A10: '0',
          A11: '0',
          A12: '0',
          A13: '0',
          A14: '0',
        },
      ],
      json_meta: [
        [
          {
            key: 'charset',
            value: 'utf-8',
          },
        ],
      ],
    };
  },

  methods: {
    setStudents: async function() {
      this.students = await getListStudents();
    },
    setScores: async function() {
      this.scores = await setScoresBySubs();
    },
    clickeMethod: function() {
      console.log('click');
    },
  },
  created: async function() {
    await this.setStudents();
    await this.setScores();
  },
};
</script>

<style>
@import '../../assets/vistas_styles.css';
@import '../../assets/pregs_styles.css';
