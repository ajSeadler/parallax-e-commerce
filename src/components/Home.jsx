import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const translate = document.querySelectorAll(".translate");
    const big_title = document.querySelector(".big-title");
    const header = document.querySelector("header");
    const shadow = document.querySelector(".shadow");
    const content = document.querySelector(".content");
    const section = document.querySelector("section");
    const image_container = document.querySelector(".imgContainer");
    const opacity = document.querySelectorAll(".opacity");
    const border = document.querySelector(".border");

    let header_height = header.offsetHeight;
    let section_height = section.offsetHeight;

    const handleScroll = () => {
      let scroll = window.pageYOffset;
      let sectionY = section.getBoundingClientRect();

      translate.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
      });

      opacity.forEach((element) => {
        element.style.opacity = (scroll / (sectionY.top + section_height)) * 4;
      });

      big_title.style.opacity = -scroll / (header_height / 2) + 1;
      shadow.style.height = `${scroll * 0.5 + 300}px`;

      content.style.transform = `translateY(${
        (scroll / (section_height + sectionY.top)) * 50
      }px)`;
      image_container.style.transform = `translateY(${Math.max(
        (scroll / (section_height + sectionY.top)) * -50,
        -(titleY.top - header_height)
      )}px)`;

      border.style.width = `${
        (scroll / (sectionY.top + section_height)) * 30
      }%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <header>
      <h1 className="big-title translate" data-speed="0.9" style={{zIndex:'1', marginTop:'-1.5%'}}>
      NATURE<span>MARKET</span>
        </h1>
        <img
          src="/lowmount.png"
          className="mountain2 translate"
          data-speed="0.3"
          alt=""
        />
        <img
          src="/midmount.png"
          className="mountain3 translate"
          data-speed="0.5"
          alt=""
        />
        <img
          src="/mistysky.png"
          className="sky translate"
          data-speed="0.5"
          alt=""
        />
      </header>

      <section>
        <div className="shadow"></div>
        <div className="container">
          <div className="content opacity">
            <h3 className="title">
              Our Story
              <div className="border"></div>
            </h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              quaerat commodi, fugiat culpa quis voluptas eius, ipsum, corporis
              accusantium velit maxime tempore id ab at facere in quisquam
              distinctio provident? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nostrum excepturi repellendus animi numquam quam
              labore dicta placeat omnis voluptas sed corrupti consequuntur
              ullam quos recusandae minus ratione, accusantium autem! Iste.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              exercitationem, dolor mollitia quod quaerat dolorum nisi porro ad
              similique, quae minima molestias aspernatur. Inventore, pariatur.
              Consequuntur quae similique iure alias! <br></br>
              <br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus libero quasi laboriosam deleniti enim perspiciatis
              laudantium, consequatur eum aliquid architecto vitae, tempora,
              distinctio quaerat pariatur aut quidem inventore a labore.
            </p>
          </div>

          <div className="imgContainer opacity">
            <img src="/abtimg.jpg" alt="NatureWonders Store" />
          </div>

          <Link to="/products" className="mini-nav">
            View Products
          </Link>
        </div>
        <div className="shadow"></div>
        <div className="container">
          <div className="imgContainer opacity" style={{marginTop:'-17%'}}>
            <img src="https://images.pexels.com/photos/4499511/pexels-photo-4499511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="NatureWonders Store" />
          </div>
          <div className="content opacity">
            <h3 className="title">
              Nature Redefined
              <div className="border"></div>
            </h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              quaerat commodi, fugiat culpa quis voluptas eius, ipsum, corporis
              accusantium velit maxime tempore id ab at facere in quisquam
              distinctio provident? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nostrum excepturi repellendus animi numquam quam
              labore dicta placeat omnis voluptas sed corrupti consequuntur
              ullam quos recusandae minus ratione, accusantium autem! Iste.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              exercitationem, dolor mollitia quod quaerat dolorum nisi porro ad
              similique, quae minima molestias aspernatur. Inventore, pariatur.
              Consequuntur quae similique iure alias! <br></br>
              <br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus libero quasi laboriosam deleniti enim perspiciatis
              laudantium, consequatur eum aliquid architecto vitae, tempora,
              distinctio quaerat pariatur aut quidem inventore a labore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
