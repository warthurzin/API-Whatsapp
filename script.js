// Parte 1: Armazenamento e recuperação com LocalStorage
document.getElementById('btnGravar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    
    localStorage.setItem('formNome', nome);
    localStorage.setItem('formEndereco', endereco);
    localStorage.setItem('formEmail', email);
    localStorage.setItem('formTelefone', telefone);
    
    alert('Dados gravados com sucesso!');
});

document.getElementById('btnExibir').addEventListener('click', function() {
    const nome = localStorage.getItem('formNome') || 'Não informado';
    const endereco = localStorage.getItem('formEndereco') || 'Não informado';
    const email = localStorage.getItem('formEmail') || 'Não informado';
    const telefone = localStorage.getItem('formTelefone') || 'Não informado';
    
    const dadosHTML = `
        <h3>Dados Armazenados:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
    `;
    
    document.getElementById('dadosExibidos').innerHTML = dadosHTML;
});

// Parte 2: Envio via WhatsApp
document.getElementById('btnEnviar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const telefoneWhatsApp = document.getElementById('telefoneWhatsApp').value;
    
    if (!telefoneWhatsApp) {
        alert('Por favor, informe o número do WhatsApp para envio.');
        return;
    }
    
    const mensagem = `Dados do Formulário:%0A%0ANome: ${nome}%0AEndereço: ${endereco}%0AEmail: ${email}%0ATelefone: ${telefone}`;
    
    const numeroFormatado = telefoneWhatsApp.replace(/\D/g, '');
    
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroFormatado}&text=${mensagem}`;
    
    window.open(urlWhatsApp, '_blank');
});