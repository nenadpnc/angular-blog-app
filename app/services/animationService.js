(function () {
    'use strict';

    angular.module('blogApp').factory('animationService', animationService);

    function animationService() {
        return {
            init: init
        };

        var $articleMenu = $('#articleMenu');

        function init() {

            var blocks = [];

            $('.post__wrapper_helper--notloaded').each(function (i, block) {
                blocks.push(block);
            });

            var add_class = function (block, class_name, delay) {
                setTimeout(function () {
                    $(block).addClass(class_name);
                }, delay);
            };

            for (var i = 0; i < blocks.length; i++) {
                add_class(blocks[i], 'post__wrapper_helper--animated', i * 200);
            }

            $('.post__wrapper_helper--notloaded').each(function (i, wrapper) {
                wrapper = $(wrapper);
                var img = wrapper.find('p > img')[0];
                if (img) {
                    // wait for the images
                    var timer = setInterval(function () {
                        // when the image is laoded
                        if (img.complete) {
                            // stop periodical calls
                            clearInterval(timer);
                            // generate the image wrapper
                            var src = $(img).attr('src');
                            img.remove();
                            var img_container = $('<div class="post__image el__transition_long" style="background-image: url(\'' + src + '\')"></div>');
                            img_container.appendTo(wrapper);
                            wrapper.removeClass('post__wrapper_helper--notloaded');
                            // add class with delay
                            setTimeout(function () {
                                img_container.addClass('post__image--loaded');
                            }, 250);
                        }
                    }, 500);
                    // add necessary mouse events
                    wrapper.mouseenter(function () {
                        wrapper.addClass('post__wrapper_helper--hover');
                    });

                    wrapper.mouseleave(function () {
                        wrapper.removeClass('post__wrapper_helper--hover');
                    });
                } else {
                    // where there is no image - display the text directly
                    wrapper.addClass('post__wrapper_helper--hover');
                }
            });
        };
    }
}());