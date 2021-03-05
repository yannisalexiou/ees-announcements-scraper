const announcement = require("./announcement/index");

async function getAnnouncements() {
    console.log("Scraper Started");
    var allAnnouncements = await announcement.getAnnouncement();
    console.log("allAnnouncements: ", allAnnouncements);
    return allAnnouncements;
}
getAnnouncements();
module.exports = {
    getAnnouncements
}