import { Main } from "next/document";
import MainNavigation from "../mainNavigation";
import classes from "./Layout.module.css";

export default function Layout(props) {
  return;
  <div>
    <MainNavigation />
    <main>{props.children}</main>
  </div>
}
