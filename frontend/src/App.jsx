import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import ChatWidget from './components/chat/ChatWidget'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Education />
                <Achievements />
                <Contact />
            </main>
            <ChatWidget />
        </>
    )
}

export default App
