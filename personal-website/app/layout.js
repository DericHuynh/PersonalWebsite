import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Navbar from "./lib/Navbar";

export const metadata = {
  title: "Deric Huynh",
  description: "Created by Deric Huynh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-gray-900 bg-gradient-to-r flex flex-row"}>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
