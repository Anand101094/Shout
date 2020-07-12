import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import shoutAction from "../redux/actions/shoutAction"
import Shout from "../components/Shout"

const AllShouts = (props) => {
  const [shouts, setShouts] = useState(null);

  useEffect(() => {
    props.getShouts();
  }, []);

  let recentShouts = props.shouts ? (
    props.shouts.map((shout, index) => {
      return <Shout key={index} shout={shout} />;
    })
  ) : (
    <p>Loading...</p>
  );

  return <div className="all-shouts">{recentShouts}</div>;
};

const mapStateToProps = (state) => {
  return {
    shouts: state.shoutsData.shouts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShouts: () => dispatch(shoutAction.fetchShouts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllShouts);
