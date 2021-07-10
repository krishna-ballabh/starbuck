function Step(props){
    return(
        <div class = "flex pb-12 w-full">
                    <div class = "pr-6 flex-shrink-none">
                        <img src = {props.link} class = "h-auto max-w-full w-28"></img>
                    </div>
                    <div>
                        <h2 class = "font-semibold text-base">{props.heading}</h2>
                        <p class = "pt-6">{props.children}</p>
                        <a class = "min-h-6 mt-6 mb-6 underline text-primary-700 hover:no-underline">Learn more</a>
                    </div>
                </div>
    );
}

export default Step;