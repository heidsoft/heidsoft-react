// describe('angularjs homepage todo list', function() {
//     // it('should add a todo', function() {
//     //     browser.get('https://angularjs.org');
//     //
//     //     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     //     element(by.css('[value="add"]')).click();
//     //
//     //     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     //     expect(todoList.count()).toEqual(3);
//     //     expect(todoList.get(2).getText()).toEqual('write first protractor test');
//     //
//     //     // You wrote your first test, cross it off the list
//     //     todoList.get(2).element(by.css('input')).click();
//     //     var completedAmount = element.all(by.css('.done-true'));
//     //     expect(completedAmount.count()).toEqual(2);
//     // });
//
//     it('get www.baidu.com', function() {
//         $httpBackend.when('get', 'http://www.baidu.com',
//             function(data) {
//                 console.log(data);
//                 return true;
//             }
//         ).respond(200, true );
//         $httpBackend.flush();
//     });
// });

describe('PhoneListController', function() {
    beforeEach(module('phonecatApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.phones', function() {
        it('should create a `phones` model with 3 phones', function() {
            var scope = {};
            var ctrl = new PhoneListController(scope);

            expect(scope.phones.length).toBe(3);
        });
    });
});