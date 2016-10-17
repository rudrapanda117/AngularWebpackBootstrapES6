
import modalTemplate from './modalDirective.html';
import ModalDirectiveController from './modaldirectiveController.js'
export default function() {
    return {
        template: modalTemplate,
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: true,
        controller :ModalDirectiveController,
        controllerAs : 'mod',
        bindToController : true,
        link: function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            scope.$watch(attrs.visible, function(value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function() {
                scope.$apply(function() {
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function() {
                scope.$apply(function() {
                    scope.$parent[attrs.visible] = false;
                });
            });
        }
    };
}
