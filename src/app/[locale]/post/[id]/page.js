import React from "react";
import Action from "./action";
import { Link } from "@/src/navigation";
import styles from "@/styles/post.module.css";

export default async function Page({ params }) {
  const { data } = await Action.getDetailUser({ id: params.id });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>DETAIL POST : {data.id}</h4>
      </div>

      <div className={styles.details}>
        <p>AVATAR</p>
        <img
          src={data.avatar}
          alt={data.first_name}
          className={styles.avatar}
        />
        <p>EMAIL : {data.email}</p>
        <p>FIRST NAME : {data.first_name}</p>
        <p>LAST NAME : {data.last_name}</p>
      </div>

      <Link href="/post" className={styles.link}>
        Back
      </Link>
    </div>
  );
}
