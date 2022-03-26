import { BasketProps } from "./Basket.props";
import Image from "next/image";
import styles from "./Basket.module.css";
import { RiAddFill } from "react-icons/ri";
import { BiMinus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { CartActionType } from "../../redux/types/cart";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
function BasketItem({ _id, price, count, name, image }: BasketProps) {
  const dispatch = useDispatch();
  function IncrementHandler() {
    dispatch({
      type: CartActionType.INCREMENT_COUNT,
      payload: _id,
    });
  }

  function DecrementHandler() {
    dispatch({
      type: CartActionType.DECREMENT_COUNT,
      payload: _id,
    });
  }

  function removeHandler() {
    dispatch({
      type: CartActionType.REMOVE_ITEM,
      payload: _id,
    });
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.5 }}
      whileHover={{ scale: 1.1 }}
      layout
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 300 },
      }}
    >
      <div key={_id} className={styles.item}>
        <div
          style={{
            width: "120px",
            height: "200px",
            position: "relative",
          }}
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={image}
            quality={30}
            alt="Product Image"
          />
        </div>
        <div className={styles.counter}>
          <button onClick={IncrementHandler} className={styles.btn}>
            <RiAddFill size={40} />
          </button>
          <div className={styles.count}>{count}</div>
          <button onClick={DecrementHandler} className={styles.btn}>
            <BiMinus size={40} />
          </button>
        </div>
        <div className={styles.price}>${price}</div>
        <FaTrash
          onClick={removeHandler}
          cursor="pointer"
          size={40}
          color="var(--red)"
        />
      </div>
    </motion.div>
  );
}
export default BasketItem;
