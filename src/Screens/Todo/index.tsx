import React from 'react';
import Styled from 'styled-components/native';
import TodoListView from './TodoListView';
import AddTodo from './AddTodo';

const Container = Styled.View`
  Flex: 1;
`;

interface Props {}

const Todo = () => {
  return (
    <Container>
      <TodoListView />
      <AddTodo />
    </Container>
  );
};

export default Todo;
