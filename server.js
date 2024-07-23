const http = require('http');

// const todos = [{ id: 1, text: 'Todo one' }];

const server = http.createServer((req, res) => {
  let body = [];

  req
    .on('data', (chunk) => {
      body += chunk.toString();
    })
    .on('end', () => {
      console.log('Received data:', body);

      let parsedData;

      try {
        parsedData = JSON.parse(body);
      } catch (error) {
        console.log(error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(
          JSON.stringify({
            success: false,
            error: 'Invalid json',
          })
        );
      }

      res.writeHead(200, {
        'Content-Type': 'application/json',
      });

      res.end(
        JSON.stringify({
          success: true,
          data: parsedData,
        })
      );
    });
});

const PORT = 5000;
server.listen(PORT, () => {});
