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
    const res = await axios.get('http://localhost:1337/themes');
    const themes = res.data;
    return { themes };
  } catch (error) {
    return { error };
  }
};

export default Theme;
