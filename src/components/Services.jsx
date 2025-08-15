import { motion } from 'framer-motion'
import { BookOpen, Star, Heart, Award, ExternalLink, ShoppingCart } from 'lucide-react'

export default function Services() {
  const mainBook = {
    title: "O Peregrino",
    description: "\"O Peregrino\" é uma obra-prima de John Bunyan, que narra a jornada espiritual de Cristão, um homem em busca da salvação. Através de uma alegoria rica e envolvente, o livro explora temas como fé, redenção e perseverança diante das adversidades. Ao longo do caminho, Cristão enfrenta desafios e encontra personagens que representam virtudes e vícios humanos. Esta leitura atemporal inspira reflexões profundas sobre a luta interna de cada indivíduo em direção ao autoconhecimento e à conexão com o divino.",
    image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1755272017413_0.png",
    category: "Romance Clássico",
    features: ["Narrativa Envolvente", "Reflexões Profundas", "Obra Atemporal", "Leitura Transformadora"]
  }

  const classicWorks = [
    {
      title: "Dom Casmurro",
      description: "Romance que explora o ciúme e a dúvida através da narrativa de Bentinho sobre Capitu.",
      category: "Romance",
      year: "1899",
      icon: Heart
    },
    {
      title: "Memórias Póstumas de Brás Cubas",
      description: "Narrativa revolucionária contada por um defunto autor, marco do realismo brasileiro.",
      category: "Romance",
      year: "1881",
      icon: Star
    },
    {
      title: "O Cortiço",
      description: "Retrato naturalista da sociedade brasileira através da vida em um cortiço.",
      category: "Romance",
      year: "1890",
      icon: BookOpen
    },
    {
      title: "Quincas Borba",
      description: "Continuação filosófica que explora a loucura e a sociedade através do Humanitismo.",
      category: "Romance",
      year: "1891",
      icon: Award
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23bfa094" fill-opacity="0.03"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 text-accent-500 mr-3" />
            <span className="text-accent-600 font-semibold text-lg">Obras Literárias</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-secondary-900 mb-6">
            Biblioteca <span className="text-gradient">Imortal</span>
          </h2>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            Descubra as obras-primas que definiram a literatura brasileira e continuam 
            encantando leitores em todo o mundo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={mainBook.image}
                alt={mainBook.title}
                className="w-full h-full object-cover min-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {mainBook.category}
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold font-serif text-secondary-900 mb-6">
                  {mainBook.title}
                </h3>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  {mainBook.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {mainBook.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Star className="w-5 h-5 text-accent-500" />
                      <span className="text-secondary-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={() => window.open('https://www.amazon.com.br', '_blank')}
                    className="btn-primary flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Comprar Agora
                  </motion.button>
                  <motion.button
                    onClick={() => window.open('https://www.amazon.com.br', '_blank')}
                    className="btn-secondary flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Ver Detalhes
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-serif text-center text-secondary-900 mb-12">
            Outras Obras <span className="text-gradient">Clássicas</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {classicWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center flex flex-col h-full"
              >
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <work.icon className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="text-xl font-bold font-serif text-secondary-900 mb-3">
                  {work.title}
                </h4>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-sm bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">
                    {work.category}
                  </span>
                  <span className="text-sm text-accent-600 font-semibold">
                    {work.year}
                  </span>
                </div>
                <p className="text-secondary-700 mb-6 flex-grow">
                  {work.description}
                </p>
                <motion.button
                  onClick={() => window.open('https://www.amazon.com.br', '_blank')}
                  className="btn-secondary w-full mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explorar Obra
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white rounded-2xl shadow-lg p-8"
        >
          <BookOpen className="w-16 h-16 text-accent-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold font-serif text-secondary-900 mb-4">
            Desperte Sua Paixão pela Literatura
          </h3>
          <p className="text-lg text-secondary-700 mb-8 max-w-2xl mx-auto">
            Mergulhe no universo literário de Machado de Assis e descubra por que suas obras 
            continuam relevantes e transformadoras mais de um século depois.
          </p>
          <motion.button
            onClick={() => window.open('https://www.amazon.com.br', '_blank')}
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comprar Coleção Completa
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}