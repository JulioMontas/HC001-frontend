import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import styles from '../styles/Home.module.css'

const Home = ({ languages, error }) => {
  console.log(languages);
  if (error) {
    return <div className={styles.container}>
      <div className={styles.introSplash}>
        <h1 className={styles.title}>HelloCo.de <span style={{fontWeight:'normal'}}>is a archive of programming languages that have been developed from past to present to improve how software architects choose their stack.</span></h1>
      </div>
      <div>
        <h3>
          An error occured: {error.message}
        </h3>
      </div>
    </div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.introSplash}>
      <h1 className={styles.title}>HelloCo.de <span style={{fontWeight:'normal'}}>is a archive of programming languages that have been developed from past to present to improve how software architects choose their stack.</span></h1>

      </div>

      <div>
        <h3 style={{
          fontSize:'1em',
          marginBottom:'1em',
        }}>
          Latest Languages
        </h3>
        <ul
          className={styles.btaCard}
        >
          {languages.map(language => (
            <li>
              <Link href={"languages/" + language.slug} key={language.id}>
                <a
                style={{
                  borderColor:'',
                }}
                >
                  <h2>{language.name}</h2>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://b19d-2603-7000-6101-4f63-f1d4-2a08-4e59-db0d.ngrok.io/programming-languages');
    const languages = res.data;
    return { languages };
  } catch (error) {
    return { error };
  }
};

export default Home;
