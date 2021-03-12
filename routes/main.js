const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const product = [
  {
    product_id: "1",
    product_name: "NOTEBOOK (โน้ตบุ๊ค) LENOVO LEGION 5 17IMH05H-81Y8006XTA",
    image_path: "https://cf.shopee.co.th/file/51b653141eb466bb9b05eeefe7b82823",
    price: "42900",
    detail:
      "CPU : INTEL CORE I7-10750H RAM : 16 GB (8GB X2) DDR4 2933MHz STORAGE : 512 GB PCIe/NVMe M.2 SSD DISPLAY : 17.3 FULL HD IPS ANTI-GLARE 144Hz VGA : NVIDIA GEFORCE RTX2060 6 GB GDDR6 OS : WINDOWS 10 HOME",
  },
  {
    product_id: "2",
    product_name:
      "SMARTPHONE (สมาร์ทโฟน) LENOVO LEGION PHONE DUEL L79031 TH (12GB/256GB) (BLUE)        ",
    image_path:
      "https://th-test-11.slatic.net/p/24408f9738cf5fb8e72b8cf6afe7a76f.jpg_720x720q80.jpg_.webp        ",
    price: "20490",
    detail: "OS : ANDROID 10 RAM : 12 GB DISPLAY : 6.65",
  },
  {
    product_id: "3",
    product_name:
      "NOTEBOOK (โน้ตบุ๊ค) ASUS ZENBOOK PRO DUO UX481FL-HJ096T (CELESTIAL BLUE)        ",
    image_path:
      "https://www.jib.co.th/img_master/product/original/2020062609204140825_1.jpg        ",
    price: "29400",
    detail:
      "CPU : INTEL CORE I5-10210U  RAM : 16 GB LPDDR3 (ON-BOARD) STORAGE : 512 GB PCIe/NVMe M.2 SSD DISPLAY : 14 FULL HD VGA : NVIDIA GEFORCE MX250 2 GB GDDR5 OS : WINDOWS 10",
  },
  {
    product_id: "4",
    product_name: "HEADPHONE (หูฟัง) RAZER HAMMERHEAD PRO V2 GAMING GEAR",
    image_path:
      "https://th-test-11.slatic.net/p/960e005c9a469cec3755976c77690fd2.jpg_720x720q80.jpg_.webp",
    price: "1290",
    detail:
      "IN-LINE REMOTE IS NOT WORKING WITH WINDOWS HEADSET RESPONSE : 20 Hz - 20000 Hz MIC RESPONSE : 50 Hz - 10000 Hz",
  },
  {
    product_id: "5",
    product_name: "CPU (ซีพียู) INTEL 1200 CORE I5-10400F 2.9 GHz",
    image_path: "https://cf.shopee.co.th/file/34c173f405b3e5ccff91ad6bb0bda830",
    price: "5090",
    detail:
      "CORES : 6 THREADS : 12 DISCRETE GRAPHICS REQUIRED, NO INTEGRATED GRAPHICS.",
  },
  {
    product_id: "6",
    product_name:
      "SMARTPHONE (สมาร์ทโฟน) SAMSUNG GALAXY NOTE 20 (8GB/256GB) MYSTIC BRONZE",
    image_path:
      "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/S/a/Samsung-Galaxy-Note-20-Mystic-Bronze-1-1614702300.jpg",
    price: "29900",
    detail:
      "Octa Core 2.73GHz 10MP Front 64MP+12MP+12MP Back 8GB / 256GB / 6.7 FHD+4G Dual SIM + eSIM / 4300mAh S-PEN",
  },
  {
    product_id: "7",
    product_name:
      "NOTEBOOK 2 IN 1 (โน้ตบุ๊คแบบแยกคีย์บอร์ด) MICROSOFT SURFACE GO 2 P/8/128 LTE + SURFACE GO TYPE COVER (CHARCOAL) + SURFACE PEN (CHARCOAL)",
    image_path:
      "https://www.jib.co.th/img_master/product/original/20210310151709_45720_66_1.jpg",
    price: "32700",
    detail:
      "CPU : INTEL PENTIUM GOLD 4425Y RAM : 8 GB STORAGE : 128 GB eMMC DISPLAY : 10.5” PIXELSENSE 1920 X 1280 10 POINT MULTI-TOUCH VGA : INTEL UHD GRAPHICS 615 (INTEGRATED) OS : WINDOWS 10 HOME",
  },
  {
    product_id: "8",
    product_name:
      "16GB (8GBx2) DDR4/3200 RAM PC (แรมพีซี) CORSAIR VENGEANCE PRO SL RGB (BLACK) (CMH16GX4M2Z3200C16)",
    image_path:
      "https://www.jib.co.th/img_master/product/original/2021030813104145697_1.jpg",
    price: "6390",
    detail:
      "Capacity : 16 GB Speed : 3200 MHz Part Number : CMH16GX4M2Z3200C16 8GBx2",
  },
  {
    product_id: "9",
    product_name:
      "KEYBOARD (คีย์บอร์ด) Tt ESPORTS NEPTUNE ELITE RGB (TTC BLUE SWITCH) (RGB LED) (EN/TH)",
    image_path:
      "https://th-test-11.slatic.net/p/0d5371b004f0cdb7e021d4ed761c9be7.jpg_720x720q80.jpg_.webp",
    price: "2190",
    detail: "FEATURES : TTC BLUE SWITCH.",
  },
  {
    product_id: "10",
    product_name: "ONITOR (จอมอนิเตอร์) ACER VG270BMIIX 27 IPS 75Hz",
    image_path:
      "https://www.tohome.com/images/imageproduct/500/26082020/AcerVG270bmiix-1.jpg?v=1",
    price: "5250",
    detail:
      "Size : 27 Brightness : 250 cd/m²  Contrast : 100000000 : 1 Response Time : 1 ms",
  },
];

// router.get("/", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "main.html"));
// });

router.get("/", (req, res, next) => {
  const products = product;
  res.render("main", {
    prods: products,
    pageTitle: "Main",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
