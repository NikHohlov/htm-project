import Button from "@/components/ui/Button/Button";

import { Theme } from "@/lib/types";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { SelectArrow } from "@/assets/icons/SelectArrow";
import { services } from "@/data/services";

import styles from "./FeedbackForm.module.scss";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { useRouter } from "next/router";

interface Form {
  name: string;
  phone: string;
  comment: string;
  service: string;
}

interface FeedbackForm {
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FeedbackForm({
  setSubmitted,
  setIsOpen,
}: FeedbackForm) {
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [rows, setRows] = useState(1);
  const isMobile = useIsMobile();
  const router = useRouter();
  const { scrollToSmoothly } = useSmoothScroll();

  const [data, setData] = useState<Form>({
    name: "",
    phone: "",
    comment: "",
    service: (router.query.keyword as string) ?? "",
  });
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const commentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //     const scrollMultiplier = window.scrollY === 0 ? 0.66 : 8;

  //     if (isMobile && timeoutRef.current) {
  //         clearTimeout(timeoutRef.current);
  //     }
  //     if (timeoutRef.current === null) {
  //         timeoutRef.current = setTimeout(() => {
  //             if (!formRef.current) return;
  //             scrollToSmoothly(formRef.current.getBoundingClientRect().top * scrollMultiplier, 0);
  //         }, 1000);
  //     }
  // }, [isMobile]);

  const handleSubmit = () => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setSubmitted(true);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) =>
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const onSelect = (title: string) => () => {
    setData((prev) => ({ ...prev, service: title }));
    setIsVisibleDropdown(false);
    setAnimate(true);
    setIsOpen(false);
  };

  const onSelectToggle = () => {
    setIsOpen((prev) => !prev);
    setAnimate(isVisibleDropdown);
    setTimeout(
      () => setIsVisibleDropdown((prev) => !prev),
      isVisibleDropdown ? 500 : 50
    );
    if (!ref.current) return;
    scrollToSmoothly(ref?.current?.getBoundingClientRect().top, 0);
  };

  useEffect(() => {
    if (!commentRef.current?.clientWidth) return;

    const letterSize = isMobile ? 10 : 15;

    if (data.comment.length * letterSize < commentRef.current?.clientWidth) {
      setRows(1);
      return;
    }
    setRows(
      Math.ceil(
        (data.comment.length * letterSize) / commentRef.current?.clientWidth
      )
    );
  }, [data.comment]);

  return (
    <div ref={formRef} className={styles.feedbackForm}>
      <p className={styles.title}>Оставьте свою заявку</p>

      <div className={styles.inputField}>
        <p className={styles.inputName}>ИМЯ</p>
        <input
          type="text"
          name="name"
          onChange={onChange}
          className={styles.input}
          placeholder="ФИЛИП КОТЛЕР"
        />
      </div>

      <div className={styles.inputField}>
        <p className={styles.inputName}>ТЕЛЕФОН</p>
        <input
          onKeyDown={(event) => {
            if (
              !event.key.match(/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight/)
            ) {
              event.preventDefault();
              return;
            }
          }}
          type="tel"
          value={`+7${data.phone.slice(2)}`}
          name="phone"
          onChange={onChange}
          className={styles.input}
          placeholder="+7"
        />
      </div>

      <div ref={ref} className={styles.inputField}>
        <div onClick={onSelectToggle} className={styles.selectWrapper}>
          <div placeholder="ТИП УСЛУГ" className={styles.input}>
            {data.service || "ТИП УСЛУГИ"}
          </div>
          <SelectArrow className={isVisibleDropdown ? styles.open : ""} />
        </div>

        <motion.div
          className={styles.options}
          animate={{
            height: isVisibleDropdown ? 500 : 0,
            opacity: isVisibleDropdown ? 1 : 0,
          }}
          initial={{ height: 0, opacity: 0 }}
          transition={{
            type: "tween",
            ease: "easeIn",
          }}
        >
          {[...services, { title: "Прочее" }].map(({ title }, index) => (
            <motion.div
              className={styles.option}
              onClick={onSelect(title)}
              key={title}
              animate={animate ? { x: 300, opacity: 0 } : { x: 0, opacity: 1 }}
              initial={{ x: 300, opacity: 0 }}
              transition={{
                delay: index * 0.02,
                type: "tween",
                ease: "easeIn",
              }}
              viewport={{ once: true }}
            >
              {title}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div ref={commentRef} className={styles.inputField}>
        <p className={styles.inputName}>КОММЕНТАРИЙ</p>
        <textarea
          maxLength={110}
          rows={rows}
          name="comment"
          onChange={onChange}
          className={styles.comment}
          placeholder="МЕНЯ ИНТЕРЕСУЕТ..."
        />
      </div>

      <Button onClick={handleSubmit} title="ОТПРАВИТЬ" theme={Theme.Dark} />
    </div>
  );
}
