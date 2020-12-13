import Button from '../shared/Button';
import styles from './style.module.css';

const SecondaryOperators = ({ onClearAll, onClickOperator }) => (
  <div className={styles.SecondaryOperators}>
    <Button
      id="clear"
      classes={['secondaryOperatorButton', 'bigButton']}
      handleClick={onClearAll}
    >
      AC
    </Button>
    <Button
      classes={['secondaryOperatorButton']}
      handleClick={() => onClickOperator('%')}
    >
      %
    </Button>
  </div>
);

export default SecondaryOperators;
