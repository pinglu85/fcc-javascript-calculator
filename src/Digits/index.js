import Button from '../shared/Button';
import { DIGITS, IDS } from './constants';
import styles from './style.module.css';

const Digits = ({ onClickDigit }) => {
  return (
    <div className={styles.Digits}>
      {DIGITS.map((digit, index) => (
        <Button
          key={IDS[index]}
          id={IDS[index]}
          classes={
            digit === '0' ? ['digitButton', 'bigButton'] : ['digitButton']
          }
          handleClick={() => onClickDigit(digit)}
        >
          {digit}
        </Button>
      ))}
    </div>
  );
};

export default Digits;
