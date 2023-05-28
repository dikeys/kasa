import React from "react";
import arrowUp from "../../assets/img/arrow-up.svg";
import arrowDown from "../../assets/img/arrow-down.svg";
import styled from "styled-components";

const Details = styled.details`
width: ${({size})=> size}
`
const Collapse = ({ title, description, size = "100%", status  }) => {
  return (
    <React.Fragment>
      <Details open={status} className="collapse" size={size}>
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
