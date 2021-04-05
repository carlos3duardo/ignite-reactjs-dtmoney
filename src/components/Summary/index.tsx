import { useContext } from 'react';
import incomeIcon from '../../assets/img/income.svg';
import outcomeIcon from '../../assets/img/outcome.svg';
import totalIcon from '../../assets/img/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
    }

    acc.total = acc.deposits - acc.withdraws;

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <h3>Entradas</h3>
          <img src={incomeIcon} alt="Entradas"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <h3>Saídas</h3>
          <img src={outcomeIcon} alt="Saídas"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <h3>Total</h3>
          <img src={totalIcon} alt="Total"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}