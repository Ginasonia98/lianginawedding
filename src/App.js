import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import EventCard from "./EventCard";
import ReactPlayer from "react-player";

function App() {
  const playerRef = useRef(null);

  useEffect(() => {
    const startAudio = () => {
      const internalPlayer = playerRef.current?.getInternalPlayer();
      if (internalPlayer?.playVideo) {
        internalPlayer.playVideo();
      }
    };

    const handlePlayerReady = () => {
      if (playerRef.current) {
        playerRef.current.seekTo(14);
        startAudio();
      }
    };

    // Add a delay to ensure the player is ready
    const timeoutId = setTimeout(handlePlayerReady, 1000);

    // Add event listener to handle autoplay block
    window.addEventListener("click", startAudio);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("click", startAudio);
    };
  }, []);

  const cardData = [
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lsrxlmjqxi6hed",
      title: "Panci Sup Stainless ",
      text: "Panci Stockpot terbuat dari stainless steel tebal berkualitas, anti karat dan sangat kuat. Dengan desain yang cantik dan elegan. Cocok digunakan untuk memasak dan menghangatkan makanan.",
      link: "https://shopee.co.id/%E3%80%90Gratis-Ongkir%E3%80%91Panci-Sup-Stainless-Termasuk-Saringan-Kukusan-Panci-Besar-serbaguna-Kapasitas-Tinggi-Panci-Sop-Panci-Aladin-Steamer-Panci-Marsha-High-Pot-Panci-Tinggi-Stainless-Steel-Tebal-Panci-Sup-Tutup-Kaca-Soup-Pot-Panci-Mie-Rebus-Panci-i.1129388801.24217763177?xptdk=64db3dc1-5b2a-4132-8c70-e11e4fcab206",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7qukz-lheyoregeghg96",
      title: "Diffuser Humidifier Aromatherapy",
      text: "1 Pcs Diffuser 500ml Remote dengan 4 Essential Oil Garansi Seumur Hidup.",
      link: "https://shopee.co.id/DIFFUSER-HUMIDIFIER-AROMATHERAPY-500ML-FREE-4-ESSENTIAL-OIL-10ML-BY-PHARMACIE-ORGANICO-GARANSI-SEUMUR-HIDUP-i.431200900.6496916941?xptdk=57aafe4f-3329-4419-ab72-3d6bfb99e28f",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r992-lpujgsw0dp88b4",
      title: "SKINTIFIC 5X Ceramide Barrier Serum",
      text: "Serum yang diformulasikan untuk mengoptimalkan perbaikan skin barrier yang rusak. ",
      link: "https://shopee.co.id/%E3%80%90BIG-SIZE-50mL%E3%80%91-SKINTIFIC-5X-Ceramide-Barrier-Serum-50ml-Facial-Serum-Ceramide-Serum-Skintific-Serum-i.292211284.22066294732?xptdk=65555256-2203-4dfd-8b3e-ad340dce54b2",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/d2c766e0d665f539141752e33a54b2ca",
      title: "Maxim Galaxy Wajan Penggorengan Tanpa Tutup",
      text: "Maxim Galaxy dilengkapi dengan cover sebagai penutupnya agar masakan lebih cepat matang sempurna. Terbuat dari teflon berkualitas food grade dengan desain galaxy atau luar angkasa membuat memasak Anda menjadi lebih menyenangkan.",
      link: "https://shopee.co.id/Maxim-Galaxy-Wajan-Penggorengan-Tanpa-Tutup-Wok-without-Cover-36-cm-(GAL36WOK)-i.178828848.6153569487?xptdk=c2c458b2-aacb-4a25-9761-3709c9804d8e",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 5",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 6",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 7",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 8",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 9",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 10",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 11",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 12",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />

      <Container className="mt-5 mb-5 flex-grow-1">
        <h1 className="text-center">Gift Wishlist</h1>
        <Row className="mt-4">
          {cardData.map((card, index) => (
            <Col md={4} key={index} className="mb-4">
              <EventCard
                image={card.image}
                title={card.title}
                text={card.text}
                link={card.link}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <FooterComponent />

      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=1WCIrw85zbQ"
        playing
        controls
        onReady={() => playerRef.current.seekTo(14)}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default App;
