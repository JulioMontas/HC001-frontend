import Head from 'next/head'
import Link from 'next/link'

export default function platform({ platform }) {
  return(
    <div>
      <section>
        <h2>Platform | {platform.name}</h2>
        <p>{platform.description}</p>
      </section>
      <section>

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
  const res = await fetch('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/platforms');
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
  const res = await fetch(`http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/platforms?slug=${slug}`);
  const data = await res.json();
  const platform = data[0];
  return {
    props: { platform }
  };
}
