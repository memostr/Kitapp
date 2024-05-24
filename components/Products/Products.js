import React from "react";
import { useRouter } from "next/router";
import styles from "./products.module.scss";
import { useProduct } from "../../contexts/product";

function Products() {
  const router = useRouter();
  const { products } = useProduct();

  return (
    <div className={styles.product}>
      {products.length > 0 ? (
        <>
          <ul className={styles.productContainer}>
            {products.map((product) => (
              <li
                key={product.id}
                className={styles.productItem}
                onClick={() => router.push("/productDetail/" + product.id)}
              >
                <div className={styles.productImg}>
                  {product.image ? (
                    <img
                      className={styles.productPhoto}
                      src={product.image.url}
                      alt={product.name ? product.name : "Adlandırılmamış"}
                    />
                  ) : (
                    <img
                      className={styles.noPhoto}
                      src="noPhoto.png"
                      alt="Fotoğraf Yok"
                    />
                  )}
                </div>
                <div className={styles.productContent}>
                  <div className={styles.productDetail}>
                    <span className={styles.productBrand}>
                      {product.brand ? product.brand : "Belirsiz"}
                    </span>
                  </div>
                  <div className={styles.productPrice}>
                    {product.price
                      ? product.price.toLocaleString("tr-TR", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }) + " TL"
                      : "Belirsiz"}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className={styles.productNotFound}>
          Bu kategoride hiçbir ürün bulunmamaktadır.
        </div>
      )}
    </div>
  );
}

export default Products;
