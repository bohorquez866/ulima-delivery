<template>
  <button class="btn_logout" @click="logout">Cerrar sesión</button>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  methods: {
    logout() {
      const auth = getAuth();

      signOut(auth)
        .then(() => {
          this.$router.replace({ name: "Login" });
          sessionStorage.removeItem("user");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
