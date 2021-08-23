import Head from 'next/head'
import styles from '../../styles/Languages.module.css'
import axios from 'axios';
import Link from 'next/link'

const Languages = ({ languages, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {languages.map(language => (
        <li>
          <Link href={"programming-languages/" + language.slug} key={language.id}>
            <a>{language.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

Languages.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.ioprogramming-languages');
    const languages = res.data;
    return { languages };
  } catch (error) {
    return { error };
  }
};

export default Languages;
