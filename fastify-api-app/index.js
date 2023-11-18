const app = require('fastify')({
    logger: true
});

const bookRoutes = require('./routes/books');

app.get('/', function (req, res) {
    res.send({
        message: 'Welcome to FASTIFY API APP!!!'
    });
});

app.get('/health', function (req, res) {
    res.send({
        message: 'FASTIFY API APP is HEALTHY!!!'
    });
});

app.get('/ready', function (req, res) {
    res.send({
        message: 'FASTIFY API APP is READY!!!'
    });
});

bookRoutes.forEach((route, index) => {
    app.log.info(`${index}: registering ${route.method} route '${route.url}'`);
    app.route(route);
});

app.listen({ port: 4000 }, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`The server is listening on ${address}`)
});