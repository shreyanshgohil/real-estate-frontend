import Link from "next/link";
import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="container--boxed py-2.5 bg-brand-neutral-200">
      <Link
        href={"#"}
        className="text-brand-gray-900 text-sm transition-all duration-200 hover:text-brand-neutral flex items-center justify-center"
      >
        <span className="border-b border-solid border-brand-gray-900 hover:border-brand-neutral">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic
          accusamus fugiat
        </span>
      </Link>
    </div>
  );
};

export default AnnouncementBar;
