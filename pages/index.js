import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jarvis</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to bottom, #2e3b4e, #1c2331);
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            padding: 20px;
            color: #fff;
          }

          main {
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            background-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
            max-width: 800px;
            margin: 20px;
            position: relative;
            overflow: hidden;
          }

          .robot-text {
            font-size: 20px;
            line-height: 1.8;
            color: #fff;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }

          .quote {
            font-style: italic;
          }

          .footer {
            margin-top: 20px;
            color: #ccc;
          }

          .shapes {
            position: absolute;
            top: -50px;
            left: -50px;
            width: calc(100% + 100px);
            height: calc(100% + 100px);
            z-index: -1;
          }

          .shape {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: shape-animation 8s linear infinite alternate;
          }

          .circle1 {
            width: 100px;
            height: 100px;
            top: 20%;
            left: 10%;
          }

          .circle2 {
            width: 80px;
            height: 80px;
            top: 60%;
            left: 60%;
          }

          .triangle {
            width: 0;
            height: 0;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 87px solid rgba(255, 255, 255, 0.1);
            top: 50%;
            left: 80%;
            transform: rotate(180deg);
          }

          .rectangle {
            width: 150px;
            height: 75px;
            top: 70%;
            left: 20%;
          }

          .lines {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .line {
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.1);
            animation: line-animation 5s linear infinite alternate;
          }

          .line1 {
            top: 10%;
          }

          .line2 {
            top: 40%;
          }

          .line3 {
            top: 70%;
          }

          @keyframes shape-animation {
            0% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(10px);
            }
          }

          @keyframes line-animation {
            0% {
              transform: scaleX(1);
            }
            100% {
              transform: scaleX(1.2);
            }
          }
        `}</style>
      </Head>

      <div className="shapes">
        <div className="shape circle1"></div>
        <div className="shape circle2"></div>
        <div className="shape triangle"></div>
        <div className="shape rectangle"></div>
      </div>

      <div className="lines">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>

      <main>
        <Header title="Jarvis" />
        <p className="robot-text">I, Ron Funiestas, am proud to introduce 'Jarvis,' a sophisticated bot designed to assist users in accessing accurate and reliable information. Motivated by a passion for enhancing accessibility to knowledge, I embarked on the journey of creating Jarvis with the vision of providing a trustworthy resource for individuals seeking information across various domains. With meticulous attention to detail, I ensured that Jarvis not only delivers information but does so in a grammatically proper manner, catering to diverse linguistic needs and preferences. By prioritizing linguistic correctness, Jarvis aims to break down barriers to comprehension and accessibility, empowering users to engage with information confidently and effectively.</p>

        <p className="robot-text">Through the development of Jarvis, I sought to bridge the gap between users and reliable information sources, recognizing the importance of clarity and accuracy in communication. By infusing Jarvis with advanced linguistic capabilities, I aimed to democratize access to information, making it available to a broader audience irrespective of linguistic proficiency. Whether users seek answers to complex queries or require assistance in navigating intricate topics, Jarvis stands as a dependable ally, ready to provide assistance and guidance. As we embark on this journey together, my commitment remains unwavering—to empower individuals with the tools and resources they need to navigate an increasingly complex informational landscape with confidence and clarity.<span className="quote">"Together, let's shape a future fueled by knowledge and innovation."</span></p>
      </main>

      <Footer className="footer" />
    </div>
  )
}
