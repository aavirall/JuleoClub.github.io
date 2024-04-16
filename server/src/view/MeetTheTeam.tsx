import Varun from "../assets/Varun.png"
import Chiranjeev from "../assets/Chiranjeev.png"
import Google from "../assets/Google.svg"
import Amazon from "../assets/Amazon.svg"
import PnG from "../assets/Png.svg"
import McKinsey from "../assets/Mck.svg"
import Bcg from "../assets/Bcg.svg"
import Uber from "../assets/Uber.svg"
import Zomato from "../assets/Zomato.svg"
import Udaan from "../assets/udaan.svg"
import Inmobi from "../assets/inmobi.svg"
import Card from "./Cards";
import Card2 from "./Cards2";
import useWindowDimensions from "../hooks/useWindowDimensions"
import { mediumScreen } from "./utils"
import { useContext } from "react"
import GlobalStateContext from "./GlobalStateContext"


function MeetTheTeam() {

    const { width } = useWindowDimensions()
    const globalStateContext = useContext(GlobalStateContext)

    return (
        <div ref={globalStateContext.TeamRef} className="flex flex-col items-center text-center p-5 md:px-[8%] xl:px-[120px] md:pb-[120px] space-y-7">
            <h1 className="font-Frank text-5xl md:text-[56px] lg:text-[64px] text-wine-100 font-medium md:tracking-[-2.56px]">Meet the team</h1>
            <p className="text-base text-gray-80 md:text-2xl tracking-[1px] md:font-medium ">Our team boasts alumni from prestigious organizations such as: </p>
            
            <div className="flex flex-wrap justify-center">

                <div className="w-[100px] px-5 min-h-20 md:w-48 md:px-12 xl:w-52 xl:px-10 md:min-h-24"><img className="h-full" src={Google} alt="" /></div>
                <div className="w-[100px] px-5 min-h-20 md:w-48 md:px-12 xl:w-52 xl:px-10 md:min-h-24"><img className="h-full" src={Amazon} alt="" /></div>
                <div className="w-[100px] px-4 min-h-20 md:w-48 md:px-8  xl:w-52 xl:px-8  md:min-h-24"><img className="h-full" src={McKinsey} alt="" /></div>
                
                <div className="w-[80px] px-5 min-h-20 md:w-[160px] md:px-12 xl:w-[160px] xl:px-10"><img className="h-full" src={Bcg} alt="" /></div>
                
                <div className="w-[80px] px-5 min-h-20 md:w-[160px] md:px-12 xl:w-[160px] xl:px-10"><img className="h-full" src={PnG} alt="" /></div>
                <div className="w-[100px] px-5 min-h-20 md:w-48 md:px-12 xl:w-52 xl:px-10 md:min-h-24"><img className="h-full" src={Uber} alt="" /></div>
                <div className="w-[100px] px-5 min-h-20 md:w-48 md:px-12 xl:w-52 xl:px-10 md:min-h-24"><img className="h-full" src={Zomato} alt="" /></div>
                
                <div className="w-[80px] px-5 min-h-20 md:w-[160px] md:px-12 xl:w-[160px] xl:px-10"><img className="h-full" src={Udaan} alt="" /></div>
                <div className="w-[100px] px-5 min-h-20 md:w-48 md:px-12 xl:w-52 xl:px-10 md:min-h-24"><img className="h-full" src={Inmobi} alt="" /></div>
            </div>
            <div className="flex space-x-8">
                {width <= mediumScreen ? (
                    <div className="flex flex-col space-y-4">
                        <Card2 title="Varun Sud" subtitle="Founder-CEO @ Juleo" imageSrc={`${Varun}`} link="https://www.linkedin.com/in/varunsud/"></Card2>
                        <Card2 title="Chiranjeev Ghai" subtitle="Co-Founder @ Juleo" imageSrc={`${Chiranjeev}`} link="https://www.linkedin.com/in/chiranjeevghai/"></Card2>
                    </div>
                ) : (
                    <>
                        <Card title="Varun Sud" subtitle="Founder-CEO @ Juleo" imageSrc={`${Varun}`} link="https://www.linkedin.com/in/varunsud/"></Card>
                        <Card title="Chiranjeev Ghai" subtitle="Co-Founder @ Juleo" imageSrc={`${Chiranjeev}`} link="https://www.linkedin.com/in/chiranjeevghai/"></Card>
                    </>
                )}


            </div>

        </div>
    );
}

export default MeetTheTeam;
