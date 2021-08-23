import Head from 'next/head'
import Link from 'next/link'

export default function paradigm({ paradigm }) {
  return(
    <div>
      <section>
        <h2>🪞 Paradigm</h2>
        <h4>{paradigm.name}</h4>
        <p>{paradigm.descriptions}</p>
      </section>
      <section>
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
  const res = await fetch('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/paradigms');
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
  const res = await fetch(`http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/paradigms?slug=${slug}`);
  const data = await res.json();
  const paradigm = data[0];
  return {
    props: { paradigm }
  };
}
