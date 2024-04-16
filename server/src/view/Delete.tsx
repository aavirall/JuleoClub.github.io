import Header2 from "./Header2";
import Footer from "./Footer";
import {RenderElement} from "./common";


function DeleteData() {
    return (
        <div className="flex-col h-screen">
            <Header2 />
            <div className="px-4 flex-col items-center justify-center md:justify-normal md:px-[120px] space-y-2 text-sm">
                <div className="flex-col font-Frank space-y-4 mt-4">
                    <p className="font-bold">To request the deletion of your Juleo account, please follow these steps:</p>
                </div>
                
                <div className="space-y-2">
                    <RenderElement left={<p className="font-bold">1.</p>} right={
                        <div className="space-y-2">
                            <div className="space-y-2">
                                <p className=""><span className="font-bold">Verify Your Identity: </span>Send an email to genie@juleo.club from the email address associated with your account.</p>
                            </div>
                        </div>
                    } />
                    <RenderElement left={<p className="font-bold">2.</p>} right={
                        <div className="space-y-2">
                            <div className="space-y-2">
                                <p className=""><span className="font-bold">Confirmation: </span>You'll receive a confirmation call to your registered phone number. To protect your account, we'll ask you to verify some information. Once your identity is confirmed, we'll proceed with deleting your account as outlined in our privacy policy.</p>
                            </div>
                        </div>
                    } />
                    <RenderElement left={<p className="font-bold">3.</p>} right={
                        <div className="space-y-2">
                            <div className="space-y-2">
                                <p className="">Below are highlighted sections from our privacy policy regarding data deletion. For more details, visit our complete privacy policy <span className="text-blue-700"><a href="/privacy" target="_blank">here</a> </span>.</p>
                            </div>
                        </div>
                    } />
                    <br/>
                    <div>
                    <RenderElement left={<p className="font-bold">1.</p>} right={
                        <div className="space-y-2">
                            <div className="space-y-2">
                            <p><span className="font-bold">Paragraph 6: </span>Your Rights and Choices </p>
                                <RenderElement left={"6(e)"} right={<p>You may request that we delete the personal information we keep about you. You can exercise your right to delete by submitting a request on the Platform or contacting us anytime at genie@juleo.club.</p>} />
                            </div>
                        </div>
                    } />
                    <br/>
                    <RenderElement left={<p className="font-bold">1.</p>} right={
                        <div className="space-y-2">
                            <div className="space-y-2">
                            <p><span className="font-bold">Paragraph 8: </span>Data Retention and Deletion </p>
                                <RenderElement left={"(a)"} right={<p>We will retain your information only for as long as it is necessary for providing you with the services available on the Platform, to comply with legal obligations or until you request termination of your account with us, whichever is later, but in any case, we do not retain any of your information beyond 5 years, except where required by law. Post-termination of your account, we may continue to use your anonymised data aggregated or combined with other User’s anonymised data. In cases where a User has violated the terms and conditions of using Our Platform or submits a request that his/her personal information be deleted from the Platform, We will promptly take necessary actions to delete your information, in accordance with Paragraph 6 (e). </p>} />
                                <RenderElement left={"(b)"} right={<p>If you wish to withdraw your consent for processing your information, you may submit a request at genie@juleo.club. However, we will continue to retain information which is required to be retained under the applicable laws.</p>} />
                            </div>
                        </div>
                    } />
                    </div>
                </div>
            </div>
            <div className="mt-auto">
            <Footer />
            </div>
        </div>
    );
}



export default DeleteData;
