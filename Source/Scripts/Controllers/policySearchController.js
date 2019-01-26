app.controller("policySearchController", function ($scope, $stateParams, transactions)
{
    $scope.message = "Transactions Search";
    $scope.policyTransactions = transactions;
});