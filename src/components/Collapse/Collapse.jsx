import React from "react";
import arrowUp from "../../assets/img/arrow-up.svg";
import arrowDown from "../../assets/img/arrow-down.svg";
import styled from "styled-components";

const Details = styled.details`

@media screen and (min-width : 1201px) {
  width: ${({size})=> size}
}

@media screen and (max-width : 1200px) {
  width:100%
}
`
const Collapse = ({ title, description, size = "100%", status, key  }) => {
  return (
    <React.Fragment>
      <Details open={status} key={key} className="collapse" size={size}>
        <summary className="collapse__summary">
          <h1 className="collapse__heading">{title}</h1>
          <div>
            <p className="">
              <img className="collapse__arrow-up" src={arrowUp} alt="fleche vers le haut" />
            </p>
            <p>
              <img className="collapse__arrow-down" src={arrowDown} alt="fleche vers le haut" />
            </p>
          </div>
        </summary>
        <div className="collapse__description">{description}</div>
      </Details>
    </React.Fragment>
  );
};

export default Collapse;
