import Buttonstar from "./Buttonstar";
function Favorites(){
    return (
        <div class = "bg-primary-100">
            <div class = "pt-7 text-center">
            <div class = "px-3">
                <h2 class = "block text-lg font-semibold pb-3 ">Get your favorites for free</h2>
            </div>
            <div class = " flex justify-around">
                <Buttonstar value = "25"></Buttonstar>
                <Buttonstar value = "50" ></Buttonstar>
                <Buttonstar value = "150"></Buttonstar>
                <Buttonstar value = "200"></Buttonstar>
                <Buttonstar value = "400"></Buttonstar>
            </div>
            <div class = "block static bg-primary-200 pb-7">
                <div>
                    <img src = "https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png"></img>
                </div>
                <div class = "px-3">
                    <h4 class = "font-semibold pb-3 text-3xl">Customize your drink</h4>
                    <p clas = "font-sans text-center block">Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.</p>


                </div>

            </div>
            </div>
        </div>
    );
}
export default Favorites;