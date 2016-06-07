##attr_accessor

Very often, you have attributes that are both readable and writable attributes. Ruby lets you compact these together with attr_accessor. 

####Getter and Setter in General Way

```ruby
class Person
  def name
    @name
  end

  def name=(str)
    @name = str
  end
end

person = Person.new
person.name = 'Eshaan'
person.name # => "Eshaan"
```

####Setter Method

```ruby
 def name=(val)
  @name = val
end
Getter method

def name
  @name
end
```

####Getter and Setter method with attr_accessor

```ruby
class Person
  attr_accessor :name
end

person = Person.new
person.name = "Eshaan"
person.name # => "Eshaan"
```