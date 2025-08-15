import { motion } from 'framer-motion'
import { BookOpen, Award, Star, Quote } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23bfa094" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start mb-6"
          >
            <div className="bg-accent-100 p-3 rounded-full mr-4">
              <Award className="w-8 h-8 text-accent-600" />
            </div>
            <span className="text-accent-600 font-semibold text-lg">Imortal da Literatura Brasileira</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold font-serif text-secondary-900 mb-6 leading-tight"
          >
            <span className="text-gradient">Machado</span><br />
            de Assis
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            O maior escritor brasileiro de todos os tempos. Explore as obras imortais que definiram a literatura nacional e continuam encantando leitores pelo mundo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.button
              onClick={() => window.open('https://www.amazon.com.br', '_blank')}
              className="btn-primary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              Comprar Livros
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-5 h-5" />
              Conheça a História
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-accent-600">200+</p>
              <p className="text-sm text-secondary-600">Obras Publicadas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent-600">9</p>
              <p className="text-sm text-secondary-600">Romances</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent-600">∞</p>
              <p className="text-sm text-secondary-600">Leitores Inspirados</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-500 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-secondary-300 rounded-full"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-accent-500 mx-auto mb-6" />
              <blockquote className="text-2xl font-serif text-secondary-800 mb-6 italic leading-relaxed">
                "Capitu encarou-me com os seus olhos de ressaca..."
              </blockquote>
              <p className="text-secondary-600 font-medium">Dom Casmurro</p>
              <p className="text-secondary-500 text-sm">Uma das citações mais marcantes da literatura brasileira</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <p className="font-semibold flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Obra Imortal
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}