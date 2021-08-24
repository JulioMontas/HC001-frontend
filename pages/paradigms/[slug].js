import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


export default function paradigm({ paradigm }) {
  return(
    <div className={styles.container}>
      <section>
        <h2>
          <Link href="../paradigms/">
            <a>Paradigm</a>
          </Link> of <u>{paradigm.name}</u>
        </h2>
        <p>{paradigm.descriptions}</p>
      </section>
      <section>
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
  const res = await fetch('http://localhost:1337/paradigms');
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
  const res = await fetch(`http://localhost:1337/paradigms?slug=${slug}`);
  const data = await res.json();
  const paradigm = data[0];
  return {
    props: { paradigm }
  };
}
