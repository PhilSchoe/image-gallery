import { rest } from 'msw';
import { type Image } from '@/types/image';

const isAuthenticatedKey = 'is-authenticated';

export const handlers: any = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem(isAuthenticatedKey, 'true');

    // Respons with a 200 status code
    return res(ctx.status(200));
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem(isAuthenticatedKey);

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin'
      })
    );
  }),

  rest.get('/images', (req, res, ctx) => {
    const images: Array<Image> = [];
    for (let i = 0; i < 6; i++) {
      images.push({ id: i, title: `Random_${i}`, src: `https://picsum.photos/30${i}` }); // Change size a little for different pictures
    }

    return res(ctx.status(200), ctx.json(images));
  })
];
