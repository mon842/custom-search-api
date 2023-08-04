import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";

import Logo from "../assets/Bhogol.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
    const [selectedMenu, setSelectedMenu] = useState("All");
    const { setImageSearch } = useContext(Context);

    useEffect(() => {
        return () => setImageSearch(false);
    }, []);

    const clickHandler = (menuItem) => {
        let isTypeImage = menuItem.name === "Images";
        setImageSearch(isTypeImage ? true : false);
        setSelectedMenu(menuItem.name);
    };

    return (
        <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center grow">
                    <Link to="/">
                        <img
                            className="hidden md:block w-[92px] mr-10"
                            src={Logo}
                            alt="Logo"
                        />
                    </Link>
                    <SearchInput from="searchResult" />
                </div>
                <div className="hidden md:block">
                    <ProfileIcon />
                </div>
            </div>

            <div className="flex ml-[-12px] my-3">
                {menu.map((menu, index) => (
                    <span
                        key={index}
                        className={`mx-2 h-9 flex items-center p-4 text-[#5f6368] cursor-pointer relative ${
                            selectedMenu === menu.name ? "text-[#1a73e8]" : ""
                        } ${selectedMenu === menu.name ? "bg-blue-50 rounded-3xl" : "border border-gray-200 rounded-3xl"}`}
                        onClick={() => clickHandler(menu)}
                    >
                        <span className="text-sm">{menu.name}</span>
                        {/* {selectedMenu === menu.name && (
                            <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
                        )} */}
                    </span>
                ))}
            </div>
            
        </div>
    );
};

export default SearchResultHeader;
