import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img height={"600px"} src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img height={"600px"} src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img height={"600px"} src="https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1788&q=80" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
