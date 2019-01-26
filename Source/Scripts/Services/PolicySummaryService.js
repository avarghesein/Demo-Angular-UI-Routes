app.factory("PolicySummaryService", function ($http)
{
    return {
        getSummary: function ()
        {
            return $http.get("data/policy-summary.json")
                    .then(function (response)
                    {
                        return response.data;
                    });
        }
    };
});