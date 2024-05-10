import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-blue-900">
      <h1 className="mx-auto text-center text-2xl  sticky top-0 pb-1 bg-gray-900 w-full border-b-2 border-gray-800">About Me</h1>
      <div className="w-full flex flex-col gap-2 p-2 overflow-y-auto">
        <div className="flex flex-row justify-evenly">
          <Image src="/derichuynh.jpg" width="200" height="200" className="m-auto rounded-full border-2 border-gray-800"></Image>
        </div>
        <p className="m-auto text-center px-3 rounded-full bg-gray-900/70 font-serif">Deric Huynh</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row indent-5 bg-gray-900/40 rounded-md border-gray-800">
            <p className="ml-2">
              I&apos;m a Computer Engineering Technology graduate at the Northern Alberta Institute of Technology, having achieved an GPA of 3.9/4.0. Based in Edmonton, my academic and professional journey is characterized by deep technical expertise and innovative problem-solving.
              In the realm of technology, I&apos;ve engaged in diverse projects, encompassing web and software development, embedded systems, electronic and PCB design, and database management.
            </p>
            <Image src="/nait.svg" width="100" height="100" className="m-1.5 rounded"></Image>
          </div>
          <p className="indent-5 px-1.5 bg-gray-900/40 rounded-md  border-gray-800">
          </p>
          <p className="indent-5 px-1.5 bg-gray-900/40 rounded-md  border-gray-800">
            A significant focus of my personal projects has been the development of smart home systems. I successfully engineered a user-friendly website for smart home device management, utilizing Svelte and Tailwind CSS for the frontend, which achieved remarkably fast page load times. Additionally, I co-engineered an integrated smart home system, programming devices for varied functionalities, which communicated via the MQTT protocol with exceptional responsiveness. These projects underscore my ability to integrate front-end design with sophisticated back-end solutions, optimizing both user experience and system efficiency.
          </p>
          <p className="flex flex-row indent-5 px-1.5 bg-gray-900/40 rounded-md  border-gray-800">
            I possess extensive expertise in web development, with a strong proficiency in a variety of technologies and frameworks. My skills include working with React, which I used to build this portfolio website, creating a dynamic and responsive user experience. Tailwind CSS has been instrumental in styling this site, enabling efficient, consistent theming across pages. My web development toolkit also includes Svelte, a modern tool for building efficient, reactive web interfaces, along with foundational web technologies such as HTML, CSS, JavaScript, and PHP. These skills enable me to build seamless, scalable, and interactive web applications tailored to user needs.
          </p>
          <p className="indent-5 px-1.5 bg-gray-900/40 rounded-md  border-gray-800">
            Beyond technical pursuits, I actively participate in the Edmonton Advanced Toastmasters club, enhancing my public speaking skills and contributing to workshops and speeches that have been consistently lauded by senior members. My entrepreneurial spirit was also cultivated through two years of involvement in Junior Achievement, where I developed and marketed products as part of a small business team.
          </p>
          <p className="indent-5 px-1.5 bg-gray-900/40 rounded-md  border-gray-800">
            I am keen to leverage my technical skills, analytical capabilities, and proactive approach in a professional setting, eager to contribute to innovative engineering solutions. Let&apos;s connect to discuss how we can collaborate on future technology projects.
          </p>
        </div>
      </div>
    </main>
  );
  
}
