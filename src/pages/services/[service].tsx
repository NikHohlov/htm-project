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
                        {service?.description}
                    </p>

                    <div className={styles.buttons}>
                        {service?.points &&
                        <>
                            <Button onClick={redirect("contacts")} theme={Theme.Dark} title="Заказать"/>
                            <Button onClick={redirect("cases")} theme={Theme.Dark} title="К кейсам"/>
                        </>
                        }
                    </div>
                </div>


            </div>

            {service?.points && (
                <div className={styles.secondSection}>
                    <p className={styles.secondTitle}>В услугу входит</p>

                    <div className={styles.pointsContainer}>
                        {service?.points.map((item) => (
                            <div key={item} className={styles.point}>
                                <div className={styles.circle}/>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Layout>
    );
}