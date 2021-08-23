import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';

const Paradigm = ({ paradigms, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
    <h2>🪞 Paradigm</h2>
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
    const res = await axios.get('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.ioparadigms');
    const paradigms = res.data;
    return { paradigms };
  } catch (error) {
    return { error };
  }
};

export default Paradigm;
