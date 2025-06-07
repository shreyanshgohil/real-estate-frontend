import ToolTip from "@/components/Common/ToolTip";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./style.module.scss";
const Header = () => {
  return (
    <div className="container--boxed flex items-center justify-between py-8 bg-white">
      <div>
        <Link href={"/"}>
          <Image
            src={"/images/logos/logo.svg"}
            width={199}
            height={44}
            alt=""
          />
        </Link>
      </div>
      <div>
        <ul className="flex gap-7">
          <li
            className={`text-brand-gray-800 flex items-center gap-1 font-medium hover:text-brand-neutral ${styles["header-link"]}`}
          >
            <Link className="after" href={"#"}>
              <span> Home</span>
            </Link>
            <i
              class={`fa-regular fa-angle-down ${styles["header-link--icon"]}`}
            />
          </li>
          <li
            className={`text-brand-gray-800 flex items-center gap-1 font-medium hover:text-brand-neutral ${styles["header-link"]}`}
          >
            <Link className="after" href={"#"}>
              About Us
            </Link>
            <i
              class={`fa-regular fa-angle-down ${styles["header-link--icon"]}`}
            ></i>
          </li>
          <li
            className={`text-brand-gray-800 flex items-center gap-1 font-medium hover:text-brand-neutral ${styles["header-link"]}`}
          >
            <Link className="after" href={"#"}>
              Property
            </Link>
            <i
              class={`fa-regular fa-angle-down ${styles["header-link--icon"]}`}
            ></i>
          </li>
          <li
            className={`text-brand-gray-800 flex items-center gap-1 font-medium hover:text-brand-neutral ${styles["header-link"]}`}
          >
            <Link className="after" href={"#"}>
              Agencies
            </Link>
            <i
              class={`fa-regular fa-angle-down ${styles["header-link--icon"]}`}
            ></i>
          </li>
          <li
            className={`text-brand-gray-800 flex items-center gap-1 font-medium hover:text-brand-neutral ${styles["header-link"]}`}
          >
            <Link className="after" href={"#"}>
              Pages
            </Link>
            <i
              class={`fa-regular fa-angle-down ${styles["header-link--icon"]}`}
            ></i>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <button className="button--primary flex items-center gap-2">
          <i className="fa-regular fa-house-chimney text-sm relative z-10" />
          <span className="relative z-10">Add Listing</span>
        </button>
        <button
          className={`flex flex-col items-center rounded-full justify-center ${styles["hamburger__menu"]}`}
        >
          <span
            className={`${styles["hamburger__menu__line"]} ${styles["hamburger__menu__first-line"]}`}
          />
          <span
            className={`${styles["hamburger__menu__line"]} ${styles["hamburger__menu__second-line"]}`}
          />
          <span
            className={`${styles["hamburger__menu__line"]} ${styles["hamburger__menu__third-line"]}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
