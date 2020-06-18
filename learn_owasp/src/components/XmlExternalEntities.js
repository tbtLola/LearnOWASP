//https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html

import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import XXEXML from "../images/xxeXML.png";
import XXEHTML from "../images/xxeHTML.png"
import XML2A from "../images/XML2a.png";
import XML2B from "../images/XML2b.png"
import XML2C from "../images/XML2c.png"
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
  html,
  body {
    height: 100%;
  }
  flex-grow: 100;
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
  h2 {
    text-align: center;
  }
  .brokenAuthProtection {
    width: 50%;
  }
  .brokenAuth {
    width: 50%;
  }
  table {
    margin: auto;
  }
  table td {
    vertical-align: top;
  }
  p {
    padding-left: 20px;
    font-size: 16px;
  }
  .intro {
    width: 50%;
    margin: auto;
  }
  .mainBody {
    top: 250px;
    position: relative;
  }
`;

const XmlExternalEntities = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>4. XML External Entities</h1>
      </div>
      <div className="mainBody">
        <Accordion 
        title="What are XML External Entities?"
        definition="Lets begin this section by explaining what XML is and why
        it is used in web applications. Extensible markup language (XML) is a tool
        similar to HTML used for storing and transporting data. XML is essentially
        data wrapped in tags. Below in Figure 1a is a sample TLD file containing 
        XML (note the XML version at the top). XML is used to characterize a set 
        of rules for document encodings in a standard format both readable to human 
        and machine. XML is a versatile representation of various forms of information
        intended to share structured data online. Below in figure 1a is a sample of 
        what an XML document looks like. Since XML is a standard in web applications, 
        software is developed to send, receive, parse, store, and display data received
        from XML. Though XML may look similar to HTML (Hyper Text Markup Language),
        it is worth noting that XML was designed to hold data with the primary focus on
        the content and HTML was designed to display the data with it's primary focus being
        how it looks on the front end. Figure 1b is an example of what an HTML document
        looks like. Another notable difference is that XML tags are not predefined while
        HTML tags are."
        definitionTwo="Figure 1a"
        imageXXEXml={XXEXML}
        definitionThree="Figure 1b"
        imageThree={XXEHTML}
        imageXXEHTML={XXEXML}
        definitionFour="Vulnerable XML processors can be exploited by hackers if they can
        take advantage of the processor to upload inappropriate content in the
        XML document, or exploit varying dependences in the code. There are
        various impacts of XEE flaws, especially if an applications accepts XML
        files from untrusted sources. These kind of attacks often target the file systems on 
        the application server, enabling attackers to view files containing data. Attackers
        may also leverage this vulnerability to interact with the backend systems or other 
        endpoints that the application itself usually interacts with."
        
        
        />
        <Accordion
        title="Examples of XML External Entities"
        subheading="Attempting To Extract Data From the Server"
        definition="Since XML allows the transport of data, an attacker may include
        a malicious line of code in an attempt to extract files from the
        server. The XML can be modified to attempt this attack. One way that this can be done
        is by introducing a 'DOCTYPE' element that characterizes an external entity with
        the direct path to the targetted file. Consider Figure 2a, an example that
        requests an employee's address by submitting the XML. Figure 2b illustrates 
        a malicious XML statement with the 'DOCTYPE' element with the assumption that
        there are no guards against an XXE attack. the file /etc/passwd can be retrieved. The
        external entity &xxe; is defined in the XXE payload with a value containing contents from
        the password file. These contents are returned as part of the response. "
        definitionTwo="Figure 2a"
        imageTwo={XML2A}
        definitionThree="Figure 2b"
        imageThree={XML2B}
        subheadingFour="SSRF attacks via XXE"
        definitionFour="There are other examples of XXE attacks such as server side request
        forgery attacks. This flaw can be abused by an attacker by using the server side
        application to make HTTP requests to any URL accessible by the server. This attack
        requires a target URL. Using a value from a defined entity returned in a XML response, an
        attacker can view a URL response. This looks something like in figure 2c."
        definitionFive="Figure 2c"
        imageFive={XML2C}
        />
        <Accordion 
        title="How to protect against XML External Entities"
        definition="A majortiy of XXE vulnerabilities are due to dangerous features used by an application's
        XML parsing library. Some of the functionality from these libraries are not used in the application but
        are enabled anyways (misconfiguration issues). Disabling unused functionality can certainly help patch 
        some of these vulnerabilities."
        definitionTwo="OWASP mentions that the safest way to guard against XXE attacks is to completely disable
        the use of external entities which is sometimes not ideal given the circumstances. Like most of the other
        vulnerabilities listed on this website, XXE attacks can lead to breach of confidential data, a denial-of-service
        attack, and the other examples listed above."
        definitionThree="It can be useful to have integration tests for an end-to-end process covering the XML responses
        as there tends to be some potentially vulnerable information in there. Of course, this is just one element to web
        security and should be used in conjunction with the preventions against all the other vulnerabilities discussed on 
        here."
        />
      </div>
    </TitleStyle>
  );
};

export default XmlExternalEntities;
