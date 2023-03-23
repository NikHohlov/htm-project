import Layout from "@/components/layout";

import { Theme } from "@/lib/types";

import { useRouter } from "next/router";

import Button from "@/components/ui/Button/Button";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";

import { caseItems } from "@/data/caseItem";

import styles from "@/styles/pages/Case.module.scss";


export default function Service() {
    const router = useRouter();

    const redirect = (path: string) => () => router.push(`/${path}`);

    return (
        <Layout>
            <div className={styles.firstSection}>

                <div className={styles.leftSection}>

                    <Carousel
                        showStatus={false}
                        showIndicators={false}
                        className={styles.carousel}>

                        {caseItems.map(({ logo }) => (
                            <div key={logo.src}>
                                <Image src={logo} alt="image" height={592}/>
                            </div>
                        ))}
                    </Carousel>

                </div>

                <div className={styles.descriptionSection}>
                    <div className={styles.descriptionContainer}>
                        <p className={styles.serviceText}>Дизайн, продвижение</p>

                        <p className={styles.title}>Desert Rose</p>

                        <p className={styles.secondaryText}>Ресторан</p>
                    </div>

                    <p className={styles.description}>
                        Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                        dictum est a, mattis tellus. Sed dignissim,
                         metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                  Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis.
                 Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
                    </p>

                    <div className={styles.buttons}>
                        <Button onClick={redirect("cases")} theme={Theme.Light} title="К кейсам"/>
                    </div>
                </div>


            </div>
        </Layout>
    );
}