import React, { useState } from "react";
import FigmaCardsIcon from "../assets/icons/FigmaCardsIcon.png";
import FigmaLeaderboard from "../assets/icons/FigmaLeaderboard.png";
import AddForm from "./AddForm";

export default function SideMenu({ children, refetchPosts }) {
  // state
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [addFormOpen, setAddFormOpen] = useState(false);

  // toggle menu
  const toggleMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  // Add Form:
  // Open form
  const openAddForm = () => {
    setAddFormOpen(true);
  };

  // close form
  const closeAddForm = () => {
    setAddFormOpen(false);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 h-screen bg-gray-800 text-gray-200">
        {/* Top Half */}
        <button onClick={toggleMenu} className="p-4">
          {/* Hamburger / x  */}
          {sideMenuOpen ?
            (
              <i className="fa-solid fa-xmark" />
            ) :
            (
              <i className="fa-solid fa-bars" />
            )}
        </button>

        <div className={`flex flex-col space-y-1 p-1 ${sideMenuOpen ? "w-36" : "w-12"} h-screen`}>
          <div className="flex flex-col space-y-1">
            {/* Switch Views - List or Cards, but right now just cards */}
            <button className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 justify-center">
              <img src={FigmaCardsIcon} alt="Cards Icon" className="h-6 w-6" />
              {sideMenuOpen && <span className="ml-2">Cards View</span>}
            </button>

            {/* Add button for posts */}
            <button
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 justify-center"
              onClick={openAddForm}
            >
              <i className="fa-solid fa-circle-plus" />
              {sideMenuOpen && <span className="ml-2">Add Post</span>}
            </button>

            {/* Search */}
            <button className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 justify-center">
              <i className="fa-solid fa-magnifying-glass" />
              {sideMenuOpen && <span className="ml-2">Search</span>}
            </button>

            {/* Categories */}
            <button className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 justify-center">
              <i className="fa-sharp fa-solid fa-icons" />
              {sideMenuOpen && <span className="ml-2">Categories</span>}
            </button>
          </div>

          {/* Bottom Half */}
          <div className="mt-auto flex flex-col space-y-1 mb-20">
            {/* Leaderboard */}
            <button className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 justify-center">
              <img src={FigmaLeaderboard} alt="Leaderboard Icon" className="h-6 w-6" />
              {sideMenuOpen && <span className="ml-2">Leaderboard</span>}
            </button>

            {/* Badges */}
            <button className="flex items-center p-2 mb-4 rounded-md hover:bg-gray-700 transition-colors duration-200 justify-center">
              <i className="fa-solid fa-award fa-xl" />
              {sideMenuOpen && <span className="ml-2">Badges</span>}
            </button>

            {/* Tornados */}
            <button className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 justify-center">
              <i className="fa-solid fa-tornado fa-lg" />
              {sideMenuOpen && <span className="ml-2">Tornados</span>}
            </button>

            {/* Rank */}
            <button className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 justify-center">
              <i className="fa-solid fa-star" />
              {sideMenuOpen && <span className="ml-2">Rank</span>}
            </button>

            {/* Profile */}
            <button className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 justify-center">
              <i className="fa-solid fa-user" />
              {sideMenuOpen && <span className="ml-2">NAME</span>}
            </button>
          </div>
        </div>
      </div>

      <div className={`flex-1 ${sideMenuOpen ? "pl-36" : "pl-12"}`}>{children}</div>

      {/* Add Form */}
      {addFormOpen && <AddForm closeAddForm={closeAddForm} refetchPosts={refetchPosts} />}
    </div>
  );
}
