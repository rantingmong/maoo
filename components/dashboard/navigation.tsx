import styles from './navigation.module.css'

export default function Navigation() {

  return (
    <div className={styles.dashboardNavigation}>
      <span>maoo</span>
      <div className={styles.dashboardNavigationMenu}>
        <a>Feed</a>
        <a>Drop</a>
        <a>Profile</a>
      </div>
    </div>
  )
}
