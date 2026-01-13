import type { Image } from "../types";

export type CardProps = {
  title: string;
  description?: string;
  img: Image;
};

export default function CardCQ({ title, description, img }: CardProps) {
  return (
    <div className="@container">
      <div className="flex flex-col @md:flex-row bg-gray-200 gap-4 p-4 max-h-xs h-full">
        <img className="max-w-50 object-cover" src={img.src} alt={img.alt} />
        <div className="grid w-full gap-4">
          <div className="max-w-md">
            <h3 className="text-lg">{title}</h3>
            {description && (
              <p className="opacity-50 line-clamp-2">{description}</p>
            )}
          </div>
          <a
            className="px-4 py-2 ml-auto self-end flex items-center max-w-fit max-h-fit bg-blue-400 text-white"
            href="#"
          >
            Click →
          </a>
        </div>
      </div>
    </div>
  );
}
