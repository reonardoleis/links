import { IconType } from "react-icons";
import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaSteam,
  FaLastfm,
  FaLink,
} from "react-icons/fa6";
import DoomFire from "./components/DoomFire";
import React from "react";
import Prize from "./components/Prize";
import Mirror from "./components/Mirror";
import { getViews, postViews } from "./services/views/endpoints";
import { getOrigin } from "./utils/origin";
import { IoEyeOutline } from "react-icons/io5";

interface Link {
  icon?: IconType;
  name: string;
  detailedName?: string;
  url: string;
}

function App() {
  const [expert, setExpert] = React.useState<boolean>(false);
  const [views, setViews] = React.useState<number | undefined>();
  const [links, setLinks] = React.useState<Link[]>([
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
      detailedName: "reonardo",
      url: "https://last.fm/user/reonardo",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      detailedName: "reonardoleis",
      url: "https://github.com/reonardoleis",
    },
    {
      icon: FaLink,
      name: "My links",
      url: `${window.location.href}?r=1`,
    },
  ]);

  React.useEffect(() => {
    getViews().then((response) => {
      setViews(response.views);
    });
  }, []);

  React.useEffect(() => {
    postViews({ origin: getOrigin(window.location.search) });
  }, []);

  React.useEffect(() => {
    if (window.location.search.includes("?expert=true")) {
      setExpert(true);
      return;
    }

    if (window.location.search.includes("?r=")) {
      const r = parseInt(window.location.search.replace("?r=", ""));

      if (r >= 8) {
        return window.location.replace(window.location.href.split("?")[0]);
      }

      for (let i = 0; i < r; i++) {
        setLinks((prev) => {
          const base = window.location.href.split("?")[0];

          if (r == 7) {
            setExpert(true);
            var newUrl = `${base}?expert=true`;
          } else {
            var newUrl = `${base}?r=${r + 1}`;
          }

          const myLinks = prev.find((link) => link.name === "My links")!;
          myLinks.url = newUrl;

          return [
            ...prev,
            {
              icon: FaLink,
              name: `My links (${i + 1})`,
              url: newUrl,
            },
          ];
        });
      }
    }
  }, []);

  return (
    <>
      <div className="flex h-screen justify-center items-center text-white bg-zinc-950 p-4">
        <div className="lg:min-w-[750px] flex flex-col items-center justify-center rounded-md border-solid border border-zinc-900 p-8 backdrop-blur-sm relative">
          <DoomFire
            className="w-full absolute bottom-0 left-0 z-[-1] rounded-md"
            id="doom-fire"
          />
          <Mirror
            className="w-full absolute top-0 left-0 z-[-1] rounded-md"
            style={{
              transform: "rotate(180deg)",
            }}
          />

          {expert && <Prize />}
          <div className="flex justify-center items-center gap-2 absolute top-0 right-0 p-4 select-none">
            <IoEyeOutline className="text-xl" /> <small>{views}</small>
          </div>
          <div className="text-6xl emoji select-none  flex items-center justify-center">
            👁️
          </div>
          <h1 className="text-4xl font-bold text-center mt-2">
            rxonvrdo<span className="select-none">'s links</span>
          </h1>
          <p className="text-md font-thin text-center select-none"></p>
          <div className="flex flex-col mt-2 mb-5 w-full p-4 items-center justify-center">
            {links.map((link, key) => (
              <a
                key={key}
                href={link.url}
                className="text-md lg:text-xl md:text-lg font-thin w-full mt-2 rounded-xl select-none"
                target={!link.name.includes("My links") ? "_blank" : "_self"}
              >
                <button className="flex justify-center items-center w-full outline outline-zinc-700 p-2 outline-[1px] rounded-md hover:bg-white hover:text-black transition-all">
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
