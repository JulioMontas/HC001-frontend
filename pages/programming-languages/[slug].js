import Head from 'next/head'
import styles from '../../styles/Languages.module.css'
import Link from 'next/link'

export default function language({ language }) {
  return(
    <div>
      <h2>{language.name}</h2>
      <p>{language.biography}</p>

      <ul>
        {language.paradigms.map(paradigm => (
          <li key={paradigm.id}>{paradigm.Name}</li>
        ))}
      </ul>

      <ul>
        {language.influenced_bies.map(influenced_b => (
          <li>
            <Link href={influenced_b.slug} key={influenced_b.id}>
              <a>{influenced_b.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        {language.influenced.map(influenced => (
          <li>
            <Link href={influenced.slug} key={influenced.id}>
              <a>{influenced.name}</a>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/programming-languages');
  const languages = await res.json();

  const paths = languages.map(language => ({
    params: { slug: language.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:1337/programming-languages?slug=${slug}`);
  const data = await res.json();
  const language = data[0];
  return {
    props: { language }
  };
}
