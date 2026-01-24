import type { ReactNode } from "react";
import styles from "./Alert.module.css";
type Props = {
  children: ReactNode;
  status: boolean;
  onClick: () => void;
};

function Alert({ status, onClick }: Props) {
  return (
    <div
      className={[
        styles.alert,
        status ? styles.alertPrimary : styles.alertSecondary,
      ].join(" ")}
      onClick={onClick}
    >
      Alert
    </div>
  );
}

export default Alert;
