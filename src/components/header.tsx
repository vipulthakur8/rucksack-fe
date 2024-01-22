import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="relative bg-bg-olive w-full h-[60px] md:h-[100px] font-inter">
            <div className=" w-[95%] md:w-[90%] lg:w-[85%] h-fit absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                <div className="w-fit flex items-center">
                    <img src="/Backpack_icon.svg" alt="rucksack icon" className="h-[25px] w-[25px] md:h-[50px] md:w-[50px] mr-[0.5rem] md:mr-[1rem] " />
                    <Link to={'/'} className="text-[16px] md:text-[22px] text-olive font-bold">
                        Rucksack
                    </Link>
                </div>
            </div>
           
            
        </div>
    )
}


export default Header;