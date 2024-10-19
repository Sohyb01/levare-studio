import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: [
          "3rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-0.036rem",
            fontWeight: "400",
          },
        ],
        h2: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.016875rem",
            fontWeight: "400",
          },
        ],
        h3: [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.009rem",
            fontWeight: "400",
          },
        ],
        h4: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "-1px",
            fontWeight: "400",
          },
        ],
        large: [
          "18px",
          {
            lineHeight: "1.75rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        lead: [
          "20px",
          {
            lineHeight: "1.75rem",
            letterSpacing: "-1px",
            fontWeight: "300",
          },
        ],
        p: [
          "1rem",
          {
            lineHeight: "1.75rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        p_ui: [
          "1rem",
          {
            lineHeight: "1.5rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        p_ui_medium: [
          "1rem",
          {
            lineHeight: "1.5rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        list: [
          "1rem",
          {
            lineHeight: "1.5rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        body: [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        body_medium: [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        subtle: [
          "0.875rem",
          {
            lineHeight: "20px",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        subtle_medium: [
          "0.875rem",
          {
            lineHeight: "20px",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        subtle_semibold: [
          "0.875rem",
          {
            lineHeight: "20px",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        small: [
          "0.875rem",
          {
            lineHeight: "0.875rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        detail: [
          "12px",
          {
            lineHeight: "20px",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        badge: [
          "12px",
          {
            lineHeight: "16px",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        blockquote: [
          "16px",
          {
            lineHeight: "1.5rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        table_head: [
          "16px",
          {
            lineHeight: "1.5rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        table_item: [
          "16px",
          {
            lineHeight: "1.5rem",
            //   letterSpacing: "0px",
            fontWeight: "300",
          },
        ],
        kb_shortcut: [
          "12px",
          {
            lineHeight: "20px",
            letterSpacing: "1px", // Cant use percentages
            fontWeight: "300",
          },
        ],
        card_title: [
          "1.5rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-1px", // Cant use percentages
            fontWeight: "300",
          },
        ],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        sm: "360px",
        md: "744px",
        lg: "1280px",
      },
    },
    container: {
      center: true,
      screens: {
        md: "744px",
        lg: "1280px",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
