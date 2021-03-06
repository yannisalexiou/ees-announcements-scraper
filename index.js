const announcement = require("./announcement/index");

async function getAnnouncements() {
    var allAnnouncements = await announcement.getAnnouncement();
    return allAnnouncements;
};

module.exports = {
    getAnnouncements
};