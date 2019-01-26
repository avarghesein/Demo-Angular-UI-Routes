# Demo-AngularUI-Routes
A demo application featuring;

## 1. Login with user name and password as (admin, admin)

## 2. AngularJS UI-Routing with States (Instead Of conventional routing)

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

## 3. Nested Controllers with Parent/Child controllers (using DOT convention)

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

## 4. UI-Grid usage

[!alt UI-Grid](https://github.com/avarghesein/Demo-AngularUI-Routes/blob/master/Source/InsuranceDemoApp.jpg)

## 5. Hooking between State Transitions (And cancelling transition as required)

        app.run(function ($transitions)
        {
            $transitions.onStart({}, function (transition)
            {
                var fromState = transition.from();
                var toState = transition.to();

                if (toState.name !== 'UserAuthentication')
                {
                    var loginSuccess = transition.router.stateService.get("UserAuthentication").data.LoginSuccess;
                    return loginSuccess;
                }
            });
        });
