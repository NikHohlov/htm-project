import Image from "next/image";
import Link from "next/link";

import styles from "./CaseItem.module.scss";

interface CaseItemProps {
  id: string;
  logo: string;
  name: string;
  shortName?: string;
  service: string;
  description: string;
  subtitle?: string;
  onClick: () => void;
}

export default function CaseItem({
  service,
  logo,
  id,
  name,
  description,
  subtitle,
  shortName,
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
      <p className={styles.serviceText}>{service}</p>
      <Image
        width={334}
        height={334}
        className={styles.logo}
        src={logo}
        alt="image"
      />

      <div className={styles.descriptionContainer}>
        <p className={styles.title}>{shortName ?? name}</p>

        <p className={styles.secondaryText}>{subtitle ?? description}</p>
      </div>
    </Link>
  );
}
