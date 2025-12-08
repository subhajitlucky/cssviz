import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import RootLayout from '@/components/layout/RootLayout'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import TopicPage from '@/pages/topics/TopicPage'
import Concepts from '@/pages/Concepts'
import Visualizers from '@/pages/Visualizers'
import { topics } from '@/data/topics'

const App = () => {
  const location = useLocation()

  return (
    <RootLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/visualizers" element={<Visualizers />} />
          {topics.map((topic) => (
            <Route key={topic.path} path={topic.path} element={<TopicPage topic={topic} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </RootLayout>
  )
}

export default App
