import React, { useState } from "react";
import { Link } from "react-router-dom";
import off from '../../../../../imgs/off.png'
import on from '../../../../../imgs/on.png'
import offgift from '../../../../../imgs/giftoff.png'

const ContactContents = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      importance: "High",
      message: "Nicole's birthday is coming soon. Send her a gift!",
      link: "/departments",
      style: { backgroundColor: "#ff5e5e", color: "white" }
    },
    {
      id: 2,
      importance: "Medium",
      message: "Tomorrow is the international pizza day. View your options for spoiling your team!",
      link: "/task-board",
      style: { backgroundColor: "#f7b500", color: "white" }
    },
    {
      id: 3,
      importance: "Low",
      message: "Ben's wife is about to give birth to a new baby! You can help him prepare for the event",
      link: "/low-importance-notification",
      style: { backgroundColor: "#64c964", color: "white" }
    },
    {
      id: 4,
      importance: "High",
      message: "Note! A meeting was arranged with Nicole when she is at home",
      link: "/departments",
      style: { backgroundColor: "#ff5e5e", color: "white" }
    }
  ]);

  const [selectedNotifications, setSelectedNotifications] = useState([]);
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const toggleSelectNotification = (id) => {
    setSelectedNotifications((prev) =>
      prev.includes(id) ? prev.filter((nid) => nid !== id) : [...prev, id]
    );
  };

  const deleteSelectedNotifications = () => {
    setNotifications((prev) =>
      prev.filter((notification) => !selectedNotifications.includes(notification.id))
    );
    setSelectedNotifications([]);
  };

  const deleteAllNotifications = () => {
    setNotifications([]);
    setSelectedNotifications([]);
  };

  const toggleNotificationVisibility = () => {
    setNotificationVisible(!isNotificationVisible);
  };

  const smallprojectCardStyle={
    width: '250px',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    padding: '20px',
    background: '#fff',
    margin: '10px',
    height:'300px'
  }

  const notificationContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px"
  };

  const notificationStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
    transition: "transform 0.2s ease-in-out",
    width: '70%',
    textAlign: "center",
    textDecoration: "none",
    color: "inherit",
    marginLeft: "200px"
  };

  const importanceIndicatorStyle = {
    width: "100px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginRight: "20px",
    fontSize: "14px",
    backgroundColor: 'black',
    color: 'white'
  };

  const checkboxStyle = {
    marginRight: "10px"
  };

  const messageStyle = {
    flexGrow: 1,
    textAlign: "left",
    margin: 0,
    paddingLeft: "20px"
  };

  const buttonStyle = {
    marginBottom: "10px"
  };

  const fadeNotificationStyle = {
    marginLeft: '140px',
    width: '1000px',
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    animation: isNotificationVisible ? "fadeIn 0.5s" : "fadeOut 0.5s",
    display: isNotificationVisible ? "flex" : "none",
    height: '550px',
    flexDirection: 'row', // קו הכי חשוב בשורה זו
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap', // כדי שהקוביות ימשיכו להתפרסם בשורה חדשה כאשר מגיעים לסופה
    gap: '20px', // רווח בין הקוביות
    overflow: 'auto', // גלילה אוטומטית במקרה שהתוכן חורג מגודל הדיב
  };

  const projectCardStyle = {
    width: '300px',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    padding: '20px',
    background: '#fff',
    margin: '10px', // Small margin between cards
  };
  
  const imageContainerStyle = {
    width: '100px',
    height: '100px',
    margin: '0 auto 10px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #ddd',
  };
  
  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  };
  
  const projectDetailsTextStyle = {
    padding: '10px',
  };
  
  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };
  
  const h3Style = {
    fontSize: '18px',
    margin: '10px 0',
  };
  
  
  const pStyle = {
    fontSize: '14px',
    color: '#555',
    margin: '5px 0',
  };
  
  const titlels = { 
    flexDirection: 'column', // שינוי פה גם
  alignItems: 'center', // שינוי פה גם
  justifyContent: 'center', // שינוי פה גם
  gap: '20px',
  }

  const ulStyle = {
    margin: 0,
    padding: 0,
  };
  
  const listItemStyle = {
    listStyleType: 'none',
  };

  const bodyDarkOverlayStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // כהות חצי שקופה
    zIndex: "999", // כדי שההכהות תהיה מעל כל התוכן האחר
    display: isNotificationVisible ? "block" : "none",
  };

  const closeButtonStyle = {
    width: '150px',
    height: '40px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#FEB723',
      
    fontSize: '15px',
    transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
    fontSize: '15px',

 
  };
  return (
    <div style={notificationContainerStyle}>
      <h2>Notifications</h2>
      <button onClick={deleteAllNotifications} className="btn btn-danger" style={buttonStyle}>
        Delete all notifications
      </button>

      <Link to={notifications[0].link} style={{ textDecoration: "none", width: "100%" }}>
        <div
          style={{ ...notificationStyle, ...notifications[0].style }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <input
            type="checkbox"
            checked={selectedNotifications.includes(notifications[0].id)}
            onChange={() => toggleSelectNotification(notifications[0].id)}
            style={checkboxStyle}
            onClick={(e) => e.stopPropagation()}
          />
          <div style={importanceIndicatorStyle}>{notifications[0].importance}</div>
          <p style={messageStyle}>{notifications[0].message}</p>
        </div>
      </Link>

      <Link to={notifications[1].link} style={{ textDecoration: "none", width: "100%" }}>
        <div
          style={{ ...notificationStyle, ...notifications[1].style }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <input
            type="checkbox"
            checked={selectedNotifications.includes(notifications[1].id)}
            onChange={() => toggleSelectNotification(notifications[1].id)}
            style={checkboxStyle}
            onClick={(e) => e.stopPropagation()}
          />
          <div style={importanceIndicatorStyle}>{notifications[1].importance}</div>
          <p style={messageStyle}>{notifications[1].message}</p>
        </div>
      </Link>

      <Link to={notifications[2].link} style={{ textDecoration: "none", width: "100%" }}>
        <div
          style={{ ...notificationStyle, ...notifications[2].style }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <input
            type="checkbox"
            checked={selectedNotifications.includes(notifications[2].id)}
            onChange={() => toggleSelectNotification(notifications[2].id)}
            style={checkboxStyle}
            onClick={(e) => e.stopPropagation()}
          />
          <div style={importanceIndicatorStyle}>{notifications[2].importance}</div>
          <p style={messageStyle}>{notifications[2].message}</p>
        </div>
      </Link>

      <div style={{ width: "100%" }}>
        <div
          style={{ ...notificationStyle, ...notifications[3].style }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={toggleNotificationVisibility}
        >
          <input
            type="checkbox"
            checked={selectedNotifications.includes(notifications[3].id)}
            onChange={() => toggleSelectNotification(notifications[3].id)}
            style={checkboxStyle}
            onClick={(e) => e.stopPropagation()}
          />
          <div style={importanceIndicatorStyle}>{notifications[3].importance}</div>
          <p style={messageStyle}>{notifications[3].message}</p>
        </div>
      </div>

      <button
        onClick={deleteSelectedNotifications}
        className="btn btn-secondary"
        style={buttonStyle}
        disabled={selectedNotifications.length === 0}
      >
        Delete selected notifications
      </button>
{/* _______________________________________________________________________________________ */}
<div style={bodyDarkOverlayStyle}>
      <div style={fadeNotificationStyle}>
        {/* <div style={titlels}> */}
        <ul style={ulStyle}>
    <li style={listItemStyle}>
      <h2 style={{width:'100%'}}>Nicole is home and she has an appointment with you</h2>
      <br />
<h5> type of meeting:  wolbee development </h5> 
<h5> organizer of the meeting: Ben</h5>
<h5> date of the meeting: 3/6/2024</h5>
<Link to='/events'><button>see the meeting</button></Link>
<br></br>
<br />
      <h4>Here are some things you can do to fix it</h4>
    </li>
     </ul>
       
        {/* </div> */}
        <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={off} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Send a message to Ben to postpone the meeting</h3>
                  
                </div>
              </Link>
            </div>

            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={on} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Let him know that he still has to come to the meeting</h3>
                  
                </div>
              </Link>
            </div>

            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={offgift} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Inform the employee that the meeting has been postponed and he can enjoy himself at home</h3>
                  
                </div>
              </Link>
            </div>
            
          
           
 <div>

<button onClick={toggleNotificationVisibility} style={closeButtonStyle}>Close</button>
  
</div>
</div>
      
 
      </div>
    </div>
  );
};

export default ContactContents;
