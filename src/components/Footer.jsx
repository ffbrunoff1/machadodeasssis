import { motion } from 'framer-motion'
import { BookOpen, Heart, Feather, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Obras', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const literaryWorks = [
    'Dom Casmurro',
    'Memórias Póstumas de Brás Cubas',
    'O Cortiço',
    'Quincas Borba',
    'Helena',
    'A Mão e a Luva'
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-800/50 to-secondary-900"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-primary-400 to-accent-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-accent-500 p-3 rounded-lg">
                <Feather className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">Machado de Assis</h3>
                <p className="text-primary-300">Mestre da Literatura</p>
              </div>
            </div>
            <p className="text-primary-200 mb-6 leading-relaxed">
              Explore o universo literário do maior escritor brasileiro. 
              Descubra obras imortais que continuam encantando leitores 
              em todo o mundo.
            </p>
            <motion.button
              onClick={() => window.open('https://www.amazon.com.br', '_blank')}
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              Comprar Livros
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-accent-400">Links Rápidos</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-200 hover:text-accent-400 transition-colors duration-300 text-left"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-accent-400">Obras Principais</h4>
            <ul className="space-y-4">
              {literaryWorks.map((work, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => window.open('https://www.amazon.com.br', '_blank')}
                    className="text-primary-200 hover:text-accent-400 transition-colors duration-300 text-left text-sm"
                  >
                    {work}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-accent-400">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-500" />
                <span className="text-primary-200 text-sm">contato@machadodeassis.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-500" />
                <span className="text-primary-200 text-sm">+55 (21) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent-500" />
                <span className="text-primary-200 text-sm">Rio de Janeiro, RJ</span>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4 text-accent-400">Newsletter</h5>
              <p className="text-primary-300 text-sm mb-4">
                Receba atualizações sobre literatura clássica
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-secondary-800 border border-secondary-700 text-white placeholder-secondary-400 focus:outline-none focus:border-accent-500"
                />
                <button className="bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-r-lg transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-secondary-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-primary-300 text-sm">
                © 2024 Machado de Assis - Todos os direitos reservados
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <p className="text-primary-300 text-sm">
                Criado com <Heart className="w-4 h-4 text-red-500 inline mx-1" /> por{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors italic"
                >
                  Papum
                </a>
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-8"
          >
            <blockquote className="text-lg font-serif italic text-primary-200 max-w-2xl mx-auto">
              "A literatura é uma das expressões mais altas da cultura humana, 
              capaz de tocar corações e transformar mentes através dos séculos."
            </blockquote>
            <p className="text-accent-400 mt-2 font-medium">Machado de Assis</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}