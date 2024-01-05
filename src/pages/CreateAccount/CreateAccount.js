import Layout from "../../components/Layout";
import img2 from "../../assets/img2.png";
import "./CreateAccount.scss";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

export default function CreateAccount({setSection}) {
    const [fullName, setFullName] = useState(null);
    const [password, setPassword] = useState(null);
    const [accountName, setAccountname] = useState(null);

    function checkDisable() {
        if (!fullName || !password || !accountName) {
            return true;
        }
        return false;
    }
    function moveOn() {
        setSection(prev => prev + 1);
    }
    return (
        <Layout img={img2}>
            <div className="pt-3">
                <div className="ml-20 mt-10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/2560px-Monday_logo.svg.png" alt='logo' className="w-24 h-5 mb-14"/>
                    <h1 className="text-3xl mb-7">Create your account</h1>
                    <form className="flex flex-col gap-5 w-96">
                        <Input label="Full name" category="name" type="text" placeholder="Enter your full name" value={fullName} setState={setFullName} helper="Enter your full name"/>
                        <Input label="Password" category="password" type="password" placeholder="Enter at least 8 characters" value={password} setState={setPassword} helper="Use strong password *, /, \,"/>
                        <Input label="Account name" category="account-name" type="account-name" placeholder="For example, company's or department's name" value={accountName} setState={setAccountname} helper="Enter your account name"/>
                    </form>
                </div>
                <Button label="Continue" type="front" click={moveOn} disable={checkDisable()}/>
            </div>
        </Layout>
    )
}