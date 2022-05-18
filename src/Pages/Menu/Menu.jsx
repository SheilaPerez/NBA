import styles from '../Menu/Menu.module.css';
import { FaRegCaretSquareLeft, FaRegCaretSquareRight } from 'react-icons/fa';
import {useState} from 'react';

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
      <h3 className={ `${isOpen ? styles.titleMenu : styles.menuIsClosed}`  }>Menu</h3>
      <p className={ `${isOpen ? styles.linksMenu : styles.menuIsClosed}`  }>Teams</p>
      <p className={ `${isOpen ? styles.linksMenu : styles.menuIsClosed}`  }>Players</p>
    </div>
  )
};

export default Menu;
