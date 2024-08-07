import { useTranslations } from "next-intl";
import styles from "@/styles/home.module.css"; // Ensure path is correct
import { Link } from "@/src/navigation";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.biodata}>
          <p>
            <strong>{t("name")}:</strong> Ahmad Rifal
          </p>
          <p>
            <strong>{t("position")}:</strong> Software Developer
          </p>
          <p>
            <strong>{t("email")}:</strong> rifal.ahmd2@gmail.com
          </p>
          <p>
            <strong>{t("location")}:</strong> Jakarta, Indonesia
          </p>
          <p>
            <Link href={"/post"}>Click Me!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
