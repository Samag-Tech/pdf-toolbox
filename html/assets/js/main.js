(function ($) {
    const Main = {
        init: function () {
            $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
                localStorage.setItem('activeTab', $(e.target).attr('href'));
            });

            var activeTab = localStorage.getItem('activeTab');

            if (activeTab) {
                $('#myTab a[href="' + activeTab + '"]').tab('show');
            }

            if (localStorage.getItem('sessionId') == undefined) {
                localStorage = localStorage.setItem(
                    'sessionId',
                    Math.random().toString().slice(2)
                );
            }

            document.cookie = "sessionid=" + localStorage.getItem('sessionId') +
                    "; Secure";

            $('#cookie').load(document.URL + ' #cookie');
        }
    }

    $(function () {
        Main.init();
    });

})(jQuery);