import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Language.module.css'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function language({ programmingLanguages }) {

  console.log(programmingLanguages);

  return(
    <div className={styles.container}>

      <section className={styles.infoIntro}>
      {programmingLanguages.map(programmingLanguage => (
        <li>
          <Link href={"languages/" + programmingLanguage.slug} key={programmingLanguage.id}>
            <a>{programmingLanguage.name}</a>
          </Link>
        </li>
      ))}
      </section>

      <section className={styles.infoText}>
      hello
      </section>


    </div>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  });
  const { data } = await client.query({
    query: gql`
      query getProgrammingLanguages{
        programmingLanguages{
          id
          slug
          name
        }
      }
    `,
  });
  return{
    props:{
      programmingLanguages: data.programmingLanguages,
    }
  }
}
