import "./global.css";
import { GlobalProvider } from "../context/GlobalContext";

export const metadata = {
  title: "QuickCabs",
  description: "QuickCabs",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
