// import { shallow } from 'enzyme'
import React from "react"

import TodoList from "../src/js/TodoList"

describe("TodoList", function() {
  beforeEach(function() {
    this.store = {
      filteredTodos: [
        {value: "todo1", id: 111, complete: false},
        {value: "todo2", id: 222, complete: false},
        {value: "todo3", id: 333, complete: false},
      ],
      filter: "test",
      createTodo: (val) => {
        this.createTodoCalled = true;
        this.todoValue = val
      },
    }
  });

  // tests will go here and receive this.store

  it("renders filtered todos", function() {
    //const wrapper = shallow(<TodoList store={this.store} />);

    expect(this.store.filteredTodos[0].value).toBe("todo1");

  });
});
