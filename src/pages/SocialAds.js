import Layout from "../components/Layout";
import img4 from "../assets/img4.png"
import Button from "../components/Button";
import Option from "../components/Option";
import { SocialSites } from "../data/SocialSites";
import { useState } from "react";
import { Checkbox } from "antd";

export default function SocialAds({setSection}) {
    const [selectedAds, setSelectedAds] = useState(null);
    function moveOn() {
        setSection(prev => prev + 1);
    }
    function moveBack() {
        setSection(prev => prev - 1);
    }

    return (
        <Layout img={img4}>
            <div className="pt-3">
                <div className="mx-10 mt-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                    <h1 className="text-2xl mb-4">One last question, how did you hear about us?</h1>
                    <Checkbox.Group value={selectedAds} className="flex flex-wrap gap-5">
                        {SocialSites.map((site) => (
                            <Checkbox id={site.value} name={site.value} value={site.label} onChange={e => setSelectedAds(e.target.value)} className="flex text-sm gap-1 border px-4 py-2 rounded-3xl border-slate-400">{site.label}</Checkbox>
                        ))}
                    </Checkbox.Group>
                </div>
                <Button label="Continue" type="front" click={moveOn} disable={selectedAds === null ? true : false}/>
                <Button label="Back" type="back" click={moveBack} disable={selectedAds === null ? true : false}/>
            </div>
        </Layout>
    )
}