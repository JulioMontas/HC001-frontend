import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>HelloCo.de</h2>
      <p>A list of programming languages from past to present.</p>
        <ul>
          <li>
            <Link href="/languages/" replace>
              <a>EXPLORE</a>
            </Link>
          </li>
        </ul>
    </div>
  )
}
