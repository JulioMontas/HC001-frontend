import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';

const Theme = ({ themes, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {themes.map(theme => (
        <li>
          <Link href={"themes/" + theme.slug} key={theme.id}>
            <a>{theme.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

Theme.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://d268-2603-7000-6100-385a-48a7-74b2-fc68-fe04.ngrok.iothemes');
    const themes = res.data;
    return { themes };
  } catch (error) {
    return { error };
  }
};

export default Theme;
