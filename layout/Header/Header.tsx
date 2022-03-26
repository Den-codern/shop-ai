import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import { FaUserCircle } from "react-icons/fa";
import cn from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { ModalActionTypes } from "../../redux/types/modal";
import Logo from "./Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
function Header({ className, ...props }: HeaderProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = () => {
      dispatch({ type: ModalActionTypes.OPEN_MODAL,payload:'openFormModal' });
  };
  return (
    <>
      <header className={cn(className, styles.header)} {...props}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href={"/"} passHref>
              <Image src={Logo} alt="logo" width={74} height={56} />
            </Link>
          </div>
          <nav className={styles.menu}>
            <Link href={"/"}>
              <a
                className={cn({
                  [styles.active]: router.pathname == "/",
                })}
              >
                Home
              </a>
            </Link>
            <Link href={"/products"}>
              <a
                className={cn({
                  [styles.active]: router.pathname == "/products",
                })}
              >
                Products
              </a>
            </Link>

            <Link href={"/about"}>
              <a
                className={cn({
                  [styles.active]: router.pathname == "/about",
                })}
              >
                About
              </a>
            </Link>
          </nav>
          <div className={styles.user}>
            <FaUserCircle
              size={50}
              color="var(--dark-blue)"
              onClick={handleClick}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
