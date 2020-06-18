import React from "react";
import Accordion from "../components/Accordion";
import styled from "styled-components";
import BrokenAccCont from "../images/BrokenAccessControl.png";
import BrokenAccCont2 from "../images/BrokenAccControl2.png";
const TitleStyle = styled.div`
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
    text-align: center;
    font-family: "TestFont";
    font-weight: normal;
    font-style: normal;
    padding-top: 50px;
    padding-left: 300px;
    text-align: center;
    font-size: 50px;
  }

  .mainBody {
    top: 250px;
    position: relative;
  }
`;

const BrokenAccessControls = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>5. Broken Access Controls</h1>
      </div>
      <div className="mainBody">
        <Accordion 
        title="What are Broken Access Controls?"
        definition="Access control is the restrictions on which users (or what entities) can
        carry out certain actions, or access certain resources on a web application. Essentially it
        is how websites control access to certain functions and contents to a subset of users. Large and
        complex websites can have a plethora of access controls as not all users will have the same level 
        of control (that would be chaotic), which is why they require a high level of maintenance in order
        to ensure that these controls are correct for their user base. An example of an access control is
        supplying an interface for administrators so that they can manage the site, this kind of control is
        not enabled for typical users. A large system will have many different users-types, each with a different
        level of access control. To manage all these users, there typically is a site administrator that
        is capable of controlling certain functionalities and possibly delegating these access controls amongst
        the users. Because a site administrator has control over the different functionalities, hackers
        often attempt to exploit broken access controls."
        definitionTwo="Like many of the other vulnerabilities here, broken access control can lead to a 
        data breach as a foreign entity may be able to access data that is not meant for them. Typically they
        would not need to have any form of remote code execution or try to 'hack' into the site, instead they simply
        may search for a loop hole or a mistake in the access controls and authorize themselves that way. It's worth 
        noting that a data breach is not the only concern here, in some cases an attacker could manipulate data or
        steal money online."
        definitionThree="Below is a simple diagram illustrating the different kinds of users, that with broken controls,
        an attacker can gain access to their intended functionalities."
        imageBrokenAcct={BrokenAccCont}
        />
        <Accordion
         title="Examples of Broken Access Control"
         subheading="Changing URL to access different controls"
         definition=" This is a flaw if the website URL simply allows the attacker to enter
         a different account value than intended (assuming that they know what
         they are doing). Suppose that a website is set up take in an account parameter and used to
         execute a query, if this parameter is configurable on the URL and the query successfully executes 
         when changed, an attacker could simply change the URL to access a different account. in Figure 2a
         the application may use a SQL query to retrieve account information. An attacker can may access the user 
         account by modifying the respective parameter in the browser if they change it to
          'http://www.CPSC329example.com/app/accountInfo?acct=hackeracct'"
         definitionTwo="Figure 2a"
         imageTwo={BrokenAccCont2}
         />
        <Accordion 
        title="How to Prevent Broken Access Control"
        definition="The addition of monitoring or logging of certain user activity can help monitor whether or not
        an attack is occuring. Sometimes seeing strange activities or a transaction could be warning that an attacker
        was able to gain some kind of access control that was broken. It is normally better to implement the access controls
        on the backend as much as possible, client-side code could allow attackers to search for sneaky ways to bypass 
        certain authorization. Also having implementations of servlet securities and a single point of control makes maintenance 
        and tracking of the various controls easier. It can be overwhelming if there are 100+ users each with different configurations
        spread throughout the application, this scenario would enable a hacker to search through for vulnerabilities."
        />
      </div>
    </TitleStyle>
  );
};

export default BrokenAccessControls;
