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
        "https://down-id.img.susercontent.com/file/e0a53da113738d69dec2648c16a09b5b",
      title: "Sanken Kompor Gas Dua Tungku SG-363 Kaca",
      text: "Sanken SG-363BX Kompor Gas [2 Tungku] . ",
      link: "https://shopee.co.id/Sanken-Kompor-Gas-Dua-Tungku-SG-363-Kaca-i.59886651.7338247994",
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
      image:
        "https://down-id.img.susercontent.com/file/cb1b2e6a4230a6a0a54a2848f689d990",
      title:
        "Meja tamu cofee table meja samping sudut marmer marble unik custom shabby murah meja",
      text: "Meja bundar cocok untuk ruang tamu dan meja samping kamar tidur maupun sofa.",
      link: "https://shopee.co.id/Meja-tamu-cofee-table-meja-samping-sudut-marmer-marble-unik-custom-shabby-murah-meja-i.145138135.15385438720?xptdk=d9ed99cd-d2f8-419b-aca2-8ea3dad08691",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/f204c3d82fc1bed01c9965e8722ab942",
      title: "Dekoruma Nola Jam Dinding Minimalis Diameter 33cm - White",
      text: "DEKORUMA - Nola Jam Dinding Minimalis Diameter 33cm - White.",
      link: "https://shopee.co.id/Dekoruma-Nola-Jam-Dinding-Minimalis-Diameter-33cm-White-i.740621307.17445299194?xptdk=e918e82d-6a26-48b7-9078-586157a1b619",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134201-23030-inuq16u2o8nv18",
      title:
        "READY STOCK JAM DINDING GOLD JAM DINDING MEWAH JAM DINDING ROMAWI",
      text: "JAM DINDING GOLD JAM DINDING MEWAH JAM DINDING ROMAWI.",
      link: "https://shopee.co.id/READY-STOCK-JAM-DINDING-GOLD-JAM-DINDING-MEWAH-JAM-DINDING-ROMAWI-i.17914398.18675100464?xptdk=e30edadf-2f64-4515-a1d5-f058ef10c96b",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-7rbmg-lmjzdzd5jsyi27",
      title: "PiPi Furniture Lemari Sepatu Susun Minimalis",
      text: "Rak Sepatu Kapasitas Besar Rak Sepatu Kayu Anti Debu.",
      link: "https://shopee.co.id/PiPi-Furniture-Lemari-Sepatu-Susun-Minimalis-Rak-Sepatu-Kapasitas-Besar-Rak-Sepatu-Kayu-Anti-Debu-Lemari-Minimalis-Rak-Sepatu-Minimalis-Susun-Penyimpanan-Multifungsi-Serbaguna-i.993944378.15899591151?xptdk=d595d9ac-ff7b-44eb-83fc-e610554fd230",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-7r98o-lkud7qju7v5jef",
      title: "PiPi Furniture Coffe Table",
      text: "PiPi Furniture Coffe Table/Meja Kopi/Meja Kecil/Meja Bulat/Meja Sudut/Minimals/Modern/Murah.",
      link: "https://shopee.co.id/PiPi-Furniture-Coffe-Table-Meja-Kopi-Meja-Kecil-Meja-Bulat-Meja-Sudut-Minimals-Modern-Murah-i.993944378.22979162511?xptdk=debcf459-87c1-4eab-be86-f50efa2c901c",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkuzsjl276f401",
      title: "Hiasan Dinding Ruang Tamu Minimalis",
      text: "Hiasan Dinding Ruang Tamu Minimalis 80x57cm & 40x57cm INCLUDE FRAME - CREAM FLORAL MINIMALIS - Hiasan Dinding Bunga Cream.",
      link: "https://shopee.co.id/Hiasan-Dinding-Ruang-Tamu-Minimalis-80x57cm-40x57cm-INCLUDE-FRAME-CREAM-FLORAL-MINIMALIS-Hiasan-Dinding-Bunga-Cream-Coklat-Putih-Estetik-Kanvas-Wall-Decor-Kamar-Pajangan-Rumah-Lukisan-Dinding-Print-Kanvas-Lukisan-Art-Canvas-HIASAN-DINDING-Rumah-H-i.808796265.22637366209?xptdk=c404f0ff-649d-449f-a41e-7c0e1f8c4247",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lua15z57l11w4a",
      title: "Damaindah Meja Rias Set Kursi Pita ",
      text: "Damaindah Meja Rias Set Kursi Pita / Meja Rias Lampu LED/Meja Rias Aesthetic/Minimalis/Mini/Modern/Nordic/Murah.",
      link: "https://shopee.co.id/Damaindah-Meja-Rias-Set-Kursi-Pita-Meja-Rias-Lampu-LED-Meja-Rias-Aesthetic-Minimalis-Mini-Modern-Nordic-Murah-i.933915287.18872040092?xptdk=d8a8355a-52a4-44da-95a8-a6e65f940da3",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lq2w92rb203252",
      title: "Kintakun New LITE Bed Cover Set SPREI FLAT Uk. 180x200",
      text: "Kintakun New Lite bahan 100% Microtex Disperse",
      link: "https://shopee.co.id/Kintakun-New-LITE-Bed-Cover-Set-SPREI-FLAT-Uk.-180x200-i.14015981.17778065783?xptdk=2885597f-a232-4fe3-9bce-ec54f29989b6",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkupthpjowlme0",
      title: "Meja Nakas Minimalis Bedside Table 3 Laci Serat Putih",
      text: "Produk unggulan meja nakas minimalis, yang dapat mempercantik interior rumah anda.",
      link: "https://shopee.co.id/Meja-Nakas-Minimalis-Bedside-Table-3-Laci-Serat-Putih-i.487667592.21929969566?xptdk=765705ed-4390-42b0-b8f0-bfb4b8729275",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lrb0u1lkemrx67",
      title: "EBUY NEW Panggangan BBQ",
      text: "EBUY NEW Panggangan BBQ/Portable Camping Grill / Peralatan Berkemah / Pemanggang Camping Pakai Arang / Alat Panggang Arang.",
      link: "https://shopee.co.id/EBUY-NEW-Panggangan-BBQ-Portable-Camping-Grill-Peralatan-Berkemah-Pemanggang-Camping-Pakai-Arang-Alat-Panggang-Arang-i.797583684.25761971303?xptdk=7ab4aa4b-07d1-42b0-828c-4039206497a3",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/a1914eb1917045dc695a514acdec3c8f",
      title: "NEW Premium Yakiniku Double Grill",
      text: "YAKINIKU GRILL Diameter 37 X 26 CM (Membuat Yakiniku semakin Mudah dan Sehat)..",
      link: "https://shopee.co.id/NEW-Premium-Yakiniku-Double-Grill-i.3467987.10121915?xptdk=ab868580-3891-47f3-9db2-523edadabe85",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98p-ltangib77mx99e",
      title: "MITO Oven Listrik Mini MO20 11L",
      text: "MITO Oven Listrik Mini MO20 11L Wood Pemanggang Kue - Black Marble.",
      link: "https://shopee.co.id/MITO-Oven-Listrik-Mini-MO20-11L-Wood-Pemanggang-Kue-Black-Marble-i.24544583.25920216332?xptdk=c14ef17a-5592-4e5a-bf25-4f32174b2318",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/46522f588d238a5843069c068ef0925b",
      title:
        "Toaster SHARP KZ 2S02 BK Pop Up toaster Pemanggang Roti Sandwich 2 slices warna hitam 450 w panggang",
      text: "SHARP Toaster KZ-2S02-BK merupakan toaster persembahan Sharp yang memberikan kemudahan untuk Anda dalam memenuhi kebutuhan sarapan Anda. .",
      link: "https://shopee.co.id/Toaster-SHARP-KZ-2S02-BK-Pop-Up-toaster-Pemanggang-Roti-Sandwich-2-slices-warna-hitam-450-w-panggang-i.117251401.2651796916?xptdk=1a60e982-2885-4801-8b3e-e6ec8201b69f",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lmswngs57a2cb7",
      title: "BLENDER PHILIPS HR2106 1,5L BLENDER PHILIPS ORIGINAL",
      text: "Blender Philips HR 2106 merupakan pilihan blender sempurna untuk mendapat hasil gilingan yang halus dalam persiapan memasak. .",
      link: "https://shopee.co.id/BLENDER-PHILIPS-HR2106-1-5L-BLENDER-PHILIPS-ORIGINAL-i.1094078696.23957789611?xptdk=3fee277c-f06c-4484-9816-6a00db1dbf37",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/350b8263e9d58216bbc1302546974ec1",
      title: "COSMOS Rice Box",
      text: "COSMOS Rice Box Tepat Beras 38 Kg - 38 BIO - 38kg BIO.",
      link: "https://shopee.co.id/COSMOS-Rice-Box-Tepat-Beras-38-Kg-38-BIO-38kg-BIO-i.6803262.402183210?sp_atk=adf524b4-9004-4585-9d73-43a3ed32505b&xptdk=adf524b4-9004-4585-9d73-43a3ed32505b",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-23020-i3gwpp6473mva2",
      title: "PAJANGAN DINDING LUKISAN TANGAN ROOM MINIMALIS",
      text: "LUKISAN ABSTRAK MODERN.",
      link: "https://shopee.co.id/PAJANGAN-DINDING-LUKISAN-TANGAN-ROOM-MINIMALIS-(ABSTRAK-MODERN-SERIES)-i.907898057.20064927122?xptdk=869cad9e-f67b-46a1-b253-3f3b649c29c4",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lulgooku9l8wca",
      title: "Dispenser Arashi AMD 02B ",
      text: "Dispenser Multifungsi Arashi AMD 02B - Galon Bawah - Fitur Dingin - Normal Dan Panas.",
      link: "https://shopee.co.id/Dispenser-Multifungsi-Arashi-AMD-02B-Galon-Bawah-Fitur-Dingin-Normal-Dan-Panas-i.25020517.18233179155?xptdk=910681f7-3ab3-47b1-bc36-1991076f413b",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7qul5-lhlhhkquffg0bf",
      title: " UJ042 Karpet Lantai Eropa",
      text: "Karpet lantai eropa style tersedia 50macam pilihan motif.",
      link: "https://shopee.co.id/Utama-Jakarta-UJ042-Karpet-Lantai-Eropa-Style-Uk-210-x-160cm-Karpet-Turkey-Bermotif-Tikar-Karpet-ruang-Tamu-Karpet-Kamar-Tidur-i.93045268.10197027305?xptdk=81ae08b4-e10b-4f1c-b1a7-b3e190b2c8ac",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/7ede912f5d39b94ac66662b924746053",
      title: "Original Philips HD4515 Digital Rice Cooker HD4515/33 - HD 4515",
      text: "PHILIPS HD4515 RICE COOKER",
      link: "https://shopee.co.id/Original-Philips-HD4515-Digital-Rice-Cooker-HD4515-33-HD-4515-i.209799171.3434942286?sp_atk=fae4b4c1-075c-4fdb-b473-621d2e30d8e3&xptdk=fae4b4c1-075c-4fdb-b473-621d2e30d8e3",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-7rcbw-lsuy89uxlqnn13",
      title: "Krisbow Penghisap Debu Kering",
      text: "Krisbow Penghisap Debu Kering 2 ltr 900 Watt Frvcd2A Alat Pembersih Vakum Cleaning Tool Mesin Dry Vacuum Cleaner ",
      link: "https://shopee.co.id/Krisbow-Penghisap-Debu-Kering-2-ltr-900-Watt-Frvcd2A-Alat-Pembersih-Vakum-Cleaning-Tool-Mesin-Dry-Vacuum-Cleaner-Peralatan-Kebersihan-Penyedot-Kotoran-i.182588931.24868982305?sp_atk=91f49ecf-ebd7-4cbd-9071-c9133cd34ea6&xptdk=91f49ecf-ebd7-4cbd-9071-c9133cd34ea6",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lncd0c6reno697",
      title:
        "LOFTER Meja TV Minimalis /MEJA TV1.2/1.4/1.6M/Meja TV/Rak TV/Lemari TV/Kabinet TV/TV Cabinet /Rak TV Kayu/Lemari",
      text: "LENOBLE Meja TV  Minimalis /MEJA TV1.2/1.4/1.6M/Meja TV/Rak TV/Lemari TV/Kabinet TV/TV Cabinet /Rak TV Kayu/Lemari",
      link: "https://shopee.co.id/LOFTER-Meja-TV-Minimalis-MEJA-TV1.2-1.4-1.6M-Meja-TV-Rak-TV-Lemari-TV-Kabinet-TV-TV-Cabinet-Rak-TV-Kayu-Lemari-i.854244917.23251754490?sp_atk=f9c251bf-77cc-4cd7-bc90-ce0e51862183&xptdk=f9c251bf-77cc-4cd7-bc90-ce0e51862183",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-22120-budqyg50dskvd7",
      title: "Air Fryer MITO",
      text: "Air Fryer MITO Grande AF10 Kapasitas 6 Liter Menggoreng Tanpa Minyak",
      link: "https://shopee.co.id/Air-Fryer-MITO-Grande-AF10-Kapasitas-6-Liter-Menggoreng-Tanpa-Minyak-i.62318.12047644960?sp_atk=bbbf2588-6c04-4b0e-984f-6dfd1e57816f&xptdk=bbbf2588-6c04-4b0e-984f-6dfd1e57816f",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/21c7205da9cdb3848916d0966353c59d",
      title: "BEAN BAG",
      text: "BEAN BAG TERMURAH TRIANGLE SOFABED DEWASA LARGE TERMASUK ISI SIAP PAKAI",
      link: "https://shopee.co.id/BEAN-BAG-TERMURAH-TRIANGLE-SOFABED-DEWASA-LARGE-TERMASUK-ISI-SIAP-PAKAI-i.280650931.19724486159?sp_atk=ea83d924-a130-4a1c-8fd9-c618bde9d159&xptdk=ea83d924-a130-4a1c-8fd9-c618bde9d159",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-22120-w2ozlrcytskv6e",
      title: "Sofa Santai Angin",
      text: "Sofa Santai Angin Intime/ Kursi Santai Dengan Sandaran Kaki",
      link: "https://shopee.co.id/Sofa-Santai-Angin-Intime-Kursi-Santai-Dengan-Sandaran-Kaki-i.289369609.18267350255?sp_atk=5ab3099c-3437-4db3-9007-02abfb42063b&xptdk=5ab3099c-3437-4db3-9007-02abfb42063b",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134201-7r98r-loukyan0sb5nde",
      title: "Informa Beta Kursi Makan",
      text: "Informa Beta Kursi Makan - Hitam Dining Chair Tempat Duduk Ruang Makan Kursi Kafe Restoran",
      link: "https://shopee.co.id/Informa-Beta-Kursi-Makan-Hitam-Dining-Chair-Tempat-Duduk-Ruang-Makan-Kursi-Kafe-Restoran-i.586863199.14215874235?sp_atk=b4cb4904-9179-4440-8acf-24a08f239a0e&xptdk=b4cb4904-9179-4440-8acf-24a08f239a0e",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98o-ltyo2h1udylk8d",
      title: "Kursi Cafe",
      text: "Kursi Cafe Kursi Belajar Kursi Makan Kursi Kantor Kursi Minimalis Kursi Santai Kursi Makan Sandaran",
      link: "https://shopee.co.id/Kursi-Cafe-Kursi-Belajar-Kursi-Makan-Kursi-Kantor-Kursi-Minimalis-Kursi-Santai-Kursi-Makan-Sandaran-i.969073131.25221847222?sp_atk=b6798c33-dab5-4875-bf26-14d570a5b11c&xptdk=b6798c33-dab5-4875-bf26-14d570a5b11c",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/0d55c2d8ffc1e5a6c0b5a182837ce3d9",
      title: "lemari pakaian",
      text: "lemari pakaian sliding door full cermin. modern minimalis murah dan mewah. lemari baju 2 pintu sleding geser, ada laci, gantungan, kunci",
      link: "https://shopee.co.id/lemari-pakaian-sliding-door-full-cermin.-modern-minimalis-murah-dan-mewah.-lemari-baju-2-pintu-sleding-geser-ada-laci-gantungan-kunci-ada-bahan-papan-kayu-kokoh-kuat-awet-ukuran-jumbo-besar.-i.15386875.7633720435?sp_atk=4ef3c4b0-165d-4b74-9729-84828e020f9e&xptdk=4ef3c4b0-165d-4b74-9729-84828e020f9e",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7quky-lf9o8u016bg1ac",
      title: "BARDI Smart IP Camera CCTV",
      text: "BARDI Smart IP Camera CCTV Indoor Wifi PTZ 360 2MP 1080P Wireless Pantau Jarak Jauh lewat HP",
      link: "https://shopee.co.id/BARDI-Smart-IP-Camera-CCTV-Indoor-Wifi-PTZ-360-2MP-1080P-Wireless-Pantau-Jarak-Jauh-lewat-HP-i.450864017.8258906999?sp_atk=32503308-bb06-463c-8146-ba15c8e60b1f&xptdk=32503308-bb06-463c-8146-ba15c8e60b1f",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98p-loax324tsjybd7",
      title: "Philips Hair Dryer",
      text: "Philips Hair Dryer Essential Care BHC010/12 Pengering Rambut",
      link: "https://shopee.co.id/Philips-Hair-Dryer-Essential-Care-BHC010-12-Pengering-Rambut-i.438891817.4988694731?sp_atk=f0d37ff2-f468-4a81-82dd-9717ea29b832&xptdk=f0d37ff2-f468-4a81-82dd-9717ea29b832",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lw8iq7ohqp7i00",
      title: "Hisense 40 FHD Android",
      text: "Hisense 40 FHD Android 11 Smart TV-Bezelless Design-Dolby Audio- Youtube/Netflix/Prime video-Casting-Google System-Sports&Game",
      link: "https://shopee.co.id/Hisense-40-FHD-Android-11-Smart-TV-Bezelless-Design-Dolby-Audio-Youtube-Netflix-Prime-video-Casting-Google-System-Sports-Game-mode-Wifi-USB-Clean-View-Master-Pro-(40E5G)-i.251105105.16567929595?sp_atk=960bf530-aa85-434b-8bb7-5bcf2807f67f&xptdk=960bf530-aa85-434b-8bb7-5bcf2807f67f",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-22100-x685tph3jriv94",
      title: "SOFA L ",
      text: "SOFA L MEJA STENLIS BAHAN WOSH, OSCAR, KAIN, EMPUK (GRATIS MASKER)",
      link: "https://shopee.co.id/SOFA-L-MEJA-STENLIS-BAHAN-WOSH-OSCAR-KAIN-EMPUK-(GRATIS-MASKER)-i.202377483.5928875115?sp_atk=43a4c019-336b-4883-b6b6-870975882c64&xptdk=43a4c019-336b-4883-b6b6-870975882c64",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98p-loaxcj4elpmy91",
      title: "Philips Hair Straightener",
      text: "Philips Hair Straightener Keratin Ceramic BHS376/00 Catokan Rambut",
      link: "https://shopee.co.id/Philips-Hair-Straightener-Keratin-Ceramic-BHS376-00-Catokan-Rambut-i.438891817.11203510305?sp_atk=63e05bfb-4178-44d2-ae8a-3337fef70d76&xptdk=63e05bfb-4178-44d2-ae8a-3337fef70d76",
    },
    {
      image:
        "https://down-id.img.susercontent.com/file/49688573bab1935b076946549b92d441",
      title: "Mesin Cuci 1 Tabung SHARP ",
      text: "Mesin Cuci 1 Tabung SHARP ESM 7000 PGG 7KG Quick Wash Zero Pressure",
      link: "https://shopee.co.id/Mesin-Cuci-1-Tabung-SHARP-ESM-7000-PGG-7KG-Quick-Wash-Zero-Pressure-i.23905535.3868212752?sp_atk=64cd1397-d92f-4af0-bf24-ae58633ffd56&xptdk=64cd1397-d92f-4af0-bf24-ae58633ffd56",
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
          <a
            href="https://docs.google.com/spreadsheets/d/12etNzd3QGozjJpWvQnOEpJSyvRs_p6LMHt1b5-AwA_o/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF204E", textDecoration: "underline" }}
          >
            Gift Wishlist
          </a>
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
