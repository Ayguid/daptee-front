<template>

    <v-row no-gutters>
      <v-col class="d-flex align-center" cols="4" >
        <v-text-field
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-col>

      <v-col class="d-flex justify-end" cols="8" >
        <v-btn class="ma-2" outlined small fab color="indigo">
          <v-icon>mdi-lock</v-icon>
        </v-btn>
      </v-col>
    </v-row>
</template>
<script>
export default {
  name: "MainBar",

  data: () => ({}),
};
</script>
