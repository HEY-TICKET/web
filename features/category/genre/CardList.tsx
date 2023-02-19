import * as Styles from './CardList.styles';
import Card from 'components/common/Card/Card';
import dayjs from 'dayjs';
import { getDateDiff } from '../../../utils/times';

type CardListItem = {
  id: string;
  title: string;
  fromDate: string;
  toDate: string;
  place: string;
  poster: string;
  genre: string;
  state: string;
  openrun: string;
};

const CardList = () => {
  const today = dayjs(new Date()).format('YYYY.MM.DD');

  const CardList: CardListItem[] = [
    {
      id: 'PF213582',
      title: '롤링 28주년 기념 공연, 더폴스 단독 콘서트: Goin＇High vol.2',
      fromDate: '2023.03.12',
      toDate: '2023.03.12',
      place: '롤링홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213582_230217_135908.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213579',
      title: '먼데이프로젝트 IN 라이브클럽, 프랭클리 단독 콘서트',
      fromDate: '2023.03.06',
      toDate: '2023.03.06',
      place: '공상온도',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213579_230217_134958.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213567',
      title: 'Flight0311: toasterz 편',
      fromDate: '2023.03.11',
      toDate: '2023.03.11',
      place: '폼텍웍스홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213567_230217_131009.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213551',
      title: 'LOVESOME: 불편한 편의점',
      fromDate: '2023.04.22',
      toDate: '2023.04.23',
      place: '잠실종합운동장',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213551_230217_115245.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213537',
      title: '응답하라 8090릴레이콘서트 시즌1, 김현철',
      fromDate: '2023.03.17',
      toDate: '2023.03.18',
      place: '굿씨어터',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213537_230217_104600.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213536',
      title: '응답하라 8090릴레이콘서트 시즌1, 임지훈',
      fromDate: '2023.03.11',
      toDate: '2023.03.11',
      place: '굿씨어터',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213536_230217_104432.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213535',
      title: '응답하라 8090릴레이콘서트 시즌1, 김광진',
      fromDate: '2023.03.24',
      toDate: '2023.03.25',
      place: '굿씨어터',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213535_230217_104257.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213489',
      title: 'PEAKBOX 23-04',
      fromDate: '2023.03.04',
      toDate: '2023.03.05',
      place: '노들섬',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213489_230216_125605.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213482',
      title: '아이큐 (I.Q)의 직관(:直觀) 콘서트',
      fromDate: '2023.03.10',
      toDate: '2023.03.10',
      place: '라디오가가홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213482_230216_123035.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213480',
      title: '박현수 팬콘서트: STILL FLOWER, STILL WITH YOU',
      fromDate: '2023.03.26',
      toDate: '2023.03.26',
      place: '푸르지오아트홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213480_230216_122619.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213479',
      title: '경서 콘서트: 너와 나의 봄 [서울]',
      fromDate: '2023.03.25',
      toDate: '2023.03.26',
      place: '이화여자대학교 삼성홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213479_230216_122301.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213478',
      title: 'SIDE TO SIDE: CEIGHT X SHADY',
      fromDate: '2023.03.18',
      toDate: '2023.03.18',
      place: '웨스트브릿지 라이브홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213478_230216_121706.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213452',
      title: '주윤하 앨범 발매 기념 단독 공연',
      fromDate: '2023.03.25',
      toDate: '2023.03.25',
      place: '구름아래소극장',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213452_230216_104217.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213417',
      title: '나만 알고싶은 인디 Ep, 26 예람 단독 콘서트',
      fromDate: '2023.03.17',
      toDate: '2023.03.17',
      place: '폼텍웍스홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213417_230215_150131.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213416',
      title: '나만 알고싶은 인디 Ep, 25 Woshi(우시) 단독 콘서트',
      fromDate: '2023.03.10',
      toDate: '2023.03.10',
      place: '폼텍웍스홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213416_230215_145624.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213412',
      title: 'SG워너비 콘서트: 우리의 노래 [서울]',
      fromDate: '2023.03.31',
      toDate: '2023.04.02',
      place: '올림픽공원',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213412_230215_143654.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213395',
      title: '그리즐리(Grizzly) Concert: Spring House',
      fromDate: '2023.03.04',
      toDate: '2023.03.05',
      place: '폼텍웍스홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213395_230215_133725.jfif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213379',
      title: '쇼팽 in 뉴욕: 클래시컬 재즈 나잇',
      fromDate: '2023.04.09',
      toDate: '2023.04.09',
      place: '예술의전당',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213379_230215_123037.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213378',
      title: 'TOMORROW x TOGETHER WORLD TOUR, ACT: SWEET MIRAGE [서울]',
      fromDate: '2023.03.25',
      toDate: '2023.03.26',
      place: '올림픽공원',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213378_230215_122911.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213370',
      title: 'LOUD BRIDGE Vol.1',
      fromDate: '2023.03.25',
      toDate: '2023.03.25',
      place: 'CLUB bender(클럽 벤더)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213370_230215_121732.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213351',
      title: '롤링 28주년 기념 공연, 크랙샷 단독 콘서트: Hello My Love',
      fromDate: '2023.03.11',
      toDate: '2023.03.11',
      place: '롤링홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213351_230215_113219.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213348',
      title: 'BoA 20th Anniversary Live, THE BoA: Musicality',
      fromDate: '2023.03.11',
      toDate: '2023.03.12',
      place: '올림픽공원',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213348_230215_112633.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213303',
      title: 'PL(피엘) EP앨범 접속 발매 기념 콘서트: 우리는 서로의 봄',
      fromDate: '2023.03.11',
      toDate: '2023.03.12',
      place: 'CJ아지트 광흥창',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213303_230214_135608.jfif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213300',
      title: '스윗소로우 앨범 발매 기념 콘서트: 등대',
      fromDate: '2023.03.31',
      toDate: '2023.04.02',
      place: '노들섬',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213300_230214_132730.png',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213299',
      title: '소란 콘서트: Perfect Day 9',
      fromDate: '2023.03.10',
      toDate: '2023.03.26',
      place: '성수아트홀(성수문화복지회관)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213299_230214_132226.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213294',
      title: '더베인 콘서트: MONSTER',
      fromDate: '2023.03.04',
      toDate: '2023.03.04',
      place: 'CJ아지트 광흥창',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213294_230214_113631.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213283',
      title: '롤링 28주년 기념 공연, 이븐이프 단독 콘서트: Dopamine',
      fromDate: '2023.03.10',
      toDate: '2023.03.10',
      place: '롤링홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213283_230214_102314.png',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213270',
      title: '원픽 페스티벌',
      fromDate: '2023.04.29',
      toDate: '2023.04.30',
      place: '연세대학교 노천극장',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213270_230213_150357.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213256',
      title: 'SONGMATE 4, 시인을 위하여 X 김새녘',
      fromDate: '2023.03.04',
      toDate: '2023.03.04',
      place: '살롱 문보우',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213256_230213_143147.jfif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213235',
      title: '아그네스 단독 공연',
      fromDate: '2023.03.04',
      toDate: '2023.03.04',
      place: '웨스트브릿지 라이브홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213235_230213_123730.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213192',
      title: '팔칠댄스(87dance) COLOR PAPER HOTEL 쇼케이스',
      fromDate: '2023.03.11',
      toDate: '2023.03.11',
      place: 'SPACE BRICK (스페이스브릭)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213192_230213_110055.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213165',
      title: 'Colorful Stage #2',
      fromDate: '2023.03.11',
      toDate: '2023.03.11',
      place: '클럽온에어',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213165_230210_140814.jfif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213159',
      title: '허각 단독 콘서트, 공연각: 10주년, 못다한 이야기',
      fromDate: '2023.03.25',
      toDate: '2023.03.26',
      place: '신한pLay 스퀘어 (구. 신한카드 판스퀘어)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213159_230210_135049.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213109',
      title: '브로콜리너마저X스탠딩에그 콘서트: 봄, 나들이',
      fromDate: '2023.03.25',
      toDate: '2023.03.25',
      place: '나루아트센터',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213109_230209_160915.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF213083',
      title: '윤하 콘서트: c/2023YH [서울(앵콜)]',
      fromDate: '2023.03.11',
      toDate: '2023.03.12',
      place: '올림픽공원',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF213083_230209_134526.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212830',
      title: 'ONEW 1st CONCERT: O-NEW-NOTE',
      fromDate: '2023.03.03',
      toDate: '2023.03.05',
      place: '올림픽공원',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212830_230208_112331.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212827',
      title: '장민호 단독 콘서트: 호시절 (好時節) [서울(앵콜)]',
      fromDate: '2023.03.04',
      toDate: '2023.03.05',
      place: '경희대학교 평화의전당',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212827_230208_111544.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212818',
      title: '재즈란 무엇인가?: Spring LIVE Jazz Festival with 또모',
      fromDate: '2023.03.05',
      toDate: '2023.03.05',
      place: '롯데콘서트홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212818_230208_104641.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212787',
      title: '브릭데이 with BAND, 서정',
      fromDate: '2023.03.15',
      toDate: '2023.03.15',
      place: 'SPACE BRICK (스페이스브릭)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212787_230208_094121.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212786',
      title: '브릭데이 with BAND, 오리엔탈 쇼커스',
      fromDate: '2023.03.08',
      toDate: '2023.03.08',
      place: 'SPACE BRICK (스페이스브릭)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212786_230208_093957.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212785',
      title: '브릭데이 with BAND, 홀린',
      fromDate: '2023.03.29',
      toDate: '2023.03.29',
      place: 'SPACE BRICK (스페이스브릭)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212785_230208_093800.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212764',
      title: '정성하 단독 콘서트: EMOTIONS',
      fromDate: '2023.03.18',
      toDate: '2023.03.19',
      place: '신한pLay 스퀘어 (구. 신한카드 판스퀘어)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212764_230207_150422.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212752',
      title: '어떤가요 #4, 테리우스 스페셜',
      fromDate: '2023.03.28',
      toDate: '2023.03.28',
      place: '마포아트센터',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212752_230207_124912.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212749',
      title: '응답하라 8090 릴레이 콘서트 시즌1, 육중완 밴드 콘서트',
      fromDate: '2023.03.04',
      toDate: '2023.03.04',
      place: '굿씨어터',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212749_230207_105043.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212747',
      title: '이소정 콘서트: 소정의 선물',
      fromDate: '2023.03.04',
      toDate: '2023.03.04',
      place: 'SAC 아트홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212747_230207_104522.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212692',
      title: '나윤권 단독콘서트: SOUND TRACK [서울]',
      fromDate: '2023.03.18',
      toDate: '2023.03.19',
      place: '이화여자대학교 삼성홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212692_230206_151024.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212618',
      title: 'Sum 41 Live [서울]',
      fromDate: '2023.03.28',
      toDate: '2023.03.28',
      place: '예스24 라이브홀 (구. 악스코리아)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212618_230203_131445.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212592',
      title: '롤링 28주년 기념 공연, 크리스피 단독 콘서트: DAYDREAMING',
      fromDate: '2023.03.09',
      toDate: '2023.03.09',
      place: '롤링홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212592_230203_104422.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212558',
      title: "용준형 콘서트: LONER's ROOM",
      fromDate: '2023.03.18',
      toDate: '2023.03.19',
      place: '블루스퀘어',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212558_230202_141831.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212551',
      title: '롤링 28주년 기념 공연, YB 단독 콘서트: LIGHTS : BURNS',
      fromDate: '2023.03.04',
      toDate: '2023.03.05',
      place: '롤링홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212551_230202_132740.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF212540',
      title: '데이브레이크 단독 콘서트: NEW DAY',
      fromDate: '2023.03.04',
      toDate: '2023.03.05',
      place: '이화여자대학교 삼성홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF212540_230202_125045.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF211431',
      title: '김현중 콘서트: MY SUN',
      fromDate: '2023.03.04',
      toDate: '2023.03.04',
      place: '예스24 라이브홀 (구. 악스코리아)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF211431_230126_134003.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF210312',
      title: '사샤 알렉스 슬론 내한공연 (Sasha Alex Sloan Live in Seoul)',
      fromDate: '2023.03.06',
      toDate: '2023.03.06',
      place: '예스24 라이브홀 (구. 악스코리아)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF210312_230126_094721.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF210157',
      title: '도쿄허니트랩 내한공연: hyper minority TOUR',
      fromDate: '2023.03.05',
      toDate: '2023.03.05',
      place: 'KT&G 상상마당 라이브홀 [마포]',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF210157_230125_124227.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF210082',
      title: '이광조 45주년 기념 콘서트',
      fromDate: '2023.03.12',
      toDate: '2023.03.12',
      place: '블루스퀘어',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF210082_230120_102711.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF210077',
      title: '포터 로빈슨 내한공연 (Porter Robinson Live in Seoul)',
      fromDate: '2023.03.13',
      toDate: '2023.03.13',
      place: '무신사 개러지(구. 왓챠홀)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF210077_230120_101541.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF209905',
      title: '봄에 내리는 젠틀레인: 재즈로 듣는 영화음악',
      fromDate: '2023.04.22',
      toDate: '2023.04.22',
      place: '구로아트밸리',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF209905_230117_152330.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF209481',
      title: '윈튼 마살리스 재즈 콘서트',
      fromDate: '2023.03.19',
      toDate: '2023.03.19',
      place: 'LG아트센터 서울',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF209481_230118_165520.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF205278',
      title: 'LUCKLIFE 내한공연',
      fromDate: '2023.03.25',
      toDate: '2023.03.25',
      place: '웨스트브릿지 라이브홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF205278_230103_110350.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF204950',
      title: '재즈 보컬리스트 정영애의 Arirang Cantata',
      fromDate: '2023.03.04',
      toDate: '2023.03.04',
      place: 'JCC 아트센터',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF204950_221230_101341.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF204563',
      title: '서머솔트 내한공연 (Summer Salt Live in Seoul)',
      fromDate: '2023.03.07',
      toDate: '2023.03.07',
      place: '롤링홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF204563_221221_103711.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF204440',
      title: '디즈니 탄생 100주년 기념, 유러피안 재즈 트리오',
      fromDate: '2023.03.12',
      toDate: '2023.03.12',
      place: '롯데콘서트홀',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF204440_221219_145602.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF204330',
      title: '4 반도네온 탱고',
      fromDate: '2023.03.11',
      toDate: '2023.03.11',
      place: '예술의전당',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF204330_221216_131400.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF204060',
      title: '아시니코 내한공연',
      fromDate: '2023.03.29',
      toDate: '2023.03.29',
      place: '무신사 개러지(구. 왓챠홀)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF204060_221212_161227.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF203203',
      title: '킹스 오브 컨비니언스 내한공연（Kings Of Convenience Live in Seoul）',
      fromDate: '2023.03.17',
      toDate: '2023.03.17',
      place: '예스24 라이브홀 (구. 악스코리아)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF203203_221129_110007.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF202814',
      title: '해리 스타일스 첫 내한공연 (HARRY STYLES LOVE ON TOUR Live in Seoul)',
      fromDate: '2023.03.20',
      toDate: '2023.03.20',
      place: '올림픽공원',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF202814_221123_130241.gif',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
    {
      id: 'PF202487',
      title: 'MEN I TRUST LIVE [서울]',
      fromDate: '2023.04.22',
      toDate: '2023.04.22',
      place: '예스24 라이브홀 (구. 악스코리아)',
      poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF202487_221118_135325.jpg',
      genre: '대중음악',
      state: '공연예정',
      openrun: 'N',
    },
  ];

  return (
    <Styles.CardListWrapper>
      {CardList.map(({ id, poster, title, place, fromDate, toDate }) => {
        const restDate = getDateDiff(today, fromDate);

        return (
          <Card
            key={id}
            src={poster}
            title={title}
            badgeDate={restDate}
            fromDate={fromDate}
            toDate={toDate}
            desc={place}
          />
        );
      })}
    </Styles.CardListWrapper>
  );
};

export default CardList;
