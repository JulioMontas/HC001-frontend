import Head from 'next/head'
import styles from '../../styles/Languages.module.css'
import Link from 'next/link'

export default function language({ language }) {
  return(
    <div>
      <h2>🗂️ Programing Language</h2>

      <h3>{language.name}</h3>
      <p>{language.biography}</p>

      <ul><b>Paradigms</b>
        {language.paradigms.map(paradigm => (
          <li>
            <Link href={"../paradigms/" + paradigm.slug} key={paradigm.id}>
              <a>{paradigm.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul><b>Platforms</b>
        {language.platforms.map(platform => (
          <li>
            <Link href={"../platforms/" + platform.slug} key={platform.id}>
              <a>{platform.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul><b>Influenced By</b>
        {language.influenced_bies.map(influenced_b => (
          <li>
            <Link href={influenced_b.slug} key={influenced_b.id}>
              <a>{influenced_b.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul><b>Influenced</b>
        {language.influenced.map(influenced => (
          <li>
            <Link href={influenced.slug} key={influenced.id}>
              <a>{influenced.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul><b>Libraries</b>
        {language.libraries.map(librarie => (
          <li>
            <Link href={"../libraries/" + librarie.slug} key={librarie.id}>
              <a>{librarie.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul><b>Frameworks</b>
        {language.frameworks.map(framework => (
          <li>
            <Link href={"../frameworks/" + framework.slug} key={framework.id}>
              <a>{framework.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul><b>Themes</b>
        {language.themes.map(theme => (
          <li>
            <Link href={"../themes/" + theme.slug} key={theme.id}>
              <a>{theme.name}</a>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/programming-languages');
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
  const res = await fetch(`http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/programming-languages?slug=${slug}`);
  const data = await res.json();
  const language = data[0];
  return {
    props: { language }
  };
}
