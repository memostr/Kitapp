import React from "react";
import Image from "next/image";
import styles from "./error.module.scss";

function Error() {
  return (
    <div className={styles.error}>
      <div className={styles.errorContent}>
        <Image
          className={styles.errorImg}
          src="/errorImg.png"
          alt="Hata"
          width={500} // Genişlik değeri, görüntünüzün gerçek genişliği olmalıdır
          height={300} // Yükseklik değeri, görüntünüzün gerçek yüksekliği olmalıdır
        />
      </div>
      <div className={styles.errorMessage}>
        Lütfen bağlantınızı kontrol ediniz!
      </div>
    </div>
  );
}

export default Error;
