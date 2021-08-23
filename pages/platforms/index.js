import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';

const Platform = ({ platforms, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {platforms.map(platform => (
        <li>
          <Link href={"platforms/" + platform.slug} key={platform.id}>
            <a>{platform.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

Platform.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.ioplatforms');
    const platforms = res.data;
    return { platforms };
  } catch (error) {
    return { error };
  }
};

export default Platform;
