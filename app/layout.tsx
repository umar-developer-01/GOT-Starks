import type { Metadata } from "next";
import { inter, sevillana } from "../fonts";
import { AppProvider } from "@/appContext/index";
import { ModalProvider } from "@/modal/context";
import "./global.css";

export const metadata: Metadata = {
  title: "GOT",
  description: "All About Starks",
};

export default function RootLayout({
  header,
  children,
  sidebar,
}: Readonly<{
  header: React.ReactNode;
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sevillana.variable}`}>
        <AppProvider>
          <ModalProvider>
            {header}
            {children}
            {sidebar}
          </ModalProvider>
        </AppProvider>
      </body>
    </html>
  );
}
