import React, { useState, useEffect } from "react";
import axios from "axios";

const LearnersList = () => {
  const [learners, setLearners] = useState([]);

  useEffect(() => {
    const fetchLearners = async () => {
      const response = await axios.get(
        "https://learners-crud.onrender.com/learners"
      );

      const { data } = response.data;

      setLearners(data.learners);
    };

    fetchLearners();
  }, []);

  const learnersList = learners.map((element) => {
    return (
      <div key={element._id}>
        <p>{element.name}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Per Scholas Learners List</h1>
      {learnersList}
    </div>
  );
};

export default LearnersList;
