import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import gui from './img/guilherme.jpg'
import maria from './img/maria.jpg'
import guifoto from './img/guifoto.jpg'
import mariafoto from './img/mariafoto.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
          <Post
          nomeUsuario={'Guilherme'}
          fotoUsuario={gui}
          fotoPost={guifoto}
        />
          <Post
          nomeUsuario={'Maria'}
          fotoUsuario={maria}
          fotoPost={mariafoto}
        />
      </MainContainer>
      
    );
  }
}

export default App;
