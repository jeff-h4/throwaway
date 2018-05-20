import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { User } from './user';

@JsonApiModelConfig({
  type: 'friendships'
})
export class Friendship extends JsonApiModel {
  @BelongsTo()
  user: User;

  @BelongsTo()
  friend: User;
}