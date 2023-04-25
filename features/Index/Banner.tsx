'use client';

const Banner = () => {
  return (
    <div
      className={'flex items-center justify-between p-5 m-4 bg-gray-100 rounded-2xl cursor-pointer'}
    >
      <div>
        <div className={'text-sm font-medium text-gray-500'}>관심 있는 정보 설정하고</div>
        <div className={'text-lg font-bold text-gray-700'}>공연 추천 받아보세요</div>
      </div>
      <div className={'px-4 py-2 rounded-full bg-black text-white text-sm font-bold'}>
        공연 추천 받기
      </div>
    </div>
  );
};

export default Banner;
