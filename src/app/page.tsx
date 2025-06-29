"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { ConversationsScreen } from "./screens/conversations/screen";

export default function Home() {
  useEffect(() => {
    Android.toastMessage("Hello from Next.js!");
  }, [])
  return (
    <div className={styles.page}>
      <ConversationsScreen />
    </div>
  );
}
