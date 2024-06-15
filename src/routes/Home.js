import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home (){
   return(
    <>
     <Navbar />
      <Hero
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1613339027986-b94d85708995?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       title ="Your Journey Your Story"
       text="Choose Your Favorite Destination."
       buttonText="Travel Plan"
       url="/"
       btnClass="show"
       />
       <Destination />
       <Trip />
       <Footer />
    </>
   )
}

export default Home;