import React from 'react';
import MDBBtn from 'react-bootstrap/Button'
import {MDBCard,MDBCardBody,MDBCardImage,MDBCardTitle,MDBCardText,MDBRow,MDBCol} from 'mdb-react-ui-kit';

export default function Projects() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={require('../styles/Assets/musicianFinder.png')}
            alt='musician-finder img'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Musician Finder</MDBCardTitle>
            <MDBCardText>
            Music lovers can look up their favorite artists and find information about them.
            </MDBCardText>
            <MDBBtn href='https://github.com/KimAH1999/musician-finder.git'>Repo Direct Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={require('../styles/Assets/pateintCareImg.png')}
            alt='PatientCareImg'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Patient Care App</MDBCardTitle>
            <MDBCardText>
             As a health partitioner, this website keeps track on the many patients seen in a daily.
            </MDBCardText>
            <MDBBtn href='https://github.com/KimAH1999/patient-care-app.git'>Repo Direct Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={require('../styles/Assets/PasswordGenerator.png')}
            alt='PasswordGeneratorImg'
            position='top'
            height='265'
          />
          <MDBCardBody>
            <MDBCardTitle>Password Generator</MDBCardTitle>
            <MDBCardText>
              An application to generate differnt passwords with different components.
            </MDBCardText>
            <MDBBtn href='https://github.com/KimAH1999/03--JavaScript.git/"><img src="Assets/img/PasswordGenerator.png'>Repo Direct Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={require('../styles/Assets/TeamProfileGenerator.png')}
            alt='TeamProfileGeneratorImg'
            position='top'
            height= '270px'
          />
          <MDBCardBody>
            <MDBCardTitle>Team Profile Generator</MDBCardTitle>
            <MDBCardText>
              Using Node.js command-line application to generate team members.
            </MDBCardText>
            <MDBBtn href='https://github.com/KimAH1999/Team-Profile-Generator.git'>Repo Direct Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={require('../styles/Assets/startQuiz.png')}
            alt='startQuizAppImg'
            position='top'
            height="295"
          />
          <MDBCardBody>
            <MDBCardTitle>Quiz Application</MDBCardTitle>
            <MDBCardText>
              A count down quiz with five questions which shows true or false.
            </MDBCardText>
            <MDBBtn href='https://github.com/KimAH1999/Code-Quiz-4.git'>Repo Direct Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={require('../styles/Assets/NoteTaker.png')}
            alt='noteTakerImg'
            position='top'
            height='292'
          />
          <MDBCardBody>
            <MDBCardTitle>Note Taker</MDBCardTitle>
            <MDBCardText>
              Saving notes under a title and description.
            </MDBCardText>
            <MDBBtn href='https://github.com/KimAH1999/Note-Taker.git'>Repo Direct Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={require('../styles/Assets/Demo.png')}
            alt='noteTakerImg'
            position='top'
            height='292'
          />
          <MDBCardBody>
            <MDBCardTitle>Code Refracting</MDBCardTitle>
            <MDBCardText>
              First project to understanding HTML and CSS and how they work together.
            </MDBCardText>
            <MDBBtn href='https://github.com/KimAH1999/Code-Refactor-HTML-CSS-Git-.git'>Repo Direct Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={require('../styles/Assets/WeatherDashboardDemo.png')}
            alt='noteTakerImg'
            position='top'
            height='292'
          />
          <MDBCardBody>
            <MDBCardTitle>Weather Dashboard</MDBCardTitle>
            <MDBCardText>
              Weather Application to understanding API and how to search for specfic information.
            </MDBCardText>
            <MDBBtn href='https://github.com/KimAH1999/Weather-Dashboard.git'>Repo Direct Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
