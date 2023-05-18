//css
import styles from './ProfileResourceCard.module.css'

//components
import Icon from '../Icon/Icon'

const ProfileResourceCard = ({resource}) => {

  const dateCreated = new Date(resource.createdAt).toLocaleDateString()

  return (
    <div>
      <div className={`${styles.resource}`}>
        <span>
        </span>
        <div className={styles.date}>
          <p>{dateCreated}</p>
        </div>
        <div className={styles.name}>
          <p>{resource.name}</p>
        </div>
        <div className={styles.category}>
          <p>{resource.category}</p>
        </div>
        <div className={styles.link}>
        <p><a href={resource.link}><Icon category="Link" /></a></p>
        </div>
      </div>
    </div>
  )
}

export default ProfileResourceCard