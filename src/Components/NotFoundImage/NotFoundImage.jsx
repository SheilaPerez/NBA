import errorImage from '../../Assets/error.jpeg';
import styles from '../NotFoundImage/NotFoundImage.module.css';

const NotFoundImage = ({ size }) => {
  const imageErrorClasses = `${size === 'big' ? styles.big : styles.small}`

  return (
    <>
      <img src={errorImage} className={imageErrorClasses}/>
    </>
  )
};

export default NotFoundImage;
