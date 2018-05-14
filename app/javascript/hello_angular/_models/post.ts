import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'posts'
})
export class Post extends JsonApiModel {
  @Attribute()
  title: string;
}