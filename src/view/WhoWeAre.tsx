import Checkmark from "../assets/Check.svg"
import office_space from "../assets/office_space.png"
import Illustration from "../assets/grill.svg"
import office_comp from "../assets/office_illus_comp.png"
import team from "../assets/team.jpeg"
import team_comp from "../assets/team_comp.webp"
import decoration from "../assets/decoration.svg"
import { useContext } from "react"
import GlobalStateContext from "./GlobalStateContext"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { mediumScreen } from "./utils"


function WhoWeAre() {
    const globalStateContext = useContext(GlobalStateContext)
    const { width } = useWindowDimensions();

    return (

        // <div className="text-center md:my-[120px] bg-white space-y-4 h-full">
        <div ref={globalStateContext.AboutUsRef} className="text-center space-y-7 h-full p-5 md:px-[8%] xl:px-[120px] md:py-[120px]">
            <h1 className="font-Frank text-5xl md:text-[56px] lg:text-[64px] text-wine-100 font-medium md:tracking-[-2.56px]">Who are we?</h1>
            <div className="text-gray-80 text-lg md:text-2xl md:font-medium tracking-[0.72px] md:tracking-[1px] md:px-[8%]">
                <p>Our team is a vibrant mix of smart, passionate individuals, united by a commitment to excellence and collaboration.</p>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:pt-8 space-x-4">
                {/* <div className="relative flex justify-center items-center md:w-1/2 p-3 md:pl-0 md:pt-0 md:pr-[5%] md:pb-6"> */}
                <div className="relative flex justify-center items-center md:w-1/2 p-3 md:p-0">
                    {/* <img className="relative h-[252px] min-w-[320px] md:h-[320px] md:min-w-[300px] md:min-h-[320px] xl:h-[400px]" src={team}/> */}
                    {/* <img className="rounded-2xl" src={team}/>
                    <img className="absolute rounded-2xl right-0 bottom-0 w-[88px]" src={decoration}/> */}
                    {/* <img className="rounded-2xl" src={team_scomp}/> */}
                    {width < mediumScreen ? (
                        <div className="relative">
                            <img className="absolute -right-4 -bottom-8 w-[40%] z-0" src={decoration}/>
                            <img className="absolute rounded-2xl" src={team}/>
                            <img className="rounded-2xl" src={team}/>
                        </div>
                        

                    ) : (
                        <img className="" src={team_comp}/>
                    )}

                </div>
                <div className="font-normal text-start text-gray-80 text-sm md:text-lg tracking-[0.56px] md:w-1/2 pb-5 grid grid-row-3 gap-4">
                    <div className="flex space-x-3">
                        <div>
                            <img
                                className="min-w-6 w-6 h-6 md:min-w-8 md:h-8 md:w-8" 
                                src={Checkmark}
                                alt=""
                            />
                        </div>
                        <div className="">
                            We embody a culture of respect and high performance. We are a sports team with a heart aka a caring meritocracy, where success is measured not just by outcomes but by teamwork.
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <div>
                            <img
                                className="min-w-6 w-6 h-6 md:min-w-8 md:h-8 md:w-8" 
                                src={Checkmark}
                                alt=""
                            />
                        </div>
                        <div className="">
                            Our values are respecting the user, the opportunity and each other (copied with pride from Google!)
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <div>
                            <img
                                className="min-w-6 w-6 h-6 md:min-w-8 md:h-8 md:w-8" 
                                src={Checkmark}
                                alt=""
                            />
                        </div>
                        <div className="">
                            We are backed by unicorn founders, serial entrepreneurs with exits, tech & consumer industry stalwarts and seasoned investment professionals/bankers.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;
