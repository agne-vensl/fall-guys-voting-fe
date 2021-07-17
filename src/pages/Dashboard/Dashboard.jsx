import React, { useState, useEffect } from "react";
import axios from "axios";

import Hero from "../../components/Hero/Hero";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Notification from "../../components/Notification/Notification";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";

const Dashboard = () => {
  const [skins, setSkins] = useState([]);
  const [notification, setNotification] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingSkin, setLoadingSkin] = useState(-1);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setLoading(true);

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
      })
      .finally(() => setLoading(false));
  }, []);

  const updateScore = (id, score) => {
    const token = localStorage.getItem("token");

    setLoadingSkin(id);

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

        const skinIndex = skins.findIndex(skin => skin.id === id);

        skins[skinIndex].score = parseInt(skins[skinIndex].score) + score;
        skins[skinIndex].voted = 1;

        const sortedSkins = [...skins].sort((a, b) => b.score - a.score);
        setSkins(sortedSkins);
      })
      .catch(err => {
        window.scrollTo(0, 0);

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
      })
      .finally(() => setLoadingSkin(-1));
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

        {loading ? (
          <Loading color="primary" />
        ) : (
          <CardsContainer
            data={skins}
            title="Vote for your favourite skins!"
            handleClicks={{ add: addPoint, remove: removePoint }}
            loadingId={loadingSkin}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;
