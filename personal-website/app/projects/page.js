import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Asteroids from "./asteroids";
import SmartHomeSystem from "./smarthomesystem";
import Homelab from "./homelab";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-blue-900">
      <h1 className="mx-auto text-center text-2xl  sticky top-0 pb-1 bg-gray-900 w-full border-b-2 pr-1 border-gray-800">Personal Projects</h1>
      <div className="flex flex-col gap-2 p-2 overflow-y-auto grow">
        <TabGroup className="flex flex-col h-full">
          <TabList className="flex flex-row gap-2 justify-evenly">
            <Tab className="bg-black/20 flex-1 grow rounded-t-md data-[selected]:bg-white/10 border-b-2 border-black/20 data-[selected]:border-white/20 hover:bg-white/5 ">Smart Home System</Tab>
            <Tab className="bg-black/20 flex-1 grow rounded-t-md data-[selected]:bg-white/10 border-b-2 border-black/20 data-[selected]:border-white/20 hover:bg-white/5 ">Asteroids</Tab>
            <Tab className="bg-black/20 flex-1 grow rounded-t-md data-[selected]:bg-white/10 border-b-2 border-black/20 data-[selected]:border-white/20 hover:bg-white/5 ">Homelab</Tab>
          </TabList>
          <TabPanels className="grow overflow-y-auto">
            <TabPanel className="h-full"><SmartHomeSystem /></TabPanel>
            <TabPanel className="h-full"><Asteroids /></TabPanel>
            <TabPanel className="h-full"><Homelab /></TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </main>
  );
}
