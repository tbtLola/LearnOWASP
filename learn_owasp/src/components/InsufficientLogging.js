import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import * as ReactBootStrap from "react-bootstrap";

const TitleStyle = styled.div`
  body,
  .headerDisplay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    margin-top: 0px;
    background-color: rgb(227, 255, 172);
    height: 133px;
    padding-bottom: 10px;
  }

  h1 {
    font-family: "TestFont";
    font-weight: normal;
    font-style: normal;
    padding-top: 50px;
    padding-left: 300px;
    text-align: center;
    font-size: 50px;
  }
  .bodyStuff {
    top: 250px;
    position: relative;
  }
`;

const InsufficientLogging = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>10. Insufficient Logging and Monitoring</h1>
      </div>
      <div className="bodyStuff">
        <Accordion
          title="What is Insufficient Logging?"
          definition="Logging, monitoring, and detection in terms of web security is the process of 
          tracking activities and transactions that go on through the the web application at any given 
          time. This information is useful for dev ops team that monitor what is going on in production. 
          Specifically if something goes wrong or if there is suspicious activity, then action can be 
          immediately taken. It is important to log these events for auditing purposes, events such as log in 
          attempts, number of logins per day, and how active a user is are important."
          definitionTwo ="It is also importantto monitor certain events in application such as time 
          it takes a process to run, in the event that there is a denial-of-service attack. 
          Many organizations have a dev ops team that set thresholds in place for certain transactions and
          have will escalate their response if that threshold is exceeded. Organizations certainly should not
          make logging available to all users, this is another functionality or feature that is to be restricted
          within the product team of the organization."
        />
        <Accordion
          title="Examples of Insufficient Logging"
          subheading="Scenario #1"
          definition="Suppose that you own a completely online clothing company and there is no logging or any triggers/thresholds
          implemented for transactions. Everything seems fine on a daily-basis until you get a complaint from a user saying that
          their account has been charged numerous times for many days. This scenario can land the organization in hot water as
          their security was weak and a lack of a threshold/logging prevented a quick response, in turn this led to numerous
          fraudulent transactions, negatively impacting the user and the organization itself."
          subheadingTwo="Scenario #2"
          definitionTwo="Users are regularly using a website, on their end things are moving along really slowly but almost unsusable, 
          however this is low impact for them and they are ignoring this inconvenience. This goes on for months in production but no 
          one is noticing it as this is not replicated in QA sites/sandbox sites. Someone from the organization logs in and notices 
          that things are incredibly slow. The dev ops team realize that they are being hit with a denial-of-service attack."        />
        <Accordion
          title="Preventing Insufficient Logging"
          definition="To prevent insufficient logging, organizations should log all access control failures, login activity, validation failures on
          the server-side and any ridiculous high activty (in case there is a brute force attack). It is also to ensure that these logs
          are presented in a way that is easy to interpret and clear to understand in order to avoid any confusion. There are numerous logging 
          softwares out there to use such as datadog cloud monitoring, opsgenie (by atlassian), sumo logic, and splunk. It makes sense for large
          organizations to purchase the enterprise versions of these kinds of software as logging is certainly a key role in mitigating security risks."
          definitionTwo="It is also worth keeping track of notable events in the web application. For example, if a company knows that there will be
          a large event organized by the users, they would monitor closely to ensure that attackers won't take advantage of this and use those event situations
          as a distraction to carry out their intentions."
          definitionThree="It is also important to maintain an audit trail for transactions that involve high value (i.e. dealing with sensitive data, or making a 
            large financial transaction). These audit trails allow the organization to show that they are taking the necessary steps to ensure these transactions
            go through and also can be used to verify that the transaction did complete successfully. In some cases, for example, large financial institutions fall 
            under specific financial regulations, they are required to generate a document as proof of a transaction (if one occurred). In this case the 
            company should ensure that these documents should generate by tracking how many are being generated daily and how many transactions were performed daily."
          definitionFour="Organizations certainly should have a response plan in place in order to recover from attacks."
          />
      </div>
    </TitleStyle>
  );
};

export default InsufficientLogging;
