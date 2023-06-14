(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

let insalubridadeSelected = false;
let opcaoInsalubridade = 0;
let periculosidadeSelected = false;


function exibirPericulosidade() {
    insalubridadeSelected = false;
    opcaoInsalubridade = 0;
    periculosidadeSelected = true;
    const divInsalubridade = document.querySelector("#opcoesInsalubridade");
    divInsalubridade.style.visibility = "hidden";

    const minimo = document.querySelector("#minimo");
    const medio = document.querySelector("#medio");
    const maximo = document.querySelector("#maximo");
    minimo.checked = false;
    medio.checked = false;
    maximo.checked = false;
}

function exibirInsalubridade() {
    insalubridadeSelected = true;
    periculosidadeSelected = false;
    const divInsalubridade = document.querySelector("#opcoesInsalubridade");
    divInsalubridade.style.visibility = "visible";
}

function selecionaInsalubridade(valor) {
    opcaoInsalubridade = valor;
}

function calcularSalario() {
    const valorSalario = document.querySelector("#valorSalario").value;
    const divSalario = document.querySelector("#salario-total");
    const salarioMinimo = 1320;

    let salarioFinal = Number.parseInt(valorSalario);
    
    if (periculosidadeSelected) {
        salarioFinal = salarioFinal * 1.3;
    }

    if (insalubridadeSelected) {
        salarioFinal = salarioFinal + ((opcaoInsalubridade) / 100) * salarioMinimo;
    }

    divSalario.innerHTML = `<h3>Salário total: R$ ${salarioFinal}</h3>`
}


const DADOS_PESQUISA = [{"time":"12/06/2023 07:56:13","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Sim","questionEPIBought":"Fornecidos pela empresa","EPIcomments":"Em alguns setores eu tive que adquirir por conta própria, Mas na maior parte dos setores eles dão.","questionRemote":"Não","questionRemoteEquipment":"","questionRemoteEquipmentBought":"","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 08:09:32","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":2,"examSecondValue":2,"examThirdValue":1,"examFourthValue":1,"examComments":""},{"time":"12/06/2023 08:28:39","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"A empresa forneceu os equipamentos","questionExam":"Sim, tanto de forma presencial quanto remota","examFirstValue":1,"examSecondValue":3,"examThirdValue":1,"examFourthValue":1,"examComments":""},{"time":"12/06/2023 08:31:16","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Sim","questionEPIBought":"Fornecidos pela empresa","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Não","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":3,"examSecondValue":5,"examThirdValue":1,"examFourthValue":1,"examComments":""},{"time":"12/06/2023 08:51:38","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Sim","questionEPIBought":"Fornecidos pela empresa","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 09:02:03","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Sim","questionEPIBought":"Fornecidos pela empresa","EPIcomments":"","questionRemote":"Não","questionRemoteEquipment":"","questionRemoteEquipmentBought":"","questionExam":"Sim, de forma presencial","examFirstValue":4,"examSecondValue":5,"examThirdValue":5,"examFourthValue":5,"examComments":""},{"time":"12/06/2023 09:03:30","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Sim","questionEPIBought":"Fornecidos pela empresa","EPIcomments":"","questionRemote":"Não","questionRemoteEquipment":"","questionRemoteEquipmentBought":"","questionExam":"Sim, de forma presencial","examFirstValue":1,"examSecondValue":3,"examThirdValue":1,"examFourthValue":1,"examComments":""},{"time":"12/06/2023 09:05:22","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Sim","questionEPIBought":"Fornecidos pela empresa","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 09:06:30","questionNR":"Não","questionNRArea":"","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Sim, tanto de forma presencial quanto remota","examFirstValue":5,"examSecondValue":2,"examThirdValue":4,"examFourthValue":4,"examComments":""},{"time":"12/06/2023 09:16:44","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Não","questionRemoteEquipmentBought":"A empresa forneceu os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":1,"examSecondValue":3,"examThirdValue":1,"examFourthValue":1,"examComments":""},{"time":"12/06/2023 09:45:45","questionNR":"Não","questionNRArea":"","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":1,"examSecondValue":3,"examThirdValue":2,"examFourthValue":1,"examComments":""},{"time":"12/06/2023 09:49:39","questionNR":"Sim","questionNRArea":"Não","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 09:55:52","questionNR":"Sim","questionNRArea":"Não","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Não","questionRemoteEquipment":"","questionRemoteEquipmentBought":"","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 10:02:15","questionNR":"Não","questionNRArea":"","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 10:11:22","questionNR":"Sim","questionNRArea":"Não","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Não","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":3,"examSecondValue":5,"examThirdValue":5,"examFourthValue":5,"examComments":""},{"time":"12/06/2023 10:11:59","questionNR":"Sim","questionNRArea":"Não","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Não","questionRemoteEquipmentBought":"A empresa forneceu os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":4,"examSecondValue":5,"examThirdValue":2,"examFourthValue":2,"examComments":""},{"time":"12/06/2023 10:12:14","questionNR":"Não","questionNRArea":"","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 10:13:57","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Não","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":5,"examSecondValue":4,"examThirdValue":4,"examFourthValue":4,"examComments":""},{"time":"12/06/2023 10:42:26","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":1,"examSecondValue":1,"examThirdValue":1,"examFourthValue":1,"examComments":""},{"time":"12/06/2023 10:53:08","questionNR":"Não","questionNRArea":"","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 10:54:23","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Não","questionRemoteEquipment":"","questionRemoteEquipmentBought":"","questionExam":"Sim, de forma presencial","examFirstValue":4,"examSecondValue":4,"examThirdValue":5,"examFourthValue":4,"examComments":""},{"time":"12/06/2023 10:57:09","questionNR":"Sim","questionNRArea":"Não","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"A empresa forneceu os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":3,"examSecondValue":4,"examThirdValue":2,"examFourthValue":1,"examComments":""},{"time":"12/06/2023 11:16:39","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Sim","questionEPIBought":"Fornecidos pela empresa","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 12:23:39","questionNR":"Sim","questionNRArea":"Não","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos, mas fui reembolsado parcialmente pela empresa","questionExam":"Sim, de forma presencial","examFirstValue":3,"examSecondValue":3,"examThirdValue":1,"examFourthValue":1,"examComments":""},{"time":"12/06/2023 13:08:05","questionNR":"Sim","questionNRArea":"Não","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Não","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 13:10:59","questionNR":"Sim","questionNRArea":"Não","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":5,"examSecondValue":5,"examThirdValue":5,"examFourthValue":5,"examComments":""},{"time":"12/06/2023 16:09:43","questionNR":"Não","questionNRArea":"","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Sim","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Sim, de forma presencial","examFirstValue":3,"examSecondValue":5,"examThirdValue":3,"examFourthValue":4,"examComments":""},{"time":"12/06/2023 20:26:08","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Sim","questionEPIBought":"Fornecidos pela empresa","EPIcomments":"","questionRemote":"Não","questionRemoteEquipment":"","questionRemoteEquipmentBought":"","questionExam":"Não","examFirstValue":"","examSecondValue":"","examThirdValue":"","examFourthValue":"","examComments":""},{"time":"12/06/2023 20:52:01","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Sim","questionRemoteEquipment":"Não","questionRemoteEquipmentBought":"Eu adquiri os equipamentos","questionExam":"Sim, tanto de forma presencial quanto remota","examFirstValue":2,"examSecondValue":2,"examThirdValue":1,"examFourthValue":1,"examComments":""},{"time":"13/06/2023 13:24:47","questionNR":"Sim","questionNRArea":"Sim","questionEPI":"Não","questionEPIBought":"","EPIcomments":"","questionRemote":"Não","questionRemoteEquipment":"","questionRemoteEquipmentBought":"","questionExam":"Sim, de forma presencial","examFirstValue":4,"examSecondValue":5,"examThirdValue":3,"examFourthValue":5,"examComments":""}];


let DADOS_FILTRADOS = DADOS_PESQUISA;

let filtros = [];

const aplicaFiltros = (filtro) => {
    DADOS_FILTRADOS = DADOS_PESQUISA;
    const filtroExistente = filtros.find(item => item.prop === filtro.prop && item.value === filtro.value);

    if (filtroExistente) {
        filtros = filtros.filter(item => !(item.prop === filtro.prop && item.value === filtro.value))
    } else {
        filtros.push(filtro);
    }

    filtros.forEach(item => {
        DADOS_FILTRADOS = DADOS_FILTRADOS.filter(dado => dado[item.prop] != item.value);
    })

    charts.forEach(item => {
        item.chart.data.datasets[0].data = obterQuantidadeItensUnicos(item.labels, item.property);
        item.chart.update();
    })
}

const charts = [];


function obterQuantidadeItensUnicos(values, prop) {
    const result = [];
    values.forEach(item => {
        result.push(DADOS_FILTRADOS.filter(dataItem => dataItem[prop] === item).length);
    })

    console.log(prop);
    return result;
}

const opcoesSimNao = ['Sim', 'Não'];
const colorsSimNao = ['#005588', '#AA1100'];
const opcoesEPIEmpresa = ['Aqduiridos por conta própria', 'Fornecidos pela empresa'];
const opcoesRemoteEquipmentBought = ['Eu adquiri os equipamentos', 'Eu adquiri os equipamentos, mas fui reembolsado parcialmente pela empresa', 'Eu adquiri os equipamentos, mas fui reembolsado totalmente pela empresa', 'A empresa forneceu os equipamentos']
const colorsRemoteEquipmentBought = ['#005588', '#AA1100', 'rgb(255, 153, 0)', 'rgb(16, 150, 24)'];
const opcoesExameAdmissional = ['Sim, de forma presencial', 'Sim, de forma remota', 'Sim, tanto de forma presencial quanto remota', 'Não'];
const opcoesExame = [1, 2, 3, 4, 5];

const getChart = (id, labels, backgroundColor, property, title) => {
  
    const chart = new Chart(document.getElementById(id), {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: backgroundColor,
          data: obterQuantidadeItensUnicos(labels, property),
          borderWidth: 1,
        },
      ],
    },
    options: {
      aspectRatio: 2,
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title,
          font: {
            size: 30,
          },
        },
        legend: {
          onClick(e, legendItem, legend) {
          if (legend.chart.config.type === 'pie' || legend.chart.config.type === 'doughnut') {
            Chart.controllers.doughnut.overrides.plugins.legend.onClick(e, legendItem, legend)
          } else {
            Chart.defaults.plugins.legend.onClick(e, legendItem, legend);
          }
            aplicaFiltros({prop: property, value: legendItem.text});
          },
        },
      },
    },
  });

    charts.push({chart, labels, property});  
};

