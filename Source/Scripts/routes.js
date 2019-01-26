
app.config(function ($stateProvider, $urlRouterProvider)
{
    $stateProvider
        .state("UserAuthentication", {
            url: "/Login",
            templateUrl: "Templates/Login.html",
            controller: "loginController",
            controllerAs: "loginCtrl",
            data: {
                LoginSuccess: false
            }
        })
        .state("PolicyParent", {
            url: "/Policy",
            controller: "policyParentController",
            controllerAs: "policyParentCtrl",
            templateUrl: "Templates/PolicyParent.html",
            abstract: true

        })
        .state("PolicyParent.Summary", {
            url: "/Summary",
            templateUrl: "Templates/PolicySummary.html",
            controller: "policySummaryController",
            controllerAs: "policySummaryCtrl",
            resolve: {
                policies: function (PolicySummaryService)
                {
                    return PolicySummaryService.getSummary();
                }
            }
        })
        .state("PolicyParent.Transactions", {
            url: "/Transactions/:id",
            templateUrl: "Templates/PolicyTransactions.html",
            controller: "policyTransactionsController",
            controllerAs: "policyTransactionsCtrl",
            resolve: {
                transactions: function (PolicyTransactionsService)
                {
                    return PolicyTransactionsService.getTransactions();
                }
            }
        })
        .state("PolicyParent.Search", {
            url: "/Search",
            templateUrl: "Templates/PolicySearch.html",
            controller: "policySearchController",
            controllerAs: "policySearchCtrl",
            resolve: {
                transactions: function (PolicyTransactionsService)
                {
                    return PolicyTransactionsService.getTransactions();
                }
            }
        });

    $urlRouterProvider.otherwise("/Login")
});