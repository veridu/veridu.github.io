 $(document).ready(function() {
    $(window).scroll( function(){
        $('.bottomMenu').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
    });
});
 
 $(document).ready(function (){
            $("#click-1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#headline-1").offset().top
                }, 500);
            });
            $("#click-1").hover(function (){
                $('#click-1').css( 'cursor', 'pointer' );
            });
            $("#click-1").on({
                mouseenter: function(){
                    $("#click-1").css("background-color", "#f2f2f2");
                },
                mouseleave: function(){
                    $("#click-1").css("background-color", "#fff");
                }
            });
        });

 $(document).ready(function (){
            $("#click-2").click(function (){
                $('html, body').animate({
                    scrollTop: $("#headline-2").offset().top
                }, 500);
            });
            $("#click-2").hover(function (){
                $('#click-2').css( 'cursor', 'pointer' );
            });
            $("#click-2").on({
                mouseenter: function(){
                    $("#click-2").css("background-color", "#f2f2f2");
                },
                mouseleave: function(){
                    $("#click-2").css("background-color", "#fff");
                }
            });
        });

  $(document).ready(function (){
            $("#click-3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#headline-3").offset().top
                }, 500);
            });
            $("#click-3").hover(function (){
                $('#click-3').css( 'cursor', 'pointer' );
            });
            $("#click-3").on({
                mouseenter: function(){
                    $("#click-3").css("background-color", "#f2f2f2");
                },
                mouseleave: function(){
                    $("#click-3").css("background-color", "#fff");
                }
            });
        });

   $(document).ready(function (){
            $("#click-4").click(function (){
                $('html, body').animate({
                    scrollTop: $("#headline-4").offset().top
                }, 500);
            });
            $("#click-4").hover(function (){
                $('#click-4').css( 'cursor', 'pointer' );
            });
            $("#click-4").on({
                mouseenter: function(){
                    $("#click-4").css("background-color", "#f2f2f2");
                },
                mouseleave: function(){
                    $("#click-4").css("background-color", "#fff");
                }
            });
        });

    $(document).ready(function (){
            $("#click-5").click(function (){
                $('html, body').animate({
                    scrollTop: $("#headline-5").offset().top
                }, 500);
            });
            $("#click-5").hover(function (){
                $('#click-5').css( 'cursor', 'pointer' );
            });
            $("#click-5").on({
                mouseenter: function(){
                    $("#click-5").css("background-color", "#f2f2f2");
                },
                mouseleave: function(){
                    $("#click-5").css("background-color", "#fff");
                }
            });
        });

    $(document).ready(function (){
            $("#click-6").click(function (){
                $('html, body').animate({
                    scrollTop: $("#headline-6").offset().top
                }, 500);
            });
            $("#click-6").hover(function (){
                $('#click-6').css( 'cursor', 'pointer' );
            });
            $("#click-6").on({
                mouseenter: function(){
                    $("#click-6").css("background-color", "#f2f2f2");
                },
                mouseleave: function(){
                    $("#click-6").css("background-color", "#fff");
                }
            });
        });

    $(document).ready(function (){
            $("#click-7").click(function (){
                $('html, body').animate({
                    scrollTop: $("#headline-7").offset().top
                }, 500);
            });
            $("#click-7").hover(function (){
                $('#click-7').css( 'cursor', 'pointer' );
            });
            $("#click-7").on({
                mouseenter: function(){
                    $("#click-7").css("background-color", "#f2f2f2");
                },
                mouseleave: function(){
                    $("#click-7").css("background-color", "#fff");
                }
            });
        });

    $(document).ready(function (){
        $("#back-to-top").click(function (){
            $("html, body").animate({ scrollTop: 0 
            }, 500);
        });
    });
    $(document).ready(function (){
        $("#back-to-top-2").click(function (){
            $("html, body").animate({ scrollTop: 0 
            }, 500);
        });
    });
    $(document).ready(function (){
        $("#back-to-top-3").click(function (){
            $("html, body").animate({ scrollTop: 0 
            }, 500);
        });
    });
    $(document).ready(function (){
        $("#back-to-top-4").click(function (){
            $("html, body").animate({ scrollTop: 0 
            }, 500);
        });
    });
    $(document).ready(function (){
        $("#back-to-top-5").click(function (){
            $("html, body").animate({ scrollTop: 0 
            }, 500);
        });
    });
    $(document).ready(function (){
        $("#back-to-top-6").click(function (){
            $("html, body").animate({ scrollTop: 0 
            }, 500);
        });
    });
    $(document).ready(function (){
        $("#back-to-top-7").click(function (){
            $("html, body").animate({ scrollTop: 0 
            }, 500);
        });
    });