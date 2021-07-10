import RoundedLink from "./RoundedLink"
function Header(){
    return (
        <div class = "sticky top-0 flex items-center justify-between font-bold bg-primary-400 px-4 py-2 text-white font-semibold">
            <p>STARBUCKS® REWARDS</p>
            <RoundedLink linkUrl = "https://www.starbucks.com/rewards/mobile-apps?_branch_match_id=934405664345478692&utm_medium=marketing">join in the app</RoundedLink>
        </div>
    );
}

export default Header;