import Head from 'next/head'
import Link from 'next/link'

export default function librarie({ librarie }) {
  return(
    <div>
      <section>
      <h2>📚 Library</h2>
        <h4>
          <Link href={"../programming-languages/" + librarie.programming_language.slug} key={librarie.programming_language.id}>
            <a>{librarie.programming_language.name} </a>
          </Link>
           | {librarie.name}
         </h4>
      </section>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/libraries');
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
  const res = await fetch(`http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/libraries?slug=${slug}`);
  const data = await res.json();
  const librarie = data[0];
  return {
    props: { librarie }
  };
}
