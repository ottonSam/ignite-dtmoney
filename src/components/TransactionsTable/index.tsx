import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then((response => response.json()))
    .then(data => console.log(data))
  }, []);

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
            <td>Website Development</td>
            <td className="deposit">R$12.000</td>
            <td>Development team</td>
            <td>20/02/2020</td>
          </tr>
          <tr>
            <td>Ps5 width playground</td>
            <td className="withdraw">- R$5.000</td>
            <td>Playground</td>
            <td>21/02/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}