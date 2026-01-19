"use client";

import Link from "next/link";
import { PaymentSolutionsMenu } from "./PaymentSolutionsMenu";


export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <PaymentSolutionsMenu />

      <Link
        href="/rfp"
        className="text-[14px] font-medium text-gray-600 bg-blur hover:text-gray-900"
      >
        FAQs
      </Link>
    </nav>
  );
}
