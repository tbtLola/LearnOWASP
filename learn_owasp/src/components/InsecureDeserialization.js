import React from "react";
import styled from "styled-components";
import Employee from "../images/Employee.png";
import UserObjectDeserializer from "../images/UserObjectDeserializer.png";
import UserObjectSerializer from "../images/UserObjectSerializer.png";
import InsecDeserialization from "../images/InsecureDeserialization.png"
import Accordion from "../components/Accordion";

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

  .mainBody {
    top: 250px;
    position: relative;
  }
`;

const InsecureDeserialization = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>8.Insecure Deserialization</h1>
      </div>
      <div className="mainBody">
        <Accordion 
        title="What is Insecure Deserialization?"
        definition="Serialization in the context of software development is the process of
        converting an object into a stream of bytes. The purpose of this is
        that it is in a format that can be transmitted to memory, a database
        or a different file. The state of the object is saved until it is
        deserialized. There are numerous different formats the an object can
        be serialized to such as XML, JSON, or YAML. Serialization is a common
        practice in software development, this becomes a problem when unsafe
        streams are being deserialized. Attackers can exploit flaws in
        insecure deserialization, especially when they set up untrusted inputs
        to be deserialized in the web application, which could lead to a
        denial-of-service attack, infiltrating authentication, and remote
        exuection of malicious code."
        imageInsec={InsecDeserialization}/>
        <Accordion
         title="Examples of Insecure Deserialization"
         subheading="Example #1"
         definition="Below is a simple Employee.java class, with various setters and
         getters methods for the username and password. (A poor design)."
         image={Employee}
         definitionTwo="In the UserObjectSerializer.java class we start by setting up
         the user, followed by writing the user object into a user.txt file and serializing
         the user object."
         imageTwo={UserObjectSerializer}
         definitionThree="In the UserObjectDeserializer is where the insecure deserialization
         flaw occurs.The object is read from the file, ideally it would take in the
         user.txt file. This file is deserialized, where the attacker could mock out a
         fake user.txt that is accepted by this method, and deserialized
         into malicious code. It is being deserialized without any form of
         verification."
         imageThree={UserObjectDeserializer}
         />
        <Accordion 
        title="How to Prevent Insecure Deserialization"
        definition="To protect against attacks from insecure deserialization, a developer
         would implement SECURE deserialization. That is, the developer should
         verify and validate data before or at the time of deserialization in
         order to catch the malicious code before it gets a chance to execute.
         There are numerous ways to integrate verification of data before
         deserialization: Implementing digital signatures or checksums, Write an overloaded method for a deserializer class to have custom
         verification for expectations, Additional logging to notify on the user console for any
         exceptions that may occur during deserialization. This ties to a
         another vulnerability on OWASP's radar, Insufficient logging and
         monitoring. If there is an unsually high activity of
         deserialization, then alerting could allow the dev ops to
         investigate before damage is being done. "
         />
      </div>
    </TitleStyle>
  );
};

export default InsecureDeserialization;
