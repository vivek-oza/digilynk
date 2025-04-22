import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckCircle, CircleCheck } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";
import { CardDescription, CardTitle } from "./card-hover-effect";
import { RainbowButtonCustom } from "../magicui/rainbow-button-custom";
import { useEffect, useState } from "react";
import { PulsatingButtonCustom } from "../magicui/PulsatingButtonCustom";
import { useNavigate } from "react-router-dom";

const FrostedCard = ({ imageSrc, imgHeight, title, bulletPoints, cardLink = [] }) => {

  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`${cardLink}`);
    setIsOpen(false);
  };

  return (
    <Card className="relative flex justify-between rounded-2xl border bg-white text-card-foreground shadow-lg backdrop-blur-sm dark:backdrop-blur-md">
      <CardContent className="space-y-4">
        <CardTitle className="mt-0 text-zinc-800 text-xl font-semibold text-center">
          {title}
        </CardTitle>
        {bulletPoints.map((point, index) => (
          <div key={index} className="flex items-start justify-start mx-auto space-x-2">
            <CircleCheck className="text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" size={20} />
            <span className="text-sm sm:text-base">{point}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex items-center justify-center">
        <div onClick={handleCardClick}>
          <PulsatingButtonCustom intensity="low" color="#000" className="hover:scale-110 transition-all">
            View more
          </PulsatingButtonCustom>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FrostedCard;