import styles from "./Button.module.css";
import { NavLink } from "react-router-dom";

export const Button = ({ style, text }: any) => {
  return (
    <NavLink to="/contact">
      <button
        className={`${styles.button} ${styles.button__primary}`}
        type="button"
        style={{ ...style }}
      >
        {text}
      </button>
    </NavLink>
  );
};

export default Button;
