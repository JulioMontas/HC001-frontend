import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import styles from '../../styles/Home.module.css'

const Curator = ({ curators, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
    <h2>List of Curator</h2>
      <ul>
        {curators.map(curator => (
          <li>
            <Link href={"curators/" + curator.slug} key={curator.id}>
              <a>{curator.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Curator.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/curators');
    const curators = res.data;
    return { curators };
  } catch (error) {
    return { error };
  }
};

export default Curator;
