import Footer from 'components/layout/Footer';
import * as Styles from 'features/index/Index.styles';

const Home = () => {
  return (
    <Styles.IndexContainer>
      Home
      <Footer pathname={'/'} />
    </Styles.IndexContainer>
  );
};

export default Home;
