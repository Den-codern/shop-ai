import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "clsx";
import { useDispatch } from "react-redux";
import { ModalActionTypes } from "../../redux/types/modal";
import { MdAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { FaSignOutAlt } from "react-icons/fa";
import cookies from "js-cookie";
import Router from "next/router";
import { toast } from "react-toastify";
import { CartActionType } from "../../redux/types/cart";
import { fetchProducts } from "../../redux/actions/productAction";
function Sidebar({ className, ...props }: SidebarProps) {
  const dispatch = useDispatch();

  function notifyInfo(message: string) {
    toast.info(message);
  }

  function notifyError(message: string) {
    toast.error(message);
  }

  function handleClick() {
    dispatch({ type: ModalActionTypes.OPEN_MODAL, payload: "openBasketModal" });
  }

  function handleSignOut() {
    if (cookies.get("token")) {
      cookies.remove("token");
      cookies.remove("userId");
      notifyInfo("Вы вышли со своего аккаунта");
      dispatch({ type: CartActionType.REMOVE_ALL });
     
      Router.push("/");
    } else {
      notifyError("Чтобы выйти с аккаунта надо сперва войти, логично :)");
    }
  }

  return (
    <>
      <aside className={cn(className, styles.sidebar)} {...props}>
        <nav className={styles.menu}>
          <motion.div
            whileHover={{ x: -10 }}
            className={styles.cart}
            onClick={handleClick}
          >
            <MdAddShoppingCart size={20} style={{ marginRight: 15 }} />
            <div>Корзина</div>
          </motion.div>
        </nav>
        <div className={styles.signOut}>
          <FaSignOutAlt />
          <div className={styles.out} onClick={handleSignOut}>
            Выйти
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
