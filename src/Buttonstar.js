function Buttonstar(props){
    return(
        <div>
            <button class = " px-2 pt-2 pb-3 items-center flex-grow">
                <div class = "flex">
                <h3 class = "text-2xl font-semibold flex-grow">{props.value} <span class="text-primary-gold text-xs">&#9733;</span></h3>
                <div class = "visible h-1 bg-primary-500 "></div>
                </div>
            </button>
        </div>
    );
}
export default Buttonstar;