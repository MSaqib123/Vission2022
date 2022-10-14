//_____________ Product Array ________________---
//#region ArrayData
var array = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's bag",
    "image": "img/img1.jpg",
    "rating": {
      "rate": 3.9,
      "count": 12
    },
    "Gallery":{
      "img1":"img/img1.jpg",
      "img2":"img/img1_green.jpg",
      "img3":"img/img1_red.jpg"
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit t shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's hoodies",
    "image": "img/img2.jpg",
    "rating": {
      "rate": 4.1,
      "count": 5
    },
    "Gallery":{
      "img1":"img/img2.jpg",
      "img2":"img/img2_red.jpg",
      "img3":"img/img2_green.jpg"
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's jacket",
    "image": "img/img3.jpg",
    "rating": {
      "rate": 4.7,
      "count": 5
    },
    "Gallery":{
      "img1":"img/img3.jpg",
      "img2":"img/img3_blue.jpg",
      "img3":"img/img3_green.jpg"
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "upper",
    "image": "img/img4.jpg",
    "rating": {
      "rate": 2.1,
      "count": 4
    },
    "Gallery":{
      "img1":"img/img4.jpg",
      "img2":"img/img4_green.jpg",
      "img3":"img/img4_red.jpg"
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "img/img5.jpg",
    "rating": {
      "rate": 4.6,
      "count": 4
    },
    "Gallery":{
      "img1":"img/img5.jpg",
      "img2":"img/img5_blue.jpg",
      "img3":"img/img5.jpg"
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "img/img6.jpg",
    "rating": {
      "rate": 3.9,
      "count": 7
    },
    "Gallery":{
      "img1": "img/img6.jpg",
      "img2": "img/img6_red.jpg",
      "img3": "img/img6_green.jpg"
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "img/img7.jpg",
    "rating": {
      "rate": 3,
      "count": 8
    },
    "Gallery":{
      "img1":"img/img7.jpg",
      "img2":"img/img7_purpel.jpg",
      "img3":"img/img7_red.jpg"
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "img/img8.jpg",
    "rating": {
      "rate": 1.9,
      "count": 2
    },
    "Gallery":{
      "img1":"img/img8.jpg",
      "img2":"img/img8_green.jpg",
      "img3":"img/img8_red.jpg"
    }
  },
  //---
  {
    "id": 9,
    "title": "T-Shirt",
    "price": 19.5,
    "description": "This T-shirt is perfect for that tailored look. Throw it on under a sweater or sweatshirt, or wear it by itself with a pair of jeans or khakis.",
    "category": "men's shirt",
    "image": "img/p1_jersey.jpg",
    "rating": {
      "rate": 3.3,
      "count": 3
    },
    "Gallery":{
      "img1":"img/p1_jersey.jpg",
      "img2":"img/p1_jersey_light_red.jpg",
      "img3":"img/p1_jersey_green.jpg"
    }
  },
  {
    "id": 10,
    "title": "Unisex Lightweight Terry Hoodie",
    "price": 8.3,
    "description": "This classic has stood the test of time. Always in fashion, this crewneck sweatshirt by Gildan is perfect as an outer, under or single layer. Soft and comfortable, this stand-by is a must.Brand: Gildan | Product ID: 18000",
    "category": "hoodies",
    "image": "img/p1_hoodie.webp",
    "rating": {
      "rate": 2.9,
      "count": 4
    },
    "Gallery":{
      "img1":"img/p1_hoodie.webp",
      "img2":"img/p1_hoodie_red.jpg",
      "img3":"img/p1_hoodie_green.jpg"
    }
  },
  {
    "id": 11,
    "title": "Unisex Crewneck Sweat Shirt",
    "price": 12,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "sweat shirt",
    "image": "img/p1_swatars.webp",
    "rating": {
      "rate": 4.8,
      "count": 3
    },
    "Gallery":{
      "img1":"img/p1_swatars.webp",
      "img2":"img/p1_swatars_red.jpg",
      "img3":"img/p1_swatars_blue.jpg"
    }
  },
  {
    "id": 12,
    "title": "Men's Performance Sleeveless Shirt fo Wearing",
    "price": 7,
    "description": "Whether you’re hitting the court, going for a run or just like a sleeveless breeze – the performance shirt moves easily. Equipped with sweat-wicking and lightweight fabric, this shirt lets you do you.",
    "category": "sleeveless shirt",
    "image": "img/p1_sleeveless-shirt.webp",
    "rating": {
      "rate": 4.8,
      "count": 4
    },
    "Gallery":{
      "img1":"img/p1_sleeveless-shirt.webp",
      "img2":"img/p1_sleeveless-shirt_red.jpg",
      "img3":"img/p1_sleeveless-shirt_green.jpg"
    }
  },
  {
    "id": 13,
    "title": "Woman bags for Best Looking design and flat design",
    "price": 5,
    "description": "This canvas tote bag is a multi-functional masterpiece. Use it as a reusable grocery bag, for books or other goodies – wherever you’re going, bring it with you.",
    "category": "woman bags",
    "image": "img/p1-bag.webp",
    "rating": {
      "rate": 2.9,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p1-bag.webp",
      "img2":"img/p1-bag_red.jpg",
      "img3":"img/p1-bag_green.jpg"
    }
  },
  {
    "id": 14,
    "title": "Unisex Baseball T-Shirt and Loong Sleeves",
    "price": 9,
    "description": "Play ball! Take to the field or the classroom in this classic contrasting baseball tee by Tultex. An always-fashionable style, this baseball T-shirt is great by itself or as a layer under a T-shirt or hoodie.",
    "category": "sleeve shirts",
    "image": "img/p1_long_Sleeves-shirt.webp",
    "rating": {
      "rate": 2.2,
      "count": 14
    },
    "Gallery":{
      "img1":"img/p1_long_Sleeves-shirt.webp",
      "img2":"img/p1_long_Sleeves-shirt_red.jpg",
      "img3":"img/p1_long_Sleeves-shirt_blue.jpg"
    }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women clothing",
    "image": "img/img15.jpg",
    "rating": {
      "rate": 2.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/img15.jpg",
      "img2":"img/img15_green.jpg",
      "img3":"img/img15_red.jpg",
    }
  },
  {
    "id": 16,
    "title": "Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women clothing",
    "image": "img/img16.jpg",
    "rating": {
      "rate": 2.9,
      "count": 3
    },
    "Gallery":{
      "img1":"img/img16.jpg",
      "img2":"img/img16_green.jpg",
      "img3":"img/img16_red.jpg"
    }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women clothing",
    "image": "img/img17.jpg",
    "rating": {
      "rate": 3.8,
      "count": 6
    },
    "Gallery":{
      "img1":"img/img17.jpg",
      "img2":"img/img17_green.jpg",
      "img3":"img/img17_red.jpg"
    }
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women clothing",
    "image": "img/img18.jpg",
    "rating": {
      "rate": 4.7,
      "count": 1
    },
    "Gallery":{
      "img1":"img/img18.jpg",
      "img2":"img/img18_yellow.jpg",
      "img3":"img/img18.jpg"
    }
  },
  {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women clothing",
    "image": "img/img19.jpg",
    "rating": {
      "rate": 4.5,
      "count": 14
    },
    "Gallery":{
      "img1":"img/img19.jpg",
      "img2":"img/img19_blue.jpg",
      "img3":"img/img19_green.jpg"
    }
  },
  {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women clothing",
    "image": "img/img20.jpg",
    "rating": {
      "rate": 3.6,
      "count": 4
    },
    "Gallery":{
      "img1": "img/img20.jpg",
      "img2": "img/img20_green.jpg",
      "img3": "img/img20_red.jpg"
    }
  }
  // _______________ 
  ,
  {
    "id": 21,
    "title": "New design Hoodies for shirts to Wear",
    "price": 10,
    "description": "Fully Clothes is a leading Manufacturers, Exporters & Supplier of Apparel/Clothing, Sports Uniforms, Custom Sublimated Team Uniforms, Sportswear, Casual Wear, Active/Workout Wear, Outdoor Sportswear, Sporting Goods/Soccer Balls, Gear Bags, Martial Arts Uniforms & Equipment, Boxing Gloves/Equipment, Gym Wears, MMA Fight Gear, Fitness/Weightlifting Gloves, Belts and all related Accessories with service around the world. The company is fully equipped with modern technologies & machinery along with a group of highly qualified & skilled specialists to monitor production at every level of order processing & to ensure timely execution at each & every stage of its production at very competitive prices. Right with the selection of raw material up to the finishing touch & packing, the entire operation is conducted by highly qualified and trained hands",
    "category": "mens hoodies shirts",
    "image": "img/p2_hoodis.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p2_hoodis.jpg",
      "img2":"img/p2_hoodis_red.jpg",
      "img3":"img/p2_hoodis_green.jpg"
    }
  },
  {
    "id": 22,
    "title": "Women Clothingsweatshirt hoodie for Women",
    "price": 9.99,
    "description": "Two Piece Sets women sportswear tracksuit with white red pant and cropped sweatshirt hoodie for Women | Fully Clothes Material: Cotton,Polyester,Spendex Size,logo And color can be customized",
    "category": "women clothing",
    "image": "img/p4_woman_hoodies.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p4_woman_hoodies.jpg",
      "img2":"img/p4_woman_hoodies_green.jpg",
      "img3":"img/p4_woman_hoodies_blue.jpg"
    }
  },
  {
    "id": 23,
    "title": "hoodies Full size Design For Men's",
    "price": 11.99,
    "description": "Fully Clothes is a leading Manufacturers, Exporters & Supplier of Apparel/Clothing, Sports Uniforms, Custom Sublimated Team Uniforms, Sportswear, Casual Wear, Active/Workout Wear, Outdoor Sportswear, Sporting Goods/Soccer Balls, Gear Bags, Martial Arts Uniforms & Equipment, Boxing Gloves/Equipment, Gym Wears, MMA Fight Gear, Fitness/Weightlifting Gloves, Belts and all related Accessories with service around the world. The company is fully equipped with modern technologies & machinery along with a group of highly qualified & skilled specialists to monitor production at every level of order processing & to ensure timely execution at each & every stage of its production at very competitive prices. Right with the selection of raw material up to the finishing touch & packing, the entire operation is conducted by highly qualified and trained hands",
    "category": "hoodies",
    "image": "img/p3_hoodies.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p3_hoodies.jpg",
      "img2":"img/p3_hoodies_red.jpg",
      "img3":"img/p3_hoodies_green.jpg"
    }
  },
  {
    "id": 24,
    "title": "Go Home Mens Bodybuilding T-Shirt Gym Workout",
    "price": 5,
    "description": "Technics: Printed Place of Origin: Pakistan Fabric Weight: 180 Grams Sleeve Style: Short sleeve Style: Casual Product Type: T-Shirts Age Group: Adult Color: Multi Available Sizes: S,M,L,XL",
    "category": "sleeveless shirts",
    "image": "img/p2_sleeveless_shirt.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p2_sleeveless_shirt.jpg",
      "img2":"img/p2_sleeveless_shirt_green.jpg",
      "img3":"img/p2_sleeveless_shirt_blue.jpg"
    }
  },
  {
    "id": 25,
    "title": "Zig Zag Men Trend Shorts T-shirt+Shorts Fashion",
    "price": 7,
    "description": "Refresh your hand wardrobe these premium products that will elevate your style to another level, So what are you waiting for? Get your hands on this product ",
    "category": "zig zag shirts",
    "image": "img/p1_Zig_Zag.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p1_Zig_Zag.jpg",
      "img2":"img/p1_Zig_Zag_red.jpg",
      "img3":"img/p1_Zig_Zag_blue.jpg"
    }
  },

  {
    "id": 26,
    "title": "SweatShirt & Trouser For Boys_&_Girls Trendy Fashion",
    "price": 11,
    "description": "Money Heist Printed Summer Tracksuit SweatShirt & Trouser For Boys_&_Girls Trendy Fashion Wear Jogging/Gym/Sports/Party Wear Track Suit",
    "category": "sweat shirt for boys",
    "image": "img/p1_shirts.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p1_shirts.jpg",
      "img2":"img/p1_shirts_blue.jpg",
      "img3":"img/p1_shirts_green.jpg"
    }
  },
  {
    "id": 27,
    "title": "Full Pack Of 3 Half Sleeve t shirts for Mens",
    "price": 7.7,
    "description": "Pack Of 3 IYI Printed Summer Tracksuit Round Neck Half Sleeves T Shirts Top Quality Trouser And Short For Men Boys - Shez Fashion",
    "category": "full pack shirts",
    "image": "img/p1_fullPack.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p1_fullPack.jpg",
      "img2":"img/p1_fullPack_red.jpg",
      "img3":"img/p1_fullPack_blue.jpg"
    }
  },
  {
    "id": 28,
    "title": "KING Summers Fashion Half Sleeves for Mens",
    "price": 8.8,
    "description": "KING Summers Printed Best Quality Fashion Half Sleeves T Shirt And Trouser For Men",
    "category": "half sleeves t shirts",
    "image": "img/p2_fullPack.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p2_fullPack.jpg",
      "img2":"img/p2_fullPack_red.jpg",
      "img3":"img/p2_fullPack_green.jpg"
    }
  },
  {
    "id": 29,
    "title": "Markhor Hoodie Warm Fashion Hoodies For Men",
    "price": 6.6,
    "description": "Best Quality Markhor Printed Hoodie Warm Fleece Fashion Maroon Hoodies For Men",
    "category": "hoodies",
    "image": "img/p4_hoodies.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p4_hoodies.jpg",
      "img2":"img/p4_hoodies_green.jpg",
      "img3":"img/p4_hoodies_blue.jpg"
    }
  },
  {
    "id": 30,
    "title": "Tshirt O-Neck Half Sleeves for Men for Mes",
    "price": 10,
    "description": "Nasa Circle Printed Tracksuit Cotton Pc Fabric Tshirt & Trosuer trendy fashion Casual Wear Summer Nasa Track Suit Tshirt O-Neck Half Sleeves for Men",
    "category": "half sleeves",
    "image": "img/p4_sleevless_shirt.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p4_sleevless_shirt.jpg",
      "img2":"img/p4_sleevless_shirt.jpg",
      "img3":"img/p4_sleevless_shirt.jpg"
    }
  },
  {
    "id": 31,
    "title": "Printed Zipper Jacket upper For Men and Women",
    "price": 12.99,
    "description": "Printed Zipper Jacket upper For Men and Women to Wear in Winter Summer full size Jacket for wearing",
    "category": "jacket",
    "image": "img/p1_jackets.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p4_sleevless_shirt.jpg",
      "img2":"img/p4_sleevless_shirt.jpg",
      "img3":"img/p4_sleevless_shirt.jpg"
    }
  }
  ///------
  ,
  {
    "id": 32,
    "title": " Black Leather Jacket For Men AWI-104 in Summer",
    "price": 7.99,
    "description": "This jacket is made exactly as A Grade PU leather External: Premium Quality PU LeatherPockets: Multiple Front Pockets and Inner PocketsSleeves: Full Quality Is Guaranteed: ",
    "category": "jacket",
    "image": "img/p2_jackets.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p2_jackets.jpg",
      "img2":"img/p2_jackets.jpg",
      "img3":"img/p2_jackets.jpg"
    }
  },
  {
    "id": 33,
    "title": "Stylish Mock Neck and Hooded Full Sleeves Jacket for Men",
    "price": 20,
    "description": "Fashion 2021 Designer Fleece Winter Zipper Casual Stylish Mock Neck and Hooded Full Sleeves Jacket for Men",
    "category": "jacket",
    "image": "img/p3_jackets.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p3_jackets.jpg",
      "img2":"img/p3_jackets.jpg",
      "img3":"img/p3_jackets.jpg"
    }
  },
  {
    "id": 34,
    "title": "Men Winter Thick Knitted Sweater Coat Long Sleeve Stand Collar Zipper Jacket",
    "price": 14.50,
    "description": "Side pocket can be used to store thing, or protect your hand from cold. The zipper makes you wear it or take off easily. Knitted sweater coat is casual but fashionable, and you can pair with pants you like",
    "category": "jacket",
    "image": "img/p4_jackets.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/p4_jackets.jpg",
      "img2":"img/p4_jackets.jpg",
      "img3":"img/p4_jackets.jpg"
    }
  },
  {
    "id": 35,
    "title": "Suit Vest Steampunk Gothic Waistcoat X-Large SU14 Black",
    "price": 5,
    "description": "Side pocket can be used to store thing, or protect your hand from cold. The zipper makes you wear it or take off easily. Knitted sweater coat is casual but fashionable, and you can pair with pants you like",
    "category": "waistcoat",
    "image": "img/p1_Waistcoat.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
    "Gallery":{
      "img1":"img/img1.jpg",
      "img2":"img/img1.jpg",
      "img3":"img/img1.jpg"
    }
  },
  {
    "id": 36,
    "title": "Vest Button Down Wool Tweed Vest Waistcoat Size L Light Coffee",
    "price": 17,
    "description": "Description Not Avaliable",
    "category": "waistcoat",
    "image": "img/p2_Waistcoat.jpg",
    "rating": {
      "rate": 3.6,
      "count": 5
    },
  }
]
//#endregion



