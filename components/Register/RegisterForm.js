import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

import styles from "./register.module.scss";
import Loading from "../Loading/Loading"; // Ensure this component exists and works as expected
import toastMessage from "../../constants/toastify"; // Ensure this function exists and works as expected

// Validation schema
const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Geçerli bir email adresi girin").required("Email gerekli"),
  password: Yup.string().min(6, "Şifre en az 6 karakter olmalı").required("Şifre gerekli"),
});

function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: RegisterSchema,
      onSubmit: (values) => {
        setLoading(true);

        // Get the list of registered emails from local storage
        let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        // Check if the email is already registered
        const emailExists = registeredUsers.some(user => user.email === values.email);
        if (emailExists) {
          toastMessage("error", "Bu email zaten sistemde kayıtlı!");
          setLoading(false);
          return;
        }

        // Save the new user's email and password to local storage
        registeredUsers.push({ email: values.email, password: values.password });
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

        toastMessage(
          "success",
          "Kaydınız başarılı, giriş ekranına yönlendiriliyorsunuz!"
        );
        setTimeout(() => {
          router.replace("/login");
        }, 2000);
        setLoading(false);
      },
    });

  const formSubmit = () => {
    setShowError(true);
    handleSubmit();
  };

  return (
    <div className={styles.form}>
      <div className={styles.formTop}>
        <h1>Üye Ol</h1>
        <span>Fırsatlardan yararlanmak için üye ol!</span>
      </div>
      <div className={styles.formMiddle}>
        <div
          className={
            errors.email && touched.email && values.email !== ""
              ? `${styles.formGroup} ${styles.formError}`
              : styles.formGroup
          }
        >
          <label className={styles.title}>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {showError && errors.email && <span>{errors.email}</span>}
        </div>
        <div
          className={
            errors.password && touched.password && values.password !== ""
              ? `${styles.formGroup} ${styles.formError}`
              : styles.formGroup
          }
        >
          <label className={styles.title}>Şifre</label>
          <input
            type="password"
            name="password"
            placeholder=""
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {showError && errors.password && <span>{errors.password}</span>}
        </div>
        <div className={`${styles.formGroup} ${styles.formButton}`}>
          <button
            className={styles.registerButton}
            type="submit"
            onClick={() => formSubmit()}
            disabled={loading}
          >
            {loading ? <Loading size={30} color="white" /> : "Üye Ol"}
          </button>
        </div>
      </div>
      <div className={styles.formBottom}>
        <span>
          Hesabın yok mu?
          <Link href="/login">
            <a className={styles.login}> Giriş Yap</a>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default RegisterForm;
