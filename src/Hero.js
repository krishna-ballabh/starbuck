import RoundedLink from "./RoundedLink";
function Hero(data){
    return (
        <div className = "static font-sans bg-cover h-800px bg-hero-image aspect-h-4 aspect-w-3">
        <div className = "static flex flex-col items-center px-4 py-8 pt-6 flex-shrink-none">
            <h1 className = "pt-5 text-xl font-semibold">FREE COFFEE</h1>
            <h1 className = "pt-3 text-xl font-semibold">IS A TAP AWAY</h1>
            <h3 class = "text-sm pt-5 font-normal tracking-widest">Join now to start earning Rewards.</h3>
            <div class = "pt-7">
            <RoundedLink theme = "green">join in the app</RoundedLink>
            </div>
            <a href = "https://www.starbucks.com/account/create" className = "pt-4 underline hover:no-underline">or join online</a>
            

        </div>
        </div>
    );
}
export default Hero;