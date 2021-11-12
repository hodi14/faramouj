import { useState } from "react";

export default function ContactLocation(props) {
    const [state, setState] = useState("");
    const toggleState = () => {
      if (state == "") setState("show");
      else setState("");
    };

    const country = props.country;
    const mail = props.mail;
    const tel = props.tel;
    return (
        <div className={`location ${country}`}>
            <div className={`details ${state}`}>
              <h6>{country.toUpperCase()}</h6>
              <ul>
                <li>
                  <label>Email</label>
                  <a href={`mailto:${mail}`}>{mail}</a>
                </li>
                <li>
                  <label>Tel</label>
                  <a href={`tel:${tel}`}>{tel}</a>
                </li>
              </ul>
            </div>
            <i className="fas fa-map-marker-alt" onClick={() => toggleState()}/>
          </div>
    )
}