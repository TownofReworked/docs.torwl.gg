import React from "react";
import clsx from "clsx";
import styles from "./AnimatedTag.module.css";

type AnimatedTagProps = {
  type?: "new" | "beta" | "experimental";
  children: React.ReactNode;
};

export default function AnimatedTag({
  type = "new",
  children,
}: AnimatedTagProps) {
  return (
    <span className={clsx(styles.tag, styles[type])}>
      {children}
    </span>
  );
}
