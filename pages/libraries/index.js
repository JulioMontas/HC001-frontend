import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';

const Librarie = ({ libraries, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {libraries.map(librarie => (
        <li>
          <Link href={"libraries/" + librarie.slug} key={librarie.id}>
            <a>{librarie.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

Librarie.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.iolibraries');
    const libraries = res.data;
    return { libraries };
  } catch (error) {
    return { error };
  }
};

export default Librarie;
