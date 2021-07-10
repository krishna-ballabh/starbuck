import Starperdollar from "./Starperdollar"
function EarnStars(){
    return(
        <div class =  "block mb-20">
            <div class = "block bg-primary-800 ">
                <div class = "bock m-auto max-w-screen-xl pl-6 pr-6 pt-20 pb-20">
                    <div class = "block pb-10 mb-6 text-center">
                        <h2 class = "text-lg pt- font-semibold pt-10 pb-6 text-semibold">Cash or card, you earn Stars</h2>
                        <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
                    </div>
                    <Starperdollar line = "Pay as you go" link1 = "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" link2 = "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"  number = "1" step1 = "Scan and pay separately " content1 = "Use cash or credit/debit card at the register." step2 = "Save payment in the app" content2 = "Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step."></Starperdollar>
                    <hr class="h-px mt-4 mb-10 bg-break-line "></hr>
                    <Starperdollar line = "Add funds in the app" link1 = "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" link2 = "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" number = "2" step1 = "Preload" content1 = "To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app."  step2 = "Register your gift card" content2 = "Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."></Starperdollar>
                    <hr class="h-px mt-4 mb-10  bg-break-line "></hr>
                    <Starperdollar line = "With Starbucks® Rewards Visa® Card" link1 = "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png" number = "Up to 3" step1 = "Earn Stars even faster" content1 = {<>Earn Stars on all purchases you make with our <a href="#"
                      class="text-green-600 underline ">credit card </a> opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.</>} ></Starperdollar>
                </div>
            </div>
        </div>
    );
}

export default EarnStars;