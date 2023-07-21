<script setup lang="ts">
import ContentCard from './ContentCard.vue';
import AddImageCard from './AddImageCard.vue';

const cards = [
  { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
  { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
  { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' }
];
</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Image Gallery</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="w-75">
        <v-row>
          <v-col v-for="card in cards" :key="card.title" sm="6" md="6" lg="3">
            <content-card :card-title="card.title" :card-image-src="card.src" />
          </v-col>
          <v-col sm="6" md="6" lg="3">
            <add-image-card />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
