import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function framework({ framework }) {
  return(
    <div className={styles.container}>

      <section>
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

      <section>
      <ul>
        <b>Themes</b>
        {framework.themes.map(theme => (
          <li>
            <Link href={"../themes/" + theme.slug} key={theme.id}>
              <a>{theme.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <hr>

      <ul>
        <b>Curator </b> {framework.curator_framework.Name}
      </ul>

      </section>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/frameworks');
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
  const res = await fetch(`http://localhost:1337/frameworks?slug=${slug}`);
  const data = await res.json();
  const framework = data[0];
  return {
    props: { framework }
  };
}
