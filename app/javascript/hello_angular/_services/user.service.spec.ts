import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';

import { User } from '../_models/user';

describe("UserService", () => {
  let service: UserService;
  let dummyUser1 = new User(null, null);
  let dummyUser2 = new User(null, null);
  let dummyUserArray = [dummyUser1, dummyUser2];
  let queryData = {
    getModels: jest.fn(() =>
      dummyUserArray
    )
  };
  let datastore = {
    findAll: jest.fn(() =>
      Observable.of(queryData)
    )
  };

  beforeEach(() => {
    service = new UserService(datastore as any);
  });

  describe("findUsers()", () => {
    const testEmail = "fredflintstone@gmail.com";

    it("should return an array of Users", () => {
      let expectedFilter = {filter: {email: testEmail}};
      let params = {email: testEmail}

      service.findUsers(params).subscribe((users) => {
        expect(datastore.findAll).toBeCalledWith(User, expectedFilter);
        expect(users).toBe(dummyUserArray);
      });
    });
  });
});
