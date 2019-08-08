var modal = document.getElementById('myModal');
      var modalvideo = document.getElementById('my-pop-up');
      var btn = document.getElementsByClassName('btn');
      var span = document.getElementsByClassName("close")[0];

      for (var i=0;i<btn.length; i++) {
        btn[i].onclick = function() {
          modal.style.display = "block";
          var attrbtn = this.getAttribute('data-video-src');
          modalvideo.setAttribute('src', attrbtn);
        }
      }

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }