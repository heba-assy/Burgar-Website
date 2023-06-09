import styled from 'styled-components';
import FeaturePic from '../../images/FeaturePic.jpg';

export const FeatureContainer = styled.div`
   background: linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.1))
   , url(${FeaturePic});
   height: 100vh;
   max-height: 500px;
   background-position: center;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   align-items: center;
   padding: 0 1rem;
   color: #fff;

   h1 {
    font-size: clamp(3rem, 5vw, 5rem);
   }

   p {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 5vw, 3rem);
   }
`


export const FeatureButton = styled.button`
   font-size: 1.4rem;
   padding: 0.5rem 3rem;
   border: none;
   background: #e31837;
   color: #fff;
   transition: 0.2s ease-out;

   &:hover {
    color: #000;
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;

`