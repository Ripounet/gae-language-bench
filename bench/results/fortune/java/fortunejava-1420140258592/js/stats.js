var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30060",
        "ok": "30060",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "209",
        "ok": "209",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4364",
        "ok": "4364",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "238",
        "ok": "238",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "percentiles1": {
        "total": "224",
        "ok": "224",
        "ko": "-"
    },
    "percentiles2": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "percentiles3": {
        "total": "272",
        "ok": "272",
        "ko": "-"
    },
    "percentiles4": {
        "total": "538",
        "ok": "538",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 30022,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 17,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 21,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.786",
        "ok": "49.786",
        "ko": "-"
    }
},
contents: {
"homepage-339f7": {
        type: "REQUEST",
        name: "Homepage",
path: "Homepage",
pathFormatted: "homepage-339f7",
stats: {
    "name": "Homepage",
    "numberOfRequests": {
        "total": "30060",
        "ok": "30060",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "209",
        "ok": "209",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4364",
        "ok": "4364",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "238",
        "ok": "238",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "percentiles1": {
        "total": "224",
        "ok": "224",
        "ko": "-"
    },
    "percentiles2": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "percentiles3": {
        "total": "272",
        "ok": "272",
        "ko": "-"
    },
    "percentiles4": {
        "total": "538",
        "ok": "539",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 30022,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 17,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 21,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.786",
        "ok": "49.786",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
