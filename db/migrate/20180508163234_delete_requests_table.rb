class DeleteRequestsTable < ActiveRecord::Migration[5.1]
  def change
    execute <<~SQL
      DROP TABLE requests;
    SQL
  end
end
