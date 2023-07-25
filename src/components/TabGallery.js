import React, { useState } from "react";
import GallerryCard from "./GallerryCard";
const tabItems = [
    {
        id: 1,
        image: "../peliccan cantoment.jpg",
        title: "The Peliccan",
        units: "134 Hotel Apartments",
        category: "completed",
        largeThumb: true,
    },
    {
        id: 2,
        image: "../nova-renders-5.jpg",
        title: "The Peliccan",
        units: "134 Hotel Apartments",
        category: "completed",
    },
    {
        id: 3,
        image: "../forte 1.jpg",
        title: "The Peliccan",
        units: "134 Hotel Apartments",
        category: "upcoming",
    },
    {
        id: 4,
        image: "../henrietta 1.jpg",
        title: "The Peliccan",
        units: "134 Hotel Apartments",
        category: "upcoming",
    },
    {
        id: 5,
        image: "../niiyo.jpg",
        title: "The Peliccan",
        units: "134 Hotel Apartments",
        category: "ongoing",
    },
    {
        id: 6,
        image: "../1440x810_avant_garde_day_view 1.jpg",
        title: "The Peliccan",
        units: "134 Hotel Apartments",
        category: "ongoing",
    },
    {
        id: 7,
        image: "../plamers place.jpg",
        title: "The Peliccan",
        units: "134 Hotel Apartments",
        category: "ongoing",
    },
];

const tabMenus = ["all projects", "completed", "ongoing", "upcoming"];

const TabGallery = ({onDarkBg}) => {
    const [pane, setPane] = useState("all projects");
    const [activeIndex, setActiveIndex] = useState(0);

    const filteredpane = tabItems.filter((item) => item.category === pane);

    const handleSelectTab = (e, index) => {
        setPane(e.target.innerText.toLowerCase());
        setActiveIndex(index);
    };

    return (
        <div className="mt-10">
            <div className="tabs flex flex-row flex-wrap gap-y-4 gap-x-4 items-center justify-left">
                {tabMenus.map((menu, index) => (
                    <button
                        key={index}
                        onClick={(e) => handleSelectTab(e, index)}
                        className={`${(activeIndex === index)
                                ?  `${onDarkBg ? 'bg-white text-devtraco-blue ' : 'bg-devtraco-blue text-white'} `
                                : `${onDarkBg ? 'bg-transparent text-white' : 'bg-transparent text-devtraco-blue'} `}
                            }  border flex flex-row flex-none font-medium  text-xs md:text-sm items center ${onDarkBg ? 'hover:text-devtraco-blue' : 'hover:text-white'}  space-x-4 ${onDarkBg ? 'border-white' : 'border-devtraco-blue'} rounded pt-2.5 pb-2 px-7 transition-all group ${onDarkBg ? 'hover:bg-white' : 'hover:bg-devtraco-blue'}  capitalize`}
                    >
                        {menu}
                    </button>
                ))}
            </div>
            <div className="panes mt-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {pane === "all projects"
                        ? tabItems.map((items, index) => (
                            <GallerryCard {...items} index={index} />
                        ))
                        : filteredpane.map((items, index) => (
                            <GallerryCard {...items} index={index} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default TabGallery;
