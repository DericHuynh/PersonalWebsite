import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <object className="w-full h-full bg-gray-900 mx-auto" type="application/pdf" data="/resume.pdf?#zoom=85&scrollbar=0&toolbar=0&navpanes=0">
        <p>The browsers pdf-viewer has failed to load the resume, or the link is wrong.</p>
        <p>Direct link: <Link className="text-blue-300" href="/resume.pdf">resume.pdf</Link></p>
      </object>
    </main>
  );
}
