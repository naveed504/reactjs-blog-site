import React from 'react'

export default function Slider() {
    const sliderimgsetting = {
        width:'100%',
        height:'500px',
        objectFit : 'cover'
};
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images.pexels.com/photos/2608353/pexels-photo-2608353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="First slide" style={sliderimgsetting}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.pexels.com/photos/115144/pexels-photo-115144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Second slide" style={sliderimgsetting}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.pexels.com/photos/7129614/pexels-photo-7129614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide" style={sliderimgsetting}/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}
