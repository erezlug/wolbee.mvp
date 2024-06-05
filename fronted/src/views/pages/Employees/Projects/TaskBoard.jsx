import React, { useState } from "react";
import { Link } from "react-router-dom";
import champ from '../../../../imgs/champions.jpeg'
import pizza from '../../../../imgs/pizza.png'
import gift from '../../../../imgs/gift.png'

import Breadcrumbs from "../../../../components/Breadcrumbs";
import Modal from 'react-modal';
import voucher from '../../../../imgs/voucher.png'
import dinner from '../../../../imgs/dinner.png'
import virtual from '../../../../imgs/virtual.png'
import making from '../../../../imgs/makingpizza.png'
import recognition  from '../../../../imgs/Recognition.png'
import clothes  from '../../../../imgs/clothes.png'
import community  from '../../../../imgs/community.png'
import trivia from '../../../../imgs/trivia.png'
import email from '../../../../imgs/email.png'
import shere from '../../../../imgs/shere.png'
import place from '../../../../imgs/place.png'
import vs from '../../../../imgs/vs.png'
import shavout from '../../../../imgs/shavout.png'
import picnic from '../../../../imgs/picnic.png'
import study from '../../../../imgs/study.png'
import dairy from '../../../../imgs/dairy.png'
import allow from '../../../../imgs/allow.png'
import spaicel from '../../../../imgs/spaicel.png'
import happy from '../../../../imgs/happy.png'
import mail from '../../../../imgs/mail.png'
import recipe from '../../../../imgs/Recipe.png'
import cheese from '../../../../imgs/cheese.png'
import cheesedinner from '../../../../imgs/cheesedinner.png'
import cheesetrivia from '../../../../imgs/cheesetrivia.png'
import notforget from '../../../../imgs/notforget.png'
import team from '../../../../imgs/team.png'
import off from '../../../../imgs/off.png'
import shef from '../../../../imgs/shef.png'



const TaskBoard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [shavuotModalIsOpen, setShavuotModalIsOpen] = useState(false);

  const openShavuotModal = () => {
    setShavuotModalIsOpen(true);
  };
  
  const closeShavuotModal = () => {
    setShavuotModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    
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
    
  }

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

  
  

  
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="close events"
            title="Dashboard"
            subtitle="close events"
          />
         <div className="row" style={rowStyle}>

          {/* _________________יום הפיצה הבין לאומי כללי __________________ */}
         <div
              className="project-card"
              style={projectCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onClick={openModal}
            >
              <div className="image-container" style={imageContainerStyle}>
                <img src={pizza} alt="Project One" style={imgStyle} />
              </div>
              <div className="project-details" style={projectDetailsTextStyle}>
                <h1 style={h3Style}>International Pizza Day</h1>
                <h4 style={pStyle}>Take care of your pizza team</h4>
               
              </div>
            </div>

            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Pizza Day Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            top: '50%',
            left: '60%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '1000px',
            width: '100%',
            height: '500px'
          },
        }}
      >
        {/*\\\\\\\\\\\\\\\\\\\\\\\יום הפיצה הבין לאומי הצעות \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <h1 style={{
  fontSize: "36px", // גודל טקסט גדול
  fontWeight: "bold", // עובי הטקסט
  color: "#4CAF50", // צבע ירוק
  textAlign: "center", // יישור למרכז
  textTransform: "uppercase", // המרה לאותיות גדולות
  padding: "20px", // ריווח מסביב לטקסט
  margin: "0", // אין מרווחים מחוץ לכותרת
  backgroundColor: "#f9f9f9", // רקע אפור בהיר
  border: "2px solid #4CAF50", // גבול עם צבע ירוק
  borderRadius: "10px", // פינות מעגליות
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" // אפקט צל
}}>
  This is the most close event!!!
</h1>

      <br />
        <div style={rowStyle} >
          
        <h2>International Pizza Day</h2>
<p>International Pizza day is coming next month and it is a perfect opportunity to give your team a slice of appreciation</p>
<ul > 
<li> - Celebrated on February 9th</li>
<li> - The largest pizza ever measured was over 122 feet</li>
<li> - Americans consume a staggering 350 slices of pizza per second</li>
<li> - The classic Pizza Margherita is said to have been created in 1889 by Neapolitan pizzaiolo Raffaele Esposito. It was named after Queen    Margherita of Italy.</li>
<li> - The most expensive pizza was sold for €8,300 (approximately $12,000USD) in 2012.</li>
<li> - Authentic Neapolitan pizza, as defined by the VPN (Associazione Verace Pizza Napoletana) must meet certain criteria including</li>
</ul>
{/* ____1_______ */}
<div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={voucher} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Buy a pizza voucher for each team member</h3>
                  
                </div>
              </Link>
            </div>

{/* ____2_______ */}
            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={dinner} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Organize a
pizza lunch or
dinner for
your team</h3>
                  
                </div>
              </Link>
            </div>

{/* ____3_____ */}
            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={virtual} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Organize a
