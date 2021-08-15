import React from "react";

export default function SecondaryHeader() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 second" style={{backgroundColor: "beige", padding: 10+"px"}}>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <h6>Home</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h6>Categories</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <h6>About</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h6>Contact</h6>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
