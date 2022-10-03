import { FC } from 'react';
import styles from './PlayerCard.module.css';
interface Props {
    property?: string;
    numProperty?: number;
    titleDescription: string;
}
const PlayerCard: FC<Props> = ({property, titleDescription, numProperty}) => {
    return (
        <div>
            <p className={styles.titleDescription}>{titleDescription}</p>
            <p className={styles.description}>{property}{numProperty}</p>
        </div>        
    )
}
    


export default PlayerCard;                  

    