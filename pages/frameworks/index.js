import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import styles from '../../styles/Home.module.css'

const Framework = ({ frameworks, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
    <h2>List of Framework</h2>
      <ul>
        {frameworks.map(framework => (
          <li>
            <Link href={"frameworks/" + framework.slug} key={framework.id}>
              <a>{framework.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Framework.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/frameworks');
    const frameworks = res.data;
    return { frameworks };
  } catch (error) {
    return { error };
  }
};

export default Framework;
