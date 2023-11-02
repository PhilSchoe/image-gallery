import type { Image } from '@/types/image';
import type { APIController } from './apiController';

export class ImageController {
  private static apiController: APIController;

  private static IMAGES_URL = '/images';

  public static init(apiController: APIController) {
    ImageController.apiController = apiController;
  }

  public static async getImages(): Promise<Array<Image>> {
    const images = await ImageController.apiController.get<Array<Image>>(
      ImageController.IMAGES_URL
    );

    return images;
  }
}
