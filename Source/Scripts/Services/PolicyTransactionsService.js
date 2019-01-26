app.factory("PolicyTransactionsService", function ($http)
{
    return {
        getTransactions: function ()
        {
            return $http.get("data/policy-transactions.json")
                    .then(function (response)
                    {
                        return response.data;
                    });
        }
    };
});