export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto text-center px-6">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-600">Entre em contato comigo pelas redes abaixo:</p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="mailto:guilherme.henrydesigner@gmail.com" className="hover:text-blue-900">Email</a>
        <a href="https://github.com/Guilherme-Henry-Dev" target="_blank" className="hover:text-blue-900">GitHub</a>
        <a href="https://www.linkedin.com/in/guilhermehenryf" target="_blank" className="hover:text-blue-900">LinkedIn</a>
      </div>
    </section>
  )
}
