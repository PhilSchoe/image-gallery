import { defineStore } from 'pinia';
import { type Image } from '@/types/image';
import { ImageController } from '@/controller/imageController';

interface ImagesState {
  images: Array<Image>;
}

export const useImageStore = defineStore('images', {
  state: (): ImagesState => ({
    images: []
  }),

  actions: {
    async loadImages(): Promise<void> {
      this.images = await ImageController.getImages();
    }
  },

  getters: {}
});
