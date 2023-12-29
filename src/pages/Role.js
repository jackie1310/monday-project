import Layout from "../components/Layout";
import img3 from "../assets/img3.png";
import { useState } from "react";
import Option from "../components/Option";
import Button from "../components/Button";

export default function Role() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);
    function moveOn() {
        window.location = '/create';
    }

    return (
        <Layout img={img3}>
            <div className="pt-3">
                <div className="mx-10 mt-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                    <h1 className="text-2xl mb-4">Hey there, what brings you here today?</h1>
                    <form className="flex gap-5 flex-wrap">
                        <Option type="radio" label="Work" value="work" selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                        <Option type="radio" label="Personal" value="personal" selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                        <Option type="radio" label="School" value="school" selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                        <Option type="radio" label="Nonprofits" value="nonprofits" selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                    </form>
                    <h1 className="mt-14 text-2xl mb-4">What best describes your current role?</h1>
                    <form className="grid md:grid-cols-4 md:grid-flow-row gap-5">
                        <Option type="radio" label="Business Owner" value="business_owner" selectedOption={selectedRole} setSelectedOption={setSelectedRole}/>
                        <Option type="radio" label="Team leader" value="team_leader" selectedOption={selectedRole} setSelectedOption={setSelectedRole}/>
                        <Option type="radio" label="Team member" value="team_member" selectedOption={selectedRole} setSelectedOption={setSelectedRole}/>
                        <Option type="radio" label="Freelancer" value="freelancer" selectedOption={selectedRole} setSelectedOption={setSelectedRole}/>
                        <Option type="radio" label="Director" value="director" selectedOption={selectedRole} setSelectedOption={setSelectedRole}/>
                        <Option type="radio" label="C_level" value="c_level" selectedOption={selectedRole} setSelectedOption={setSelectedRole}/>
                        <Option type="radio" label="VP" value="vp" selectedOption={selectedRole} setSelectedOption={setSelectedRole}/>
                    </form>
                </div>
                <Button label="Continue" type="front" click={moveOn}/>
            </div>
        </Layout>
    )
}