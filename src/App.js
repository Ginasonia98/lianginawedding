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
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-22100-w2g2toyr5sivb4",
      title: "Patung Dekorasi Space Mickey",
      text: "Patung Dekorasi Space Mickey Dengan Nampan Tray Gold Stainless Steel Organizer Meja dan Pot Vase Bunga Artificial Detail Bagus Baki Serbaguna Tempat Kosmetik Perhiasan Kunci Alat Tulis Mempercantik Dekorasi Interior Ruangan Kerja Meja Receptionis.",
      link: "https://shopee.co.id/Patung-Dekorasi-Space-Mickey-Dengan-Nampan-Tray-Gold-Stainless-Steel-Organizer-Meja-dan-Pot-Vase-Bunga-Artificial-Detail-Bagus-Baki-Serbaguna-Tempat-Kosmetik-Perhiasan-Kunci-Alat-Tulis-Mempercantik-Dekorasi-Interior-Ruangan-Kerja-Meja-Receptionist-i.24580126.22800852832?xptdk=c946e87f-1e73-4d30-aaf6-487fbce06223",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7qul9-lk63l4c4bnyzd2",
      title:
        "Cermin oval kapsul / wastafel mirror / kamar mandi toilet / cermin led touchscreen",
      text: "Cermin aesthetic ini menggunakan lampu LED untuk mengeluarkan ambient cahaya.",
      link: "https://shopee.co.id/Cermin-oval-kapsul-wastafel-mirror-kamar-mandi-toilet-cermin-led-touchscreen-i.20568857.16598381946?xptdk=138749ab-80ba-4a3d-8cbc-dcdd63a4ed23",
    },
    {
      image: "https://down-id.img.susercontent.com/file/cb1b2e6a4230a6a0a54a2848f689d990",
      title: "Meja tamu cofee table meja samping sudut marmer marble unik custom shabby murah meja",
      text: "Meja bundar cocok untuk ruang tamu dan meja samping kamar tidur maupun sofa.",
      link: "https://shopee.co.id/Meja-tamu-cofee-table-meja-samping-sudut-marmer-marble-unik-custom-shabby-murah-meja-i.145138135.15385438720?xptdk=d9ed99cd-d2f8-419b-aca2-8ea3dad08691",
    },
    {
      image: "https://down-id.img.susercontent.com/file/f204c3d82fc1bed01c9965e8722ab942",
      title: "Dekoruma Nola Jam Dinding Minimalis Diameter 33cm - White",
      text: "DEKORUMA - Nola Jam Dinding Minimalis Diameter 33cm - White.",
      link: "https://shopee.co.id/Dekoruma-Nola-Jam-Dinding-Minimalis-Diameter-33cm-White-i.740621307.17445299194?xptdk=e918e82d-6a26-48b7-9078-586157a1b619",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134201-23030-inuq16u2o8nv18",
      title: "READY STOCK JAM DINDING GOLD JAM DINDING MEWAH JAM DINDING ROMAWI",
      text: "JAM DINDING GOLD JAM DINDING MEWAH JAM DINDING ROMAWI.",
      link: "https://shopee.co.id/READY-STOCK-JAM-DINDING-GOLD-JAM-DINDING-MEWAH-JAM-DINDING-ROMAWI-i.17914398.18675100464?xptdk=e30edadf-2f64-4515-a1d5-f058ef10c96b",
    },
    {
      image: "https://down-id.img.susercontent.com/file/sg-11134201-7rbmg-lmjzdzd5jsyi27",
      title: "PiPi Furniture Lemari Sepatu Susun Minimalis",
      text: "Rak Sepatu Kapasitas Besar Rak Sepatu Kayu Anti Debu.",
      link: "https://shopee.co.id/PiPi-Furniture-Lemari-Sepatu-Susun-Minimalis-Rak-Sepatu-Kapasitas-Besar-Rak-Sepatu-Kayu-Anti-Debu-Lemari-Minimalis-Rak-Sepatu-Minimalis-Susun-Penyimpanan-Multifungsi-Serbaguna-i.993944378.15899591151?xptdk=d595d9ac-ff7b-44eb-83fc-e610554fd230",
    },
    {
      image: "https://down-id.img.susercontent.com/file/sg-11134201-7r98o-lkud7qju7v5jef",
      title: "PiPi Furniture Coffe Table",
      text: "PiPi Furniture Coffe Table/Meja Kopi/Meja Kecil/Meja Bulat/Meja Sudut/Minimals/Modern/Murah.",
      link: "https://shopee.co.id/PiPi-Furniture-Coffe-Table-Meja-Kopi-Meja-Kecil-Meja-Bulat-Meja-Sudut-Minimals-Modern-Murah-i.993944378.22979162511?xptdk=debcf459-87c1-4eab-be86-f50efa2c901c",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkuzsjl276f401",
      title: "Hiasan Dinding Ruang Tamu Minimalis",
      text: "Hiasan Dinding Ruang Tamu Minimalis 80x57cm & 40x57cm INCLUDE FRAME - CREAM FLORAL MINIMALIS - Hiasan Dinding Bunga Cream.",
      link: "https://shopee.co.id/Hiasan-Dinding-Ruang-Tamu-Minimalis-80x57cm-40x57cm-INCLUDE-FRAME-CREAM-FLORAL-MINIMALIS-Hiasan-Dinding-Bunga-Cream-Coklat-Putih-Estetik-Kanvas-Wall-Decor-Kamar-Pajangan-Rumah-Lukisan-Dinding-Print-Kanvas-Lukisan-Art-Canvas-HIASAN-DINDING-Rumah-H-i.808796265.22637366209?xptdk=c404f0ff-649d-449f-a41e-7c0e1f8c4247",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lua15z57l11w4a",
      title: "Damaindah Meja Rias Set Kursi Pita ",
      text: "Damaindah Meja Rias Set Kursi Pita / Meja Rias Lampu LED/Meja Rias Aesthetic/Minimalis/Mini/Modern/Nordic/Murah.",
      link: "https://shopee.co.id/Damaindah-Meja-Rias-Set-Kursi-Pita-Meja-Rias-Lampu-LED-Meja-Rias-Aesthetic-Minimalis-Mini-Modern-Nordic-Murah-i.933915287.18872040092?xptdk=d8a8355a-52a4-44da-95a8-a6e65f940da3",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lq2w92rb203252",
      title: "Kintakun New LITE Bed Cover Set SPREI FLAT Uk. 180x200",
      text: "Kintakun New Lite bahan 100% Microtex Disperse",
      link: "https://shopee.co.id/Kintakun-New-LITE-Bed-Cover-Set-SPREI-FLAT-Uk.-180x200-i.14015981.17778065783?xptdk=2885597f-a232-4fe3-9bce-ec54f29989b6",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkupthpjowlme0",
      title: "Meja Nakas Minimalis Bedside Table 3 Laci Serat Putih",
      text: "Produk unggulan meja nakas minimalis, yang dapat mempercantik interior rumah anda.",
      link: "https://shopee.co.id/Meja-Nakas-Minimalis-Bedside-Table-3-Laci-Serat-Putih-i.487667592.21929969566?xptdk=765705ed-4390-42b0-b8f0-bfb4b8729275",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lrb0u1lkemrx67",
      title: "EBUY NEW Panggangan BBQ",
      text: "EBUY NEW Panggangan BBQ/Portable Camping Grill / Peralatan Berkemah / Pemanggang Camping Pakai Arang / Alat Panggang Arang.",
      link: "https://shopee.co.id/EBUY-NEW-Panggangan-BBQ-Portable-Camping-Grill-Peralatan-Berkemah-Pemanggang-Camping-Pakai-Arang-Alat-Panggang-Arang-i.797583684.25761971303?xptdk=7ab4aa4b-07d1-42b0-828c-4039206497a3",
    },
    {
      image: "https://down-id.img.susercontent.com/file/a1914eb1917045dc695a514acdec3c8f",
      title: "NEW Premium Yakiniku Double Grill",
      text: "YAKINIKU GRILL Diameter 37 X 26 CM (Membuat Yakiniku semakin Mudah dan Sehat)..",
      link: "https://shopee.co.id/NEW-Premium-Yakiniku-Double-Grill-i.3467987.10121915?xptdk=ab868580-3891-47f3-9db2-523edadabe85",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-ltangib77mx99e",
      title: "MITO Oven Listrik Mini MO20 11L",
      text: "MITO Oven Listrik Mini MO20 11L Wood Pemanggang Kue - Black Marble.",
      link: "https://shopee.co.id/MITO-Oven-Listrik-Mini-MO20-11L-Wood-Pemanggang-Kue-Black-Marble-i.24544583.25920216332?xptdk=c14ef17a-5592-4e5a-bf25-4f32174b2318",
    },
    {
      image: "https://down-id.img.susercontent.com/file/46522f588d238a5843069c068ef0925b",
      title: "Toaster SHARP KZ 2S02 BK Pop Up toaster Pemanggang Roti Sandwich 2 slices warna hitam 450 w panggang",
      text: "SHARP Toaster KZ-2S02-BK merupakan toaster persembahan Sharp yang memberikan kemudahan untuk Anda dalam memenuhi kebutuhan sarapan Anda. .",
      link: "https://shopee.co.id/Toaster-SHARP-KZ-2S02-BK-Pop-Up-toaster-Pemanggang-Roti-Sandwich-2-slices-warna-hitam-450-w-panggang-i.117251401.2651796916?xptdk=1a60e982-2885-4801-8b3e-e6ec8201b69f",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lmswngs57a2cb7",
      title: "BLENDER PHILIPS HR2106 1,5L BLENDER PHILIPS ORIGINAL",
      text: "Blender Philips HR 2106 merupakan pilihan blender sempurna untuk mendapat hasil gilingan yang halus dalam persiapan memasak. .",
      link: "https://shopee.co.id/BLENDER-PHILIPS-HR2106-1-5L-BLENDER-PHILIPS-ORIGINAL-i.1094078696.23957789611?xptdk=3fee277c-f06c-4484-9816-6a00db1dbf37",
    },
    {
      image: "https://down-id.img.susercontent.com/file/sg-11134201-23020-6vt4sxlb49mv5c",
      title: "Tempat Penyimpanan Beras Rice Box ",
      text: "Tempat Penyimpanan Beras Rice Box MRD 2800 AP Maspion.",
      link: "https://shopee.co.id/Tempat-Penyimpanan-Beras-Rice-Box-MRD-2800-AP-Maspion-i.177367527.18272666297?xptdk=b8a85718-5857-46f5-ba05-1fd729cd2212",
    },
    {
      image: "https://down-id.img.susercontent.com/file/sg-11134201-23020-i3gwpp6473mva2",
      title: "PAJANGAN DINDING LUKISAN TANGAN ROOM MINIMALIS",
      text: "LUKISAN ABSTRAK MODERN.",
      link: "https://shopee.co.id/PAJANGAN-DINDING-LUKISAN-TANGAN-ROOM-MINIMALIS-(ABSTRAK-MODERN-SERIES)-i.907898057.20064927122?xptdk=869cad9e-f67b-46a1-b253-3f3b649c29c4",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lulgooku9l8wca",
      title: "Dispenser Arashi AMD 02B ",
      text: "Dispenser Multifungsi Arashi AMD 02B - Galon Bawah - Fitur Dingin - Normal Dan Panas.",
      link: "https://shopee.co.id/Dispenser-Multifungsi-Arashi-AMD-02B-Galon-Bawah-Fitur-Dingin-Normal-Dan-Panas-i.25020517.18233179155?xptdk=910681f7-3ab3-47b1-bc36-1991076f413b",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7qul5-lhlhhkquffg0bf",
      title: " UJ042 Karpet Lantai Eropa",
      text: "Karpet lantai eropa style tersedia 50macam pilihan motif.",
      link: "https://shopee.co.id/Utama-Jakarta-UJ042-Karpet-Lantai-Eropa-Style-Uk-210-x-160cm-Karpet-Turkey-Bermotif-Tikar-Karpet-ruang-Tamu-Karpet-Kamar-Tidur-i.93045268.10197027305?xptdk=81ae08b4-e10b-4f1c-b1a7-b3e190b2c8ac",
    },
    {
      image: "https://down-id.img.susercontent.com/file/7ede912f5d39b94ac66662b924746053",
      title: "Original Philips HD4515 Digital Rice Cooker HD4515/33 - HD 4515",
      text: "PHILIPS HD4515 RICE COOKER",
      link: "https://shopee.co.id/Original-Philips-HD4515-Digital-Rice-Cooker-HD4515-33-HD-4515-i.209799171.3434942286?sp_atk=fae4b4c1-075c-4fdb-b473-621d2e30d8e3&xptdk=fae4b4c1-075c-4fdb-b473-621d2e30d8e3",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />

      <Container className="mt-5 mb-5 flex-grow-1">
        <h1
          className="text-center"
          style={{ color: "#FF204E", textDecoration: "underline" }}
        >
          Gift Wishlist
        </h1>
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
