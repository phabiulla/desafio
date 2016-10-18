$(function () {


	/* Função para preencher lista de cursos assim que a página inicia */
	 $(document).ready(function () {


		var $container = $("#cursos");

		$.ajax({
            type: "GET",
            url: "https://cefis.com.br/api/v1/event",
            data: {},
            dataType: "json",
            success: function (retorno) {
                if (retorno != "" && retorno !== null) {
                    $.each(retorno.data, function (index, value) {
                    	// para cada retorno, monta uma nova li
                        adicionaCurso(value, $container);
                    });
                }


				// Funçao para encurtar textos do resumo
				$('.content-resume').dotdotdot();
            }
        });

	 });
});

/* Função para adicionar box do curso */
function adicionaCurso(curso, $container){

	var html = 
	'<li class="content-curso col-lg-3 col-md-3 col-sm-6" data-codigo="'+ curso.id +'">' +	//id
		'<div class="box">'+
			'<div class="content-infos">'+	
				'<div class="titulo-curso">'+
					'<h3>'+ curso.title + '</h3>'+ //titulo
				'</div>'+	
				'<div class="subtitulo-curso">'+		
					'<h5>'+ curso.subtitle + '</h5>'+ //subtitulo
				'</div>'+
				'<div class="teachers">'+		
					'<h6>com '+ curso.teachers_names + '</h6>'+ //professores
				'</div>'+
			'</div>'+
			'<div class="content-banner">'+
				'<img src="'+curso.banner+'"/>'+ // imagem
			'</div>'+
			'<div class="content-resume">'+
				'<div class="truncate">'+
					curso.resume + // resumo
				'</div>'+
			'</div>'+
		'</div>'+
	'</li>';

	$container.append(html);
}

