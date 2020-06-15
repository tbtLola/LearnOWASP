import React from "react";
import styled from "styled-components";
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

const SecurityMisconfigurations = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>6. Security Misconfigurations</h1>
      </div>
      <div className="mainBody">
        <Accordion 
        title="What is Security Misconfiguration?"
        definition="Security misconfiguration is the failure to implement or the
        accidental misconfiguration of security controls for a website or a
        server. These misconfigurations could be an oversight by the owner of
        the website, leaving the organization in a vulnerable state. Similar
        to broken access control, security misconfigurations occur more
        frequently as the system scales up. A common misconfiguration is
        leaving default configurations they way they are without making the
        necessary changes to accomodate the system, this is a flaw that
        hackers can take advantage of."/>
        <Accordion 
        title="Example of Security Misconfiguration"
        subheading="Failure to set or misconfiguring default applications"
        definition="Suppose an application server is packaged with sample applications and
        before deployment into production, these sample applications are not
        removed. This is a vulnerability that attackers can exploit to
        compromise the server. For example, if the default password was not
        changed for these sample applications and the application itself
        happens to be a console specifically for admins, hackers can gain
        administrative access. Another example would be keeping default permissions the way they are,
        if these permissions are enabled for everyone then this could be
        problematic as, sensitive data could also be prone to a compromise."
        subheadingTwo="Directories in the code repository is not disabled on the server"
        definitionTwo="This can be problematic, exposed source code to the hacker could mean
        that the hacker could steal these classes, attempt to reverse
        engineer, and locally deploy this code on their own machine. This
        gives the attacker some context of the domain which can provide them
        with an entry point for flaws in the application."
        subheadingThree="Application servers showing detailed error messages or stack traces"
        definitionThree="For figuring out went wrong in an application, most developers refer
        to the stack trace, assuming the application threw an error. If
        error-handling is not properly implemented, and the stack trace is
        simply revealed in the UI to all users, this can leak private
        information to those with malicious intent. This is another flaw that
        attackers can seek to exploit once they find it."/>
        <Accordion
         title="How to Prevent Security Misconfiguration"
         definition="There are numerous ways to protect against security misconfigurations.
         Organizations typically configure development, QA, and production
         environments to be identical, that way there is no confusion of the
         overall configurations. Having tight security and maintaining it on a
         test site is important because it will translate over to production as
         well. Having these configurations will simplify the process of setting
         up a new environment as these security details are clearly specified
         and understood."/>
      </div>
      
    </TitleStyle>
  );
};

export default SecurityMisconfigurations;
