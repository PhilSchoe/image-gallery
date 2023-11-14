import type { Image } from '@/types/image';
import type { APIController } from './apiController';

export class ImageController {
  private static apiController: APIController;

  private static BASE_URL = '/image';
  private static GET_ALL_URL = this.BASE_URL + '/all';

  public static init(apiController: APIController) {
    ImageController.apiController = apiController;
  }

  public static async getImages(): Promise<Array<Image>> {
    const images = await ImageController.apiController.get<Array<Image>>(
      ImageController.GET_ALL_URL
    );

    return images;
  }

  public static async postImageFile(imageFile: File): Promise<Image> {
    const formData = new FormData();
    formData.append('image', imageFile);

    const resultImage = await ImageController.apiController.post<FormData, Image>(
      ImageController.BASE_URL,
      formData
    );

    return resultImage;
  }
}
