class MyClass:
  """A simple class"""
  i = 12345
  
  def f(self):
    return "Hello world"

x = MyClass()
print(x.i)

# ---------------------------------------------

class Dog:
  kind = 'canine'
  
  def __init__(self, name):
    self.name = name
    self.tricks = []
    
  def addTrick(self, trick):
    self.tricks.append(trick)
  
  
d = Dog('Fido')
d.addTrick('Roll')
d.addTrick('Play dead')
print(d.name)
print(d.tricks)

e = Dog('Spark')
print(e.name)
print(e.tricks)
