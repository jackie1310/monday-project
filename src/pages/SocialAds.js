import Layout from "../components/Layout";
import img4 from "../assets/img4.png"
import Button from "../components/Button";
import Option from "../components/Option";
import { SocialSites } from "../data/SocialSites";
import { useState } from "react";

export default function SocialAds() {
    const [selectedAds, setSelectedAds] = useState(null);
    function moveOn() {
        window.location = '/create';
    }
    function moveBack() {
        window.location = '/';
    }

    return (
        <Layout img={img4}>
            <div className="pt-3">
                <div className="mx-10 mt-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                    <h1 className="text-2xl mb-4">One last question, how did you hear about us?</h1>
                    <form className="flex flex-wrap gap-5">
                        {SocialSites.map((site) => (
                            <Option type={site.type} label={site.label} value={site.value} selectedOption={selectedAds} setSelectedOption={setSelectedAds}/>
                        ))}
                    </form>
                </div>
                <Button label="Continue" type="front" click={moveOn}/>
                <Button label="Back" type="back" click={moveBack}/>
            </div>
        </Layout>
    )
}