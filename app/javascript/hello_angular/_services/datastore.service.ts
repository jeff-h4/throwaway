import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';

import { Friendship } from "../_models/friendship";
import { Post } from "../_models/post";
import { User } from "../_models/user";

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:3000/',
  models: {
    friendships: Friendship,
    posts: Post,
    user: User, //Using Rails fast_jsonapi gem in the backend, which seems to use a singular type convention
    users: User
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {
  constructor(http: HttpClient) {
      super(http);
  }
}