/* ==========================================================================================
  sliceSlider
  =========================================================================================*/
  //#region SliceSlider
  let sliceSlider = document.getElementById("sliderPapular");
  if(sliceSlider){
    for (let i = 0; i < array.length; i++) {
      if(i>= 20 && i<= 26){
        sliceSlider.innerHTML +=`
        <div class="mx-3 mb-5">
            <img src="${array[i].image}"/>
            <div class="desc pt-4 px-2 h-100 w-100" style="box-shadow: var(--shadow);">
                <h5>${array[i].title}</h5>
                <small  class="fs-6 text-warning d-block mb-1 mt-3">$289.99 - <del class="text-danger">$299.99</del></small>
                <div class="d-flex justify-content-evenly py-4">
                  <a class="fa fa-shopping-cart fs-6 text-decoration-none homeCardIcon" onclick="addToCard(${array[i].id})"></a>
                  <a class="fa fa-heart fs-6 text-decoration-none homeCardIcon" onclick="addToWishList(${array[i].id})"></a>
                  <a href="product_Detail.html" class="fs-6 fa fa-circle-info text-decoration-none homeCardIcon" onclick="moreInfo(${array[i].id})"></a>
                </div>
            </div>
        </div>
      `
      }
    }
  }
  //#endregion 


  /* ==========================================================================================
  Onload 
  =========================================================================================*/
//#region onload

let uName1 = document.getElementById("uName1");
let uName2 = document.getElementById("uName2");
let dash1= document.getElementById("dashboard1");
let dash2=document.getElementById("dashboard2");
let userName1= document.getElementById("userName1")
let userName2= document.getElementById("userName2")
let logOut1 = document.getElementById("logOut1");
let logOut2 = document.getElementById("logOut2");
let login_option1 = document.getElementById("login_Option1");
let login_option2 = document.getElementById("login_Option2");

// let loggerName1 = document.getElementById("userName1");
// let loggerName2 = document.getElementById("userName2");


let login = localStorage.getItem("logger");
let uName = JSON.parse( localStorage.getItem("detaiAfterLogin") ); 
uName1.classList.add("d-lg-block");
uName1.classList.add("d-lg-block");

onload();
function onload(){
  document.getElementById("loader").classList.add("d-none");

  if(login == "1" || login == "2"){
    //___ Admin ___
    if(uName.type == "creater" || uName.type == "admin"){
      uName1.classList.remove("d-lg-none");
      uName1.classList.add("d-lg-block");
      uName2.classList.remove("d-none");
      userName1.innerHTML = uName.userName.substring(0,8);
      userName2.innerHTML = uName.userName.substring(0,8);
      dash1.classList.remove("d-lg-none");
      dash1.classList.add("d-lg-block");
      dash2.classList.remove("d-none");
      logOut1.classList.remove("d-lg-none");
      logOut1.classList.add("d-lg-block");
      logOut2.classList.remove("d-none");
      logOut2.classList.add("d-block");
    }
    //___ User ___
    else{
      uName1.classList.remove("d-lg-none");
      uName1.classList.add("d-lg-block");
      uName2.classList.remove("d-none");
      userName1.innerHTML = uName.userName.substring(0,8);
      userName2.innerHTML = uName.userName.substring(0,8);
      logOut1.classList.remove("d-lg-none");
      logOut1.classList.add("d-lg-block");
      logOut2.classList.remove("d-none");
      logOut2.classList.add("d-block");
    }
  }

  else if(login == "guest"){
    login_option1.classList.remove("d-lg-none");
    login_option1.classList.add("d-lg-block");
    login_option2.classList.remove("d-none");
    login_option2.classList.add("d-block");
  }
  else{
    localStorage.setItem("logger","guest");
    login_option1.classList.remove("d-lg-none");
    login_option1.classList.add("d-lg-block");
    login_option2.classList.remove("d-none");
    login_option2.classList.add("d-block");
  }
}

// _____ Home Load with Swal _______________
function swalCard(){
  onload();  
  if(login == "1"){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `<h1>${uName.type}</h1><h2 class="text-primary">Welcome : ${uName.userName} \n\n</h2>`,
      allowOutsideClick: false,
      showConfirmButton: false,
      timer: 2500
    })
    localStorage.setItem("logger","2");
  }
  else{}
  setTimeout(offerPopup,1000)
}

