"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { copy, t } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const KEY = "noire-cookie";

export function CookieNotice() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);

  useEffect(() => {
    setOpen(!window.localStorage.getItem(KEY));
  }, []);

  if (!open) return null;

  function accept() {
    window.localStorage.setItem(KEY, "accept");
    setOpen(false);
  }

  return (
    <div
      className={cn(
        "cookie-notice fixed z-[60] border border-line bg-noir p-5 max-md:inset-x-0 md:right-6 md:bottom-6 md:max-w-sm",
        pathname === "/reserve" ? "max-md:bottom-0" : "max-md:bottom-[4.75rem]",
      )}
      role="dialog"
      aria-label={t(copy.cookie.text, locale)}
    >
      <p className="text-[0.88rem] leading-6 text-stone">{t(copy.cookie.text, locale)}</p>
      {settings ? (
        <p className="mt-3 text-[0.8rem] leading-6 text-stone">{t(copy.cookie.essential, locale)}</p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-5">
        <Button variant="solid" onClick={accept}>
          {t(copy.cookie.accept, locale)}
        </Button>
        <Button onClick={() => setSettings((value) => !value)}>
          {t(copy.cookie.settings, locale)}
        </Button>
      </div>
    </div>
  );
}
