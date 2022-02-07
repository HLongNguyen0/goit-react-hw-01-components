import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryTHead,
} from './TransactionHistory.styled';

export default function TransactionHistory({ transaction }) {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryTHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHistoryTHead>
      <tbody>
        {transaction.map(e => (
          <tr key={e.id}>
            <td>{e.type}</td>
            <td>{e.amount}</td>
            <td>{e.currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
