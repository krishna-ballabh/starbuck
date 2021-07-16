import Nav from "./Nav";
import Header from "./Header"
import Hero from "./Hero";
import Rewards from "./Rewards";
import RoundedLink from "./RoundedLink";
import Favorites from "./Favorites";
import Extras from "./Extras";
import EarnStars from "./EarnStars";
import StarCodes from "./StarCodes";
import Information from "./Information";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
function App() {
  return (
    <div>
    <div>
      <Nav />
      <Header />
      <Hero />
      <div>
      <h1 class = "pt-16 text-center text-xl font-semibold">Getting started is easy </h1>
      <h3 class = "pt-3 text-center text-sm font-medium tracking-wider">Earn Stars and get rewarded in a few easy steps. </h3>
    </div>
    <div class = "pt-12">
     <Rewards heading = "Download the Starbucks® app " link = "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"><a class = "underline text-primary-link hover:no-underline">Join in the app </a>to get access to the full range of Starbucks® Rewards benefits. You can also <a class ="underline text-primary-link hover:no-underline">join online.</a></Rewards>
     <Rewards heading = "Order and pay how you’d like " link = "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg">Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a class = "underline text-primary-link hover:no-underline">Learn how</a></Rewards>
     <Rewards heading = "Earn Stars, get Rewards" link = "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg">As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</Rewards>
     <Favorites />
     <Extras />
     <EarnStars />
     <StarCodes />
     <Information />
     <Aboutus />
     <Footer/>
    </div>
    </div>
    </div>

  );
}

export default App;
