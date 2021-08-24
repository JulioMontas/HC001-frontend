import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function curator({ curator }) {
  return(
    <div className={styles.container}>

      <section>
        <h2>
          <Link href="../curators/">
          <a>Curator </a>
          </Link>
          <u>{curator.name}</u>
        </h2>
      </section>

      <section>
      <b>Likes</b>
      {curator.language_likes.map(likes => (
        <li>
          <Link href={"../languages/" + likes.slug} key={likes.id}>
            <a>{likes.name}</a>
          </Link>
        </li>
      ))}
      </section>

      <section>
      <b>Curated</b>
      {curator.languages_curated.map(likes => (
        <li>
          <Link href={"../languages/" + likes.slug} key={likes.id}>
            <a>{likes.name}</a>
          </Link>
        </li>
      ))}
      {curator.frameworks.map(likes => (
        <li>
          <Link href={"../frameworks/" + likes.slug} key={likes.id}>
            <a>{likes.name}</a>
          </Link>
        </li>
      ))}
      {curator.libraries.map(likes => (
        <li>
          <Link href={"../libraries/" + likes.slug} key={likes.id}>
            <a>{likes.name}</a>
          </Link>
        </li>
      ))}
      </section>



    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/curators');
  const curators = await res.json();

  const paths = curators.map( curator => ({
    params: { slug: curator.slug },
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:1337/curators?slug=${slug}`);
  const data = await res.json();
  const curator = data[0];
  return {
    props: { curator }
  };
}
