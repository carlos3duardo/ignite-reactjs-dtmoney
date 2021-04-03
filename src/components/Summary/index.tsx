import incomeIcon from '../../assets/img/income.svg';
import outcomeIcon from '../../assets/img/outcome.svg';
import totalIcon from '../../assets/img/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <h3>Entradas</h3>
          <img src={incomeIcon} alt="Entradas"/>
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <h3>Saídas</h3>
          <img src={outcomeIcon} alt="Saídas"/>
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <h3>Total</h3>
          <img src={totalIcon} alt="Total"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}