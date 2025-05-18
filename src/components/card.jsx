
import Btn from "./btn.jsx";

function Card({ logo, name, description, isActive, removeExtension, toggleActiveAndInactiveState }) {

    return (
        <div className="rounded-[10px] p-[20px] border-[1px] border-white max-h-[205px] overflow-auto w-[100%] bg-white shadow-2xl dark:bg-gray-600/20">
            <div className=" mb-[20px] flex text-white justify-between">
                <div>
                    <img src={logo} />
                </div>
                <div className="ml-[15px]">
                    <h1 className="mt-[-6px] dark:text-white text-[#121b40] font-bold text-[20px]">{name}</h1>
                    <p className="dark:text-white text-black">{description}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <button className="rounded-[20px] dark:bg-gray-600 bg-white border-[1px] border-[rgba(0,0,0,0.5)] hover:border-orange-500 dark:text-white text-[#121b40] p-[10px] cursor-pointer hover:bg-orange-500 dark:hover:text-black  hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-orange-500" onClick={() => removeExtension(name)}>Remove</button>
                <Btn state={isActive} name={name} toggleActiveAndInactiveState={toggleActiveAndInactiveState} />
            </div>
        </div>
    )
}

export default Card;    