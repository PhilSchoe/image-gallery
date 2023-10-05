<script setup lang="ts">
import { ref, computed } from 'vue';

defineProps<{
  closeDialogFunction: () => void;
}>();

const imageFile = ref<File[]>([]);
let loading = false;
const imagePreviewSrc = computed<string>(() => {
  loading = true;
  if (imageFile.value.length == 0) {
    loading = false;
    return '';
  }

  const url = URL.createObjectURL(imageFile.value[0]);

  loading = false;
  return url;
});
</script>

<template>
  <v-card>
    <v-card-title>
      <h2>Upload Image</h2>
    </v-card-title>
    <v-card-text>
      <v-text-field label="Image Title*" required></v-text-field>
      <v-file-input
        label="Select Image"
        prepend-icon="mdi-camera"
        accept="image/png, image/jpg, image/jpeg"
        v-model="imageFile"
        :loading="loading"
      ></v-file-input>
      <h3>{{ imagePreviewSrc }}</h3>
      <v-img v-if="imagePreviewSrc" :src="imagePreviewSrc" alt="previewImage" />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="closeDialogFunction" variant="text">Close</v-btn>
      <v-btn variant="text">Upload</v-btn>
    </v-card-actions>
  </v-card>
</template>
