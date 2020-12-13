import styles from './style.module.css';

const Display = ({ id, classes, children }) => {
  let fontSize = '14px';

  if (classes === 'outputDisplay') {
    switch (children.length) {
      case 9:
        fontSize = '38px';
        break;
      case 10:
        fontSize = '34px';
        break;
      case 11:
        fontSize = '31px';
        break;
      case 12:
        fontSize = '28.5px';
        break;
      case 13:
        fontSize = '26.5px';
        break;
      case 14:
        fontSize = '24.5px';
        break;
      case 15:
        fontSize = '23px';
        break;
      case 16:
        fontSize = '21.5px';
        break;
      default:
        fontSize = '40px';
    }
  }

  return (
    <div
      id={id}
      className={`${styles.Display} ${styles[classes]}`}
      style={{ fontSize: fontSize }}
    >
      {children}
    </div>
  );
};

export default Display;
