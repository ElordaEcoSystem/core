import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <div className="flex flex-col min-h-screen">
          <Header locale={locale} messages={messages} />
          <div className="grow">
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </div>
          <Footer messages={messages} />
        </div>
      </body>
    </html>
  );
}
