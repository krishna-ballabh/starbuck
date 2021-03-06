import ExternalLinkIcon from "@heroicons/react/outline/ExternalLinkIcon";
function Information(){
    return(
        <div className = " pb-16 shadow-md">
        <div className = " bg-primary-1000 pb-6 ">
            <p className = "text-sm pl-4 pt-4 pb-6 md:pt-12">At participating stores. Restrictions apply.</p>
            <div className = "md:flex md: justify-between">
                
                <div className = "pl-4 font-sans text-sm md:w-1/2">
                    
                    <h3 class = "text-primary-soft-black font-bold tracking-widest pb-4">EARNING STARS</h3>
                    <p className = "pb-4">Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
                    <p className = "pb-4">Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
                    <p className = "pb-4">Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
                </div>
                <div className = "pl-4 font-sans text-sm md:w-1/2 md:pr-6">
                    <h3 class = "text-primary-soft-black font-bold tracking-widest pb-4">TERMS OF USE</h3>
                    <p className = "pb-4">For full program details visit <a className = "text-primary-500 underline">starbucks.com/rewards/terms <ExternalLinkIcon className = "inline-flex h-4 w-4"/></a></p>
                    <p className = "pb-4">* Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.</p>
                    <p className = "pb-4">Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the <a className = "text-primary-500 underline">Starbucks Store Locator <ExternalLinkIcon className = "inline-flex w-4 h-4"/></a> and search for locations honoring “Redeem Rewards”.</p>
                    <p className = "pb-4">Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
                </div>
            </div>
            <div class = "md:flex">
                <div className = "pl-4 font-sans text-sm md:w-1/2">
                <h3 class = "text-primary-soft-black font-bold tracking-widest pb-4">BENIFITS</h3>
                    <p className = "pb-4">Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
                </div>
                <div className = "pl-4 font-sans text-sm md:w-1/2 md:pr-6">
                    <h3 class = "text-primary-soft-black font-bold tracking-widest pb-4">REDEEMING REWARDS</h3>
                    
                    <p className = "pb-4">Rewards cannot be redeemed for alcoholic beverages or multi-serve items. Not all stores honor tiered Rewards. Select stores redeem 150 Stars for free food or drink items only.</p>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Information;