Virtual Pizza
Making Class</h3>
                  
                </div>
              </Link>
            </div>

{/* ______4_______ */}
            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={making} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Organize a a
Pizza Making
Class on site</h3>
                  
                </div>
              </Link>
            </div>

            {/* ______5_______ */}
            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={recognition} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Recognition
and
Appreciation
of individuals
in your team</h3>
                  
                </div>
              </Link>
            </div>

            {/* ______6_______ */}
            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={clothes} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Pizza-themed
gifts or swag
items</h3>
                  
                </div>
              </Link>
            </div>


 {/* ______7_______ */}
 <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={community} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>send pizza for
charity or
community
organization</h3>
                  
                </div>
              </Link>
            </div>


 {/* ______8_______ */}
 <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={trivia} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Arrange a
Pizza Trivia
Quiz with
pizza related
rewords</h3>
                  
                </div>
              </Link>
            </div>
            

             {/* ______9_______ */}
             <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={email} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Send
informative
email to the
team</h3>
                  
                </div>
              </Link>
            </div>

 {/* ______10_______ */}
 <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={shere} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Recipe
Exchange: ask
team members
to share pizza
recipes</h3>
                  
                </div>
              </Link>
            </div>
        
        {/* ______11_______ */}
 <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={place} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Ask team
members to
recommend
best places to
eat pizza</h3>
                  
                </div>
              </Link>
            </div>
        

        {/* ______12_______ */}
 <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={vs} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}>Pizza Making
Contest:
Organize a
competition
between team
members</h3>
                  
                </div>
              </Link>
            </div>
         </div>
         {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
        <button onClick={closeModal} style={{
                                width: '150px',
                                height: '40px',
                                borderRadius: '5px',
                                border: 'none',
                                backgroundColor: '#FEB723',
                                  
                                fontSize: '15px',
                                transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                                fontSize: '15px'
                              }}>Close</button>
      </Modal>
{/* _______________________________________________________________________________ */}
            <div
              className="project-card"
              style={projectCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="https://blend.co.il/product/%D7%9E%D7%90%D7%A8%D7%96-Heineken-%D7%9C%D7%99%D7%92%D7%AA-%D7%94%D7%90%D7%9C%D7%95%D7%A4%D7%95%D7%AA/7010715.html">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={champ} alt="Project Two" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h1 style={h3Style}>Champions League Final</h1>
                  <h4 style={pStyle}>There is nothing like watching football with beer and food</h4>
                </div>
              </Link>
            </div>
{/* ________________________________________________________________ */}

            <div
              className="project-card"
              style={projectCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onClick={openShavuotModal}
            >
              <div className="image-container" style={imageContainerStyle}>
                <img src={shavout} alt="Project One" style={imgStyle} />
              </div>
              <div className="project-details" style={projectDetailsTextStyle}>
                <h1 style={h3Style}>shavout</h1>

                <h4 style={pStyle}>holiday will take place next month and you should say “happy holiday” to your team</h4>
               
              </div>
            </div>

            <Modal
        isOpen={shavuotModalIsOpen}
        onRequestClose={closeShavuotModal}
        contentLabel="shvout model"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            top: '50%',
            left: '60%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '1000px',
            width: '100%',
            height: '500px'
          },
        }}
      >
        {/*\\\\\\\\\\\\\\\\\\\\\\\יום הפיצה הבין לאומי הצעות \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      
        <div style={rowStyle} >
        <h2>shavout</h2>
      

<ul > 
  <h5>General info that you can use for “Savuot”:</h5>
<li> - falls on the sixth day of Sivan month - Celebrated on June 11th this year.</li>
<li> - Also called The Harvest Holiday, Chag HaBikkurim (Festival of First Fruits), Chag Matan Torah (Time of the Giving the Torah) etc.t</li>
<li> - One of the three pilgrimage in Judaism, along with Pesach and Sukkot</li>
<li> - Falls on the sixth day of Sivan month - Celebrated on June 11th this year</li>
<li> - Shavuot has strong agricultural themes, as it marks the beginning of the wheat harvest in Israel</li>
<li> - Israelis consume 1.642 million liters of milk, with one cow producing 12.074 kg annually, making it clear why one of the most well-known customs of Shavuot is the consumption of dairy foods.</li>
</ul>
{/* ____1_______ */}
<div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={study} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Study Session:</h4>}
Arrange session where
employees can learn
about Shavuot. invite a
knowledgeable speaker</h3>
                  
                </div>
              </Link>
            </div>

{/* ____2_______ */}
            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={picnic} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Outdoor Picnic:</h4>}
                Plan an outdoor picnic
for your team.</h3>
                  
                </div>
              </Link>
            </div>

{/* ____3_____ */}
            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={dairy} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Dairy Tour:</h4>}
                Arrange a tour in a

dairy farm or cheese-
making facility</h3>
                  
                </div>
              </Link>
            </div>

