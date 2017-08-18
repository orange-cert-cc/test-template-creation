"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TestService = (function () {
    function TestService(http) {
        this.http = http;
        console.log('Test Service Initialized...');
    }
    TestService.prototype.getDefVars = function () {
        return this.http.get('/def')
            .map(function (res) { return res.json(); });
    };
    TestService.prototype.getUnDefVars = function () {
        return this.http.get('/undef')
            .map(function (res) { return res.json(); });
    };
    TestService.prototype.getOneDefVar = function (name) {
        return this.http.get('/def/one/' + name)
            .map(function (res) { return res.json(); });
    };
    TestService.prototype.createTemplate = function (file, content) {
        var newFile = {
            fileName: file,
            content: content
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/def/template', JSON.stringify(newFile), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TestService.prototype.launchTemplateTest = function (file, content) {
        var newFile = {
            fileName: file,
            content: content
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/def/launch', JSON.stringify(newFile), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TestService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TestService);
    return TestService;
}());
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map