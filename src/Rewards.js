function Rewards(props){
    return(
        <div class = "font-sans">
            
            <div class = "pl-5 flex md:flex md:flex-col">
            <div className = "md:flex md:justify-center">
            <img src = {props.link} class = " h-12 w-12"></img>
            </div>
            <div class = "pl-7 text-left pb-5 md:text-center">
                <h2 class = "md:text-lg md:text-base font-semibold">{props.heading}</h2>
                <p class = "pt-3  md:text-base text-sm font-sans">{props.children}</p>
            </div>
            </div>
        </div>
    );
}
export default Rewards;