import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ImageCard = ({ image, title, description, buttonText, buttonLink }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      className="w-full"
    >
      <Card className="w-full transition-all pt-0 gap-3 flex flex-col border-none overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg">
        <div className="h-72 w-full bg-gray-200 overflow-hidden">
          {image && (
            <motion.img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
        <CardHeader className="text-center">
          <h3 className="text-xl font-semibold text-zinc-800">{title}</h3>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-zinc-600 text-sm">{description}</p>
        </CardContent>
        <CardFooter className="">
          <Button
            size="md"
            variant="default"
            className="bg-gray-900 hover:bg-gray-800 text-white shadow-xl shadow-black/20 mx-auto rounded-md"
            asChild
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

// ImageCardGrid component to handle multiple cards
const ImageCardGrid = ({ cards }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={container}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto"
    >
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
    </motion.div>
  );
};

export default ImageCardGrid;














// import React from 'react';
// import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// const ImageCard = ({ image, title, description, buttonText, buttonLink }) => {
//   return (
//     <Card className="w-72 hover:scale-105 transition-all pt-0 gap-3 flex flex-col border-none overflow-hidden bg-white rounded-lg shadow-md">
//       <div className="h-56 w-full bg-gray-200 overflow-hidden">
//         {image && (
//           <img
//             src={image}
//             alt={title}
//             className="h-full w-full object-cover"
//           />
//         )}
//       </div>
//       <CardHeader className="text-center">
//         <h3 className="text-xl font-semibold text-zinc-800">{title}</h3>
//       </CardHeader>
//       <CardContent className="text-center">
//         <p className="text-zinc-600 text-lg">{description}</p>
//       </CardContent>
//       <CardFooter className="">
//         <Button
//           size="md"
//           variant="default"
//           className="bg-gray-900 hover:bg-gray-800 text-white shadow-xl shadow-black/20 mx-auto rounded-md"
//           asChild
//         >
//           <a href={buttonLink}>{buttonText}</a>
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// // ImageCardGrid component to handle multiple cards
// const ImageCardGrid = ({ cards }) => {
//   return (
//     <div className="flex flex-wrap gap-14 justify-center">
//       {cards.map((card, index) => (
//         <ImageCard
//           key={index}
//           image={card.image}
//           title={card.title}
//           description={card.description}
//           buttonText={card.buttonText}
//           buttonLink={card.buttonLink}
//         />
//       ))}
//     </div>
//   );
// };

// export default ImageCardGrid;