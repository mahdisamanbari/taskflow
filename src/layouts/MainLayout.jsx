import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "./MainLayout.module.css";
function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.content}>
        <Navbar />

        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;