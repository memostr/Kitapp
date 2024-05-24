import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";
import LogoIcon from "../../constants/icons/LogoIcon";
import UserIcon from "../../constants/icons/UserIcon";
import AddIcon from "../../constants/icons/AddIcon";

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status from localStorage
    const authToken = localStorage.getItem("authToken");
    console.log("Auth Token on Load:", authToken);
    setIsAuth(!!authToken);

    // Add an event listener to handle changes in localStorage
    const handleStorageChange = () => {
      const authToken = localStorage.getItem("authToken");
      console.log("Auth Token on Storage Change:", authToken);
      setIsAuth(!!authToken);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setIsAuth(false);
    handleNavigation("/login");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div
          className={styles.logo}
          onClick={() => handleNavigation("/")}
        >
          <LogoIcon className={styles.logoImg} />
        </div>
        {isAuth ? (
          <div className={styles.navbarButtons}>
            <button
              className={styles.addButton}
              onClick={() => handleNavigation("/addProduct")}
            >
              <AddIcon className={styles.icon} size="12.9" color="#4b9ce2" />
            </button>
            <button
              onClick={() => handleNavigation("/addProduct")}
            >
              <AddIcon className={styles.icon} size="12.9" color="#4b9ce2" />
              Ürün Ekle
            </button>
            <button
              onClick={() => handleNavigation("/account")}
            >
              <UserIcon
                className={styles.icon}
                width="12.4"
                height="13.1"
                color="#4b9ce2"
              />
              Hesabım
            </button>
            <button
              className={styles.logoutButton}
              onClick={handleLogout}
            >
              Çıkış Yap
            </button>
          </div>
        ) : (
          <div className={styles.navbarButtons}>
            <button
              onClick={() => handleNavigation("/login")}
            >
              <UserIcon
                className={styles.icon}
                width="12.4"
                height="13.1"
                color="#4b9ce2"
              />
              Giriş Yap
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
