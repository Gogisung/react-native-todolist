import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Lable = Styled.Text``;
interface Props {}

const EmptyItem = () => {
  return (
    <Container>
      <Lable>하단에 "+" 버튼을 눌러 새로운 할 일을 등록해 본다.</Lable>
    </Container>
  );
};
export default EmptyItem;
