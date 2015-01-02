var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600",
        "ok": "583",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "153",
        "ok": "153",
        "ko": "209"
    },
    "maxResponseTime": {
        "total": "1455",
        "ok": "1455",
        "ko": "465"
    },
    "meanResponseTime": {
        "total": "249",
        "ok": "247",
        "ko": "294"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "80",
        "ko": "70"
    },
    "percentiles1": {
        "total": "228",
        "ok": "228",
        "ko": "283"
    },
    "percentiles2": {
        "total": "282",
        "ok": "274",
        "ko": "330"
    },
    "percentiles3": {
        "total": "360",
        "ok": "354",
        "ko": "426"
    },
    "percentiles4": {
        "total": "465",
        "ok": "445",
        "ko": "457"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 582,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 17,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.001",
        "ok": "0.973",
        "ko": "0.028"
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
        "ok": "583",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "153",
        "ok": "153",
        "ko": "209"
    },
    "maxResponseTime": {
        "total": "1455",
        "ok": "1455",
        "ko": "465"
    },
    "meanResponseTime": {
        "total": "249",
        "ok": "247",
        "ko": "294"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "80",
        "ko": "70"
    },
    "percentiles1": {
        "total": "228",
        "ok": "228",
        "ko": "283"
    },
    "percentiles2": {
        "total": "282",
        "ok": "274",
        "ko": "330"
    },
    "percentiles3": {
        "total": "360",
        "ok": "354",
        "ko": "426"
    },
    "percentiles4": {
        "total": "465",
        "ok": "445",
        "ko": "457"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 582,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 17,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.001",
        "ok": "0.973",
        "ko": "0.028"
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
