import { useForm } from "react-hook-form";
import { IForm } from "./Form.interface";
import styles from "./Form.module.css";
import { FaUserAlt } from "react-icons/fa";
import cn from "clsx";
import axios from "axios";
import cookies from "js-cookie";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/productAction";

export function Form() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  function notifySuccess(message: string) {
    toast.success(message);
  }

  function notifyError(message: string) {
    toast.error(message);
  }

  const handleLogin = async (data: IForm) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_DOMAIN}api/auth/login `,
      data
    );
    reset();
    if (res.data.error) {
      notifyError(res.data.message);
    } else {
      cookies.set("token", res.data.token);
      cookies.set("userId", res.data.user.id);
      notifySuccess(res.data.message);
      dispatch(fetchProducts);
    }
  };

  const handleRegistration = async (data: IForm) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_DOMAIN}api/auth/registration`,
      data
    );
    reset();
    if (res.data.error) {
      notifyError(res.data.message);
    } else {
      notifySuccess(res.data.message);
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
        <div className={styles.icon}>
          <FaUserAlt color="var(--whate)" size={70} />
        </div>

        <label className={styles.label}>
          Email:
          <input
            className={cn(styles.input, { [styles.error]: errors.email })}
            {...register("email", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email.message}</span>
          )}
        </label>

        <label className={styles.label}>
          Password:
          <input
            className={cn(styles.input, {
              [styles.error]: errors.password,
            })}
            type="password"
            {...register("password", {
              required: { value: true, message: "This field is required" },
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className={styles.errorMessage}>
              {errors.password.message}
            </span>
          )}
        </label>
        <button type="submit" className={styles.btn}>
          Login
        </button>

        <button
          type="submit"
          className={styles.btn}
          onClick={handleSubmit(handleRegistration)}
        >
          Registration
        </button>
      </form>
    </>
  );
}
