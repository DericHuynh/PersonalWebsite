import { Button, Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

export default function Navbar() {
    return (
        <Disclosure as="nav" className="flex flex-row-reverse h-full" defaultOpen={true}>
            <DisclosureButton className="group my-auto">
                <ChevronDownIcon className="transition duration-400 relative size-5 text-white group-data-[open]:rotate-90 -rotate-90" />
            </DisclosureButton>
            <Transition
                enter="transition duration-[400ms] ease-in-out"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition duration-[400ms] ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <DisclosurePanel className="px-2 flex flex-col gap-3 text-white border-r-2 border-gray-800">
                    <p className="w-max mt-4 underline">Deric Huynh</p>
                    <Link className="px-1 bg-slate-800 shadow rounded hover:bg-gray-700" href="/about">About</Link>
                    <Link className="px-1 bg-slate-800 shadow rounded hover:bg-gray-700" href="/projects">Projects</Link>
                    <Link className="px-1 bg-slate-800 shadow rounded hover:bg-gray-700" href="/activities">Activites</Link>
                    <Link className="px-1 bg-slate-800 shadow rounded hover:bg-gray-700" href="/settings">Settings</Link>
                </DisclosurePanel>
            </Transition>
        </Disclosure>
    );
} 