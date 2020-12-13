import Button from '../shared/Button';
import { OPERATORS, IDS } from './constants';
import styles from './style.module.css';

const MainOperators = ({ onClickOperator, onComputeResult }) => (
  <div className={styles.MainOperators}>
    {OPERATORS.map((operator, index) => (
      <Button
        key={IDS[index]}
        id={IDS[index]}
        classes={['mainOperatorButton']}
        handleClick={
          operator === '=' ? onComputeResult : () => onClickOperator(operator)
        }
      >
        {operator}
      </Button>
    ))}
  </div>
);

export default MainOperators;
