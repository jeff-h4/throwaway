import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';

import { Post } from "../_models/post";

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:3000/',
  models: {
    posts: Post
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {
  constructor(http: HttpClient) {
      super(http);
  }
}
