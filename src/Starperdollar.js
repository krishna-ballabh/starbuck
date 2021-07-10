function Starperdollar(props){
    return(
        <div claass = "flex">
            <div class = "inline-block text-left pb-8">
                <p class = "font-semibold text-lg">{props.number}<span class="text-xs">&#9733; </span> per doller</p>
                <p class = "text-sm">{props.line}</p>
            </div>
        <div class = "  text-left">
            <div class = "flex">
                <div class = "pr-6 flex-shrink-none text-center block">
                    <img src = {props.link1} class = "max-w-none w-28"></img>
                </div>
                <div class = "text-left block">
                   <h3 class = "font-semibold text-base">{props.step1}</h3> 
                   <p class = "pt-6">{props.content1}</p>
                </div>
                
            </div>
            <div class = "flex">
                <div class = "pr-6 flex-shrink-none text-center block">
                    <img src = {props.link2} class ="max-w-none w-28" ></img>
                </div>
                <div class = "text-left block">
                   <h3 class = "font-semibold text-base">{props.step2}</h3> 
                   <p class = "pt-6">{props.content2}</p>
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default Starperdollar;