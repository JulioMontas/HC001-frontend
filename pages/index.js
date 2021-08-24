import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Hello Code</h2>
        <ul>
          <li>
            <Link href="/languages/" replace>
              <a>Programming Languages</a>
            </Link>
          </li>
          <li>
            <Link href="/libraries/" replace>
              <a>📚 Library</a>
            </Link>
          </li>
          <li>
            <Link href="/frameworks/" replace>
              <a>✨ Frameworks</a>
            </Link>
          </li>
          <li>
            <Link href="/themes/" replace>
              <a>Themes</a>
            </Link>
          </li>
          <li>
            <Link href="/platforms/" replace>
              <a>Platforms</a>
            </Link>
          </li>
          <li>
            <Link href="/paradigms/" replace>
              <a>🪞 Paradigms</a>
            </Link>
          </li>
        </ul>

    </div>
  )
}
