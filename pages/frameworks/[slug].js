import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Language.module.css'

export default function framework({ framework }) {
  return(
    <div className={styles.container}>

      <section className={styles.infoText}>
        <h2>
          <Link href="../frameworks/">
          <a>Framework </a>
          </Link> from
          <Link href={"../languages/" + framework.programming_language.slug} key={framework.programming_language.id}>
            <a> {framework.programming_language.name} </a>
          </Link>
           to <u>{framework.name}</u>
         </h2>
         <p>{framework.descriptions}</p>
      </section>

      <section className={styles.infoBox}>
      <ul>
        <li>
          <b>Curator </b> {framework.curator_framework.name}
        </li>
      </ul>
        <ul>
          <li>
            <b>Themes</b>
            {framework.themes.map(theme => (
              <li>
                <Link href={"../themes/" + theme.slug} key={theme.id}>
                  <a>{theme.name}</a>
                </Link>
              </li>
            ))}
          </li>
        </ul>
      </section>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/frameworks');
  const frameworks = await res.json();

  const paths = frameworks.map( framework => ({
    params: { slug: framework.slug },
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/frameworks?slug=${slug}`);
  const data = await res.json();
  const framework = data[0];
  return {
    props: { framework }
  };
}
