import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";
export default function About() {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />
      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} alt='awesome beach' className='about-photo' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto,quibusdam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            quibusdam!
          </p>
          <a href='#home' className='btn'>
            {/* TODO : make sure come back to fix the #home */}
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
