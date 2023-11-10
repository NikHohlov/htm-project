import { airsoftText } from "./descriptions/airsoft";
import { aistText } from "./descriptions/aist";
import { angelText } from "./descriptions/angel";
import { axiomaText } from "./descriptions/axioma";
import { bovaText } from "./descriptions/bova";
import { buySideText } from "./descriptions/buySide";
import { desertRoseText } from "./descriptions/desertRose";
import { fakeParisText } from "./descriptions/fakeParis";
import { foodyText } from "./descriptions/foody";
import { lapLandText } from "./descriptions/lapLand";
import { malleText } from "./descriptions/malle";
import { notGamblerText } from "./descriptions/notGambler";
import { orionText } from "./descriptions/orion";
import { orsaBorsaText } from "./descriptions/orsaBorsa";
import { pinkHairLabText } from "./descriptions/pinkHairLab";
import { saleJapanText } from "./descriptions/saleJapan";
import { siemensText } from "./descriptions/siemens";
import { staffStudioText } from "./descriptions/staffStudio";
import { tmfText } from "./descriptions/tmf";
import { whiteWayText } from "./descriptions/whiteWayAuto";

type Case = {
  logo: string;
  name: string;
  shortName?: string;
  id: string;
  description: string;
  subtitle?: string;
  text: { header: string; body: string };
  service: string;
  videos?: string[];
};

