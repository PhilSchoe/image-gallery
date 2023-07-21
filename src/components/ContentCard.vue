<script setup lang="ts">
const props = defineProps<{
  cardTitle: string;
  cardImageSrc: string;
}>();
</script>

<template>
  <v-card>
    <v-img
      :src="cardImageSrc"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      aspect-ratio="1"
      cover
    >
      <v-card-title class="text-white">{{ props.cardTitle }}</v-card-title>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
    </v-card-actions>
  </v-card>
</template>
