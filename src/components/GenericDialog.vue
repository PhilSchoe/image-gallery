<script setup lang="ts">
import { mergeProps } from 'vue';
</script>

<template>
  <v-dialog width="50%" overlay-color="black" overlay-opacity="1">
    <template v-slot:activator="{ props: dialog }">
      <v-tooltip text="Upload Image" location="bottom">
        <template v-slot:activator="{ props: tooltip }">
          <v-btn v-bind="mergeProps(dialog, tooltip)" icon="mdi-image-plus" />
        </template>
      </v-tooltip>
    </template>
    <slot>
      <h1>Fallback Content</h1>
    </slot>
  </v-dialog>
</template>
