import { PostService } from './post.service';

import { Post } from '../_models/post';

describe("PostService", () => {
  let service: PostService;
  let datastore = {
    createRecord: jest.fn()
  };

  it("should be defined", () => {
    service = new PostService(datastore as any);
    expect(service).toBeDefined();
  })

  describe("addPost()", () => {
   describe("when adding post succeeds", () => {
      const postId = 23;
      let dummyPost = {
        save: jest.fn()
      }
      datastore.createRecord
        .mockReturnValueOnce(dummyPost)

      it("calls the Post's save function", () => {
        service = new PostService(datastore as any);
        service.addPost(postId);
        expect(dummyPost.save).toHaveBeenCalled();
      });
    });
  });
});
