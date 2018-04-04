class CreateRequests < ActiveRecord::Migration[5.1]
  def up
    execute <<~SQL
      CREATE TABLE requests(
        id BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title CHAR(50) NOT NULL,
        created_at DATETIME NOT NULL,
        updated_at DATETIME NOT NULL
      );
    SQL
  end

  def down
    execute <<~SQL
      DROP TABLE requests;
    SQL
  end
end