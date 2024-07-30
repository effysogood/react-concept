import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 6px;
  text-align: center;
  ${(props) =>
    props.primary &&
    css`
      background: skyblue;
      color: white;
    `}
`;

export default function Buttons() {
  return (
    <Container>
      <Button primary>button1</Button>
      <Button>button2</Button>
    </Container>
  );
}

// 스타일링이 된 컴포넌트를 불러와 사용
