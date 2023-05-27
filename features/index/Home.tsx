import Banner from 'features/index/Banner';
import NewPerformance from 'features/index/Curations/NewPerformances/NewPerformance';
import PerformanceRank from 'features/index/Curations/PerformanceRank/PerformanceRank';
import * as Styles from 'features/index/Index.styles';

const Home = () => {
  return (
    <Styles.IndexContainer>
      <Banner />
      <PerformanceRank />
      <NewPerformance />
    </Styles.IndexContainer>
  );
};

export default Home;
