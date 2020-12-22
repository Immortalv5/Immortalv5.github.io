var Dot = function(el, toRotate, period) {
        this.el = el;
        this.toRotate = toRotate;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    Dot.prototype.tick = function() {
        var fullTxt = this.toRotate;

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, 0);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<div>Working on IT'+this.txt+'</div>';
        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        delta = 500;
        }
        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function(){
      var elements = document.getElementsByClassName('Dot');
      for (var i=0; i<elements.length; i++) {
          var period = elements[i].getAttribute('data-period');
          new Dot(elements[i],'......🎈', period);
      }
    }

    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
