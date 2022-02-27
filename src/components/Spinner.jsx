import React from "react";
import styled from "styled-components/macro";
import { Title } from "../globalStyles";

export const Loader = styled.div`
   border: 10px solid rgb(243, 243, 243);
   border-top: 10px solid palevioletred;
   border-radius: 50%;
   width: 20px;
   height: 20px;
   margin: 0 auto;
   margin-top: 40px;
   animation: spin 1s linear infinite;

   @keyframes spin {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`;

const Spinner = () => {
   return (
      <>
         <Loader />
         <Title>Loading...</Title>
      </>
   );
};

export default Spinner;
