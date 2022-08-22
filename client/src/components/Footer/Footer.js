import React, { useState, useEffect } from "react";
import "./Footer.css";
function Footer() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setInterval(() => {
      const user1 = localStorage.getItem("authToken");
      if (user1) {
        setUser(user1);
      } else {
        setUser("");
      }
    }, 500);
  }, []);
  return (
    <>
      {!user ? (
        <footer class="footer">
          <div class="footer__addr">
            <h1 class="footer__logo">Bug.Squashers</h1>
          </div>

          <ul class="footer__nav">
            <li class="nav__item">
              <ul class="nav__ul">
                <li>
                  <a href="#">Bug Squashers</a>
                </li>

                <li>
                  <a href="#">HyperLink Policy</a>
                </li>

                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </li>

            <li class="nav__item nav__item--extra">
              <ul class="nav__ul nav__ul--extra">
                <li>
                  <a href="#">Copyright Policy</a>
                </li>

                <li>
                  <a href="#">Terms of Use</a>
                </li>

                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>

                <li>
                  <a href="#">Contact</a>
                </li>

                {/* <li>
      <img
        alt=""
        className="logo_img"
        src="https://4.bp.blogspot.com/-abhM9jw9s44/TBNyEnxpVsI/AAAAAAAAACE/JWrUlBnPiJs/s200/govt_of_ind_logo.png"
      />
      <span className="logo-text">Govt of india</span>
    </li>
    <li>
      <img
        alt=""
        className="logo_img"
        src="https://4.bp.blogspot.com/-abhM9jw9s44/TBNyEnxpVsI/AAAAAAAAACE/JWrUlBnPiJs/s200/govt_of_ind_logo.png"
      />
      <span className="logo-text">Govt of india</span>
    </li> */}
              </ul>
            </li>
          </ul>

          <div class="legal">
            <p>&copy; 2022 SIH. All rights reserved.</p>

            <div class="legal__links">
              <img
                alt=""
                className="logo_img"
                src="https://4.bp.blogspot.com/-abhM9jw9s44/TBNyEnxpVsI/AAAAAAAAACE/JWrUlBnPiJs/s200/govt_of_ind_logo.png"
              />
              <span className="logo-text">Govt of india</span>
            </div>
          </div>
        </footer>
      ) : (
        ""
      )}
    </>
  );
}

export default Footer;
{
  /* <div className="Container">
<footer>
  <div className="footer-content">
    <table className="table1">
      <tr>
        <td>copyright policy </td>
        <td>privacy policy</td>
        <td>terms and condition</td>
      </tr>
      <tr>
        <td>C</td>
        <td>Hyperlink policy</td>
        <td>Sitemap</td>
      </tr>
    </table>
    <p className="copyright"> &copy;{new Date().getFullYear()} SIH</p>
  </div>
  <div className="col_2">
    <div className="logo_1">
      <img
        alt=""
        className="logo_img"
        src="https://4.bp.blogspot.com/-abhM9jw9s44/TBNyEnxpVsI/AAAAAAAAACE/JWrUlBnPiJs/s200/govt_of_ind_logo.png"
      />
      <span className="logo-text">gov of india</span>
    </div>
    <div className="logo_2">
      <img
        alt=""
        className="logo_img"
        src="https://4.bp.blogspot.com/-abhM9jw9s44/TBNyEnxpVsI/AAAAAAAAACE/JWrUlBnPiJs/s200/govt_of_ind_logo.png"
      />
      <span className="logo-text">gov of india</span>
    </div>
  </div>
</footer>
</div> */
}
