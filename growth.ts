const puppeteer = require('puppeteer');

const growth = 'https://www.gsuplementos.com.br/';

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(growth);

    //input[type="search"]

    console.log('Digitando creatina no buscador do site Growth Suplements');
    await page.type('input[type="search"]', 'creatina');

    console.log('Clicando no botão buscar');
    await page.click('form#busca.topo-busca button img');

    // page.waitForSelector espera um determinado elemento carregar na página

    console.log('Esperando os produtos carregarem na página');
    const produtos = 'div.categoriaProdItem-nomeGrade a.vitrine-nomeProduto h3';   
    await page.waitForSelector(produtos);

    // page.evaluate executa funções dentro do navegador

    const result = await page.evaluate( () => {

        // querySelectorAll retorna uma NodeList
        // NodeList não é um array, porém pode ser iterado pelo foreEach()


        let lista = document.querySelectorAll(            
            'div.categoriaProdItem-nomeGrade a.vitrine-nomeProduto h3'
        );

        

        console.log('-------------- começo --------------');
        console.log('');

        console.log(`Há ${lista.length} tipos de creatina.`);
        console.log('');

        /*
        const str = typeof(lista[0]);
        console.log(str);
        console.log(lista[0]);
        */

        let nome = lista[0].textContent;

        // resulta_da_lista é um array, diferente de lista que uma nodeList
        // os valores de lista serão passados para o resultado lista
        // para seja retornado um array

        let resultado_da_lista = [];
        
        for (let index = 0; index < lista.length; index++) {
            
            let nomes = lista[index].textContent;
            
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
        

    });

    
    //console.log(result);   

    
    console.log('');
    console.log('-------------- começo --------------');
    console.log('');

    for (let index = 0; index < result.length; index++) {
            
        let nomes = result[index];
        
        console.log("Produto " + index + " : " + nomes);
        console.log('');
    }        

    console.log('-------------- fim --------------');
    console.log('');
    

    //await browser.close();

})();