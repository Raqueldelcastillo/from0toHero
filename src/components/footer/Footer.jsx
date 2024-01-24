
// import React from "react";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
// } from "mdb-react-ui-kit";

// export default function App() {
//   return (
//     <MDBFooter className="text-center" color="white" bgColor="dark">
//       <MDBContainer className="p-4">
//         <section className="mb-4">
//           <MDBBtn
//             outline
//             color="light"
//             floating
//             className="m-1"
//             href="#!"
//             role="button"
//           >
//             <MDBIcon fab icon="facebook-f" />
//           </MDBBtn>

//           <MDBBtn
//             outline
//             color="light"
//             floating
//             className="m-1"
//             href="#!"
//             role="button"
//           >
//             <MDBIcon fab icon="twitter" />
//           </MDBBtn>

//           <MDBBtn
//             outline
//             color="light"
//             floating
//             className="m-1"
//             href="#!"
//             role="button"
//           >
//             <MDBIcon fab icon="google" />
//           </MDBBtn>

//           <MDBBtn
//             outline
//             color="light"
//             floating
//             className="m-1"
//             href="#!"
//             role="button"
//           >
//             <MDBIcon fab icon="instagram" />
//           </MDBBtn>

//           <MDBBtn
//             outline
//             color="light"
//             floating
//             className="m-1"
//             href="#!"
//             role="button"
//           >
//             <MDBIcon fab icon="linkedin-in" />
//           </MDBBtn>

//           <MDBBtn
//             outline
//             color="light"
//             floating
//             className="m-1"
//             href="#!"
//             role="button"
//           >
//             <MDBIcon fab icon="github" />
//           </MDBBtn>
//         </section>

//         <section className="mb-4" >
//           <p >
//             <div>
//             Thank you for subscribing to our Resources letter, we appreciate
//             your time and we would love to hear from you</div>
//           </p>
//         </section>

        
//       </MDBContainer>

//       <div className="text-center p-3" style={{ backgroundColor: "#642F46" }}>
//         © 2024 Copyright:
//         <a className="text-white" href="https://www.edx.org/">
//           <br />
//           edX
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.google.co.uk/"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-2"
            href="https://www.instagram.com/"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-3"
            href="https://www.linkedin.com/"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-4"
            href="https://github.com/"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
        
        <section className="mb-4">
          <p>
            We would love to hear from you and any suggestions or improvement
            for our proyect.
          </p>
        </section>
        <section className="">
          <MDBRow></MDBRow>
        </section>
      </MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(67, 2, 3, 6)" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="https://www.edx.org/">
          <br />
          edX
        </a>
      </div>
    </MDBFooter>
  );
}