var app = angular.module("lifeSaverApp", []);

app.controller("LifeSaverController", function ($scope) {

    $scope.donors = [

        {
            name: "Rahul Sharma",
            city: "Vadodara",
            bloodGroup: "A+",
            phone: "9876543210"
        },

        {
            name: "Priya Patel",
            city: "Ahmedabad",
            bloodGroup: "O+",
            phone: "9876501234"
        },

        {
            name: "Amit Verma",
            city: "Surat",
            bloodGroup: "B+",
            phone: "9876512345"
        }

    ];

    $scope.donor = {};

    $scope.addDonor = function () {

        if (
            $scope.donor.name &&
            $scope.donor.city &&
            $scope.donor.bloodGroup &&
            $scope.donor.phone
        ) {

            $scope.donors.push({

                name: $scope.donor.name,
                city: $scope.donor.city,
                bloodGroup: $scope.donor.bloodGroup,
                phone: $scope.donor.phone

            });

            $scope.donor = {};

        }

    };

    $scope.deleteDonor = function (index) {

        $scope.donors.splice(index, 1);

    };

});