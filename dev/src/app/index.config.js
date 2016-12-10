(function ()
{
    'use strict';

    angular
        .module('wipGenerator')
        .config(config);

    /** @ngInject */
    function config($logProvider)
    {
        // Enable log
        $logProvider.debugEnabled(true);
    }

})();
