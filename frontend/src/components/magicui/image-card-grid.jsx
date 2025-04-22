import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ImageCard = ({ image, title, description, buttonText, buttonLink }) => {
  return (
    <Card className="w-72 pt-0 gap-3 flex flex-col border-none overflow-hidden bg-white rounded-lg shadow-md">
      <div className="h-56 w-full bg-gray-200 overflow-hidden">
        {image && (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <CardHeader className="text-center">
        <h3 className="text-xl font-bold text-zinc-800">{title}</h3>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-zinc-600 text-lg">{description}</p>
      </CardContent>
      <CardFooter className="">
        <Button
          variant="default"
          className="bg-gray-900 hover:bg-gray-800 text-white mx-auto rounded-md"
          asChild
        >
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

// ImageCardGrid component to handle multiple cards
const ImageCardGrid = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-14 justify-center">
      {cards.map((card, index) => (
        <ImageCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
        />
      ))}
    </div>
  );
};

export default ImageCardGrid;