import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";
import Socials from "../components/Socials";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials/`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: data },
  };
};

const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Heading text="Hello World" />
    <Socials socials={socials} />
  </div>
);
export default Home;
