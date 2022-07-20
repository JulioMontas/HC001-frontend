import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import styles from '../../styles/Home.module.css'

const Platform = ({ platforms, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
      <h2>Platform List</h2>
      <ul>
        {platforms.map(platform => (
          <li>
            <Link href={"platforms/" + platform.slug} key={platform.id}>
              <a>{platform.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Platform.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/platforms');
    const platforms = res.data;
    return { platforms };
  } catch (error) {
    return { error };
  }
};

export default Platform;