const getBarChart = (id, labels, property, title) => {
    const chart = new Chart(document.getElementById(id), {
    type: "bar",
    data: {
      labels: ['Discordo totalmente', 'Discordo', 'Não concordo nem discordo', 'Concordo', 'Concordo totalmente'],
      datasets: [
        {
        backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
        ],
          data: obterQuantidadeItensUnicos(labels, property),
          borderWidth: 1,
        },
      ],
    },
    options: {
      aspectRatio: 2,
      responsive: true,
      scales: {
        y: {
            beginAtZero: true
        }
    },
      plugins: {
        title: {
          display: true,
          text: title,
          font: {
            size: 30,
          },
        },
        legend: {
            display: false
        }
      },
    },
  });

    charts.push({chart, labels, property});  
};

(async function() {
    const chartNR = getChart('chartNR', opcoesSimNao, colorsSimNao, "questionNR", 'Você sabe o que são normas regulamentadoras?');
    const chartNRArea = getChart('chartNRArea', opcoesSimNao, colorsSimNao, "questionNRArea", 'Você conhece quais Normas Regulamentadoras (NRs) se aplicam à sua área de atuação?');
    const chartEPI = getChart('chartEPI', opcoesSimNao, colorsSimNao, "questionEPI", 'O seu trabalho requer o uso de Equipamentos de Proteção Individual (EPIs)?');
    const chartEPIBought = getChart('chartEPIBought', opcoesEPIEmpresa, colorsSimNao, "questionEPIBought", 'Os Equipamentos de Proteção Individual (EPIs) que você usa durante o trabalho foram adquiridos por conta própria ou fornecidos pela empresa?');
    const chartRemote = getChart('chartRemote', opcoesSimNao, colorsSimNao, "questionRemote", 'Você costuma trabalhar de forma remota na sua própria residência (home-office)?');
    const chartRemoteEquipment = getChart('chartRemoteEquipment', opcoesSimNao, colorsSimNao, "questionRemoteEquipment", 'Você considera que o conjunto de equipamentos para escritório (ex.: cadeira de escritório, mesa, suporte para notebook, apoio para pés, etc.) presentes no seu escritório de casa lhe permitem realizar o seu trabalho de forma adequada, sem dores e desconfortos?');
    const chartRemoteEquipmentBought = getChart('chartRemoteEquipmentBought', opcoesRemoteEquipmentBought, colorsRemoteEquipmentBought, "questionRemoteEquipmentBought", 'Você adquiriu os equipamentos utilizados no seu escritório de casa?');
    const chartExam = getChart('chartExam', opcoesExameAdmissional, colorsRemoteEquipmentBought, "questionExam", 'Você já realizou algum exame admissional?');
    const barChart1 = getBarChart('chartExamFirstValue', opcoesExame, "examFirstValue", 'O(a) médico(a) do trabalho pelo qual fui atendido foi atencioso e fez perguntas relevantes a respeito do meu estado de saúde.');
    const barChart2 = getBarChart('chartExamSecondValue', opcoesExame, "examSecondValue", 'Durante o exame, foram levantadas características a respeito da minha altura, peso, pressão arterial e hábitos.');
    const barChart3 = getBarChart('chartExamThirdValue', opcoesExame, "examThirdValue", 'O exame levou uma quantidade de tempo minimamente adequada.');
    const barChart4 = getBarChart('chartExamFourthValue', opcoesExame, "examFourthValue", 'Eu não saí do exame com a impressão de que desperdicei o meu tempo.');
  })();