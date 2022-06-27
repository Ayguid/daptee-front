<template>
  <div class="users pt-4 px-4">
    Vista Usuarios
    <v-row no-gutters>
      <v-col cols="12" sm="12">
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <v-menu bottom left transition="slide-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>Editar</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Eliminar</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            {{ item.name }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapState } from "vuex";

export default {
  name: "UsersView",
  data() {
    return {
      headers: [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "firstName",
        },
        { text: "Apellido", value: "lastName" },
        { text: "email", value: "email" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
    };
  },
  components: {
    //HelloWorld
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  computed: {
    ...mapState(["users"]),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fetchUsers();
    });
  },
};
</script>
