
function Button({text, ID, trackState, event, showList}){
   
    return (
        <button id={ID} className={`text-white text-center p-[10px]  min-w-[70px] rounded-[18px]  focus:outline-2 focus:outline-offset-2 focus:outline-orange-500  cursor-pointer ${trackState === ID ? "bg-orange-600 hover:bg-orange-700" : "bg-white/20 hover:bg-white/30"}`} onClick={() => {
            event(ID)
            showList && showList()
        }}>{text}</button>
    )
}

export default Button