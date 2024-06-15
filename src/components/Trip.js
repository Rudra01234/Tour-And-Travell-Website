import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/7.jpg"

function Trip (){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData 
                   image={Trip1}
                   heading= "Trip in Indonesia"
                   text = "Indonesia is the world's largest archipelagic state and the 14th-largest country by area, at 1,904,569 square kilometres (735,358 square miles). With over 279 million people, Indonesia is the world's fourth-most-populous country and the most populous Muslim-majority country."                
                />

                <TripData 
                   image={Trip2}
                   heading= "Trip in Malesia"
                   text = "Malaysia is a federal constitutional monarchy that consists of 13 states and three federal territories, which include the capital city region of Kuala Lumpur, the administrative capital of Putrajaya, and the island of Labuan off the coast of East Malaysia."                
                />

                <TripData 
                   image={Trip3}
                   heading= "Trip in France"
                   text = "France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in nearly all aspects of culture, including cuisine, wine-making, politics, philosophy, music, art, film, fashion, literature, and sports."   
                />
            </div>
        </div>
    )
}

export default Trip;
