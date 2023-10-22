import axios from "axios";
import React, { useState, useEffect } from "react";

const Description = ({ id, name }) => {
  const [emailContent, setEmailContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://flipkart-email-mock.vercel.app/?id=${id}`
        );
        setEmailContent(data.body);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="m-8 p-5 border-2 border-gray rounded-lg max-h-screen">
      <div className="flex">
        <div
          style={{ backgroundColor: "#E54065" }}
          className="flex p-4 w-16 h-16 text-white rounded-full bg-black justify-center items-center"
        >
          A
        </div>
        <div>
          <text className="font-black-200 text-2xl font-semibold pl-5">
            {" "}
            {name}
          </text>
        </div>
      </div>
      <br />
      <div className="pl-20">
        {emailContent ? (
          <div dangerouslySetInnerHTML={{ __html: emailContent }}></div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Description;
