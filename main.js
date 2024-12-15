function Calculadora() {
    this.display = document.querySelector('.display');

    // Captura cliques nos botões
    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    // Realiza a conta com segurança
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta && conta !== 0) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida');
        }
    };

    // Adiciona números ao display
    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus ();
    };

    // Limpa o display
    this.clear = () => {
        this.display.value = '';
    };

    // Remove o último caractere do display
    this.del = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    // Captura o evento Enter no teclado
    this.capturaEnter = () => {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    // Inicializa a calculadora
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };
}

// Instancia a calculadora e inicia
const calculadora = new Calculadora();
calculadora.inicia();
