"use strict";
var films = [
    {
        title: "Find Einstein",
        summary: "We keep looking for a genius in a crowd of millions, where we try to identify unique traits of the individual",
    },
    {
        title: "Vault Robbers",
        summary: "People store cash all over the city, the plans is to discover these locations and rob them of their stash",
    },
    {
        title: "Where Is Bond",
        summary: "For over a century, MI6 has been looking for their rogue agent 007, last we heard he was living in Cuba",
    },
    {
        title: "Exterminate Pests",
        summary: "You are a farmer and there has been an infestation of pests, we need to kill all of them before they become a problem to the far",
    },
];
var findMovie = function (queryText, moviesList) {
    return moviesList.filter(function (movie, i) {
        return movie.summary.includes(queryText) || movie.title.includes(queryText);
    });
};
console.log(findMovie("farm", films));
