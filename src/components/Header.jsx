import React, { useState } from "react";
import EmailCard from "./EmailCard";
import axios from "axios";

const Header = () => {
  const [isUnreadClicked, setIsUnreadClicked] = useState(false);
  const [isReadClicked, setIsReadClicked] = useState(false);
  const [isFavouritesClicked, setIsFavouritesClicked] = useState(false);
  const [emailData, setEmailData] = useState([]); // [] is the initial value

  useState(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://flipkart-email-mock.vercel.app/"
      );
      setEmailData(data.list);
      console.log(data.list[0].from.name);
    };
    fetchData();
  });

  const handleUnreadClick = () => {
    setIsUnreadClicked(!isUnreadClicked);
    setTimeout(() => {
      setIsUnreadClicked(false);
    }, 300);
    <EmailCard />;
  };

  const handleReadClick = () => {
    setIsReadClicked(!isReadClicked);
    setTimeout(() => {
      setIsReadClicked(false);
    }, 300);
  };

  const handleFavouritesClick = () => {
    setIsFavouritesClicked(!isFavouritesClicked);
    setTimeout(() => {
      setIsFavouritesClicked(false);
    }, 300);
  };

  return (
    <div className="m-1 p-5 flex gap-10">
      <button className="rounded-xl p-2 gray">Filter By:</button>
      <button
        className={`rounded-xl p-2 text-sm ${
          isUnreadClicked
            ? "bg-gray-200 rounded-lg border-2 border-gray-300"
            : ""
        }`}
        onClick={handleUnreadClick}
      >
        Unread
      </button>
      <button
        className={`rounded-xl p-2 text-sm ${
          isReadClicked ? "bg-gray-200 rounded-lg border-2 border-gray-300" : ""
        }`}
        onClick={handleReadClick}
      >
        Read
      </button>
      <button
        className={`rounded-xl p-2 text-sm ${
          isFavouritesClicked
            ? "bg-gray-200 rounded-lg border-2 border-gray-300"
            : ""
        }`}
        onClick={handleFavouritesClick}
      >
        Favourites
      </button>
    </div>
  );
};

export default Header;
