<script setup lang="ts">
defineProps<{
  closeDialogFunction: () => void;
}>();
</script>

<template>
  <v-card>
    <v-card-title>
      <h2>Upload Image</h2>
    </v-card-title>
    <v-card-text>
      <v-text-field label="Image Title*" required></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="closeDialogFunction" variant="text">Close</v-btn>
      <v-btn variant="text">Upload</v-btn>
    </v-card-actions>
  </v-card>
</template>
