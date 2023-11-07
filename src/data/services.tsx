import { AnimationStudio } from "@/assets/icons/AnimationStudio";
import { AppleMusic } from "@/assets/icons/AppleMusic";
import { Blogers } from "@/assets/icons/Blogers";
import { Complex } from "@/assets/icons/Complex";
import { DesignStudio } from "@/assets/icons/DesignStudio";
import { Events } from "@/assets/icons/Events";
import { Instagram } from "@/assets/icons/Instagram";
import { Interview } from "@/assets/icons/Interview";
import { Learning } from "@/assets/icons/Learning";
import { Produce } from "@/assets/icons/Produce";
import { Smm } from "@/assets/icons/Smm";
import { Telegram } from "@/assets/icons/Telegram";
import { Tiktok } from "@/assets/icons/Tiktok";
import { Vk } from "@/assets/icons/Vk";
import { Youtube } from "@/assets/icons/Youtube";
import { IconProps } from "@/lib/types";
import {
  bloggersText,
  complexText,
  designStudioText,
  eventsText,
  instagramText,
  interviewText,
  motionText,
  producingText,
  smmText,
  telegramText,
  tikTokText,
  vkText,
  ytText,
} from "./servicesTexts";

const points = [
  "Анализ продвигаемого контента",
  "Поиск и выбор целевой аудитории",
  "Выявление наиболее эффективной стратегии",
  "Распределение рекламного бюджета",
  "Настройка рекламной кампании",
  "Проведение тестов",
  "Ведение рекламной кампании",
  "Таргетированная реклама",
  "Мониторинг потоков целевой аудитории",
  "Увеличение активности (охватов, переходов, лайков, прослушиваний, просмотров и прочего)",
  "Извлечение максимума из рекламного бюджета",
  "Отчётность по KPI",
];

export const services = [
  {
    title: "Продвижение в Вконтакте",
    icon: (props?: IconProps) => <Vk {...props} />,
    name: "vk",
    description: vkText,
    points,
  },
  {
    title: "Продвижение в Telegram",
    icon: (props?: IconProps) => <Telegram {...props} />,
    name: "telegram",
    description: telegramText,
    points,
  },
  {
    title: "Продвижение в Instagram",
    icon: (props?: IconProps) => <Instagram {...props} />,
    name: "instagram",
    description: instagramText,
    points,
  },
  {
    title: "Продвижение в TikTok",
    icon: (props?: IconProps) => <Tiktok {...props} />,
    name: "tiktok",
    description: tikTokText,
    points,
  },
  {
    title: "Продвижение в Youtube",
    icon: (props?: IconProps) => <Youtube {...props} />,
    name: "youtube",
    description: ytText,
    points,
  },
  {
    title: "Комплексное продвижение",
    icon: (props?: IconProps) => <Complex {...props} />,
    name: "complex",
    description: complexText,
    points,
  },
  {
    title: "Продвижение в Apple Music",
    icon: (props?: IconProps) => <AppleMusic {...props} />,
    name: "apple",
    description: "Данный товар находится на стадии разработки.",
  },
  {
    title: "Продвижение мероприятий",
    icon: (props?: IconProps) => <Events {...props} />,
    name: "events",
    description: eventsText,
    points,
  },
  {
    title: "SMM ведение аккаунта",
    icon: (props?: IconProps) => <Smm {...props} />,
    name: "smm",
    description: smmText,
    points,
  },
  {
    title: "Реклама у блогеров",
    icon: (props?: IconProps) => <Blogers {...props} />,
    name: "blogers",
    description: bloggersText,
    points,
  },
  {
    title: "Студия дизайна",
    icon: (props?: IconProps) => <DesignStudio {...props} />,
    name: "design",
    description: designStudioText,
    points: [
      "Разработка логотипов",
      "Оформление аккаунтов/сообществ",
      "Рисованные обложки",
      "3D обложки/арты",
      "Оформление афиш",
      "Дизайн сайтов",
      "Создание лукбуков/презентаций",
      "Фотосессия при необходимости",
    ],
  },
  {
    title: "Студия анимации",
    icon: (props?: IconProps) => <AnimationStudio {...props} />,
    name: "animation",
    description: motionText,
    points: [
      "Проработка клиентской идеи",
      "Интеграция 2D графики",
      "Интеграция 3D графики",
      "Анимирование сторис/обложек",
      "Монтаж",
      "Арт-дирекшн",
      "Проработка креатива",
      "Музыка",
      "Дикторская озвучка",
      "Саунд-дизайн",
      "Видеосъёмка при необходимости",
    ],
  },
  {
    title: "Интервью",
    icon: (props?: IconProps) => <Interview {...props} />,
    name: "interview",
    description: interviewText,
    points: [
      ...points,
      "Проработка клиентской идеи",
      "Арт-дирекшн",
      "Проработка вопросов для интервью",
      "Проработка креатива",
      "Видеосъёмка при необходимости",
      "Производство видео-контента",
      "Монтаж",
      "Интеграция 2D/3D графики",
      "Саунд-дизайн",
      "Дикторская озвучка",
      "Оформление афиши/обложки",
      "Подбор подходящих социальных сетей для выгрузки/продвижения интервью",
      "Подбор подходящих методов продвижения",
    ],
  },
  {
    title: "Продюсирование",
    icon: (props?: IconProps) => <Produce {...props} />,
    name: "producing",
    description: producingText,
    points: [
      "Разработка логотипа",
      "Создание афиш/промо-роликов",
      "Оформление аккаунта/сообщества",
      "Проработка креатива",
      "Производство видео-контента",
      "Подборка рубрик для контент-плана",
      "Арт-дирекшн",
      "Фотосессии",
      "Видеосъемки",
      "Монтаж",
      "Анализ продвигаемого контента",
      "Дистрибьюция синглов/альбомов",
      ...points,
    ],
  },
  {
    title: "Обучение",
    icon: (props?: IconProps) => <Learning {...props} />,
    name: "learning",
    description: "Данный товар находится на стадии разработки.",
  },
];
