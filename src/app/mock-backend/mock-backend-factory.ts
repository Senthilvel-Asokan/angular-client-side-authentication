import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions, Headers, Http, RequestMethod, Response, ResponseOptions} from '@angular/http';

/**
 * This class is used instead real Angular Http service from @angular/http package.
 * Main purpose of this class is to act like real backend and return fake http responses.
 * Do NOT use this class in production code, instead use real Angular Http service.
 */
export function mockBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
  backend.connections.subscribe((connection: MockConnection) => {
    if (connection.request.url.endsWith('/login') && connection.request.method === RequestMethod.Post) {
      const body = JSON.parse(connection.request.getBody());
      checkCredentials(body, connection);
    } 
    else {
      connection.mockRespond(new Response(new ResponseOptions({status: 404})));
    }
  });
  return new Http(backend, options);
}

function checkCredentials(body: any, connection: MockConnection) {
  if (body.email === 'test@test.com' && body.password === 'password') {
    connection.mockRespond(new Response(generateMockResponseOptions()));
  } else {
    connection.mockError(new Error('Wrong credentials'));
  }
}

// generate fake response options
function generateMockResponseOptions(): ResponseOptions {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Set-Authorization', 'fakeToken');

  return new ResponseOptions({
    headers: headers,
    status: 200,
    url: 'your-app.com/login',
    body: `{"firstName": "John", "lastName": "Doe"}`
  });
}
