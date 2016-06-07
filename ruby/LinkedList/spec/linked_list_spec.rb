require 'spec_helper'

describe Node do
  before :each do
    @node = Node.new('Woo')
  end

  describe '#new' do
    context 'returns a Node object' do
      it { expect(@node).to be_an_instance_of Node }
    end
  end

  describe '#value' do
    context 'value should be defined' do
      it { expect(@node.value).to eql 'Woo' }
    end
  end
end

describe LinkedList do
  before :each do
    new_node = Node.new('First')
    @ll = LinkedList.new(new_node)
  end

  describe '#new' do
    context 'returns a LinkedList object' do
      it { expect(@ll).to be_an_instance_of LinkedList }
      it { expect(@ll.head.value).to eql 'First' }
    end
  end
end
