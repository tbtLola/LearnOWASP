import React from "react";


import styled from "styled-components";

const TitleStyle = styled.div`
  
  
  h1 {
    text-align: center;
  }
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    .active,
    .accordion:hover {
      background-color: #ccc;
    }

    .panel {
      padding: 0 18px;
      display: none;
      background-color: white;
      overflow: hidden;
    }
  }
`;

const BrokenAccessControls = () => {
  return (
    <TitleStyle>
      <h1>Broken Access Controls</h1>
      <button class="accordion">What are broken access controls?</button>
      <div class="panel">
        <p>
          Access control is sometimes used to describe authorization. It is how
          websites control access to certain functions and contents to a subset
          of users. This type of control is typically applied after
          authorization and restricts what certain users can do. Larger and
          complex websites can have a plethora of access controls, and requires
          a high level of maintenance in order to ensure that these controls are
          correct for the users. An example of an access control is supplying an
          interface for administrators to manage the site. A large system may
          have many users, each with a different level of access control. To
          manage all these users, there typically is a site administrator that
          is capable of controlling certain functions and possibly delegating
          these access controls amongst different types of users. Because a site
          administrator has control over the different functionalities, hackers
          often attempt to exploit broken access controls.
        </p>
      </div>

      <button class="accordion">Section 2</button>
      <div class="panel">
        <p>
          <h2>Implementation of unverified data</h2>
          This is a flaw if the website URL simply allows the attacker to enter
          a different account value than intended (assuming that they know what
          they are doing). Example,
          <code>
            pstmt.setString(1, request.getParameter("acct"));
            <br />
            ResultSet results = pstmt.executeQuery();
            <br />
            The hacker may simply attempt the following:
            <br />
            http://test.com/app/accountInfo?acct=hackerAttemptToGainAccessControl
          </code>
          This is a flaw if both the hacker and a non-administrator can access
          the page.
        </p>
      </div>

      <button class="accordion">Section 3</button>
      <div class="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </TitleStyle>
  );
};

export default BrokenAccessControls;
