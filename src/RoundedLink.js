function RoundedLink(props){
    const themeclasses = 
    (props.theme ==="green"?"text-white bg-primary-500":"text-white bg-primary-400");
    return (
        <a href = {props.linkUrl} className = {"min-h-8 max-h-8 flex-shrink-0 px-4 font-sans py-2 flex items-center justify-cotent-center  font-semibold text-sm tracking-wide border border-white rounded-full text-13 " + themeclasses} >{props.children}</a>
    );
}
export default RoundedLink;