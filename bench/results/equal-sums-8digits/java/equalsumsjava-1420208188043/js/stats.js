var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600",
        "ok": "600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "132",
        "ok": "132",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4903",
        "ok": "4903",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "273",
        "ok": "273",
        "ko": "-"
    },
    "percentiles1": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "percentiles2": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "percentiles3": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles4": {
        "total": "667",
        "ok": "667",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 595,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.001",
        "ok": "1.001",
        "ko": "-"
    }
},
contents: {
"solver-36d97": {
        type: "REQUEST",
        name: "Solver",
path: "Solver",
pathFormatted: "solver-36d97",
stats: {
    "name": "Solver",
    "numberOfRequests": {
        "total": "600",
        "ok": "600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "132",
        "ok": "132",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4903",
        "ok": "4903",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "273",
        "ok": "273",
        "ko": "-"
    },
    "percentiles1": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "percentiles2": {
        "total": "183",
        "ok": "182",
        "ko": "-"
    },
    "percentiles3": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles4": {
        "total": "667",
        "ok": "667",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 595,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.001",
        "ok": "1.001",
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
