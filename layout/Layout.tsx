import { Form, Modal } from "../components";
import Basket from "./Basket/Basket";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}
function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.main}>
        {children}
        <Basket />
      </div>
      <Footer className={styles.footer} />

      <Modal>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.5 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          <Form />
        </motion.div>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default Layout;
