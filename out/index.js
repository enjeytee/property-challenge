import { showReviewsDescription, populateUser, showOtherProperties, showLocation, addReviews, showMainProperty } from "./utils.js";
import { button } from "./htmlElements.js";
import { reviews, you, properties, latestReview } from "./constants.js";
button.addEventListener("click", () => {
    addReviews(reviews);
});
showReviewsDescription(reviews.length, latestReview.name, latestReview.loyaltyUser);
populateUser(you.isReturning, you.firstName);
showOtherProperties(properties, you.isLoggedIn);
showMainProperty();
showLocation();
//# sourceMappingURL=index.js.map