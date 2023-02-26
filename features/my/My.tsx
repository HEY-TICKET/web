import Footer from 'components/layout/Footer';
import * as Styles from 'features/my/My.styles';

const My = () => {
  return (
    <Styles.MyContainer>
      My
      <Footer pathname={'/my'} />
    </Styles.MyContainer>
  );
};

export default My;
