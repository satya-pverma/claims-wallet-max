"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { paymentSolutionsCategories } from "./types";


export function PaymentSolutionsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ">
      <p
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        className="flex items-center gap-1 text-[14px] font-medium text-gray-600 hover:text-gray-900 cursor-pointer "
      >
        PAYMENT SOLUTIONS
        <ChevronDown className="h-4 w-4 text-[14px]" />
      </p>

      {open && (
        <div className="absolute top-full left-1/2 mt-2 w-[900px] -translate-x-1/2 rounded-lg border bg-white p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-6">
            {paymentSolutionsCategories.map((category) => (
              <div key={category.title}>
                <h3 className="font-semibold">{category.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-gray-500">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
