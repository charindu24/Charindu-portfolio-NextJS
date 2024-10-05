// Grid.tsx
import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '../data/index'; // Adjust the path if necessary

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(({ id, title, className, description, img, imgClassName, titleClassName, 
        spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title} 
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          /> 
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
