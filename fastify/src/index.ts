import fastify from 'fastify';
import {Static, Type} from '@sinclair/typebox';

const server = fastify();

interface IQuerystring {
  username: string;
  password: string;
}

interface IHeaders {
  'h-Custom': string;
}

server.get<{
  Querystring: IQuerystring;
  Headers: IHeaders;
}>(
  '/auth',
  {
    preValidation: (request, reply, done) => {
      const {username, password} = request.query;
      const {authorization} = request.headers;
      if (!authorization)
        return done(new Error('Headers must have authorization'));
      if (!authorization.startsWith('Bearer ')) {
        return done(new Error('Authorization must start with "Baerer"'));
      }
      if (authorization.length < 7) {
        return done(new Error('No token found'));
      }
      done();
    },
  },
  async (request, reply) => {
    const token = request.headers.authorization?.slice(7);
    console.info(token);
    // do something with request data
    return `logged in!`;
  }
);

const User = Type.Object({
  name: Type.String(),
  mail: Type.Optional(Type.String({format: 'email'})),
});
type UserType = Static<typeof User>;

server.post<{Body: UserType; Reply: UserType}>(
  '/',
  {
    schema: {
      body: User,
      response: {
        200: User,
      },
    },
  },
  (request, reply) => {
    const {body: user} = request;
    /* user has type
     * const user: StaticProperties<{
     *  name: TString;
     *  mail: TOptional<TString>;
     * }>
     */
    //...
    reply.status(200).send(user);
  }
);

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
