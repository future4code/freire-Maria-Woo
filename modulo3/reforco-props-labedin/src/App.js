import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Maria from './img/Maria.png'
import projeto from './img/projeto.jpeg'
import projeto2 from './img/projeto2.jpeg'
import mail from './img/mail.png'
import endereco from './img/endereco.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {Maria} 
          nome="Maria" 
          descricao="Oi, eu sou Maria. Estou fazendo a atividade de reforço da LABENU"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardPequeno 
          imagem= {mail}
          contato="Email: gracia@gmail.com"
        />

        <CardPequeno 
          imagem= {endereco} 
          contato="Endereço: Rua Brasil" 
        />
        
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={projeto} 
          nome="Experiencia 1" 
          descricao="Coordenadora de projetos no mercado veterinário" 
        />
        
        <CardGrande 
          imagem={projeto2}
          nome="Experiencia 2" 
          descricao="Coordenadora de projetos em Pesquisa e Desenvolvimento." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>


      <div className="page-section-container">
        <h2>Entre em contato</h2>
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png" 
          texto="WhatsApp" 
        />
      </div>
    </div>
  );
}

export default App;
