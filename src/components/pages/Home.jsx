import "./style/Home.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";

export const Home = () => {
  
  let navigate = useNavigate();
const goToCourse=()=>{
  
  navigate(`/course`);

}
  return (
    <div className="main-app">

<Carousel>
  <Carousel.Item>
    <img
    width='800px'
    height='600px'

      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp4325544.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>קורס html</h3>
      <p>לחצו כאן לצפייה בשיעורים</p>
      <Button onClick={()=>{goToCourse()}} variant="danger">מעבר לקורס</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width='800px'
      height='600px'
      className="d-block w-100"
      src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/685755/cover-0809-ExpressKoaMeteorSails-Waldek_Newsletter-2644c54d0e047fe1e1301aafe9fbee7d-fe46d4be023f2160c1eeea54a8767f55.png"
      alt="Second slide"
    />

    <Carousel.Caption style={{color:'white'}}>
      <h3>קורס javaScript</h3>
      <p>לחצו כאן לצפייה בשיעורים</p>
      <Button onClick={()=>{goToCourse()}}>מעבר לקורס</Button>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
    </div>
  );
};
