import "./card.css";
import Btn from "./btn.jsx";

function Card({ logo, name, description, isActive, removeExtension, toggleActiveAndInactiveState }) {

    return (
        <div className="rounded-[10px] p-[20px] border-[1px] border-white bg-gray-600/20 dynamicWidth">
            <div className=" mb-[20px] flex text-white justify-between">
                <div>
                    <img src={logo} />
                </div>
                <div className="ml-[15px]">
                    <h1 className="mt-[-6px]">{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <button className="rounded-[20px] bg-gray-600 p-[10px] cursor-pointer hover:bg-orange-500 hover:text-black  text-white focus:outline-2 focus:outline-offset-2 focus:outline-orange-500" onClick={() => removeExtension(name)}>Remove</button>
                <Btn state={isActive} name={name} toggleActiveAndInactiveState={toggleActiveAndInactiveState} />
            </div>
        </div>
    )
}

export default Card;    