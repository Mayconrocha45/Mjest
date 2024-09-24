/**
 * @jest-environment jsdom
 */

describe('Multiplication Table DOM Manipulation', () => {
    let numberInput, generateButton, tabuadaList;

    beforeEach(() => {
        document.body.innerHTML = `
            <input type="number" id="numberInput" placeholder="Digite um número" />
            <button id="generateButton">Gerar Tabuada</button>
            <select id="tabuadaList"></select>
        `;
        const { generateTabuada }= ('../app');


        numberInput = document.getElementById('numberInput');
        generateButton = document.getElementById('generateButton');
        tabuadaList = document.getElementById('tabuadaList');
    });

    test('should generate multiplication table correctly for input 5', () => {
        numberInput.value = '5';
        generateButton.click();

 
        setTimeout(() => {
            expect(tabuadaList.children.length).toBe(10);
            expect(tabuadaList.children[0].textContent).toBe('5 x 1 = 5');
            expect(tabuadaList.children[9].textContent).toBe('5 x 10 = 50');
        }, 100);
    });

    test('should alert if no number is entered', () => {
        window.alert = jest.fn(); 
        numberInput.value = '';
        generateButton.click();

       
        setTimeout(() => {
            expect(window.alert).toHaveBeenCalledWith('Você precisa digitar um número!');
        }, 100);
    });

    test('should generate multiplication table correctly for input 1', () => {
        numberInput.value = '1';
        generateButton.click();

     
        setTimeout(() => {
            expect(tabuadaList.children.length).toBe(10);
            expect(tabuadaList.children[0].textContent).toBe('1 x 1 = 1');
            expect(tabuadaList.children[9].textContent).toBe('1 x 10 = 10');
        }, 100);
    });

    test('should generate multiplication table correctly for input 10', () => {
        numberInput.value = '10';
        generateButton.click();

       
        setTimeout(() => {
            expect(tabuadaList.children.length).toBe(10);
            expect(tabuadaList.children[0].textContent).toBe('10 x 1 = 10');
            expect(tabuadaList.children[9].textContent).toBe('10 x 10 = 100');
        }, 100);
    });

    test('should not generate table for negative numbers', () => {
        window.alert = jest.fn(); 
        numberInput.value = '-3';
        generateButton.click();

        
        setTimeout(() => {
            expect(window.alert).toHaveBeenCalledWith('Número inválido, insira um número positivo!');
        }, 100);
    });
});