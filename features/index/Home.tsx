import { RANKING_SECTION_FILTERS } from 'constants/curateSection';
import Banner from 'features/index/Banner';
import CurateSection from 'features/index/CurateSection';
import * as Styles from 'features/index/Index.styles';

const Home = () => {
  return (
    <Styles.IndexContainer>
      <Banner />
      <CurateSection chips={RANKING_SECTION_FILTERS} />
      <CurateSection chips={RANKING_SECTION_FILTERS} />
      <CurateSection chips={RANKING_SECTION_FILTERS} />
      <CurateSection chips={RANKING_SECTION_FILTERS} />
      <CurateSection chips={RANKING_SECTION_FILTERS} />
    </Styles.IndexContainer>
  );
};

export default Home;
