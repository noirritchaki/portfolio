import { projects, presentations } from "../data/projects";
import nameImg from "../../assets/name.webp";

function Receipt() {
  return (
    <div className="receipt-wrapper">
      <div className="receipt-torn-edge receipt-torn-edge-top"></div>
      <div className="receipt">
        <header className="receipt-header">
          <img src={nameImg} alt="Noirrit Chaki" className="receipt-name" />
          <p className="receipt-subtitle">Product Designer at Plum</p>
          <div className="receipt-order-info">
            <p>ORDER #001</p>
            <p>FOR YOU</p>
            <p>{new Date().toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })}, {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}</p>
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
                <td colSpan="3"><div className="receipt-divider"> - - - - - - - -</div></td>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="receipt-row">
                  <td className="col-num">{String(index + 1).padStart(2, "0")}</td>
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
                <td colSpan="3"><div className="receipt-divider"></div></td>
              </tr>
            </thead>
            <tbody>
              {presentations.map((item, index) => (
                <tr key={index} className="receipt-row" onClick={() => window.open(item.url, "_blank")}>
                  <td className="col-num">{String(index + 1).padStart(2, "0")}</td>
                  <td className="col-name">
                    {item.name.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="icon-wrap">
                      {item.name.split(" ").slice(-1)[0]}
                      <svg className="arrow-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
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

        <footer className="receipt-footer">
          <p className="footer-line">github.com/noirritchaki</p>
          <p className="footer-line">linkedin.com/in/noirritchaki</p>
          <p className="footer-line">noirrit@email.com</p>
          <div className="receipt-divider"></div>
          <p className="receipt-thankyou">THANK YOU FOR VISITING!</p>
          <div className="receipt-barcode">
            ||| || ||| | || ||| || | ||| || ||| | ||
          </div>
        </footer>
      </div>
      <div className="receipt-torn-edge"></div>
    </div>
  );
}

export default Receipt;
