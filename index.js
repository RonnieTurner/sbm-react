import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import MainNavigation from "../components/mainNavigation";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <h1>HoME</h1>
    </>
  );
}
