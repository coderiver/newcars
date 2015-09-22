jQuery(document).ready(function ($) {

//	===================================================================================================
//	De Select
//	===================================================================================================

	$(document).on('click', '.de-select dt', function () {

		if (!$(this).parents('.de-select').hasClass('disabled')) {

			var parent = $(this).parent();
			$(document).find('.de-select').find('dt').not(this).removeClass('active');
			$(this).toggleClass('active');

		}

	});

	$(document).on('click', '.de-select dd a', function () {

		var parent = $(this).parent().parent(),
			trigger = parent.find('dt');

		if (!$(this).hasClass('current')) {
			parent.find('a').removeClass('current');
			$(this).addClass('current');
			trigger.removeClass('active').html($(this).text());
		}

		if (parent.hasClass('not-selected')) {
			parent.removeClass('not-selected');
		}

		return false;
	});


	$(document).on('click', function (e) {
		if (!$(e.target).parents().hasClass('de-select') && !$(e.target).hasClass('de-select')) {
			$('.de-select dt').removeClass('active');
		}
//		if (!e.target.tagName.toLowerCase() == 'dd' && !$(e.target).hasClass('active')) {
//			$('.de-select dt').removeClass('active');
//		}
	});


//	---------------spoil----------------------

	$(document).on('click', '.spoil-trigg', function (e) {
		e.preventDefault();

		var thissp = $(this);


		$(this).parents('.spoil').toggleClass('open');
		var spH = $(this).parents('.spoil').find('.spoil-content').height();

		if ($(this).parents('.spoil').hasClass('open')) {
			$(this).parents('.spoil').find('.spoil-wrap').height(spH);
			setTimeout(function () {
				$(thissp).parents('.spoil').find('.spoil-wrap').css('overflow', 'visible');
			}, 200);
		}
		else {
			$(this).parents('.spoil').find('.spoil-wrap').height(0);
			$(this).parents('.spoil').find('.spoil-wrap').css('overflow', 'hidden');
		}
	});


	$(document).on('click', '.cars-brands-list .open_list', function (e) {
		e.preventDefault();

		var thissp = $(this);

		var par = $(this).parent();

		if(par.hasClass('open')){
			par.removeClass('open');
		}
		else {
			$('.cb-item').removeClass('open');
			par.addClass('open');
		}

		$('.cb-item').find('.cbl2-wrap').height(0);
		$('.cb-item').find('.cbl2-wrap').css('overflow', 'hidden');
		$('.cb-item').css('margin-bottom', '30px');

		// $(this).parents('.cb-item').toggleClass('open');
		
		var spH = $(this).parents('.cb-item').find('.cars-brands-list2').height() + 20;

		if ($(this).parents('.cb-item').hasClass('open')) {
			$(this).parents('.cb-item').find('.cbl2-wrap').height(spH);
			$(this).parents('.cb-item').css('margin-bottom', spH);
			setTimeout(function () {
				$(thissp).parents('.cb-item').find('.cbl2-wrap').css('overflow', 'visible');
			}, 200);
		}
		else {
			$(this).parents('.cb-item').find('.cbl2-wrap').height(0);
			$(this).parents('.cb-item').find('.cbl2-wrap').css('overflow', 'hidden');
			$(this).parents('.cb-item').css('margin-bottom', '30px');
		}
	});


	$(document).on('click', '.open_searchform', function () {

		var thissp = $(this);


		$('.head-search-form').toggleClass('open');
		var spH = $('.head-search-form').find('.filters-block').height();

		if ($('.head-search-form').hasClass('open')) {
			$('.head-search-form').height(152);
			setTimeout(function () {
				$('.head-search-form').css('overflow', 'visible');
			}, 200);

			// $('.maincontainer .filters-block').addClass('hidden');
		}
		else {
			$('.head-search-form').height(0);
			$('.head-search-form').css('overflow', 'hidden');
			// $('.maincontainer .filters-block').removeClass('hidden');
		}
	});

	$('.close-search').on('click', function () {
		$('.head-search-form, .quick-search-form').height(0);
		$('.head-search-form, .quick-search-form').css('overflow', 'hidden');
		$('.head-search-form, .quick-search-form').removeClass('open');
		$('.maincontainer .filters-block, .quick-search-form .filters-block').removeClass('hidden');
		$('.hsb-trigger.open').removeClass('open');
	});


	$(document).on('click', '.open_quicksearch', function (e) {

		e.preventDefault();

		var thissp = $(this);


		$('.quick-search-form').toggleClass('open');
		var spH = $('.quick-search-form').find('.filters-block').height();

		if ($('.quick-search-form').hasClass('open')) {
			$('.quick-search-form').height(152);
			setTimeout(function () {
				$('.quick-search-form').css('overflow', 'visible');
			}, 200);
			thissp.addClass('open');

			// $('.maincontainer .filters-block').addClass('hidden');
		}
		else {
			$('.quick-search-form').height(0);
			$('.quick-search-form').css('overflow', 'hidden');
			thissp.removeClass('open');
			// $('.maincontainer .filters-block').removeClass('hidden');
		}
	});

//	$('.close-search').on('click', function(){
//		$('.head-search-form').height(0);
//		$('.head-search-form').css('overflow', 'hidden');
//		$('.head-search-form').removeClass('open');
//		$('.maincontainer .filters-block').removeClass('hidden');
//	});

//	------------------tabs---------------------------
	$(document).on('click', '.tab-item', function () {
		if($(this).hasClass('active')){
			return false;
		}

		$(this).parents('.tabs-nav').find('.tab-item').each(function(){
			
			$(this).find('a', function(){
				if($(this).hasClass('with-cars')){
				
				} else {
					
					$(this).find('.total-amount-search').removeClass('show');
				}
			});
			
		});
		
		$(this).parents('.tabs-container').find(".tab-content").hide().css('opacity', '0');
		$(this).parents('.tabs-container').find(".tab-item").removeClass("active");
		
		$(this).addClass("active").find('.total-amount-search').addClass('show');


		var id = $(this).find('a').attr('data-href');

		var activeTab = $('.tab-content[data-id="' + id + '"]');
		activeTab.show().css({ "height": "100%"}).animate({
			'opacity': '1'
		}, 500);


		if($('.scrolllpane').length){
			$('.scrolllpane').jScrollPane({});
		}

		if (activeTab.find('.slick-home-slider2').length) {
			activeTab.find('.slick-home-slider2').slick({
				slidesToScroll: 1,
				slidesToShow  : 1,
				slide         : '.sh-item',
				dots          : true
			});
		}


		return false;


	});

	if($('.rate-block').length){
		
		$(document).on('click','.rate-anchor',function(){
			var par = $('.rate-block'),
				trig = par.find('.rate-anchor'),
				datr = trig.attr('data-hreff'),
				destination = $('[data-id="' + datr + '"]').offset().top - 85;
			$('body,html').animate({ scrollTop: destination }, 400);
			return false;
		});
	}

//	------------------------slick--------------------------


	if ($('.slick-home-slider').length) {
		
		$('.slick-home-slider').slick({
			slidesToScroll: 1,
			slidesToShow  : 1,
			slide         : '.sh-item',
			dots          : true
		});
	}


//	--------------range slider----------------------

	

	//слайдер
	if($( ".big-slider-range" ).length){
		$( ".big-slider-range" ).each(function(){

			// var sldr = $('.sl-range')
			var bsr = $(this),
				rslide = bsr.find( ".sl-range" ),
				rfrom = bsr.find('.range-from'),
				rto = bsr.find('.range-to'),
				min = 100000,
				max = 500000,
				step = 5000;

			//Початкове значення полів "від" та "до"
			rfrom.val(min);
			rto.val(max);

			rslide.slider({
				range: true,
				min: 0,
				max: 2000000,
				step: step,
				value: 0,
				values: [ 100000, 2000000 ],
				create: function( event, ui ) {
					var ftrigger = rslide.find('span:first'),
						strigger = rslide.find('span:last'),
						sdl = bsr.find('.sdl-left'),
						sdr = bsr.find('.sdl-right'),
						insurance = '<p class="range-insurance">Страховка<span></span></p>',//for advanced search page
						credit = '<p class="range-credit">Кредит<span></span></p>';//for advanced search page

					ftrigger.append(sdl);
					strigger.append(sdr);
					if($(this).parents('.money').length){
						strigger.append(insurance);//for advanced search page
						strigger.append(credit);//for advanced search page
					}
				},

				//Зміна значеннь у полях "від" та "до", а також зміна у блочках під повзунками слайдера (при перетягуванні повзунків)
				slide: function( event, ui ) {

					var str = ui.values[ 0 ],
						arf = str.toString(),
						arr = arf.split( /(?=(?:...)*$)/ ),
						newStr = arr.toString(),
						finRes = newStr.replace(/,/g , " ");
					var str2 = ui.values[ 1 ],
						arf2 = str2.toString(),
						arr2 = arf2.split( /(?=(?:...)*$)/ ),
						newStr2 = arr2.toString(),
						finRes2 = newStr2.replace(/,/g , " ");
					if($(this).parents('.money').length){
						var rangeWidth = $('.money').find('.sl-range').width(),
							spanLast = $('.money').find('.sl-range').children('span:last'),
							beginingFirstPwidth = 54,
							beginingLastPwidth = 106,
							spanLastW = spanLast.width(),
							splPos = spanLast.position(),
							secondHandleLeftNotRounded = splPos.left + 3,//plus 3 pxls
							secondHandleLeft = Math.round(secondHandleLeftNotRounded),
							udelta = rangeWidth - secondHandleLeft,
							delta = Math.round(udelta),
							lastP = spanLast.find('p:last').find('span'),
							startLastPwidth = lastP.width(),
							lastPwidth = lastP.width(),
							lastDelta = delta - lastPwidth - spanLastW,
							newSpanWidth = lastDelta + lastPwidth;
							if($(this).parents('.modal-advisor').length){
								newSpanWidth = lastDelta + lastPwidth +10;
							}

							//Vars for insurance choise
						var	spanFirst = $('.money').find('.sl-range').children('span:first'),
							spanFirstW = spanFirst.width(),
							spfPos = spanFirst.position(),
							firstHandleLeftNotRounded = spfPos.left + 5,//plus 5 pxls
							firstHandleLeft = Math.round(firstHandleLeftNotRounded),
							secondDelta = secondHandleLeft - firstHandleLeft,
							firstP = spanLast.find('p:first').find('span'),
							fistPwidth = firstP.width(),
							lastDeltaForFirst = secondDelta - spanLastW;
	
							lastP.width(newSpanWidth).css('max-width', beginingLastPwidth);
							firstP.width(lastDeltaForFirst).css('max-width',beginingFirstPwidth);

						
							
						if(newSpanWidth < beginingLastPwidth){
								lastP.addClass('noborder');
						} else {
								lastP.removeClass('noborder');
						}
						if(lastDeltaForFirst < beginingFirstPwidth){
							firstP.addClass('noborder');
						} else {
							firstP.removeClass('noborder');
						}



					}
					

					sdl.html( "От " + finRes);
					sdr.html( "До " + finRes2);
					$('.range-slider-min').html( "От " + finRes);
					$('.range-slider-max').html( "До " + finRes2);

					rfrom.val(ui.values[ 0 ]);//for advanced search page
					rto.val(ui.values[ 1 ]);//for advanced search page

					if($('.money-total-price').length && $('.range-to').length){
						$('.money-total-price').text($('.range-to').val());


					}

				}
			});



			var sdl = $('.sdl-left'),
				sdr = $('.sdl-right'),
				lval = rfrom.val(),
				rval = rto.val();

			var str = rslide.slider( "values", 0 ),
				arf = str.toString(),
				arr = arf.split( /(?=(?:...)*$)/ ),
				newStr = arr.toString(),
				finRes = newStr.replace(/,/g , " "),
				str2 = $( ".sl-range" ).slider( "values", 1 ),
				arf2 = str2.toString(),
				arr2 = arf2.split( /(?=(?:...)*$)/ ),
				newStr2 = arr2.toString(),
				finRes2 = newStr2.replace(/,/g , " ");

			$('.range-slider-min').html( "От " + finRes);
			$('.range-slider-max').html( "До " + finRes2);

			if(!$('.big-slider-range').parents('.money').length){
				$(sdl).html( "От " + finRes);
				$(sdr).html( "До " + finRes2);

			}
			else{
				sdl.html("От " + finRes);
				sdr.html("До " + finRes2);
			}


			//Передаєм значення у блочки під повзунками слайдера


			//Змінюємо положення лівого повзунка у слайдері при зміні значення у полі "від"
			rfrom.change(function () {
			    var low = rfrom.val(),
			        high = rto.val();
			    low = Math.min(low, high);
			    rfrom.val(low);
			    sdl.html(low);
			    rslide.slider('values', 0, low);

			});

			//Змінюємо положення правого повзунка у слайдері при зміні значення у полі "до"
			rto.change(function () {
			    var low = rfrom.val(),
			        high = rto.val();
			    low = Math.min(low, high);
			    rto.val(high);
			    sdr.html(high);
			    rslide.slider('values', 1, high);
			});
		});
	}



	$(document).on('click','.credit-choise .checkbox-wrap label', function(){
		if($(this).parents('.money').length){
			var creditSum = 100000,
				upTo = $(this).parents('.section').find('.big-slider-range').find('.form-row').find('.range-to').val(),
				newVal = parseInt(upTo, 10) + parseInt(creditSum, 10),
				oldVal = parseInt(upTo, 10) - parseInt(creditSum, 10);
			console.log(upTo);
			$(this).parent().toggleClass('active');
			if($(this).parent().hasClass('active')){
				// $(this).parents('.section').find('.big-slider-range').find('.range-credit').css('display','block');
				$(this).parents('.money').find('.big-slider-range').find('.range-credit').css('visibility','visible');
				$(this).parents('.money').find('.big-slider-range').find('.form-row').find('.range-to').val(newVal);
			} else {
				// $(this).parents('.section').find('.big-slider-range').find('.range-credit').css('display','none');
				$(this).parents('.money').find('.big-slider-range').find('.range-credit').css('visibility','hidden');
				$(this).parents('.money').find('.big-slider-range').find('.form-row').find('.range-to').val(oldVal);
			}
		}
	});

	$(document).on('click','.insurance-choise .checkbox-wrap label', function(){
		if($(this).parents('.money').length){
			var el = $(this),
				yes = el.parents('.insurance-choise').find('.yes'),
				no = el.parents('.insurance-choise').find('.no'),
				wn = el.parents('.insurance-choise').find('.wont');
			el.parents('.insurance-choise').find('.checkbox-wrap').removeClass('active'); 

			if(el.parent().hasClass('yes')){
				// $('.big-slider-range').find('.range-insurance').css('display','block');
				$('.big-slider-range').find('.range-insurance').css('visibility','visible');
				console.log('yes');
			} else {
				// $('.big-slider-range').find('.range-insurance').css('display','none');
				$('.big-slider-range').find('.range-insurance').css('visibility','hidden');
			}
		}
	});
	

//	------------------------------------------

	function stickyHeader() {
		
		var scroll = $(window).scrollTop(),
			item = $('.mainheader-bottom'),
			itemWrap = $('.mainheader-bottom-wrap'),
			itemPos = itemWrap.offset().top;

		if (scroll >= itemPos) {
			item.addClass('is-fixed');
		}
		else {
			item.removeClass('is-fixed');
		}

	}
	stickyHeader();

	$(window).scroll(function() {
		stickyHeader();
	});

	$('.garage-trigg').on('click', function (e) {
		e.preventDefault();
		var thissp = $(this);
		if ($(this).parents('.garage-wrap').hasClass('open')) {
			setTimeout(function () {
				thissp.parents('.garage-wrap').removeClass('open');
			}, 100);
		}
		else {
			setTimeout(function () {
				thissp.parents('.garage-wrap').addClass('open');
			}, 100);
		}
	});

	$(document).on('click', function (e) {
		if (!$(e.target).parents().hasClass('remove_car') && !$(e.target).hasClass('remove_car') && !$(e.target).parents().hasClass('garage-wrap') && !$(e.target).hasClass('garage-wrap')) {
			$('.garage-wrap').removeClass('open');
		}
	});


	$('.gar-chekbox-wrap .remove_car').on('click', function () {
		$(this).parents('li').remove();
	});


	$(window).on('scroll load', function () {
		$(".bothead-nav li").each(function () {
			var elementClick = $(this).find('a').attr("data-href");
			if ($('[data-id="' + elementClick + '"]').length && $('.bothead-nav').offset().top > $('[data-id="' + elementClick + '"]').offset().top - 95) {
				$(".bothead-nav li").removeClass('current');
				$(this).addClass('current');
			}
			if ($('body').find('.compare_page').length) {
				var lpar = $('.compare_character'),
					tpar = $('.compare-container'),
					emptyBox = lpar.find('.empty_box').height(),
					tbody = lpar.find('tbody').height(),
					carDes = lpar.find('.line_1').find('.car-dscrpt'),
					tCarDes = tpar.find('.line_1').find('.car-dscrpt'),
					carDescription = carDes.height(),
					tbodyFin = tbody - carDescription,
					stHeight = emptyBox + carDescription;
				if ($('[data-id="' + elementClick + '"]').length && $('.bothead-nav').offset().top > $('[data-id="' + elementClick + '"]').offset().top - stHeight - 95) {
					$(".bothead-nav li").removeClass('current');
					$(this).addClass('current');
					if($('.bothead-nav').offset().top > $('[data-last]').offset().top - stHeight - 95){
//						tCarDes.addClass('grey');
							// 'background':'#696969',
							// 'color':'#fff'
					}
					else {
//						tCarDes.removeClass('grey');
					}
				}
			}
		});
	});


	$(document).on('click', '.bothead-nav li, .scrollTo', function (e) {
		e.preventDefault();
		var elementClick = $(this).find('a').attr("data-href");
		var destination = $('[data-id="' + elementClick + '"]').offset().top - 85;
		if ($('body').find('.compare_page').length) {
			var lpar = $('.compare_character'),
				emptyBox = lpar.find('.empty_box').height(),
				tbody = lpar.find('tbody').height(),
				carDes = lpar.find('.line_1').find('.car-dscrpt'),
				carDescription = carDes.height(),
				tbodyFin = tbody - carDescription,
				stHeight = emptyBox + carDescription;
			if ($('body').find('.wrapper-sticky').is('.sticky-active')) {
				var destination = $('[data-id="' + elementClick + '"]').offset().top - stHeight - 85;
				$('body,html').animate({ scrollTop: destination }, 400);
			}
			else {
				var destination = $('[data-id="' + elementClick + '"]').offset().top - stHeight - tbodyFin - 85;
				$('body,html').animate({ scrollTop: destination }, 400);
			}
		}
		else {
			$('body,html').animate({ scrollTop: destination }, 400);
		}

		if ($(window).width() <= 900) {
			//hide navigation on mobile view
			$('.js-borthead-btn').removeClass('is-open');
			$('.bothead-nav').slideUp(200);
		};
		

	});


	if ($('.main-sl').length && $('.nav-sl').length) {

		//------ Slider with videos --------
		$('.main-sl .main-sl-item a').each(function(){
			var el = $(this);
			var elHref = $(this).attr('href');
			var	link = elHref.split('=')[1];
			var	thumb = 'http://img.youtube.com/vi/' + link + '/0.jpg';
			var	imgSrc = thumb.toString();
			var	newItem = '<div class="nav-sl-item video"><img src="'+imgSrc+'" alt="" /></div>';
			console.log(newItem);
			$('.nav-sl').append(newItem);
		});
		//----- end of slider w/ videos -----

		$('.main-sl').slick({
			slidesToShow  : 1,
			slidesToScroll: 1,
			arrows        : true,
			adaptiveHeight: true,
			asNavFor      : '.nav-sl'
		});
		$('.nav-sl').slick({
			slidesToShow  : 4,
			slidesToScroll: 1,
			asNavFor      : '.main-sl',
			dots          : false,
			arrows        : false,
			centerMode    : true,
			focusOnSelect : true,
			variableWidth : true
		});
	}


	//----------- Вибір по параметрам на головній
	$(document).on('click','.cat-icons-list .cat-item, .kuzov-choice .kc-item a', function (e) {
		e.preventDefault();
		var el = $(this),
			wrap = el.parents('.kc-item'),
			firstParent = el.parents('.tab-content'),
			firstParentAttr = firstParent.attr('data-id'),
			totalParent = el.parents('.tabs-container'),
			readMore = totalParent.find('.readmore-line').find('.car-found').html(),
			tabAttr = totalParent.find('.tab-item').find('a[data-href="' + firstParentAttr +'"]'),
			insertDestination = tabAttr.find('.total-amount-search').find('span').html('(' + readMore + ')'),
			currTab = $(this).parents('.tabs-container').find('.tabs-nav .active').index();
			// xx = insertDestination.html();
		insertDestination;
		// console.log(xx);

		$(this).parents('.cat-icons-list').find('.cat-item').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.tabs-container').find('.readmore-line').removeClass('hide');
		if (!$(this).parents('.kuzov-choice-small').length && !$(this).parent().hasClass('notfound')) {
			$(this).parents('.kc-item').toggleClass('active');
			$(this).parents('.section').find('.params-search-header').find('.checkbox-wrap').removeClass('checked');
			$(this).parents('.tabs-container').find('.readmore-line').removeClass('hide');
			// return false;
		}
		//------Перемикаем автоматично на наступний таб після зробленого вибору------
		if(!$(this).parents('.kuzov-choice').length) {
			$(this).parents('.tabs-container').find('.tabs-nav li').eq(currTab + 1).click();
		}
		if($(this).parent().hasClass('notfound')){
			return false;
		}	
		if(wrap.hasClass('car-sel')){
			wrap.removeClass('car-sel');
			wrap.parents('.kuzov-choice').find('.kc-item').each(function(){
				var cs = $(this).is('.car-sel');
				if(cs.length){
					tabAttr.addClass('with-cars');
				} else {
					tabAttr.removeClass('with-cars');
				}
			});
		} else {
			wrap.addClass('car-sel');
			tabAttr.addClass('with-cars');
		}
	});


	$(document).on('click', '.carmark-choice .checkbox-wrap label', function () {
		var el = $(this),
			wrap = el.parents('.checkbox-wrap'),
			firstParent = el.parents('.tab-content'),
			firstParentAttr = firstParent.attr('data-id'),
			totalParent = el.parents('.tabs-container'),
			readMore = totalParent.find('.readmore-line').find('.car-found').html(),
			tabAttr = totalParent.find('.tab-item').find('a[data-href="' + firstParentAttr +'"]'),
			insertDestination = tabAttr.find('.total-amount-search').find('span').html('(' + readMore + ')'),
			currTab = $(this).parents('.tabs-container').find('.tabs-nav .active').index();
		insertDestination;
		$(this).parents('.tabs-container').find('.readmore-line').removeClass('hide');
		if($(this).is('unavalable')){
			return false;
		} else {
			if(wrap.hasClass('car-sel')){
				wrap.removeClass('car-sel');
				wrap.parents('.carmark-choice').find('.checkbox-wrap').each(function(){
					var cs = $(this).is('.car-sel');
					if(cs.length){
						tabAttr.addClass('with-cars');
					} else {
						tabAttr.removeClass('with-cars');
					}
				});
			} else {
				wrap.addClass('car-sel');
				tabAttr.addClass('with-cars');
			}
		}
	});


	$(document).on('click', '.big-slider-range .range-slider-border', function(){
		if($(this).parents('.tab-content').length){
			var el = $(this),
				firstParent = el.parents('.tab-content'),
				firstParentAttr = firstParent.attr('data-id'),
				totalParent = el.parents('.tabs-container'),
				readMore = totalParent.find('.readmore-line').find('.car-found').html(),
				tabAttr = totalParent.find('.tab-item').find('a[data-href="' + firstParentAttr +'"]'),
				insertDestination = tabAttr.find('.total-amount-search').find('span').html('(' + readMore + ')'),
				currTab = $(this).parents('.tabs-container').find('.tabs-nav .active').index();
			insertDestination;
			tabAttr.addClass('with-cars');
		}
	});


	$(document).on('click', '.open_full_form', function () {
		$(this).parents('.form-content').find('.hide').animate({'display': 'inline-block'}, 200).removeClass('hide');
		$(this).parents('.form-column').fadeOut(200).addClass('hide');
	});
	$(document).on('click', '.open_rest_form', function () {
		console.log('yes');
		$(this).parents('.form-column').find('.hidden').animate({'display': 'inline-block'}, 200).removeClass('hidden');
		// $(this).parents('.form-column').fadeOut(200).addClass('hide');
	});


	$(document).on('click', '.share-block .btn-share', function (e) {
		e.preventDefault();
		$(this).hide();
		$(this).parents('.share-block').find('.share-block-socials').fadeIn(200);
	});


	//--------------чекбокси у пошуці за параметрами-----------------

	if ($('.params-checkbox-row').length) {
		$(document).on('click', '.select-all label', function () {
			var el = $(this).parent();

			if (el.hasClass('checked')) {
				el.removeClass('checked');
				el.parents('.section').find('.checking, .kc-item').removeClass('active');
			} else {
				el.addClass('checked');
				el.parents('.section').find('.checking, .kc-item').addClass('active');
			}
			el.parent().find('.cancel-all').removeClass('checked');
		});

		$(document).on('click', '.cancel-all label', function () {
			var el = $(this).parent();
			if (el.hasClass('checked')) {
				el.removeClass('checked');
				// el.parent().parent().parent().find('.checking').removeClass('active');
				el.parents('.section').find('.checking, .kc-item').removeClass('active');
			} else {
				el.addClass('checked');
				// el.parent().parent().parent().find('.checking').removeClass('active');
				el.parents('.section').find('.checking, .kc-item').removeClass('active');
			}
			el.parent().find('.select-all').removeClass('checked');
		});
	};

	if ($('.car-body').length || $('.modal-advisor').length) {
		$(document).on('click', '.checking', function () {
			var el = $(this);
			el.parents('.section').find('.params-search-header').find('.params-checkbox-row').find('.checkbox-wrap').removeClass('checked');
			if (el.hasClass('active')) {
				el.removeClass('active');
			} else {
				el.addClass('active');
			}
			return false;
		});
	};

	$(document).on('click', '.close-modal', function(){
		$('.modal-advisor').css({
			// 'display':'none',
			'visibility':'hidden',
			'opacity':'0'
		});
	});


	//=====================================================
	//--------------- Сторінка порівняння -----------------
	//=====================================================

	//-------------- Вирівнювання таблиць -----------------

$(window).on('load', function(){

	$('.compare-container').addClass('visible');

	$.fn.maxHeight = function() {
		var max = 0;
		this.each(function() {
			max = Math.max( max, $(this).height() );
		});
		return max;
	};

	$(function() {
		if($('.compare_page').length){
			
			$('.line_1').each(function(){
				var table = $(this).find('table');
				for(var i = 0; i < table.find('tr').size(); i++) {
					table.find('tr').eq(i).attr('name','row_'+i);
					var tr_i = $('.line_1').find('tr[name=row_'+ i +']').maxHeight();
					$('.line_1').find('tr[name=row_'+ i +']').height(tr_i);
				}
			});
			
			$('.line_2').each(function(){
				var table = $(this).find('table');
				for(var i = 0; i < table.find('tr').size(); i++) {
					table.find('tr').eq(i).attr('name','row_'+i);
					var tr_i = $('.line_2').find('tr[name=row_'+ i +']').maxHeight();
					$('.line_2').find('tr[name=row_'+ i +']').height(tr_i);
				}
			});
			
			$('.line_3').each(function(){
				var table = $(this).find('table');
				for(var i = 0; i < table.find('tr').size(); i++) {
					table.find('tr').eq(i).attr('name','row_'+i);
					var tr_i = $('.line_3').find('tr[name=row_'+ i +']').maxHeight();
					$('.line_3').find('tr[name=row_'+ i +']').height(tr_i);
				}
			});

			$('.line_4').each(function(){
				var table = $(this).find('table');
				for(var i = 0; i < table.find('tr').size(); i++) {
					table.find('tr').eq(i).attr('name','row_'+i);
					var tr_i = $('.line_4').find('tr[name=row_'+ i +']').maxHeight();
					$('.line_4').find('tr[name=row_'+ i +']').height(tr_i);
				}
			});

			$('.line_5').each(function(){
				var table = $(this).find('table');
				for(var i = 0; i < table.find('tr').size(); i++) {
					table.find('tr').eq(i).attr('name','row_'+i);
					var tr_i = $('.line_5').find('tr[name=row_'+ i +']').maxHeight();
					$('.line_5').find('tr[name=row_'+ i +']').height(tr_i);
				}
			});
		}
	});
});

	//-------------- Випадання груп з характеристиками -----------------
	$(function() {
		if($('.trigger_link').length){
			$('.trigger_link').click(function(){
				var rowClass = $(this).attr('name');
				if($(this).hasClass('close_row')){
					$(this).removeClass('close_row');
					$(this).closest('.grid_stabil').find('.'+rowClass).slideDown();
					return false;
				} else {
					$(this).addClass('close_row');
					$(this).closest('.grid_stabil').find('.'+rowClass).slideUp();
					return false;
				}
			});
		}
	});

	$(function(){
		if($('.trigger_link_a').length){
			$('.trigger_link_a').click(function(e){
				e.preventDefault();
				var tbody = $(this).parents('.red-tbl').find('tbody');
				if(tbody.hasClass('nono')){
					tbody.removeClass('nono');
					tbody.slideDown();
					return false;
				} else {
					tbody.addClass('nono');
					tbody.slideUp();
					return false;
				}
			});
		}
	});


	//-------------- Функція закриття та скролу за допомогою стрілок ліво/право -----------------

		function compare(width) {

			var main = $('.compare-container'),
				prev = main.find('.line_scroll_prev'),
				next = main.find('.line_scroll_next'),
				slider = main.find('.compare_line'),
				slide = slider.find('.grid_stabil'),
				minSlides = 4,
				slideWidth = 270,
				visibleWidth = slideWidth*minSlides,
				slidesNumber = slide.length,
				sliderWidth = slideWidth*slidesNumber,
				sliderPosition = slider.position().left,
				newSliderPosition;
			
			if (width > 1400) {
				slider.width(slideWidth*slidesNumber);
				
				function manageArrow(){
					var left = visibleWidth - slider.width();
					var slidesNumber = slider.find('.grid_stabil').length;

					if(slider.position().left === left || slider.position().left < left){
						next.addClass('disabled');
					} else if(slider.find('.grid_stabil').length < 5) {
						next.addClass('disabled');
					} else {
						next.removeClass('disabled');
					}
					if(slider.position().left === 0){
						prev.addClass('disabled');
					} else {
						prev.removeClass('disabled');
					}
					if(slide.length < 5){
						prev.addClass('disabled');
						next.addClass('disabled');
					}

					if(slidesNumber <= minSlides){
						slider.
							animate({left:0}, 500, function(){
								// manageArrow();
							});
							prev.addClass('disabled');
					}
				}
				manageArrow();

				//Роздаємо дата-атрибути колонкам
				for(var i=0; i < slidesNumber; i++){
					slider.find('.grid_stabil').eq(i).attr('data-nums',i);
				}

				//Клік по стрілці вперед
				$(document).on('click', '.line_scroll_next', function(){

					newSliderPosition = slider.position().left-slideWidth;

					if(!slider.is(':animated') && !next.hasClass('disabled')){
						slider.
							animate({left:newSliderPosition}, 500, function(){
								manageArrow();
							});
					}

					return false;

				});

				//Клік по стрілці назад
				$(document).on('click', '.line_scroll_prev', function(){

					newSliderPosition = slideWidth + slider.position().left;

					if(!slider.is(':animated') && !prev.hasClass('disabled')){
						slider.
							animate({left:newSliderPosition}, 500, function(){
								manageArrow();
							});
					}

					return false;

				});

				//-------------- Закриття колонки з характеристиками -----------------

				$(document).on('click', '.close-car-desc', function(){

					var el = $(this),
						closing = el.parents('.grid_stabil');

					closing.remove();
					
					slider.width(slideWidth * slider.find('.grid_stabil').length);

					
					// var xx = slider.width() - slideWidth;

					for(var i=0; i < slider.find('.grid_stabil').length; i++){
						slider.find('.grid_stabil').eq(i).attr('data-nums',i);
					}

					if(slider.find('.grid_stabil').length == 0){
						main.addClass('nothing-to-compare');
					}

					var b = (-1)*slider.position().left + visibleWidth;
					if(slider.find('.grid_stabil').length > 4){
						if(b > slider.width()){
							var spl = slider.position().left;
							slider.animate({left:spl+slideWidth},500);
						}
					}

					manageArrow();

					return false;
				});

				//----- sticky head -----
				$(window).on('scroll',function(){
					if ($(window).width() >1400) {
						var main = $('.compare-container'),//
							mainTop = main.offset().top,//
							leftArrow = main.find('.line_scroll_prev'),//
							rightArrow = main.find('.line_scroll_next'),//
							empty = main.find('.compare_character .empty_box'),//
							parNames = main.find('.compare_character .compare_table.line_1'),
							parName = parNames.find('.car-dscrpt'),
							slider = main.find('.compare_line'),
							slide = slider.find('.grid_stabil'),
							carDescr = slide.find('.compare_table.line_1'),
							carDescrHeight = carDescr.height(),
							carName = carDescr.find('.car-dscrpt'),
							carNameHeight = carName.height(),
							head = slide.find('.car-desc-head'),
							headHeight = head.height(),
							top = slide.offset().top,
							stickyHeader = main.parents('body').find('.mainheader-bottom.sticky').height(),
							scrlTop = $(window).scrollTop(),
							h = scrlTop+stickyHeader,//
							headTop = h-top,
							ht = headTop+headHeight;
						if(top < h){
							$('.compare-container').find('.line_1').find('.car-dscrpt').addClass('grey');
							head.css({
								'position':'absolute',
								'width':'270px',
								'z-index':'2',
								'top':headTop
							});
							empty.css({
								'position':'absolute',
								'width':'270px',
								'z-index':'2',
								'top':headTop
							});
							parName.css({
								'position':'absolute',
								'width':'270px',
								'height':carNameHeight,
								'z-index':'2',
								'top':ht
							});
							carName.css({
								'position':'absolute',
								'width':'270px',
								'height':carNameHeight,
								'z-index':'2',
								'top':ht
							});
							carName.find('td').css({
								'width':'270px',
								'height':carNameHeight
							});
							leftArrow.css({
								'top':headTop+89
							});
							rightArrow.css({
								'top':headTop+89
							});
							$('.compare_table.line_1').css({
								'padding-top':'280px'
							});
						} else {
							$('.compare-container').find('.line_1').find('.car-dscrpt').removeClass('grey');
							head.removeAttr("style");
							empty.removeAttr("style");
							parName.css({
								'position':'initial'
							});
							carName.css({
								'position':'initial'
							});
							carName.find('td').removeAttr("style");
							leftArrow.removeAttr("style");
							rightArrow.removeAttr("style");
							$('.compare_table.line_1').css({
								'padding-top':'0px'
							});
						}
					};
					
					
				});
			}
			else {
				slider.removeAttr("style");

				$(document).on('click', '.close-car-desc', function(){

					$(this).closest('.grid_stabil').remove();

					return false;
				});

			}

		}
		var windowWidth = $('.page-container').width();
		
		if ($('.compare-container').length) {
			compare(windowWidth);
		};
		
		$(window).on('resize', function() {
			windowWidth = $('.page-container').width();
			
			if ($('.compare-container').length) {
				compare(windowWidth);
			};
		});
		


	//--------------- Go Up Arrow ---------------------
		
		$(window).load(function(){
			var linkUp = $('#go_up');
			setTimeout(function(){
				$(window).scroll(function () {
					currentPosition = $(this).scrollTop();
					posBottom = $('.mainfooter').offset().top - 500;
					// console.log(posBottom);

					if ( currentPosition > 300 && currentPosition < posBottom ) {
						linkUp.attr('data-pos','hide').removeAttr('style').css({'display':'block'});
					} else if( currentPosition > 300 && currentPosition > posBottom ) {
						linkUp.attr('data-pos','hide').removeAttr('style').css({'display':'block'});
						//linkUp.removeAttr('style').css({'display':'block','position':'absolute','bottom':'auto','top':posBottom});
					} else {
						linkUp.attr('data-pos','show').removeAttr('style').css({'display':'none'});
					}

				});
			},1000);
			// linkUp.click(function () {
			$(document).on('click','#go_up',function () {
				$('body,html').animate({scrollTop: 0}, 800);
				return false;
			});
		});
	

	

	// ------------- Дозавантаження при натиску на "Посмотреть все марки" ------------

	// if($('.cars-brands-block').length) {
	// 	var par = $(this).find('.cars-brands-list'),
	// 		h = par.height(),
	// 		eh = par.find('.cb-item').height(),
	// 		meh = eh+20,
	// 		trig = $(this).find('.show-more-brands');


	// 	if (par.hasClass('closed')) {
	// 		par.css('max-height',meh);
	// 	} else {
	// 		// oh = '500px';
	// 	}

	// 	$(document).on('click', trig, function () {

	// 		if(par.hasClass('closed')){
	// 			// par.cs
	// 			par.animate({'max-height': h}, 200);

	// 			setTimeout(function () {
	// 				par.removeClass('closed');
	// 			}, 200);
				
	// 			trig.addClass('opened').html(trig.attr('data-stext'));
				
	// 		} else {
	// 			par.addClass('closed');
	// 			trig.removeClass('opened').html(trig.attr('data-ftext'));
	// 			par.animate({'max-height': meh}, 200)
	// 		}

	// 		return false;
	// 	});
	// }

	if($('.cars-brands-block').length) {
		var par = $(this).find('.to-upload'),
			h = par.height(),
			opentrig = $(this).find('.show-more-brands'),
			minh = 0;
			console.log(h);
		if (par.hasClass('closed')) {
			par.css('max-height',minh);
		}

		$(document).on('click', '.cars-brands-block .show-more-brands', function () {
			if(par.hasClass('closed')){
				par.animate({'max-height': h}, 200);
				setTimeout(function () {
					par.removeClass('closed');
				}, 200);
				opentrig.addClass('opened').html(opentrig.attr('data-stext'));
			} else {
				par.addClass('closed');
				opentrig.removeClass('opened').html(opentrig.attr('data-ftext'));
				par.animate({'max-height': minh}, 200)
			}
			return false;
		});
	}


	
//	------------------------------------------------


	// if (navigator.userAgent.indexOf('Windows') != -1) {
	if (navigator.userAgent.indexOf('Mac OS X') != -1) {
	  $("body").addClass("osx");
	} else {
	  // $("body").addClass("pc");
	}


	//--------- Якщо є хлібні крихти - підтягуємо columns вверх ----
	if($('.breadcrumbs').length){
		$('body').find('.columns').css('margin-top','0');
	}


	//------------- Modal PopUp on the Main Page ------------

	if($('.modal-advisor').length){
		var trig = $('.modal-trig'),
			popUp = $('.modal-advisor'),
			ol = popUp.find('.modal-advisor-overlay');
		$(document).on('click', '.modal-trig', function(){
			trig.parents('body').find(popUp).css({
				// 'display':'block',
				'visibility':'visible',
				'opacity':'1'
			});

			if($('.modal-advisor .section').height() > $(window).height()){
				$('.modal-advisor').addClass('scroll-overlay');
				var st = $(window).scrollTop();
				$('.modal-advisor .section').css({
					'top':st+20 + 'px'
				});
			}
			return false;
		});
		$(document).on('click','.modal-advisor-overlay', function(){
			ol.parent().css({
				// 'display':'none',
				'visibility':'hidden',
				'opacity':'0'
			});
			$('.modal-advisor').removeClass('scroll-overlay');
			return false;
		});

	}


	//-------------- Політ назви автівки у гараж ----------------

	if($('.complect-tbl').length){
		$(document).on('click','.complect-tbl .icon-car', function(e){
			e.preventDefault();
			var el = $(this),
				gar = el.parents('body').find('.start'),
				ngar = el.parents('body').find('.nstart'),
				garTop = gar.offset().top,
				name = el.parent().find('.td-car-name'),
				posTop = el.offset().top,
				posLeft = el.offset().left,
				ngarNewTop = posTop - ngar.offset().top,
				ww = posTop - gar.offset().top,
				vw = $(window).width(),
				lm = (vw - 1400)/2,
				y = ngar.is(':hidden') ? garTop : ngarNewTop,
				x = ngar.is(':hidden') ? gar.offset().left : ngar.offset().left - lm;
				
			if(el.is('.green')){
				return false;
			} else {
				name.
				clone().
				css({
				'position':'absolute',
				'z-index':'99999',
				'display':'inline-block',
				'vertical-align':'middle',
				'background': '#e3e3e3',
				'border':'none',
				'min-height':'51px',
				'padding':'17px',
				// 'min-width':'100px',
				// 'max-width':'440px',
				'width':'240px',
				'text-align':'center'
				// 'height':'auto'
			}).
				appendTo(el).
					animate({
						opacity: 0,
						// display: 'inline-block', 
						// background: '#e3e3e3',
						// opacity: 1, 
						left: x, 
						bottom: ngarNewTop, 
						// width: 'auto', 
						height: 50
						},1000,'easeInCubic',function(){
							$(this).remove();
							return false;
						}
					);
				el.addClass('green');
			}
			
		});
	}

	//------ Sticky side-banner -------
	if($('.sidebar>.widget.sticky-banner').length){
		var wLength = $('.sidebar>.widget.sticky-banner').length;
		$( ".sidebar>.widget.sticky-banner").eq(wLength-1).wrapAll( "<div class='sidebar_hcSticky' />");
		$(window).on('scroll resize',function(){
			var topS    = $( ".sidebar_hcSticky" ).offset().top - $(window).scrollTop();
	        var bottom = $( ".mainfooter" ).offset().top - 120;
	        var width = $('.sidebar').outerWidth();
	        var tot = $(window).scrollTop() + $( ".sidebar_hcSticky .widget.sticky-banner" ).height() + 200;
	        var fin  = bottom - $( ".sidebar_hcSticky .widget.sticky-banner" ).height() - $( ".sidebar_hcSticky" ).offset().top - 113;//81

	        var top = ($(window).scrollTop() - $( ".sidebar_hcSticky" ).offset().top) + 82;


	        if(topS < 83 &&  $(window).width() > 900) {
	        	//moment of stoping sticky scrolling
	            if(bottom < tot) {
	                $( ".sidebar_hcSticky .widget.sticky-banner" ).css({
	                    "position"  : "absolute",
	                    "top"       : fin + "px",
	                    "left"      : "0px",
	                    "width"     : width + "px"
	                });
	            } else {
	            	//moment of stick
	                $( ".sidebar_hcSticky .widget.sticky-banner" ).css({
	                    "position"  : "absolute",
	                    "top"       : top,//114
	                    "left"      : "0px",
	                    "width"     : width + "px"
	                });
	            }
	        } else {
	            $( ".sidebar_hcSticky .widget.sticky-banner" ).removeAttr("style");
	        }
		});
	}

	//------ Multi-choise in de-select on main ----
	$(document).on('change','.multi-choise', function(){
		var wrapper = $(this).parents('.de-select-filter'),
			txt = "";
		wrapper.find('.multi-choise').each(function(){
			if ($(this).is(':checked')) {
				txt = txt + $(this).parent().find('label').html() + ", ";
			}
		});
		var txt = txt.substring(0, txt.length - 2);
		wrapper.find('dt').find('span').html(txt);
	});

	//------ multi-price choise on main --------------
	if($('.from-to').length){
		$(document).on('click','.from-to a',function(){
			var fromTo = $(this).parents('.from-to'),
				blockFrom = fromTo.find('.prs-from'),
				blockTo = fromTo.find('.prs-to');
			var el = $(this);
			$(this).parent().find('.current-price').each(function(){
				$(this).removeClass('current-price');
			});
			el.addClass('current-price');
			var ftxt = el.parents('.from').find('.current-price').html(),
				stxt = el.parents('.to').find('.current-price').html();
				// priceFrom = ;
			if(el.parents('.from').find('.current-price').length){
				blockFrom.html('от ' + ftxt);
			}
			if(el.parents('.to').find('.current-price').length){
				blockTo.html('до ' + stxt);
			}
		});
	}

	//	===============================================================================================
	//	Video click play
	//	===============================================================================================
	if ($('.video-start').length) {
		$('.video-start').each(function () {
			var bg = $(this).attr('href'),
				link = bg.split('=')[1];
			var	thumb = 'http://img.youtube.com/vi/' + link + '/0.jpg',
				thumbLink = thumb.toString();
			$(this).removeAttr('style');
			$(this).append('<span style="background-image: url(http://img.youtube.com/vi/' + link + '/0.jpg);"></span>');
			console.log(thumbLink);
		});
	}
	$(document).on('click', '.video-start', function () {
		var el = $(this),
			parent = el.parent(),
			video_href = el.attr('href'),
			video_id = video_href.split('=')[1];
			// return false;
		parent.html('<iframe src="http://www.youtube.com/embed/' + video_id + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
		return false;
	});



//	----------sort search results-----------------------

	$(document).on('click', '.sort_by', function(){

		$(this).parents('table').find('.sorted-col').removeClass('sorted-col');
		$(this).addClass('sorted-col');

		var sortIndex = $(this).index();



		if($(this).hasClass('asc')){

			$(this).parents('.complect-tbl').find('tbody tr').each(function(){
				var thisitem = $(this);
				var item = parseFloat($(this).find('td').eq(sortIndex).find('.sort_val').text());
				for(var i = 0; i < thisitem.parents('.complect-tbl').find('tbody tr').length; i++){

					if(item < thisitem.parents('.complect-tbl').find('tbody tr').eq(i).find('td').eq(sortIndex).find('.sort_val').text()){
						var newit = thisitem.clone();
						console.log(newit);

						thisitem.parents('.complect-tbl').find('tbody tr').eq(i).before(newit);
						thisitem.remove();

					}
				}

			});
			$(this).removeClass('asc').addClass('desc');
		}
		else if($(this).hasClass('desc')){
			$(this).parents('.complect-tbl').find('tbody tr').each(function(){
				var thisitem = $(this);
				var item = parseFloat($(this).find('td').eq(sortIndex).find('.sort_val').text());
				for(var i = 0; i < thisitem.parents('.complect-tbl').find('tbody tr').length; i++){

					if(item > thisitem.parents('.complect-tbl').find('tbody tr').eq(i).find('td').eq(sortIndex).find('.sort_val').text()){
						var newit = thisitem.clone();
						console.log(newit);

						thisitem.parents('.complect-tbl').find('tbody tr').eq(i).before(newit);
						thisitem.remove();

					}
				}
			});
			$(this).removeClass('desc').addClass('asc');
		}

	});



	if($('.scrolllpane').length){
		$('.scrolllpane').jScrollPane({});
	}

	//	===============================================================================================
	//	mobile menu toggle
	//	===============================================================================================

	$(document).on('click', function() {
		$('.mainnav').removeClass('is-open');
		$('.js-hamb').removeClass('is-open');
	});

	$('.mainnav').on('click', function(event) {
		event.stopPropagation();
	});

	$('.js-hamb').on('click', function(event) {
		event.stopPropagation();
		if ($(this).hasClass('is-open')) {
			$('.mainnav').removeClass('is-open');
			$(this).removeClass('is-open');
		}
		else {
			$('.mainnav').addClass('is-open');
			$(this).addClass('is-open');
		}
		
	});

	//	===============================================================================================
	//	mobile unchor navigation toggle
	//	===============================================================================================

	$('.js-borthead-btn').on('click', function() {
		if ($(this).hasClass('is-open')) {
			$(this).removeClass('is-open');
			$('.bothead-nav').slideUp(200);
		}
		else {
			$(this).addClass('is-open');
			$('.bothead-nav').slideDown(200);
		}
	});

	$('.js-borthead-s-btn').on('click', function() {
		if ($(this).hasClass('is-open')) {
			$(this).removeClass('is-open');
			$('.header-search-btns').slideUp(200);
		}
		else {
			$(this).addClass('is-open');
			$('.header-search-btns').slideDown(200);
		}
	});



});