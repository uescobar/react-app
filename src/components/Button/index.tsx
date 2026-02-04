// tsrfce es el snippet
import type { ReactNode } from "react";
import { IoIosSend } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import styles from "./Button.module.css";

type Props = {
  sent: boolean;
  onClick: () => void;
  children: ReactNode;
};

function Button({ children, sent, onClick }: Props) {
  return (
    <button
      disabled={sent}
      onClick={onClick}
      className={[styles.btn, styles.btnPrimary].join(" ")}
    >
      {sent ? "Enviado" : children}{" "}
      <span style={{ position: "relative", top: "2px" }}>
        {sent ? <FaCheck color="white" /> : <IoIosSend color="white" />}
      </span>
    </button>
  );
}

export default Button;
