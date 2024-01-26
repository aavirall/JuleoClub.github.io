import linkedin from "../assets/LinkedinLogo_wine.svg"
interface CardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  link: string;
}

const Card = ({ title, subtitle, imageSrc, link }: CardProps) => (
  <div className="flex flex-col justify-center items-center shadow-md rounded-3xl w-[360px] h-[450px] py-8 px-4 space-y-4 border-[3px] border-wine-30">
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt={title} className="w-[240px] h-[240px] rounded-full" />
    </div>
    <div>
      <h2 className="text-2xl font-medium text-wine-120">{title}</h2>
      <p className="text-lg font-normal text-gray-600">{subtitle}</p>
    </div>
    <a href={link} target="_blank" className="w-[156px] h-[46px] border-2 border-wine-60 rounded-3xl flex items-center justify-center space-x-2">
      <img src={`${linkedin}`} className="w-7 h-7" />
      <p className="font-bold text-wine-100 text-lg">LinkedIn</p>
    </a>
  </div>
);

export default Card

