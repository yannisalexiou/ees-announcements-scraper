const cheerio = require("cheerio");
const fetch = require("node-fetch"); //Helps us make HTTP calls

//All Announcements
const allAnnouncementsSelector = "div#claroBody>div";
const eachAnnouncementSelector = "div#claroBody>div>div:nth-child(3)";

//Link
const announcementsLocation = "http://mycourses.ntua.gr/announcements/announcements.php?cidReq=PSTGR1083";

function findAnnouncementsTest(announcementSelector, html) {
    var $ = cheerio.load(html);
    var announcements = $(announcementSelector).filter(function () {
        var data = $(this);
        return data;
    });
    return announcements.text();
}

function findAnnouncements(announcementSelector, html) {
    var $ = cheerio.load(html);
    var announcements = $(announcementSelector).filter(function () {
        var data = $(this);
        return data;
    });

    var allAnnouncement = [];

    announcements.children().each(function () {
        var data = $(this);
        //Each Selector
        var title = data.children().eq(0).text();
        var date = data.children().eq(1).text();
        var text = data.children().eq(2).text();
        var htmlText = data.children().eq(2).html();
        
        //Remove the last char if is the space.
        if (/\s+$/.test(text)) {
            text = text.slice(0, -1);
        }
        //Remove frist character if is space
        title = title.replace(/^\s/, "");
        date = date.replace(/^\s/, "");
        text = text.replace(/\s\s+/g, " "); //Multiple Spaces to Single Space
        text = text.replace(/^\s/, "");

        //Make Object
        var eachItem = {title, date, text, htmlText};
        allAnnouncement.push(eachItem);
    });
    return allAnnouncement;
}

async function requestTo(url) {
    try {
        const response = await fetch(url);
        const body = await response.textConverted();
        return body;
    } catch (error) {
        return error;
    }
}

async function getAnnouncement() {
    let html = await requestTo(announcementsLocation);

    var currentAnnouncement = findAnnouncements(allAnnouncementsSelector, html);
    return currentAnnouncement;
}

module.exports = {
    getAnnouncement
};