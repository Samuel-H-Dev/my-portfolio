


export default function Hero(){


  return(
    <section className="text-zinc-400 bg-zinc-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-contain object-center rounded" alt="hero" src="/images/ProfilePhoto.jpg" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-14 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Samuel Holmes
        <br className="hidden lg:inline-block" /> Full-Stack Software Engineer
      </h1>
      <p className="mb-8 leading-relaxed"> I'm a passionate software engineer ready to make my mark in the tech world. Armed with a solid foundation in software development principles and problem-solving, I thrive on continuous learning and exploring new technologies. Collaboration and effective communication are key to me as I enjoy working in teams and value constructive feedback. With a focus on creativity, problem-solving, and attention to detail, I'm dedicated to crafting elegant and efficient solutions to complex challenges. </p>
      <div className="flex justify-center">
       <a href="https://github.com/Samuel-H-Dev" target="_blank"> <button className="inline-flex rounded-full text-white bg-green-500 border-0 py-1 px-1 focus:outline-none hover:bg-green-600  text-lg aspect-square"><img src="/images/GithubLogo.png" className="max-w-12 max-h-12 w-fit" /></button></a>
       <a href="https://firebasestorage.googleapis.com/v0/b/bocacode-fb.appspot.com/o/candidates%2Fresumes%2FSamuel-Holmes-resume.pdf?alt=media" target="_blank"> <button on className="ml-4 inline-flex text-zinc-400 bg-zinc-800 border-0 py-1 px-1 focus:outline-none hover:bg-zinc-700 hover:text-white rounded-full text-lg aspect-square"><div className=" bg-green-500 rounded-full"><img src="/images/resume.png" className="max-w-14 p-2  max-h-14" /></div></button> </a>
       <a href="https://linkedin.com/in/samuel-holmes-dev" target="_blank"> <button on className="ml-4 inline-flex text-zinc-400 bg-zinc-800 border-0 py-1 px-1 focus:outline-none hover:bg-zinc-700 hover:text-white rounded-full text-lg aspect-square"><img src="/images/LinkedinLogo.png" className="max-w-14 max-h-14 w-fit" /></button> </a>
      </div>
    </div>
  </div>
</section>
  )
}