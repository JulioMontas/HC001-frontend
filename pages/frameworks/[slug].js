import Head from 'next/head'
import Link from 'next/link'

export default function framework({ framework }) {
  return(
    <div>
      <section>
        <h2>✨ Framework</h2>
        <h4>
          <Link href={"../languages/" + framework.programming_language.slug} key={framework.programming_language.id}>
            <a>{framework.programming_language.name} </a>
          </Link>
           | {framework.name}
         </h4>
      </section>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/frameworks');
  const frameworks = await res.json();

  const paths = frameworks.map( framework => ({
    params: { slug: framework.slug },
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.io/frameworks?slug=${slug}`);
  const data = await res.json();
  const framework = data[0];
  return {
    props: { framework }
  };
}
