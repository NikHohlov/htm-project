import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./CaseItem.module.scss";

interface CaseItemProps {
  id: string;
  logo: StaticImageData;
  name: string;
  service: string;
  description: string;
  onClick: () => void;
}

export default function CaseItem({
  service,
  logo,
  id,
  name,
  description,
  onClick,
}: CaseItemProps) {
  return (
    <Link
      scroll={false}
      href={`/cases/${id}`}
      onClick={onClick}
      className={styles.logoContainer}
      key={id}
    >
      <Image className={styles.logo} src={logo} alt="image" />

      <div className={styles.descriptionContainer}>
        <p className={styles.serviceText}>{service}</p>

        <p className={styles.title}>{name}</p>

        <p className={styles.secondaryText}>{description}</p>
      </div>
    </Link>
  );
}
