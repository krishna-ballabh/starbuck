function Starperdollar(props){
    return(
        <div class = "md:flex md:pl-12 md:justify-between md: pr-36">
            <div class = " inline-block text-left pb-8">
                <p class = "font-semibold text-lg">{props.number}<span class="text-xs">&#9733; </span> per doller</p>
                <p class = "text-sm">{props.line}</p>
            </div>
        <div class = " md:flex text-left ">
            <div class = "w-full md:w-96 md:h-96 flex">
                <div class = "pr-6 flex-shrink-none text-center block">
                    <img src = {props.link1} class = "max-w-none w-28"></img>
                </div>
                <div class = "text-left block">
                   <h3 class = "font-semibold text-base">{props.step1}</h3> 
                   <p class = "pt-6 text-sm md:text-base">{props.content1}</p>
                </div>
                
            </div>
            <div class = "w-full md:w-96 md:h-96 flex">
                <div class = "pr-6 flex-shrink-none text-center block">
                    <img src = {props.link2} class ="max-w-none w-28" ></img>
                </div>
                <div class = "text-left block">
                   <h3 class = "font-semibold text-base">{props.step2}</h3> 
                   <p class = "pt-6 text-sm md:text-base">{props.content2}</p>
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default Starperdollar;