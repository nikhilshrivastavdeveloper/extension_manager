import "./btn.css";


function Btn({ state, name, toggleActiveAndInactiveState }) {

    return (
        
        <div>
            <button
                onClick={() => toggleActiveAndInactiveState(name)}
                className={`focus:outline-2 focus:outline-offset-2 focus:outline-orange-500 flex items-center cursor-pointer rounded-full w-[50px] p-1 transition-colors duration-300 ${state ? "bg-orange-600" : "dark:bg-white/30 bg-gray-400"
                    }`}
            >
                <span
                    className={`${state ? "translate-x-[calc(100%+1px)]" : "translate-x-0"} bg-white rounded-full h-[20px] w-[20px] inline-block transition-transform duration-300`}
                ></span>
            </button>
        </div>

    )
}

export default Btn

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faToggleOn} from '@fortawesome/free-solid-svg-icons'
// import {faSun, faMoon} from "@fortawesome/free-regular-svg-icons"
// import Btn from './btn';


// function App() {

//   return (
//     <>
//     <h1>hello world</h1>
//     <FontAwesomeIcon icon={faToggleOn} />
//     <FontAwesomeIcon icon={faSun} />
//     <FontAwesomeIcon icon={faMoon} />
//     <Btn />
//     </>

//   )
// }