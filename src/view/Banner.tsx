import illus_mobile from "../assets/Illus_mobile_web.webp"
function Banner() {

    return (
        <div className="relative bg-white">
            <div className="flex flex-col items-center md:flex-row p-5 md:px-[8%] xl:px-[120px] md:py-[88px] md:space-x-8">
                <div className="flex flex-col text-start md:items-start space-y-4  md:w-1/2 z-10 mt-6 md:mt-0 md:pt-[150px]">
                    <div className="max-w-[680px] md:max-w-xl space-y-6">
                        <h1 className="font-Frank text-6xl xl:text-[72px] font-normal md:font-medium xl:tracking-[-2.88px]">A Warm Welcome To <span className="text-wine-100">Juleo</span>
                        </h1>
                        <p className="text-sm xl:text-lg font-normal text-gray-600">Juleo is a Delhi NCR based Applied AI & Consumer Tech company tackling one of the largest unsolved consumer internet problems of our time.</p>
                    </div>
                </div>
                <div className="md:ml-auto z-10 md:w-1/2 max-w-sm md:max-w-full">
                    <img
                        className=""
                        src={illus_mobile}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
