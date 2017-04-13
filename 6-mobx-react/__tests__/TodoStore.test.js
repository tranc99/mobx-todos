import { TodoStore } from '../src/js/TodoStore'

describe('TodoStore', () => {
  it('creates new todos', () => {
    const store = new TodoStore;
    store.createTodo("todo1");
    store.createTodo("todo2");
    store.createTodo("rock n roll")
    expect(store.todos.length).toBe(3);
    expect(store.todos[0].value).toBe('todo1');
  });

  it("clears checked todos", () => {
    const store = new TodoStore;
    store.createTodo("todotodo");
    store.createTodo("todo2");
    store.createTodo("todo3");
    store.todos[1].complete = true;
    store.todos[2].complete = true;
    store.clearComplete();

    // now check store todos length
    expect(store.todos.length).toBe(1);
    expect(store.todos[0].value).toBe("todotodo");
  });
});
