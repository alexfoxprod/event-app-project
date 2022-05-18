import React from "react";
import "./sidebar";

const Home = () => {
  return (
    <div id="wrapper">
      <div className="overlay"></div>
      <nav
        className="navbar navbar-inverse fixed-top"
        id="sidebar-wrapper"
        role="navigation"
      >
        <ul className="nav sidebar-nav">
          <div className="sidebar-header">
            <div className="sidebar-brand">
              <a href="/">Your Event</a>
            </div>
          </div>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
        </ul>
      </nav>

      <div id="page-content-wrapper">
        <button
          type="button"
          className="hamburger animated fadeInLeft is-closed"
          data-toggle="offcanvas"
        >
          <span className="hamb-top"></span>
          <span className="hamb-middle"></span>
          <span className="hamb-bottom"></span>
        </button>
        <div className="profile"></div>
        <div className="container">
          <div className="row">
            <div className="col-10 col-lg-offset-2">
              <div className="event-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Event name</th>
                      <th scope="col">Country / City</th>
                      <th scope="col">Start date</th>
                      <th scope="col">End date</th>
                      <th scope="col">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Dance</td>
                      <td>Kyiv</td>
                      <td>20.09.22</td>
                      <td>21.09.22</td>
                      <td>10/10</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Handmade</td>
                      <td>Lviv</td>
                      <td>20.09.22</td>
                      <td>21.09.22</td>
                      <td>9/10</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan={1}>Concert</td>
                      <td>Kharkiv</td>
                      <td>20.09.22</td>
                      <td>21.09.22</td>
                      <td>10/10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
