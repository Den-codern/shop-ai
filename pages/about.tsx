import styles from "../page-styles/about.module.css";
import cn from "clsx";
import NextSvg from "../assets/nextjs.svg";
import MongoSvg from "../assets/mongodb.svg";
import { FaNode, FaReact } from "react-icons/fa";
import { Slider } from "../components/Slider/Slider";
import { SiNextdotjs, SiMongodb, SiRedux, SiTypescript } from "react-icons/si";
function About() {
  return (
    <div className={styles.stacks}>
      <div className={styles.title}>
        В это проекте использовались такие технологии как:
      </div>
      <Slider>
        <div className={cn(styles.framework, styles.next)}>
          <SiNextdotjs size={150} color={"#000000"} />
          <div className={styles.description}>
            Next.js - это фреймворк, основанный на React, который позволяет
            создавать веб-приложения с улучшенной производительностью и
            улучшенным пользовательским опытом с помощью дополнительных функций
            предварительного рендеринга, таких как полноценный рендеринг на
            стороне сервера (SSR) и статическая генерация страниц (SSG).
          </div>
        </div>

        <div className={cn(styles.framework, styles.mongodb)}>
          <SiMongodb size={150} color={"#4e9d52"} />
          <div className={styles.description}>
            Документоориентированная система управления базами данных, не
            требующая описания схемы таблиц. Считается одним из классических
            примеров NoSQL-систем, использует JSON-подобные документы и схему
            базы данных. Написана на языке C++. Применяется в веб-разработке, в
            частности, в рамках JavaScript-ориентированного стека MEAN.
          </div>
        </div>

        <div className={cn(styles.framework, styles.react)}>
          <FaReact size={150} color="#63D5F1" />
          <div className={styles.description}>
            React — это бесплатная внешняя библиотека JavaScript с открытым
            исходным кодом для создания пользовательских интерфейсов на основе
            компонентов пользовательского интерфейса. Он поддерживается Meta и
            сообществом отдельных разработчиков и компаний.
          </div>
        </div>

        <div className={cn(styles.framework, styles.node)}>
          <FaNode size={150} color="#77B04E" />
          <div className={styles.description}>
            Node.js — это кроссплатформенная внутренняя среда выполнения
            JavaScript с открытым исходным кодом, которая работает на движке V8
            и выполняет код JavaScript вне веб-браузера.
          </div>
        </div>
        <div className={cn(styles.framework, styles.redux)}>
          <SiRedux size={150} color="#744EB8" />
          <div className={styles.description}>
            Redux — популярный менеджер состояний в веб-приложениях. Обычно его
            используют в связке с React, но поддержка не ограничена только этой
            популярной JS-библиотекой
          </div>
        </div>
        <div className={cn(styles.framework, styles.typescript)}>
          <SiTypescript size={150} color="#3177BC" />
          <div className={styles.description}>
            TypeScript — язык программирования, представленный Microsoft в 2012
            году и позиционируемый как средство разработки веб-приложений,
            расширяющее возможности JavaScript
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default About;
