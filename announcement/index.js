const cheerio = require("cheerio");
const fetch = require("node-fetch"); //Helps us make HTTP calls

//All Announcements
const allAnnouncementsSelector = "div#claroBody";
const eachAnnouncementSelector = "div#claroBody>table";

//Link
const announcementsLocation = "http://mycourses.ntua.gr/announcements/announcements.php?cidReq=PSTGR1083";

async function requestTo(url) {
    try {
        const response = await fetch(url);
        const body = await response.textConverted();
        return body;
      } catch (error) {
        console.log(error);
        return error
      }
}

async function getAnnouncement() {
    console.log("Searching, please wait... 🕵🏻‍♂️");
    let html = await requestTo(announcementsLocation);

    var currentAnnouncement = findAnnouncements(allAnnouncementsSelector, html);
    return currentAnnouncement;
}

function findAnnouncementsTest(tableSelector, html) {
    console.log("eachAnnouncement");
    var $ = cheerio.load(html);
    var announcements = $(tableSelector).filter(function () {
        var data = $(this);
        return data;
    });

    console.log("extitle: ",  announcements.text());
    return announcements.text();
}

function findAnnouncements(tableSelector, html) {
    console.log("eachAnnouncement");
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
        var text = data.nextUntil("table").text();
        //Make Object
        var eachItem = {
            title: title,
            date: date,
            text: text
        }
        allAnnouncement.push(eachItem);
    });
    console.log("extitle: ",  allAnnouncement);
    return announcements.text();
}

module.exports = {
    getAnnouncement
}