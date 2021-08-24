import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function theme({ theme }) {
  return(
    <div className={styles.container}>
      <section>
        <h2> <u>{theme.name}</u>
        <Link href="../themes/">
          <a> Theme</a>
        </Link></h2>
        <p>{theme.descriptions}</p>
      </section>
      <section>
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
  const res = await fetch('http://localhost:1337/themes');
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
  const res = await fetch(`http://localhost:1337/themes?slug=${slug}`);
  const data = await res.json();
  const theme = data[0];
  return {
    props: { theme }
  };
}
