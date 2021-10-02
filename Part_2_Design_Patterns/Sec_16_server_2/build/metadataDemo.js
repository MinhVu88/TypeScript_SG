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
require("reflect-metadata");
// DEMO 1
var person = {
    name: 'Adam Thomas Jones'
};
Reflect.defineMetadata('alias', 'Bastardometer', person);
var alias1 = Reflect.getMetadata('alias', person);
console.log('\t', alias1);
Reflect.defineMetadata('instruments', '1979 Gibson Les Paul Custom Silverburst', person);
var guitar = Reflect.getMetadata('instruments', person);
console.log('\t', guitar);
Reflect.defineMetadata('alias', 'Bastardometer', person, 'instruments');
var alias1Metadata = Reflect.getMetadata('alias', person, 'instruments');
console.log('\t', alias1Metadata);
console.log('---------------------------------------------------------');
// DEMO 2
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Maynard James Keenan';
    }
    Person.prototype.getName = function () {
        return "Full name: " + this.name;
    };
    __decorate([
        setMetadataValue('Möstresticator'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Person.prototype, "getName", null);
    Person = __decorate([
        getMetadataValue
    ], Person);
    return Person;
}());
// decorators & metadata
function setMetadataValue(info) {
    return function (target, propertyKey) {
        var metadataKey = 'alias';
        var metadataValue = info;
        Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);
    };
}
var alias2 = Reflect.getMetadata('alias', Person.prototype, 'getName');
console.log('\t', alias2);
function getMetadataValue(constructor) {
    for (var classMethod in constructor.prototype) {
        var alias2_1 = Reflect.getMetadata('alias', constructor.prototype, classMethod);
        console.log('\t', alias2_1);
    }
}
