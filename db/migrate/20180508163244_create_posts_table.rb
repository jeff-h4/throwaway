class CreatePostsTable < ActiveRecord::Migration[5.1]
  def up
    execute <<~SQL
      CREATE TABLE posts(
        id BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title CHAR(50),
        created_at DATETIME NOT NULL,
        updated_at DATETIME NOT NULL
      );
    SQL
  end

  def down
    execute <<~SQL
      DROP TABLE posts;
    SQL
  end
end
