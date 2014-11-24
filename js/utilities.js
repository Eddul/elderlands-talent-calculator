var Util = (function () {
    _rixits = "WvlgUCsA7pGZ3zSjakbP2x0mTB6htH8JuKMq1yrnwEQDLY5IVNXdcioe9fF4OR_-";

    return {
        // encode number to base64
        encode: function (number) {
            if (isNaN(Number(number)) || number === null || number < 0 || number === Number.POSITIVE_INFINITY)
                throw "Invalid input";

            var rixit;
            number = Math.floor(number);
            var result = '';
            do {
                result = _rixits.charAt(number % 64) + result;
                number = Math.floor(number / 64);
            } while (number);

            return result;
        },

        decode: function (str) {
            var result = 0;
            for (var i = 0; i < str.length; i++)
                result = (result * 64) + _rixits.indexOf(str[i]);
            return result;
        },

        insertValue: function (str, pos, value) {
            return (str.substr(0, pos) + value + str.substr(pos + 1));
        },

        toFirstUpper: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    };
})();