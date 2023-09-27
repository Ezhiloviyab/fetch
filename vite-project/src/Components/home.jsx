import react from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
const Home = () => {
    return ( 
       
            
        <div className='container-fluid'>
       <div className="Homepage">
    <MDBContainer>
      <MDBRow>

        <MDBCol sm='6'><h2>Welcome to our Amazon community</h2>
<button type="button" className='btn'>Explore more</button>

          
        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0' id="col">
        <div className='d-flex flex-row ps-3 pt-5 text-light justify-content-center'>
            Log in
          </div>

          <div className='d-flex flex-column text-light justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3 text-light " style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

            <MDBBtn className="mb-4 px-5 mx-5" color='info' size='lg'>Login</MDBBtn>
            
            <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
   </div>
   </div>
    );
};

export default Home;
