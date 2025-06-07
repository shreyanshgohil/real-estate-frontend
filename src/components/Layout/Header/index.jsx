import ToolTip from "@/components/Common/ToolTip";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./style.module.scss";
const Header = () => {
  return (
    <div className="container--boxed flex items-center justify-between py-8">
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
              Home
            </Link>
            <i
              class={`fa-regular fa-angle-down ${styles["header-link--icon"]}`}
            ></i>
          </li>
          <li className="text-brand-gray-800 flex items-center gap-1 font-medium">
            <Link className="after" href={"#"}>
              About Us
            </Link>
            <i class="fa-regular fa-angle-down"></i>
          </li>
          <li className="text-brand-gray-800 flex items-center gap-1 font-medium">
            <Link className="after" href={"#"}>
              Property
            </Link>
            <i class="fa-regular fa-angle-down"></i>
          </li>
          <li className="text-brand-gray-800 flex items-center gap-1 font-medium">
            <Link className="after" href={"#"}>
              Agencies
            </Link>
            <i class="fa-regular fa-angle-down"></i>
          </li>
          <li className="text-brand-gray-800 flex items-center gap-1 font-medium">
            <Link className="after" href={"#"}>
              Pages
            </Link>
            <i class="fa-regular fa-angle-down"></i>
          </li>
        </ul>
      </div>
      <div>hello</div>
    </div>
  );
};

export default Header;
