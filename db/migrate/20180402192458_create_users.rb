class CreateUsers < ActiveRecord::Migration[5.1]
  def up
    execute <<~SQL
      CREATE TABLE users (
        id BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name CHAR(50),
        last_name CHAR(50),
        email CHAR(50),
        password_digest BINARY(60),
        created_at DATETIME NOT NULL,
        updated_at DATETIME NOT NULL
      );
    SQL
  end

  def down
    execute <<~SQL
      DROP TABLE users;
    SQL
  end
end