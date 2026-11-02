import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.post('/webhook-test', function (request, reply) {
  console.log({
    body: request.body,
    headers: request.headers,
  });

  reply.status(200).send('Ok');
});

fastify.get('/webhook-test', function (request, reply) {
  console.log({
    headers: request.headers,
  });

  reply.status(200).send('Ok');
});

fastify.get('/health', function (request, reply) {
  reply.status(200).send('Ok');
});
fastify.get('/', function (request, reply) {
  reply.status(200).send('Ok');
});

// Run the server!
fastify.listen({ port: process.env.PORT ?? 3000, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
