import styles from "./styles.module.css";

export default function PlantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Card}>{children}</div>
    </div>
  );
}
