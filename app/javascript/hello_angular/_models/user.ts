import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'users'
})
export class User extends JsonApiModel {
  @Attribute()
  first_name: string;

  @Attribute()
  last_name: string;

  @Attribute()
  email: string;

  @HasMany()
  friends?: User;
}