import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  }));

  test('should exist', () => {
    expect(component).toBeDefined();
  });
});
//import { TestBed, async, inject } from '@angular/core/testing';
//import { HttpClientModule, HttpRequest, HttpParams } from '@angular/common/http';
//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//
//import { SignupFormService } from './signup-form.service';
//import { User } from '../_models/user';
//
//describe('SignupFormService', () => {
//  let httpMock: HttpTestingController;
//  let service: SignupFormService;
//
//  beforeEach(() => {
//    TestBed.configureTestingModule({
//      imports: [
//        HttpClientModule, //TODO: Remove this and see if the test still works
//        HttpClientTestingModule
//      ],
//      providers: [
//        SignupFormService
//      ]
//    });
//  });
//
//  afterEach(inject([HttpTestingController], (backEnd: HttpTestingController) => {
//    backEnd.verify();
//  }));
//
////  beforeEach(
////    inject([SignupFormService, HttpTestingController], (_service, _httpMock) => {
////      service = _service;
////      httpMock = _httpMock;
////  }));
//
//  describe('signupUser()', () => {
//    it("should send a POST request", async(inject([SignupFormService, HttpTestingController],
//      (service: SignupFormService, backEnd: HttpTestingController) => {
//        const TARGET_URL = "users";
//        let user = new User(-1,"Fred","Doe","freddoe@mail.com","fredrulez");
//
//        service.signupUser(user).subscribe();
//
//        backEnd.expectOne((req: HttpRequest<any>) => {
//          //TODO: There seems to be an open issue with the HttpParams constructor
//          //body isn't as accessible as I think it's supposed to be? Using req instead for the test
//          const body = new HttpParams({fromString: req.body});
//          return req.url === TARGET_URL &&
//            req.method === "POST" &&
//            req.body.first_name === "Fred" &&
//            req.body.last_name === "Doe" &&
//            req.body.email === "freddoe@mail.com" &&
//            req.body.password == "fredrulez"
//        });
//      }
//    )));
//    //it('should return an Observable<any>', () => {
//    //  let user = new User(-1, "John", "Doe", "johndoe@mail.com", "password");
//    //  service.signupUser(user).subscribe(airports => {
//    //    debugger;
//    //    expect(airports.length).toBe(3);
//    //    expect(airports[2][0]).toBe('WRO');
//    //  });
//
//    //  const req = httpMock.expectOne('https://localhost:3000/authenticate');
//    //  let mockResponse = { foo: "bar" };
//    //  req.flush(mockResponse);
//    //  httpMock.verify();
//    //});
//  });
//});