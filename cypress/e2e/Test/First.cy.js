//const { describe } = require("mocha");

describe(" Test plan",() =>{

 
it("It block", () =>{
    cy.visit("https://www.youtube.com/watch?v=5aySQLhiY70");



    /* ==== Generated with Cypress Studio ==== */
    cy.get('#info-container > #info > :nth-child(3)').click();
    cy.get('#info-container > #info > :nth-child(3)').click();

    cy.get(
        '.ytd-watch-metadata > #top-level-buttons-computed > .ytSegmentedLikeDislikeButtonViewModelHost > .smartimation > .smartimation__content > .ytSegmentedLikeDislikeButtonViewModelSegmentedButtonsWrapper > .ytLikeButtonViewModelHost > toggle-button-view-model > .yt-spec-button-view-model > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill'
    ).click();

    cy.get('ytd-modal-with-title-and-button-renderer.style-scope > #title').click();
    cy.get('ytd-modal-with-title-and-button-renderer.style-scope > #content').click();
    cy.get('.ytd-watch-metadata > #flexible-item-buttons > .ytd-menu-renderer > .ytd-download-button-renderer > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
    /* ==== End Cypress Studio ==== */
})

})