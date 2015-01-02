var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600",
        "ok": "480",
        "ko": "120"
    },
    "minResponseTime": {
        "total": "368",
        "ok": "368",
        "ko": "10429"
    },
    "maxResponseTime": {
        "total": "60148",
        "ok": "59562",
        "ko": "60148"
    },
    "meanResponseTime": {
        "total": "34427",
        "ok": "28246",
        "ko": "59150"
    },
    "standardDeviation": {
        "total": "20009",
        "ok": "17304",
        "ko": "6337"
    },
    "percentiles1": {
        "total": "35198",
        "ok": "27652",
        "ko": "60017"
    },
    "percentiles2": {
        "total": "54409",
        "ok": "43184",
        "ko": "60027"
    },
    "percentiles3": {
        "total": "60027",
        "ok": "55460",
        "ko": "60077"
    },
    "percentiles4": {
        "total": "60077",
        "ok": "58811",
        "ko": "60135"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 473,
        "percentage": 79
    },
    "group4": {
        "name": "failed",
        "count": 120,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.967",
        "ok": "0.774",
        "ko": "0.193"
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
        "ok": "480",
        "ko": "120"
    },
    "minResponseTime": {
        "total": "368",
        "ok": "368",
        "ko": "10429"
    },
    "maxResponseTime": {
        "total": "60148",
        "ok": "59562",
        "ko": "60148"
    },
    "meanResponseTime": {
        "total": "34427",
        "ok": "28246",
        "ko": "59150"
    },
    "standardDeviation": {
        "total": "20009",
        "ok": "17304",
        "ko": "6337"
    },
    "percentiles1": {
        "total": "35198",
        "ok": "27652",
        "ko": "60017"
    },
    "percentiles2": {
        "total": "54409",
        "ok": "43190",
        "ko": "60027"
    },
    "percentiles3": {
        "total": "60027",
        "ok": "55460",
        "ko": "60077"
    },
    "percentiles4": {
        "total": "60077",
        "ok": "58811",
        "ko": "60135"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 473,
        "percentage": 79
    },
    "group4": {
        "name": "failed",
        "count": 120,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.967",
        "ok": "0.774",
        "ko": "0.193"
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
