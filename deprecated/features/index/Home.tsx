import Footer from 'deprecated/components/layout/Footer';
import { RANKING_SECTION_FILTERS } from 'deprecated/constants/curateSection';
import Banner from 'deprecated/features/index/Banner';
import CurateSection from 'deprecated/features/index/CurateSection';
import GNB from 'deprecated/features/index/GNB';
import * as Styles from 'deprecated/features/index/Index.styles';

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
