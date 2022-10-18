import React from "react";
import Card from "react-bootstrap/Card";
import { ImRedo2 } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Stella Erhuvwuoghene Okotete </span>
            from <span className="purple"> Delta State, Nigeria.</span>
            <hr />
            A graduate of Benson Idahosa University, Benin City, where she earned a Bachelor of Arts degree in International Studies and Diplomacy. 
            Stella also holds a Diploma in Law from the Rivers State College of Arts and Sciences, a Master's degree in Public Administration and a Master's Degree in Peace and Conflict Resolution. 
            Hon. Stella is the Co-Founder E'Girls Right Foundation and an alumnus of Harvard Kennedy School Certificate program for Emerging Leaders, and the Lagos Business School (Pan-Atlantic University) Enterprise Development Centre program in Entrepreneurial Management. 
            She is an Honorary Senior Member of the Chartered Institute of Bankers of Nigeria, and also a Fellow of the Institute of Chartered Economists of Nigeria, 
            the Institute of Management Consultants and the Institute of Corporate Administration a recipient of the Africa Humanitarian Initiative Awards. 
            She possesses a Certificate in New Models of Business in Society from the University of Virginia, U.S.A and a Certificate of Risk Management in Banking Programme from INSEAD, Fontainebleau France.
            <br />
            Hon. Stella has a rich mix of professional experience in both the public and private sectors. Between 2011 and 2015, she was a focal person for the Millennium Development Goals (MDGs) in Delta State, 
            where she provided leadership in establishing and executing programs with agency groups to ensure that the goals as well as the targets of the United Nations Millennium Declaration were met. 
            Prior to her appointment as Special Assistance (SA) MDG's in Delta State, Hon. Stella had a brief stint in politics, having served as an elected Councilor in Ughelli-North Local Government Area, 
            a position that helped sharpen her understanding of the socio-economic needs of neglected communities. She was able to deploy this knowledge to ensure that neglected communities in the Local Government Area were positively impacted by the state's Millennium Development Goals' strategic intervention programs. 
            She is keenly involved in volunteer work and has worked with Internally Displaced Persons at IDP Camps in Ughelli, Maiduguri and Abuja.
            <br />
            Hon. Stella Erhuvwuoghene Okotete is currently the Executive Director, Business Development of the Nigerian Export-Import Bank (NEXIM) as appointed by His Excellency, Muhammadu Buhari, President of the Federal Republic of Nigeria, on April 20, 2017. 
            Upon assumption to office as Executive Director, Business Development, NEXIM Bank, Stella brought with her a lot of diverse experiences and insights gained in both the private and public sectors to her work as Executive Director. 
            Her job portfolio at NEXIM includes providing operational leadership for the bank, conceptualizing and developing new products/services as well as improving the existing ones, planning and overseeing new marketing initiatives, 
            supervising the business development division of the bank for optimal performance, among others. She immediately warmed up to her position and took over the reins of leadership of the Business Development Directorate with the same zeal and resilience that characterized her previous achievements. 
            Overtime, she initiated products such as the 'Women and Youth Export Facility' as well as the 'Small and Medium Export Enterprise Facility', referenced to the Export Development Fund. 
            These products were developed out of her passion for job creation, industrialization, and foreign exchange generation in line with the Economic Recovery and Growth Plan (ERGP) of President Muhammadu Buhari and Sustainable Development Goals (SDGs) agenda, 
            specifically poverty eradication, economic stability and gender equality. She is currently developing export diversification initiatives to help upscale the nation's non-oil export sector and increase foreign exchange earnings in line with the federal government's diversification policy and programs.
            Stella continues to develop sustainable growth initiatives for the nation's non-oil export sector and remains steadfast in championing and advocating for the rights of the girl-child. She is an active POLITICIAN OF THE APC, a Philanthropist, humanitarian and an ardent supporter of good governance.
            <br />
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImRedo2 /> Volunteering
            </li>
            <li className="about-activity">
              <ImRedo2 /> Job Creation
            </li>
            <li className="about-activity">
              <ImRedo2 /> Travelling
            </li>
            <li className="about-activity">
              <ImRedo2 /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
