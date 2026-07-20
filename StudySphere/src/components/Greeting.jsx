import HeroIllustration from "../assets/illustrations/hero.svg";

function Greeting({name}) {
      const hour=new Date().getHours();  
      let greeting;
      
      if(hour<12)
       greeting="Good Morning";
     else if(hour<18)
        greeting="Good Afternoon";
    else
        greeting="Good Evening";


return (
    <section className="flex justify-between items-center bg-gradient-to-r from-indigo-500 to-sky-400 rounded-3xl p-8 shadow-lg">

  <div>
    <p className="text-indigo-100 text-lg">
      {greeting},
    </p>

    <h1 className="text-4xl font-bold text-white mt-1">
      {name} 👋
    </h1>

    <p className="text-indigo-100 mt-4 max-w-md">
      Stay focused and keep learning today.
    </p>
  </div>

  <div>
    <img
    src={HeroIllustration}
    alt="Student studying"
    className="w-36 mr-6"
/>
  </div>

</section>
  );
}

export default Greeting;