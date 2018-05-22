class AddStatusToPosts < ActiveRecord::Migration[5.1]
  def up
    execute <<~SQL
      ALTER TABLE `posts`
        ADD COLUMN status TINYINT NOT NULL DEFAULT 0;
    SQL
  end

  def down
    execute <<~SQL
      ALTER TABLE posts
        DROP COLUMN status;
    SQL
  end
end
