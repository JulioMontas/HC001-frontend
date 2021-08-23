import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';

const Framework = ({ frameworks, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
      <h2>✨ Framework</h2>
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
    const res = await axios.get('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.ioframeworks');
    const frameworks = res.data;
    return { frameworks };
  } catch (error) {
    return { error };
  }
};

export default Framework;
