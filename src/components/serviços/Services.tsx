import { FaCode, FaServer, FaPaintBrush, FaPalette } from "react-icons/fa"

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-black">
          O que eu posso <span className="text-blue-600">te oferecer?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform">
            <FaCode className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Desenvolvimento Web</h3>
            <p className="text-gray-200 mb-6">
              Criação de interfaces modernas, responsivas e otimizadas, que funcionam em qualquer dispositivo, garantindo performance e conversão.
            </p>
            <a href="#contact" className="bg-blue-400 text-gray-200 px-6 py-2 rounded-full hover:bg-green-400 transition">
              Saiba mais
            </a>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform">
            <FaServer className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Desenvolvimento Back-end</h3>
            <p className="text-gray-200 mb-6">
              Construção de sistemas robustos e seguros, processando dados com eficiência e garantindo escalabilidade para seus projetos.
            </p>
            <a href="#contact" className="bg-blue-400 text-gray-200 px-6 py-2 rounded-full hover:bg-green-400 transition">
              Saiba mais
            </a>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform">
            <FaPaintBrush className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Design Gráfico</h3>
            <p className="text-gray-200 mb-6">
              Desenvolvimento de identidades visuais, logos e materiais gráficos criativos para fortalecer sua marca e atrair clientes.
            </p>
            <a href="#contact" className="bg-blue-400 text-gray-200 px-6 py-2 rounded-full hover:bg-green-400 transition">
              Saiba mais
            </a>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform">
            <FaPalette className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-200 mb-6">
              Criação de experiências digitais envolventes, focadas em usabilidade, estética moderna e interação intuitiva para o usuário.
            </p>
            <a href="#contact" className="bg-blue-400 text-gray-200 px-6 py-2 rounded-full hover:bg-green-400 transition">
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
