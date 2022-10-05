import { FC } from 'react';
import styles from './TeamListItem.module.css';
interface Props {
    description: string;
}

const TeamListItem: FC<Props> = ({description}) => {
    return (
        <tr>
            <div className={styles.listItemsContainer}>
                <td className={styles.description}>{description}</td>
            </div>
        </tr>
    )
}

export default TeamListItem;