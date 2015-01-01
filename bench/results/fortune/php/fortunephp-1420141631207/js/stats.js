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
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16885",
        "ok": "16885",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "percentiles1": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "percentiles2": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles3": {
        "total": "519",
        "ok": "519",
        "ko": "-"
    },
    "percentiles4": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 29829,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 217,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50.073",
        "ok": "50.073",
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
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16885",
        "ok": "16885",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "percentiles1": {
        "total": "233",
        "ok": "234",
        "ko": "-"
    },
    "percentiles2": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles3": {
        "total": "519",
        "ok": "519",
        "ko": "-"
    },
    "percentiles4": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 29829,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 217,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50.073",
        "ok": "50.073",
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
