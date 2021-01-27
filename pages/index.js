import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'

import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg });
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - SériesQuiz</title>
        <meta property="og:image" content="https://www.escrevasuahistoria.net/wp-content/uploads/2019/04/motion-picture-cinema-PMXQXRY-e1554849783656-concentrate-1024x492.jpg"></meta>
      </Head>

      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>Séries Quiz</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault()
              router.push(`/quiz?name=${name}`)
              console.log("Fazendo uma submissão por meio do react")
            }}
            >
              <p>Vamos testar seus conhecimentos sobre séries....</p>
              
              <input 
                onChange={function (event) {
                  // console.log(event.target.value)
                  // name = event.target.value

                  setName(event.target.value)
                }} 
                placeholder="Qual seu nome?" 
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <p>Vamos testar seus conhecimentos sobre séries....</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/Matheusf159/aluraquiz-seriesquiz"/>
    </QuizBackground>
  )
}
