import styles from '../Menu/Menu.module.css';
import { FaRegCaretSquareLeft, FaRegCaretSquareRight } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

  const [isOpen, setIsOpen] = useState(true);

  const handleclickCloseMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
      <div className={`${styles.menuContainer} ${isOpen ? "" : styles.closeMenu}`}>
          {isOpen ? 
              <FaRegCaretSquareLeft className={styles.closeIcon} onClick={handleclickCloseMenu}></FaRegCaretSquareLeft>
              : 
              <FaRegCaretSquareRight className={styles.closeIcon} onClick={handleclickCloseMenu}></FaRegCaretSquareRight>
          }
        <Link to="/" exact className={`${isOpen ? styles.titleMenu : styles.menuIsClosed}`}>Menu</Link>
        <Link to="/teams" className={`${isOpen ? styles.linksMenu : styles.menuIsClosed}`}>Teams</Link>
        <Link to="/players" className={ `${isOpen ? styles.linksMenu : styles.menuIsClosed}`}>Players</Link>
      </div>
  )
};

export default Menu;
