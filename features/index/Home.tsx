import Footer from 'components/layout/Footer';
import { RANKING_SECTION_FILTERS } from 'constants/curateSection';
import Banner from 'features/index/Banner';
import CurateSection from 'features/index/CurateSection';
import GNB from 'features/index/GNB';
import * as Styles from 'features/index/Index.styles';

const Home = () => {
  return (
    <Styles.IndexContainer>
      <GNB />
      <Banner />
      <CurateSection chips={RANKING_SECTION_FILTERS} />
      <CurateSection chips={RANKING_SECTION_FILTERS} />
      <CurateSection chips={RANKING_SECTION_FILTERS} />
      <CurateSection chips={RANKING_SECTION_FILTERS} />
      <CurateSection chips={RANKING_SECTION_FILTERS} />
      <Footer pathname={'/'} />
    </Styles.IndexContainer>
  );
};

export default Home;
