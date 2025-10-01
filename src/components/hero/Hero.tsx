import { FaGithub, FaLinkedin, FaWhatsapp, } from "react-icons/fa"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Olá, eu sou <span className="text-blue-900">Guilherme</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Desenvolvedor <span className="text-blue-900">Full-Stack</span>
          </h2>
          <p className="text-gray-900 text-2xl max-w-lg mx-auto md:mx-0 mb-8">
            Apaixonado por criar interfaces modernas e funcionais, com foco em performance,
            acessibilidade e boas práticas de desenvolvimento.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start">
            <a
              href="/cv/Desenvolvedor-FrontEnd - Guilherme Henry.pdf"
              download
              className="px-6 py-3 rounded-xl bg-blue-900 text-white font-medium shadow-md hover:bg-green-600 transition"
            >
              Download CV
            </a>

            <div className="flex gap-4 text-2xl text-blue-900">
              <a href="https://github.com/Guilherme-Henry-Dev" target="_blank" className="hover:scale-110 transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/guilhermehenryf" target="_blank" className="hover:scale-110 transition">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/5531987985524" target="_blank" className="hover:scale-110 transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="./src/assets/avatar.jpg"
            alt="Guilherme avatar"
            className=""
          />
        </div>
      </div>
    </section>
  )
}
