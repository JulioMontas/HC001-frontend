import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import styles from '../../styles/Home.module.css'

const Librarie = ({ libraries, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
    <h2>List of Library</h2>
    <ul>
      {libraries.map(librarie => (
        <li>
          <Link href={"libraries/" + librarie.slug} key={librarie.id}>
            <a>{librarie.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
};

Librarie.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/libraries');
    const libraries = res.data;
    return { libraries };
  } catch (error) {
    return { error };
  }
};

export default Librarie;
