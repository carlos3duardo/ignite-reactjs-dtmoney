import logoImg from '../../assets/img/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <figure>
            <img src={logoImg} alt="dt money"/>
        </figure>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}