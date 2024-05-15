import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

import base from "./base";

export default {
  // must not have the brackets? - https://github.com/marklawlor/nativewind/issues/587#issuecomment-1872637621
  darkMode: "class",
  content: base.content,
  presets: [base],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