{/* ______4_______ */}
            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={allow} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Fixable working hours:</h4>}
                Provide flexibility in
work schedules to allow
team members to
prepare for the holiday</h3>
                  
                </div>
              </Link>
            </div>

            {/* ______5_______ */}
            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={spaicel} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Personalized gift:</h4>}
                Buy a special gift for
each team member</h3>
                  
                </div>
              </Link>
            </div>

            {/* ______6_______ */}
            <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={happy} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Family connection:</h4>}
                Reach out to your team
members’ families, and
say “Thank you” or wish
them a “Happy holiday”</h3>
                  
                </div>
              </Link>
            </div>


 {/* ______7_______ */}
 <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={recipe} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Recipe Exchange:</h4>}
                ask team members to
share dairy food recipes</h3>
                  
                </div>
              </Link>
            </div>


 {/* ______8_______ */}
 <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={mail} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Let them know:</h4>}
                Send informative email
to the team about the
holiday, its customs and
other interesting facts</h3>
                  
                </div>
              </Link>
            </div>
            

             {/* ______9_______ */}
             <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={cheese} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Cheese Making Contest:</h4>}
                Organize a competition
between team members</h3>
                  
                </div>
              </Link>
            </div>

 {/* ______10_______ */}
 <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={recognition} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Recognition and
Appreciation:</h4>}
Take the
opportunity to show
appreciation for
individuals in your team</h3>
                  
                </div>
              </Link>
            </div>
        
        {/* ______11_______ */}
 <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={cheesedinner} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Celebrate together:</h4>}
                Organize a dairy lunch
or dinner for your team</h3>
                  
                </div>
              </Link>
            </div>
        

        {/* ______12_______ */}
 <div
              className="project-card"
              style={smallprojectCardStyle} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={cheesetrivia} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                <h3 style={h3Style}> {<h4 style={{textDecoration:'underline'}}>Shavuot Trivia Game:</h4>}
                Create a trivia game with
questions about the
holiday's history,
customs, and traditions</h3>
                  
                </div>
              </Link>
            </div>
         </div>
         {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
        <button onClick={closeModal} style={{
                                width: '150px',
                                height: '40px',
                                borderRadius: '5px',
                                border: 'none',
                                backgroundColor: '#FEB723',
                                  
                                fontSize: '15px',
                                transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                                fontSize: '15px'
                              }}>Close</button>
      </Modal>

            <div
              className="project-card"
              style={projectCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="https://api.whatsapp.com/send?phone=972525242172&text=היי+מה+שלומך+עבדת+מצוין+השבוע+מבחינתי+את\ה+יכול+לצאת+מוקדם+יותר+הביתה+">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={allow} alt="Project Four" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h1 style={h3Style}>Fixable working
hours</h1>
                  <h4 style={pStyle}>Offer Nicole the chance
to start late or finish her
workday early on her
birthday</h4>
                </div>
              </Link>
            </div>

            <div
              className="project-card"
              style={projectCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="mailto:your.email@example.com?subject=המון%20מזל%20טוב&body=Dear%20Nicole%2C%0A%0Aהמון%20מזל%20טוב">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={mail} alt="Project Five" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h1 style={h3Style}>Personalized birthday

card:</h1>
                  <h4 style={pStyle}>Send Nicole a birthday
card or email with a
personal touch</h4>
                </div>
              </Link>
            </div>

            <div
              className="project-card"
              style={projectCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/events">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={notforget} alt="Project Six" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h1 style={h3Style}>Do not forget</h1>
                  <h4 style={pStyle}>Add a reminder to your
Calendar and make sure
you don’t miss it</h4>
                </div>
              </Link>
            </div>

            <div
              className="project-card"
              style={projectCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="/project/7">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={team} alt="Project Seven" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h1 style={h3Style}>Team gathering</h1>
                  <h4 style={pStyle}>Organize a meeting
where everyone could
gather to extend their
birthday wishes</h4>
                </div>
              </Link>
            </div>

            <div
              className="project-card"
              style={projectCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="https://wa.me/545287587?text=המון+מזל+טוב+ליום+הולדת+אתה+יכול+להישאר+בבית+היום+לחגוג+את+היום+הולדת+שלך+בכיף+">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={off} alt="Project Eight" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h1 style={h3Style}>Take a day off</h1>
                  <h4 style={pStyle}>Give Nicole the
opportunity to celebrate
her birthday at home.</h4>
                </div>
              </Link>
            </div>

            <div
              className="project-card"
              style={projectCardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to="https://www.xtra.co.il/category/attractions">
                <div className="image-container" style={imageContainerStyle}>
                  <img src={shef} alt="Project Nine" style={imgStyle} />
                </div>
                <div className="project-details" style={projectDetailsTextStyle}>
                  <h1 style={h3Style}>Let’s make it special</h1>
                  <h4 style={pStyle}>Bring in a massage
therapist, a chef or
Personal Trainer and
make it a special day for

Nicole</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


      

export default TaskBoard;
