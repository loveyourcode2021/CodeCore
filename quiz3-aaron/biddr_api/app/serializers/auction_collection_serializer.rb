class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes( :id, :title, :ending)
end
