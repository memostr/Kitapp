import React, { useState } from "react";
import styles from "./userInfo.module.scss";
import AccountIcon from "../../constants/icons/AccountIcon";
import Loading from "../../components/Loading/Loading";
import { useRouter } from "next/router";

function UserInfo({ user }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const logOut = () => {
    setLoading(true);
    // Simulate logout action
    setTimeout(() => {
      // Clear user data from local storage
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("authToken");

      // Redirect to login page
      router.replace("/login");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.info}>
      <div className={styles.infoContent}>
        <div className={styles.userInfo}>
          <AccountIcon size="38" />
          <span>{user.email}</span>
        </div>
        <button
          className={styles.logoutButton}
          onClick={logOut}
          disabled={loading}
        >
          {loading ? <Loading size={30} color="white" /> : "Çıkış Yap"}
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
