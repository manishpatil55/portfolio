import { SectionHeader } from "@/components/sectionHeader";
import { Card } from "@/components/card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import GitHubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import ReactIcon from "@/assets/icons/react.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  { title: "GitHub", icon: GitHubIcon },
  { title: "HTML5", icon: HTMLIcon },
  { title: "CSS3", icon: CSSIcon },
  { title: "React", icon: ReactIcon },
  { title: "Chrome", icon: ChromeIcon },
  { title: "JavaScript", icon: JavascriptIcon },
];

const hobbies = [
  { title: "Painting", emoji: "🎨",left: "5%", top: "6%", },
  { title: "Photography", emoji: "📷",left: "50%", top: "15%", },
  { title: "Drawing", emoji: "✍🏻",left: "1%", top: "33%", },
  { title: "Reading", emoji: "📚",left: "10%", top: "55%", },
  { title: "Music", emoji: "🎵",left: "50%", top: "70%", },
  { title: "Travelling", emoji: "🌏",left: "-5%", top: "78%", },
  { title: "Fitness", emoji: "🏋🏻‍♂️",left: "67%", top: "38%", },
  { title: "Gaming", emoji: "🎮",left: "35%", top: "45%", },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About ME"
          title="A Glimpse Into My World"
          description="Learn more about me and my journey as a developer."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Reads"
                description="The books I have read so far."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Cover of the book I read" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the Technology and Tools I Use."
                className=""
              />
            <ToolboxItems items={toolboxItems} className=""/>
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2"/>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-[320px] p-0 flex flex-col col-span-3">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-2">
              <Image
                src={mapImage}
                alt="World map showing my location" className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={smileMemoji}
                  alt="Smiling memoji representing me" className="size-15"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};