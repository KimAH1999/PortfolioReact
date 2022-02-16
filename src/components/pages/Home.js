import React from 'react';
import Typewriter from 'typewriter-effect';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: 'rgb(19, 91, 185)',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

function Home() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>  
        <Typewriter
         onInit={(typewriter) => {
           typewriter.typeString("Personal cite about me created by me... Kimberly Y Aguilar Hermoso 😋").start();
          }}
        />
      </div>
      <div style={styles.content}>
 
      Hello! Greetings, 
      I am a junior software developer, and my dedication and aspiration is to learn as much as I can with the help of the Google, Youtube, and my education with Mesa Community College and UCSD Extention Bootcamp. I discovered my admiration to programming back in high school when I participate in the Robotics club for 3 years. I realized my path for life was not to become a Respiratory Therapist because of the sad environment I wouldn't be able to handle. Overall, I am a helpful person who participated in many organizations, clubs, and programs back in the days which grew my connections, knowledge, skills, and the understanding of proper leadership skills and team work. 
      </div>
    </div>
  );
}

export default Home;