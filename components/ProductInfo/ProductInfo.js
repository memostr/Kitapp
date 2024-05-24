import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./productInfo.module.scss";
import toastMessage from "../../constants/toastify";
import { ProductSchema } from "../../constants/YupSchema";
import Loading from "../Loading/Loading";
import ImageUploader from "../ImageUploader/ImageUploader";
import { useFormik } from "formik";
import { useProduct } from "../../contexts/product";

function ProductInfo({ showError }) {
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorImg, setErrorImg] = useState(false);
  const [image, setImage] = useState(null);
  const { addProduct } = useProduct();
  const router = useRouter();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
        isOfferable: false,
        price: "",
      },
      validationSchema: ProductSchema,
      onSubmit: (values) => {
        console.log("Form submitted"); // Debugging log
        if (image != null) {
          setButtonLoading(true);
          const data = { ...values, isSold: false, image: URL.createObjectURL(image) };
          console.log("Product data:", data); // Debugging log
          addProduct(data); // Add product to the context
          toastMessage("success", "Ürün Eklendi");
          setButtonLoading(false);
          resetForm();
          setImage(null);
          router.push("/"); // Redirect to the homepage
        } else {
          setErrorImg(true);
        }
      },
    });

  return (
    <>
      {loading ? (
        <Loading size={75} color="#4b9ce2" />
      ) : (
        <>
          <div className={styles.info}>
            <div className={styles.detailTitle}>Ürün Detayı</div>
            <div className={styles.formRow}>
              <label htmlFor="urunAd">Ürün Adı</label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Örnek: Iphone 12 Pro Max"
                maxLength="100"
                className={errors?.name && touched.name ? styles.notValid : ""}
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="description">Açıklama</label>
              <textarea
                name="description"
                id="description"
                placeholder="Ürün açıklaması giriniz"
                value={values.description}
                maxLength="500"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors?.description && touched.description
                    ? styles.notValid
                    : ""
                }
              />
            </div>

            <div className={`${styles.formRow} ${styles.priceRow}`}>
              <label htmlFor="price">Fiyat</label>
              <input
                type="text"
                name="price"
                id="price"
                className={
                  errors?.price && touched.price
                    ? styles.notValid
                    : styles.price
                }
                placeholder="Bir fiyat girin"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p
                className={
                  errors?.price && touched.price ? styles.notValidIcon : ""
                }
              >
                TL
              </p>
              {errors?.price && touched.price && (
                <span>0-9 Arasında Bir Rakam Girin</span>
              )}
            </div>
            <div className={`${styles.formRow} ${styles.offerRow}`}>
              {values.isOfferable ? (
                <label htmlFor="offeropt" className={styles.offeroptActive}>
                  Fiyat ve teklif opsiyonu
                </label>
              ) : (
                <label htmlFor="offeropt" className={styles.offeropt}>
                  Teklif Opsiyonu
                </label>
              )}
              <input
                type="checkbox"
                name="isOfferable"
                id="isOfferable"
                checked={values.isOfferable}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className={styles.image}>
            <div className={styles.imageTitle}>Ürün Görseli</div>
            <div className={styles.imageUploading}>
              <ImageUploader error={errorImg} onChange={setImage} />
              <button
                className={styles.saveButton}
                type="button"
                onClick={handleSubmit}
              >
                {buttonLoading ? <Loading size={30} color="#fff" /> : "Kaydet"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductInfo;
