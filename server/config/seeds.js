const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Christmas' },
    { name: 'Wedding' },
    { name: 'Baby Shower' },
    { name: 'Graduation' },
    { name: 'Anniversary' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'MacBook Pro',
      description:
        'A sleek and powerful laptop designed for productivity and creativity.',
      image: '/assets/macbookpro.jpg',
      category: categories[0]._id,
      price: 999.99,
      quantity: 1
    },
    {
      name: 'Cold Press Juicer',
      description:
        'A high-quality juicing machine for nutritious beverages.',
      image: '/assets/juicer.jpg',
      category: categories[0]._id,
      price: 499.99,
      quantity: 1
    },
    {
      name: 'FitBit',
      description:
        'A wearable fitness tracker that monitors your physical activity and health.',
      image: '/assets/fitbit.jpg',
      category: categories[0]._id,
      price: 99.99,
      quantity: 1
    },
    {
      name: 'Cookies',
      description:
        'Delicious baked treats perfect for satisfying your sweet tooth.',
      image: '/assets/cookies.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 20
    },
    {
      name: 'Gourmet Chocolate Gift Box',
      description: 'A selection of exquisite chocolates for a sweet holiday treat.',
      image: '/assets/chocolates.jpg',
      category: categories[0]._id,
      price: 39.99,
      quantity: 1
    },
    {
      name: 'Festive Holiday Pajama Set',
      description: 'Cozy and stylish pajamas for lounging on Christmas morning.',
      image: '/assets/pajamas.jpg',
      category: categories[0]._id,
      price: 59.99,
      quantity: 1
    },
    {
      name: 'Personalized Photo Album',
      description: 'A custom photo album to cherish holiday memories.',
      image: '/assets/photo-album.jpg',
      category: categories[0]._id,
      price: 29.99,
      quantity: 1
    },
    {
      name: 'Smart Home Starter Kit',
      description: 'A kit to turn any home into a smart, connected space.',
      image: '/assets/smart-home.jpg',
      category: categories[0]._id,
      price: 299.99,
      quantity: 1
    },
    {
      name: 'Holiday Scented Candle Set',
      description: 'A set of festive scented candles to create a warm holiday atmosphere.',
      image: '/assets/candles.jpg',
      category: categories[0]._id,
      price: 49.99,
      quantity: 1
    },
    {
      name: 'Portable Bluetooth Speaker',
      description: 'A compact speaker for enjoying music on-the-go.',
      image: '/assets/speaker.jpg',
      category: categories[0]._id,
      price: 79.99,
      quantity: 1
    },
    {
      name: 'Handcrafted Christmas Ornaments',
      description: 'Beautiful, hand-painted Christmas ornaments to adorn the tree.',
      image: '/assets/ornaments.jpg',
      category: categories[0]._id,
      price: 19.99,
      quantity: 6
    },
    {
      name: 'Bluetooth Wireless Earbuds',
      description: 'Premium wireless earbuds for crystal-clear audio and hands-free calls.',
      image: '/assets/earbuds.jpg',
      category: categories[0]._id,
      price: 129.99,
      quantity: 1
    },    
    {
      name: 'Artisanal Tea Collection',
      description: 'A curated collection of premium teas for tea lovers.',
      image: '/assets/tea-collection.jpg',
      category: categories[0]._id,
      price: 34.99,
      quantity: 1
    },
    {
      name: 'Outdoor Adventure Backpack',
      description: 'A durable and versatile backpack for outdoor enthusiasts.',
      image: '/assets/backpack.jpg',
      category: categories[0]._id,
      price: 179.99,
      quantity: 1
    },
    {
      name: 'Artisanal Cheese and Wine Basket',
      description: 'A curated selection of fine cheeses and wine.',
      image: '/assets/cheese_wine.jpg',
      category: categories[0]._id,
      price: 89.99,
      quantity: 1
    },
    {
      name: 'Rolex',
      category: categories[1]._id,
      description:
        'A luxury Swiss watch known for its precision and craftsmanship.',
      image: '/assets/rolex.jpg',
      price: 5000,
      quantity: 1
    },
    {
      name: 'Wine Glasses',
      category: categories[1]._id,
      description:
        'Elegant glassware designed to enhance the enjoyment of wine.',
      image: '/assets/wineglass.jpg',
      price: 80.99,
      quantity: 4
    },
    {
      name: 'Breadmaker',
      category: categories[1]._id,
      description:
        'A kitchen appliance that automates the process of baking fresh bread.',
      image: '/assets/breadmaker.jpg',
      price: 199.99,
      quantity: 1
    },
    {
      name: 'Kitchen Knives',
      category: categories[1]._id,
      description:
        'High-quality cutlery essential for precise and efficient food preparation.',
      image: '/assets/kitchenknives.jpg',
      price: 50,
      quantity: 6
    },
    {
      name: 'KitchenAid Stand Mixer',
      category: categories[1]._id,
      description:
        'A versatile kitchen appliance for baking and cooking enthusiasts.',
      image: '/assets/kitchenaid.jpg',
      price: 299.99,
      quantity: 1
    },
    {
      name: 'Ninja Coffee Maker',
      category: categories[1]._id,
      description:
        'Brew barista-quality coffee at home with ease.',
      image: '/assets/coffeemaker.jpg',
      price: 150,
      quantity: 1
    },
    {
      name: 'Roomba Vacuum',
      category: categories[1]._id,
      description:
        'Make cleaning a breeze with this smart and efficient robot vacuum.',
      image: '/assets/roomba.jpg',
      price: 349.99,
      quantity: 1
    },
    {
      name: 'Samsung 55-inch Smart TV',
      category: categories[1]._id,
      description:
        'Elevate your entertainment experience with stunning 4K visuals.',
      image: '/assets/samsungtv.jpg',
      price: 700,
      quantity: 1
    },
    {
      name: 'Cast Iron Dutch Oven',
      category: categories[1]._id,
      description:
        'A luxury Swiss watch known for its precision and craftsmanship.',
      image: '/assets/dutchoven.jpg',
      price: 250,
      quantity: 1
    },
    {
      name: 'Dyson Supersonic Hair Dryer',
      category: categories[1]._id,
      description:
        'Achieve salon-quality hair drying and styling at home.',
      image: '/assets/hairdryer.jpg',
      price: 399.99,
      quantity: 1
    },
    {
      name: 'Cookware Set',
      category: categories[1]._id,
      description:
        'A comprehensive set of pots and pans for all your culinary needs.',
      image: '/assets/cookwareset.jpg',
      price: 210,
      quantity: 1
    },
    {
      name: 'Apple Watch 7',
      category: categories[1]._id,
      description:
        'Stay connected and track your health and fitness goals in techy style.',
      image: '/assets/applewatch.jpg',
      price: 399.99,
      quantity: 1
    },
    {
      name: 'Serta Memory Foam Mattress',
      category: categories[1]._id,
      description:
        'Ensure a comfortable nights sleep with this luxurious memory foam mattress.',
      image: '/assets/mattress.jpg',
      price: 800,
      quantity: 1
    },
    {
      name: 'Noise Cancelling Headphones',
      category: categories[1]._id,
      description:
        'Immerse yourself in your favorite music or podcasts with superior sound quality.',
      image: '/assets/headphones.jpg',
      price: 299.99,
      quantity: 1
    },
    {
      name: 'Diapers',
      category: categories[2]._id,
      description:
        'Disposable or cloth products for keeping babies dry and comfortable.',
      image: '/assets/diaper.jpg',
      price: 35,
      quantity: 30
    },
    {
      name: 'Baby Monitor',
      category: categories[2]._id,
      description:
        'A device that allows parents to remotely monitor their babys sleep or activity.',
      image: '/assets/baby-monitor.jpg',
      price: 75,
      quantity: 2
    },
    {
      name: 'Car Seat',
      category: categories[2]._id,
      description:
        'A safety seat designed to protect infants during car travel.',
      image: '/assets/car-seat.jpg',
      price: 199.99,
      quantity: 1
    },
    {
      name: 'Crib',
      category: categories[2]._id,
      description:
        'A secure and comfortable bed designed for babies and toddlers.',
      image: '/assets/crib.jpg',
      price: 200,
      quantity: 1
    },
    {
      name: 'Cradle n Swing',
      category: categories[2]._id,
      description: 'A soothing swing with multiple swing motions and speeds.',
      image: '/assets/cradleswing.jpg',
      price: 159.99,
      quantity: 1
    },
    {
      name: 'Baby Bottle Set',
      category: categories[2]._id,
      description: 'A set of baby bottles with anti-colic technology for feeding.',
      image: '/assets/babybottleset.jpg',
      price: 29.99,
      quantity: 4
    },
    {
      name: 'Diaper Bag Backpack',
      category: categories[2]._id,
      description: 'A stylish and functional backpack for carrying baby essentials.',
      image: '/assets/diaperbackpack.jpg',
      price: 74.99,
      quantity: 1
    },
    {
      name: 'Muslin Swaddle Blankets',
      category: categories[2]._id,
      description: 'Soft and breathable swaddle blankets for newborns.',
      image: '/assets/swaddleblanket.jpg',
      price: 44.95,
      quantity: 4
    },
    {
      name: 'Avent Bottle Warmer',
      category: categories[2]._id,
      description: 'A bottle warmer with adjustable settings for precise warming.',
      image: '/assets/bottlewarmer.jpg',
      price: 39.99,
      quantity: 1
    },
    {
      name: '360 Baby Carrier',
      category: categories[2]._id,
      description: 'A comfortable and ergonomic baby carrier for on-the-go parents.',
      image: '/assets/babycarrier.jpg',
      price: 159.00,
      quantity: 1
    },
    {
      name: 'Breast Pump',
      category: categories[2]._id,
      description: 'A powerful and efficient breast pump for convenient and comfortable pumping.',
      image: '/assets/pump.jpg',
      price: 299.99,
      quantity: 1
    },
    {
      name: 'Bassinet',
      category: categories[2]._id,
      description: 'A bassinet cozy and portable, designed to keep them safe and comfortable through the night.',
      image: '/assets/bassinet.jpg',
      price: 99.99,
      quantity: 1
    },
    {
      name: 'Travel Stroller',
      category: categories[2]._id,
      description: 'A versatile and stylish stroller that adapts to various terrains and parenting needs.',
      image: '/assets/stroller.jpg',
      price: 999.00,
      quantity: 1
    },
    {
      name: 'Pacifier Set',
      category: categories[2]._id,
      description:
        'Set of comfortable and soothing pacifiers for newborns and infants.',
      image: '/assets/pacifier.jpg',
      price: 35,
      quantity: 1
    },
    {
      name: 'Amber Teething Necklaces',
      category: categories[2]._id,
      description:
        'A holistic soothing amber necklace for teething toddlers.',
      image: '/assets/teethingnecklace.jpg',
      price: 35,
      quantity: 1
    },
    {
      name: 'Kindle',
      category: categories[3]._id,
      description:
        'An e-reader device for accessing a vast library of digital books.',
      image: '/assets/kindle.jpg',
      price: 89.99,
      quantity: 1
    },
    {
      name: 'Pack of Neck Ties',
      category: categories[3]._id,
      description:
        'A collection of stylish neckties suitable for formal attire.',
      image: '/assets/neck-ties.jpg',
      price: 29.99,
      quantity: 3
    },
    {
      name: 'Benihana Gift Card',
      category: categories[3]._id,
      description:
        'A gift card for a popular restaurant chain known for teppanyaki-style dining.',
      image: '/assets/benihana-card.jpg',
      price: 150,
      quantity: 1
    },
    {
      name: 'Notebooks',
      category: categories[3]._id,
      description:
        'Blank or lined books for writing, sketching, or note-taking.',
      image: '/assets/notebooks.jpg',
      price: 15,
      quantity: 3
    },
    {
      name: 'Candles',
      category: categories[4]._id,
      description: 'Fragrant and decorative items that provide ambiance and pleasant scents.',
      image: '/assets/candle.jpg',
      price: 25,
      quantity: 4
    },
    {
      name: 'Tickets to Japan',
      category: categories[4]._id,
      description:
        'Passes for traveling to and exploring the beautiful country of Japan.',
      image: '/assets/japan-tickets.jpg',
      price: 1800,
      quantity: 2
    },
    {
      name: 'Tiffany Necklace',
      category: categories[4]._id,
      description:
        'A high-quality jewelry piece from the renowned Tiffany & Co. brand.',
      image: '/assets/tiffany-necklace.jpg',
      price: 350,
      quantity: 1
    },
    {
      name: 'Spa Voucher',
      category: categories[4]._id,
      description:
        'A voucher for pampering and relaxation at a spa or wellness center.',
      image: '/assets/spa-voucher.jpg',
      price: 200,
      quantity: 1
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
