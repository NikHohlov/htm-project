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

export const services = [
    {
        title: "Продвижение в Вконтакте",
        icon: (props?: IconProps) => <Vk  {...props}/>,
        name: "vk"
    },
    {
        title: "Продвижение в Telegram",
        icon: (props?: IconProps) => <Telegram  {...props}/>,
        name: "telegram"
    },
    {
        title: "Продвижение в Instagram",
        icon: (props?: IconProps) => <Instagram  {...props}/>,
        name: "instagram"
    },
    {
        title: "Продвижение в TikTok",
        icon: (props?: IconProps) => <Tiktok  {...props}/>,
        name: "tiktok"
    },
    {
        title: "Продвижение в Youtube",
        icon: (props?: IconProps) => <Youtube  {...props}/>,
        name: "youtube"
    },
    {
        title: "Комплексное продвижение",
        icon: (props?: IconProps) => <Complex  {...props}/>,
        name: "complex"
    },
    {
        title: "Продвижение в Apple Music",
        icon: (props?: IconProps) => <AppleMusic  {...props}/>,
        name: "apple"
    },
    {
        title: "Продвижение концертов и мероприятий",
        icon: (props?: IconProps) => <Events {...props}/>,
        name: "events"
    },
    {
        title: "SMM ведение аккаунта",
        icon: (props?: IconProps) => <Smm  {...props}/>,
        name: "smm"
    },
    {
        title: "Реклама у блогеров",
        icon: (props?: IconProps) => <Blogers  {...props}/>,
        name: "blogers"
    },
    {
        title: "Студия дизайна",
        icon: (props?: IconProps) => <DesignStudio  {...props}/>,
        name: "design"
    },
    {
        title: "Студия анимации",
        icon: (props?: IconProps) => <AnimationStudio  {...props}/>,
        name: "animation"
    },
    {
        title: "Интервью",
        icon: (props?: IconProps) => <Interview  {...props}/>,
        name: "interview"
    },
    {
        title: "Продюсирование",
        icon: (props?: IconProps) => <Produce  {...props}/>,
        name: "producing"
    },
    {
        title: "Обучение",
        icon: (props?: IconProps) => <Learning  {...props}/>,
        name: "learning"
    },
];