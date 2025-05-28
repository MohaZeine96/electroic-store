const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Products data
const products = [
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 920,
    newPrice: 850,
    category: "phone and tabets",
    brand: "samsung",
    des: `Lenovo V15 G3 IAP 15.6" FHD Laptop - Intel Core i7-1255U - RAM 16GB - SSD 512GB - Intel Iris Xe | 82TTA0AAIN
        Processor: Intel® Core™ i7-1255U, 10C (2P + 8E) / 12T, P-core 1.7 / 4.7GHz, E-core 1.2 / 3.5GHz, 12MB.
        Memory: 8GB Soldered DDR4-3200 + 8GB SO-DIMM DDR4-3200. 
        Storage: 512GB SSD M.2 2242 PCIe® 4.0x4 NVMe®.  
        Graphic Card: Integrated Intel® Iris® Xe Graphics
        Display: 15.6" FHD (1920x1080). 
        Wireless Connectivity: Bluetooth, Wi-Fi
        I/O Ports : 1x Ethernet (RJ-45),1x HDMI® 1.4b,1x Headphone / microphone combo jack (3.5mm),1x Power connector,1x USB 2.0,1x USB 3.2 Gen 1,1x USB-C® 3.2 Gen 1 (support data transfer, Power Delivery 3.0 and DisplayPort™ 1.2). `,
  },
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 620,
    newPrice: 850,
    category: "phone and tabets",
    brand: "apple",
    des: "apple is great to have",
  },
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 320,
    newPrice: 850,
    category: "phone and tabets",
    brand: "apple",
    des: "apple is great to have",
  },
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 1220,
    newPrice: 850,
    category: "phone and tabets",
    brand: "apple",
    des: "apple is great to have",
  },
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 420,
    newPrice: 850,
    category: "phone and tabets",
    brand: "apple",
    des: "apple is great to have",
  },
  {
    imageSrc: "img/image 7.png",
    name: "Samsung Tab S10+",
    price: 1620,
    newPrice: 850,
    category: "phone and tabets",
    brand: "hp",
    des: "Hp is great",
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 520,
    newPrice: 850,
    category: "Monitors and TVs",
    brand: "hp",
    des: "Hp is great",
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 399,
    newPrice: 850,
    category: "Monitors and TVs",
    brand: "hp",
    des: "Hp is great",
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 1350,
    newPrice: 850,
    category: "Monitors and TVs",
    brand: "hp",
    des: "Hp is great",
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 368,
    newPrice: 850,
    category: "Monitors and TVs",
    brand: "hp",
    des: "Hp is great",
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 659,
    newPrice: 850,
    category: "Monitors and TVs",
    brand: "hp",
    des: "Hp is great",
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "Samsung Tab S10+",
    price: 920,
    newPrice: 850,
    category: "Monitors and TVs",
    brand: "hp",
    des: "Hp is great",
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "acer g4",
    price: 199,
    newPrice: 850,
    category: "Monitors and TVs",
    brand: "acer",
    des: "acer is really great choise we hope you enjoy your new device with 12gb of ram 1tb of storage intel core i5 the is really cheap laptop",
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "acer g89",
    price: 180,
    newPrice: 850,
    category: "Monitors and TVs",
    brand: "acer",
    des: "acer is really great choise we hope you enjoy your new device with 8gb of ram 1tb of storage intel core i3 the is really cheap laptop",
  },
  {
    imageSrc: "img/Sonysat-new-1-510x510 2.png",
    name: "acer g10",
    price: 120,
    newPrice: 850,
    category: "Monitors and TVs",
    brand: "acer",
    des: "acer is really great choise we hope you enjoy your new device with 6gb of ram 128tb of storage snapdrogans acto core the is really cheap tabelt",
  },
];

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://mohammad:258456@cluster0.smeobnu.mongodb.net/myDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Product model
const Product = mongoose.model("Product", {
  category: String,
  imageSrc: String,
  name: String,
  price: Number,
  newPrice: Number,
  brand: String,
  des: String,
});
const usersM = mongoose.model("users", {
  email: String,
  pasword: String,
});
// Insert products when API is called (avoiding duplicates)
app.post("/api/products", async (req, res) => {
  try {
    await Product.insertMany(products);
    res.status(201).send("Product added successfully");
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).send("Error adding product.");
  }
});

// View all products
app.get("/api/products", async (req, res) => {
  try {
    const all = await Product.find();
    res.json(all);
  } catch (err) {
    res.status(500).send("Error fetching products.");
  }
});
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await usersM.find(); // Fetch all users from MongoDB
//     res.json(users);
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     res.status(500).send("Error fetching users.");
//   }
// });
app.post("/api/users", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    console.log("Received user data:");
    console.log("Email:", email);
    console.log("Password:", password);

    // You can now use this data (e.g. validate against DB)
    res.status(200).json({ message: "User data received" });
  } catch (err) {
    console.error("Error in POST /api/users:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/users/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const user = await usersM.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).send("Error fetching user.");
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
