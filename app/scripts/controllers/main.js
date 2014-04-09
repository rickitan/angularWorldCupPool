'use strict';

angular.module('quinielaApp')
  .controller('MainCtrl', function ($scope) {


    $scope.groupsMatches = {
        A: { matches:[
                 [{country: "brazil", score:0}, {country: "croatia", score:0}],
                 [{country: "mexico", score:0}, {country: "cameroon", score:0}],
                 [{country: "brazil", score:0}, {country: "mexico", score:0}],
                 [{country: "cameroon", score:0}, {country: "croatia", score:0}],
                 [{country: "cameroon", score:0}, {country: "brazil", score:0}],
                 [{country: "croatia", score:0}, {country: "mexico", score:0}]
             ],
             standing: {
                 brazil: 0,
                 mexico:0,
                 cameroon:0,
                 croatia:0
             }
        },
        B: { matches:[
            [{country: "spain", score:0}, {country: "netherlands", score:0}],
            [{country: "chile", score:0}, {country: "australia", score:0}],
            [{country: "spain", score:0}, {country: "chile", score:0}],
            [{country: "australia", score:0}, {country: "netherlands", score:0}],
            [{country: "australia", score:0}, {country: "spain", score:0}],
            [{country: "netherlands", score:0}, {country: "chile", score:0}]
        ],
            standing: {
                spain: 0,
                chile:0,
                australia:0,
                netherlands:0
            }
        },
        C: { matches:[
            [{country: "colombia", score:0}, {country: "greece", score:0}],
            [{country: "costamarfil", score:0}, {country: "japan", score:0}],
            [{country: "colombia", score:0}, {country: "costamarfil", score:0}],
            [{country: "japan", score:0}, {country: "greece", score:0}],
            [{country: "japan", score:0}, {country: "colombia", score:0}],
            [{country: "greece", score:0}, {country: "costamarfil", score:0}]
        ],
            standing: {
                colombia: 0,
                costamarfil:0,
                japan:0,
                greece:0
            }
        },
        D: { matches:[
            [{country: "uruguay", score:0}, {country: "costarica", score:0}],
            [{country: "england", score:0}, {country: "italy", score:0}],
            [{country: "uruguay", score:0}, {country: "england", score:0}],
            [{country: "italy", score:0}, {country: "costarica", score:0}],
            [{country: "italy", score:0}, {country: "uruguay", score:0}],
            [{country: "costarica", score:0}, {country: "england", score:0}]
        ],
            standing: {
                uruguay: 0,
                england:0,
                italy:0,
                costarica:0
            }
        },
        E: { matches:[
            [{country: "switzerland", score:0}, {country: "ecuador", score:0}],
            [{country: "france", score:0}, {country: "honduras", score:0}],
            [{country: "switzerland", score:0}, {country: "france", score:0}],
            [{country: "honduras", score:0}, {country: "ecuador", score:0}],
            [{country: "honduras", score:0}, {country: "switzerland", score:0}],
            [{country: "ecuador", score:0}, {country: "france", score:0}]
        ],
            standing: {
                switzerland: 0,
                france:0,
                honduras:0,
                ecuador:0
            }
        },
        F: { matches:[
            [{country: "argentina", score:0}, {country: "bosnia", score:0}],
            [{country: "iran", score:0}, {country: "nigeria", score:0}],
            [{country: "argentina", score:0}, {country: "iran", score:0}],
            [{country: "nigeria", score:0}, {country: "bosnia", score:0}],
            [{country: "nigeria", score:0}, {country: "argentina", score:0}],
            [{country: "bosnia", score:0}, {country: "iran", score:0}]
        ],
            standing: {
                argentina: 0,
                iran:0,
                nigeria:0,
                bosnia:0
            }
        },
        G: { matches:[
            [{country: "germany", score:0}, {country: "portugal", score:0}],
            [{country: "ghana", score:0}, {country: "usa", score:0}],
            [{country: "germany", score:0}, {country: "ghana", score:0}],
            [{country: "usa", score:0}, {country: "portugal", score:0}],
            [{country: "usa", score:0}, {country: "germany", score:0}],
            [{country: "portugal", score:0}, {country: "ghana", score:0}]
        ],
            standing: {
                germany: 0,
                ghana:0,
                usa:0,
                portugal:0
            }
        },
        H: { matches:[
            [{country: "belgium", score:0}, {country: "algeria", score:0}],
            [{country: "russia", score:0}, {country: "korea", score:0}],
            [{country: "belgium", score:0}, {country: "russia", score:0}],
            [{country: "korea", score:0}, {country: "algeria", score:0}],
            [{country: "korea", score:0}, {country: "belgium", score:0}],
            [{country: "algeria", score:0}, {country: "russia", score:0}]
        ],
            standing: {
                belgium: 0,
                russia:0,
                korea:0,
                algeria:0
            }
        }
    };

    $scope.$watch("groupsMatches.A.matches ", function(newVal){
        calculateStandings();
    }, true);
    $scope.$watch("groupsMatches.B.matches ", function(newVal){
        calculateStandings();
    }, true);
    $scope.$watch("groupsMatches.C.matches ", function(newVal){
        calculateStandings();
    }, true);
    $scope.$watch("groupsMatches.D.matches ", function(newVal){
        calculateStandings();
    }, true);
    $scope.$watch("groupsMatches.E.matches ", function(newVal){
        calculateStandings();
    }, true);
    $scope.$watch("groupsMatches.F.matches ", function(newVal){
        calculateStandings();
    }, true);
    $scope.$watch("groupsMatches.G.matches ", function(newVal){
        calculateStandings();
    }, true);
    $scope.$watch("groupsMatches.H.matches ", function(newVal){
        calculateStandings();
    }, true);

    function calculateStandings(){
        clearPoints();
        _.each($scope.groupsMatches, function(groupData, group){
            _.each(groupData.matches, function(match){
                if(match[0].score > match[1].score){
                    groupData.standing[match[0].country] += 3;
                }else if(match[0].score < match[1].score){
                    groupData.standing[match[1].country] += 3;
                }else{
                    groupData.standing[match[0].country] += 1;
                    groupData.standing[match[1].country] += 1;
                }
            })
        })
        countriesThatPass();
    }

    function clearPoints(){
        _.each($scope.groupsMatches, function(groupData, group){
            _.each(groupData.matches, function(match){
                groupData.standing[match[0].country] = 0;
                groupData.standing[match[1].country] = 0;
            })
        })
    }

    function countriesThatPass(){
        _.each($scope.groupsMatches, function(groupData, group){
            var countriesOrderedByPoints = _.sortBy(_.pairs(groupData.standing), function(pair){ return -pair[1]});
            $scope.standing[group][0]["country"] = countriesOrderedByPoints[0][0];
            $scope.standing[group][1]["country"] = countriesOrderedByPoints[1][0];
        })
        $scope.secondStageMatches.roundOf16.A = [_.clone($scope.standing.A[0]), _.clone($scope.standing.B[1])];
        $scope.secondStageMatches.roundOf16.B = [_.clone($scope.standing.C[0]), _.clone($scope.standing.D[1])];
        $scope.secondStageMatches.roundOf16.C = [_.clone($scope.standing.E[0]), _.clone($scope.standing.F[1])];
        $scope.secondStageMatches.roundOf16.D = [_.clone($scope.standing.G[0]), _.clone($scope.standing.H[1])];
        $scope.secondStageMatches.roundOf16.E = [_.clone($scope.standing.B[0]), _.clone($scope.standing.A[1])];
        $scope.secondStageMatches.roundOf16.F = [_.clone($scope.standing.D[0]), _.clone($scope.standing.C[1])];
        $scope.secondStageMatches.roundOf16.G = [_.clone($scope.standing.F[0]), _.clone($scope.standing.E[1])];
        $scope.secondStageMatches.roundOf16.H = [_.clone($scope.standing.H[0]), _.clone($scope.standing.G[1])];
    }

    $scope.standing = { //Countries that pass the first round
        A: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
        B: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
        C: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
        D: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
        E: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
        F: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
        G: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
        H: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}]
    };

    $scope.$watch("secondStageMatches.roundOf16", function(newVal){ //Calculate who passes to quarter finals
        var matchHolder = [];
        var concaTitle = "";
        _.each($scope.secondStageMatches.roundOf16, function(match, title){
            if(match[0].score > match[1].score){
                matchHolder.push(_.clone(match[0]));
            }else if(match[0].score < match[1].score){
                matchHolder.push(_.clone(match[1]));
            }else{
                _.each(match, function(country){ country.victorByPenalties ? matchHolder.push(_.clone(country)) : null });
            }

            concaTitle += title;
            if(matchHolder.length === 2){
                $scope.secondStageMatches.quarterFinals[concaTitle][0]["country"] = matchHolder[0]["country"];
                $scope.secondStageMatches.quarterFinals[concaTitle][1]["country"] = matchHolder[1]["country"];
                matchHolder = [];
                concaTitle = "";
            }
        })
    }, true);

    $scope.$watch("secondStageMatches.quarterFinals", function(){ //Calculate who passes to quarter finals
        var matchHolder = [];
        var concaTitle = "";
        _.each($scope.secondStageMatches.quarterFinals, function(match, title){
            if(match[0].score > match[1].score){
                matchHolder.push(_.clone(match[0]));
            }else if(match[0].score < match[1].score){
                matchHolder.push(_.clone(match[1]));
            }else{
                _.each(match, function(country){ country.victorByPenalties ? matchHolder.push(_.clone(country)) : null });
            }
            concaTitle += title;
            if(matchHolder.length === 2){
                $scope.secondStageMatches.semiFinals[concaTitle][0]["country"] = matchHolder[0]["country"];
                $scope.secondStageMatches.semiFinals[concaTitle][1]["country"] = matchHolder[1]["country"];
                matchHolder = [];
                concaTitle = "";
            }
        })
    }, true);

    $scope.$watch("secondStageMatches.semiFinals", function(){ //Calculate who passes to quarter finals
        var matchHolder = [];
        var concaTitle = "";
        _.each($scope.secondStageMatches.semiFinals, function(match, title){
            if(match[0].score > match[1].score){
                matchHolder.push(_.clone(match[0]));
            }else if(match[0].score < match[1].score){
                matchHolder.push(_.clone(match[1]));
            }else{
                _.each(match, function(country){ country.victorByPenalties ? matchHolder.push(_.clone(country)) : null });
            }
            concaTitle += title;
            if(matchHolder.length === 2){

                $scope.secondStageMatches.final[concaTitle][0]["country"] = matchHolder[0]["country"];
                $scope.secondStageMatches.final[concaTitle][1]["country"] = matchHolder[1]["country"];
                matchHolder = [];
                concaTitle = "";
            }
        })
    }, true);


    $scope.victorByPenalties = function(round, title, winnerIndex){
        _.each($scope.secondStageMatches[round][title], function(country, index){
            country.victorByPenalties = (winnerIndex == index) ? true : false;
        })
        console.log($scope.secondStageMatches[round][title]);
    }


    $scope.secondStageMatches = {
        "roundOf16":{
            A: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
            B: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
            C: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
            D: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
            E: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
            F: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
            G: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}],
            H: [{country: "", score:0, victorByPenalties:true}, {country: "", score:0, victorByPenalties:false}]
        },
        "quarterFinals":{
            AB: [{country: "brazil", score:0, victorByPenalties:true}, {country: "mexico", score:0, victorByPenalties:false}],
            CD: [{country: "brazil", score:0, victorByPenalties:true}, {country: "mexico", score:0, victorByPenalties:false}],
            EF: [{country: "brazil", score:0, victorByPenalties:true}, {country: "mexico", score:0, victorByPenalties:false}],
            GH: [{country: "brazil", score:0, victorByPenalties:true}, {country: "mexico", score:0, victorByPenalties:false}]
        },
        "semiFinals":{
            ABCD: [{country: "brazil", score:0, victorByPenalties:true}, {country: "mexico", score:0, victorByPenalties:false}],
            EFGH: [{country: "brazil", score:0, victorByPenalties:true}, {country: "mexico", score:0, victorByPenalties:false}]
        },
        "final":{
            ABCDEFGH: [{country: "brazil", score:0, victorByPenalties:true}, {country: "mexico", score:0, victorByPenalties:false}]
        }
    };




  });
