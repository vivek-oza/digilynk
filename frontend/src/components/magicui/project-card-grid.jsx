import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ src, title, description, link }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      className="w-full"
    >
      <Card className="w-full transition-all pt-0 gap-3 flex flex-col border-none overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg">
        <div className="aspect-[16/9] w-full bg-gray-200 overflow-hidden">
          {src ? (
            <motion.img
              src={src}
              alt={title}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-pink-500">Image</span>
            </div>
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
            variant="link"
            className="p-0 text-neutral-600 group mx-auto"
            onClick={() => window.location.href = link}
          >
            <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
              View project <ArrowRight className="h-4 w-4" />
            </span>
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

// ProjectCardGrid component to handle multiple cards
export default function ProjectCardGrid({ cards }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={container}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto"
    >
      {cards.map((card, index) => (
        <ProjectCard
          key={index}
          src={card.src}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </motion.div>
  );
}










// "use client";

// import React from 'react';
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// // ShadcnCard component with 3D effects
// const ThreeDShadcnCard = ({ src, title, description, link }) => {
//     const handleCardClick = () => {
//         window.location.href = link;
//     };

//     return (
//         <div
//             className="block h-autp w-full "
//             onClick={handleCardClick}
//             role="link"
//             tabIndex={0}
//             onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
//         >
//             <CardContainer

//                 className="inter-var h-full cursor-pointer"
//             >
//                 <CardBody className="py-0 m-6 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.5] border-black/[0.1] w-full h-full rounded-3xl p-4 border flex flex-col">
//                     <CardItem translateZ="100" className="w-full">
//                         <div className=" aspect-[16/9.1] bg-zinc-200 rounded-2xl overflow-hidden">
//                             {src ? (
//                                 <img
//                                     src={src}
//                                     alt={title}
//                                     className="object-contain p-1 rounded-[1.2rem] size-full group-hover/card:shadow-xl"
//                                 />
//                             ) : (
//                                 <div className="w-full h-full flex items-center justify-center">
//                                     <span className="text-pink-500">Image</span>
//                                 </div>
//                             )}
//                         </div>
//                     </CardItem>

//                     <div className='flex flex-col justify-between flex-grow mt-6'>
//                         <div>
//                             <CardItem
//                                 translateZ="50"
//                                 className="text-xl font-semibold text-zinc-800 dark:text-white"
//                             >
//                                 {title}
//                             </CardItem>
//                             <CardItem
//                                 as="p"
//                                 translateZ="60"
//                                 className="text-base tracking-wide font-normal text-zinc-600 dark:text-neutral-300 mt-4"
//                             >
//                                 {description}
//                             </CardItem>
//                         </div>

//                         <CardItem translateZ={20} className="mt-6 self-end">
//                             <Button
//                                 variant="link"
//                                 className="p-0 text-neutral-600 dark:text-white group"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     window.location.href = link;
//                                 }}
//                             >
//                                 <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
//                                     View project <ArrowRight className="h-4 w-4" />
//                                 </span>
//                             </Button>
//                         </CardItem>
//                     </div>
//                 </CardBody>
//             </CardContainer>
//         </div>
//     );
// };

// // CardGrid component that accepts an array of card details
// export default function ProjectCardGrid({ cards }) {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-20 py-0">
//             {cards.map((card, index) => (
//                 <ThreeDShadcnCard
//                     key={index}
//                     src={card.src}
//                     title={card.title}
//                     description={card.description}
//                     link={card.link}
//                 />
//             ))}
//         </div>
//     );
// }