app.factory("AuthenticationService", function ()
{
    return {
        login: function (userName, password)
        {
            if (userName === "admin" && password === "admin")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    };
});