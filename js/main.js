$(document).ready(function(){
    $( "#go" ).click(function() {
        $( "#block" ).animate({
            width: "70%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 1500 );
    });

    $("#flip").hover(function(){
        $("#panel").slideDown("slow");
    });

    $(".story-demo-hover-1").on({
        mouseenter: function(){
            $(".story-demo-text-1").css("height", "23%");
            $(".story-demo-text-1").css("background-color", "#f2f2f2");
        },
        mouseleave: function(){
            $(".story-demo-text-1").css("height", "23%");
            $(".story-demo-text-1").css("background-color", "#fff");
        },
        click: function(){
        }
    });

    $(".story-demo-hover-2").on({
        mouseenter: function(){
            $(".story-demo-text-2").css("height", "23%");
            $(".story-demo-text-2").css("background-color", "#f2f2f2");
        },
        mouseleave: function(){
            $(".story-demo-text-2").css("height", "23%");
            $(".story-demo-text-2").css("background-color", "#fff");
        },
        click: function(){
        }
    });

    $(".story-demo-hover-3").on({
        mouseenter: function(){
            $(".story-demo-text-3").css("height", "23%");
            $(".story-demo-text-3").css("background-color", "#f2f2f2");
        },
        mouseleave: function(){
            $(".story-demo-text-3").css("height", "23%");
            $(".story-demo-text-3").css("background-color", "#fff");
        },
        click: function(){
        }
    });

    $(".div333331").hide();
    $(".button-contac33t").click(function(){
        $(".d22iv1").fadeToggle("slow");
    }, "fast"); 

    $(".story-news-1").on({
        mouseenter: function(){
            $(".news-line-1").animate({
                height: '40px'
            }, 100);
        },
        mouseleave: function(){
             $(".news-line-1").animate({
                height: '2px'
            }, 100);
        },
    });

    $(".story-news-2").on({
        mouseenter: function(){
            $(".news-line-2").animate({
                height: '40px'
            }, 100);
        },
        mouseleave: function(){
             $(".news-line-2").animate({
                height: '2px'
            }, 100);
        },
    });

    $(".story-news-3").on({
        mouseenter: function(){
            $(".news-line-3").animate({
                height: '40px'
            }, 100);
        },
        mouseleave: function(){
             $(".news-line-3").animate({
                height: '2px'
            }, 100);
        },
    });

    $(".story-news-4").on({
        mouseenter: function(){
            $(".news-line-4").animate({
                height: '40px'
            }, 100);
        },
        mouseleave: function(){
             $(".news-line-4").animate({
                height: '2px'
            }, 100);
        },
    });

    $(".story-news-5").on({
        mouseenter: function(){
            $(".news-line-5").animate({
                height: '40px'
            }, 100);
        },
        mouseleave: function(){
             $(".news-line-5").animate({
                height: '2px'
            }, 100);
        },
    });


    $(".story-thought-leadership-1").on({
        mouseenter: function(){
            $(".thought-leadership-line-1").animate({
                height: '40px'
            }, 100);
        },
        mouseleave: function(){
            $(".thought-leadership-line-1").animate({
                height: '2px'
            }, 100);
        },
    });
    $(".story-thought-leadership-2").on({
        mouseenter: function(){
            $(".thought-leadership-line-2").animate({
                height: '40px'
            }, 100);
        },
        mouseleave: function(){
            $(".thought-leadership-line-2").animate({
                height: '2px'
            }, 100);
        },
    });


    $(".iam-video-hover").on({
        mouseenter: function(){
            $(".iam-video-text-hover").css("background-color", "#D8D8D8");
        },
        mouseleave: function(){    
            $(".iam-video-text-hover").css("background-color", "#fff");
        },
        click: function(){
        }
    });


    $(".intro-video-hover").on({
        mouseenter: function(){
            $(".intro-video-text-hover").css("background-color", "#D8D8D8");
        },
        mouseleave: function(){    
            $(".intro-video-text-hover").css("background-color", "#fff");
        },
        click: function(){
        }
    });
    $(".philip-video-hover").on({
        mouseenter: function(){
            $(".philip-video-text-hover").css("background-color", "#D8D8D8");

            
        },
        mouseleave: function(){    
            $(".philip-video-text-hover").css("background-color", "#fff");
        },
        click: function(){
        }
    });
    $(".ecommerce-video-hover").on({
        mouseenter: function(){
            $(".ecommerce-video-text-hover").css("background-color", "#D8D8D8");

            
        },
        mouseleave: function(){    
            $(".ecommerce-video-text-hover").css("background-color", "#fff");
        },
        click: function(){
        }
    });

    $(".worldpay-video-hover").on({
        mouseenter: function(){
            $(".story-video-text-hover").css("background-color", "#D8D8D8");

            
        },
        mouseleave: function(){
            $(".story-video-text-hover").css("background-color", "#fff");
        },
        click: function(){
        }
    });

    $(".report-video-hover").on({
        mouseenter: function(){
            $(".story-report-text-hover").css("background-color", "#D8D8D8");

            
        },
        mouseleave: function(){
            $(".story-report-text-hover").css("background-color", "#f1f1f1");
        },
        click: function(){
        }
    });

    $(".accept-video-hover").on({
        mouseenter: function(){
            $(".accept-video-text-hover").css("background-color", "#D8D8D8");

            
        },
        mouseleave: function(){
            $(".accept-video-text-hover").css("background-color", "#fff");
        },
        click: function(){
        }
    });

    $(".about-video-hover").on({
        mouseenter: function(){
            $(".about-video-text-hover").css("background-color", "#D8D8D8");

            
        },
        mouseleave: function(){
            $(".about-video-text-hover").css("background-color", "#fff");
        },
        click: function(){
        }
    });


    $(".onboarding-product").on({
        mouseenter: function(){
            $(".onboarding-line").css("height", "4px");            
        },
        mouseleave: function(){
            $(".onboarding-line").css("height", "2px");
        },
        click: function(){
        }
    });

    $(".activity-product").on({
        mouseenter: function(){
            $(".activity-line").css("height", "4px");            
        },
        mouseleave: function(){
            $(".activity-line").css("height", "2px");
        },
        click: function(){
        }
    });


    $(".transaction-product").on({
        mouseenter: function(){
            $(".transaction-line").css("height", "4px");            
        },
        mouseleave: function(){
            $(".transaction-line").css("height", "2px");
        },
        click: function(){
        }
    });

    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 10) {
        $('.navigation-border').fadeIn();
      } else {
        $('.navigation-border').fadeOut();
      }
    });

    ;( function( $ ) {
        $( '.swipebox' ).swipebox();
        $( '.swipebox-video' ).swipebox();
    } )( $ );
});

// useful globals

/**
* Function that tracks a click on an outbound link in Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label. Setting the transport method to 'beacon' lets the hit be sent
* using 'navigator.sendBeacon' in browser that support it.
*/
window.trackOutboundLink = function(element) {
    var url = element.href;

    ga('send', 'event', 'outbound', 'click', url, {
        'transport': 'beacon',
        'hitCallback': function(){
        // document.location = url;
        }
    });
}

/**
 * Pushes to drip.
 *
 * @param      {string}  eventLabel  The event label
 * @param      {string}  type        The type
 */
window.pushToDrip = function (eventLabel, type) {
    if (! window._dcq)
        return;

    type = type || 'track';
    if (typeof(_dcq) !== 'undefined') {
        _dcq.push(
            [
                type,
                eventLabel,
                {
                    value: 2000
                }
            ]
        );
    }
};