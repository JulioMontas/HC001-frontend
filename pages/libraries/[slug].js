import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function librarie({ librarie }) {
  return(
    <div className={styles.container}>
      <section>
        <h2>
          <Link href="../libraries/">
            <a>Library </a>
          </Link> of
          <Link href={"../languages/" + librarie.programming_language.slug} key={librarie.programming_language.id}>
            <a> {librarie.programming_language.name} </a>
          </Link>
           loading <u>{librarie.name}</u>
         </h2>
         <p>{librarie.descriptions}</p>
      </section>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/libraries');
  const libraries = await res.json();

  const paths = libraries.map( librarie => ({
    params: { slug: librarie.slug },
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:1337/libraries?slug=${slug}`);
  const data = await res.json();
  const librarie = data[0];
  return {
    props: { librarie }
  };
}
