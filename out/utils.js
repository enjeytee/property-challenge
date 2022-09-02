import { LoyaltyUser } from "./enums.js";
import { reviewTotalDisplay, returningUserDisplay, userNameDisplay, propertiesDiv, locationDiv, reviewContainer, container, button, mainImageContainer } from "./htmlElements.js";
import { MainProperty } from "./classes.js";
export function showReviewsDescription(totalReview, latestReviewer, loyaltyUserLatest) {
    reviewTotalDisplay.innerHTML = `
        <div>${totalReview} review${makeMultiple(totalReview)} 
        | Last review by ${latestReviewer} ${loyaltyUserLatest === LoyaltyUser.GOLD_USER ? "⭐" : ""}</div>
        `;
}
;
export function populateUser(isReturning, userName) {
    const name = `${userName}`;
    returningUserDisplay.innerHTML = `${isReturning ? `back` : ""}`;
    userNameDisplay.innerHTML = name;
}
;
export function showOtherProperties(properties, authorityStatus) {
    properties.forEach(property => {
        propertiesDiv.innerHTML += `
            <div class="card">
                <div>${property.title}</div>
                <img src=${property.image}>
                <div>${authorityStatus ? "$" + property.price + "/night" : ''}</div>
            </div>
        `;
    });
}
;
export function showLocation() {
    const currentLocation = ["Pampanga, Philippines", "5:10AM", 26];
    locationDiv.innerHTML = `
        <div>${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}\u00B0C</div>
    `;
}
;
export function makeMultiple(value) {
    return value > 1 || value === 0 ? 's' : '';
}
;
export function getTopTwoReviews(reviews) {
    return reviews.sort((a, b) => b.stars - a.stars).slice(0, 2);
}
;
export function addReviews(array) {
    getTopTwoReviews(array).forEach(review => {
        reviewContainer.innerHTML += `
            <div class="review-card">${review.stars} stars from ${review.name}</div>
        `;
    });
    container.removeChild(button);
}
;
export function showMainProperty() {
    const yourMainProperty = new MainProperty("images/italian-property.jpg", "Italian House", [{
            name: "Olive",
            stars: 5,
            loyaltyUser: LoyaltyUser.GOLD_USER,
            date: "December 4, 2021"
        }]);
    mainImageContainer.innerHTML = `
        <img src=${yourMainProperty.source}>
    `;
}
;
//# sourceMappingURL=utils.js.map