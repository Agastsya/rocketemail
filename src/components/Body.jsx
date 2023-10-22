import axios from "axios";
import React, { useContext, useState } from "react";
import EmailCard from "./EmailCard";
import NoteContext from "../context/notes/NoteContext";
import Description from "./Description";

const Body = () => {
  const { sidebar, name, descId, date } = useContext(NoteContext);

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
  return (
    <div className="flex">
      <div className="w-full">
        {emailData.map((email) => (
          <EmailCard
            name={email.from.name}
            id={email.id}
            email={email.from.email}
            subject={email.subject}
            date={email.date}
            desc={email.short_description}
          />
        ))}
      </div>
      {sidebar ? <Description id={descId} name={name} date={date} /> : null}
    </div>
  );
};

export default Body;
