import styled from 'styled-components';


export const ProjectContainer = styled.div`
    .wrapper{
        display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));

    }
    .underline{
      width:100%;
      margin-top: 50px; 
      border: 0.5px solid black;
      opacity: 0.3;
  }
`