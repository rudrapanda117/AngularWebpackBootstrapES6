import angular from 'angular';
import './directive.scss'
export default class ExampleDirective {

    constructor($filter) {
        console.log("filter", $filter);
        this.template = require('./directive.html');
        this.restrict = 'E';
        this.scope = {};

        this.controller = ExampleDirectiveController;
        this.controllerAs = 'dire';
        this.bindToController = true;
    }


}
//ExampleDirective.$inject = ['$filter'];

class ExampleDirectiveController {
    constructor($filter) {
      console.log('$filter1'+$filter);
        this.url = 'https://github.com/preboot/angular-webpack';
        this.samplename = 'Directive Controller';
    }

}

/*
function ExampleDirectiveController($filter) {
console.log('$filter'+$filter);
    this.samplename = 'rudra';
    this.url = 'https://github.com/preboot/angular-webpack';

};
*/
ExampleDirectiveController.$inject = ['$filter'];



/*
class ExampleDirectiveController {
    constructor($filter) {
            this.url = 'https://github.com/preboot/angular-webpack';
            this.sortingOrder = 'name';
            this.pageSizes = [5, 10, 25, 50];
            this.reverse = false;
            this.filteredItems = [];
            this.groupedItems = [];
            this.itemsPerPage = 10;
            this.pagedItems = [];
            this.currentPage = 0;
            this.items = this.generateData();
            this.search();
        }
        // init
    generateData = () => {
        var arr = [];
        var letterWords = ["alpha", "bravo", "charlie", "daniel", "earl", "fish", "grace", "henry", "ian", "jack", "karen", "mike", "delta", "alex", "larry", "bob", "zelda"]
        for (var i = 1; i < 60; i++) {
            var id = letterWords[Math.floor(Math.random() * letterWords.length)];
            arr.push({
                "id": id + i,
                "name": "name " + i,
                "description": "Description of item #" + i,
                "field3": id,
                "field4": "Some stuff about rec: " + i,
                "field5": "field" + i
            });
        }
        return arr;
    }

    searchMatch = (haystack, needle) => {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    search = () => {
        this.filteredItems = $filter('filter')(this.items, function(item) {
            for (var attr in item) {
                if (this.searchMatch(item[attr], this.query))
                    return true;
            }
            return false;
        });
        // take care of the sorting order
        if (this.sortingOrder !== '') {
            this.filteredItems = $filter('orderBy')(this.filteredItems, this.sortingOrder, this.reverse);
        }
        this.currentPage = 0;
        // now group by pages
        this.groupToPages();
    };

    // show items per page
    perPage = () => {
        this.groupToPages();
    };

    // calculate page in place
    groupToPages = () => {
        this.pagedItems = [];

        for (var i = 0; i < this.filteredItems.length; i++) {
            if (i % this.itemsPerPage === 0) {
                this.pagedItems[Math.floor(i / this.itemsPerPage)] = [this.filteredItems[i]];
            } else {
                this.pagedItems[Math.floor(i / this.itemsPerPage)].push(this.filteredItems[i]);
            }
        }
    };

    deleteItem = (idx) => {
        var itemToDelete = this.pagedItems[this.currentPage][idx];
        var idxInItems = this.items.indexOf(itemToDelete);
        this.items.splice(idxInItems, 1);
        this.search();

        return false;
    };

    range = (start, end) => {
        var ret = [];
        if (!end) {
            end = start;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
        return ret;
    };

    prevPage = () => {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    };

    nextPage = () => {
        if (this.currentPage < this.pagedItems.length - 1) {
            this.currentPage++;
        }
    };

    setPage = () => {
        this.currentPage = this.n;
    };

    // functions have been describe process the data for display



    // change sorting order
    sort_by = (newSortingOrder) => {
        if (this.sortingOrder == newSortingOrder)
            this.reverse = !this.reverse;

        this.sortingOrder = newSortingOrder;
    };

};

ExampleDirectiveController.$inject = ['$filter'];
*/
