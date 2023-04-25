import Footer from 'deprecated/components/layout/Footer';
import * as Styles from 'deprecated/features/my/My.styles';

const My = () => {
  return (
    <Styles.MyContainer>
      My
      <Footer pathname={'/my'} />
    </Styles.MyContainer>
  );
};

export default My;
