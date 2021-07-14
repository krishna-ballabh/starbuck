import {useState} from 'react';



function Favorites(){
    let [selectedIndex, setSelectedIndex] = useState(0);
    let tabTitles = [25, 50, 150, 200, 400];
    let positionClass = selectedIndex === 0 ? "left-0" : "left-" + selectedIndex + "/4";
    const tabWidth = 100 / tabTitles.length;
    return (
        <div className =  "bg-primary-100">
            <div className = "px-3 text-center pt-7 ">
                <h2 className = "block pb-3 text-lg font-semibold ">Get your favorites for free</h2>
            </div>
            <div className = "font-sans">
                <div className = "bg-primary-white">
                    <div className = "relative max-w-md mx-auto ">
                        <div className = "flex text-xl font-bold">
                            {tabTitles.map((titles, index) => (
                                <div className = "flex-1 px-4 py-2 text-center cursor-pointer" onClick = {() => setSelectedIndex(index)}>
                                    {titles}
                                    <span className=  "text-xs text-primary-gold">&#9733;</span>
                                </div>
                            ))}
                        </div>
                        <div className = "absolute duration-300 ease-in-out max-h-1 bg-primary-400" style = {{width: tabWidth + "%", left: tabWidth * selectedIndex + "%"}}>.</div>
                        
                        </div>
                  
                </div>
            </div>
            <div className = "static block pt-3 md:flex md:justify-center bg-primary-200 pb-7">
                <div className = "ml-32 place-content-center md:w-80 md:h-80">
                    <img src = "https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png"></img>
                </div>
                <div className = "inset-0 px-3 pl-6 text-center md:items-start md:flex-col md:w-96 md:h-96">
                    <h4 className = "pb-3 text-3xl font-semibold pt-7">Customize your drink</h4>
                    <p className = "block font-sans ">Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.</p>


                </div>
                </div>
            </div>
    );
}
export default Favorites;