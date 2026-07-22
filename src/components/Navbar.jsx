console.log("Navbar Loaded");
function Navbar(){
    return(
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
             🎓
            </div>

            <h1 className="text-2xl font-bold text-slate-800">
             StudySphere
            </h1>

            <ul className="flex gap-10 text-slate-600 font-medium">
                <li className="cursor-pointer hover:text-indigo-600 transition">
                    Dashboard</li>
                <li className="cursor-pointer hover:text-indigo-600 transition">
                    Subjects</li>
                <li className="cursor-pointer hover:text-indigo-600 transition">
                    Tasks</li>
            </ul>

            <div className="w-11 h-11 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold shadow-md">
             TK
            </div>
        </nav>
    );
}

export default Navbar;