import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"Paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />

      <Post
        nomeUsuario={"Carlos Eduardo"}
        fotoUsuario={"https://picsum.photos/50/51"}
        fotoPost={"https://picsum.photos/200/151"}
      />

       <Post
        nomeUsuario={"Ana Paula"}
        fotoUsuario={"https://picsum.photos/50/52"}
        fotoPost={"https://picsum.photos/200/152"}
      />
    </MainContainer>
    
  );
}

export default App;
