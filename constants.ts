import { LoyaltyUser, Permissions } from "./enums.js";
import { Review, Property, You } from "./interfaces.js";
export const reviews: Review[] = [
    {
        name: "Neil John A. Trajano",
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: "October 4, 1975",
    },
    {
        name: "Neil Patrick Trajano",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "January 1, 2004"
    },
    {
        name: "Joana B. De Jesus",
        stars: 4,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "July 19, 1975"
    },
    {
        name: "Nathaniel Kin D. Barrera",
        stars: 3,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: "December 20, 1997"
    }
];
export const latestReview = reviews.reduce((accumulator, current) => {
    if (new Date(accumulator.date) > new Date(current.date)) {
        return accumulator
    } else {
        accumulator = current
        return accumulator;
    };
}, {
    name: "",
    stars: 0,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "January 1, 1900"
});
export const you: You = {
    firstName: "John",
    lastName: "Trajano",
    age: 46,
    isReturning: true,
    stayedAt: [
        "florida-home",
        "oman-flat",
        "tokyo-bungalow"
    ],
    permissions: Permissions.ADMIN,
    isLoggedIn: true
};
export const properties: Property[] = [
    {
        image: "images/colombia-property.jpg",
        title: "Colombian Shack",
        price: 45,
        location: {
            firstline: "Shack 37",
            townCity: "Bogota",
            postZipCode: 45632,
            country: "Colombia",
        },
        contact: [+1123495082908, "marywinkle@gmail.com"],
        available: true
    },
    {
        image: "images/poland-property.jpg",
        title: "Polish Cottage",
        price: 30,
        location: {
            firstline: "No. 23",
            townCity: "Gdansk",
            postZipCode: 343903,
            country: "Poland",
        },
        contact: [+1123495082907, "garydavis@hotmail.com"],
        available: false
    },
    {
        image: "images/london-property.jpg",
        title: "London Flat",
        price: 25,
        location: {
            firstline: "Flat 15",
            townCity: "London",
            postZipCode: "SW4 5XW",
            country: "United Kingdom",
        },
        contact: [+1123495082906, "andyluger@aol.com"],
        available: true
    },
    {
        image: "images/malia-hotel.jpg",
        title: "Malia Hotel",
        price: 35,
        location: {
            firstline: "Room 4",
            townCity: "Malia",
            postZipCode: 45334,
            country: "Malaysia",
        },
        contact: [+60349822083, "lee34@gmail.com"],
        available: false
    }
];