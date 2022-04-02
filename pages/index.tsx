import styles from "../page-styles/home.module.css";
import { useForm } from "react-hook-form";
import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import preloadImage from "../square-image.png";
import axios from "axios";
import { toast } from "react-toastify";
interface IForm {
  firstName: string;
  surname: string;
  name: string;
  price: number;
  brand: string;
  description: string;
  picture: FileList;
}

function Home() {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>();

  function notifySuccess(message: string) {
    toast.success(message);
  }

  const [media, setMedia] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function handlePost(data: IForm) {
    const imageData = new FormData();
    imageData.append("file", data.picture[0]);
    imageData.append("upload_preset", "products_images");
    imageData.append("cloud_name", "shop-ai");
    const image = await axios.post(
      "https://api.cloudinary.com/v1_1/shop-ai/upload",
      imageData
    );
    reset();
    
    const product = await axios.post(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/products`,
      {
        firstName: data.firstName,
        surname: data.surname,
        name: data.name,
        price: `$${data.price}`,
        brand: data.brand,
        description: data.description,
        image: image.data.url,
      }
    );
    notifySuccess(product.data.message)
  }

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const files: any = e.currentTarget.files;
    setMedia(URL.createObjectURL(files[0]));
  }
  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.title}>
          Добро пожаловать в интернет магазин ShopAI
        </h1>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit(handlePost)}>
            <div className={styles.image}>
              <div onClick={() => inputRef.current?.click()}>
                {media ? (
                  <div
                    style={{
                      height: "200px",
                      position: "relative",
                    }}
                  >
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={media}
                      quality={30}
                      alt="Product Image"
                    />
                  </div>
                ) : (
                  <Image src={preloadImage} alt="Image" />
                )}
              </div>
              <input
                {...register("picture", {
                  required: { value: true, message: "Это поле обезательно" },
                })}
                accept="image/*"
                type="file"
                onChange={handleChange}
                className={styles.file}
              />
            </div>
            <div className={styles.formInput}>
              <input
                {...register("firstName", {
                  required: { value: true, message: "Это поле обезательно" },
                })}
                className={styles.input}
                placeholder="Имя"
              />
              <input
                {...register("surname", {
                  required: { value: true, message: "Это поле обезательно" },
                })}
                className={styles.input}
                placeholder="Фамилия"
              />
            </div>
            <div>
              <input
                {...register("name", {
                  required: { value: true, message: "Это поле обезательно" },
                })}
                className={styles.input}
                placeholder="Названия"
              />
            </div>
            <div className={styles.formInput}>
              <input
                {...register("price", {
                  required: { value: true, message: "Это поле обезательно" },
                  valueAsNumber: true,
                  maxLength: {
                    value: 7,
                    message: "Много",
                  },
                })}
                className={styles.input}
                placeholder="Цена"
              />
              <input
                {...register("brand", {
                  required: { value: true, message: "Это поле обезательно" },
                })}
                className={styles.input}
                placeholder="Названия бренда"
              />
            </div>
            <div>
              <textarea
                className={styles.textarea}
                {...register("description", {
                  required: { value: true, message: "Это поле обезательно" },
                })}
                placeholder="Описания"
              />
            </div>
            <button type="submit" className={styles.btn}>
              Опубликовать
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
