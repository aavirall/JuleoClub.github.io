import office_space from "../assets/office_space.png"
import Checkmark from "../assets/Check.svg"
import Envelope from "../assets/EnvelopeSimple.svg"
import LinkedInWhite from "../assets/LinkedinLogo_white.svg"
import MapPin from "../assets/MapPinLine.svg"
import Location from "../assets/location.png"
import GlobalStateContext from "./GlobalStateContext"
import { useContext } from "react"
function GetInTouch() {
    const globalStateContext = useContext(GlobalStateContext)
    return (
        <div ref={globalStateContext.ContactRef} className="bg-wine-100 text-white flex flex-col items-center text-center px-5 py-7 md:px-[8%] xl:px-[120px] md:py-[60px] space-y-7 2lg:rounded-3xl">
            <div className="flex flex-col space-y-7">
                <h1 className="font-Frank text-5xl md:text-[56px] lg:text-[64px] font-medium md:tracking-[-2.56px]">Get in touch</h1>
                {/* <p className=" text-lg md:text-2xl font-medium tracking-[0.72px] md:tracking-[1px]">We are always here to help with what you need</p> */}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-4">
                <div className="flex flex-col space-y-6 font-medium text-start text-lg md:text-2xl tracking-[0.72px] md:w-1/2 md:pr-[120px]">
                    <div className="flex space-x-2">
                        <img className="w-7" src={Envelope} />
                        <a className="underline" href="mailto:help@juleo.club" target="_blank">help@juleo.club</a>
                    </div>
                    <div className="flex space-x-2">
                        <img className="w-7" src={LinkedInWhite} />
                        <a className="underline" href="https://www.linkedin.com/company/juleo-club/" target="_blank">LinkedIn</a>
                    </div>
                    <div className="flex-col">
                        <div className="flex space-x-2">
                            <img className="w-7" src={MapPin} />
                            <a className="underline" href="https://maps.app.goo.gl/Kjk5SJztRtQcy9tg6" target="_blank">Global Business Park</a>
                        </div>
                        <div className="text-xs md:text-base py-2 font-normal tracking-[0.48px] md:tracking-[0.64px] opacity-75 max-w-96">(Near Guru Dronacharya Metro Station Tower D) Mehrauli-Gurgaon road, Sikanderpur, Sector 26 Gurugram, Haryana - 122002</div>
                    </div>
                </div>
                <div className="flex justify-center items-center md:w-1/2">
                    <a href="https://maps.app.goo.gl/Kjk5SJztRtQcy9tg6" target="_blank">
                        <img className="rounded-2xl" src={Location} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;
