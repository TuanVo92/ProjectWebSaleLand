
//$('.social-icon-login a').live("click", function () {
//    bindSocialLoginLink(this);
//});

//$('.login-social-writereview a').live("click", function () {
//    bindSocialLoginLink(this);
//});

//$('.social-icon a').live("click", function () {
//    bindSocialLoginLink(this);
//});

//$('a.facebook-login').live("click", function () {

//    bindSocialLoginLink(this);
//});


function bindSocialLoginLink(el) {
    var provider = $(el).attr('provider');
    var returnUrl = getRequestParam("ReturnUrl");
    //if (provider == 1 || provider == 2 || provider == 3) {
    loginSocial(provider, returnUrl);
    //}
    return false;
}

function loginSocial(providerType, returnUrl) {
    var w = 640;
    var h = 450;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    //var top = document.height - (screen.height / 2) - (3 * h / 2)  

    var hWin = window.open('/Account/SocialAuthLogin?provider=' + providerType + "&param=" + returnUrl, "socialauthlogin", "height=" + h + ",width=" + w + ", scrollbars=no, top = " + top + ", left=" + left, true);

    //hWin.moveTo(left, top);
}

function getRequestParam(name) {
    name = name ? name.toLowerCase() : name;
    var urlSearch = location.search ? location.search.toLowerCase() : location.search;
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(urlSearch))
        return decodeURIComponent(name[1]);
    return '';
}



$(function () {
    if (getRequestParam('app_request_type') == 'user_to_user') {
        var d = new Date();
        $.ajax({
            type: "GET",
            url: '/Common/IsLogin?' + d.getTime(),
            success: function (response) {
                if (response.success == true) {
                    //sendRequestViaMultiFriendSelector();
                }
                else {
                    LoginPopup.ShowFacebookRecommendedLogin(function () {
                        $.modal.close();
                        //sendRequestViaMultiFriendSelector();
                    });
                }
            }
        });
    }
});
