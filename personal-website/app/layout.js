import "./globals.css";
import Navbar from "./lib/Navbar";

export const metadata = {
  title: "Deric Huynh",
  description: "Created by Deric Huynh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-gray-900 bg-gradient-to-r h-lvh flex flex-row"}>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
