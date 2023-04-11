import { useEffect, useRef } from 'react';

export type Location = { latitude: number; longitude: number };

const NaverMap = ({ latitude, longitude }: Location) => {
  const mapElement = useRef(null);

  useEffect(() => {
    if (!!latitude && !!longitude) {
      const { naver } = window;
      if (!mapElement.current || !naver) return;

      // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
      const location = new naver.maps.LatLng(latitude, longitude);
      const mapOptions: naver.maps.MapOptions = {
        center: location,
        // draggable: false,
        // pinchZoom: false,
        // scrollWheel: false,
        // disableDoubleClickZoom: true,
        // disableDoubleTapZoom: true,
        // disableTwoFingerTapZoom: true,
        // disableKineticPan: false,
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, [latitude, longitude]);

  return <div ref={mapElement} style={{ width: '100%', height: '100%' }} />;
};

export default NaverMap;
