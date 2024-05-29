import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

export default function Homelab() {
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      <p className="w-full bg-white/10 px-2">
        A networking homelab to test and experiement with hosting. Managed the server using IDRAC 8 through the management port, aswell as SSH for OS configuration.
      </p>
      <Image src="/initial-homelab.jpg" width="1000" height="10000"></Image>
    </div>
  );
}
