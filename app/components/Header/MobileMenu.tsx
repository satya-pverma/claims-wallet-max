"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { paymentSolutionsCategories } from "./types";


export function MobileMenu({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden border-t bg-white"
        >
          <div className="p-4 space-y-4">
            {paymentSolutionsCategories.map((cat) => (
              <div key={cat.title}>
                <div className="font-semibold mb-2">{cat.title}</div>
                {cat.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-2 py-1 text-sm"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
