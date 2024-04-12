import Card from "./Card";
function Tours({tours, removeTour}){
    return(
        <div className="container">
            <div>
              <h2 className="title">Plan A Trip</h2>
            </div>
            <div className="cards">
                {
                    // pass key always when using map function
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;