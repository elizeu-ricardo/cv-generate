

    const nome = document.getElementById('nome');
    const previewNome = document.getElementById('previewNome')

    const nacionalidade = document.getElementById('nacionalidade');
    const estadoCivil = document.getElementById('estadoCivil');
    const DtNascimento = document.getElementById('dtNacimento');

    const blocUm = document.getElementById('bloc01');

    const mail = document.getElementById('mail');
    const blocDois = document.getElementById('bloc02');

    const contato = document.getElementById('contato');
    const blocTreis = document.getElementById('bloc03');

    const endereco = document.getElementById('endereco');
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('uf');
    const blocQuatro = document.getElementById('bloc04');

    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        previewNome.innerHTML = nome.value;
        blocUm.innerHTML = `${nacionalidade.value}, ${estadoCivil.value}, ${DtNascimento.value} anos`
        blocDois.innerHTML = `E-mail: ${mail.value}`;
        blocTreis.innerHTML = `Contato: ${contato.value}`;
        blocQuatro.innerHTML = `Endereço: ${endereco.value}, ${cidade.value}-${uf.value}`
    })

    const objetivos = document.getElementById('objetivos').innerHTML = 'OBJETIVO'

    function salvarOBJ() {
        const textareaObj = document.getElementById('textareaObj');
        const obj = document.getElementById('obj');
        obj.innerHTML = textareaObj.value;
        document.getElementById('objetivos').style.display = 'block';
        document.getElementById('linhaOBJ').style.display = 'block';

        textareaObj.value = ''
    }


    const formacaoACademica = document.getElementById('formacaoAcademica').innerHTML = 'FORMAÇÃO ACADÊMICA'
    const cursos = document.getElementById('cursos').innerHTML = 'CURSOS COMPLEMENTARES'
    const experi = document.getElementById('experi').innerHTML = 'EXPERIÊNCIAS'

    const btnFormacao = document.getElementById('btn-formacao');
    const btnCursos = document.getElementById('btn-curso');
    const btnExperi = document.getElementById('btn-experiencia');

    $(btnFormacao).on('click', function(e) {
        const formAcadem = $('#forma-academica').val();
        const novaFormacao = $(`<li>${formAcadem}</li>`)

        novaFormacao.appendTo('#list-form');

        $('#formacaoAcademica').css('display', 'block');
        $('#linhaFormaAcademica').css('display', 'block');

        $('#forma-academica').val('');

    });

    $(btnCursos).on('click', function(e) {
        const cursosComplementares = $('#curso-complementar').val();
        const novoCursos = $(`<li>${cursosComplementares}</li>`);

        novoCursos.appendTo('#list-cursos');
        $('#linhaCursos').css('display', 'block');
        $('#cursos').css('display', 'block')

        $('#curso-complementar').val('');

    });

    $(btnExperi).on('click', function(e) {
        const experiencia = $('#experiencia').val();
        const novaExperiencia = $(`<li>${experiencia}</li>`);

        novaExperiencia.appendTo('#list-experi')
        $('#experi').css('display', 'block');
        $('#linhaExperi').css('display', 'block');

        $('#experiencia').val('');

    });

    $('#contato').mask('(00) 00000-0000');
    $('#dtNacimento').mask('00');
    $('#uf').mask('SS')


    //Função para gerar o PDF
    const btnPrint = document.getElementById('print');
        //Conteúdo do PDF
    btnPrint.addEventListener('click', function() {
        const content = document.querySelector('.right');
        //Configuração do arquivo final de PDF
        const options = {
            margin: [10,10,10,10],
            filename: "Curriculum.pdf",
            html2canvas: {scale:2},
            jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
        }

        // Gerar e baixar o arquivo
        html2pdf().set(options).from(content).save();
    })







