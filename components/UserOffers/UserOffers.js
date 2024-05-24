import React, { useState } from "react";
import styles from "./userOffers.module.scss";
import Loading from "../Loading/Loading";
import BuyDialog from "../BuyDialog/BuyDialog";
import toastMessage from "../../constants/toastify";

function UserOffers({ showError }) {
  const [loading, setLoading] = useState(false);
  const [acceptLoading, setAcceptLoading] = useState(false);
  const [deniedLoading, setDeniedLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("receivedOffers");
  const [buyDialog, setBuyDialog] = useState(false);
  const [productId, setProductId] = useState("");

  const staticOffers = {
    receivedOffers: [
      {
        id: 1,
        product: {
          id: 1,
          name: "Product 1",
          image: { url: "/path/to/image1.jpg" },
          isSold: false
        },
        offerPrice: 150,
        isStatus: null
      },
      {
        id: 2,
        product: {
          id: 2,
          name: "Product 2",
          image: { url: "/path/to/image2.jpg" },
          isSold: false
        },
        offerPrice: 200,
        isStatus: true
      }
    ],
    givenOffers: [
      {
        id: 3,
        product: {
          id: 3,
          name: "Product 3",
          image: { url: "/path/to/image3.jpg" },
          isSold: false
        },
        offerPrice: 300,
        isStatus: false
      },
      {
        id: 4,
        product: {
          id: 4,
          name: "Product 4",
          image: { url: "/path/to/image4.jpg" },
          isSold: false
        },
        offerPrice: 400,
        isStatus: null
      }
    ]
  };

  const offers = staticOffers[selectedOption];

  const handleAcceptOffer = (offerId) => {
    setAcceptLoading(true);
    setTimeout(() => {
      toastMessage("success", "Teklif Onaylandı");
      setAcceptLoading(false);
      // Update offer status to accepted in the static list
    }, 1000);
  };

  const handleDenyOffer = (offerId) => {
    setDeniedLoading(true);
    setTimeout(() => {
      toastMessage("success", "Teklif Reddedildi");
      setDeniedLoading(false);
      // Update offer status to denied in the static list
    }, 1000);
  };

  const closeDialog = () => {
    setBuyDialog(false);
    // Refresh offers if necessary
  };

  return (
    <>
      <div className={styles.offers}>
        <div className={styles.offersContent}>
          <div className={styles.offersHeader}>
            <button
              className={
                selectedOption === "receivedOffers"
                  ? `${styles.option} ${styles.selected}`
                  : styles.tab
              }
              onClick={() => setSelectedOption("receivedOffers")}
            >
              Teklif Aldıklarım
            </button>
            <button
              className={
                selectedOption === "givenOffers"
                  ? `${styles.option} ${styles.selected}`
                  : styles.tab
              }
              onClick={() => setSelectedOption("givenOffers")}
            >
              Teklif Verdiklerim
            </button>
          </div>
          <div className={styles.offersList}>
            {offers.length > 0 &&
              offers.map((offer) => (
                <div key={offer.id} className={styles.offerItem}>
                  <div className={styles.offerDetail}>
                    <div className={styles.productImg}>
                      {offer.product?.image?.url ? (
                        <img
                          className={styles.productPhoto}
                          src={offer.product.image.url}
                          alt={
                            offer.product.name
                              ? offer.product.name
                              : "Adlandırılmamış"
                          }
                        />
                      ) : (
                        <img
                          className={styles.noPhoto}
                          src="noPhoto.png"
                          alt="Fotoğraf Yok"
                        />
                      )}
                    </div>
                    <div className={styles.productDetail}>
                      <span className={styles.productName}>
                        {offer.product?.name
                          ? offer.product.name
                          : "Belirtilmemiş"}
                      </span>
                      <div className={styles.offerPrice}>
                        <span>
                          {selectedOption === "givenOffers"
                            ? "Verilen Teklif:"
                            : "Alınan Teklif:"}
                        </span>
                        {offer.offerPrice.toLocaleString("tr-TR", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }) + " TL"}
                      </div>
                    </div>
                  </div>
                  <div className={styles.offerStatus}>
                    {offer.isStatus != null ? (
                      offer.product?.isSold ? (
                        selectedOption === "givenOffers" ? (
                          <span className={styles.solded}>Satın Alındı</span>
                        ) : (
                          <span className={styles.solded}>Satıldı</span>
                        )
                      ) : offer.isStatus ? (
                        <div className={styles.acceptOffer}>
                          {selectedOption === "givenOffers" && (
                            <button
                              className={styles.buyButton}
                              onClick={() => {
                                setProductId(offer.product.id);
                                setBuyDialog(true);
                              }}
                            >
                              Satın Al
                            </button>
                          )}
                          <span className={styles.accepted}>Onaylandı</span>
                        </div>
                      ) : (
                        <span className={styles.denied}>Reddedildi</span>
                      )
                    ) : selectedOption === "receivedOffers" ? (
                      <div className={styles.offerOptions}>
                        <button
                          className={styles.acceptButton}
                          onClick={() => handleAcceptOffer(offer.id)}
                          disabled={acceptLoading}
                        >
                          {acceptLoading ? (
                            <Loading size={30} color="white" />
                          ) : (
                            "Onayla"
                          )}
                        </button>
                        <button
                          className={styles.deniedButton}
                          onClick={() => handleDenyOffer(offer.id)}
                          disabled={deniedLoading}
                        >
                          {deniedLoading ? (
                            <Loading size={30} color="white" />
                          ) : (
                            "Reddet"
                          )}
                        </button>
                      </div>
                    ) : (
                      <span className={styles.waiting}>Yanıt Bekleniyor</span>
                    )}
                  </div>
                </div>
              ))}
            {loading && <Loading size={75} color="#4b9ce2" />}
          </div>
        </div>
      </div>
      <BuyDialog
        product={{ id: productId }}
        showDialog={buyDialog}
        closeDialog={closeDialog}
      />
    </>
  );
}

export default UserOffers;
