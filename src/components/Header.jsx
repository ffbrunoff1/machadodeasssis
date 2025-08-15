import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, BookOpen, Feather } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-accent-100' : 'bg-white/20'}`}>
              <Feather className={`w-8 h-8 ${isScrolled ? 'text-accent-600' : 'text-secondary-800'}`} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold font-serif ${isScrolled ? 'text-secondary-900' : 'text-secondary-800'}`}>
                Machado de Assis
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-secondary-600' : 'text-secondary-700'}`}>
                Mestre da Literatura
              </p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Sobre', id: 'about' },
              { name: 'Obras', id: 'services' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-accent-600 ${
                  isScrolled ? 'text-secondary-700' : 'text-secondary-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => window.open('https://www.amazon.com.br', '_blank')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comprar Livros
            </motion.button>
          </nav>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-secondary-700' : 'text-secondary-800'}`}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Sobre', id: 'about' },
              { name: 'Obras', id: 'services' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-secondary-700 hover:text-accent-600 font-medium transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => window.open('https://www.amazon.com.br', '_blank')}
              className="btn-primary w-full text-center"
              whileTap={{ scale: 0.95 }}
            >
              Comprar Livros
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}