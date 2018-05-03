import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginFormService } from './login-form.service';
import { User } from '../_models/user';

describe('LoginFormService', () => {
  let httpMock: HttpTestingController;
  let service: LoginFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, //TODO: Remove this and see if the test still works
        HttpClientTestingModule
      ],
      providers: [
        LoginFormService
      ]
    });
  });

  afterEach(inject([HttpTestingController], (backEnd: HttpTestingController) => {
    backEnd.verify();
  }));

//  beforeEach(
//    inject([LoginFormService, HttpTestingController], (_service, _httpMock) => {
//      service = _service;
//      httpMock = _httpMock;
//  }));

  describe('loginUser()', () => {
    it("should send a POST request", async(inject([LoginFormService, HttpTestingController],
      (service: LoginFormService, backEnd: HttpTestingController) => {
        const TARGET_URL = "authenticate";
        let email = "johndoe@mail.com";
        let password = "johnpassword";

        service.loginUser(email, password).subscribe();

        backEnd.expectOne((req: HttpRequest<any>) => {
          //TODO: There seems to be an open issue with the HttpParams constructor
          //body isn't as accessible as I think it's supposed to be? Using req instead for the test
          const body = new HttpParams({fromString: req.body});
          return req.url === TARGET_URL &&
            req.method === "POST" &&
            req.body.email === "johndoe@mail.com" &&
            req.body.password == "johnpassword"
        });
      }
    )));
    //it('should return an Observable<any>', () => {
    //  let user = new User(-1, "John", "Doe", "johndoe@mail.com", "password");
    //  service.loginUser(user).subscribe(airports => {
    //    debugger;
    //    expect(airports.length).toBe(3);
    //    expect(airports[2][0]).toBe('WRO');
    //  });

    //  const req = httpMock.expectOne('https://localhost:3000/authenticate');
    //  let mockResponse = { foo: "bar" };
    //  req.flush(mockResponse);
    //  httpMock.verify();
    //});
  });
});