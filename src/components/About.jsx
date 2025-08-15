import { motion } from 'framer-motion'
import { Feather, Award, BookOpen, Users, Heart, Star } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "Fundador da Academia Brasileira de Letras",
      description: "Primeiro presidente da ABL, instituição que presidiu até sua morte"
    },
    {
      icon: BookOpen,
      title: "Mestre do Realismo",
      description: "Revolucionou a literatura brasileira com obras como Dom Casmurro e O Cortiço"
    },
    {
      icon: Users,
      title: "Cronista Social",
      description: "Retratou com maestria a sociedade brasileira do século XIX"
    },
    {
      icon: Heart,
      title: "Humanista Profundo",
      description: "Explorou a psicologia humana com profundidade e ironia inigualáveis"
    }
  ]

  const timeline = [
    { year: "1839", event: "Nascimento no Rio de Janeiro" },
    { year: "1881", event: "Publica 'Memórias Póstumas de Brás Cubas'" },
    { year: "1897", event: "Funda a Academia Brasileira de Letras" },
    { year: "1899", event: "Publica 'Dom Casmurro'" },
    { year: "1908", event: "Falecimento aos 69 anos" }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Feather className="w-8 h-8 text-accent-500 mr-3" />
            <span className="text-accent-600 font-semibold text-lg">Sobre o Autor</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-secondary-900 mb-6">
            O <span className="text-gradient">Bruxo</span> do Cosme Velho
          </h2>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            Joaquim Maria Machado de Assis, o maior nome da literatura brasileira, 
            construiu uma obra imortal que transcende gerações e fronteiras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/20 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-300/20 rounded-full -ml-12 -mb-12"></div>
              
              <h3 className="text-2xl font-bold font-serif mb-6">Biografia</h3>
              <p className="text-lg leading-relaxed mb-6">
                Nascido em 1839 no Rio de Janeiro, Machado de Assis superou as adversidades 
                de sua origem humilde para se tornar o maior escritor brasileiro. Filho de 
                um pintor mulato e de uma portuguesa, enfrentou preconceitos e limitações 
                sociais com determinação e talento extraordinários.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Autodidata, trabalhou como tipógrafo, jornalista e funcionário público, 
                sempre cultivando sua paixão pela literatura. Casou-se com Carolina Xavier 
                de Novais, que foi sua grande companheira e inspiração durante 35 anos.
              </p>
              <p className="text-lg leading-relaxed">
                Sua obra marca a transição do Romantismo para o Realismo no Brasil, 
                apresentando uma análise profunda e irônica da sociedade brasileira 
                do século XIX.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-serif text-secondary-900 mb-8">
              Principais Conquistas
            </h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 flex items-start space-x-4"
              >
                <div className="bg-accent-100 p-3 rounded-lg flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-secondary-700">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold font-serif text-center text-secondary-900 mb-12">
            Linha do Tempo
          </h3>
          <div className="grid md:grid-cols-5 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="bg-accent-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.year}
                </div>
                <p className="text-secondary-700 font-medium">{item.event}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <Star className="w-12 h-12 text-accent-500 mx-auto mb-6" />
            <blockquote className="text-2xl font-serif text-secondary-800 italic mb-6 leading-relaxed">
              "Não consultes dicionários. Cada alma é uma língua que fala."
            </blockquote>
            <p className="text-secondary-600 font-medium">Machado de Assis</p>
            <motion.button
              onClick={() => window.open('https://www.amazon.com.br', '_blank')}
              className="btn-primary mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Suas Obras
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}