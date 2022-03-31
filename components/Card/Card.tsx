import styles from "./Card.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CardProps } from "./Card.props";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { CartActionType } from "../../redux/types/cart";
import { motion } from "framer-motion";

import { formatDistance } from "date-fns";

const Card = motion(
  ({
    _id,
    name,
    description,
    image,
    price,
    brand,
    surname,
    firstName,
    createdAt,
  }: CardProps) => {
    const dispatch = useDispatch();

    function handleClick() {
      dispatch({
        type: CartActionType.ADD_ITEMS,
        payload: {
          _id,
          name,
          image,
          price: +price.substring(1),
          count: 1,
        },
      });
    }
    return (
      <motion.div
        className={styles.card}
        style={{ y: "-100px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className={styles.header}>
          <div style={{ width: "100%", height: "200px", position: "relative" }}>
            <Image
              layout="fill"
              objectFit="contain"
              src={image}
              quality={30}
              alt="Product Image"
            />
          </div>
        </div>
        <div className={styles.body}>
          <span className={styles.tag}>{brand}</span>
          <h4 className={styles.title}>{name}</h4>
          <div className={styles.price}>{price}</div>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.user}>
            <HiOutlineUserCircle size={30} />
            <div className={styles.user__info}>
              <h5>
                {firstName ? firstName : "July"} {surname ? surname : "Dec"}
              </h5>
              <small>
                {createdAt
                  ? formatDistance(new Date(createdAt), new Date())
                  : "none"}
              </small>
            </div>
          </div>
          <a onClick={handleClick} className={styles.btn}>
            Add to cart
          </a>
        </div>
      </motion.div>
    );
  }
);

export default Card;
