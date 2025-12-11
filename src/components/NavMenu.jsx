import { NavLink } from "react-router";
import styles from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.active : styles.inactive
        }
      >
        Lista de Clubes
      </NavLink>
      <NavLink
        to="/adicionar"
        className={({ isActive }) =>
          isActive ? styles.active : styles.inactive
        }
      >
        Adicionar Clube
      </NavLink>
    </nav>
  );
};

export default NavMenu;
