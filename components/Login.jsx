import Image from "next/image"
import LoginForm from "./LoginForm"

function Login() {
  return (
    <>
        <section className="bg-slate-200 w-full min-h-screen h-full justify-center items-center flex">
            <div id="main_area" className="max-w-[992px] w-[95%] md:w-full h-[600px] mx-auto shadow-lg  rounded-[25px] bg-white overflow-hidden">
            <div className="flex flex-col md:flex-row w-full h-full relative justify-between items-center">
                <div className="bg-white w-full h-full flex flex-col justify-center items-center py-10">
                    <h2 className="text-3xl font-semibold text-center text-p-color">Login Form</h2>
                    <p className="text-center my-3 text-slate-700">Enter your information and login!</p>
                    <LoginForm/>
                    <div>
                        <h3 className="text-slate-700 text-center mt-8 block"><span className="font-semibold ">Login</span> with others</h3>
                        <ul className="max-w-[300px] mx-auto mt-5 flex flex-col gap-4">
                            <li><a className="py-3 text-center px-5 border border-slate-200 shadow-sm rounded-2xl flex justify-center items-center gap-3 hover:bg-slate-300" href="#"> <span><Image src='/img/google.svg' width={22} height={22} alt="logo"/></span> Login with Google</a></li>
                            <li><a className="py-3 text-center px-5 border border-slate-200 shadow-sm rounded-2xl flex justify-center items-center gap-3 hover:bg-slate-300" href="#"> <span><Image src='/img/github.svg' width={22} height={22} alt="logo"/></span> Login with Github</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-p-color w-full h-full bg-[url('/img/shape.svg')] bg-center bg-cover md:flex items-center justify-center hidden">
                    <div className="border border-slate-200 bg-[#8A7AF3] max-w-[300px] max-h-[400px] rounded-xl flex justify-end pt-5 relative">
                        <Image className="w-[95%] h-auto block ml-10" src='/img/women.svg' width={540} height={540} alt="women image" />
                        <Image className="absolute bottom-[15%] -left-6" src='/img/sun-icon.svg' width={60} height={60} alt="icon" />
                    </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Login