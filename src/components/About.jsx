import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/about.css';

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header title={header} />

      <div className="section-content-container">
        {data ? (
          <Fade triggerOnce>
            <div className="bento">

              {/* About */}
              <div className="tile about-bio-tile span-4 rspan-2">
                <ReactMarkdown>
                  {data.about.content}
                </ReactMarkdown>
              </div>

              {/* Profile Image */}
              {data.about?.image?.source && (
                <div className="tile about-image-tile span-2 rspan-2">
                  <img
                    src={data.about.image.source}
                    alt={data.about.image.alt}
                  />
                </div>
              )}

              {/* What I Do */}
              {data.about?.whatIDo && (
                <div className="about-what-container">

                  <div className="about-what-header">
                    <h2>{data.about.whatIDo.title}</h2>
                  </div>

                  <div className="about-what-grid">
                    {data.about.whatIDo.items?.map((item, index) => (
                      <div
                        className="tile about-what-tile"
                        key={item.title || index}
                      >
                        <h3>{item.title}</h3>

                        <ReactMarkdown>
                          {item.description}
                        </ReactMarkdown>
                      </div>
                    ))}
                  </div>

                </div>
              )}

            </div>
          </Fade>
        ) : (
          <FallbackSpinner />
        )}
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
