import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Language.module.css'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function language() {
  return(
    <div className={styles.container}>
      <section className={styles.infoText}>
        <h2>
          <Link href="../languages/">
            <a> Programing Language </a>
          </Link>
        </h2>
      </section>
    </div>
  )
}

export const getStaticPaths = async () => {
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
    const projects = data?.projects || []
    return {
        paths: projects.map(({ slug }) => ({ params: { slug } })),
        fallback: false,
    }
}
​
export const getStaticProps = async ({
    params,
}: {
    params: { slug: string }
}) => {
    const apolloClient = initializeApollo()
    const { data }: ProjectQueryResults = await apolloClient.query({
        query: GET_PROJECT_QUERY,
        variables: {
             slug: params.slug,
        },
    })
    const project = data?.project
    return {
        props: { project }
    }
}
