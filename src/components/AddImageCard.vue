<script setup lang="ts"></script>

<template>
  <v-card>
    <v-icon icon="mdi-plus-box" role="img"></v-icon>
    <v-card-title class="text-white">Add Image</v-card-title>

    <!--
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      aspect-ratio="1"
      cover
    >
      <v-card-title class="text-white">Add Image</v-card-title>
    </v-img>
    -->

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
    </v-card-actions>
  </v-card>
</template>
