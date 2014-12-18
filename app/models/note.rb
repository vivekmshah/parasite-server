class Note < ActiveRecord::Base
	belongs_to :user
	has_many :comments

  def self.get_multi(domain, id=nil)
    where_clause = (domain ?
      'AND notes.domain = ? ' : '')+
    (id ?
      'AND notes.id =' + id.to_s : '')

    puts "%%%%%%%%%%%%%%%%%%%%% " + where_clause

    sql = 'SELECT notes.id, notes.user_id, notes.description, notes.domain, notes.created_at, users.username ' +
      'FROM notes ' +
      'INNER JOIN users ' +
      'ON notes.user_id = users.id '+
      (where_clause.blank? ? '' :
      'WHERE ' + where_clause.slice(4,999))+
      'ORDER BY notes.created_at DESC'

    puts "%%%%%%%%%%%%%%%%%%%%% " + sql

    Note.find_by_sql([
      sql,
      domain.to_s
      ])
  end

end
