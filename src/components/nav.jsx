import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"

function Navbar({darkModeFn, isDakModeOn}) {
    return (
        <div className="p-[13px] dark:bg-[#e0e0e0] bg-white rounded-[15px] flex items-center justify-between">
            <div>
                <div><img src="/images/logo.svg"/></div>
            </div>

            <div>
                <button className='text-white text-[20px] px-[15px] cursor-pointer py-[10px] dark:bg-[#323646] bg-gray-300 rounded-[10px] focus:outline-2 focus:outline-offset-2 focus:outline-orange-500' onClick={() => darkModeFn((prev) => !prev)}>
                    {/* <FontAwesomeIcon icon={faSun} /> */}
                    {/* <img src="/images/icon-sun.svg" /> */}
                    <img src={`${isDakModeOn ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}`} />
                </button>
            </div>
        </div>
    )
}

export default Navbar