import { useEffect, useRef } from 'react';

export type Location = { latitude: number; longitude: number };

const NaverMap = ({ latitude, longitude }: Location) => {
  const mapElement = useRef(null);

  useEffect(() => {
    const handleOpenNewTab = (url: string) => {
      window.open(url, '_blank', 'noopener, noreferrer');
    };

    if (!!latitude && !!longitude) {
      const { naver } = window;
      if (!mapElement.current || !naver) return;

      // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
      const location = new naver.maps.LatLng(latitude, longitude);
      const mapOptions: naver.maps.MapOptions = {
        center: location,
        draggable: false,
        pinchZoom: false,
        scrollWheel: false,
        keyboardShortcuts: false,
        disableDoubleTapZoom: true,
        disableDoubleClickZoom: true,
        disableTwoFingerTapZoom: true,
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      new naver.maps.Marker({
        position: location,
        map,
      });
      naver.maps.Event.addListener(map, 'click', () =>
        handleOpenNewTab(`https://map.naver.com/v5/?c=${longitude},${latitude},15,0,0,0,dh`),
      );
    }
  }, [latitude, longitude]);

  return <div ref={mapElement} style={{ width: '100%', height: '100%' }}></div>;
};

export default NaverMap;
