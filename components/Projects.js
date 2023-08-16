export default function Projects() {

  return (
    <section className="text-zinc-400 body-font bg-zinc-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2  w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">My Projects</h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-zinc-400 text-opacity-90">In the past, I have worked on a variety of projects that focused on React, Tailwind CSS, Next.js, and Firestore DB. These experiences have allowed me to refine my skills in front-end development, UI design, and working with real-time databases, enabling me to deliver dynamic and responsive web applications tailored to specific project requirements.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-3/4 p-4 md:mx-auto">
            <div className="bg-zinc-800 bg-opacity-40  p-6 rounded-lg">
              <img className="h-40 rounded md:h-auto w-full object-cover object-center mb-6" src="/images/BountifulBudgeting.png" alt="An images for the application called Bountiful Budgeting" />
              <h3 className="tracking-widest text-green-400 text-xs font-medium title-font">Full-Stack</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Bountiful Budgeting</h2>
              <p className="leading-relaxed text-base">Bountiful Budgeting is a web application built with Next.js, Tailwind CSS, and Next UI that helps you manage your monthly budget by tracking your estimated income, recurring expenses, and offers user authentication with login and sign-up pages.</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-3/4 p-4 md:mx-auto">
            <div className="bg-zinc-800 bg-opacity-40  p-6 rounded-lg">
              <img className="h-40 rounded md:h-auto w-full object-cover object-center mb-6" src="/images/gameFlickFinder.png" alt="An images for the application called Game Flick Finder" />
              <h3 className="tracking-widest text-green-400 text-xs font-medium title-font">Front-End</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Game Flick Finder</h2>
              <p className="leading-relaxed text-base">GameFlickFinder, a website dedicated to helping users discover and explore a curated list of games. Users can browse through the collection of games, view trailers, and access download links. </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-3/4 p-4 md:mx-auto">
            <div className="bg-zinc-800 bg-opacity-40  p-6 rounded-lg">
              <img className="h-40 rounded md:h-auto w-full object-cover object-center mb-6" src="/images/CheckovToDo.png" alt="An images for the application called Checkov To Do App" />
              <h3 className="tracking-widest text-green-400 text-xs font-medium title-font">Full-Stack</h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Checkov ToDo</h2>
              <p className="leading-relaxed text-base">Checkov is a simple and efficient todo list app built using React.js, Tailwind CSS, and Firebase authentication. The app Allows the user to add, delete, and mark tasks as done, with a secure login and signup.</p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  )
}