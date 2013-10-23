class CreateAuspiciadors < ActiveRecord::Migration
  def change
    create_table :auspiciadors do |t|
      t.string :logo
      t.string :link

      t.timestamps
    end
  end
end
