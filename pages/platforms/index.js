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
    const res = await axios.get('http://localhost:1337/platforms');
    const platforms = res.data;
    return { platforms };
  } catch (error) {
    return { error };
  }
};

export default Platform;
