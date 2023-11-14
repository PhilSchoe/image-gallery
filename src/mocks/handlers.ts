import { HttpResponse, http } from 'msw';
import { type Image } from '@/types/image';

const isAuthenticatedKey = 'is-authenticated';

const images: Array<Image> = [];
const imageFiles: Map<string | number, FormDataEntryValue> = new Map();

export const handlers: any = [
  http.post('/login', () => {
    // Persist user's authentication in the session
    sessionStorage.setItem(isAuthenticatedKey, 'true');

    // Respons with a 200 status code
    return new HttpResponse(null, { status: 200 });
  }),

  http.get('/user', (): HttpResponse => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem(isAuthenticatedKey);

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return HttpResponse.json({ errorMessage: 'Not authorized' }, { status: 403 });
    }

    // If authenticated, return a mocked user details
    return HttpResponse.json({ username: 'admin' }, { status: 200 });
  }),

  http.get('/image/all', () => {
    for (let i = 0; i < 6; i++) {
      images.push({ id: i, title: `Random_${i}`, src: `https://picsum.photos/30${i}` }); // Change size a little for different pictures
    }

    return HttpResponse.json(images, { status: 200 });
  }),

  http.post('/image', async ({ request }): Promise<HttpResponse> => {
    const data = await request.formData();
    const image = data.get('image');
    if (image == null) {
      return HttpResponse.json({ errorMessage: 'Image is null' }, { status: 400 });
    }

    const id = Math.floor(Math.random() * 100);
    const outImage: Image = {
      id: id,
      title: `Upload_${id}`,
      src: `/image/${id}`
    };

    images.push(outImage);
    imageFiles.set(outImage.id, image);

    return HttpResponse.json(outImage, { status: 200 });
  }),

  http.get('/image/:id', ({ params }) => {
    const image = imageFiles.get(Number(params.id));

    return new Response(image);
  })
];
