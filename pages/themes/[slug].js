import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Language.module.css'

export default function theme({ theme }) {
  return(

    <div className={styles.container}>

      <section className={styles.infoText}>
        <h2> <u>{theme.name}</u> Stack</h2>
        <p>{theme.descriptions}</p>
      </section>

      <section className={styles.infoBox}>
        <p>List of programming language that used this theme</p>
        {theme.programming_languages.map(programming_language => (
          <li>
            <Link href={"../languages/" + programming_language.slug} key={programming_language.id} replace>
              <a>{programming_language.name}</a>
            </Link>
          </li>
        ))}
      </section>

    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/themes');
  const themes = await res.json();

  const paths = themes.map( theme => ({
    params: { slug: theme.slug },
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/themes?slug=${slug}`);
  const data = await res.json();
  const theme = data[0];
  return {
    props: { theme }
  };
}
