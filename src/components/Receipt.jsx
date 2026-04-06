import { useState } from "react";
import { projects, presentations } from "../data/projects";
import nameImg from "../../assets/name.webp";
import ImageGallery from "./ImageGallery";

import climbBatHang from "../../assets/bat-hang copy.png";
import climbBigPinch from "../../assets/big-pinch copy.png";
import climbBumpIt from "../../assets/bump-it copy.png";
import climbDepression from "../../assets/depression copy.png";
import climbDynoThunder from "../../assets/dyno-thunder copy.png";
import climbEasyPeasy from "../../assets/easy-peasy copy.png";
import climbPink from "../../assets/pink copy.png";
import climbRedFrog from "../../assets/red-frog copy.png";
import climbSketchy from "../../assets/sketchy copy.png";
import climbSlab from "../../assets/slab copy.png";
import climbSloper from "../../assets/sloper copy.png";
import climbYellowDyno from "../../assets/yellow-dyno copy.png";
import climbYellowRanger from "../../assets/yellow-ranger copy.png";

const climbingImages = [
  climbBatHang, climbBigPinch, climbBumpIt, climbDepression,
  climbDynoThunder, climbEasyPeasy, climbPink, climbRedFrog,
  climbSketchy, climbSlab, climbSloper, climbYellowDyno, climbYellowRanger,
];

function Receipt() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  return (
    <>
    <div className="receipt-wrapper displace">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="displacementFilter1" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" seed="1" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="displacementFilter2" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" seed="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="displacementFilter3" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" seed="3" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="displacementFilter4" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" seed="4" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="displacementFilter5" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" seed="5" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="receipt-torn-edge receipt-torn-edge-top"></div>
      <div className="receipt">
        <header className="receipt-header">
          <a href="/" className="receipt-name-link">
            <img src={nameImg} alt="Noirrit Chaki" className="receipt-name" />
          </a>
          <p className="receipt-subtitle">Product Designer</p>
          <a href="mailto:noirrit.work@gmail.com" className="receipt-email">
            NOIRRIT.WORK@GMAIL.COM
          </a>
          <div className="receipt-order-info">
            <p>ORDER #001</p>
            <p>FOR YOU</p>
            <p>
              {new Date().toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              ,{" "}
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
          <div className="receipt-customer-note">
            <p>CUSTOMER NOTE:</p>
            <p>
              I CRAFT EXPERIENCES THAT MAKE HEALTHCARE & INSURANCE SIMPLER FOR
              PEOPLE. CURRENTLY AT PLUM.
            </p>
          </div>
          <div className="receipt-divider"></div>
        </header>

        <section className="receipt-section">
          <table className="receipt-table">
            <thead>
              <tr>
                <th className="col-num">#</th>
                <th className="col-name">PROJECTS</th>
                <th className="col-year">YEAR</th>
              </tr>
              <tr className="receipt-divider-row">
                <td colSpan="3">
                  <div className="receipt-divider"> - - - - - - - -</div>
                </td>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="receipt-row">
                  <td className="col-num">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="col-name">{project.name}</td>
                  <td className="col-year">{project.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="receipt-divider"></div>

        <section className="receipt-section">
          <table className="receipt-table">
            <thead>
              <tr>
                <th className="col-num">#</th>
                <th className="col-name">PRESENTATIONS / PRESS</th>
                <th className="col-year">YEAR</th>
              </tr>
              <tr className="receipt-divider-row">
                <td colSpan="3">
                  <div className="receipt-divider"></div>
                </td>
              </tr>
            </thead>
            <tbody>
              {presentations.map((item, index) => (
                <tr
                  key={index}
                  className="receipt-row"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  <td className="col-num">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="col-name">
                    {item.name.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="icon-wrap">
                      {item.name.split(" ").slice(-1)[0]}
                      <svg
                        className="arrow-icon"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </td>
                  <td className="col-year">{item.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="receipt-divider"></div>

        <section className="receipt-section">
          <table className="receipt-table">
            <thead>
              <tr>
                <th className="col-num">#</th>
                <th className="col-name">A BIT MORE</th>
                <th className="col-year">QTY</th>
              </tr>
              <tr className="receipt-divider-row">
                <td colSpan="3">
                  <div className="receipt-divider"></div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="receipt-row" onClick={() => setGalleryOpen(true)}>
                <td className="col-num">01</td>
                <td className="col-name">
                  ROCK CLIMBING.
                  <br />
                  EQUAL PARTS THRILL AND BRUISES.
                  <br />
                  WORTH IT EVERY TIME.
                </td>
                <td className="col-year">42</td>
              </tr>
              <tr className="receipt-row">
                <td className="col-num">02</td>
                <td className="col-name">
                  SURFING.
                  <br />
                  TRIED IT. LOVED IT.
                </td>
                <td className="col-year">7</td>
              </tr>
              <tr className="receipt-row">
                <td className="col-num">03</td>
                <td className="col-name">
                  COFFEE BREWING.
                  <br />
                  BREWING (AND DRINKING) WAY TOO MUCH.
                  <br />
                  NO PLANS TO STOP.
                </td>
                <td className="col-year">365</td>
              </tr>
              <tr className="receipt-row">
                <td className="col-num">04</td>
                <td className="col-name">
                  TRYING MUSIC PRODUCTION.
                  <br />
                  MAKING BEATS BETWEEN DESIGN SPRINTS.
                </td>
                <td className="col-year">12</td>
              </tr>
              <tr className="receipt-row">
                <td className="col-num">05</td>
                <td className="col-name">
                  VIDEOS.
                  <br />
                  CREATING A BUNCH OF THEM.
                </td>
                <td className="col-year">23</td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="receipt-divider"></div>

        <footer className="receipt-footer">
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/noirritchaki/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              LINKEDIN
              <svg
                className="arrow-icon"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://x.com/jontychaki"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              X
              <svg
                className="arrow-icon"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jontychaki"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              INSTAGRAM
              <svg
                className="arrow-icon"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="receipt-divider"></div>
          <p className="receipt-stars">* * *</p>
          <p className="receipt-thankyou">THANK YOU FOR VISITING!</p>
          <div className="receipt-barcode">
            ||| || ||| | || ||| || | ||| || ||| | ||
          </div>
        </footer>
      </div>
      <div className="receipt-torn-edge"></div>
    </div>
    <ImageGallery
      images={climbingImages}
      isOpen={galleryOpen}
      onClose={() => setGalleryOpen(false)}
    />
    </>
  );
}

export default Receipt;
