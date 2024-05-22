import "./globals.css";

import MainHeader from "@/components/header/main-header";

export const metadata = {
  title: "Next Level Food",
  description: "Next Level Delicious Meals!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
