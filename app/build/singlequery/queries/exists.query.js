System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ExistsQuery;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExistsQuery = (function () {
                function ExistsQuery() {
                    this.getQueryFormat = new core_1.EventEmitter();
                    this.queryName = '*';
                    this.fieldName = '*';
                    this.information = {
                        title: 'Exists query',
                        content: 'Exists query content',
                        link: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html'
                    };
                    this.inputs = {
                        input: {
                            placeholder: 'Input',
                            value: ''
                        }
                    };
                    this.queryFormat = {};
                }
                ExistsQuery.prototype.ngOnInit = function () {
                    try {
                        if (this.appliedQuery['exists'][this.fieldName]) {
                            this.inputs.input.value = this.appliedQuery['exists'][this.fieldName];
                        }
                    }
                    catch (e) { }
                    this.getFormat();
                };
                ExistsQuery.prototype.ngOnChanges = function () {
                    if (this.selectedField != '') {
                        if (this.selectedField !== this.fieldName) {
                            this.fieldName = this.selectedField;
                            this.getFormat();
                        }
                    }
                    if (this.selectedQuery != '') {
                        if (this.selectedQuery !== this.queryName) {
                            this.queryName = this.selectedQuery;
                            this.getFormat();
                        }
                    }
                };
                // QUERY FORMAT
                /*
                    Query Format for this query is
                    @queryName: {
                        @fieldName: @value
                    }
                */
                ExistsQuery.prototype.getFormat = function () {
                    if (this.queryName === 'exists') {
                        this.queryFormat = this.setFormat();
                        this.getQueryFormat.emit(this.queryFormat);
                    }
                };
                ExistsQuery.prototype.setFormat = function () {
                    var queryFormat = {};
                    queryFormat[this.queryName] = {};
                    queryFormat[this.queryName][this.fieldName] = this.inputs.input.value;
                    return queryFormat;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExistsQuery.prototype, "queryList", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExistsQuery.prototype, "selectedField", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExistsQuery.prototype, "appliedQuery", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExistsQuery.prototype, "selectedQuery", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ExistsQuery.prototype, "getQueryFormat", void 0);
                ExistsQuery = __decorate([
                    core_1.Component({
                        selector: 'exists-query',
                        template: "<div class=\"form-group form-element col-xs-12\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control col-xs-12\"\n\t\t\t\t\t\t[(ngModel)]=\"inputs.input.value\" \n\t\t\t\t\t \tplaceholder=\"{{inputs.input.placeholder}}\"\n\t\t\t\t\t \t(keyup)=\"getFormat();\" />\n\t\t\t\t</div>",
                        inputs: ['appliedQuery', 'queryList', 'selectedQuery', 'selectedField', 'getQueryFormat']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExistsQuery);
                return ExistsQuery;
            }());
            exports_1("ExistsQuery", ExistsQuery);
        }
    }
});
//# sourceMappingURL=exists.query.js.map