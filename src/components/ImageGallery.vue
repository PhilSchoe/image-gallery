<script setup lang="ts">
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
            <v-card>
              <v-img
                :src="card.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                aspect-ratio="1"
                cover
              >
                <v-card-title class="text-white">{{ card.title }}</v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

                <v-btn
                  size="small"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-bookmark"
                ></v-btn>

                <v-btn
                  size="small"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-share-variant"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="6" md="6" lg="3">
            <add-image-card />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
