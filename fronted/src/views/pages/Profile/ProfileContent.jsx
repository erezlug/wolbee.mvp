import { Table } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProjectDetails = () => {
  // State to store the importance levels
  const [importanceLevels, setImportanceLevels] = useState({
    management: 'High Importance',
    turnover: 'Medium Importance',
    workLifeBalance: 'Low Importance',
    managerialAttention: 'High Importance',
    professionalism: 'Low Importance'
  });

  // Styles for the progress circles
  const circleContainerStyle = {
    width: '150px',
    margin: '20px',
    position: 'relative',
    transition: 'transform 0.3s ease',
  };

  const circleTextStyle = {
    fontSize: '12px', // Smaller text size
    color: '#333',
    marginBottom: '10px',
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '40px',
  };

  const getColor = (importance) => {
    switch (importance) {
      case 'High Importance':
        return '#FF0000'; // Red
      case 'Medium Importance':
        return '#FFA500'; // Orange
      case 'Low Importance':
        return '#008000'; // Green
      default:
        return '#000000'; // Black
    }
  };

  return (
    <div className="tab-content">
      {/* Projects Tab */}

      {/* /Assets Tab */}
      <div className="fade" id="emp_assets" style={{}}>
        <div style={wrapperStyle}>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Management</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.management}
              styles={buildStyles({
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.management),
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Turnover</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.turnover}
              styles={buildStyles({
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.turnover),
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Work-Life Balance</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.workLifeBalance}
              styles={buildStyles({
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.workLifeBalance),
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Managerial Attention</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.managerialAttention}
              styles={buildStyles({
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.managerialAttention),
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Professionalism</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.professionalism}
              styles={buildStyles({
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.professionalism),
                trailColor: '#d6d6d6',
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ListItem = ({ title, text }) => (
  <li>
    <div className="title">{title}</div>
    <div className="text">{text}</div>
  </li>
);

export default ProjectDetails;
