import { PERFORMANCE_GENRE_MAP } from 'constants/new/performance';
import Banner from 'features/index/Banner';
import CurateSection from 'features/index/CurateSection';
import * as Styles from 'features/index/Index.styles';

const Home = () => {
  return (
    <Styles.IndexContainer>
      <Banner />
      <CurateSection chips={PERFORMANCE_GENRE_MAP} />
      {/*<CurateSection chips={RANKING_SECTION_FILTERS} />*/}
      {/*<CurateSection chips={RANKING_SECTION_FILTERS} />*/}
      {/*<CurateSection chips={RANKING_SECTION_FILTERS} />*/}
      {/*<CurateSection chips={RANKING_SECTION_FILTERS} />*/}
    </Styles.IndexContainer>
  );
};

export default Home;
