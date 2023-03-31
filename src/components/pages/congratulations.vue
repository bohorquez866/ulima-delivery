<template>
  <div class="div_father">
    <h2>Felicidades has completado el Test correctamente</h2>

    <div class="images">
      <div>
        <img
          class="img_table"
          src="../../assets/complete-31-128.png"
          alt="Finish"
        />
      </div>
    </div>

    <slot></slot>
  </div>
</template>
<script>
var doc = '';
const { GoogleSpreadsheet } = require('google-spreadsheet');
(async function() {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  doc = new GoogleSpreadsheet('1fI43HtfxLceF9d4wlx1qNKttE4J68xvUo828ykV_CbM');

  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await doc.useServiceAccountAuth({
    client_email: 'arianf@dotted-medley-326516.iam.gserviceaccount.com',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgCUx/AqfeaWV0\nL0fGMl0yLFSPk7itNcEe143qjziiCK3hIi8xpNZpeyw5Venb0E9Xjg5SY9uv/n61\nvpDIxIs5DfTE3ycc90iReGCIYHABLC1XHQ6Co8xhljsHtb7ro2kp7880KF5iUMK1\nOwE16SYhsBXUAGrH6fzbZDunQMOHXLrz0TbWfHdh53b9/aiKOmHeJ6NpulGAOtA/\nhKCNylC+KHgDzJiYrAhjGhiMI7O6Hj2bb9PKaP5ceGPJiVHJT1fC8Nz2aH30FpQX\n/IOI+eRZmJbPXDiFfAKhd9aouDK7KfROUnnd/ij9emawCrzAIKCrOJOgKQtQ41kZ\nacA2YfuvAgMBAAECggEAYpEExE6FT6+cMLlKgTMQWK4zR/XshtxDCpA4gm2fs35R\nDd9t1xAYO1EzPEiFuq2T8sfvmiUP9wbndYuRhJsgS6pNub4aJb7QARxukCGptYJb\nslt40lZBad/gObym8mIzNv2ocmCeYe/5MiXzGuZoXeLsP5ktYaYbFuUq76NpQyhg\n5nD9MGIFAD2i6VcOUsFIymhQRlOjZUtJVS3aRB4IrFGqZS//mv8Ig0yfGeSzBghv\nLnX7da6KovjqkhTzKiQKOBQaH2C9oJh5uHTz+T+dDrGoqhNca/2ok8B6oih54R+V\nWxm0Af/LRaJaAojIIF/wHk6VEWA9GfPoxL6WcumrTQKBgQDw2x8QitR0FF8+WICn\npTSUhqX2gOr2FWcDep0Tdan7Hta+az2sN7f1uUallAHeoA/SurvAIbvWn9kfbXvA\nTZqLK3BjKmpfANqvRo6IUTPynxamlf/05gUGAUlHOrl34ieqy6W+E6ZEjX+pCS5m\nJRrAvqE+YtvOIbitj2vo+cPiowKBgQDuH3HQex6GZHtiznaQqZNG8yRxySwIs2Yq\nkSiZtN2i2XCSVzaI4HGiKQF3smyFBiM8XkstYzOeQtNYBo6EsV7y/ZNpdeF1+q/F\nAb2izakKtKVTPFbEskFr/qdZhJA4935p//oz1ew4OHlaLo24vkwBq180LRLLy2BB\nMdeQRl6fhQKBgDW3KL5vt+ILiRJGeqro1UkqnmjTZ5NqQocsGUv1uesffZUKJb76\nzjQnFfJnh+M2n1DIBIdc/p9nFu1DZY4FwKm5Dl+PXhnB/wOIINGWCpfZkxuj6Gmd\nwxELyGPyXNq3vVECCfzSNQqk5Au22Ho/XDAQU7WuJodaTe2nRtG2olExAoGAOomy\nYg0SSPmEt5qH3TJCyWtWZz6MO6tWj1pV/8tNvQ31NZSJDIcYiEPKX5GWSfFjUiDg\nHE1J0DsfV4FtIcO00slxprha77Tr5uNxqgci6kXUaqznq70ihhj5LPGAvvBgvFA4\nQuvxATUo5/mPz33Ak5x8cAgwmbbqd7x4ALi75D0CgYEA5lxafnGk1GhZ/rUjd9tg\nlRDQoBPZi1SjBq4q+kztN3V2wWU/HmVF+ivkvz1W4X96ra7bNgpCSRI3N1Fhx7N1\nAA4gTjY7qxGhF3F62/eb/fLYYj7N6IV7MJnFJiPWEHyXB0qKliO+uTx7AVsEM2aa\nvIPa9JiF3qZYHqjfu5Rd/hY=\n-----END PRIVATE KEY-----\n',
  });

  await doc.loadInfo(); // loads document properties and worksheets
})();
import { setDefaultSubs } from '../../firebase/saveFirebaseData';
export default {
  data: () => ({}),

  computed: {},

  watch: {},

  async mounted() {
    await setDefaultSubs();
  },
};
</script>

<style>
.div_father {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.div_father > h2 {
  font-weight: 300;
  margin: 10px;
}

.images {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.btn_model {
  padding: 10px;
  border-radius: 30px;
  background-color: #0466c8;
  color: white;
  font-size: 14px;
}

.images > .img_table {
  width: 128px;
  height: auto;
}
</style>
