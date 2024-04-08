
import Banner from "./Banner";
import GetInTouch from "./GetInTouch";
import Header from "./Header";
import MeetTheTeam from "./MeetTheTeam";
import WhoWeAre from "./WhoWeAre";
import Footer from "./Footer";
import { useState, useEffect, useRef } from "react"
import GlobalStateContext from "./GlobalStateContext";

function HomeScreen(){

    // const [loading, setLoading] = useState(false) 

    const aboutUsRef = useRef(null)
    const teamRef = useRef(null)
    const contactRef = useRef(null)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setLoading(false)
    //     }, 2000)
    // })

    return (
        <GlobalStateContext.Provider value={{
            AboutUsRef: aboutUsRef,
            TeamRef: teamRef,
            ContactRef: contactRef
        }}>
            <div className="font-DMSans relative m-auto max-w-[1440px] min-w-[360px]">
                {/* <img className="hidden md:block md:absolute z-10 top-[216px] -left-[52px]" src={thread} /> */}
                <Header />
                <svg className="hidden md:block path_thread md:absolute z-10 md:top-[272px] xl:top-[246px] -left-[52px]" viewBox="0 0 1522 532" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M155.822 221.576C58.3517 247.159 32.516 324.066 102.838 362.739C173.161 401.412 184.46 334.415 53.0405 182.266C-32.6214 100.28 -25.0381 -62.3027 189.41 29.0619C457.47 143.268 885.194 198.068 1007.91 108.033C1106.08 36.005 1324.91 86.7498 1392.91 166.203C1460.91 245.655 1529.76 392.874 1379.91 499.423C1198.41 628.473 1116.58 306.744 1288.9 280.156C1426.76 258.886 1500.68 303.924 1520.41 329.102" stroke="#E5D0DB" strokeWidth="3" />
                </svg>
                <Banner />
                <WhoWeAre />
                <MeetTheTeam />
                <GetInTouch />
                <Footer />
            </div>
        </GlobalStateContext.Provider>
    );
}
export default HomeScreen;

