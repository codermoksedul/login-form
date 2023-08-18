
function LoginForm() {
  return (
    <>
        <form className="max-w-[350px] mx-auto" action="">
            <div className="w-full bg-[#F3F1FF] rounded-xl overflow-hidden relative mt-5">
            <input className="bg-transparent w-full h-full py-3 px-5 pl-10" type="text" placeholder="Username" required/>
            <span className="text-slate-700 absolute left-3 top-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            </span>
            </div>
            <div className="w-full bg-[#F3F1FF] rounded-xl overflow-hidden relative mt-5">
            <input className="bg-transparent w-full h-full py-3 px-5 pl-10" type="password" placeholder="Password" required/>
            <span className="text-slate-700 absolute left-3 top-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            </span>
            </div>
            <button className="py-3 bg-p-color text-white px-10 rounded-full block mx-auto mt-5 hover:bg-white hover:text-p-color hover:shadow-md transition-all duration-300" type="submit">Login</button>
        </form>
    </>
  )
}

export default LoginForm