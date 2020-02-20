import React from 'react';
import Styled from 'styled-components/native';

import Header from './header';
import TodoList from './TodoList';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

interface Props {}

const TodoListView = () => {
  return (
    <Container>
      <Header />
      <TodoList />
    </Container>
  );
};

export default TodoListView;