function offerPopup(){
  var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    // keyboard: false
  }) // relatedTarget
  myModal.show()
}
//#endregion


/* ==========================================================================================
  LogOut Click Button
 =========================================================================================*/
function logOut_SingIn(n)
{
  if(n == 1){
    window.location = "signin.html";
    localStorage.setItem("logger","guest"); 
  }
  else{
    localStorage.setItem("logger","guest"); 
    window.location = "index.html";
  }
}


/* ==========================================================================================
    Theme Chage
  =========================================================================================*/
//#region Theme_Changer
var ThemeStatus = localStorage.getItem("Theme") || 1;
if(ThemeStatus == null){
  ThemeStatus == 0;
}

let toggleBtn = document.querySelector(".themeToggle");
if(toggleBtn){
  toggleBtn.addEventListener("click",function(){
    if(ThemeStatus == 0){
      ThemeStatus++;
      darklight(ThemeStatus);
      localStorage.setItem("Theme",ThemeStatus);
    }
    else{
      ThemeStatus--;
      darklight(ThemeStatus);
      localStorage.setItem("Theme",ThemeStatus);
    }
  })
}

document.querySelectorAll("input").forEach(e=>{
  e.classList.add("border-0")
  e.classList.add("border-bottom")
  e.classList.add("rounded-0")
})

// document.querySelectorAll("input").forEach(e=>{
//   // e.target.addEventListener('focus',function(s){
//   //   target.classList.add("border-danger");
//   // })
//   e.target.addEventListener('focus' ,function(){
//     e.classList.add("border-danger");
//     alert("sf");
//   })
// })

var r = document.querySelector(':root');
darklight(ThemeStatus);
function darklight(theme){
  //_______ light ho to ______________
  if(theme == "0")
  {
    // _____ outline-button_______
    let btn = document.querySelectorAll(".btn-outline-primary");
    btn.forEach(e=>{
      e.classList.add("btn-outline-dark");
    })
    // _____ priamry Button _______
    document.querySelectorAll(".btn-primary").forEach(e=>{
      e.classList.add("btn-light");
    })

    
    document.querySelectorAll("input").forEach(e=>{
      e.classList.remove("bg-white")
      e.classList.remove("border-dark")
      e.classList.remove("border-0")
      e.classList.remove("border-bottom")
      e.classList.remove("rounded-0")

      e.classList.add("bg-dark")
      e.classList.add("border-white")
      e.classList.add("border-0")
      e.classList.add("border-bottom")
      e.classList.add("rounded-0")
    })

    document.querySelectorAll("textarea").forEach(e=>{
      e.classList.remove("bg-white")
      e.classList.remove("border-dark")
      e.classList.remove("border-0")
      e.classList.remove("border-bottom")    
      e.classList.remove("rounded-0")

      e.classList.add("bg-dark")
      e.classList.add("border-white")
      e.classList.add("border-0")
      e.classList.add("border-bottom")
      e.classList.add("rounded-0")
    })

    // ___ primary Color _____
    r.style.setProperty('--bg-primary','black');
    r.style.setProperty('--text-dark','#cfcfcf');
    
    //__body___
    // r.style.setProperty('--body-color','#332D2D');      
    document.getElementById("Home").classList.add("bg-dark");

    //___ shadow ___
    r.style.setProperty('--shadow','rgb(255, 245, 230) 0px 1px 20px 0px');
    r.style.setProperty('--hoverBackgroundColor','#ffc107');

    r.style.setProperty('--paralaxImage','url(img/Banner9.jpg)')
    r.style.setProperty('--NextPreviewColor','#212529')

    document.getElementById("logo").src = "img/logo6.png"
    document.getElementById("logoColor").classList.add("text-danger")
    document.getElementById("logoColor").classList.remove("text-white")
    document.getElementById("logoColor").classList.add("ms-1")
  }
  //_______ dark ho to______________
  else{
    // ___ outline-button_______
    let btn = document.querySelectorAll(".btn-outline-primary");
    btn.forEach(e=>{
      e.classList.remove("btn-outline-dark");
    })
    // _____ priamry Button _______
    document.querySelectorAll(".btn-light").forEach(e=>{
      e.classList.remove("btn-light");
    })

    // ___ primary Color _____
    r.style.setProperty('--bg-primary','#007bff');
    r.style.setProperty('--text-dark','#343a40');

    //__body___
    // r.style.setProperty('--body-color','white');
    document.getElementById("Home").classList.remove("bg-dark");

    //___ shadow ___
    r.style.setProperty('--shadow','rgba(100, 100, 111, 0.2) 0px 1px 29px 0px');
    r.style.setProperty('--hoverBackgroundColor','#24a0ed');

    r.style.setProperty('--paralaxImage','url(img/Banner8.jpg)')
    r.style.setProperty('--NextPreviewColor','white')

    document.querySelectorAll("textarea").forEach(e=>{
      e.classList.remove("bg-dark")
      e.classList.remove("border-white")
      e.classList.remove("border-0")
      e.classList.remove("border-bottom")
      e.classList.remove("rounded-0")

      e.classList.add("bg-white")
      e.classList.add("border-dark")
      e.classList.add("border-0")
      e.classList.add("border-bottom")
      e.classList.add("rounded-0")
    })

    document.querySelectorAll("input").forEach(e=>{
      e.classList.remove("bg-dark")
      e.classList.remove("border-white")
      e.classList.remove("border-0")
      e.classList.remove("border-bottom")
      e.classList.remove("rounded-0")

      e.classList.add("bg-white")
      e.classList.add("border-dark")
      e.classList.add("border-0")
      e.classList.add("border-bottom")
      e.classList.add("rounded-0")
    })

    document.getElementById("logo").src = "img/logo3.png"
    document.getElementById("logoColor").classList.remove("text-danger")
    document.getElementById("logoColor").classList.add("text-white")
    document.getElementById("logoColor").classList.add("ms-2")
  }
}

//#endregion 


/* ==========================================================================================
     Active Navbar Link
   =========================================================================================*/
//#region  Active_Link
// let active = localStorage.getItem("active");

// if(active==null){
//   let s = localStorage.setItem("active",1);
// }

// activeItem();
// function activeItem(){
//   if(active == "2"){
//     const activePage = window.location.pathname;
//     console.log(activePage);
//     const anchorSelected = document.querySelectorAll(".navbar .navbar-nav a").forEach(
//       link => {
//         // console.log(link.href.includes(`${activePage}`));
//         // // console.log(link.href);
//         if(link.href.includes(`${activePage}`)){
//           link.classList.add('act');
//           // alert("Paksitan")
//         }  
//       }
//     )
//   }
//   localStorage.setItem("active",2);
// }

//#endregion



/* ==========================================================================================
    Scroll Navbar Top To buttom Sticky Navbar
   =========================================================================================*/
//#region Sticky_Navbar_&_Sticky_Right_Div
scrollToTop();
let value = 1;

function scrollToTop(){
  let navbar = document.querySelector(".navbar-sticky");
  let scrollTopButton = document.querySelector("#scrollUp");
  let divSticky = document.querySelector("#div-sticky");
  // let modId = document.getElementById("myModal");
  // ___ Show Navbar/Button on Scroll ___
  window.onscroll = function(){
      let scroll = document.documentElement.scrollTop;
      // let scrollInPercen = getVerticalScrollPercentage(document.body);

      // ___ Smoth Scroll on GoToTopButton ____
      scrollTopButton.addEventListener('click', () => {
        let Home = document.querySelector("#Home");
        Home.scrollIntoView({behavior: "smooth"})
      })

      // ___________________ Moving Up Navbar (hiding) _______________________-
      if(scroll >= 90 ){
        // ____ Custom animated Class ____
        navbar.classList.add("navbar-sticky-moved-up");
      }
      else{
        // ____ Custom animated Class ____
        navbar.classList.remove("navbar-sticky-moved-up");
      }
      
      // ___________________ Add Transition in Navbar / Show Button _______________________-
      if(scroll >= 140){
        // Navbar
        navbar.classList.add("navbar-sticky-transitioned");
        // button
        scrollTopButton.classList.add('scrollActive');
      }
      else {
        // Navbar
        navbar.classList.remove("navbar-sticky-transitioned");
        // button
        scrollTopButton.classList.remove('scrollActive');
      }

      // ___________________ (Navbar + Div)  on 380 Scroll _______________________-
      if(scroll>=180){
        navbar.classList.add("navbar-sticky-on");
        //---- Div Sticky ----
        if(divSticky){
          divSticky.classList.add("div-sticky");
        }
      }
      else{
        navbar.classList.remove("navbar-sticky-on");
        //---- Div Sticky ----
        if(divSticky){
          divSticky.classList.remove("div-sticky");
        }
      }

      // // ___________________ (Navbar + Div)  on 380 Scroll _______________________-
      // if(scroll >  600 || scroll < 601 ){
      //   // var myModal  = document.getElementById('largeModal');
      //   // alert("") 
      //   // var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
      //   // myModal.show()
      //   // myModal.addEventListener("shown.bs.modal",function(){

      //   // });
      //   value = 2;
      //   d();
      // }
      // else{
      //   value = 1;
      //   myModal.dispose();
      // }

    
  }
}

//#endregion 


/* ==========================================================================================
    Pagination
  =========================================================================================*/
//#region Pagination
let arrayList = array.length;
let desirProduct = 8;
let pageNumb = arrayList/desirProduct;
// alert(pageNumb);
let TotalPage = Math.ceil(pageNumb,2);
// alert(TotalPage);

let paginationDidv = document.getElementById("paginationRander");
if(paginationDidv){
  paginationDidv.innerHTML = `<li class="page-item">
  <a class="page-link page-left border-0 py-2 border" onclick="pageUpDown('Dec')">Previous</a>
  </li>`;
  for (let i = 0; i < TotalPage; i++) {
    if(i==0){
      paginationDidv.innerHTML += `
        <li class="page-item"><a class="page-link rounded-circle mx-2 border-0 py-2 px-3 active" onclick="f(${i+1},${desirProduct})">${i+1}</a></li>
      `
    }
    else{
      paginationDidv.innerHTML += `
        <li class="page-item"><a class="page-link rounded-circle mx-2 border-0 py-2 px-3" onclick="f(${i+1},${desirProduct})">${i+1}</a></li>
      `
    }
  }
  paginationDidv.innerHTML += `<li class="page-item">
    <a class="page-link page-right border-0 py-2" onclick="pageUpDown('Inc')">Next</a>
  </li>`;
}


