import {useState} from 'react';
import {Transition,Dialog} from "@headlessui/react";

function Aboutus(){
    let [isMenuOpen, setIsMenuOpen] = useState(false);
    let [isAnimating,setIsAnimating] = useState(false);
    return (
        <div className = "pb-12 pt-12 pl-4 text-base md:flex  ">
            <div className = "md:flex md:flex-col flex justify-between pr-4 pt-6">
                <h2 className = "font-medium md:text-lg" >About Us</h2>
                <ul className ="font-sans  text-primary-grey sm:hidden md:flex md:flex-col">
                    <li className = "pt-6">Our Heritage</li>
                    <li className = "pt-6">Our Coffee</li>
                    <li className = "pt-6">Stories and News</li>
                    <li className = "pt-6">Investor relations</li>
                    <li className = "pt-6">Policies and Standards</li>
                    <li className = "pt-6">Customer Service</li>
                </ul>
                <button className = "md:hidden p-2 w-11 h-11 rounded-full hover:bg-primary-600"><svg viewBox="0 0 24 24" class="valign-middle absoluteCenter h-8 w-8" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" ><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path><circle class="sb-icon-hover" fill="transparent" cx="50%" cy="50%" r="75%"></circle></svg></button>
            </div>
            <div className = "md:flex md:flex-col flex sm:justify-between pr-4 pt-6">
                <h2 className = "font-medium md:text-lg" >Careers</h2>
                <ul className ="font-sans  text-primary-grey sm:hidden md:flex md:flex-col">
                    <li >Culture and Values</li>
                    <li className = "pt-6">Inclusion,Diversity,and Equity</li>
                    <li className = "pt-6">College Achievement Plan</li>
                    <li className = "pt-6">U.S. Careers</li>
                    <li className = "pt-6">International Careers</li>
                    <li className = "pt-12"></li>
                </ul>
                <button className = "md:hidden p-2 w-11 h-11 rounded-full hover:bg-primary-600" ><svg viewBox="0 0 24 24" class="valign-middle absoluteCenter h-8 w-8" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" ><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path><circle class="sb-icon-hover" fill="transparent" cx="50%" cy="50%" r="75%"></circle></svg></button>
            </div>
            <div className = "md:pl-6 md:flex md:flex-col flex justify-between pr-4 pt-6">
                <h2 className = "font-medium md:text-lg" >Social Impact</h2>
                <ul className ="font-sans  text-primary-grey sm:hidden md:flex md:flex-col">
                    <li className = "pt-6">Ethical Sourcing</li>
                    <li className = "pt-6">Leading in Sustainability</li>
                    <li className = "pt-6">Strengthening Communities</li>
                    <li className = "pt-6">Creating Opportunities</li>
                    <li className = "pt-6">Global Social Impact Report</li>
                    <li className = "pt-12"></li>
                </ul>
                <button className = "md:hidden p-2 w-11 h-11 rounded-full hover:bg-primary-600" ><svg viewBox="0 0 24 24" class="valign-middle absoluteCenter h-8 w-8" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" ><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path><circle class="sb-icon-hover" fill="transparent" cx="50%" cy="50%" r="75%"></circle></svg></button>
            </div>
            <div className = "md:pl-6 md:flex md:flex-col flex justify-between pr-4 pt-6">
                <h2 className = "font-medium md:text-lg" >For Buisness Partners</h2>
                <ul className ="font-sans  text-primary-grey sm:hidden md:flex md:flex-col">
                    <li className = "pt-6">Landlord Support Center</li>
                    <li className = "pt-6">Suppliers</li>
                    <li className = "pt-6">Corporate Gift Card Sales</li>
                    <li className = "pt-6">Office and Foodservice Coffee</li>
                    <li className = "pt-24"></li>
                </ul>
                <button className = "md:hidden p-2 w-11 h-11 rounded-full hover:bg-primary-600"><svg viewBox="0 0 24 24" class="valign-middle absoluteCenter h-8 w-8" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" ><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path><circle class="sb-icon-hover" fill="transparent" cx="50%" cy="50%" r="75%"></circle></svg></button>
            </div>
            <div className = "md:pl-6 md:flex md:flex-col flex justify-between pr-4 pt-6">
                <h2 className = "font-medium md:text-lg" >Order and Pickup</h2>
                <ul className ="font-sans text-primary-grey sm:hidden md:flex md:flex-col">
                    <li className = "pt-6">Order on the App</li>
                    <li className = "pt-6">Order on the Web</li>
                    <li className = "pt-6">Delivery</li>
                    <li className = "pt-6">Order and Pickup Options</li>
                    <li className = "pt-6">Explore and Find Coffee for Home</li>
                    <li className = "pt-12"></li>
                </ul>
                <button className = "md:hidden p-2 w-11 h-11 rounded-full hover:bg-primary-600" ><svg viewBox="0 0 24 24" class="valign-middle absoluteCenter h-8 w-8" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" ><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path><circle class="sb-icon-hover" fill="transparent" cx="50%" cy="50%" r="75%"></circle></svg></button>
            </div>
        </div>
    );
}
export default Aboutus;