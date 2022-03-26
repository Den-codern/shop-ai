import axios from "axios";
import { Pagination } from "../components";
import { ProductsModel, ProductsProps } from "../interfaces/product.interface";
import cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { ModalActionTypes } from "../redux/types/modal";
import { useEffect } from "react";
import { useRouter } from "next/router";
function Products({ products }: ProductsProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!cookie.get("token")) {
      dispatch({
        type: ModalActionTypes.OPEN_MODAL,
        payload: "openFormModal",
      });
      router.push("/");
    }
  });

  return (
    <>
      <Pagination products={products} />
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:${process.env.PORT}/api/products`
    );

    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Products;
