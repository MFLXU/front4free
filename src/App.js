import { PlayIcon } from "@heroicons/react/solid";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/javascript.png";
import react from "./assets/react.png";
import { ExternalLinkIcon } from "@heroicons/react/outline";
function App() {
  return (
    <div>
      <div className="w-full h-fit py-12 bg-blue-600 text-white px-4 md:px-0">
        <div className="container max-w-[1000px] mx-auto h-full flex flex-col justify-center items-center gap-8">
          <h1 className="font-bold text-6xl md:text-8xl text-center">
            Learn Front-End For Free On Youtube
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img className="w-32 md:w-20" src={html} alt="" />
            <img className="w-32 md:w-20" src={css} alt="" />
            <img className="w-32 md:w-20" src={js} alt="" />
            <img className="w-32 md:w-20" src={react} alt="" />
          </div>
          <a
            className="py-4 mt-8 px-8 bg-white text-blue-600 rounded-md text-xl hover:bg-slate-50 hover:-translate-y-1 duration-300 font-bold"
            href="#gs"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="container max-w-[1000px] mx-auto pt-8 px-4 md:px-0">
        <h2 className="text-3xl font-bold mt-4">
          What is Front-End Development?
        </h2>
        <p className="text-xl mb-2">
          Front end development is a style of computer programming that focuses
          on the coding and creation of elements and features of a website that
          will then be seen by the user. It's about making sure the visual
          aspects of a website are functional. You can also think of front end
          as the “client side” of an application.
        </p>
        <h2 className="text-3xl font-bold mt-4">
          What is The Best Way To Learn How To Code?
        </h2>
        <p className="text-xl mb-2">
          Just the thought of learning to code can be very intimidating. The
          word code is mysterious by definition. It implies a technical form of
          communication that computers, and not humans, are meant to understand.
        </p>
        <p className="text-xl mb-2">
          One way many people start learning to code is by picking a popular
          programming language and jumping in head first with no direction. This
          could take the form of an online coding course, a tutorial project, or
          a random book purchase on a specific topic.
        </p>
        <p className="text-xl mb-2">
          Rarely do prospective developers start with a roadmap – a bird's eye
          view of the coding world that outlines a set of relevant programming
          concepts, languages, and tools that almost 100% of developers use
          every day.
        </p>
        <h2 className="text-3xl font-bold mt-4">
          Can i get a job in 6 Months?
        </h2>
        <p className="text-xl mb-2">
          When you aim to become a web developer in six months, it doesn't mean
          you need to be an expert to a junior web developer. Getting a position
          like this in six months sounds impossible, but it all depends on how
          hard you're willing to work. And the list can go on and on
        </p>
        <div
          id="gs"
          className="my-8 p-4 rounded-md bg-blue-50 border border-blue-600"
        >
          <h2 className="text-4xl font-bold">Before You Start</h2>
          <p className="text-xl">
            This Road Map <span className="font-bold">Wont Guarantee</span> you
            a job as a Front-end developer, sure you will be "industry ready"
            and have the knowledge to land an internship or maybe start
            freelancing, but please note that this is only a guid that will help
            you on what you should learn, there are some topics and concepts
            beyond this roadmap like :
          </p>
          <ul className="pl-4 py-2">
            <li className="text-xl font-bold text-blue-600">Algorithms</li>
            <li className="text-xl font-bold text-blue-600">Problem Solving</li>
            <li className="text-xl font-bold text-blue-600">Data Structure</li>
            <li className="text-xl font-bold text-blue-600">
              How To Prepare For Job Interviews
            </li>
            <li className="text-xl font-bold text-blue-600">
              Back-End Development...
            </li>
          </ul>
          <p className="text-xl">
            and i only kept the essential stuff, i advise you to learn more,
            practice more and do some researches on every topic on this list.
          </p>
        </div>
        <div
          id="links"
          className="my-12 p-4 bg-blue-50 border rounded-md border-blue-600"
        >
          <h3 className="text-2xl font-bold mb-4">The Fundamentals</h3>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=zN8YNNHcaZc"
            target="_blank"
          >
            How does the internet work?
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=pQN-pnXPaVg"
            target="_blank"
          >
            HTML Full Course
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=1Rs2ND1ryYc"
            target="_blank"
          >
            CSS Full Course
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=0xMQfnTU6oo"
            target="_blank"
          >
            CSS Grid Crash Course
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=-8LTPIJBGwQ"
            target="_blank"
          >
            <p>
              <span className="font-bold">Project I :</span> Recipes Website
              Using HTML & CSS
            </p>
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=2lBPKEx7-jw"
            target="_blank"
          >
            <p>
              <span className="font-bold">Project II :</span> Landing Page Using
              HTML & CSS
            </p>
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          <h3 className="text-2xl font-bold my-4">
            Start Giving Some Functionality To Your Websites
          </h3>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=jS4aFq5-91M"
            target="_blank"
          >
            JavaScript Course
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=3PHXvlpOkf4"
            target="_blank"
          >
            15 JavaScript Projects - Vanilla JavaScript Course
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=5fb2aPlgoys"
            target="_blank"
          >
            JavaScript DOM Manipulation - Full Course
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=Ttf3CEsEwMQ&t"
            target="_blank"
          >
            <p>
              <span className="font-bold">Project III :</span> Todo List App
            </p>
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=PoRJizFvM7s"
            target="_blank"
          >
            Async JS Crash Course - Callbacks, Promises, Async Await
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=Oive66jrwBs"
            target="_blank"
          >
            Fetch API Introduction
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=wPElVpR1rwA"
            target="_blank"
          >
            <p>
              <span className="font-bold">Project IV</span> : Weather App With
              Vanilla Javascript
            </p>
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          <h3 className="text-2xl font-bold my-4">
            Learn Git & Github And Start Uploading Your Projects To Github
          </h3>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=RGOj5yH7evk"
            target="_blank"
          >
            Git and GitHub for Beginners - Crash Course
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          <h3 className="text-2xl font-bold my-4">
            Build Your First E-Portfolio To Showcase What You Have Made So Far!
          </h3>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=xV7S8BhIeBo"
            target="_blank"
          >
            <p>
              <span className="font-bold">Project V :</span> Portfolio Website
              Tutorial
            </p>
            <PlayIcon className="w-8 text-blue-600" />
          </a>

          <h3 className="text-2xl font-bold my-4">REACTJS ✨</h3>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=bMknfKXIFA8"
            target="_blank"
          >
            React Course - Beginner's Tutorial for React
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=K0q-8ytGlVA"
            target="_blank"
          >
            UseState Tutorial For Beginners - React States
            <PlayIcon className="w-8 text-blue-600" />
          </a>

          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=3yrMcx02jXs"
            target="_blank"
          >
            React Context API
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=dH6i3GurZW8"
            target="_blank"
          >
            UseEffect Hook - Mastering React's useEffect
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=a_7Z7C_JCyo"
            target="_blank"
          >
            15 React Projects For Beginners
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=ZEKBDXGnD4s"
            target="_blank"
          >
            React Axios API Requests
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=59IXY5IDrBA"
            target="_blank"
          >
            React Router 6
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=lZp4salRFFc"
            target="_blank"
          >
            Tailwind Complete Course For Beginner to Advanced
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=jx5hdo50a2M"
            target="_blank"
          >
            <p>
              <span className="font-bold">Project VI :</span> Build and Deploy a
              React Admin Dashboard App
            </p>
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=UKdQjQX1Pko"
            target="_blank"
          >
            <p>
              <span className="font-bold">Project VII :</span> Google Maps
              Travel Companion Application
            </p>
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=NqzdVN2tyvQ"
            target="_blank"
          >
            Redux & Redux Toolkit Course
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          <h3 className="text-2xl font-bold my-4">
            Build a ReactJS E-Portfolio To Showcase What You Have Made Soo Far!
          </h3>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=3HNyXCPDQ7Q"
            target="_blank"
          >
            <p>
              <span className="font-bold">Project VIII :</span> ReactJS
              Portfolio Website Tutorial
            </p>
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          <h3 className="text-2xl font-bold my-4">
            Additional Libraries You Will Need Someday !
          </h3>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=EJsmCDol9iA"
            target="_blank"
          >
            SwiperJS
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=NySBh_DIRlg"
            target="_blank"
          >
            ChartJS
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=o1chMISeTC0"
            target="_blank"
          >
            MUI5 (Material UI)
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=s-bIsz-NR3c"
            target="_blank"
          >
            Chakras UI
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=0SIuH7yHCpA"
            target="_blank"
          >
            React Bootstrap
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          <h3 className="text-2xl font-bold my-4">What's Next?</h3>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=m2N3tmJ_A0Q"
            target="_blank"
          >
            Freelancing as a Front-End Web Developer
            <PlayIcon className="w-8 text-blue-600" />
          </a>
          {/* -----Link -----*/}
          <a
            className="my-2 gap-4 bg-white py-2 px-4 duration-300 hover:bg-slate-100 rounded-md text-xl flex justify-between items-center border border-slate-200"
            href="https://www.youtube.com/watch?v=ebJ0XBOjowo"
            target="_blank"
          >
            Getting a Job as a Front-End Web Developer
            <PlayIcon className="w-8 text-blue-600" />
          </a>
        </div>
      </div>
      <footer className="bg-blue-600 py-4 text-white">
        <div className="container max-w-[1000px] mx-auto px-4 md:px-0">
          <p className="text-xl w-fit mx-auto flex items-center justify-center gap-2">
            made by
            <a
              href="https://louayekazar.com/"
              className="font-medium flex items-center justify-center gap-1"
              target="_blank"
            >
              Louaye Kazar <ExternalLinkIcon className="w-5" />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
