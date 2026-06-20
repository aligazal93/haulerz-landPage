"use client";

import { usePathname, useRouter } from "next/navigation";

export default function ChangeLanguage() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.startsWith("/en") ? "en" : "ar";
  const nextLocale = currentLocale === "ar" ? "en" : "ar";

  const handleChangeLanguage = () => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <button onClick={handleChangeLanguage} className="text-white font-[500] text-custom16">
      {currentLocale === "ar" ? "English" : "الـعـربـيـة"}
    </button>
  );
}