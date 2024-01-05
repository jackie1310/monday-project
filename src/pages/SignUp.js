import Layout from "../components/Layout";
import img1 from "../assets/img1.png";
import google from "../assets/google.png";
import Button from "../components/Button";
import Line from "../components/Line";
import { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState(null);
    function moveToCreate() {
        window.location = '/create';
    }
    return (
        <Layout img={img1}>
            <div className='left-0 flex flex-col items-center justify-center mt-10'>
                <h1 className="text-3xl hidden md:block">Welcome to monday.com</h1>
                <h1 className="text-2xl my-20 md:hidden block">Create new account</h1>
                <h3 className="mb-5 hidden md:block">Get started - it's free. No credit card needed</h3>
                <div className='flex flex-col gap-3 w-screen px-4 md:px-0 md:w-80'>
                    <button className="flex text-sm gap-3 items-center justify-center rounded-sm border border-gray-400 md:w-80 py-2 transform transition duration-300 ease-in-out hover:bg-slate-300 active:scale-75">
                        <img src={google} className="w-8 h-8"alt='google'/>
                        Continue with Google
                    </button>
                    <div class="flex items-center">
                        <Line/>
                        <div class="mx-4 text-gray-500">Or</div>
                        <Line/>
                    </div>
                    <input type='email' placeholder='name@company.com' value={email} onChange={e => setEmail(e.target.value)} className='relative border border-gray-400 px-4 py-1'/>
                    <Button label="Continue" type="none" click={moveToCreate} disable={email === null ? true : false}/>
                    <Button label="Create account" type="responsive" click={moveToCreate} disable={email === null ? true : false}/>
                </div>
                <div className='mt-10 hidden md:block'>
                    <h3 className='max-w-60 mx-auto'>By proceeding, you agree to the</h3> 
                    <h3 className='max-w-64 mx-auto'><a href='/'>Terms of Service</a> and <a href=''>Privacy Policy</a></h3>
                </div>
                <div className='mt-40 hidden md:block'>
                    <h3>Already have an account? <a href="/">Log in</a></h3>
                </div>
            </div>  
        </Layout>
    )
}