<template>
  <v-dialog max-width="900">
    <template v-slot:activator="{ on }">
      <v-btn ripple text slot="activator" class="success ma-6" v-on="on"
        >Nueva entrada</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <h3>Nueva Entrada</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-container fluid class="mt--1">
            <v-row align="center">
              <v-col class="col-9">
                <!-- <v-text-field
                  label="Tecnico"
                  prepend-icon="mdi-pencil"
                ></v-text-field> -->
                <v-select
                  v-model="tecnico"
                  hint="Nombre y Apellidos del Tecnico"
                  :items="tecnicos"
                  item-text="nombre"
                  item-value="id"
                  label="Tecnico:"
                  persistent-hint
                  prepend-icon="mdi-account-arrow-right"
                  return-object
                  single-line
                ></v-select>
                <!--DatePicker-->
              </v-col>
              <v-col class="col-3">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col class="col-10 caption">
                <v-icon class="mr-1">mdi-plus</v-icon>
                Si desea adicionar mas productos haga click en el boton
              </v-col>
              <v-col class="col-2 text-right">
                <v-btn small @click="add()">+</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="col-2">
                <v-select
                  v-model="producto"
                  hint="Seleccione el producto"
                  :items="productos"
                  item-text="nombreproducto"
                  item-value="id"
                  label="Producto:"
                  persistent-hint
                  prepend-icon="mdi-account-arrow-right"
                  return-object
                  single-line
                ></v-select>
              </v-col>
              <v-col class="col-2"
                ><v-text-field
                  label="Cantidad"
                  prepend-icon="mdi-pencil"
                ></v-text-field>
              </v-col>
              <v-col class="col-2">
                <v-text-field
                  label="Entregado"
                  prepend-icon="mdi-pencil"
                ></v-text-field>
              </v-col>
              <v-col class="col-2">
                <v-text-field
                  label="Facturado"
                  prepend-icon="mdi-pencil"
                ></v-text-field>
              </v-col>
              <v-col class="col-4">
                <v-btn text class="mt-3 grey--text"
                  ><v-icon>mdi-pencil</v-icon>Editar</v-btn
                >
                <v-btn text class="mt-3 grey--text"
                  ><v-icon>mdi-delete</v-icon>Eliminar</v-btn
                >
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
    productos: [],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    tecnico: false,
    producto: false,
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
    fetch("http://localhost:8000/productos/")
      .then((response) => response.json())
      .then((data) => {
        this.productos = data;
        //console.log(this.tecnicos[0].nombre);
      });
  },
  methods: {
    add() {
      alert("Hola");
    },
  },
};
</script>