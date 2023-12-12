import React, { useState, useEffect } from "react";
import { client } from "../../../sanity.ts";

const Home = () => {
  const [pageData, setPageData] = useState({});

  const fetchData = async () => {
    const result = await client.fetch(
      "*[_type == 'page' && title == 'Home Page'] "
    );
    setPageData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{pageData[0].title}</h1>
    </div>
  );
};

export default Home;
