<template>
  <v-card class="mx-auto shadow-lg w-full flex flex-col justify-between h-full">
    <v-card-text class="flex flex-col flex-1">
      <div>InkaCueros</div>
      <p class="text-h6 font-weight-black">{{ product.Name }}</p>
      <div class="flex justify-center flex-1 items-center">
        <template v-if="product.id == 7">
          <img :src="producto1" alt="" class="h-40" />
        </template>
        <template v-else-if="product.id == 8">
          <img :src="producto2" alt="" class="h-40" />
        </template>
        <template v-else-if="product.id == 5">
          <img :src="producto3" alt="" class="h-40" />
        </template>
        <template v-else-if="product.id == 6">
          <img :src="producto4" alt="" class="h-40" />
        </template>
      </div>
      <p class="font-bold text-lg text-indigo pt-3">S/. {{ product.Price }}</p>
    </v-card-text>

    <v-card-actions class="mt-auto">
      <v-btn color="deep-purple-accent-4" variant="tonal" size="small" @click="addTrolley(product)">Agregar al
        carrito</v-btn>
      <v-btn color="deep-purple-accent-4" variant="tonal" size="small" @click="goDetailProduct(product)">Ver
        producto</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import producto1 from "@/assets/products/image1.png";
import producto2 from "@/assets/products/image2.png";
import producto3 from "@/assets/products/image3.png";
import producto4 from "@/assets/products/image4.png";

export default {
  props: {
    product: Object,
  },
  emits: ["go-detail", "add-trolley"],
  setup(_, { emit }) {
    const goDetailProduct = (product) => {
      emit("go-detail", {
        product,
      });
    };

    const addTrolley = (product) => {
      emit("add-trolley", {
        product,
      });
    }

    return {
      goDetailProduct,
      addTrolley,
    };
  },
  data() {
    return {
      producto1,
      producto2,
      producto3,
      producto4,
    };
  },
};
</script>
