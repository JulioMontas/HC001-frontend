import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import styles from '../../styles/Home.module.css'

const Paradigm = ({ paradigms, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
    <h2>List of Paradigm</h2>
      <ul>
        {paradigms.map(paradigm => (
          <li>
            <Link href={"paradigms/" + paradigm.slug} key={paradigm.id}>
              <a>{paradigm.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Paradigm.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/paradigms');
    const paradigms = res.data;
    return { paradigms };
  } catch (error) {
    return { error };
  }
};

export default Paradigm;
