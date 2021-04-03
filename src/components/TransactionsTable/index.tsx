import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Freelance</td>
            <td>03/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 700,00</td>
            <td>Contas fixas</td>
            <td>10/02/2021</td>
          </tr>
          <tr>
            <td>Almoço mensal</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Alimentação</td>
            <td>10/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}