let add = 1;
function pageUpDown(method){
  let s = document.querySelectorAll("#paginationRander li a");
  if(method == "Inc"){
    if(++add <= TotalPage){
      // alert(add);
      for (let i = 0; i < s.length; i++) {
        if(i == add){
          s[i].classList.add("active");
          f(i , desirProduct);
        }
        else{
          s[i].classList.remove("active");
        }
      }
    }
    else if(add >= TotalPage){
      add=TotalPage;
    }
  }
  else if(method == "Dec"){
    if(--add >= 1){
      // alert(add);
      for (let i = 0; i < s.length; i++) {
        if(i == add){
          s[i].classList.add("active");
          f(i , desirProduct);
        }
        else{
          s[i].classList.remove("active");
        }
      }
    }
    else if(add < 1){
      add=1;
    }
  }
  
}

function f(strN){
  if(strN == 1){
    showPagination(array,strN,desirProduct)//1,8
  }
  // if(strN == 2){
  //   showPagination(array,(desirProduct+1),desirProduct*2);//8+1    (9,16)       last item 2nd Time Show nhin krnaa 
  // }
  // if(strN == 3){
  //   showPagination(array,(desirProduct*2)+1,desirProduct*3);//16+1    (17,24)
  // }
  // if(strN == 4){
  //   showPagination(array,(desirProduct*3)+1,desirProduct*4);
  // }
  // if(strN == 5){
  //   showPagination(array,(desirProduct*4)+1,desirProduct*5);
  // }
  for (let i = 0; i < TotalPage; i++) {
    if(i == strN-1){
      // alert(i);
      // alert(TotalPage)
      showPagination(array,(desirProduct*i)+1,desirProduct*(i+1));
    }
  }

  //------ Selected li ---------
  let s = document.querySelectorAll("#paginationRander li a");
  for (let i = 0; i < s.length; i++) {
    if(i == strN){
      s[i].classList.add("active");
    }
    else{
      s[i].classList.remove("active");
    }
  }

  add = strN;
}


function showPagination(currentArray,start,end){

  // empty on 2nd time load
  let bootstrapCard = document.querySelector("#myCard");
  if(bootstrapCard){
    bootstrapCard.innerHTML = "";
    for(var i=0; i<currentArray.length; i++){
      // alert(currentArray[i].id);
      if(currentArray[i].id>=start && currentArray[i].id<=end){
        document.querySelector("#myCard").innerHTML += `
        <div class="col mb-3" data-aos="flip-left">
          <div class="card product_Cards me-4 product">
              <div class="imgbox">
                    <div class="position-absolute top-0 start-0 mt-3 ms-3 text-white" onclick="addToWishList(${currentArray[i].id})" style="z-index:999">
                      <div class="rounded-circle bg-warning d-flex justify-content-center align-content-center" id="storeIcon1">
                          <i class="fa-solid fa-heart" style="margin-top:5px"></i>
                      </div>
                    </div>

                    <img src="${currentArray[i].image}"/>
                    
                    <div class="position-absolute top-0 end-0 pe-2 pt-2  text-white" onclick="addToCard(${currentArray[i].id})">
                      <div class="rounded-circle bg-warning me-2">
                          <img src="img/shopping-cart-icon.png" id="storeIcon" class="rounded-circle"/>
                      </div>
                    </div>
              </div>
              <div class="details">
                  <h2 class="text-capitalize fw-bold">${currentArray[i].category}<br><span>${currentArray[i].title}</span></h2>
                  <div class="d-flex justify-content-between">
                    <span>Price</span>
                    <span class="text-danger me-2 ">$ ${currentArray[i].price}</span>
                  </div>
                  <ul class="mt-3 cardUl">
                      <li class="text-success"><span class="text-dark"> Total Stock :</span> ${currentArray[i].rating.count} </li>
                  </ul>
                  <ul class="cardUl">
                      <li class="text-success"><span class="text-dark"> Rating :</span> ${currentArray[i].rating.rate}</li>
                  </ul>  
                    <a type="button" class=" bg-primary" id="moreButton"   data-bs-target="#mymodel" data-bs-toggle="modal" onclick="Modal(${currentArray[i].id})">More Details</a>     
              </div>
          </div>
        </div>
        `;
      }
    }
  }
}
//#endregion


/* ==========================================================================================
    Product Card Showing  + Filter +  Modal + More_Information 
   =========================================================================================*/
//#region All_1_by_1

//_______________________1 Card___________________________
//#region  1. Show_Card
//_______________________1 showing_Bootstrap Card_________________________
function showCardGallery(currentArray){
  // empty on 2nd time load
  let bootstrapCard = document.querySelector("#myCard");
  if(bootstrapCard){
    bootstrapCard.innerHTML = "";
    for(var i=0; i<currentArray.length; i++){
      // alert(currentArray[i].id);
        document.querySelector("#myCard").innerHTML += `
        <div class="col mb-3"  data-aos="flip-left">
          <div class="card me-4 product">
              <div class="imgbox position-relative">
                    <div class="position-absolute top-0 start-0 mt-3 ms-3 text-white" onclick="addToWishList(${currentArray[i].id})" style="z-index:999">
                    <div class="rounded-circle bg-warning d-flex justify-content-center align-content-center" id="storeIcon1">
                        <i class="fa-solid fa-heart" style="margin-top:5px"></i>
                    </div>
                  </div>

                  <img src="${currentArray[i].image}"/>
                  
                  <div class="position-absolute top-0 end-0 pe-2 pt-2  text-white" onclick="addToCard(${currentArray[i].id})">
                    <div class="rounded-circle bg-warning me-2">
                        <img src="img/shopping-cart-icon.png" id="storeIcon" class="rounded-circle"/>
                    </div>
                  </div>
              </div>
              <div class="details">
                  <h2 class="text-capitalize fw-bold">${currentArray[i].category}<br><span>${currentArray[i].title}</span></h2>
                  <div class="d-flex justify-content-between">
                    <span>Price</span>
                    <span class="text-danger me-2 ">$ ${currentArray[i].price}</span>
                  </div>
                  <ul class="mt-3 cardUl">
                      <li class="text-success"><span class="text-dark"> Total Stock :</span> ${currentArray[i].rating.count} </li>
                  </ul>
                  <ul class="cardUl">
                      <li class="text-success"><span class="text-dark"> Rating :</span> ${currentArray[i].rating.rate}</li>
                  </ul>  
                    <a type="button" class=" bg-primary" id="moreButton"   data-bs-target="#mymodel" data-bs-toggle="modal" onclick="Modal(${currentArray[i].id})">More Details</a>     
              </div>
          </div>
        </div>
        `;
    }
  }
}
showPagination(array,1,8);
//#endregion

//_______________________2 Filter/Search Bootstrap Card _________________________
//#region filter
let filterArray = [];

let search = document.querySelector("#searchInput");

if(search){
  search.addEventListener("keyup",function(){
    let text = document.querySelector("#searchInput").value;
    filterArray = array.filter(function(a){
      if(a.category.match(text.toLowerCase())){
        return a.category;
      }
    }) 
    if(this.value == ""){
      showPagination(array,1,8);
      document.querySelector("#para").style.display = "none";
      document.getElementById("paginationRander").classList.remove("d-none");
    }
    else{
      if(filterArray == ""){
        document.querySelector("#para").style.display = "block";
        document.querySelector("#myCard").innerHTML ="";
      }
      else{
          //  let matchElements = showPagination(filterArray,1,42);
          let size = 10;
          var items = filterArray.slice(0,size);
          showCardGallery(items); //only show 8 element   after  Filter
          //___ Empty Message ___
          document.querySelector("#para").style.display = "none";
          //___ 
          document.getElementById("paginationRander").classList.add("d-none");
      }
    }
  })
}

//____ Total filter Item Count ____
function filter(category){
  filterArray = array.filter(function(a){
    if(a.category.match(category)){
      return a.category;
    }
  })
  return filterArray.length;
}

let stockCount = document.querySelectorAll(".stockCount");
if(stockCount){
  let hood = stockCount[0];
  let shirts = stockCount[1];
  let jewelery = stockCount[2];
  let Bag = stockCount[3];
  let jacket = stockCount[4];
  let waistcoat= stockCount[5];
  let upper =stockCount[6];
  let women = stockCount[7];
  if(hood && shirts && jewelery && Bag && jacket && waistcoat && upper && women)
  {
    hood.innerHTML = filter("hoodies");
    shirts.innerHTML = filter("shirt");
    jewelery.innerHTML = filter("jewelery");
    Bag.innerHTML = filter("bag");
    jacket.innerHTML = filter("jacket");
    waistcoat.innerHTML = filter("waistcoat");
    upper.innerHTML = filter("upper");
    women.innerHTML = filter("women");
  }
  
}

//__________ Fillter on Selected StockCount ______________
let para = document.querySelector("#para");
let pagination = document.getElementById("paginationRander")
  function searchfilter(t){
      filterArray = array.filter(function(a){
        if(a.category.match(t.toLowerCase())){
          return a.category;
        }
      }) 
      if(t == ""){
        showPagination(array,1,8);
        
        if(para){
          para.style.display = "none";
        }
        if(pagination){

          pagination.classList.remove("d-none");
        }
      }
      else{
        if(filterArray == ""){
          
          if(para){
            para.style.display = "block";
          }
          document.querySelector("#myCard").innerHTML ="";
        }
        else{
            //  let matchElements = showPagination(filterArray,1,42);
            let size = 10;
            var items = filterArray.slice(0,size);
            showCardGallery(items); //only show 8 element   after  Filter
            //___ Empty Message ___
            if(para){
              para.style.display = "none";
            }
            //___ Remove Pagination ____
            if(pagination){

              pagination.classList.add("d-none");
            }
        }
      }
  }


let filter_Cl = document.querySelectorAll(".filter_Class");
if(filter_Cl){
  filter_Cl.forEach(element => {
    element.addEventListener("click",function(){
      // alert("sdf")
      // alert(this.getAttribute("data-name"))
      // if(this.getAttribute("data-name") == "hoodie"){
      //   searchfilter("hoodie")
      // }
      // else if(this.getAttribute("data-name") == "shirt"){
      //   searchfilter("shirt")
      // }
      // else if(this.getAttribute("data-name") == "jewelery"){
      //   searchfilter("jewelery")
      // }
      // else if(this.getAttribute("data-name") == "bag"){
      //   searchfilter("bag")
      // }
      // else if(this.getAttribute("data-name") == "jacket"){
      //   searchfilter("jacket")
      // }
      // else if(this.getAttribute("data-name") == "waskit"){
      //   searchfilter("waistcoat")
      // }
      // else if(this.getAttribute("data-name") == "upper"){
      //   searchfilter("upper")
      // }
      // else if(this.getAttribute("data-name") == "women"){
      //   searchfilter("women")
      // }
      // else(this.getAttribute("data-name") == "clear"){
      //   searchfilter("")
      // }
      searchfilter(this.getAttribute("data-name"));

      //____ Empty Category Filter _______
      localStorage.setItem( "catFilter", "");
      
    })
  });
}

