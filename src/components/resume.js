import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://github.com/SriSaiKrishnan/myportfolio/blob/master/src/DP.jpeg?raw=true"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Sri Sai Krishnan V</h2>
            <h4 style={{color: 'grey'}}>Software Engineer in Test</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am an experienced Software Engineer in Test that includes Test Plan, Test Case Creation, Defect Management, STLC, Web-based testing, Mobility testing, Agile Methodologies, DevOps across different domains. Expertise in automating the Web & Mobile Application tests that include Selenium, JUnit, TestNG, Appium, Cucumber, Jenkins, Java, Concordian, Selenide, Protractor.
            Experienced in the testing of Education, Healthcare, Retail Banking domains.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Selaiyur, Chennai</p>
            <h5>Phone</h5>
            <p>(+91) 8056200680</p>
            <h5>Email</h5>
            <p>krishnansai99@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={20115}
              schoolName="Jeppiaar Engineering College"
              schoolDescription="B.Tech Information Technology. CGPA - 7.5"
               />

               <Education
                 startYear={2010}
                 endYear={2011}
                 schoolName="Higher Secondary School"
                 schoolDescription="Computer Sciene Percentage - 90%"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

              <Experience
                startYear={2019}
                endYear = {2020}
                jobName="Software Engineer in Test"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Test Engineer"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

            <Experience
              startYear={2015}
              endYear={2018}
              jobName="Quality Assurance Analyst"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
                <Skills
                skill="Java"
                progress={100}
                />
                <Skills
                  skill="Selenium"
                  progress={100}
                  />
                  <Skills
                    skill="Appium"
                    progress={80}
                    />
                    <Skills
                      skill="Rest API"
                      progress={70}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;