import { FC } from "react";
import { IData } from "../../shared/types/Answer";
import { Anchor } from "antd";
import styles from "./index.module.css";
const { Link } = Anchor;

const Navigation: FC<IData> = ({ topics }) => {
  return (
    <nav className={styles.container}>
      <h1>Содержание</h1>
      <Anchor>
        {/* <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link> */}
        {topics.map((el) => (
          <Link href={"#" + el.title} title={el.title} key={el.id}>
            {el.questions.map((item) => (
              <Link href={"#" + item.title} title={item.title} key={item.id} />
            ))}
          </Link>
        ))}
      </Anchor>
      ,
    </nav>
  );
};

export default Navigation;