export const cases: Case[] = [
  {
    name: "LapLand",
    id: "lapLand",
    description: "Частное производство льда",
    text: lapLandText,
    service: "Дизайн, продвижение",
    logo: `/static/images/logos/lapLand.png`,
  },
  {
    name: "Desert Rose",
    id: "desertRose",
    description: "Ресторан",
    text: desertRoseText,
    service: "Дизайн, продвижение",
    logo: `/static/images/logos/desertRose.png`,
    videos: [],
  },
  {
    name: "FAKE.PARIS",
    id: "fakeParis",
    description: "Косметический бренд",
    text: fakeParisText,
    service: "Дизайн, продвижение",
    logo: `/static/images/logos/fakeParis.png`,
  },
  {
    name: "BOVA PAY",
    id: "bova",
    logo: `/static/images/logos/bova.png`,
    description: "Платёжный онлайн-сервис",
    text: bovaText,
    service: "Дизайн, продвижение",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/WLtPqhH_h2tjSA",
    ],
  },
  {
    name: "Staff studio",
    id: "staffStudio",
    description: "Новостной telegram-канал",
    text: staffStudioText,
    logo: `/static/images/logos/staffStudio.png`,
    service: "Дизайн, продвижение",
  },
  {
    name: "WHITE WAY AUTO",
    id: "whiteWay",
    description: "Сервис по подбору и доставке автомобилей из Южной Кореи",
    subtitle: "Сервис по подбору и доставке автомобилей",
    text: whiteWayText,
    service: "Дизайн, продвижение",
    logo: `/static/images/logos/whiteWay.png`,

    videos: [],
  },
  {
    name: "Buy | Side",
    id: "buySide",
    description: "Cервис денежных переводов",
    text: buySideText,
    service: "Дизайн, продвижение",
    logo: `/static/images/logos/buySide.png`,

    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/vzNrCLNWbaCoWg",
    ],
  },

  {
    name: "Аксиома",
    id: "axioma",
    logo: `/static/images/logos/axioma.png`,
    description: "Антикражные системы",
    text: axiomaText,
    service: "Дизайн, продвижение",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/WWzJ3NTr1wI1ww",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/J-iZjiTghQ_2Ug",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/WiPmqr5-CGqZ_w",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/dwIGf9uLd2cibg",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/2n77eJDMlbMgnw",
    ],
  },
  {
    name: "Orion Technologies",
    id: "orion",
    logo: `/static/images/logos/orion.png`,
    description:
      "Разработчик систем видеоаналитики и контроля дорожного движения",
    subtitle: "Разработчик систем видеоаналитики",
    text: orionText,
    service: "Создание сайта",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/-CIgKJfziteBug",
    ],
  },
  {
    name: "SALE JAPAN",
    id: "saleJapan",
    logo: `/static/images/logos/saleJapan.png`,
    description: "Cервис по выкупу товаров из Японии без посредников",
    subtitle: "Cервис по выкупу товаров из Японии",
    text: saleJapanText,
    service: "Дизайн, продвижение",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/IvsF4u7SYRhbHw",
    ],
  },
  {
    name: "Malle's Family",
    id: "malle",
    logo: `/static/images/logos/malle.png`,
    description: "Концептуальный шоурум",
    text: malleText,
    service: "Дизайн, продвижение",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/0JBbjkQYqxAdzw",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/Qq7x4u6lkZZt7A",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/3W3g0IGj4a0B4A",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/bL3_xJSi4chmuA",
    ],
  },
  {
    name: "НЕ ЛУДОМАН | NOT GAMBLER",
    shortName: "NOT GAMBLER",
    id: "notGambler",
    logo: `/static/images/logos/notGambler.png`,
    description: "Уникальная ассоциация опытных капперов",
    subtitle: "Ассоциация опытных капперов",
    text: notGamblerText,
    service: "Дизайн, продвижение",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/tWgY3yYCLJmBXw",
    ],
  },
  {
    name: "SIEMENS MOTORS",
    id: "siemens",
    logo: `/static/images/logos/siemens.png`,
    description: "Электродвигатели Siemens",
    text: siemensText,
    service: "Дизайн, продвижение",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/muj60KGYi_Tzvw",
    ],
  },
  {
    name: "99% Angel",
    id: "angel",
    logo: `/static/images/logos/angel.png`,
    description: "Бренд женской одежды",
    text: angelText,
    service: "Дизайн, продвижение",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/W3U1dtEukIoCLw",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/1qAPGi1fQePtmw",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/pqHhA4pTIyFbyg",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/elMkcRo8O0mArA",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/PvNh3UfUAnKY4g",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/UH5jd_oMcSTLlQ",
    ],
  },
  {
    name: "Фуди Люди",
    id: "foody",
    logo: `/static/images/logos/foody.png`,
    description: "Сервис по доставке еды",
    text: foodyText,
    service: "Дизайн, продвижение",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/6lhnlvA652JTDA",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/ufYFhdJeUTbGiw",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/xaeYdW43HPBdpg",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/ORUMLW_URGTYKw",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/GcGMaOEBSYqtlg",
    ],
  },
  {
    name: "Orsa Borsa",
    id: "orsaBorsa",
    logo: `/static/images/logos/orsaBorsa.png`,
    description: "Магазин сумок и аксессуаров",
    text: orsaBorsaText,
    service: "Дизайн, продвижение",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/FJ1KH7Y8QsR0Mw",
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/ABXTRMu4zKsqyw",
    ],
  },

  {
    name: "АИСТ",
    id: "aist",
    logo: `/static/images/logos/aist.png`,
    description: `Комплекс фотовидеофиксации "АИСТ - КОНТРОЛЬ"`,
    subtitle: "Комплекс фотовидеофиксации",
    text: aistText,
    service: "Разработка логотипа",
    videos: [
      "https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/Q13wqUT4XOPKRw",
    ],
  },

  {
    name: "Airsoft Sports",
    id: "airsoft",
    logo: `/static/images/logos/airsoft.png`,
    description: "Страйкбол Спорт магазин",
    text: airsoftText,
    service: "Продвижение",
  },

  {
    name: "Pink Hair Lab",
    id: "pinkHairLab",
    description: "Cалон красоты",
    text: pinkHairLabText,
    logo: `/static/images/logos/pinkHairLab.png`,

    service: "Дизайн, продвижение",
    videos: [],
  },
  {
    name: "TMF",
    id: "tmf",
    logo: `/static/images/logos/tmf.png`,

    description: "Производство котлов, печей и каминов",
    text: tmfText,
    service: "Дизайн, продвижение",
  },
];
