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
    },

    async addImage(title: string, image: File): Promise<void> {
      const resultImage: Image = await ImageController.postImage(title, image);
      this.images.push(resultImage);
    }
  },

  getters: {}
});
