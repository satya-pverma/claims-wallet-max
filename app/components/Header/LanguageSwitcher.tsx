"use client";

import { Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: t("languages.en") },
    { code: "es", label: t("languages.es") },
    { code: "fr", label: t("languages.fr") },
  ];

  return (
    <div className="relative hidden md:block items-center text-gray-600 hover:text-gray-900 cursor-pointer">
      <div onClick={() => setOpen(!open)}>
        <Globe size={22}  />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg border bg-white shadow">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
