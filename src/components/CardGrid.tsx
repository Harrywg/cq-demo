import CardCQ, { type CardProps } from "./CardCQ";

export type CardGridProps = {
  cardData: CardProps[];
  className?: string;
};

export default function CardGrid({ cardData, className }: CardGridProps) {
  return (
    <div className={`grid h-fit gap-4 ${className}`}>
      {cardData.map(({ title, img, description }) => (
        <CardCQ
          key={img.src}
          title={title}
          img={img}
          description={description}
        />
      ))}
    </div>
  );
}
