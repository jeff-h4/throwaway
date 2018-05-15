class CreateFriendships < ActiveRecord::Migration[5.1]
  def up
    execute <<~SQL
      CREATE TABLE friendships (
        id BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        user_id BIGINT(20) NOT NULL,
        friend_id BIGINT(20) NOT NULL,
        created_at DATETIME NOT NULL,
        updated_at DATETIME NOT NULL,
        INDEX index_user_id (user_id),
        UNIQUE (user_id,friend_id)
      );
    SQL
  end

  def down
    execute <<~SQL
      DROP TABLE friendships;
    SQL
  end
end
