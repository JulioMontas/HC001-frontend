import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Language.module.css'

export default function paradigm({ paradigm }) {
  return(
    <div className={styles.container}>
      <section className={styles.infoText}>
        <h2>
          <Link href="../paradigms/">
            <a>Paradigm</a>
          </Link> of <u>{paradigm.name}</u>
        </h2>
        <p>{paradigm.descriptions}</p>
      </section>
      <section className={styles.infoBox}>
      <p>List of programming language that used the paradigm</p>
        {paradigm.programming_languages.map(programming_language => (
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
  const res = await fetch('http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/paradigms');
  const paradigms = await res.json();

  const paths = paradigms.map( paradigm => ({
    params: { slug: paradigm.slug },
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/paradigms?slug=${slug}`);
  const data = await res.json();
  const paradigm = data[0];
  return {
    props: { paradigm }
  };
}
