/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Helmet} from 'react-helmet';
//Styles
import '../../globals.scss'
import './Home.scss'
//Components
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';

//Página inicial
class Home extends React.PureComponent {
    render () {
        return (
            <>
                <Helmet>
                    <title>Townie Turismo | Início</title>
                    <link rel="icon" type="image/png" href="images/logo-without-text.png" />
                </Helmet>

                <Header />
                <Banner />

                <div className="containerHome">
                    <h2>Conheça a Townie Turismo, conheça o mundo...</h2>
                    <p>
                        Precisando de férias? A fim de conhecer novos lugares? Ver paisagens incríveis? Ou, simplesmente deseja um passeio de fim de semana? 
                        Veio ao lugar certo, na Townie Turismo você encontra o melhor preço em pacotes de viagens, entre inúmeras opções. 
                        Buscamos sempre agradar, para isso contamos com parcerias com os melhores hotéis, além das opções mais confortáveis de transporte, 
                        tudo isso no melhor preço encontrado em Itabira e Região.
                        <br></br>
                        <br></br>
                        <strong>Um pouco sobre a nossa história:</strong> Atuando no mercado de turismo à bastante tempo, a Townie Turismo começou apenas realizando viagens do interior para capitais, 
                        transportar pessoas sempre foi um prazer para nossos fundadores e a melhor retribuição para estes era ver a gratidão e a felicidade das pessoas ao chegar em 
                        seu destino, o que os alavancou a entrar de vez no ramo de viajens, realizando excursões para pontos turísticos dentro do Brasil. 
                        A cada ano a empresa crescia mais e mais, assim como a ambição da empresa, enquanto às fronteiras nacionais ficavam cada vez menores, 
                        mas o objetivo de ter a gratidão de nossos clientes ainda prevalece.
                    </p>
                </div>
            </>
          );
    }
}

export default Home;