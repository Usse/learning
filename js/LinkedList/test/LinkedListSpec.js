import LinkedList  from '../src/LinkedList';

describe('General', () => {

  let ll;
  beforeEach(() => {
    ll = new LinkedList();
  });

  it('LinkedList should be defined', () => {
    expect(LinkedList).toBeDefined();
  });

  it('the version should be 0.1', () => {
    expect(ll.version).toEqual(0.1);
  });
});

describe('LinkedList', () => {
  let ll;
  beforeEach(() => {
    ll = new LinkedList();
  });

  it('a list can be empty', () => {
    expect(ll.isEmpty()).toBe(true);
  });

  it('add an element in first position', () => {
    ll.addFirst('Lorem');
    expect(ll.length()).toBe(1);
    expect(ll.head.value).toBe('Lorem');
    expect(ll.tail.value).toBe('Lorem');
  });

  it('add a second element in first position ', () => {
    ll.addFirst('Lorem');
    ll.addFirst('Ipsum');
    expect(ll.length()).toBe(2);
    expect(ll.head.value).toBe('Ipsum');
    expect(ll.tail.value).toBe('Lorem');
  });

  it('get an element in last position', () => {
    ll.addLast('Lorem');
    expect(ll.head.value).toBe('Lorem');
  });

  it('get an element in last position', () => {
    ll.addLast('Lorem');
    ll.addLast('Ipsum');
    expect(ll.head.value).toBe('Lorem');
    expect(ll.tail.value).toBe('Ipsum');
  });

  it('prints Array', () => {
    expect(ll.toArray()).toEqual([]);
    ll.addLast('Lorem');
    ll.addLast('Ipsum');
    ll.addFirst('Dolor');
    var expected = [
      'Dolor',
      'Lorem',
      'Ipsum'];
    expect(ll.toArray()).toEqual(expected);
  });

});
