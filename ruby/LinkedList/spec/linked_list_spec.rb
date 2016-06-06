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
