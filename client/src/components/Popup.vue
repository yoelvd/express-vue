<template>
  <v-dialog max-width="700">
    <template v-slot:activator="{ on }">
      <v-btn ripple text slot="activator" class="success ma-6" v-on="on"
        >Nueva entrada</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <h2>Nueva Entrada</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-container fluid>
            <v-row align="center">
              <v-col>
                <!-- <v-text-field
                  label="Tecnico"
                  prepend-icon="mdi-pencil"
                ></v-text-field> -->
                <v-select
                  v-model="select"
                  hint="Nombre y Apellidos del Tecnico"
                  :items="tecnicos"
                  item-text="nombre"
                  item-value="cid"
                  label="Tecnico:"
                  persistent-hint
                  prepend-icon="mdi-account-arrow-right"
                  return-object
                  single-line
                ></v-select>
                <!--DatePicker-->
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="true"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      class="mt-4"
                      v-model="date"
                      hint="Escoja una fecha"
                      prepend-icon="mdi-calendar"
                      persistent-hint
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Popup",

  data: () => ({
    tecnicos: [],
    clientes: [],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    select: false,
  }),
  async created() {
    fetch("http://localhost:8000/tecnicos/")
      .then((response) => response.json())
      .then((data) => {
        this.tecnicos = data;
        //console.log(this.tecnicos[0].nombre);
      });
    fetch("http://localhost:8000/clientes/")
      .then((response) => response.json())
      .then((data) => {
        this.clientes = data;
        //console.log(this.tecnicos[0].nombre);
      });
  },
};
</script>