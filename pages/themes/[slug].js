import Head from 'next/head'
import Link from 'next/link'

export default function theme({ theme }) {
  return(
    <div>
      <section>
        <h2>Theme | {theme.name}</h2>
        <p>{theme.descriptions}</p>
      </section>
      <section>
        {theme.programming_languages.map(programming_language => (
          <li>
            <Link href={"../programming-languages/" + programming_language.slug} key={programming_language.id} replace>
              <a>{programming_language.name}</a>
            </Link>
          </li>
        ))}
      </section>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/themes');
  const themes = await res.json();

  const paths = themes.map( theme => ({
    params: { slug: theme.slug },
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/themes?slug=${slug}`);
  const data = await res.json();
  const theme = data[0];
  return {
    props: { theme }
  };
}