//_____________ Animation Loaded _______________
moreInfoLoaded();
let loadingMoreDetail = document.getElementById("loadingAnimation");
function moreInfoLoaded(){
  onload();
  setTimeout(animationLoad,1200);
}
function animationLoad(){
    if(loadingMoreDetail){
      loadingMoreDetail.classList.add("d-none");
    }
}

//#endregion

//_______________________3. Modal / More_Information _________________________
//#region Modal / More_Information
function Modal(id){
  for (let i = 0; i < array.length-1; i++) {
    if(id == array[i].id)
    {
      document.getElementById("modal").innerHTML = `
        <div class="modal-content">
            <div class="modal-header d-flex justify-content-end">
                <button type="button" class="btn-close " data-bs-dismiss="modal" onclick="closefun()" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-6">
                        <img src="${array[i].image}"  height="400px" width="99%">
                    </div>
                    <div class="col-6">
                        <h2 class="modal-title text-capitalize" id="exampleModalLabel">${array[i].category}</h2>
                        <h5>${array[i].title}</h5>
                        <div class="overflow-hidden mt-4" style="height:245px;">
                          <p class="">${array[i].description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer ">
              <div class="d-flex">
                <a  class="bg-primary px-3 rounded-0 me-2" id="modalBtn"  data-bs-dismiss="modal">Close</a>
                <a href="product_Detail.html" class="bg-primary px-3 me-4 rounded-0" id="modalBtn" onclick="moreInfo(${array[i].id})">More Info</a>
              </div>
          </div>
        </div>
      `;
    }
  }
}

//_______________________More Information  | Local Storedge_________________________
//Sending data To Product Detail
function moreInfo(id){
  var obj;
    for(var i =0;i<array.length;i++){
      if(id == array[i].id)
        obj = {
            id : array[i].id ,
            title:array[i].title,
            category:array[i].category,
            description:array[i].description,
            price :array[i].price , 
            image:array[i].image ,
            rating : {
              rate:array[i].rating.rate ,
              count : array[i].rating.count
            },
            gallery:{
              img1:array[i].Gallery.img1,
              img2:array[i].Gallery.img2,
              img3:array[i].Gallery.img3,
            }
        }
    }

    var objstring = JSON.stringify(obj); 
    localStorage.setItem("moreInfo",objstring);
    console.log(objstring)
}

/* ==========================================================================================
    More Info Products
   =========================================================================================*/
var cId = 0;
var pCategory;
loadProductsInformation();
function loadProductsInformation(){
  // ____________________ Bad Logic ______________________
  var data = localStorage.getItem("moreInfo");
  var obj= JSON.parse(data);
  if(obj != null){
    var pDetail = document.querySelectorAll(".productDetail");
    var pMoreImg =document.querySelectorAll(".moreImg");
    var descripiton = document.getElementById("desc");
    let w;
    cId = obj.id;
    pCategory = obj.category;
    if(pDetail){
      w = (obj.rating.rate*20);
      if(pDetail[0] && pDetail[1] && pDetail[2] && pDetail[3] && pDetail[4] && pDetail[5] && descripiton ){
        pDetail[0].src = obj.image;
        //__ Adding Ref for zoom __
        // pDetail[0].setAttribute("ref",obj.image);
        // console.log(pDetail[0].getAttribute("ref"))

        pMoreImg[0].src = obj.gallery.img1;
        pMoreImg[1].src = obj.gallery.img2;
        pMoreImg[2].src = obj.gallery.img3;

        pDetail[1].innerHTML = obj.title;
        pDetail[2].innerHTML = obj.rating.rate;
        pDetail[3].innerHTML = obj.price;
        pDetail[4].innerHTML = obj.category;

        descripiton.innerHTML = obj.description;
        // if(pDetail[0]){
        //   pDetail[5].innerHTML = obj.descripDetailtion;
        // }
        pDetail[5].innerHTML = obj.rating.count;      
      }   
    }
    
    let probar = document.getElementById("proNumber");
    if(probar){
      if(w<=50){
        probar.style.backgroundColor = "red";
        probar.style.width = (w + "%");
      }
      else if(w>=50 && w<=80){
          probar.style.backgroundColor = "#ffc107";
          probar.style.width = (w + "%");
      }
      else{
          probar.style.backgroundColor = "green";
          probar.style.width = (w + "%");
      }
    }
  }
}

//_____________ Selected Image ____________________
let galleryImage = document.querySelectorAll(".moreImg");
if(galleryImage){
  activeImage();
  function activeImage(){
    galleryImage.forEach(element => {
      element.addEventListener("click",function(){
        this.classList.add("active_Image")
        document.getElementById("pImg").src = this.src;
        //_____________ Zoom Div ________________
        document.querySelector(".big .productDetail").src = this.src;
      })
      element.classList.remove("active_Image")
    });  
  }
}
let gallery1stImage = document.getElementById("gImg");
if(gallery1stImage){
  gallery1stImage.classList.add("active_Image")
}

//__________ Fillter on Selected StockCount ______________
let tag = ['hoodie','shirt','jewelery','bag','jacket','waskit','waskit','upper','women'];
function searchRelated(t){
  filterArray = array.filter(function(a){
    for (let i = 0; i < tag.length; i++) {
      //___ Match categery with any Tag _____
      if(t != null){
        let matchValue = t.match(tag[i])
        //___ get Result ____
        if(a.category.match(matchValue)){
          return a.category;
        }
      }
    }
  })
  relatedProd(filterArray) //
}
searchRelated(pCategory);

function relatedProd(arrayRelated){
  let relatedProduct  = document.getElementById("relatedProducts");
  // let sliceSlider = document.getElementById("sliderPapular");
  if(relatedProduct){
    for (let i = 0; i < arrayRelated.length; i++) {
        relatedProduct.innerHTML +=`
        <div class="col mb-3" data-aos="flip-left">
          <div class="card product_Cards me-4 product">
              <div class="imgbox">
                  <img src="${arrayRelated[i].image}"/>
                  <div class="position-absolute top-0 end-0 pe-2 pt-2  text-white" onclick="addToCard(${arrayRelated[i].id})">
                    <div class="rounded-circle bg-warning me-2" >
                        <img src="img/shopping-cart-icon.png" id="storeIcon" class="rounded-circle"/>
                    </div>
                  </div>
              </div>
              <div class="details">
                  <h2 class="text-capitalize fw-bold">${arrayRelated[i].category}<br><span>${arrayRelated[i].title}</span></h2>
                  <div class="d-flex justify-content-between">
                    <span>Price</span>
                    <span class="text-danger me-2 ">$ ${arrayRelated[i].price}</span>
                  </div>
                  <ul class="mt-3 cardUl">
                      <li class="text-success"><span class="text-dark"> Total Stock :</span> ${arrayRelated[i].rating.count} </li>
                  </ul>
                  <ul class="cardUl">
                      <li class="text-success"><span class="text-dark"> Rating :</span> ${arrayRelated[i].rating.rate}</li>
                  </ul>  
                    <a href="product_Detail.html" type="button" class=" bg-primary" id="moreButton"  onclick="moreInfo(${arrayRelated[i].id})">More Details</a>
              </div>
          </div>
        </div>
      `
    }
  }
}

//add to card Btn
let cardBtn = document.querySelector(".cardBtn");
if(cardBtn){
  cardBtn.addEventListener("click",function(){
    addToCard(cId)
  })
}

//#endregion

//#endregion


/* ==========================================================================================
  Category Filter (home -> Product Page)
  =========================================================================================*/
  //#region 
  let categoryValue = localStorage.getItem("catFilter");
  let iOnhover = document.querySelectorAll(".iOnhover");
  iOnhover.forEach(element=>{
    element.onclick=function(){
      // alert(element.getAttribute("data-category"))
      localStorage.setItem( "catFilter", element.getAttribute("data-category")) || '';
      location.href = "Product.html"
    }
  });
  // alert(categoryValue)
  searchfilter(categoryValue);
  
  //#endregion
  
  

/* ==========================================================================================
    SweetAlert Custom function
   =========================================================================================*/
   //#region 
  //Sweet Alert
  function alertOnAdd(type , message){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-center',
      showConfirmButton: false,
      timer: 900,
      timerProgressBar: true,
    })
    Toast.fire({
      icon: type,//'success',
      title: message//'Added in successfully'
    })
  }
  //#endregion



