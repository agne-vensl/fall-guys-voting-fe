import React, { useState, useEffect } from "react";
import axios from "axios";

import Hero from "../../components/Hero/Hero";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Notification from "../../components/Notification/Notification";
import Header from "../../components/Header/Header";

const Dashboard = () => {
  const [skins, setSkins] = useState([]);
  const [notification, setNotification] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/content/all-skins`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(data => {
        setSkins(data.data);
      })
      .catch(err => {
        if (err.response) {
          return setNotification({
            type: "error",
            message: err.response.data.error,
          });
        }
        return setNotification({
          type: "error",
          message: "Cannot connect to server. Please try again later",
        });
      });
  }, []);

  const updateScore = (id, score) => {
    const token = localStorage.getItem("token");

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/content/add-score`,
        { skinId: id, score },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(data => {
        setNotification({ type: "success", message: data.data.message });

        const updated = skins.find(skin => skin.id === id);
        const newSkins = skins.filter(skin => skin.id !== id);
        updated.score = parseInt(updated.score) + score;
        updated.voted = 1;
        setSkins(newSkins.concat([updated]).sort((a, b) => b.score - a.score));
      })
      .catch(err => {
        if (err.response) {
          return setNotification({
            type: "error",
            message: err.response.data.error,
          });
        }
        return setNotification({
          type: "error",
          message: "Cannot connect to server. Please try again later",
        });
      });
  };

  const addPoint = id => {
    updateScore(id, 1);
  };

  const removePoint = id => {
    updateScore(id, -1);
  };

  return (
    <>
      <Header />
      <Hero title="Dashboard" />

      <div className="container">
        <Notification
          notification={notification}
          handleDelete={setNotification}
        />
      </div>

      <CardsContainer
        data={skins}
        handleClicks={{ add: addPoint, remove: removePoint }}
      />
    </>
  );
};

export default Dashboard;
