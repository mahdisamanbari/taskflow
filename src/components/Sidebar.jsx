import React from 'react'
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>TaskFlow</h2>

      <ul className={styles.menu}>
        <li>Dashboard</li>
        <li>Tasks</li>
        <li>Settings</li>
      </ul>
    </aside>
  )
}

export default Sidebar