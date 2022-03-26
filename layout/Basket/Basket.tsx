import styles from "./Basket.module.css";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers";
import { ModalActionTypes } from "../../redux/types/modal";
import { MdClose } from "react-icons/md";
import { CartActionType } from "../../redux/types/cart";
import BasketItem from "./BasketItem";
import { mathTotalPrice } from "./Basket.utils";
import { BasketRender } from "./Basket.props";
import axios from "axios";
import cookies from "js-cookie";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/actions/productAction";
import { toast } from "react-toastify";

function BasketRender({
  cartItems,
  removeAllHandler,
  handleSave,
}: BasketRender) {
  return (
    <>
      <div className={styles.basket}>
        <div className={styles.header}>
          <button className={styles.remove} onClick={removeAllHandler}>
            Remove All
          </button>
        </div>
        <div className={styles.body}>
          {cartItems.length
            ? cartItems.map((item) => {
                return <BasketItem key={item._id} {...item} />;
              })
            : "Нет товаров"}
        </div>
        <div className={styles.footer}>
          <button className={styles.save} onClick={handleSave}>
            Save
          </button>
          <div className={styles.total}>${mathTotalPrice(cartItems)}</div>
        </div>
      </div>
    </>
  );
}

function Basket() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.modal.openBasketModal);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    dispatch(fetchProducts);
  }, []);
  function notifySuccess(message: string) {
    toast.success(message);
  }
  function handleClick() {
    dispatch({
      type: ModalActionTypes.CLOSE_MODAL,
      payload: "openBasketModal",
    });
  }

  async function handleSave() {
    const postData = {
      products: cartItems,
      id: cookies.get("userId"),
    };

    const { data } = await axios.post(
      `http://localhost:${process.env.PORT}/api/cart/postProducts`,
      postData
    );
    notifySuccess(data.message);
  }

  function removeAllHandler() {
    dispatch({
      type: CartActionType.REMOVE_ALL,
    });
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "none",
      background: "#ffffff",
      borderRadius: "20px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",

      overflow: "scroll",

      boxShadow:
        "#1687d933 0px 54px 55px, #1687d933 0px -12px 30px,#1687d933 0px 14px 16px, #1687d933 0px 12px 13px, #1687d933 0px -3px 15px",
      padding: "20px",
      width: "60%",
      height: "85%",
    },
    overlay: {
      backgroundColor: "transparent",
    },
  };

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={handleClick}
        style={customStyles}
        ariaHideApp={false}
      >
        <MdClose
          size={50}
          onClick={handleClick}
          className={styles.close}
          color="var(--black)"
          cursor="pointer"
        />

        <BasketRender
          cartItems={cartItems}
          removeAllHandler={removeAllHandler}
          handleSave={handleSave}
        />
      </Modal>
    </>
  );
}

export default Basket;
