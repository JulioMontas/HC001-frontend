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
    const res = await axios.get('http://localhost:1337/libraries');
    const libraries = res.data;
    return { libraries };
  } catch (error) {
    return { error };
  }
};

export default Librarie;
