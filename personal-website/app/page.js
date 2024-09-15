import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-blue-900">
      <h1 className="mx-auto text-center text-2xl sticky top-0 pb-1 bg-gray-900 w-full border-b-2 border-gray-800">About Me</h1>
      <div className="w-full flex flex-col gap-2 overflow-y-auto">
        <div className="flex flex-row justify-evenly p-2 pb-0 to-transparent from-white/30 bg-gradient-to-b">
          <Image src="/derichuynh.webp" width="200" height="200" className="m-auto rounded-full border-2 border-gray-800"></Image>
        </div>
        <p className="m-auto text-center px-3 rounded-full bg-gray-900/70 font-serif">Deric Huynh</p>
        <div className="flex flex-col m-2 gap-2">
          <div>
            <h2 className="mr-auto w-fit text-xl font-mono px-3 rounded-t-md bg-gray-900/40 border-b-2 border-white/20">Who am I</h2>
            <div className="flex flex-row indent-5 bg-gray-900/40 rounded-b-md rounded-r-md border-gray-800">
              <p className="ml-2">
                I&apos;m a Computer Engineering Technology graduate at the Northern Alberta Institute of Technology, having achieved a <b className="text-yellow-400">3.9</b> GPA. Based in Edmonton, my academic and professional journey is characterized by deep technical expertise and innovative problem-solving.
                I&apos;ve engaged in diverse projects encompassing web and software development, embedded systems, electronic and PCB design, and database management.
              </p>
              <Image src="/nait.svg" width="100" height="100" className="m-1.5 rounded"></Image>
            </div>
          </div>
          <div>
            <h2 className="mr-auto w-fit text-xl font-mono px-3 rounded-t-md bg-gray-900/40 border-b-2 border-white/20">What I&apos;ve Done</h2>
            <p className="indent-5 px-1.5 bg-gray-900/40 rounded-r-md rounded-b-md border-gray-800">
              One of my personal projects has been the development of smart home systems. I successfully engineered a user-friendly website for smart home device management, utilizing Svelte and Tailwind CSS for the frontend, which achieved remarkably fast page load times. Additionally, I co-engineered an integrated smart home system, programming devices for varied functionalities using MicroPython, which communicated via the MQTT protocol with exceptional responsiveness. A C# ASP.NET server would take the MQTT packets and route them to other devices depending on the relationships in the database. Another project I developed is an Asteroids recreation in Java using the Eclipse IDE. Using JFrame as a canvas, I was able to implement a game using a tick-render loop w/ time deltas while following Object-Oriented-Programming standards. The game runs smoothly with a clearly labelled user interface and responsive controls. These projects underscore my ability to integrate front-end design with sophisticated back-end solutions, optimizing both user experience and system efficiency.
            </p>
          </div>
          <div>
            <h2 className="ml-auto w-fit text-xl font-mono px-3 rounded-t-md bg-gray-900/40 border-b-2 border-white/20">Front-end Skillset</h2>
            <div className="flex flex-col indent-5 bg-gray-900/40 rounded-b-md rounded-r-md border-gray-800">
              <p className="ml-2">
              I possess extensive expertise in web development, with a strong proficiency in a variety of technologies and frameworks. My skills include working with React, which I used to build this portfolio website, creating a dynamic and responsive user experience. Tailwind CSS has been instrumental in styling this site, enabling efficient, consistent theming across pages. My web development toolkit also includes Svelte, a modern tool for building efficient, reactive web interfaces, along with foundational web technologies such as HTML, CSS, JavaScript, and PHP. These skills enable me to build seamless, scalable, and interactive web applications tailored to user needs.
              </p>
              <div className="flex gap-2 bg-white/5 m-auto my-1 px-2 overflow-x-auto rounded-md">
                <Image src="/react.svg" width="100" height="100" className="m-1.5 rounded"></Image>
                <Image src="/tailwindcss.svg" width="100" height="100" className="m-1.5 rounded"></Image>
                <Image src="/svelte.svg" width="80" height="80" className="m-1.5 rounded"></Image>
                <Image src="/html5.svg" width="100" height="100" className="m-1.5 rounded"></Image>
                <Image src="/php.svg" width="100" height="100" className="m-1.5 rounded"></Image>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mr-auto w-fit text-xl font-mono px-3 rounded-t-md bg-gray-900/40 border-b-2 border-white/20">Personal Development</h2>
            <p className="indent-5 px-1.5 bg-gray-900/40 rounded-r-md rounded-b-md  border-gray-800">
              Beyond technical pursuits, I actively participate in the Edmonton Advanced Toastmasters club, enhancing my public speaking skills and contributing to workshops and speeches that have been consistently lauded by senior members. My entrepreneurial spirit was also cultivated through two years of involvement in Junior Achievement, where I developed and marketed products as part of a small business team.
            </p>
          </div>
          <div>
          <h2 className="mr-auto w-fit text-xl font-mono px-3 rounded-t-md bg-gray-900/40 border-b-2 border-white/20">Going Forward</h2>
            <p className="indent-5 px-1.5 bg-gray-900/40 rounded-b-md rounded-r-md border-gray-800">
              I am keen to leverage my technical skills, analytical capabilities, and proactive approach in a professional setting, eager to contribute to innovative engineering solutions. If you would like to discuss on how we can collaborate on future projects, navigate to the <b><Link href="/contacts">Contacts</Link></b> page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
  
}
