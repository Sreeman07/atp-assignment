function NavBar(){
    return(
        <div className="flex justify-between bg-blue-500 py-6 px-8 ">
        <h1 className="text-2xl">LOGO</h1>
        <ul className="flex gap-4">
        <li><a href="">home</a></li>
        <li><a href="">register</a></li>
        <li><a href="">login</a></li>
        </ul>
        </div>
        
)
}
export default NavBar