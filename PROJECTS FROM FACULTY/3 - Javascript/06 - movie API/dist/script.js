"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData(title) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const API_KEY = 'f6ab01ff';
            let response = yield fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`);
            let data = yield response.json();
            console.log(data);
            showData(data);
        }
        catch (error) {
            throw new Error("error");
        }
    });
}
fetchData("Baahubali");
const input = document.getElementsByClassName("input")[0];
const movieResults = document.querySelector(".movie-results");
function showData(dataInput) {
    console.log("showdata");
    const createElement = document.createElement('div');
    movieResults.innerHTML = "saljjc";
    movieResults.appendChild(createElement);
}
console.log("object");
console.log("2object");
//# sourceMappingURL=script.js.map