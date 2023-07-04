import React from 'react';

function PhotoGallery(){
    return (
        <>
        <div className="photogallery_heading">
            <p id="photogallery_text">PHOTO &nbsp;GALLERY</p>
        </div>
        <div className="PhotoGallery_main">
            <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id='img1' src="./images/img_1.jpeg"   alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 id="text1">First slide label</h5>
        <p id="text1" >Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img id='img1' src="./images/img_1.jpeg"  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 id="text1">Second slide label</h5>
        <p id="text1">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img id='img1' src="./images/img_1.jpeg"  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 id="text1">Third slide label</h5>
        <p id="text1">Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span id="text1" class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span id="text1" class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </>
    );
}

export default PhotoGallery;
