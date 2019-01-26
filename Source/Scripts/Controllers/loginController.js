app.controller("loginController", function ($scope, $state, AuthenticationService)
{
    $scope.message = "Login";
    $scope.warning = "";

    $scope.userName = "";
    $scope.password = "";

    $scope.login = function()
    {
        if (AuthenticationService.login($scope.userName, $scope.password))
        {
            $state.get('UserAuthentication').data.LoginSuccess = true;
            $state.go('PolicyParent.Summary', {});
        }
        else
        {
            $scope.warning = "Username or password is incorrect";
        }
    }
});

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