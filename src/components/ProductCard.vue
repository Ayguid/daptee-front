<template>
  <v-card class="mx-auto">
    <v-img height="250" :src="product.thumbnail"></v-img>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="product.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ product.rating }}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ • {{ product.price }}</div>

      <div>
        {{ product.description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text> Comprar </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  data: () => ({}),
  methods: {},
};
</script>
