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
});
