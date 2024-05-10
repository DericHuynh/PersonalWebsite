import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

export default function Asteroids() {
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      <p className="w-full bg-white/10  px-2">
        An Asteroids recreation, made in Java using the Eclipse IDE. JFrame and Polygon classes used for rendering, my grade 12 computer science final project. 
      </p>
      <iframe className="h-full w-full rounded-b-md bg-white/10" src="https://www.youtube.com/embed/IwzN57SE_xU?si=m3N3JixWut_JfSgC&vq=hd1080p60&origin=https://huynhderic.net" title="YouTube video player" allow="fullscreen; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}
