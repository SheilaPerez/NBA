import { FC } from 'react';
import styles from './TeamListItem.module.css';
interface Props {
    description: string;
}

const TeamListItem: FC<Props> = ({description}) => {
    return (
        <div>
            <li className={styles.listItemsContainer}>
                <p className={styles.description}>{description}</p>
            </li>
        </div>
    )
}

export default TeamListItem;