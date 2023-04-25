import * as Styles from 'deprecated/features/index/Banner.styles';

const Banner = () => {
  return (
    <Styles.BannerWrapper>
      <Styles.DescriptionWrapper>
        <p>
          관심 있는 정보 설정하고
          <br />
          <strong>공연 추천 받아보세요</strong>
        </p>
      </Styles.DescriptionWrapper>
      <Styles.LinkButton>공연 추천 받기</Styles.LinkButton>
    </Styles.BannerWrapper>
  );
};

export default Banner;
