
function Button({text, ID, trackState, event, showList}){
   
    return (
        <button id={ID} className={` text-center p-[10px]  min-w-[70px] rounded-[18px]  focus:outline-2 focus:outline-offset-2 focus:outline-orange-500  cursor-pointer ${trackState === ID ? "bg-orange-600 hover:bg-orange-700 dark:text-[#121b40] text-white" : "dark:bg-white/20 bg-white shadow-2xl border-[1px] border-[rgba(0,0,0,0.5)] hover:bg-white/30 dark:text-white text-[#121b40] "}`} onClick={() => {
            event(ID)
            showList && showList()
        }}>{text}</button>
    )
}

export default Button