import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import styles from '../../styles/Home.module.css'

const Theme = ({ themes, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
      <h2>List of Themes</h2>
      <ul>
        {themes.map(theme => (
          <li>
            <Link href={"themes/" + theme.slug} key={theme.id}>
              <a>{theme.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Theme.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/themes');
    const themes = res.data;
    return { themes };
  } catch (error) {
    return { error };
  }
};

export default Theme;
