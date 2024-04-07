import { IconType } from "react-icons";
import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaSteam,
  FaLastfm,
} from "react-icons/fa6";
import DoomFire from "./components/DoomFire";

interface Link {
  icon?: IconType;
  name: string;
  detailedName?: string;
  url: string;
}

function App() {
  const links: Link[] = [
    {
      icon: FaXTwitter,
      name: "X",
      detailedName: "@rxonvrdo",
      url: "https://x.com/rxonvrdo",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      detailedName: "@rxonvrdo",
      url: "https://instagram.com/rxonvrdo",
    },
    {
      icon: FaSteam,
      name: "Steam",
      detailedName: "rxonvrdo",
      url: "https://steamcommunity.com/id/rxonvrdo",
    },
    {
      icon: FaLastfm,
      name: "Last.fm",
      detailedName: "rxonvrdo",
      url: "https://last.fm/user/rxonvrdo",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      detailedName: "reonardoleis",
      url: "https://github.com/reonardoleis",
    },
  ];

  return (
    <>
      <div className="flex h-screen justify-center items-center text-white bg-zinc-950 p-4">
        <div className="lg:min-w-[750px] flex flex-col items-center justify-center rounded-xl border-solid border border-zinc-800 p-8 backdrop-blur-sm relative">
          <DoomFire />
          <h1 className="text-6xl font-bold emoji">☢️</h1>
          <h1 className="text-4xl font-bold text-center mt-2">
            rxonvrdo's links
          </h1>
          <p className="text-md font-thin text-center">
            Looking for new AMIGOS™ cult members :)
          </p>
          <div className="flex flex-col mt-2 mb-5 w-full p-4 items-center justify-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-xl font-thin w-full mt-2 rounded-xl"
              >
                <button className="flex justify-center items-center text-xl w-full outline outline-zinc-700 p-2 outline-[1px] rounded-md hover:bg-white hover:text-black transition-all">
                  {link.icon && <link.icon className="inline mr-2" />}
                  {link.name} {link.detailedName && `(${link.detailedName})`}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
