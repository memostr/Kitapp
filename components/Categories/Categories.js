import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./categories.module.scss";

function Categories({ loading, showError }) {
  const router = useRouter();
  const categoryContent = useRef(null);

  // Static category list
  const categories = [
    { id: 1, name: "Hepsi" },
    { id: 2, name: "Yeni Gelenler" },
    { id: 3, name: "Çok Satanlar" },
    // Add other categories here
  ];

  useEffect(() => {
    // Adding the wheel event
    const handleWheel = (evt) => {
      evt.preventDefault();
      if (categoryContent.current) {
        categoryContent.current.scrollLeft += evt.deltaY;
      }
    };

    if (categoryContent.current) {
      categoryContent.current.addEventListener("wheel", handleWheel);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (categoryContent.current) {
        categoryContent.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const categoryClick = async (categoryName, categoryId) => {
    loading(true);
    // Process the category change
    console.log(`Selected category: ${categoryName}, ID: ${categoryId}`);
    // After processing the category change, navigate to the new URL with the router
    router.push("/?category=" + categoryName, undefined, { shallow: true });
    loading(false);
  };

  return (
    <div className={styles.category}>
      <div ref={categoryContent} className={styles.categoryContent}>
        {categories.map((category) => (
          <span
            key={category.id}
            className={styles.categoryItem}
            onClick={() => categoryClick(category.name, category.id)}
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Categories;
