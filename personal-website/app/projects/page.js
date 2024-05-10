import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import Asteroids from "./asteroids";
import SmartHomeSystem from "./smarthomesystem";

export default function Home() {
  return (
    <main className="w-full flex flex-col from-gray-900 to-blue-900 bg-gradient-to-t">
      <h1 className="mx-auto text-center text-2xl  sticky top-0 pb-1 bg-gray-900 w-full border-b-2 pr-1 border-gray-800">Personal Projects</h1>
      <div className="flex flex-col gap-2 p-2 overflow-y-auto grow">
        <TabGroup className="flex flex-col gap-2 h-full">
          <TabList className="flex flex-row gap-2 justify-evenly">
            <Tab className="bg-black/10 flex-1 grow rounded-full data-[selected]:bg-white/10 hover:bg-white/5 ">Smart Home System</Tab>
            <Tab className="bg-black/10 flex-1 grow rounded-full data-[selected]:bg-white/10 hover:bg-white/5 ">Asteroids</Tab>
          </TabList>
          <TabPanels className="grow overflow-y-auto">
            <TabPanel className="h-full">
              <SmartHomeSystem />
            </TabPanel>
            <TabPanel className="h-full">
              <Asteroids />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </main>
  );
}
