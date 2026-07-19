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
    <section>
    <h1>{greeting},{name}👋🏻</h1>
    <p>You're 80% towards today's goal.</p>
    </section>
  );
}

export default Greeting;