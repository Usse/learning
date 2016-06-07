# Node
class Node
  attr_accessor :value, :next

  def initialize(value)
    @value = value
  end
end

# LinkedList
class LinkedList

  # This should be removed
  attr_accessor :head

  def initialize(head)
    raise 'Linkedlist must be initialized with a node' unless head.is_a?(Node)
    @head = head
    @tail = head
  end
end