/* ==========================================================================================
    Add To Card  ===> (Guest User)  + (Registor user) + Admin + Creter
   =========================================================================================*/
   //#region 
   let logger = localStorage.getItem("logger");
   let detaiAfterLogin = JSON.parse( localStorage.getItem("detaiAfterLogin") ); 
   let products = JSON.parse(localStorage.getItem("products"));
   var guestproducts = JSON.parse(localStorage.getItem("guestproducts")) || [];
   
  if(logger == 1 || logger==2){
    //___________ Creater , Admin , Registored User ___________________
    //#region 
        function addToCard(id){
          const product = array.find((p)=> p.id===id);
          if(products == null){
            products = [
              [
                [detaiAfterLogin.id],
                [
                  {
                    ...product,
                    numberOfUnits : 1,
                    totalItemprice : product.price,
                  }
                ]
              ]
            ];
            alertOnAdd('success','Added in Successfully');
          }
          else{
            let number = 0;
            for (let i = 0; i < products.length; i++) {
              //1. if user Match
              if(products[i][0] == detaiAfterLogin.id){
                let select = products[i][1].some((p)=> p.id === id);
                // let proId =  products[i][1].map((p)=> alert(p.id) )
                // alert(select);
                // alert(select)
                // ________ Product Alredy Exist __________
                if(select){//false
                  // alert("product alredy exist");
                  changeNumberOfUnites("plus" , id)
                  number = 1;
                }
                else{// ________ Product 1st Time Added __________
                  products[i][1].push(
                    {
                      ...product,
                      numberOfUnits : 1,
                      totalItemprice : product.price,
                    }
                  )
                  alertOnAdd('success','Added in Successfully');
                  number = 1;
                }
              }
            }
            //2. if user Not Match
            if(number == 0){
              products.push(
                  [
                    [detaiAfterLogin.id],
                    [
                      {
                        ...product,
                        numberOfUnits : 1,
                        totalItemprice : product.price,
                      }
                    ]
                  ]
              );
              // _______ 1st Time Card Added To DropDwon _________________
              alertOnAdd('success','Added in Successfully');
            }
          }
          updateProduct();
        }

        function updateProduct(id){
          if(products != null){
            localStorage.setItem("products",JSON.stringify(products));
            renderCartItems(id);
            renderSubTotal();//end me krnaa ha
            // // _____________ 2nd Page of Card Detail ____________________
            renderCardDetailsPage(id);
          }
          
        }
        
        updateProduct();
        function renderSubTotal(){
              let totalPrice = 0,
              totalItems = 0;

              for (let row = 0; row < products.length; row++) {
                if(products[row][0] == detaiAfterLogin.id){
                  
                  let items= products[row][1]; //2nd column ke rows Get kr lain
          
                  for (let r = 0; r < items.length; r++) {
                    // alert(items[r].id);
                    totalPrice += items[r].price * items[r].numberOfUnits;
                    totalItems += items[r].numberOfUnits;
                  }
                }
              }

              document.getElementById("T_Card").innerHTML = totalItems;
              document.getElementById("Canv_card").innerHTML = totalItems;
              document.getElementById("T_price").innerHTML = `$ ${totalPrice.toFixed(2)}`;
              document.getElementById("Canv_price").innerHTML = `$ ${totalPrice.toFixed(2)}`;
              document.getElementById("totalcard").innerHTML = totalItems;
              document.getElementById("totalCanv_card").innerHTML = totalItems;

              // ___________ Card Page Detai 2nd page Work _____________
              shipingCalculater(totalPrice , totalItems);
        }
        
        // _______ Render Cart To DropDwon  == of Logger User/admin/creater _______
        function renderCartItems(id){
          var renderCardinDropDwon =  document.querySelector(".dropDiv #productDiv");
          var renderCardinCanvas =  document.querySelector(".productDiv");

          
            // _____ Render Cart DropDown______________
            if(renderCardinDropDwon){
              renderCardinDropDwon.innerHTML = "";      
              for (let row = 0; row < products.length; row++) {

                if(products[row][0] == detaiAfterLogin.id){
                  // alert(products[row][0]);
                  // alert(products[row][1]);

                  let items= products[row][1]; //2nd column ke rows Get kr lain

                  for (let r = 0; r < items.length; r++) {
                    // alert(items[r].id);
                    // console.log(s[d][l].image);
                    renderCardinDropDwon.innerHTML += `
                    <div class="row border-bottom mb-3 pb-1">
                        <div class="col-5 d-flex align-content-center">
                            <img src="${items[r].image}" class="img-fluid">
                        </div>
                        <div class="col-5 mt-3">
                            <h5 class="mt-1" id="i">${items[r].category}</h5>
              
                            <div class="d-flex justify-content-between">
                              <span>Pr_Unite</span><br>
                              <b class="text-danger">$ ${items[r].price}</b>
                            </div>
              
                            <div class="d-flex justify-content-between mt-2">
                                <p class="">Total</p>
                                <b class="text-danger" id="priceTotalNumberOfCart">$ ${items[r].totalItemprice}</b>
                            </div>
                            
                            <div class="d-flex justify-content-between">
                                <p class="">items</p>
                                <b class="me-4" id="">${items[r].numberOfUnits}</b>
                            </div>
                        </div>
                        <div class="col-2">
                              <div class="bg-danger badge rounded-pill p-2 mt-3 remove-cart" onclick="removeItemFromCart(${items[r].id})">
                                  <i class="fa fa-trash"></i>
                              </div>
                        </div>
                    </div>
                    `; 
                  }

                }
              }
            }

            // _____ Render Cart Canvase______________
            if(renderCardinCanvas){
              renderCardinCanvas.innerHTML = "";      

              for (let row = 0; row < products.length; row++) {

                if(products[row][0] == detaiAfterLogin.id){
                  // alert(products[row][0]);
                  // alert(products[row][1]);

                  let items= products[row][1]; //2nd column ke rows Get kr lain

                  for (let r = 0; r < items.length; r++) {
                    // alert(items[r].id);
                    // console.log(s[d][l].image);
                    renderCardinCanvas.innerHTML += `
                    <div class="row border-bottom mb-3 pb-1">
                        <div class="col-5 d-flex align-content-center">
                            <img src="${items[r].image}" class="img-fluid">
                        </div>
                        <div class="col-5 mt-3">
                            <h5 class="mt-1" id="i">${items[r].category}</h5>
              
                            <div class="d-flex justify-content-between">
                              <span>Pr_Unite</span><br>
                              <b class="text-danger">$ ${items[r].price}</b>
                            </div>
              
                            <div class="d-flex justify-content-between mt-2">
                                <p class="">Total</p>
                                <b class="text-danger" id="priceTotalNumberOfCart">$ ${items[r].totalItemprice}</b>
                            </div>
                            
                            <div class="d-flex justify-content-between">
                                <p class="">items</p>
                                <b class="me-4" id="">${items[r].numberOfUnits}</b>
                            </div>
                        </div>
                        <div class="col-2">
                              <div class="bg-danger badge rounded-pill p-2 mt-3 remove-cart" onclick="removeItemFromCart(${items[r].id})">
                                  <i class="fa fa-trash"></i>
                              </div>
                        </div>
                    </div>
                    `; 
                  }

                }
              }
            }
          
        }

        
        //change number
        function changeNumberOfUnites(action , id){
          for (let row = 0; row < products.length; row++) {
            let select = products[row][1].some((p)=> p.id === id);

            if(select){
              products[row][1] = products[row][1].map( item =>{

                let numberOfUnits = item.numberOfUnits;
                let totalItemprice = item.totalItemprice;
                if(item.id === id){
                  // _________________ -- _____________________
                  if(action === "minus" && numberOfUnits > 1){
                    numberOfUnits--;
                    totalItemprice = item.price*numberOfUnits;
            
                    alertOnAdd("error",'Removed Successfuly');
                  }
                  // _________________ ++ _____________________
                  else if(action === "plus" && numberOfUnits < item.rating.count){
                    // alert(numberOfUnits);
                    numberOfUnits++;
                    totalItemprice = item.price*numberOfUnits;
            
                    alertOnAdd('success','Added in Successfully');
                  }
                  else{
                    // ______ work on Minus ____
                    if(--numberOfUnits < 1){
                      numberOfUnits = 1;
                      // Swal.fire("Out of Stock!","","error");
                    }
                    // ______ work on Pluse ____
                    else if(++numberOfUnits >= item.rating.count){
                      // numberOfUnits = ;
                      Swal.fire("Out of Stock!","","error");
                    }
                  }
                }
                return {
                  ...item,
                  numberOfUnits,
                  totalItemprice
                };
              })
            }
          }
          updateProduct();
        }

        // //Sweet Alert
        // function alertOnAdd(type , message){
        //   const Toast = Swal.mixin({
        //     toast: true,
        //     position: 'top-center',
        //     showConfirmButton: false,
        //     timer: 900,
        //     timerProgressBar: true,
        //   })
        //   Toast.fire({
        //     icon: type,//'success',
        //     title: message//'Added in successfully'
        //   })
        // }


        //remove items from cart
        function removeItemFromCart(id){
          for (let row = 0; row < products.length; row++) {
            if(products[row][0] == detaiAfterLogin.id){
                products[row][1] = products[row][1].filter((i) => i.id !== id)
                updateProduct();
            }
          }
        }

        // reset All Card
        let cl= document.getElementById("clearAll");
        if(cl){
          cl.addEventListener("click",function(){
            for (let row = 0; row < products.length; row++) {
              if(products[row][0] == detaiAfterLogin.id){
                  products[row][1] = [];
                  updateProduct();
              }
            }
          })
        }

//#endregion
  }
  //___________ Guest ___________________
  else if(logger=="guest"){
    //____________ add To Card _________
    //#region Add_to_Card
      //var products = [];        //globle kyun ka More Information me bhe issi ko use krain ga

      function addToCard(id){
        if(guestproducts.some((p)=> p.id === id)){
          // alert("Same Product");
          guestproducts.map((item)=>{
            if(id == item.id){
              // _____________ 1. Cart Count __________________
              let number = changeNumberOfUnites("plus",id);
            }
          })
        }
        else{
          const product = array.find((p)=> p.id===id);
          // console.log(product);
          // guestproducts.push(product);
          guestproducts.push({
            ...product,
            numberOfUnits : 1,
            totalItemprice : product.price,
          });
          // console.log(guestproducts);
        }

        updateProduct(id);
      } 

      function updateProduct(id){
        localStorage.setItem("guestproducts",JSON.stringify(guestproducts));
        renderCartItems(id);
        renderSubTotal();//end me krnaa ha

        // // _____________ 2nd Page of Card Detail ____________________
        renderCardDetailsPage(id);
      }
      
      updateProduct();
      

      function renderSubTotal(){
        let totalPrice = 0,
            totalItems = 0;

        guestproducts.forEach((item)=>{
          totalPrice += item.price * item.numberOfUnits;
          totalItems += item.numberOfUnits;
        });
        
        document.getElementById("T_Card").innerHTML = totalItems;
        document.getElementById("T_price").innerHTML = `$ ${totalPrice.toFixed(2)}`;
        document.getElementById("totalcard").innerHTML = totalItems;
        document.getElementById("totalCanv_card").innerHTML = totalItems;

        // ___________ Card Page Detai 2nd page Work _____________
        shipingCalculater(totalPrice , totalItems);
      }

      
      function renderCartItems(id){
        var renderCardinDropDwon =  document.querySelector(".dropDiv #productDiv");
        var renderCardinCanvas =  document.querySelector(".productDiv");
      
        if(renderCardinDropDwon){
          renderCardinDropDwon.innerHTML = "";
          guestproducts.forEach((items) => {
            renderCardinDropDwon.innerHTML += `
            <div class="row border-bottom mb-3 pb-1">
                <div class="col-5 d-flex align-content-center">
                    <img src="${items.image}" class="img-fluid">
                </div>
                <div class="col-5 mt-3">
                    <h5 class="mt-1" id="i">${items.category}</h5>
      
                    <div class="d-flex justify-content-between">
                      <span>Pr_Unite</span><br>
                      <b class="text-danger">$ ${items.price}</b>
                    </div>
      
                    <div class="d-flex justify-content-between mt-2">
                        <p class="">Total</p>
                        <b class="text-danger" id="priceTotalNumberOfCart">$ ${items.totalItemprice}</b>
                    </div>
                  
                    <div class="d-flex justify-content-between">
                        <p class="">Items</p>
                        <b class="me-4" id="">${items.numberOfUnits}</b>
                    </div>
                </div>
                <div class="col-2">
                      <div class="bg-danger badge rounded-pill p-2 mt-3 remove-cart" onclick="removeItemFromCart(${items.id})">
                          <i class="fa fa-trash"></i>
                      </div>
                </div>
            </div>
            `;
      
            // // _______ 1st Time Card Added To DropDwon _________________
            guestproducts.map((item) => {
              if(item.id == id){
                if(item.numberOfUnits < item.rating.count){
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-center',
                    showConfirmButton: false,
                    timer: 900,
                    timerProgressBar: true,
                    // didOpen: (toast) => {
                    //   toast.addEventListener('mouseenter', Swal.stopTimer)
                    //   toast.addEventListener('mouseleave', Swal.resumeTimer)
                    // }
                  })
                  Toast.fire({
                    icon: 'success',
                    title: 'Added in successfully'
                  })
                }
              }
            })
          })
        }
      
        if(renderCardinCanvas){
          renderCardinCanvas.innerHTML = "";
          guestproducts.forEach((items) => {
            renderCardinCanvas.innerHTML += `
            <div class="row border-bottom mb-3 pb-1">
                <div class="col-5 d-flex align-content-center">
                    <img src="${items.image}" class="img-fluid">
                </div>
                <div class="col-5 mt-3">
                    <h5 class="mt-1" id="i">${items.category}</h5>
      
                    <div class="d-flex justify-content-between">
                      <span>Pr_Unite</span><br>
                      <b class="text-danger">$ ${items.price}</b>
                    </div>
      
                    <div class="d-flex justify-content-between mt-2">
                        <p class="">Total</p>
                        <b class="text-danger" id="priceTotalNumberOfCart">$ ${items.totalItemprice}</b>
                    </div>
                  
                    <div class="d-flex justify-content-between">
                        <p class="">Items</p>
                        <b class="me-4" id="">${items.numberOfUnits}</b>
                    </div>
                </div>
                <div class="col-2">
                      <div class="bg-danger badge rounded-pill p-2 mt-3 remove-cart" onclick="removeItemFromCart(${items.id})">
                          <i class="fa fa-trash"></i>
                      </div>
                </div>
            </div>
            `;
      
            // // _______ 1st Time Card Added To DropDwon _________________
            guestproducts.map((item) => {
              if(item.id == id){
                if(item.numberOfUnits < item.rating.count){
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-center',
                    showConfirmButton: false,
                    timer: 900,
                    timerProgressBar: true,
                    // didOpen: (toast) => {
                    //   toast.addEventListener('mouseenter', Swal.stopTimer)
                    //   toast.addEventListener('mouseleave', Swal.resumeTimer)
                    // }
                  })
                  Toast.fire({
                    icon: 'success',
                    title: 'Added in successfully'
                  })
                }
              }
            })
        })
      
      
      }
    }

    //change number
    function changeNumberOfUnites(action ,id){
      guestproducts = guestproducts.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        let totalItemprice = item.totalItemprice;
        // _________________ -- _____________________
        if(item.id === id){
          
          if(action === "minus" && numberOfUnits > 1){
            numberOfUnits--;
            totalItemprice = item.price*numberOfUnits;

            const Toast = Swal.mixin({
              toast: true,
              position: 'top-center',
              showConfirmButton: false,
              timer: 900,
              timerProgressBar: true,
              // didOpen: (toast) => {
              //   toast.addEventListener('mouseenter', Swal.stopTimer)
              //   toast.addEventListener('mouseleave', Swal.resumeTimer)
              // }
            })
            Toast.fire({
              icon: 'error',
              title: 'Removed successfully'
            })

          }
          // _________________ ++ _____________________
          else if(action === "plus" && numberOfUnits < item.rating.count){
            // alert(numberOfUnits);
            numberOfUnits++;
            totalItemprice = item.price*numberOfUnits;

            const Toast = Swal.mixin({
              toast: true,
              position: 'top-center',
              showConfirmButton: false,
              timer: 900,
              timerProgressBar: true,
              // didOpen: (toast) => {
              //   toast.addEventListener('mouseenter', Swal.stopTimer)
              //   toast.addEventListener('mouseleave', Swal.resumeTimer)
              // }
            })
            Toast.fire({
              icon: 'success',
              title: 'Added in successfully'
            })
          }
          else{
            // ______ work on Minus ____
            if(--numberOfUnits < 1){
              numberOfUnits = 1;
              // Swal.fire("Out of Stock!","","error");
            }
            // ______ work on Pluse ____
            else if(++numberOfUnits >= item.rating.count){
              // numberOfUnits = ;
              Swal.fire("Out of Stock!","","error");
            }
          }
        }
        return {
          ...item,
          numberOfUnits,
          totalItemprice
        };
      });
      updateProduct();
    }


    //remove items from cart
    function removeItemFromCart(id){
      // alert(id);
      guestproducts = guestproducts.filter((item) => item.id  !== id)
      updateProduct();
    }

    // reset All Card
    let cl= document.getElementById("clearAll");
    if(cl){
      cl.addEventListener("click",function(){
        clearAll();
      })
    }

    function clearAll() {
      guestproducts = [];
      updateProduct();
    }
    //#endregion
  }
  //#endregion
  
  
