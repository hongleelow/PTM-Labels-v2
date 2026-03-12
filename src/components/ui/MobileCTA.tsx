"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-ptm-gray-light bg-white p-3 md:hidden">
      <div className="flex gap-3">
        <Link
          href="/quote"
          className="flex-1 rounded-button bg-ptm-accent py-3 text-center text-body-sm font-semibold text-ptm-navy transition-colors hover:bg-ptm-accent-light"
        >
          Request a Quote
        </Link>
        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-button border-2 border-ptm-gray-light px-4 py-3 text-body-sm font-medium text-ptm-navy transition-colors hover:border-ptm-blue hover:text-ptm-blue"
        >
          <svg
            className="mr-1.5 h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.528 5.862L.06 23.854l6.143-1.612A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.933 0-3.749-.563-5.282-1.53l-.378-.225-3.922 1.029 1.047-3.825-.247-.393A9.71 9.71 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
