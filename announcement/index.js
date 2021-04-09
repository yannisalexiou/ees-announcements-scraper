const cheerio = require("cheerio");
const fetch = require("node-fetch"); //Helps us make HTTP calls

//All Announcements
const allAnnouncementsSelector = "div#claroBody";
const eachAnnouncementSelector = "div#claroBody>table";

//Link
const announcementsLocation = "http://mycourses.ntua.gr/announcements/announcements.php?cidReq=PSTGR1083";

function findAnnouncementsTest(tableSelector, html) {
    var $ = cheerio.load(html);
    var announcements = $(tableSelector).filter(function () {
        var data = $(this);
        return data;
    });
    return announcements.text();
}

function findAnnouncements(tableSelector, html) {
    var $ = cheerio.load(html);
    var announcements = $(tableSelector).filter(function () {
        var data = $(this);
        return data;
    });

    var allAnnouncement = [];

    announcements.children("table[cellspacing='0']").each(function () {
        var data = $(this);
        //Each Selector
        var title = data.children().children().children().children().eq(1).text();
        var date = data.children().children().children().children().eq(3).text();
        var text = "";

        data.nextUntil("table").each(function() {
            var currentString = $(this).text();
            if(!/\s+$/.test(currentString)) {
                //Add space between each element
                
                currentString += " ";
            }
            text += currentString;
        });
        //Remove the last char if is the space.
        if (/\s+$/.test(text)) {
            text = text.slice(0, -1);
        }
        //Remove frist character if is space
        title = title.replace(/^\s/, '');
        date = date.replace(/^\s/, '');
        text = text.replace(/\s\s+/g, ' '); //Multiple Spaces to Single Space
        text = text.replace(/^\s/, '');

        //Make Object
        var eachItem = {title, date, text};
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