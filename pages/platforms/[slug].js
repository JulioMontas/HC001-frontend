import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function platform({ platform }) {
  return(
    <div className={styles.container}>
      <section>
        <h2>
        <Link href="../platforms/">
          <a>Platform</a>
        </Link> of <u>{platform.name}</u></h2>
        <p>{platform.description}</p>
      </section>
      <section>
        <p>List of programming language that used this platform</p>
        {platform.programming_languages.map(programming_language => (
          <li>
            <Link href={"../languages/" + programming_language.slug} key={programming_language.id}>
              <a>{programming_language.name}</a>
            </Link>
          </li>
        ))}
      </section>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/platforms');
  const platforms = await res.json();

  const paths = platforms.map( platform => ({
    params: { slug: platform.slug },
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/platforms?slug=${slug}`);
  const data = await res.json();
  const platform = data[0];
  return {
    props: { platform }
  };
}
