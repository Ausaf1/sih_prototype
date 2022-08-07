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
        <div className="Container">
          <footer>
            <div className="footer-content">
              <table>
                <tr>
                  <td>copyright policy </td>
                  <td>privacy policy</td>
                  <td>terms and condition</td>
                </tr>
                <tr>
                  <td>disclaimer</td>
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
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Footer;
