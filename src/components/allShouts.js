import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import shoutAction from "../redux/actions/shoutAction"
import Shout from "../components/Shout"
import Loader from "../globalComponent/Loader/loader"

const AllShouts = (props) => {

  useEffect(() => {
    props.getShouts();
  }, []);

  let likedShouts = props.userDetails ? props.userDetails.likes.map(item => item.shoutId) : []

  let recentShouts = props.shouts && props.fetchingShouts !== "pending" ? (
    props.shouts.map((shout, index) => {
      return <Shout key={index} shout={shout} liked={likedShouts.includes(shout.shoutId)} />;
    })
  ) : (
      <Loader />
    );

  return <div className="all-shouts">{recentShouts}</div>;
};

const mapStateToProps = (state) => {
  return {
    shouts: state.shoutsData.shouts,
    fetchingShouts: state.shoutsData.fetchShouts,
    userDetails: state.user.userDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShouts: () => dispatch(shoutAction.fetchShouts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllShouts);
