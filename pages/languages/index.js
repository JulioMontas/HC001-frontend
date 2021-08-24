import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import styles from '../../styles/Home.module.css'


const Languages = ({ languages, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
      <h2>List of Programing Languages</h2>
      <ul>
        {languages.map(language => (
          <li>
            <Link href={"languages/" + language.slug} key={language.id}>
              <a>{language.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Languages.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/programming-languages');
    const languages = res.data;
    return { languages };
  } catch (error) {
    return { error };
  }
};

export default Languages;
