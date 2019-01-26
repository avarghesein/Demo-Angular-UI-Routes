app.controller("policyTransactionsController", function ($scope, $stateParams, transactions)
{
    $scope.message = "Transactions";
    $scope.policyTransactions = transactions;
});