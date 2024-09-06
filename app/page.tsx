import Image from "next/image";
import client from "@/db";
import layoutStyles from "./layout.module.css";
import Link from "next/link"
import componentStyles from "./component.module.css";
import Slider from "@/components/slider";
import Rob from "../images/rob.jpg";
import Ricken from "../images/rickon.jpg";
import John from "../images/Snow.jpg";
import Sansa from "../images/Sansa.jpg";
import Arya from "../images/Arya.jpg";
import Bran from "../images/Bran.jpg";
import Ned from "../images/Ned.jpg";
import Lynna from "../images/Lynna.jpg";
import John2 from "../images/Joh2.jpg";
import John3 from "../images/John3.jpg";
import John4 from "../images/John4.jpg";
import John5 from "../images/Hon5.webp";
import StarkLogo from "../images/StarkMain.jpg";
import SliderLogo2 from "../images/NedStark1.jpg";
import SliderLogo3 from "../images/222.jpg";
import SliderLogo4 from "../images/robb.jpg";
import Slider5 from "../images/Slider5.webp"


async function getUserDetails() {
  try {
    // const user = await client.user.findFirst({});
    const users = await client.user.findMany({});
    console.log("these are the user",users);
	  return {
      name: "umar",
      email: "khan"
    }
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const data = await getUserDetails()

  const slides = [
    { url: StarkLogo, title: "Slide1" },
    { url: SliderLogo2, title: "Slide2" },
    { url: SliderLogo3, title: "Slide3" },
    { url: SliderLogo4, title: "Slide4" },
    { url: Slider5, title: "Slide4" },
  ];
  return (
    <>
      <div className={componentStyles.logoContainer}>
        <div className={componentStyles.innerContainer}>
          <div className={componentStyles.slider}>
            <Slider slides={slides} />
          </div>
        </div>
      </div>
      <div className={layoutStyles.detail}>
        <div className={layoutStyles.description}>
          <p className={componentStyles.paragraph}>
            {data?.email}
            {data?.name}
            <Link href="/signup">Signup</Link>
            House Stark of Winterfell is a Great House of Westeros and the royal
            house of the Kingdom of the North. They rule over the vast region
            known as the North.
          </p>
          <p className={componentStyles.paragraph}>
            It is one of the oldest lines of Westerosi nobility by far, claiming
            a line of descent stretching back over eight thousand years.
          </p>
          <ul className={componentStyles.list}>
            <li className={componentStyles.listItem}>
              Winterfell is the ancestral castle
            </li>
            <li className={componentStyles.listItem}>
              It is considered to be the capital of the north
            </li>
            <li className={componentStyles.listItem}>
              It is in the center of the northernmost province
            </li>
            <li className={componentStyles.listItem}>
              Eventually the Starks liberate Winterfell
            </li>
            <li className={componentStyles.listItem}>
              Winterfell was seized by the Starks' enemies
            </li>
            <li className={componentStyles.listItem}>
              First by the Ironborn, and later by the Boltons
            </li>
            <li className={componentStyles.listItem}>
              Winterfell is the site of the great battle
            </li>
            <li className={componentStyles.listItem}>
              Between the Army of the Dead and the Starks and their allies
            </li>
            <li className={componentStyles.listItem}>
              House Stark has held Winterfell for 8,000 years
            </li>
            <li className={componentStyles.listItem}>
              It was built by House Stark's founder, Bran the Builder
            </li>
            <li className={componentStyles.listItem}>
              The castle is located alongside the Kingsroad
            </li>
            <li className={componentStyles.listItem}>
              It is situated atop hot springs which keep the castle warm in
              winters
            </li>
            <li className={componentStyles.listItem}>
              House Greyjoy invades the North
            </li>
            <li className={componentStyles.listItem}>
              The treacherous Theon captures Winterfell
            </li>
          </ul>
          <div className={componentStyles.recommend}>
            <p className={componentStyles.recommendCount}>
              Ned Stark's Six children.
            </p>

            <div className={componentStyles.recommendFriends}>
              <Image
                src={Rob}
                alt="Rob"
                className={componentStyles.recommendPhoto}
              />
              <Image
                src={John}
                alt="John"
                className={componentStyles.recommendPhoto}
              />
              <Image
                src={Sansa}
                alt="Sansa"
                className={componentStyles.recommendPhoto}
              />
              <Image
                src={Ricken}
                alt="Ricken"
                className={componentStyles.recommendPhoto}
              />
              <Image
                src={Arya}
                alt="Arya"
                className={componentStyles.recommendPhoto}
              />
              <Image
                src={Bran}
                alt="Bran"
                className={componentStyles.recommendPhoto}
              />
            </div>
          </div>
        </div>

        <div className={layoutStyles.userReviews}>
          <figure className={componentStyles.review}>
            <blockquote className={componentStyles.reviewText}>
              Lord Eddard Stark was the head of House Stark. Eddard's execution
              and revealing of the illegitimacy of Cersei Lannister's children
              was the spark of the War of the Five Kings, being posthumously
              responsible for the involvement of four of the kings in this war.
            </blockquote>
            <figcaption className={componentStyles.reviewUser}>
              <Image
                src={Ned}
                alt="Ned Star"
                className={componentStyles.reviewPhoto}
              />
              <div className={componentStyles.reviewUserBox}>
                <p className={componentStyles.reviewUserName}>Ned Stark</p>
                <p className={componentStyles.reviewUserDate}>
                  Lord of Winterfell
                </p>
              </div>
              <div className={componentStyles.reviewRating}>7.8</div>
            </figcaption>
          </figure>

          <figure className={componentStyles.review}>
            <blockquote className={componentStyles.reviewText}>
              Lyanna Stark was the daughter of Lord Rickard Stark and sister of
              Brandon, Eddard, and Benjen Stark. She went on to be the wife of
              Rhaegar Targaryen, the Prince of Dragonstone, and mother to Jon
              Snow
            </blockquote>
            <figcaption className={componentStyles.reviewUser}>
              <Image
                src={Lynna}
                alt="Lynna"
                className={componentStyles.reviewPhoto}
              />
              <div className={componentStyles.reviewUserBox}>
                <p className={componentStyles.reviewUserName}>Lynna Stark</p>
                <p className={componentStyles.reviewUserDate}>
                  Wife of Rhaegar Targareyn
                </p>
              </div>
              <div className={componentStyles.reviewRating}>7.8</div>
            </figcaption>
          </figure>

          <button className={componentStyles.btnInline}>
            Show all <span>&rarr;</span>
          </button>
        </div>
      </div>

      <div className={componentStyles.gallerySection}>
        <div className={componentStyles.innerGallerySection}>
          <p className={componentStyles.galleryHeading}>John Snow</p>
          <div className={componentStyles.imageContainer}>
            <Image
              src={John}
              alt="John"
              className={componentStyles.galleryPhoto}
            />
            <Image
              src={John2}
              alt="John"
              className={componentStyles.galleryPhoto}
            />
            <Image
              src={John3}
              alt="John"
              className={componentStyles.galleryPhoto}
            />
            <Image
              src={John4}
              alt="John"
              className={componentStyles.galleryPhoto}
            />
            <Image
              src={John5}
              alt="John"
              className={componentStyles.galleryPhoto}
            />
          </div>
        </div>
      </div>
    </>
  );
}
