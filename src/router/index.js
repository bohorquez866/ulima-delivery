import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import InstruccionesPage from "@/components/pages/instrucciones_page.vue";
import IntroEscenario1 from "@/components/pages/intro_escenario_1.vue";
import Pregunta1 from "@/components/pages/Pregunta1.vue";
import ManagePage from "@/components/pages/manage.vue";
import Pregunta2 from "@/components/pages/pregunta2.vue";
import Pregunta3 from "@/components/pages/pregunta3.vue";
import HomePage from "@/components/pages/home.vue";
import IntroEscenario2 from "@/components/pages/intro_escenario_2.vue";
import Pregunta2a from "@/components/pages/preg2a.vue";
import Pregunta2b from "@/components/pages/preg2b.vue";
import Pregunta2c from "@/components/pages/preg2c.vue";
import Pregunta3a from "@/components/pages/preg3a.vue";
import Pregunta3b from "@/components/pages/preg3b.vue";
import Pregunta3c from "@/components/pages/preg3c.vue";
import LoginView from "@/components/Views/LoginView.vue";
import LoginAdminView from "@/components/Views/LoginAdminView.vue";
import RegisterView from "@/components/Views/RegisterView.vue";
import LandingPage from "@/components/LandingPage.vue";
import NotFound from "@/components/Views/NotFound.vue";
import { getAuth } from "firebase/auth";

Vue.use(VueRouter);
Vue.use(VueMeta);



const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomePage,
      redirect: "/landing",
    },
    { name: "LandingPage", path: "/landing", component: LandingPage },
    {
      name: "Login",
      path: "/login",
      component: LoginView,
    },
    {
      name: "Login",
      path: "/login-admin",
      component: LoginAdminView,
    },
    {
      name: "Register",
      path: "/register",
      component: RegisterView,
    },

    {
      name: "InstruccionesPage",
      path: "/instrucciones_page",
      component: InstruccionesPage,
      meta: {
        requiresAuth: true,
      },
    },

    {
      name: "ManagePage",
      path: "/management",
      component: ManagePage,
      meta: {
        requiresAuth: true,
      },
    },

    {
      name: "IntroEscenario1",
      path: "/intro_escenario_1",
      component: IntroEscenario1,
      meta: {
        requiresAuth: true,
      },
    },

    {
      name: "Pregunta1",
      path: "/escenario1/pregunta1/:id",
      component: Pregunta1,
      meta: {
        requiresAuth: true,
      },
    },

    {
      name: "Pregunta2",
      path: "/escenario1/pregunta2/:id",
      component: Pregunta2,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "Pregunta3",
      path: "/escenario1/pregunta3/:id",
      component: Pregunta3,
      meta: {
        requiresAuth: true,
      },
    },

    {
      name: "IntroEscenario2",
      path: "/intro_escenario_2",
      component: IntroEscenario2,
      meta: {
        requiresAuth: true,
      },
    },

    {
      name: "Pregunta2a",
      path: "/escenario1/pregunta2a/:id",
      component: Pregunta2a,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "Pregunta2b",
      path: "/escenario1/pregunta2b/:id",
      component: Pregunta2b,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "Pregunta2c",
      path: "/escenario1/pregunta2c/:id",
      component: Pregunta2c,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "Pregunta3a",
      path: "/escenario1/pregunta3a/:id",
      component: Pregunta3a,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "Pregunta3b",
      path: "/escenario1/pregunta3b/:id",
      component: Pregunta3b,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "Pregunta3c",
      path: "/escenario1/pregunta3c/:id",
      component: Pregunta3c,
      meta: {
        requiresAuth: true,
      },
    },

    // {
    //   name: "Escenarios",
    //   path: "/escenarios",
    //   component: Escenarios,
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },

    {
      name: "NotFound",
      path: "*",
      component: NotFound,
    },
  ],
});

const auth = getAuth();

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth?.uid) {
    next({ name: "InstruccionesPage" });
    return;
  }

  // if (to.matched.some((record) => record.meta.requiresAuth) && auth?.currentUser === null) {
  //   next("/login");
  //   return;
  // }

  next();
});

export default router;
