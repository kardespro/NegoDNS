const dns2 = require('dns2');

const { Packet } = dns2;

const server = dns2.createServer({
  udp: true,
  handle: (request, send, rinfo) => {
    const response = Packet.createResponseFromRequest(request);
    const [ question ] = request.questions;
    const { name } = question;
    response.answers.push({
      name,
      type: Packet.TYPE.A,
      class: Packet.CLASS.IN,
      ttl: 300,
      address: 'dns1.nego-dev.com'
    });
    send(response);
  }
});

server.on('request', (request, response, rinfo) => {
  console.log(request.header.id, request.questions[0]);
});

server.on('requestError', (error) => {
  console.log('Client sent an invalid request', error);
});

server.on('listening', () => {
  console.log(server.addresses());
});

server.on('close', () => {
  console.log('DNS Server Closed');
});

server.listen({
  // Optionally specify port, address and/or the family of socket() for udp server:
  udp: { 
    port: 5333,
    address: "dns.udp.nego-dev.com",
    type: "udp4",  // IPv4 or IPv6 (Must be either "udp4" or "udp6")
  },
  
  // Optionally specify port and/or address for tcp server for example dns12.tcp.nego-dev.com:
  tcp: { 
    port: 5333,
    address: "dns.tcp.nego-dev.com",
  },
});

// eventually
server.close();
