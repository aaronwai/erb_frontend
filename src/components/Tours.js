import React from "react";

export default function Tours() {
  return (
    <section className='section' id='tours'>
      <div className='section-title'>
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className='section-center tours-center'>
        {/* <!-- first tour --> */}
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img
              src='./images/tour-1.jpeg'
              className='tour-img'
              alt='tour image'
            />
            <p className='tour-date'>august 26th, 2024</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>tibet adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              quibusdam!
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                  china
                </span>
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img
              src='./images/tour-2.jpeg'
              className='tour-img'
              alt='tour image'
            />
            <p className='tour-date'>august 26th, 2024</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>tibet adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              quibusdam!
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                  china
                </span>
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img
              src='./images/tour-3.jpeg'
              className='tour-img'
              alt='tour image'
            />
            <p className='tour-date'>august 26th, 2024</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>tibet adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              quibusdam!
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                  china
                </span>
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img
              src='./images/tour-1.jpeg'
              className='tour-img'
              alt='tour image'
            />
            <p className='tour-date'>august 26th, 2024</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>tibet adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              quibusdam!
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                  china
                </span>
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
