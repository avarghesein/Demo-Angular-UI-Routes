app.controller("policySummaryController", function ($scope, policies)
{
    $scope.message = "Policy Summary";

    $scope.policySummary = policies;
});