import Step from "./Steps"
function Extras(){
    return(
        <div class = "mb-16 block">
        <div class = "pt-14 block mb-16 max-w-screen-xl">
            <div class = "items-center">
                <div class = "text-center">
                    <h2 class = "font-semibold text-lg">Endless Extras</h2>
                    <p class = "pt-6 text-center">Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee</p>
                </div>
            <div class = "pl-6 flex-col pt-12">
                <Step heading = "Fun freebies" link = "https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg">Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</Step>
                <Step heading = "Order & pay ahead" link = "	https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg">Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</Step>
                <Step heading = "Get to free faster" link = "https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg">Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</Step>
            </div>
            </div>
        </div>
        </div>
    );
}
export default Extras;