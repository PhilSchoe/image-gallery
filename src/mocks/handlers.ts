import { rest } from 'msw';

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
    return res(
      ctx.status(200),
      ctx.json({
        title: 'Airline from Mock :-O',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'
      })
    );
  })
];
