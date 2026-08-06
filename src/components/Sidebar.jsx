import React from 'react'
import styles from "./Sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>TaskFlow</h2>

      <ul className={styles.menu}>
  <li>
    <MdDashboard />
    <span>Dashboard</span>
  </li>

  <li>
    <FaTasks />
    <span>Tasks</span>
  </li>

  <li>
    <IoSettingsSharp />
    <span>Settings</span>
  </li>
</ul>
    </aside>
  )
}

export default Sidebar