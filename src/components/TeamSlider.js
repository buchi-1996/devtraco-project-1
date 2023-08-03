import React from "react";
import Slider from "react-slick";
import TeamMemberCard from "./TeamMemberCard";
import joseph from '../assets/teamphotos/Joseph-Aidoo-Jr.jpeg'
import john from '../assets/teamphotos/John-Entsuah.jpeg'
import alex from '../assets/teamphotos/Alex-Arkaah.jpeg'
import francis from '../assets/teamphotos/Francis-Okai-Okoh.jpeg'
import luis from '../assets/teamphotos/Luis-Alves.jpeg'
import settings from "../lib/react-slider";


const teamMembers = [
  {
    profilePic: joseph,
    name: "Joseph Aidoo Jr.",
    job: "Executive Director",
  },
  {
    profilePic: john,
    name: "John Entsuah.",
    job: "Group C.E.O",
  },
  {
    profilePic: alex,
    name: "Alex Arkaah.",
    job: "C.0.0/Head of Development",
  },
  {
    profilePic: francis,
    name: "Francis Okai Okoh.",
    job: "Chief Finance Officer",
  },
  {
    profilePic: luis,
    name: "Luis Alves.",
    job: "General Manager (Fabrico)",
  },
  {
    profilePic: "../Rectangle-3856.jpg",
    name: "Kenneth Ruine.",
    job: "Sales and Marketing Director",
  },
  {
    profilePic: "../Rectangle-3856.jpg",
    name: "Merek Milton",
    job: "Senior Project Manager",
  },
];

const TeamSlider = () => {

  return (
    <div>
      <div className="w-full max-w-[80rem] mx-auto">
        <Slider {...settings} className="mx-10">
          {teamMembers.map((members) => (
            <TeamMemberCard {...members} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamSlider;
