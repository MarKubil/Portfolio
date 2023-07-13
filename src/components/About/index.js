import React, { useEffect, useRef } from 'react';
import './styles.css';

function About() {
  const text =
    'I am a diligent and highly motivated IT professional with a proven track record in front-end web development. With a strong ability to rapidly learn new tasks, I excel in crafting visually appealing and user-friendly websites. My expertise lies in HTML, CSS, JS, React, and Node.js, and I continuously enhance my programming skills through online platforms. I am passionate about creating engaging web experiences and staying up-to-date with the latest industry trends. Additionally, I hold a certification in first aid, including CPR and AED training. Committed to personal growth and maintaining a healthy lifestyle, I am dedicated to delivering high-quality results in the ever-evolving field of web development.';

  const words = text.split(' ');
  const spanRefs = useRef([]);

  useEffect(() => {
    spanRefs.current.forEach((span, index) => {
      const animationDelay = (index * 0.1) + 0.1;
      span.style.animation = `fade-in 0.8s ${animationDelay}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
    });
  }, []);

  return (
    <div className="box">
      <div className="content row">
        <h2 className='text-center'>Hello again</h2>
        <p id="text-about">
        {words.map((word, index) => (
          <span key={index} ref={el => (spanRefs.current[index] = el)}>
            {word}
            {'  '}
          </span>
        ))}
        </p>
      </div>
    </div>
  );
}

export default About;