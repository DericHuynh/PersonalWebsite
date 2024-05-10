import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

export default function Asteroids() {
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      <p className="w-full bg-white/10 px-2">
        An Asteroids recreation, made in Java using the Eclipse IDE. JFrame and Polygon classes used for rendering, my grade 12 computer science final project. 
      </p>
      <iframe className="h-full w-full rounded-b-md" src="https://www.youtube.com/embed/IwzN57SE_xU?si=m3N3JixWut_JfSgC&vq=hd1080p60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen mozallowfullscreen webkitallowfullscreen></iframe>
    </div>
  );
}
