class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :status
end
