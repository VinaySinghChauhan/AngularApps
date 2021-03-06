﻿var app = angular.module("angularApplication", ["ngRoute", "ngMessages", "ngStorage"]);
app.controller("mainController", mainController);
app.controller("homeController", homeController);
app.controller("loginController", loginController);
app.controller("signInController", signInController);
app.controller("signInUsersListController", signInUsersListController);
app.controller("editSignInController", editSignInController);
app.controller("editSignInByCustomerController", editSignInByCustomerController);
app.controller("reportByStateController", reportByStateController);
app.controller("reportByDistrictController", reportByDistrictController);
app.controller("orderItemsController", orderItemsController);
app.controller("editOrderController", editOrderController);
app.controller("cartController", cartController);
app.controller("orderHistoryController", orderHistoryController);
app.controller("allOrdersListController", allOrdersListController);
app.controller("logOutController", logOutController);