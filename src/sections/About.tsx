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

const toolboxItems = [
  { title: "GitHub", icon: GitHubIcon },
  { title: "HTML5", icon: HTMLIcon },
  { title: "CSS3", icon: CSSIcon },
  { title: "JavaScript", icon: JavascriptIcon },
  { title: "Chrome", icon: ChromeIcon },
  { title: "React", icon: ReactIcon },
];

const hobbies = [
  { title: "Painting", emoji: "🎨" },
  { title: "Photography", emoji: "📷" },
  { title: "Drawing", emoji: "✍🏻" },
  { title: "Gaming", emoji: "🎮" },
  { title: "Music", emoji: "🎵" },
  { title: "Travelling", emoji: "🌏" },
  { title: "Fitness", emoji: "🏋🏻‍♂️" },
  { title: "Reading", emoji: "📚" },
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
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="The books I have read so far."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Cover of the book I read" />
            </div>
          </Card>
          <Card>
            <CardHeader
              title="My Toolbox"
              description="Explore the Technology and Tools I Use."
            />
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.icon} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image
              src={mapImage}
              alt="World map showing my location"
            />
            <Image
              src={smileMemoji}
              alt="Smiling memoji representing me"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};