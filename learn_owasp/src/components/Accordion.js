import React, { useState, useRef } from "react";
import styled from "styled-components";
import DownArrow from "./SideArrow";

const AccordionSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: auto;

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
    border-radius: 12px;
    border: solid;
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
    margin: auto;
    background-color: white;
    overflow: hidden;
    transition: max-height 0.6s ease;
    width: 98%;

    /* max-height: 0; */
  }

  .accordionText {
    /** Font stuff here */
    padding: 18px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding-top:10px; 
  }

  p {
    width: 90%;
    margin: auto;
  }

  /* .definition {
    width: 90%;
    margin: auto;
  } */

  h2 {
    font-family: "TestFont";
    font-weight: normal;
    font-style: normal;
    text-align: center;
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
        <h2 className="accordionTitle">{props.title}</h2>
        <DownArrow className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordionContent"
      >
        <h2>{props.subheading}</h2>
        <p>{props.definition}</p>
        <img src={props.image} alt="" />

        <h2>{props.subheadingTwo}</h2>
        <p>{props.definitionTwo}</p>
        <img src={props.imageTwo} alt="" />
       
       
        <h2>{props.subheadingThree}</h2>
        <p>{props.definitionThree}</p>
        <img src={props.imageThree} alt="" />
        
        <div
          className="accordionText"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </AccordionSection>
  );
}

export default Accordion;
