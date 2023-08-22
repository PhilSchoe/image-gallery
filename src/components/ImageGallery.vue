<script setup lang="ts">
import ContentCard from './ContentCard.vue';
import GenericDialog from './GenericDialog.vue';
import ImageUpload from './ImageUpload.vue';

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
      <generic-dialog>
        <template #default="{ closeDialogFunction }">
          <image-upload :close-dialog-function="closeDialogFunction" />
        </template>
      </generic-dialog>

      <div style="font-size: x-large; padding-left: 0.5 em">Image Gallery</div>

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
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
