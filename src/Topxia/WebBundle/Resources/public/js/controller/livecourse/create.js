define(function(require, exports, module) {
    var Validator = require('bootstrap.validator');
    require('common/validator-rules').inject(Validator);
    var Notify = require('common/bootstrap-notify');
    require("jquery.bootstrap-datetimepicker");

	exports.run = function() {

        var $modal = $('#live-lesson-form').parents('.modal');
        var validator = new Validator({
            element: '#live-lesson-form',
            autoSubmit: false,
            onFormValidated: function(error, results, $form) {
            	if (error) {
            		return false;
            	}
				$.post($form.attr('action'), $form.serialize(), function(html) {
					$modal.modal('hide');
					Notify.success('保存成功');
				}).error(function(){
					Notify.danger('操作失败');
				});
            }
        });

        Validator.addRule('romote_check',
            function() {
                var element = $('#live_lesson_time_check');
                var startTime = $('[name=startTime]').val();
                var endTime = $('[name=endTime]').val();
                if(startTime && endTime) {
                    url = element.data('url');
                    $.get(url, {startTime:startTime,endTime:endTime}, function(response) {
                        console.log(response.message);
                    }, 'json');
                }else{
                    return true;
                }
            });

        validator.addItem({
            element: '#live-title-field',
            required: true
        });

        validator.addItem({
            element: '[name=startTime]',
            required: true,
            rule:'romote_check',
            errormessageRequired: '请输入直播的开始时间'
        });   

        validator.addItem({
            element: '[name=endTime]',
            required: true,
            rule:'romote_check',
            errormessageRequired: '请输入直播的结束时间'
        });

        $("[name=startTime]").datetimepicker({
        }).on('hide', function(ev){

            var setStartDate = $("[name=startTime]").val();
            if(setStartDate) {
                $("[name=endTime]").datetimepicker('setStartDate', setStartDate);
            }
            console.log('startTime');
            validator.query('[name=startTime]').execute();
        });

        $("[name=endTime]").datetimepicker({
        }).on('hide', function(ev){
            console.log('endTime');
            var setEndDate = $("[name=endTime]").val();
             if(setEndDate) {
                $("[name=startTime]").datetimepicker('setEndDate', setEndDate);
            }
            validator.query('[name=endTime]').execute();
        });

	};

});