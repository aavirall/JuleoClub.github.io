import linkedin from "../assets/LinkedinLogo_wine.svg"
interface CardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  link: string;
}

const Card2 = ({ title, subtitle, imageSrc, link }: CardProps) => (
  <div className=" bg-white shadow-md rounded-3xl w-[320px] h-[152px] flex border-[1px] border-wine-30 px-4 py-6">
    <img src={imageSrc} alt={title} className="rounded-full w-[102px]" />

    <div className="flex flex-col px-4">
      <div className="text-start flex flex-col h-full">
        <div className="h-1/2">
          <h2 className="text-lg text-wine-120">{title}</h2>
          <p className="text-sm font-normal text-gray-600">{subtitle}</p>
        </div>

        <a href={link} target="_blank" className="mt-auto w-[120px] h-[32px] border-[1px] border-wine-100 rounded-2xl flex items-center justify-center space-x-2">
          <img src={`${linkedin}`} className="w-5 h-5 " />
          <p className="font-bold text-wine-100 text-sm">LinkedIn</p>
        </a>
      </div>
    </div>


  </div>
);

export default Card2

