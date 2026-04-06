"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const restaurant_1 = __importDefault(require("./src/models/restaurant"));
const order_1 = __importDefault(require("./src/models/order"));
const user_1 = __importDefault(require("./src/models/user"));
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const seedData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(MONGODB_CONNECTION_STRING);
        console.log("Connected to database for seeding...");
        const testUser = yield user_1.default.findOne({});
        if (!testUser) {
            console.log("No user found in the database. Please create a user first by logging in the frontend.");
            process.exit(1);
        }
        const userId = testUser._id;
        const restaurantsData = [
            {
                user: userId,
                restaurantName: "Burger King Royale",
                city: "London",
                country: "UK",
                deliveryPrice: 250,
                estimatedDeliveryTime: 30,
                cuisines: ["Burgers", "American", "Fast Food"],
                menuItems: [
                    { name: "Double Cheese Royale", price: 850 },
                    { name: "Crispy Fries", price: 300 },
                    { name: "Milkshake", price: 400 },
                ],
                imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
                lastUpdated: new Date(),
            },
            {
                user: userId,
                restaurantName: "Luigi's Pizzeria",
                city: "London",
                country: "UK",
                deliveryPrice: 150,
                estimatedDeliveryTime: 40,
                cuisines: ["Pizza", "Italian"],
                menuItems: [
                    { name: "Margherita Pizza", price: 1200 },
                    { name: "Pepperoni Pizza", price: 1400 },
                    { name: "Garlic Bread", price: 450 },
                ],
                imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
                lastUpdated: new Date(),
            },
            {
                user: userId,
                restaurantName: "Tokyo Drift Sushi",
                city: "London",
                country: "UK",
                deliveryPrice: 300,
                estimatedDeliveryTime: 45,
                cuisines: ["Sushi", "Japanese"],
                menuItems: [
                    { name: "Spicy Tuna Roll", price: 1600 },
                    { name: "Salmon Nigiri", price: 1200 },
                    { name: "Miso Soup", price: 350 },
                ],
                imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
                lastUpdated: new Date(),
            },
            {
                user: userId,
                restaurantName: "Taj Mahal Express",
                city: "London",
                country: "UK",
                deliveryPrice: 200,
                estimatedDeliveryTime: 50,
                cuisines: ["Indian", "Curry"],
                menuItems: [
                    { name: "Chicken Tikka Masala", price: 1500 },
                    { name: "Garlic Naan", price: 300 },
                    { name: "Samosa", price: 400 },
                ],
                imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
                lastUpdated: new Date(),
            },
            {
                user: userId,
                restaurantName: "El Camino Tacos",
                city: "London",
                country: "UK",
                deliveryPrice: 150,
                estimatedDeliveryTime: 25,
                cuisines: ["Mexican", "Tacos"],
                menuItems: [
                    { name: "Beef Tacos", price: 900 },
                    { name: "Chicken Burrito", price: 1100 },
                    { name: "Nachos with Guacamole", price: 750 },
                ],
                imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
                lastUpdated: new Date(),
            },
            {
                user: userId,
                restaurantName: "Bangkok Street Food",
                city: "London",
                country: "UK",
                deliveryPrice: 200,
                estimatedDeliveryTime: 35,
                cuisines: ["Thai", "Noodles"],
                menuItems: [
                    { name: "Pad Thai", price: 1300 },
                    { name: "Tom Yum Soup", price: 1000 },
                    { name: "Spring Rolls", price: 500 },
                ],
                imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80",
                lastUpdated: new Date(),
            },
            {
                user: userId,
                restaurantName: "Pasta la Vista",
                city: "London",
                country: "UK",
                deliveryPrice: 250,
                estimatedDeliveryTime: 40,
                cuisines: ["Italian", "Pasta"],
                menuItems: [
                    { name: "Spaghetti Carbonara", price: 1400 },
                    { name: "Penne Arrabbiata", price: 1250 },
                    { name: "Tiramisu", price: 650 },
                ],
                imageUrl: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&w=800&q=80",
                lastUpdated: new Date(),
            },
            {
                user: userId,
                restaurantName: "Dragon Bowl",
                city: "London",
                country: "UK",
                deliveryPrice: 100,
                estimatedDeliveryTime: 20,
                cuisines: ["Chinese", "Asian"],
                menuItems: [
                    { name: "Sweet and Sour Chicken", price: 1200 },
                    { name: "Fried Rice", price: 800 },
                    { name: "Dumplings", price: 600 },
                ],
                imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
                lastUpdated: new Date(),
            },
            {
                user: userId,
                restaurantName: "The Local Cafe",
                city: "London",
                country: "UK",
                deliveryPrice: 50,
                estimatedDeliveryTime: 15,
                cuisines: ["Cafe", "Breakfast", "Desserts"],
                menuItems: [
                    { name: "Avocado Toast", price: 850 },
                    { name: "Cappuccino", price: 350 },
                    { name: "Blueberry Muffin", price: 300 },
                ],
                imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
                lastUpdated: new Date(),
            },
            {
                user: userId,
                restaurantName: "Sweet Treats Bakery",
                city: "London",
                country: "UK",
                deliveryPrice: 150,
                estimatedDeliveryTime: 25,
                cuisines: ["Desserts", "Bakery"],
                menuItems: [
                    { name: "Chocolate Lava Cake", price: 700 },
                    { name: "Cheesecake Slice", price: 650 },
                    { name: "Macarons (Box of 6)", price: 900 },
                ],
                imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
                lastUpdated: new Date(),
            }
        ];
        console.log("Inserting defined restaurants...");
        const insertedRestaurants = yield restaurant_1.default.insertMany(restaurantsData);
        console.log(`Inserted ${insertedRestaurants.length} restaurants.`);
        const ordersData = [];
        const statuses = ["placed", "paid", "inProgress", "outForDelivery", "delivered"];
        // Create 4 dummy orders tied to the new restaurants
        for (let i = 0; i < 4; i++) {
            const rest = insertedRestaurants[i % insertedRestaurants.length];
            const status = statuses[i % statuses.length];
            let total = 0;
            const cartItems = [
                {
                    menuItemId: rest.menuItems[0]._id.toString(),
                    quantity: 2,
                    name: rest.menuItems[0].name,
                    price: rest.menuItems[0].price,
                },
                {
                    menuItemId: rest.menuItems[1]._id.toString(),
                    quantity: 1,
                    name: rest.menuItems[1].name,
                    price: rest.menuItems[1].price,
                }
            ];
            cartItems.forEach(item => total += (item.quantity * item.price));
            total += rest.deliveryPrice;
            ordersData.push({
                restaurant: rest._id,
                user: userId,
                deliveryDetails: {
                    email: "testymcbites@example.com",
                    name: "Testy User",
                    addressLine1: "123 Random St",
                    city: "London"
                },
                cartItems: cartItems,
                totalAmount: total,
                status: status,
                createdAt: new Date()
            });
        }
        console.log("Inserting defined orders...");
        const insertedOrders = yield order_1.default.insertMany(ordersData);
        console.log(`Inserted ${insertedOrders.length} orders.`);
        console.log("Seeding complete!");
        process.exit(0);
    }
    catch (error) {
        console.error("Seeding failed: ", error);
        process.exit(1);
    }
});
seedData();
