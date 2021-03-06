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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var puppeteer = require('puppeteer');
var growth = 'https://www.gsuplementos.com.br/';
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, produtos, result, index, nomes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer.launch({ headless: false })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.goto(growth)];
            case 3:
                _a.sent();
                //input[type="search"]
                console.log('Digitando creatina no buscador do site Growth Suplements');
                return [4 /*yield*/, page.type('input[type="search"]', 'creatina')];
            case 4:
                _a.sent();
                console.log('Clicando no bot??o buscar');
                return [4 /*yield*/, page.click('form#busca.topo-busca button img')];
            case 5:
                _a.sent();
                // page.waitForSelector espera um determinado elemento carregar na p??gina
                console.log('Esperando os produtos carregarem na p??gina');
                produtos = 'div.categoriaProdItem-nomeGrade a.vitrine-nomeProduto h3';
                return [4 /*yield*/, page.waitForSelector(produtos)];
            case 6:
                _a.sent();
                return [4 /*yield*/, page.evaluate(function () {
                        // querySelectorAll retorna uma NodeList
                        // NodeList n??o ?? um array, por??m pode ser iterado pelo foreEach()
                        var lista = document.querySelectorAll('div.categoriaProdItem-nomeGrade a.vitrine-nomeProduto h3');
                        console.log('-------------- come??o --------------');
                        console.log('');
                        console.log("H\u00E1 " + lista.length + " tipos de creatina.");
                        console.log('');
                        /*
                        const str = typeof(lista[0]);
                        console.log(str);
                        console.log(lista[0]);
                        */
                        var nome = lista[0].textContent;
                        // resulta_da_lista ?? um array, diferente de lista que uma nodeList
                        // os valores de lista ser??o passados para o resultado lista
                        // para seja retornado um array
                        var resultado_da_lista = [];
                        for (var index = 0; index < lista.length; index++) {
                            var nomes = lista[index].textContent;
                            console.log("Produto " + index + " : " + nomes);
                            console.log('');
                            // push adiciona um novo item no array
                            // JSON.stringfy tranforma o item em uma string
                            resultado_da_lista.push((nomes));
                        }
                        console.log('-------------- fim --------------');
                        console.log('');
                        /*
                        const str = typeof(resultado_da_lista[0]);
                        console.log(str);
                        console.log(resultado_da_lista[0]);
                        */
                        return resultado_da_lista;
                    })];
            case 7:
                result = _a.sent();
                //console.log(result);   
                console.log('');
                console.log('-------------- come??o --------------');
                console.log('');
                for (index = 0; index < result.length; index++) {
                    nomes = result[index];
                    console.log("Produto " + index + " : " + nomes);
                    console.log('');
                }
                console.log('-------------- fim --------------');
                console.log('');
                return [2 /*return*/];
        }
    });
}); })();
