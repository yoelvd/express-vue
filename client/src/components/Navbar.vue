<template>
  <div>
    <v-app-bar app height="55px">
      <v-app-bar-title class="grey--text">
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
          <!--ICON-->
        </v-app-bar-nav-icon>
        <span class="ml-2">&lt;EICMA</span>
        <span class="font-weight-light">VILLA CLARA&gt;</span>
      </v-app-bar-title>

      <!--  Por si lo necesito lo comento ...
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">CERRAR</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" color="#CFD8DC">
      <v-layout column align-center>
        <v-flex class="mt-6">
          <v-avatar size="80" class="grey lighten-3">
            <img src="../assets/logo-eicma.png" />
          </v-avatar>
        </v-flex>
        <span class="my-2">Usuario EICMA</span>
        <Popup />
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.ruta"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Popup from "./Popup";
export default {
  name: "Navbar",

  data: () => ({
    drawer: false,
    links: [
      { icon: "mdi-home", text: "Inicio", ruta: "/" },
      { icon: "mdi-pencil", text: "Nuevo", ruta: "/new" },
      { icon: "mdi-close", text: "Cerrar", ruta: "/logout" },
    ],
  }),
  components: {
    Popup,
  },
};
</script>
