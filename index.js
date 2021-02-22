const announcement = require("./announcement/index");

async function getAnnouncements() {
    console.log("Scraper Started");
    var allAnnouncements = await announcement.getAnnouncement();

    return allAnnouncements;
}

getAnnouncements();


module.exports = {
    getAnnouncements
}