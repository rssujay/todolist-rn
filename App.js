import React, { useState } from 'react';
import uuid from 'react-uuid'
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState({
    todoList: [
      {
        id: uuid(),
        name: "a",
        date: "Today",
      },
      {
          id: uuid(),
          name: "aa",
          date: "Sunday",
      },
      {
          id: uuid(),
          name: "b",
          date: "Saturday",
      },
    ],
  })

  const addTodo = (title, due) => {
    const { todoList } = todos

    const newTodos = [...todoList, {
      id: uuid(),
      name: title,
      date: due,
    }]

    setTodos({
      todoList: newTodos,
    })
  }

  const removeTodo = (id) => {
    const { todoList } = todos
    const newTodos = todoList.filter(item => item.id !== id)
    setTodos({todoList: newTodos})
  }


  return (
    <View style={styles.container}>
      <Text style={{color: "#FFF", fontSize: 20, fontWeight: "bold", padding: 10 }}>This is your todo list</Text>
      <TodoList todos={todos.todoList} addTodo={addTodo} removeTodo={removeTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#539987',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
});
