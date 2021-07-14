import ExternalLinkIcon from "@heroicons/react/outline/ExternalLinkIcon";

function StarCodes(){
    return(
        <div className = "flex flex-col justify-start pb-16 pl-4 pr-4 md:pl-96 md:pr-96">
            <h1 className = "text-lg font-bold">Star Codes</h1>
            <p class = "pt-4 text-sm">Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.</p>
            <form class="pb-8">
            <div class="px-1 py-3 overflow-hidden ">
              <input id="star code"
                class="w-full px-4 py-3 placeholder-black border border-gray-600 appearance-none md:placeholder-black lg:placeholder-black rounded-xl focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Enter your Star code" type="code"/>
            </div>
            <div class="flex justify-end">
              <button
                class="px-4 py-2 mr-1 text-sm font-medium border border-black rounded-full lg:hover:bg-gray-200 md:hover:bg-gray-200 md:text-base hover:bg-gray-200">
                Sumbit
              </button>
            </div>
          </form>
          <p class="text-sm">Have a receipt but don't have a code?</p>
                <p class="text-sm">Go to <a href="#" className="underline text-primary-500">starbucks-stars.com<ExternalLinkIcon className = "inline-flex w-4 h-4"/></a> to upload your receipt and collect your Stars.</p>
                <div className = "pt-16">
                    <h1 className = "text-lg font-bold">Questions?</h1>
                    <p className = "pt-3 text-sm md:text-base">We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <a className = "underline text-primary-500">right over here <ExternalLinkIcon className = "inline-flex w-4 h-4"/></a></p>
                </div>
        </div>

    );
}
export default StarCodes;