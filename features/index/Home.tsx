import { PERFORMANCE_GENRE_MAP } from 'constants/new/performance';
import Banner from 'features/index/Banner';
import NewSection from 'features/index/CurateSection/NewSection';
import RankSection from 'features/index/CurateSection/RankSection';
import * as Styles from 'features/index/Index.styles';

const Home = () => {
  return (
    <Styles.IndexContainer>
      <Banner />
      <RankSection chips={PERFORMANCE_GENRE_MAP} />
      <NewSection chips={PERFORMANCE_GENRE_MAP} />
      {/*<CurateSection chips={RANKING_SECTION_FILTERS} />*/}
      {/*<CurateSection chips={RANKING_SECTION_FILTERS} />*/}
    </Styles.IndexContainer>
  );
};

export default Home;
