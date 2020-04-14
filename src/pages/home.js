import React, { useState, useEffect } from "react";
import axios from "axios";
import Shout from '../components/Shout.js'

const Home = (props) => {
  const [shouts, setShouts] = useState(null);

  useEffect(() => {
    axios.get("/shouts").then((res) => {
      setShouts(res.data);
    });
  }, []);

  let recentShouts = shouts ? (
    shouts.map((shout, index) => {
      return <Shout key={index} shout={shout} />;
    })
  ) : (
    <p>Loading...</p>
  );

  return (
    <div className="row">
      <div className="col s8">{recentShouts}</div>
      <div className="col s4">
        <p>profile</p>
      </div>
    </div>
  );
};

export default Home;
