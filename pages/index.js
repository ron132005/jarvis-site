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
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
          }

          main {
            text-align: center;
            padding: 20px;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }

          .robot-text {
            font-size: 18px;
            line-height: 1.6;
            color: #333;
            margin-bottom: 20px;
          }

          .footer {
            margin-top: 20px;
            color: #777;
          }
        `}</style>
      </Head>

      <main>
        <Header title="Jarvis" />
        <p className="robot-text">I, Ron Funiestas, am proud to introduce 'Jarvis,' a sophisticated bot designed to assist users in accessing accurate and reliable information. Motivated by a passion for enhancing accessibility to knowledge, I embarked on the journey of creating Jarvis with the vision of providing a trustworthy resource for individuals seeking information across various domains. With meticulous attention to detail, I ensured that Jarvis not only delivers information but does so in a grammatically proper manner, catering to diverse linguistic needs and preferences. By prioritizing linguistic correctness, Jarvis aims to break down barriers to comprehension and accessibility, empowering users to engage with information confidently and effectively.</p>

        <p className="robot-text">Through the development of Jarvis, I sought to bridge the gap between users and reliable information sources, recognizing the importance of clarity and accuracy in communication. By infusing Jarvis with advanced linguistic capabilities, I aimed to democratize access to information, making it available to a broader audience irrespective of linguistic proficiency. Whether users seek answers to complex queries or require assistance in navigating intricate topics, Jarvis stands as a dependable ally, ready to provide assistance and guidance. As we embark on this journey together, my commitment remains unwavering—to empower individuals with the tools and resources they need to navigate an increasingly complex informational landscape with confidence and clarity.</p>
      </main>

      <Footer className="footer" />
    </div>
  )
}
