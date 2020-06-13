import React, { useState, useRef } from "react";
import styled from "styled-components";
import DownArrow from "./SideArrow";

const AccordionSection = styled.div`
  
  width: 70%;
  display: flex;
  flex-direction: column;
  margin:auto;
  
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
    border-radius:12px; 
    border:solid; 
  }

  .accordion:hover,
  .active {
    background-color: #ccc;
  }

  .accordionTitle {
    /* font stuff here */
  }

  .accordionIcon {
    margin-left: auto;
    transition: transform 0.6 ease;
  }

  .rotate {
    transform: rotate(90deg);
  }

  .accordionContent {
    margin:auto; 
    background-color: white;
    overflow: hidden;
    transition: max-height 0.6s ease;
    width:98%; 

    /* max-height: 0; */
  }

  .accordionText {
    /** Font stuff here */
    padding: 18px;
  }
`;

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordionIcon");

  const content = useRef(null);

  function onClickAccordionHandler() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordionIcon" : "accordionIcon rotate"
    );
  }

  return (
    <AccordionSection>
      <button
        className={`accordion ${setActive}`}
        onClick={onClickAccordionHandler}
      >
        <p className="accordionTitle">{props.title}</p>
        <DownArrow className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordionContent"
      >
        <div
          className="accordionText"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </AccordionSection>
  );
}

export default Accordion;
