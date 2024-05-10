import { Button, Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { CodeBracketSquareIcon, Cog8ToothIcon, DocumentIcon, HomeIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

export default function Navbar() {
    return (
        <Disclosure as="nav" className="flex flex-row h-full border-r-2 border-gray-800" defaultOpen={true}>
            <Transition
                enter="transition duration-[400ms] ease-in-out"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition duration-[400ms] ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <DisclosurePanel className="px-2 flex flex-col gap-3 text-white border-r-2  border-gray-800">
                    <p className="w-full mt-4 underline text-center">Deric Huynh</p>
                    <Link className="px-1 bg-slate-800 shadow rounded hover:bg-gray-700 flex flex-row items-center gap-1.5 pr-1.5" href="/"><HomeIcon className="size-5"/>Home</Link>
                    <Link className="px-1 bg-slate-800 shadow rounded hover:bg-gray-700 flex flex-row items-center gap-1.5 pr-1.5" href="/resume"><ClipboardDocumentListIcon className="size-5"/>Resume</Link>
                    <Link className="px-1 bg-slate-800 shadow rounded hover:bg-gray-700 flex flex-row items-center gap-1.5 pr-1.5" href="/projects"><CodeBracketSquareIcon className="size-5" />Projects</Link>
                    <Link className="px-1 bg-slate-800 shadow rounded hover:bg-gray-700 flex flex-row items-center gap-1.5 pr-1.5" href="/activities"><DocumentIcon className="size-5" />Activities</Link>
                </DisclosurePanel>
            </Transition>
            <DisclosureButton className="group my-auto">
                <ChevronDownIcon className="transition duration-500 relative size-5 text-white group-data-[open]:rotate-90 -rotate-90" />
            </DisclosureButton>
        </Disclosure>
    );
} 