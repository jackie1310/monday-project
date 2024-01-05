import Layout from "../components/Layout";
import img3 from "../assets/img3.png";
import { useState } from "react";
import Option from "../components/Option";
import Button from "../components/Button";
import { Radio } from "antd";

export default function Role({setSection}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);
    function moveOn() {
        setSection(prev => prev + 1);
    }

    return (
        <Layout img={img3}>
            <div className="pt-3">
                <div className="mx-10 mt-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                    <h1 className="text-2xl mb-4">Hey there, what brings you here today?</h1>
                    <Radio.Group className="flex gap-5 flex-wrap" value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                        <Option value="Work"/>
                        <Option value="Personal"/>
                        <Option value="School"/>
                        <Option value="Nonprofits"/>
                    </Radio.Group>
                    <h1 className="mt-14 text-2xl mb-4">What best describes your current role?</h1>
                    <Radio.Group className="flex flex-wrap gap-5" value={selectedRole} onChange={e => setSelectedRole(e.target.value)}>
                        <Option value="Business Owner"/>
                        <Option value="Team leader"/>
                        <Option value="Team member"/>
                        <Option value="Freelancer"/>
                        <Option value="Director"/>
                        <Option value="C_level"/>
                        <Option value="VP"/>
                    </Radio.Group>
                </div>
                <Button label="Continue" type="front" click={moveOn} disable={selectedOption === null || selectedRole === null ? true : false}/>
            </div>
        </Layout>
    )
}