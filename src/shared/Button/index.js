import styles from './style.module.css';

const Button = ({ id, classes, handleClick, children }) => {
  classes = classes.map((c) => styles[c]).join(' ');

  return (
    <button
      type="button"
      id={id}
      className={`${styles.Button} ${classes}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
