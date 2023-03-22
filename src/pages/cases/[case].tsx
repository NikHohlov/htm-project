import Layout from "@/components/layout";

import { Theme } from "@/lib/types";

import { useRouter } from "next/router";

import { services } from "@/data/services";

import { Target } from "@/assets/icons/Target";

import Button from "@/components/ui/Button/Button";

import styles from "@/styles/pages/Service.module.scss";


export default function Service() {
    const router = useRouter();

    const service = services.find((item) => item.name === router.query.service);

    const redirect = (path: string) => () => router.push(`/${path}`);

    const mockDescriptions =
    [
        "Анализ продвигаемого контента",
        "Поиск и выбор целевой аудитории",
        "Выявление наиболее эффективной стратегии",
        "Выявление наиболее эффективной стратегии",
        "Анализ продвигаемого контента",
        "Поиск и выбор целевой аудитории",
        "Выявление наиболее эффективной стратегии",
        "Выявление наиболее эффективной стратегии",
    ];


    return (
        <Layout theme={Theme.Dark}>
            <div className={styles.firstSection}>

                <div className={styles.leftSection}>

                    <div className={styles.iconBackground}>
                        <Target gradient width={229} height={229}/>
                        <div className={styles.serviceIcon}>
                            {service?.icon({ width: 109, height: 109, gradient: true })}
                        </div>
                    </div>

                </div>

                <div className={styles.descriptionSection}>
                    <p className={styles.title}>{service?.title}</p>

                    <p className={styles.description}>
                        Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                        dictum est a, mattis tellus. Sed dignissim,
                         metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                  Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis.
                 Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
                    </p>

                    <div className={styles.buttons}>
                        <Button onClick={redirect("contacts")} theme={Theme.Dark} title="Заказать"/>
                        <Button onClick={redirect("cases")} theme={Theme.Dark} title="К кейсам"/>
                    </div>
                </div>


            </div>
        </Layout>
    );
}