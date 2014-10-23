var uid = 1;

function ContactController($scope) {
    
$scope.contacts = [
{id:0,
'name':'Katie Kelly',
'email':'kkelly@gmail.com',
'phone':'123.234.3344',
'street':'2020 N. Adams',
'city':'Andover',
'state':'MA',
'zip':'02111'}
];




// Add contact info to list
    $scope.saveContact = function() {
        if($scope.newcontact.id == null) {
             $scope.newcontact.id = uid++;
             $scope.contacts.push($scope.newcontact);
        } else {
             for(i in $scope.contacts) {
                    if($scope.contacts[i].id == $scope.newcontact.id) {
                        $scope.contacts[i] = $scope.newcontact;
                    }
             }                
        }
        $scope.newcontact = {};
    }


    // Dump a contact
    $scope.delete = function(id) {
        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.contacts.splice(i,1);
                $scope.newcontact = {};
            }
        }
        
    }
    
    // Edit an existing contact 
    $scope.edit = function(id) {
        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.newcontact = angular.copy($scope.contacts[i]);
            }
        }
    }

}