import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const EmailCard = ({ name, email, subject, date, desc, id }) => {
  const { sidebar, toggleSidebar, changeDescription, changeName } =
    useContext(NoteContext);
  const newdate = new Date(date);
  const formattedDate = newdate.toLocaleString();
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!sidebar ? (
        <div>
          <Link
            onClick={(e) => {
              toggleSidebar();
              changeDescription(id);
              setClicked(true);
              console.log(sidebar);
            }}
          >
            <div
              className={`rounded-xl p-2 text-sm ${
                !clicked
                  ? "rounded-lg border-2 border-gray-200 m-6"
                  : "bg-black-500 bg-gray-200 rounded-lg border-2 border-gray-300 m-6"
              }`}
            >
              <div className="w-20 px-2 ">
                <div
                  style={{ backgroundColor: "#E54065" }}
                  className="flex p-4 w-8 h-8 text-white rounded-full bg-black justify-center items-center"
                >
                  A
                </div>
              </div>
              <div className="text-sm">
                <h2>
                  From: {name} &lt;
                  <span>{email}</span>
                  &gt;
                </h2>
                <h2>Subject: {subject}</h2>
                <h2>{desc}</h2>
                <h2>
                  {formattedDate}{" "}
                  <span className="pl-20 font-bold text-xs text-orange-600">
                    Favourite
                  </span>
                </h2>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="w-96 flex">
          <Link
            onClick={(e) => {
              changeDescription(id);
              changeName(name, formattedDate);
              console.log(sidebar);
              window.scrollTo(0, 0);
            }}
          >
            <div className=" mt-8 mb-1 mr-2 p-2 rounded-lg border-2 gray flex items-center">
              <div className="w-20 px-2 ">
                <div
                  style={{ backgroundColor: "#E54065" }}
                  className="flex p-4 w-8 h-8 text-white rounded-full bg-black justify-center items-center"
                >
                  A
                </div>
              </div>
              <div>
                <text className="text-sm">
                  From: {name} &lt;
                  <span className="font-semibold text-gray-500">{email}</span>
                  &gt;
                </text>
                <br />
                <text className="text-sm">
                  Subject:{" "}
                  <span className="font-semibold text-gray-500">{subject}</span>
                </text>
                <br />
                <text className="text-sm">{desc}</text>
                <br />
                <text className="text-sm">{formattedDate}</text>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default EmailCard;
