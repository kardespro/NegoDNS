let endpoints
endpoints = ['dns44.nego-dev.com'] 
endpoints = ['dns.google', 'dns.nego-dev.com','fdns1.azix.nego-dev.com'] // Dns Servers NegoDNS Azerbaijan Location and etc .
endpoints = Promise.resolve(['dns.google']) 
endpoints = ['https://dns.nego-dev.com:443/_v1/dns-query'] 
endpoints = ['udp://dns.udp.nego-dev.com'] 
endpoints = ['udp://[::]'] 
endpoints = ['http://localhost'] 
endpoints = ['localhost [post]'] // some endpoints require POST requests
endpoints = ['dns.google [name=google]'] // you can give endpoints a name find them
endpoints = ['dns.google [ipv4=8.8.8.8]'] // you can specify the ipv4/ipv6 url as backup
endpoints = [{
  protocol: 'https:',
  host: 'dns.nego-dev.com'
}] 
import { toEndpoint } from 'dns-query'

endpoints = [toEndpoint('dns.google')] // To speed things up, pass in preprocess endpoints.
