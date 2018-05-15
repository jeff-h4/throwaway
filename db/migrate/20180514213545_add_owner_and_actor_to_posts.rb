class AddOwnerAndActorToPosts < ActiveRecord::Migration[5.1]
  def up
    execute <<~SQL
      ALTER TABLE `posts`
        ADD COLUMN actor_id BIGINT(20),
        ADD COLUMN owner_id BIGINT(20);
    SQL
  end

  def down
    execute <<~SQL
      ALTER TABLE posts
        DROP COLUMN actor_id,
        DROP COLUMN owner_id;
    SQL
  end
end
