<template>
  <div class="products pt-4 px-4">
    Vista Productos
    <v-row>
      <v-col v-for="(product, i) in products" :key="i" cols="12" lg="2" md="3" sm="6" xs="12">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";

export default {
  name: "ProductsView",
  components: {
    ProductCard: () => import("@/components/ProductCard.vue"),
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  computed: {
    ...mapState(["products"]),
  },
  beforeRouteEnter(to, from, next) {
    console.log("Enter,,,");
    /*
    next((vm) => {//hace el req antes de la ruta pero entra a la pagina igual
      vm.fetchProducts();
    });
    */
    next(async (vm) => {//hace el req antes de la ruta pero espera a que termine para entrar a la pagina
      await vm.fetchProducts();
      next();
    });
    
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    console.log("Update,,,");
    next();
  },
};
</script>
