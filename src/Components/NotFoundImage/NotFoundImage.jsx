import errorImage from '../../Assets/error.jpeg';
import styles from '../NotFoundImage/NotFoundImage.module.css';

const NotFoundImage = ({ size }) => {
  return (
    <>
      <img src={errorImage} className={`${size === 'big' ? styles.big : styles.small}`}/>
    </>
  )
};

export default NotFoundImage;
