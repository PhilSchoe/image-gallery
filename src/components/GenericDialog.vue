<script setup lang="ts">
import { mergeProps, ref } from 'vue';

const show = ref<boolean>(false);

function closeDialog() {
  show.value = false;
}
</script>

<template>
  <v-dialog v-model="show" width="50%">
    <template v-slot:activator="{ props: dialog }">
      <v-tooltip text="Upload Image" location="bottom">
        <template v-slot:activator="{ props: tooltip }">
          <v-btn v-bind="mergeProps(dialog, tooltip)" icon="mdi-image-plus" />
        </template>
      </v-tooltip>
    </template>
    <slot :closeDialogFunction="closeDialog">
      <h1>Fallback Content</h1>
    </slot>
  </v-dialog>
</template>
