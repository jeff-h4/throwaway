import { FriendshipService } from './friendship.service';

import { Friendship } from '../_models/friendship';
import { User } from '../_models/user';

describe("FriendshipService", () => {
  let service: FriendshipService;
  let datastore = {
    createRecord: jest.fn()
  };

  it("should be defined", () => {
    service = new FriendshipService(datastore as any);
    expect(service).toBeDefined();
  })

  describe("addFriendship()", () => {
   describe("when adding friend succeeds", () => {
      const friendId = 23;
      let dummyFriend = new User(null, {id: friendId});
      let dummyFriendship = {
        save: jest.fn()
      }
      datastore.createRecord
        .mockReturnValueOnce(dummyFriend)
        .mockReturnValueOnce(dummyFriendship)

      it("calls the Friendship's save function", () => {
        service = new FriendshipService(datastore as any);
        service.addFriendship(friendId);
        expect(dummyFriendship.save).toHaveBeenCalled();
      });
    });
  });
});
