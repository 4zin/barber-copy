import "@fontsource-variable/public-sans";
import { BookButton } from "../components/Buttons";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "/bg-2.jpg",
    "/bg.jpg",
    "/bg-3.jpg",
    "/bg-4.jpg",
    "/bg-5.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(nextImage);
      setNextImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImage, images.length]);

  return (
    <section className="relative h-screen flex flex-col p-2 transition-opacity duration-1000 ease-in-out">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className="flex flex-col justify-center items-center absolute bottom-20 left-32">
        <img
          className="w-3/4"
          src="./Main-Logo.webp"
          alt="Public Image Logo"
          loading="lazy"
        />
        <BookButton />
      </div>
    </section>
  );
}
