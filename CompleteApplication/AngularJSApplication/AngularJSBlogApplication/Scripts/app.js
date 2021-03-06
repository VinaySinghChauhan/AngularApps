﻿var app = angular.module("angularApplication", ["ngRoute", "ngMessages", "ngStorage"]);
app.controller("mainController", mainController);
app.controller("homeController", homeController);
app.controller("loginController", loginController);
app.controller("signInController", signInController);
app.controller("postAdministrationController", postAdministrationController);
app.controller("createPostController", createPostController);
app.controller("editPostController", editPostController);
app.controller("allPublishedPostListController", allPublishedPostListController);
app.controller("postDetailsController", postDetailsController);
app.controller("logOutController", logOutController);