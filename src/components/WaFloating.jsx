import React from "react";

export default function WaFloating({ phone, message = "Halo%20saya%20mau%20tanya", className = "" }) {
  if (!phone) {
    console.warn("WaButton: 'phone' prop is required (format: 6281234567890)");
  }

  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encoded}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi CS via WhatsApp"
      className={`fixed bottom-5 right-7 z-50 flex items-center gap-3 px-4 py-4 bg-green-600 hover:bg-green-600 text-white font-medium rounded-full shadow-lg transition-transform hover:scale-105 ${className}`}
    >
      {/* WhatsApp SVG (inline, ringan) */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M20.52 3.48A11.95 11.95 0 0012 0C5.373 0 .001 5.373.001 12c0 2.116.553 4.186 1.6 6.007L0 24l6.24-1.66A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52z" fill="#25D366"/>
        <path d="M17.2 14.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.36.46-.54.15-.18.2-.3.3-.5.1-.2 0-.38-.05-.53-.05-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.51l-.56-.01c-.18 0-.47.07-.72.34-.25.26-.96.94-.96 2.29s.98 2.66 1.12 2.84c.15.18 1.91 2.92 4.63 3.99 2.72 1.07 2.72.72 3.21.68.5-.05 1.58-.64 1.8-1.25.22-.6.22-1.12.15-1.25-.07-.13-.27-.18-.57-.33z" fill="#fff"/>
      </svg>
    </a>
  );
}