/* ==========================================================================================
    Card Detail Page
   =========================================================================================*/
  //#region Card_Detail
  function shipingCalculater(totPrice , totalItem){
    totPrice = totPrice.toFixed(2);
    let totalPrice = document.getElementById("product_total_amt");
    if(totalPrice){
      totalPrice.innerHTML = totPrice;
      let totItem = document.getElementById("totItem");
      if(totItem){
        totItem.innerHTML =totalItem;
      }

      //total Card Amout after Shiping
      let afterShipingCharge= document.getElementById("total_cart_amt");
      if(afterShipingCharge){
        let amoutAfterShiping = (parseFloat(50.00) + parseFloat(totPrice));
        afterShipingCharge.innerHTML = amoutAfterShiping.toFixed(2);  
      }
      
    }
 }

//  ___ Rendering Product_Detail ___
function renderCardDetailsPage(id){
  
 let cProduct = document.getElementById("cProduct");
  if(cProduct){
    cProduct.innerHTML = "";

    if(logger == 1 || logger==2){
      for (let row = 0; row < products.length; row++) {
        if(products[row][0] == detaiAfterLogin.id){
          // alert(products[row][0]);
          // alert(products[row][1]);
          let items= products[row][1]; //2nd column ke rows Get kr lain
          for (let r = 0; r < items.length; r++) {
            cProduct.innerHTML += `
            <div class="row py-2 pb-5 border-bottom border-primary">
                <div class="col-md-5 col-11 mx-auto justify-content-center align-items-center product_img example-image-link" >
                  <a class="example-image-link" href="${items[r].image}" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                    <img src="${items[r].image}" data-lightbox="image-1" class="img-fluid example-image" alt="cart img" style="cursor:pointer"/>
                  </a>
                </div>
          
                <div class="col-md-7 col-11 mx-auto px-4 mt-2 d-flex justify-content-center align-items[r]-center pe-5">
                    <div>
                        <div class="row">
                            <!--  product name  -->
                            <div class="col-6 card-title">
                                <h2 class="mb-4 product_name">${items[r].category}</h2>
                                <h5 class="mb-2 text-primary">${items[r].title}</h5>
                                <p class="mb-2">Rate : ${items[r].rating.rate}</p>
                                <p class="mb-3">Stock : ${items[r].rating.count}</p>
                            </div>
          
                            <!-- quantity inc dec -->
                            <div class="col-6 mt-4">
                                <ul class="pagination justify-content-end set_quantity">
          
                                    <div class="btn-group">
                                        <button class="btn btn-primary"
                                            onclick="changeNumberOfUnites('minus' ,${items[r].id})">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <input type="text" name="" class="page-link"
                                            value="${items[r].numberOfUnits}" id="textbox" style="width:80px;">
                                    
                                        <button class="btn btn-primary"
                                            onclick="changeNumberOfUnites('plus',${items[r].id})"> <i
                                                class="fas fa-plus"></i>
                                        </button>
                                    </div>
          
                                </ul>
                            </div>
                        </div>
                        <!-- remover move and price -->
                        <div class="row">
                            <div class="col-8 d-flex justify-content-between remove_wish">
                                <p class="btn btn-danger"  onclick="removeItemFromCart(${items[r].id})"><i class="fas fa-trash-alt"></i> Delete</p>
                            </div>
                            <div class="col-4 d-flex justify-content-end price_money">
                                <h3>$<span id="itemval">${items[r].price} </span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
          }
        }
      }
    }
    else if(logger == "guest"){
      guestproducts.forEach((items) => {
        cProduct.innerHTML += `
        <div class="row py-2 pb-5 border-bottom border-primary">
            <div class="col-md-5 col-11 mx-auto justify-content-center align-items-center product_img example-image-link" >
              <a class="example-image-link" href="${items.image}" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img src="${items.image}" data-lightbox="image-1" class="img-fluid example-image" alt="cart img" style="cursor:pointer"/>
              </a>
            </div>
      
            <div class="col-md-7 col-11 mx-auto px-4 mt-2 d-flex justify-content-center align-items-center pe-5">
                <div>
                    <div class="row">
                        <!--  product name  -->
                        <div class="col-6 card-title">
                            <h2 class="mb-4 product_name">${items.category}</h2>
                            <h5 class="mb-2 text-primary">${items.title}</h5>
                            <p class="mb-2">Rate : ${items.rating.rate}</p>
                            <p class="mb-3">Stock : ${items.rating.count}</p>
                        </div>
      
                        <!-- quantity inc dec -->
                        <div class="col-6 mt-4">
                            <ul class="pagination justify-content-end set_quantity">
      
                                <div class="btn-group">
                                    <button class="btn btn-primary"
                                        onclick="changeNumberOfUnites('minus' ,${items.id})">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <input type="text" name="" class="page-link"
                                        value="${items.numberOfUnits}" id="textbox" style="width:80px;">
                               
                                    <button class="btn btn-primary"
                                        onclick="changeNumberOfUnites('plus',${items.id})"> <i
                                            class="fas fa-plus"></i>
                                    </button>
                                </div>
      
                            </ul>
                        </div>
                    </div>
                    <!-- remover move and price -->
                    <div class="row">
                        <div class="col-8 d-flex justify-content-between remove_wish">
                            <p class="btn btn-danger"  onclick="removeItemFromCart(${items.id})"><i class="fas fa-trash-alt"></i> Delete</p>
                        </div>
                        <div class="col-4 d-flex justify-content-end price_money">
                            <h3>$<span id="itemval">${items.price} </span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
      })
    }
  
 }
}
//#endregion



/* ==========================================================================================
      addToWishList
   ========================================================================================*/
  //#region
  let WishList = JSON.parse(localStorage.getItem("WishList"));
  var guestWishList = JSON.parse(localStorage.getItem("guestWishList")) || [];
  
  //___________ Creater , Admin , Registored User ___________________
  if(logger == 1 || logger==2){
    //#region
    function addToWishList(id){
        const wish = array.find((p)=> p.id===id);
        if(WishList == null){
          WishList = [
            [
              [detaiAfterLogin.id],
              [
                wish
              ]
            ]
          ];
          alertOnAdd('success','WishProduct added Successfully');
        }
        else{
          let number = 0;
          for (let i = 0; i < WishList.length; i++) {
            //1. if user Match
            if(WishList[i][0] == detaiAfterLogin.id){
              let select = WishList[i][1].some((p)=>p.id == id);
              // alert(select)
              // ________ wishList Alredy Exist __________
              if(select){//false
                // alert("WishProduct alredy exist");
                // changeNumberOfUnites("plus" , id)
                Swal.fire("WishProduct Alredy Added!","","error");
                number = 1;
              }
              else{// ________ wishList 1st Time Added __________
                WishList[i][1].push(wish)
                alertOnAdd('success','1st wishAdded Added Successfully');
                number = 1;
              }
            }
          }
          //2. if user Not Match
          if(number == 0){
            WishList.push(
                [
                  [detaiAfterLogin.id],
                  [
                    wish 
                  ]
                ]
            );
            // _______ 1st Time Card Added To DropDwon _________________
            alertOnAdd('success','WishList Added Successfully');
          }
        }
        updateWishList();
    }

    function updateWishList(id){
      if(WishList != null){
        localStorage.setItem("WishList",JSON.stringify(WishList));
        // renderWishItems(id);
        countWishList();//end me krnaa ha

        // _____________ All WishList page ____________________
        // renderWishListPage(id);
      }
      
    }
    
    updateWishList();
    function countWishList(){
          totalItems = 0;
          for (let row = 0; row < WishList.length; row++) {
            if(WishList[row][0] == detaiAfterLogin.id){
              let items= WishList[row][1]; //2nd column ke rows Get kr lain
              totalItems = items.length;
            }
          }

          document.getElementById("wishList").innerHTML = totalItems;
          let wishCount2nd = document.getElementById("wishList1");
          if(wishCount2nd){
            wishCount2nd.innerHTML = totalItems;
          }
          // ___________ Card Page Detai 2nd page Work _____________
          // shipingCalculater(totalPrice , totalItems);
    }

    //remove wishProduct from cart
    function removeWishProduct(id){
      for (let row = 0; row < products.length; row++) {
        if(WishList[row][0] == detaiAfterLogin.id){
            WishList[row][1] = WishList[row][1].filter((i) => i.id !== id)
            updateWishList();
        }
      }
    }

    
    // reset All Card
    let cl= document.getElementById("clearAll");
    if(cl){
      cl.addEventListener("click",function(){
        for (let row = 0; row < products.length; row++) {
          if(products[row][0] == detaiAfterLogin.id){
              products[row][1] = [];
              updateProduct();
          }
        }
      })
    }

  //#endregion
  }
  //___________ Guest ___________________
  else if(logger=="guest"){
    //____________ add To Card _________
    //#region Add_to_Card
      //var products = [];        //globle kyun ka More Information me bhe issi ko use krain ga
      function addToWishList(id){
        if(guestWishList.some((p)=> p.id === id)){
          // alert("Same Product");
          guestWishList.map((item)=>{
            if(id == item.id){
              // _____________ 1. Cart Count __________________
              // let number = changeNumberOfUnites("plus",id);
              // alert("Alredy Exist")
              Swal.fire("Alredy Added!","","error");
            }
          })
        }
        else{
          const product = array.find((p)=> p.id===id);
          // console.log(product);
          guestWishList.push(product);
          alertOnAdd('success','WishProduct added Successfully');
          // alert("added successfuly")
        }
        updateWishList();
      } 

      function updateWishList(id){
        localStorage.setItem("guestWishList",JSON.stringify(guestWishList));
        countWishList(id)//end me krnaa ha
      }
      
      updateWishList();
      
      function countWishList(){
        let totalItems = 0;
        totalItems = guestWishList.length;  
        
        document.getElementById("wishList").innerHTML = totalItems;
        let wishCount2nd = document.getElementById("wishList1");
        if(wishCount2nd){
          wishCount2nd.innerHTML = totalItems;
        }
      }
    //#endregion
  }
  
//#endregion


/* ==========================================================================================
    Render WishList in Page +  Remove + reset
   ========================================================================================*/
  //#region
  //_______________________ Render All Record  ________________   
  let renderWishCard = document.getElementById("myWishDiv");
  let emptyDiv = document.getElementById("emptyDiv");
  let count = 0;

  function renderWishList(){
    if(renderWishCard){
      count = 0; //1st time 0 kr dain gaa to ====>  emptyDiv aa gy gaa
      renderWishCard.innerHTML = "";

      if(logger == 1 || logger==2){
          for (let row = 0; row < WishList.length; row++) {
            if(WishList[row][0] == detaiAfterLogin.id){
              let items= WishList[row][1]; 
              for (let col = 0; col < items.length; col++) {
                count++;
                renderWishCard.innerHTML += `
                  <div class="col mb-3" data-aos="flip-left">
                    <div class="card product_Cards me-4 product">
                        <div class="imgbox">
                              <div class="position-absolute top-0 start-0 mt-3 ms-3 text-white" onclick="removeToWishList(1 , ${items[col].id})" style="z-index:999">
                                <div class="rounded-circle bg-danger d-flex justify-content-center align-content-center" id="storeIcon1">
                                    <i class="fa-solid fa-heart" style="margin-top:5px"></i>
                                </div>
                              </div>
              
                              <img src="${items[col].image}"/>
                              
                              <div class="position-absolute top-0 end-0 pe-2 pt-2  text-white" onclick="addToCard(${items[col].id})">
                                <div class="rounded-circle bg-warning me-2">
                                    <img src="img/shopping-cart-icon.png" id="storeIcon" class="rounded-circle"/>
                                </div>
                              </div>
                        </div>
                        <div class="details">
                            <h2 class="text-capitalize fw-bold">${items[col].category}<br><span>${items[col].title}</span></h2>
                            <div class="d-flex justify-content-between">
                              <span>Price</span>
                              <span class="text-danger me-2 ">$ ${items[col].price}</span>
                            </div>
                            <ul class="mt-3 cardUl">
                                <li class="text-success"><span class="text-dark"> Total Stock :</span> ${items[col].rating.count} </li>
                            </ul>
                            <ul class="cardUl">
                                <li class="text-success"><span class="text-dark"> Rating :</span> ${items[col].rating.rate}</li>
                            </ul>  
                              <a type="button" class=" bg-primary" id="moreButton"   data-bs-target="#mymodel" data-bs-toggle="modal" onclick="Modal(${items[col].id})">More Details</a>     
                        </div>
                    </div>
                  </div>
                `
              }
            }
        }
      }
      else{
          for (let row = 0; row < guestWishList.length; row++) {
            // alert(products[row][0]);
            // alert(products[row][1]); 
            count++ ;
            renderWishCard.innerHTML += `
              <div class="col mb-3" data-aos="flip-left">
                <div class="card product_Cards me-4 product">
                    <div class="imgbox">
                          <div class="position-absolute top-0 start-0 mt-3 ms-3 text-white" onclick="removeToWishList(0, ${guestWishList[row].id})" style="z-index:999">
                            <div class="rounded-circle bg-danger d-flex justify-content-center align-content-center" id="storeIcon1">
                                <i class="fa-solid fa-heart" style="margin-top:5px"></i>
                            </div>
                          </div>
          
                          <img src="${guestWishList[row].image}"/>
                          
                          <div class="position-absolute top-0 end-0 pe-2 pt-2  text-white" onclick="addToCard(${guestWishList[row].id})">
                            <div class="rounded-circle bg-warning me-2">
                                <img src="img/shopping-cart-icon.png" id="storeIcon" class="rounded-circle"/>
                            </div>
                          </div>
                    </div>
                    <div class="details">
                        <h2 class="text-capitalize fw-bold">${guestWishList[row].category}<br><span>${guestWishList[row].title}</span></h2>
                        <div class="d-flex justify-content-between">
                          <span>Price</span>
                          <span class="text-danger me-2 ">$ ${guestWishList[row].price}</span>
                        </div>
                        <ul class="mt-3 cardUl">
                            <li class="text-success"><span class="text-dark"> Total Stock :</span> ${guestWishList[row].rating.count} </li>
                        </ul>
                        <ul class="cardUl">
                            <li class="text-success"><span class="text-dark"> Rating :</span> ${guestWishList[row].rating.rate}</li>
                        </ul>  
                          <a type="button" class=" bg-primary" id="moreButton"   data-bs-target="#mymodel" data-bs-toggle="modal" onclick="Modal(${guestWishList[row].id})">More Details</a>     
                    </div>
                </div>
              </div>
            `
        }
      }    
    }
  }
  renderWishList();

  

  //_______________________ Delete Single Record  ________________
  function removeToWishList(type , id){
    //remove items from cart
    // alert(id);
    if(type == 1){
      for (let row = 0; row < WishList.length; row++) {
        if(WishList[row][0] == detaiAfterLogin.id){
            WishList[row][1] = WishList[row][1].filter((i) => i.id !== id)
            updateProduct();
            renderWishList();
        }
      }
    }
    if(type == 0){
      guestWishList = guestWishList.filter((item) => item.id  !== id)
      updateWishList();
      renderWishList();
    }
  }
  
  //_______________________ Clear All ________________
  let cl= document.getElementById("clearAllWishList");
  if(cl){
    cl.addEventListener("click",function(){
      if(logger == 1 || logger==2){
        clearAllWish(1);
        emptyDivFn(count);
      }
      else{
        clearAllWish(0);
        emptyDivFn(count);
      }
    })
  }

  function clearAllWish(type) {
    if(type == 1)
    {
      WishList = [];
      updateWishList();
      renderWishList();
    }
    
    if(type == 0){
      guestWishList = [];
      updateWishList();
      renderWishList();
    }
  }

  // _______ Show Empty Message ______
  emptyDivFn(count);
  function emptyDivFn(c){
    // alert(c)
    if(c>= 1){
      if(emptyDiv){
        emptyDiv.classList.add("d-none");
      }
    }
    else{
      if(emptyDiv){
        emptyDiv.classList.remove("d-none");
      }
    }
  }

//#endregion
  
  
     
  /* ==========================================================================================
    set Editor Name
   =========================================================================================*/
   let userTable = JSON.parse(localStorage.getItem("userTable"));
   if(userTable == null){
    let editor = [{
      uId : 1,
      fullName : "M Boota",
      uEmail : "m43577535@gmail.com",
      uPassword : "boota12345",
      uType : "creater",
    }];
    localStorage.setItem("userTable",JSON.stringify(editor))
   }