import projects from "../data/projects";

function Receipt() {
  return (
    <div className="receipt-wrapper">
      <div className="receipt-torn-edge receipt-torn-edge-top"></div>
      <div className="receipt">
        <header className="receipt-header">
          <h1 className="receipt-name">Noirrit Chaki</h1>
          <p className="receipt-subtitle">Product Designer at Plum</p>
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
