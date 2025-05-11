import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"

function Navbar() {
    return (
        <div className="p-[13px] bg-[#e0e0e0] rounded-[15px] flex items-center justify-between">
            <div>
                <div><img src="/images/logo.svg"/></div>
            </div>

            <div>
                <button className='text-white text-[20px] px-[15px] py-[10px] bg-[#323646] rounded-[10px] focus:outline-2 focus:outline-offset-2 focus:outline-orange-500'>
                    {/* <FontAwesomeIcon icon={faSun} /> */}
                    <img src="/images/icon-sun.svg" />
                </button>
            </div>
        </div>
    )
}

export default Navbar