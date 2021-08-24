import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function language({ language }) {
  return(
    <div className={styles.container}>
      <section>
        <h2>
          <u>{language.name}</u>
          <Link href="../languages/">
            <a> Programing Language </a>
          </Link>
        </h2>
        <p>{language.biography}</p>
      </section>

      <section>
      <ul>
        <b>Paradigms</b>
        {language.paradigms.map(paradigm => (
          <li>
            <Link href={"../paradigms/" + paradigm.slug} key={paradigm.id}>
              <a>{paradigm.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <b>Platforms</b>
        {language.platforms.map(platform => (
          <li>
            <Link href={"../platforms/" + platform.slug} key={platform.id}>
              <a>{platform.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <b>Influenced By</b>
        {language.influenced_bies.map(influenced_b => (
          <li>
            <Link href={influenced_b.slug} key={influenced_b.id}>
              <a>{influenced_b.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <b>Influenced</b>
        {language.influenced.map(influenced => (
          <li>
            <Link href={influenced.slug} key={influenced.id}>
              <a>{influenced.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <b>Libraries</b>
        {language.libraries.map(librarie => (
          <li>
            <Link href={"../libraries/" + librarie.slug} key={librarie.id}>
              <a>{librarie.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        <b>Frameworks</b>
        {language.frameworks.map(framework => (
          <li>
            <Link href={"../frameworks/" + framework.slug} key={framework.id}>
              <a>{framework.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <b>Themes</b>
        {language.themes.map(theme => (
          <li>
            <Link href={"../themes/" + theme.slug} key={theme.id}>
              <a>{theme.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      </section>
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
