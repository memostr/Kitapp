import React, { useState } from "react";
import Loading from "../Loading/Loading";
import toastMessage from "../../constants/toastify";

import styles from "./buyDialog.module.scss";

function BuyDialog({ product, showDialog, closeDialog }) {
  const [loading, setLoading] = useState(false);

  const buy = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toastMessage("success", "Satın Alındı");
      closeDialog();
    }, 1000); // Simulating a successful buy operation with a delay
  };

  return (
    showDialog && (
      <div className={styles.buyDialog}>
        <div className={styles.buyContent}>
          <div className={styles.header}>Satın Al</div>
          <div className={styles.description}>Satın Almak istiyor musunuz?</div>
          <div className={styles.buttons}>
            <button
              className={styles.cancelButton}
              onClick={closeDialog}
              disabled={loading}
            >
              Vazgeç
            </button>
            <button
              className={styles.confirmButton}
              onClick={buy}
              disabled={loading}
            >
              {loading ? <Loading size={30} color="white" /> : "Satın Al"}
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default BuyDialog;
