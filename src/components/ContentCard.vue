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
    </v-card-actions>
  </v-card>
</template>
