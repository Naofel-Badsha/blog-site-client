import Link from "next/link";
import React from "react";

const PracticeLayout = ({
  children,
  marketingSlot,
  salseSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salseSlot: React.ReactNode;
}) => {
  return (
    <div>
      <nav className="flex gap-10 m-8">
        <Link href="/development" className="hover:underline">
          Development
        </Link>
        <Link href="/marketing" className="hover:underline">
          Marketing
        </Link>
        <Link href="/marketing/setting" className="hover:underline">
          Setting
        </Link>
        <Link href="/salse" className="hover:underline">
          Selse
        </Link>
      </nav>
      <div className="flex gap-3">
        {marketingSlot}
        {salseSlot}
      </div>
      {children}
    </div>
  );
};

export default PracticeLayout;
