import styles from './Card.module.css'

export default function Card(props) {
  const classes = 'card ' + props.children
  return <div className={styles.card}>{props.children}</div>;
}
