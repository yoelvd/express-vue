<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo-eicma.png')"
          class="my-3"
          contain
          height="150"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Tareas</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="col-12">
        <p class="my-2" v-for="feed in feeds" :key="feed.id">
          {{ feed.nombre }} -- {{ feed.cid }} -- {{ feed.cargo }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",

  data: () => ({
    feeds: [],
  }),
  async created() {
    fetch("http://localhost:8000/tecnicos/")
      .then((response) => response.json())
      .then((data) => (this.feeds = data));
  },
};
</script>
