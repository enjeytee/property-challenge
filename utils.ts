import { LoyaltyUser } from "./enums.js";
import { Review } from "./interfaces.js";
import { reviewTotalDisplay, returningUserDisplay, userNameDisplay, propertiesDiv, locationDiv, reviewContainer,
    container, button, mainImageContainer } from "./htmlElements.js";
import { MainProperty } from "./classes.js";

export function showReviewsDescription(totalReview: number,latestReviewer: string, loyaltyUserLatest: LoyaltyUser) {
    reviewTotalDisplay.innerHTML = `
        <div>${totalReview} review${makeMultiple(totalReview)} 
        | Last review by ${latestReviewer} ${loyaltyUserLatest === LoyaltyUser.GOLD_USER ? "⭐" : ""}</div>
        `;
};
export function populateUser(isReturning: boolean, userName: string) {
    const name = `${userName}`
    returningUserDisplay.innerHTML = `${isReturning ? `back` : ""}`;
    userNameDisplay.innerHTML = name;
};
export function showOtherProperties(properties: { title: string; image: string; price: number }[], 
    authorityStatus: Permissions | boolean) {
    properties.forEach(property => {
        propertiesDiv.innerHTML += `
            <div class="card">
                <div>${property.title}</div>
                <img src=${property.image}>
                <div>${authorityStatus ? "$" + property.price + "/night" : ''}</div>
            </div>
        `;
    });
};
export function showLocation() {
    const currentLocation: [string, string, number] = ["Pampanga, Philippines", "5:10AM", 26]
    locationDiv.innerHTML = `
        <div>${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}\u00B0C</div>
    `
};
export function makeMultiple(value: number) : string {
    return value > 1 || value === 0 ? 's' : '';
};
export function getTopTwoReviews(reviews: Review[]) : {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}[] {
    return reviews.sort((a, b) => b.stars - a.stars).slice(0, 2);
};
export function addReviews(array: Review[]) : void {
    getTopTwoReviews(array).forEach(review => {
        reviewContainer.innerHTML += `
            <div class="review-card">${review.stars} stars from ${review.name}</div>
        `
    })
    container.removeChild(button);
};
export function showMainProperty() {
    const yourMainProperty = new MainProperty("images/italian-property.jpg", "Italian House", [{
        name: "Olive",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "December 4, 2021"
    }]);
    mainImageContainer.innerHTML = `
        <img src=${yourMainProperty.source}>
    `
};
