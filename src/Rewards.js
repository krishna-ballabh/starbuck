function Rewards(props){
    return(
        <div class = "font-sans">
            
            <div class = "pl-5 flex">
            <img src = {props.link} class = "h-12 w-12"></img>
            <div class = "pl-7 text-left pb-5">
                <h2 class = "text-xm font-semibold">{props.heading}</h2>
                <p class = "pt-3  text-sm font-sans">{props.children}</p>
            </div>
            </div>
        </div>
    );
}
export default Rewards;