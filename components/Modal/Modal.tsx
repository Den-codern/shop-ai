import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { ModalActionTypes } from "../../redux/types/modal";
import { MdClose } from "react-icons/md";

import RenderModal from "react-modal";
import { ModalProps } from "./Modal.props";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "#B2DEEF",
    borderColor: "#15759C",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "none",
    width: 400,
    height: 435,
  },
};

export function Modal({ children }: ModalProps) {
  const open = useSelector((state: RootState) => state.modal.openFormModal);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch({ type: ModalActionTypes.CLOSE_MODAL, payload: "openFormModal" });
  }

  return (
    <>
      <RenderModal
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
        {children}
      </RenderModal>
    </>
  );
}
